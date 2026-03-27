import os
from fastapi import APIRouter, Depends
from pydantic import BaseModel
from livekit.api import AccessToken, VideoGrants

from routers.auth import get_current_user
from models.user import User

router = APIRouter(prefix="/tokens", tags=["tokens"])

LIVEKIT_URL = os.getenv("LIVEKIT_URL", "ws://localhost:7880")
LIVEKIT_API_KEY = os.getenv("LIVEKIT_API_KEY", "devkey")
LIVEKIT_API_SECRET = os.getenv("LIVEKIT_API_SECRET", "secret")


class TokenRequest(BaseModel):
    channel_id: int
    world_id: int


@router.post("/livekit")
async def get_livekit_token(req: TokenRequest, current_user: User = Depends(get_current_user)):
    room_name = f"world-{req.world_id}-channel-{req.channel_id}"
    identity = f"user-{current_user.id}"

    token = AccessToken(LIVEKIT_API_KEY, LIVEKIT_API_SECRET) \
        .with_identity(identity) \
        .with_name(current_user.display_name or current_user.email) \
        .with_grants(VideoGrants(room_join=True, room=room_name))

    return {"token": token.to_jwt(), "url": LIVEKIT_URL, "room": room_name}
