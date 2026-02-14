# AI Office

> **Access:** TEAM

---

## What It Is

AI Office is a complete AI infrastructure deployed on a single server. 9 Docker containers working together to give you chat, search, automation, databases, APIs, and security — all self-hosted, zero external dependencies.

Think of it as your own private AI office building, where each floor handles a different job.

---

## The 9 Tools

| # | Container | Role | What It Does |
|---|-----------|------|-------------|
| 1 | **nginx** | Gateway | Routes all traffic, handles SSL encryption, serves as the front door |
| 2 | **OpenClaw** | Orchestrator | Manages AI conversations across WhatsApp, Telegram, and web chat |
| 3 | **Agent Zero** | Autonomous Agent | Thinks, plans, and executes multi-step tasks independently |
| 4 | **Ollama** | Local Brain | Runs AI models directly on the server — free inference, no cloud |
| 5 | **SearXNG** | Private Search | Web search engine with zero tracking — no Google/Bing dependency |
| 6 | **Open WebUI** | Chat Interface | Your own private ChatGPT — browser-based AI chat |
| 7 | **FastAPI** | Custom APIs | Build and run custom API endpoints for any integration |
| 8 | **PostgreSQL** | Database | Stores conversations, knowledge, user data across 4 databases |
| 9 | **Certbot** | SSL Security | Automatically renews HTTPS certificates — always encrypted |

---

## Architecture

```
                    Internet
                       │
                       ▼
              ┌────────────────┐
              │     nginx      │ ← SSL termination, routing
              │   (Gateway)    │
              └───────┬────────┘
                      │
        ┌─────────────┼──────────────┐
        │             │              │
        ▼             ▼              ▼
  ┌───────────┐ ┌──────────┐ ┌────────────┐
  │ OpenClaw  │ │Open WebUI│ │  FastAPI    │
  │(Channels) │ │ (Chat UI)│ │ (APIs)     │
  └─────┬─────┘ └────┬─────┘ └─────┬──────┘
        │             │              │
        └─────────────┼──────────────┘
                      │
              ┌───────┴────────┐
              │                │
              ▼                ▼
        ┌──────────┐    ┌──────────┐
        │  Ollama  │    │PostgreSQL│
        │ (Models) │    │  (Data)  │
        └──────────┘    └──────────┘
              │
        ┌─────┼──────┐
        ▼     ▼      ▼
   ┌────────┐ ┌──────────┐ ┌─────────┐
   │Agent   │ │ SearXNG  │ │ Certbot │
   │Zero    │ │ (Search) │ │ (SSL)   │
   └────────┘ └──────────┘ └─────────┘
```

All containers communicate over a private Docker bridge network. No container is directly exposed to the internet except nginx.

---

## Server Specifications

| Spec | Value |
|------|-------|
| **CPU** | 8 Cores |
| **RAM** | 32 GB |
| **OS** | Ubuntu 24.04 LTS |
| **Container Runtime** | Docker with Docker Compose |
| **SSL** | Let's Encrypt (auto-renewed via Certbot) |
| **Database** | PostgreSQL 17 with 4 databases |
| **Network** | Private Docker bridge network |
| **Domains** | Custom domain with auto-SSL |

---

## Container Details

### 1. nginx (Gateway)
- **Purpose:** Front door to the entire system
- **Handles:** SSL termination, request routing, rate limiting, static file serving
- **Config:** Reverse proxy to all internal services

### 2. OpenClaw (Orchestrator)
- **Purpose:** AI conversation gateway
- **Channels:** WhatsApp, Telegram, Web Chat
- **Features:** Model routing, conversation memory, agent dispatch, channel management
- **Config:** Connects to AI Council for model selection and failover

### 3. Agent Zero (Autonomous Agent)
- **Purpose:** Executes multi-step tasks autonomously
- **Capabilities:** Think → Plan → Execute → Verify
- **Use Cases:** Research, code generation, data analysis, automation workflows

### 4. Ollama (Local Brain)
- **Purpose:** Runs AI models locally on the server
- **Models:** DeepSeek R1:14b, custom fine-tuned models
- **Cost:** Zero per-inference cost (runs on server hardware)
- **Privacy:** No data leaves the server

### 5. SearXNG (Private Search)
- **Purpose:** Web search without tracking
- **Features:** Aggregates results from multiple search engines, no user tracking, no ads
- **Privacy:** Search queries never logged or shared with third parties

### 6. Open WebUI (Chat Interface)
- **Purpose:** Browser-based AI chat (like a private ChatGPT)
- **Features:** Conversation history, multiple models, file uploads, code execution
- **Access:** Accessible via browser, no app install needed

### 7. FastAPI (Custom APIs)
- **Purpose:** Build and serve custom API endpoints
- **Use Cases:** Webhooks, integrations, custom automation triggers, data APIs
- **Framework:** Python FastAPI with async support

### 8. PostgreSQL (Database)
- **Purpose:** Persistent data storage
- **Databases:** 4 separate databases for different concerns (conversations, knowledge, users, system)
- **Version:** PostgreSQL 17
- **Backup:** Configurable automated backups

### 9. Certbot (SSL Security)
- **Purpose:** Automatic HTTPS certificate management
- **Provider:** Let's Encrypt (free SSL)
- **Renewal:** Automatic — certificates never expire
- **Standard:** Industry-standard TLS 1.2+

---

## Deployment

The entire AI Office deploys with a single command:

```bash
docker compose up -d
```

All 9 containers start, connect to the private network, and begin serving. Typical deployment time: under 10 minutes for a fresh server.

---

## Benefits

| Benefit | Description |
|---------|-------------|
| **One Server** | Everything runs on a single machine — simple to manage |
| **Zero Dependencies** | No external SaaS subscriptions, no third-party APIs required |
| **Full Control** | You own the server, the code, the data, the models |
| **Cost Predictable** | Fixed server cost, no per-token or per-API-call billing |
| **Privacy** | All data stays on your server, in your network |
| **Portable** | Docker-based — move to any server, any cloud, any location |
