from datetime import datetime
from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from pydantic import BaseModel

from database import get_db
from models.config import LLMConfig, VoiceConfig
from models.user import User
from routers.auth import get_current_user

router = APIRouter(prefix="/config", tags=["config"])


class LLMConfigRequest(BaseModel):
    provider: str = "offline"
    api_key: str = ""
    model: str = ""


class VoiceConfigRequest(BaseModel):
    stt_provider: str = "webspeech"
    tts_provider: str = "webspeech"
    stt_api_key: str = ""
    tts_api_key: str = ""
    tts_voice: str = ""


@router.get("/llm")
async def get_llm_config(current_user: User = Depends(get_current_user), db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(LLMConfig).where(LLMConfig.user_id == current_user.id))
    config = result.scalar_one_or_none()
    if not config:
        return {"provider": "offline", "api_key": "", "model": ""}
    return {"provider": config.provider, "api_key": config.api_key, "model": config.model}


@router.put("/llm")
async def save_llm_config(req: LLMConfigRequest, current_user: User = Depends(get_current_user), db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(LLMConfig).where(LLMConfig.user_id == current_user.id))
    config = result.scalar_one_or_none()
    if config:
        config.provider = req.provider
        config.api_key = req.api_key
        config.model = req.model
        config.updated_at = datetime.utcnow()
    else:
        config = LLMConfig(user_id=current_user.id, provider=req.provider, api_key=req.api_key, model=req.model)
        db.add(config)
    await db.commit()
    return {"ok": True}


@router.get("/voice")
async def get_voice_config(current_user: User = Depends(get_current_user), db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(VoiceConfig).where(VoiceConfig.user_id == current_user.id))
    config = result.scalar_one_or_none()
    if not config:
        return {"stt_provider": "webspeech", "tts_provider": "webspeech", "stt_api_key": "", "tts_api_key": "", "tts_voice": ""}
    return {
        "stt_provider": config.stt_provider, "tts_provider": config.tts_provider,
        "stt_api_key": config.stt_api_key, "tts_api_key": config.tts_api_key, "tts_voice": config.tts_voice,
    }


@router.put("/voice")
async def save_voice_config(req: VoiceConfigRequest, current_user: User = Depends(get_current_user), db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(VoiceConfig).where(VoiceConfig.user_id == current_user.id))
    config = result.scalar_one_or_none()
    if config:
        config.stt_provider = req.stt_provider
        config.tts_provider = req.tts_provider
        config.stt_api_key = req.stt_api_key
        config.tts_api_key = req.tts_api_key
        config.tts_voice = req.tts_voice
        config.updated_at = datetime.utcnow()
    else:
        config = VoiceConfig(user_id=current_user.id, **req.model_dump())
        db.add(config)
    await db.commit()
    return {"ok": True}
