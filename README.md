# Cor-Favorita System (Cloud Native)

Um sistema de votação simples projetado com arquitetura de microserviços e Redis e pronto para deploy em Kubernetes via Helm.

## 🏗️ Estrutura do Projeto

O projeto é dividido em quatro componentes principais e uma camada de infraestrutura:

```text
├── voter-app/         # App de Votação (Frontend + Backend)
├── result-app/        # App de Resultados (Frontend + Backend)              
└── ops/               # Manifestos Kubernetes e Helm Charts
```

## Stack Utilizadas

### Core
* **Python (FastAPI)**: Backends de alta performance e baixa latência.
* **TypeScript (Vite)**: Interfaces modernas, leves e tipadas.
* **Redis**: Banco de dados in-memory para contagem atômica de votos em tempo real.

### DevOps & Infra
* **Docker**: Conteinerização de todos os serviços.
* **Kubernetes**: Orquestração e escalabilidade dos containers.
* **Helm**: Gerenciamento de pacotes e versionamento do deploy.
* **Nginx**: Servidor web de alta performance para os frontends.