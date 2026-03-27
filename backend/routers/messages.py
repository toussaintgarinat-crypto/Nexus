import json
from fastapi import APIRouter, Depends, HTTPException, WebSocket, WebSocketDisconnect
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from pydantic import BaseModel
from datetime import datetime
from typing import Any

from database import get_db, AsyncSessionLocal
from models.channel import Channel, Message
from models.world import Member
from models.user import User
from routers.auth import get_current_user, SECRET_KEY, ALGORITHM
from jose import jwt, JWTError

router = APIRouter(prefix="/messages", tags=["messages"])

# In-memory connection manager
class ConnectionManager:
    def __init__(self):
        self.active: dict[int, list[WebSocket]] = {}

    async def connect(self, channel_id: int, ws: WebSocket):
        await ws.accept()
        self.active.setdefault(channel_id, []).append(ws)

    def disconnect(self, channel_id: int, ws: WebSocket):
        if channel_id in self.active:
            self.active[channel_id].discard(ws) if hasattr(self.active[channel_id], 'discard') else None
            try:
                self.active[channel_id].remove(ws)
            except ValueError:
                pass

    async def broadcast(self, channel_id: int, data: dict):
        for ws in self.active.get(channel_id, []):
            try:
                await ws.send_json(data)
            except Exception:
                pass

    async def broadcast_others(self, channel_id: int, sender: WebSocket, data: dict):
        for ws in self.active.get(channel_id, []):
            if ws is sender:
                continue
            try:
                await ws.send_json(data)
            except Exception:
                pass


manager = ConnectionManager()


@router.get("/{channel_id}")
async def get_messages(channel_id: int, limit: int = 50, current_user: User = Depends(get_current_user), db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(Message).where(Message.channel_id == channel_id).order_by(Message.created_at.desc()).limit(limit))
    messages = result.scalars().all()
    out = []
    for m in reversed(messages):
        u_result = await db.execute(select(User).where(User.id == m.user_id))
        u = u_result.scalar_one_or_none()
        out.append({
            "id": m.id,
            "content": m.content,
            "created_at": m.created_at.isoformat(),
            "user": {"id": m.user_id, "avatar_emoji": u.avatar_emoji if u else "❓", "display_name": u.display_name if u else "?"},
        })
    return out


@router.websocket("/ws/{channel_id}")
async def websocket_channel(channel_id: int, ws: WebSocket, token: str = ""):
    # Validate token
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        user_id = int(payload["sub"])
    except (JWTError, KeyError, ValueError):
        await ws.close(code=1008)
        return

    await manager.connect(channel_id, ws)
    # Fetch user info once for typing events
    async with AsyncSessionLocal() as db:
        u_result = await db.execute(select(User).where(User.id == user_id))
        ws_user = u_result.scalar_one_or_none()

    user_info = {
        "id": user_id,
        "avatar_emoji": ws_user.avatar_emoji if ws_user else "❓",
        "display_name": ws_user.display_name if ws_user else "?",
    }

    try:
        while True:
            data = await ws.receive_text()
            parsed = json.loads(data)
            msg_type = parsed.get("type", "message")

            # Typing indicator — broadcast to others, don't save
            if msg_type == "typing":
                await manager.broadcast_others(channel_id, ws, {
                    "type": "typing",
                    "user": user_info,
                })
                continue

            content = parsed.get("content", "").strip()
            if not content:
                continue

            async with AsyncSessionLocal() as db:
                msg = Message(channel_id=channel_id, user_id=user_id, content=content)
                db.add(msg)
                await db.commit()
                await db.refresh(msg)

            await manager.broadcast(channel_id, {
                "type": "message",
                "id": msg.id,
                "content": content,
                "created_at": msg.created_at.isoformat(),
                "user": user_info,
            })
    except WebSocketDisconnect:
        manager.disconnect(channel_id, ws)
