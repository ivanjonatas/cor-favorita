from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import redis
import os

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

r = redis.Redis(host=os.getenv("REDIS_HOST", "localhost"), port=6379, decode_responses=True)

@app.get("/resultado")
async def get_results():
    votes = r.hgetall("votes")
    return {
        "azul": int(votes.get("azul", 0)),
        "verde": int(votes.get("verde", 0))
    }