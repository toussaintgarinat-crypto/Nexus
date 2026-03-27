from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from pydantic import BaseModel

from database import get_db
from models.channel import Channel, ChannelType
from models.world import Member
from routers.auth import get_current_user
from models.user import User

router = APIRouter(prefix="/channels", tags=["channels"])


class CreateChannelRequest(BaseModel):
    name: str
    type: ChannelType = ChannelType.mixed
    category: str = "Général"
    description: str = ""


class ChannelResponse(BaseModel):
    id: int
    world_id: int
    name: str
    description: str
    type: str
    category: str
    position: int
    is_default: bool


async def check_world_access(world_id: int, user_id: int, db: AsyncSession):
    result = await db.execute(select(Member).where(Member.world_id == world_id, Member.user_id == user_id))
    if not result.scalar_one_or_none():
        raise HTTPException(status_code=403, detail="Accès refusé")


@router.get("/world/{world_id}", response_model=list[ChannelResponse])
async def list_channels(world_id: int, current_user: User = Depends(get_current_user), db: AsyncSession = Depends(get_db)):
    await check_world_access(world_id, current_user.id, db)
    result = await db.execute(select(Channel).where(Channel.world_id == world_id).order_by(Channel.category, Channel.position))
    channels = result.scalars().all()
    return [ChannelResponse(
        id=c.id, world_id=c.world_id, name=c.name, description=c.description,
        type=c.type, category=c.category, position=c.position, is_default=c.is_default,
    ) for c in channels]


@router.post("/world/{world_id}", response_model=ChannelResponse)
async def create_channel(world_id: int, req: CreateChannelRequest, current_user: User = Depends(get_current_user), db: AsyncSession = Depends(get_db)):
    await check_world_access(world_id, current_user.id, db)
    result = await db.execute(select(Channel).where(Channel.world_id == world_id))
    count = len(result.scalars().all())
    channel = Channel(
        world_id=world_id, name=req.name, description=req.description,
        type=req.type, category=req.category, position=count,
    )
    db.add(channel)
    await db.commit()
    await db.refresh(channel)
    return ChannelResponse(
        id=channel.id, world_id=channel.world_id, name=channel.name,
        description=channel.description, type=channel.type,
        category=channel.category, position=channel.position, is_default=channel.is_default,
    )


@router.delete("/{channel_id}")
async def delete_channel(channel_id: int, current_user: User = Depends(get_current_user), db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(Channel).where(Channel.id == channel_id))
    channel = result.scalar_one_or_none()
    if not channel:
        raise HTTPException(status_code=404, detail="Canal introuvable")
    await check_world_access(channel.world_id, current_user.id, db)
    await db.delete(channel)
    await db.commit()
    return {"ok": True}
