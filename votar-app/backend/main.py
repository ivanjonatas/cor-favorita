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

redis_host = os.getenv("REDIS_HOST", "localhost")
r = redis.Redis(host=redis_host, port=6379, decode_responses=True)

@app.post("/vote/{color}")
async def vote(color: str):
    if color in ["azul", "verde"]:
        r.hincrby("votes", color, 1)
        return {"status": "sucesso", "voto": color}
    return {"status": "erro", "msg": "Cor inválida"}