import json
from datetime import datetime
from fastapi import APIRouter, Depends, HTTPException
from fastapi.responses import StreamingResponse
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from pydantic import BaseModel
from typing import Optional, AsyncIterator
import httpx

from database import get_db
from models.channel import AIMessage, CanvasState, Channel
from models.world import Member
from models.user import User
from routers.auth import get_current_user

router = APIRouter(prefix="/ai", tags=["ai"])

CHANNEL_SYSTEM_PROMPTS = {
    "architecture": "Tu es un expert en architecture logicielle. Tu aides à concevoir des systèmes robustes, scalables et maintenables. Tu utilises des schémas et diagrammes pour illustrer tes explications.",
    "ui-composants": "Tu es un expert frontend spécialisé en composants UI, React, et design system. Tu génères du code propre et accessible.",
    "authentification": "Tu es un expert en sécurité et authentification. Tu expliques JWT, OAuth2, sessions et RBAC avec des exemples concrets.",
    "base-de-donnees": "Tu es un expert en bases de données. Tu maîtrises SQL, NoSQL, optimisation de requêtes et modélisation de données.",
    "deploiement": "Tu es un expert DevOps. Tu maîtrises Docker, CI/CD, Kubernetes et les stratégies de déploiement.",
    "llm-integration": "Tu es un expert en intégration de LLM (OpenAI, Anthropic, Groq). Tu expliques les APIs, le streaming, et les bonnes pratiques.",
    "rag-documents": "Tu es un expert en RAG (Retrieval-Augmented Generation), embeddings et bases vectorielles.",
    "general": "Tu es un assistant développeur polyvalent. Tu peux enseigner et aider à coder dans tous les domaines du développement.",
}

DEFAULT_SYSTEM = """Tu es un assistant développeur expert intégré dans Nexus, un espace de travail pour créer des applications.

Tu as deux modes :
- **Mode Enseignement** : tu expliques les concepts, tu donnes des exemples, tu poses des questions pour vérifier la compréhension
- **Mode Construction** : tu génères du code fonctionnel, tu crées des fichiers, tu implémente des features

Tu détectes automatiquement le mode selon la demande :
- "explique", "comment", "pourquoi", "qu'est-ce que" → Mode Enseignement
- "crée", "génère", "code", "fais", "implémente" → Mode Construction

Quand tu génères des schémas ou diagrammes, utilise le format Mermaid dans des blocs ```mermaid```.

Réponds toujours en français sauf si on te demande autrement.
"""


class ChatRequest(BaseModel):
    channel_id: int
    message: str
    provider: str = "offline"
    api_key: str = ""
    model: str = ""
    canvas_state: Optional[str] = None  # Excalidraw JSON string


class CanvasSaveRequest(BaseModel):
    data: str  # Excalidraw JSON


# ─────────────────────────── helpers ────────────────────────────

def _offline_response(user_msg: str) -> str:
    return f"""Je suis en mode **hors-ligne** (aucun provider LLM configuré).

Pour activer l'IA :
1. Va dans **Paramètres → LLM**
2. Choisis un provider (Groq est gratuit avec un compte)
3. Entre ta clé API

Ta question : *{user_msg[:200]}*

Configure un provider pour obtenir une vraie réponse !"""


def _build_messages(system_prompt: str, history: list, user_message: str) -> list:
    msgs = [{"role": "system", "content": system_prompt}]
    for h in history:
        msgs.append({"role": h.role, "content": h.content})
    msgs.append({"role": "user", "content": user_message})
    return msgs


async def _build_context(channel_id: int, user_id: int, req: ChatRequest, db: AsyncSession):
    ch_result = await db.execute(select(Channel).where(Channel.id == channel_id))
    channel = ch_result.scalar_one_or_none()
    channel_name = channel.name if channel else "general"

    system_prompt = DEFAULT_SYSTEM
    for key, prompt in CHANNEL_SYSTEM_PROMPTS.items():
        if key in channel_name:
            system_prompt += f"\n\nContexte du canal **#{channel_name}** : {prompt}"
            break

    if req.canvas_state:
        system_prompt += f"\n\nL'utilisateur partage un canvas Excalidraw. État actuel du schéma (JSON) :\n```json\n{req.canvas_state[:2000]}\n```\nTiens compte de ce schéma dans ta réponse."

    hist_result = await db.execute(
        select(AIMessage).where(AIMessage.channel_id == channel_id, AIMessage.user_id == user_id)
        .order_by(AIMessage.created_at.desc()).limit(20)
    )
    history = list(reversed(hist_result.scalars().all()))
    return _build_messages(system_prompt, history, req.message)


# ─────────────────────────── non-streaming ───────────────────────

async def call_llm(messages: list, provider: str, api_key: str, model: str) -> str:
    if provider == "offline" or not provider:
        return _offline_response(messages[-1]["content"] if messages else "")
    if provider == "groq":
        return await _call_openai_compatible(messages, api_key, model or "llama-3.3-70b-versatile", "https://api.groq.com/openai/v1/chat/completions")
    if provider == "openai":
        return await _call_openai_compatible(messages, api_key, model or "gpt-4o-mini", "https://api.openai.com/v1/chat/completions")
    if provider == "gemini":
        return await _call_gemini(messages, api_key, model or "gemini-1.5-flash")
    if provider == "mistral":
        return await _call_openai_compatible(messages, api_key, model or "mistral-small-latest", "https://api.mistral.ai/v1/chat/completions")
    if provider == "openrouter":
        return await _call_openrouter(messages, api_key, model or "meta-llama/llama-3.3-70b-instruct:free")
    if provider == "ollama":
        return await _call_openai_compatible(messages, api_key or "", model or "llama3", "http://localhost:11434/v1/chat/completions")
    return _offline_response(messages[-1]["content"] if messages else "")


async def _call_openai_compatible(messages: list, api_key: str, model: str, url: str) -> str:
    headers = {"Content-Type": "application/json"}
    if api_key:
        headers["Authorization"] = f"Bearer {api_key}"
    async with httpx.AsyncClient(timeout=60) as client:
        r = await client.post(url, json={"model": model, "messages": messages}, headers=headers)
        r.raise_for_status()
        return r.json()["choices"][0]["message"]["content"]


async def _call_openrouter(messages: list, api_key: str, model: str) -> str:
    headers = {
        "Content-Type": "application/json",
        "HTTP-Referer": "https://nexus.dev",
        "X-Title": "Nexus",
    }
    if api_key:
        headers["Authorization"] = f"Bearer {api_key}"
    async with httpx.AsyncClient(timeout=60) as client:
        r = await client.post(
            "https://openrouter.ai/api/v1/chat/completions",
            json={"model": model, "messages": messages},
            headers=headers,
        )
        r.raise_for_status()
        return r.json()["choices"][0]["message"]["content"]


async def _call_gemini(messages: list, api_key: str, model: str) -> str:
    url = f"https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent?key={api_key}"
    contents = []
    for m in messages:
        if m["role"] == "system":
            continue
        contents.append({"role": "user" if m["role"] == "user" else "model", "parts": [{"text": m["content"]}]})
    async with httpx.AsyncClient(timeout=60) as client:
        r = await client.post(url, json={"contents": contents})
        r.raise_for_status()
        return r.json()["candidates"][0]["content"]["parts"][0]["text"]


# ─────────────────────────── streaming ───────────────────────────

async def _stream_openai_compatible(messages: list, api_key: str, model: str, url: str, extra_headers: dict = None) -> AsyncIterator[str]:
    headers = {"Content-Type": "application/json"}
    if api_key:
        headers["Authorization"] = f"Bearer {api_key}"
    if extra_headers:
        headers.update(extra_headers)
    async with httpx.AsyncClient(timeout=60) as client:
        async with client.stream("POST", url, json={"model": model, "messages": messages, "stream": True}, headers=headers) as r:
            r.raise_for_status()
            async for line in r.aiter_lines():
                if not line.startswith("data: "):
                    continue
                data_str = line[6:].strip()
                if data_str == "[DONE]":
                    break
                try:
                    chunk = json.loads(data_str)
                    delta = chunk["choices"][0]["delta"].get("content") or ""
                    if delta:
                        yield delta
                except Exception:
                    pass


async def _stream_llm(messages: list, provider: str, api_key: str, model: str) -> AsyncIterator[str]:
    if provider == "offline" or not provider:
        yield _offline_response(messages[-1]["content"] if messages else "")
        return
    if provider == "groq":
        async for chunk in _stream_openai_compatible(messages, api_key, model or "llama-3.3-70b-versatile", "https://api.groq.com/openai/v1/chat/completions"):
            yield chunk
    elif provider == "openai":
        async for chunk in _stream_openai_compatible(messages, api_key, model or "gpt-4o-mini", "https://api.openai.com/v1/chat/completions"):
            yield chunk
    elif provider == "mistral":
        async for chunk in _stream_openai_compatible(messages, api_key, model or "mistral-small-latest", "https://api.mistral.ai/v1/chat/completions"):
            yield chunk
    elif provider == "openrouter":
        async for chunk in _stream_openai_compatible(
            messages, api_key, model or "meta-llama/llama-3.3-70b-instruct:free",
            "https://openrouter.ai/api/v1/chat/completions",
            {"HTTP-Referer": "https://nexus.dev", "X-Title": "Nexus"},
        ):
            yield chunk
    elif provider == "ollama":
        async for chunk in _stream_openai_compatible(messages, api_key or "", model or "llama3", "http://localhost:11434/v1/chat/completions"):
            yield chunk
    elif provider == "gemini":
        # Gemini doesn't use OpenAI-compatible streaming — fall back to single call
        result = await _call_gemini(messages, api_key, model or "gemini-1.5-flash")
        yield result
    else:
        yield _offline_response(messages[-1]["content"] if messages else "")


# ─────────────────────────── endpoints ───────────────────────────

@router.get("/openrouter/models")
async def get_openrouter_models(api_key: str = "", current_user: User = Depends(get_current_user)):
    """Récupère la liste des modèles gratuits disponibles sur OpenRouter."""
    headers = {"HTTP-Referer": "https://nexus.dev", "X-Title": "Nexus"}
    if api_key:
        headers["Authorization"] = f"Bearer {api_key}"
    try:
        async with httpx.AsyncClient(timeout=15) as client:
            r = await client.get("https://openrouter.ai/api/v1/models", headers=headers)
            r.raise_for_status()
            data = r.json()
        free_models = [
            {
                "id": m["id"],
                "name": m.get("name", m["id"]),
                "context_length": m.get("context_length", 0),
                "description": m.get("description", "")[:120],
            }
            for m in data.get("data", [])
            if m["id"].endswith(":free") or m.get("pricing", {}).get("prompt") == "0"
        ]
        free_models.sort(key=lambda x: x["name"])
        return {"models": free_models}
    except Exception as e:
        raise HTTPException(status_code=502, detail=f"Impossible de récupérer les modèles OpenRouter : {str(e)}")


@router.post("/chat")
async def chat(req: ChatRequest, current_user: User = Depends(get_current_user), db: AsyncSession = Depends(get_db)):
    messages = await _build_context(req.channel_id, current_user.id, req, db)
    try:
        response = await call_llm(messages, req.provider, req.api_key, req.model)
    except Exception as e:
        response = f"Erreur lors de l'appel au LLM : {str(e)}"

    db.add(AIMessage(channel_id=req.channel_id, user_id=current_user.id, role="user", content=req.message))
    db.add(AIMessage(channel_id=req.channel_id, user_id=current_user.id, role="assistant", content=response))
    await db.commit()
    return {"response": response, "channel_id": req.channel_id}


@router.post("/chat/stream")
async def chat_stream(req: ChatRequest, current_user: User = Depends(get_current_user), db: AsyncSession = Depends(get_db)):
    """Réponse en streaming SSE — le texte arrive chunk par chunk."""
    messages = await _build_context(req.channel_id, current_user.id, req, db)
    collected: list[str] = []

    async def generate():
        try:
            async for chunk in _stream_llm(messages, req.provider, req.api_key, req.model):
                collected.append(chunk)
                yield f"data: {json.dumps({'content': chunk})}\n\n"
        except Exception as e:
            yield f"data: {json.dumps({'error': str(e)})}\n\n"

        # Save full conversation to history once streaming is done
        full_response = "".join(collected)
        if full_response:
            db.add(AIMessage(channel_id=req.channel_id, user_id=current_user.id, role="user", content=req.message))
            db.add(AIMessage(channel_id=req.channel_id, user_id=current_user.id, role="assistant", content=full_response))
            await db.commit()

        yield "data: [DONE]\n\n"

    return StreamingResponse(
        generate(),
        media_type="text/event-stream",
        headers={"Cache-Control": "no-cache", "X-Accel-Buffering": "no"},
    )


@router.get("/history/{channel_id}")
async def get_history(channel_id: int, current_user: User = Depends(get_current_user), db: AsyncSession = Depends(get_db)):
    result = await db.execute(
        select(AIMessage).where(AIMessage.channel_id == channel_id, AIMessage.user_id == current_user.id)
        .order_by(AIMessage.created_at)
    )
    messages = result.scalars().all()
    return [{"role": m.role, "content": m.content, "created_at": m.created_at.isoformat()} for m in messages]


@router.delete("/history/{channel_id}")
async def clear_history(channel_id: int, current_user: User = Depends(get_current_user), db: AsyncSession = Depends(get_db)):
    from sqlalchemy import delete
    await db.execute(delete(AIMessage).where(AIMessage.channel_id == channel_id, AIMessage.user_id == current_user.id))
    await db.commit()
    return {"ok": True}


@router.delete("/history/{channel_id}/last")
async def delete_last_exchange(channel_id: int, current_user: User = Depends(get_current_user), db: AsyncSession = Depends(get_db)):
    """Supprime le dernier échange (message user + réponse assistant) pour régénérer."""
    result = await db.execute(
        select(AIMessage).where(AIMessage.channel_id == channel_id, AIMessage.user_id == current_user.id)
        .order_by(AIMessage.created_at.desc()).limit(2)
    )
    last_two = result.scalars().all()
    for msg in last_two:
        await db.delete(msg)
    await db.commit()
    return {"ok": True, "deleted": len(last_two)}


@router.get("/canvas/{channel_id}")
async def get_canvas(channel_id: int, current_user: User = Depends(get_current_user), db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(CanvasState).where(CanvasState.channel_id == channel_id))
    canvas = result.scalar_one_or_none()
    return {"data": canvas.data if canvas else "{}", "channel_id": channel_id}


@router.post("/canvas/{channel_id}")
async def save_canvas(channel_id: int, req: CanvasSaveRequest, current_user: User = Depends(get_current_user), db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(CanvasState).where(CanvasState.channel_id == channel_id))
    canvas = result.scalar_one_or_none()
    if canvas:
        canvas.data = req.data
        canvas.updated_at = datetime.utcnow()
        canvas.updated_by = current_user.id
    else:
        canvas = CanvasState(channel_id=channel_id, data=req.data, updated_by=current_user.id)
        db.add(canvas)
    await db.commit()
    return {"ok": True}
