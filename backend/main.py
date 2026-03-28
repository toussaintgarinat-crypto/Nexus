from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from contextlib import asynccontextmanager
import traceback

from database import init_db
from routers import auth, worlds, channels, messages, ai, tokens, config


@asynccontextmanager
async def lifespan(app: FastAPI):
    await init_db()
    yield


app = FastAPI(title="Nexus API", version="1.0.0", lifespan=lifespan)

ALLOWED_ORIGINS = [
    "http://localhost:3000",
    "http://localhost:5173",
    "https://nexus-dididev.vercel.app",
    "https://frontend-sable-eta-60.vercel.app",
    "https://nexus-app-dididev.vercel.app",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router)
app.include_router(worlds.router)
app.include_router(channels.router)
app.include_router(messages.router)
app.include_router(ai.router)
app.include_router(tokens.router)
app.include_router(config.router)


@app.exception_handler(Exception)
async def global_exception_handler(request: Request, exc: Exception):
    detail = traceback.format_exc()
    print(f"UNHANDLED ERROR: {detail}")
    return JSONResponse(status_code=500, content={"detail": str(exc), "type": type(exc).__name__})


@app.get("/")
async def root():
    return {"name": "Nexus API", "version": "1.0.0", "status": "running"}


@app.get("/health")
async def health():
    return {"status": "ok"}


@app.get("/debug/db")
async def debug_db():
    from database import DATABASE_URL, engine
    from sqlalchemy import text
    masked = DATABASE_URL[:30] + "..." if len(DATABASE_URL) > 30 else DATABASE_URL
    try:
        async with engine.connect() as conn:
            result = await conn.execute(text("SELECT 1"))
            return {"db": "connected", "url_prefix": masked, "result": str(result.fetchone())}
    except Exception as e:
        import traceback
        return {"db": "error", "url_prefix": masked, "error": str(e), "trace": traceback.format_exc()}
