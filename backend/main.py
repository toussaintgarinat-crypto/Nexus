from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager

from database import init_db
from routers import auth, worlds, channels, messages, ai, tokens, config


@asynccontextmanager
async def lifespan(app: FastAPI):
    await init_db()
    yield


app = FastAPI(title="Nexus API", version="1.0.0", lifespan=lifespan)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:5173", "*"],
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


@app.get("/")
async def root():
    return {"name": "Nexus API", "version": "1.0.0", "status": "running"}
