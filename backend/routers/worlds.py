import secrets
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select, delete
from pydantic import BaseModel

from database import get_db
from models.world import World, Member, MemberRole, WorldType, Invitation
from models.channel import Channel, ChannelType
from routers.auth import get_current_user
from models.user import User
from services.world_templates import get_all_templates, get_template

router = APIRouter(prefix="/worlds", tags=["worlds"])


class CreateWorldRequest(BaseModel):
    name: str
    emoji: str = "🌐"
    color: str = "#3B82F6"
    description: str = ""
    type: WorldType = WorldType.custom
    use_template: bool = True


class WorldResponse(BaseModel):
    id: int
    name: str
    emoji: str
    color: str
    description: str
    type: str
    owner_id: int
    role: str


@router.get("/templates")
async def get_templates():
    return get_all_templates()


@router.get("/", response_model=list[WorldResponse])
async def list_worlds(current_user: User = Depends(get_current_user), db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(Member).where(Member.user_id == current_user.id))
    members = result.scalars().all()
    worlds = []
    for m in members:
        w_result = await db.execute(select(World).where(World.id == m.world_id))
        world = w_result.scalar_one_or_none()
        if world:
            worlds.append(WorldResponse(
                id=world.id, name=world.name, emoji=world.emoji,
                color=world.color, description=world.description,
                type=world.type, owner_id=world.owner_id, role=m.role,
            ))
    return worlds


@router.post("/", response_model=WorldResponse)
async def create_world(req: CreateWorldRequest, current_user: User = Depends(get_current_user), db: AsyncSession = Depends(get_db)):
    world = World(
        name=req.name, emoji=req.emoji, color=req.color,
        description=req.description, type=req.type, owner_id=current_user.id,
    )
    db.add(world)
    await db.flush()

    member = Member(user_id=current_user.id, world_id=world.id, role=MemberRole.owner)
    db.add(member)

    # Create default channels from template
    if req.use_template and req.type != WorldType.custom:
        template = get_template(req.type.value)
        if template:
            for i, ch in enumerate(template["channels"]):
                channel = Channel(
                    world_id=world.id,
                    name=ch["name"],
                    description=ch.get("description", ""),
                    type=ChannelType(ch["type"]),
                    category=ch["category"],
                    position=i,
                    is_default=True,
                )
                db.add(channel)

    await db.commit()
    await db.refresh(world)
    return WorldResponse(
        id=world.id, name=world.name, emoji=world.emoji,
        color=world.color, description=world.description,
        type=world.type, owner_id=world.owner_id, role="owner",
    )


@router.delete("/{world_id}")
async def delete_world(world_id: int, current_user: User = Depends(get_current_user), db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(World).where(World.id == world_id))
    world = result.scalar_one_or_none()
    if not world or world.owner_id != current_user.id:
        raise HTTPException(status_code=403, detail="Accès refusé")
    await db.delete(world)
    await db.commit()
    return {"ok": True}


@router.post("/{world_id}/invite")
async def create_invite(world_id: int, current_user: User = Depends(get_current_user), db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(Member).where(Member.world_id == world_id, Member.user_id == current_user.id))
    if not result.scalar_one_or_none():
        raise HTTPException(status_code=403, detail="Accès refusé")
    code = secrets.token_urlsafe(8)
    invite = Invitation(world_id=world_id, code=code, created_by=current_user.id)
    db.add(invite)
    await db.commit()
    return {"code": code}


@router.post("/join/{code}")
async def join_world(code: str, current_user: User = Depends(get_current_user), db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(Invitation).where(Invitation.code == code))
    invite = result.scalar_one_or_none()
    if not invite:
        raise HTTPException(status_code=404, detail="Invitation invalide")
    existing = await db.execute(select(Member).where(Member.world_id == invite.world_id, Member.user_id == current_user.id))
    if existing.scalar_one_or_none():
        raise HTTPException(status_code=400, detail="Déjà membre")
    member = Member(user_id=current_user.id, world_id=invite.world_id, role=MemberRole.member)
    db.add(member)
    invite.use_count += 1
    await db.commit()
    return {"world_id": invite.world_id}
