from fastapi import FastAPI
import redis
from fastapi.middleware.cors import CORSMiddleware
import os

app = FastAPI()
# No Kubernetes, o host será o nome do Service do Redis
# r = redis.Redis(host='redis-service', port=6379, db=0, decode_responses=True)

# Configuração do CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

REDIS_HOST = os.getenv("REDIS_HOST", "redis-service")
REDIS_PORT = int(os.getenv("REDIS_PORT", 6379))

r = redis.Redis(
    host=REDIS_HOST, 
    port=REDIS_PORT, 
    decode_responses=True,
    socket_connect_timeout=5
)

@app.post("/vote/{color}")
async def vote(color: str):
    if color in ["azul", "verde"]:
        r.hincrby("votes", color, 1)
        return {"status": "sucesso", "voto": color}
    return {"status": "erro", "msg": "Cor inválida"}