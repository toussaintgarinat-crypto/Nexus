from datetime import datetime
from sqlalchemy import String, DateTime, ForeignKey, Enum
from sqlalchemy.orm import Mapped, mapped_column
from database import Base
import enum


class WorldType(str, enum.Enum):
    web = "web"
    mobile = "mobile"
    ai = "ai"
    backend = "backend"
    extension = "extension"
    saas = "saas"
    xr = "xr"
    plugin = "plugin"
    custom = "custom"


class MemberRole(str, enum.Enum):
    owner = "owner"
    admin = "admin"
    member = "member"


class World(Base):
    __tablename__ = "worlds"

    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column(String(100))
    emoji: Mapped[str] = mapped_column(String(10), default="🌐")
    color: Mapped[str] = mapped_column(String(20), default="#3B82F6")
    description: Mapped[str] = mapped_column(String(500), default="")
    type: Mapped[WorldType] = mapped_column(Enum(WorldType), default=WorldType.custom)
    owner_id: Mapped[int] = mapped_column(ForeignKey("users.id"))
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)


class Member(Base):
    __tablename__ = "members"

    id: Mapped[int] = mapped_column(primary_key=True)
    user_id: Mapped[int] = mapped_column(ForeignKey("users.id"))
    world_id: Mapped[int] = mapped_column(ForeignKey("worlds.id"))
    role: Mapped[MemberRole] = mapped_column(Enum(MemberRole), default=MemberRole.member)
    joined_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)


class Invitation(Base):
    __tablename__ = "invitations"

    id: Mapped[int] = mapped_column(primary_key=True)
    world_id: Mapped[int] = mapped_column(ForeignKey("worlds.id"))
    code: Mapped[str] = mapped_column(String(20), unique=True)
    created_by: Mapped[int] = mapped_column(ForeignKey("users.id"))
    max_uses: Mapped[int] = mapped_column(default=0)
    use_count: Mapped[int] = mapped_column(default=0)
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)
