# Use uma imagem leve de Python
FROM python:3.11-slim

WORKDIR /app

# Copia o requirements e instala as dependências
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copia o código fonte
COPY . .

# Expõe a porta (8001 para Voter ou 8002 para Result)
EXPOSE 8000

# Comando para rodar a aplicação
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]