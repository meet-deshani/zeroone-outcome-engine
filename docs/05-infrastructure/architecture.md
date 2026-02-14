# System Architecture

> **Access:** TEAM

---

## Overview

ZeroOne's infrastructure runs on a self-hosted VPS with all services containerized using Docker. The architecture follows a "single server, multiple containers" pattern — everything runs on one machine, communicating over a private network.

---

## High-Level Architecture

```
                         Internet
                            │
                    ┌───────┴───────┐
                    │   DNS / CDN   │
                    │  (Cloudflare) │
                    └───────┬───────┘
                            │
                    ┌───────┴───────┐
                    │    nginx      │
                    │  (Gateway)    │
                    │  SSL + Route  │
                    └───────┬───────┘
                            │
         ┌──────────────────┼──────────────────┐
         │                  │                  │
    ┌────┴────┐       ┌────┴────┐       ┌────┴────┐
    │OpenClaw │       │Open     │       │FastAPI  │
    │(AI Gate)│       │WebUI    │       │(APIs)   │
    └────┬────┘       └────┬────┘       └────┬────┘
         │                  │                  │
         └──────────────────┼──────────────────┘
                            │
              ┌─────────────┼─────────────┐
              │             │             │
         ┌────┴────┐  ┌────┴────┐  ┌────┴────┐
         │ Ollama  │  │Postgres │  │SearXNG  │
         │(Models) │  │ (Data)  │  │(Search) │
         └────┬────┘  └─────────┘  └─────────┘
              │
         ┌────┴────┐
         │Agent    │
         │Zero     │
         └─────────┘

         ┌─────────┐
         │Certbot  │ ← Auto SSL renewal
         └─────────┘
```

---

## Server Specifications

| Component | Specification |
|-----------|--------------|
| **CPU** | 8 Cores |
| **RAM** | 32 GB |
| **OS** | Ubuntu 24.04 LTS |
| **Container Runtime** | Docker + Docker Compose |
| **SSL Provider** | Let's Encrypt (auto-renewed) |
| **Database** | PostgreSQL 17 |
| **Network** | Private Docker bridge |

---

## Docker Container Map

| Container | Purpose | Exposed Ports | Dependencies |
|-----------|---------|:-------------:|-------------|
| **nginx** | Reverse proxy, SSL termination | 80, 443 | — |
| **OpenClaw** | AI conversation gateway | Internal only | Ollama, PostgreSQL |
| **Agent Zero** | Autonomous task executor | Internal only | Ollama |
| **Ollama** | Local AI model inference | Internal only | — |
| **SearXNG** | Private web search | Internal only | — |
| **Open WebUI** | Browser-based AI chat | Internal only | Ollama |
| **FastAPI** | Custom API endpoints | Internal only | PostgreSQL |
| **PostgreSQL** | Data persistence (4 databases) | Internal only | — |
| **Certbot** | SSL certificate automation | — | nginx |

**Key:** Only nginx exposes ports to the internet. All other containers communicate over a private Docker bridge network.

---

## Data Flow

### User Request Flow
```
User (WhatsApp/Telegram/Web)
    ↓
nginx (SSL termination, routing)
    ↓
OpenClaw (channel identification, conversation management)
    ↓
AI Council (model selection based on query complexity)
    ├── Claude (complex reasoning) ← Cloud API
    ├── Gemini Pro (technical tasks) ← Cloud API
    ├── Gemini Flash (quick responses) ← Cloud API
    └── DeepSeek R1 (local/private) ← Ollama (on-server)
    ↓
Response routed back through OpenClaw → nginx → User
```

### AI Agent Task Flow
```
Task received (via OpenClaw or FastAPI)
    ↓
Agent Zero (plans multi-step execution)
    ├── Ollama (AI reasoning for each step)
    ├── SearXNG (web research if needed)
    ├── PostgreSQL (data queries)
    └── FastAPI (external API calls)
    ↓
Results compiled → delivered to user
```

---

## Database Architecture

PostgreSQL 17 runs 4 separate databases:

| Database | Purpose | Primary Users |
|----------|---------|--------------|
| **conversations** | Chat history, message threads | OpenClaw, Open WebUI |
| **knowledge** | RAG documents, embeddings, memories | Agent Zero, OpenClaw |
| **users** | User profiles, preferences, auth | All services |
| **system** | Logs, metrics, configuration | All services |

---

## Network Security

- **External access:** Only port 80 (redirects to 443) and port 443 (HTTPS)
- **Internal communication:** Private Docker bridge network (no public IPs)
- **SSL:** TLS 1.2+ with Let's Encrypt certificates (auto-renewed)
- **Container isolation:** Each container runs in its own namespace
- **No SSH on standard ports** — admin access secured separately

---

## Deployment

The full stack deploys with Docker Compose:

```bash
docker compose up -d    # Start all 9 containers
docker compose ps       # Check status
docker compose logs -f  # Follow logs
docker compose down     # Stop all containers
```

Typical fresh deployment time: under 10 minutes.

---

## Backup Strategy

| What | How | Frequency |
|------|-----|-----------|
| PostgreSQL databases | pg_dump to encrypted backup | Daily |
| Docker volumes | Volume snapshot | Daily |
| Configuration files | Git repository | On every change |
| SSL certificates | Auto-renewed by Certbot | Every 60 days |
| AI model weights | Ollama model store | On model update |

---

## Monitoring

- Container health checks via Docker
- PostgreSQL connection monitoring
- SSL certificate expiry alerts
- Disk space and memory usage tracking
- API response time monitoring via FastAPI middleware
