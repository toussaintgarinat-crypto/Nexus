from datetime import datetime
from sqlalchemy import String, DateTime, ForeignKey
from sqlalchemy.orm import Mapped, mapped_column
from database import Base


class LLMConfig(Base):
    __tablename__ = "llm_configs"

    id: Mapped[int] = mapped_column(primary_key=True)
    user_id: Mapped[int] = mapped_column(ForeignKey("users.id"), unique=True)
    provider: Mapped[str] = mapped_column(String(50), default="offline")
    api_key: Mapped[str] = mapped_column(String(500), default="")
    model: Mapped[str] = mapped_column(String(100), default="")
    updated_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)


class VoiceConfig(Base):
    __tablename__ = "voice_configs"

    id: Mapped[int] = mapped_column(primary_key=True)
    user_id: Mapped[int] = mapped_column(ForeignKey("users.id"), unique=True)
    stt_provider: Mapped[str] = mapped_column(String(50), default="webspeech")
    tts_provider: Mapped[str] = mapped_column(String(50), default="webspeech")
    stt_api_key: Mapped[str] = mapped_column(String(500), default="")
    tts_api_key: Mapped[str] = mapped_column(String(500), default="")
    tts_voice: Mapped[str] = mapped_column(String(100), default="")
    updated_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)
