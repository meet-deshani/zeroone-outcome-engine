# Tech Stack

> **Access:** TEAM

---

## Overview

ZeroOne operates two technology stacks: the **marketing website** (this codebase) and the **AI infrastructure** (the production backend). Both are documented below.

---

## Marketing Website (Outcome Engine)

| Layer | Technology | Version | Purpose |
|-------|-----------|---------|---------|
| **Framework** | React | 18.3 | UI component library |
| **Build Tool** | Vite | Latest | Fast dev server and bundler |
| **Language** | TypeScript | 5.8 | Type-safe JavaScript |
| **Styling** | Tailwind CSS | 3.4 | Utility-first CSS framework |
| **Components** | shadcn/ui | Latest | Radix UI-based component library |
| **Routing** | React Router DOM | v6 | Client-side routing |
| **Animation** | Framer Motion | Latest | Scroll and interaction animations |
| **Forms** | React Hook Form + Zod | Latest | Form handling with schema validation |
| **SEO** | React Helmet Async | Latest | Dynamic meta tags, structured data |
| **Analytics** | Google Analytics 4 | G-6YY65MG3TJ | Traffic and event tracking |
| **Notifications** | Telegram Bot API | — | Form submission alerts |
| **Deployment** | Cloudflare Pages | — | Global CDN, edge caching |

### Key Design Decisions
- **CSS Custom Properties (HSL):** All colors defined as HSL variables for shadcn/ui compatibility
- **Code-Splitting:** Blog pages and Private AI sub-pages are lazy-loaded for performance
- **Fluid Typography:** Custom Tailwind classes (`text-display-xxl` through `text-body-sm`) for responsive type
- **D.O.T.S. Color System:** Brand colors available as Tailwind utilities (`text-dots-data`, `bg-dots-ops`, etc.)

---

## AI Infrastructure (Production Backend)

### Core Services

| Service | Technology | Purpose |
|---------|-----------|---------|
| **AI Gateway** | OpenClaw | Multi-channel AI conversation management (WhatsApp, Telegram, Web) |
| **AI Models (Cloud)** | Claude (Anthropic), Gemini Pro/Flash (Google) | Cloud AI inference for complex tasks |
| **AI Models (Local)** | Ollama + DeepSeek R1:14b | On-server AI inference, zero cloud cost |
| **Autonomous Agent** | Agent Zero | Multi-step autonomous task execution |
| **Private Search** | SearXNG | Web search without tracking |
| **Chat Interface** | Open WebUI | Browser-based private ChatGPT |
| **Custom APIs** | FastAPI (Python) | Custom endpoint development |
| **Database** | PostgreSQL 17 | Persistent data storage (4 databases) |
| **Reverse Proxy** | nginx | SSL termination, request routing |
| **SSL** | Certbot + Let's Encrypt | Automatic HTTPS certificate management |

### Infrastructure

| Component | Technology | Purpose |
|-----------|-----------|---------|
| **Containerization** | Docker + Docker Compose | Service isolation and orchestration |
| **OS** | Ubuntu 24.04 LTS | Server operating system |
| **Network** | Private Docker Bridge | Container-to-container communication |

---

## AI Model Stack

| Model | Provider | Deployment | Use Case |
|-------|----------|------------|----------|
| **Claude Sonnet 4.5** | Anthropic | Cloud API | CEO role — deep reasoning, strategy |
| **Gemini 3 Pro** | Google | Cloud API | CTO role — code, technical analysis |
| **Gemini 3 Flash** | Google | Cloud API | COO role — fast responses, high volume |
| **DeepSeek R1:14b** | DeepSeek (via Ollama) | Local Server | Team role — offline, private, free |

---

## Development Tools

| Tool | Purpose |
|------|---------|
| **Git + GitHub** | Version control and collaboration |
| **Claude Code** | AI-assisted development |
| **npm** | Package management |
| **ESLint + Prettier** | Code quality and formatting |
| **TypeScript Compiler** | Type checking |

---

## Brand System (Design Tokens)

### Fonts
| Role | Font | Fallback | Usage |
|------|------|----------|-------|
| Display/Headlines | Instrument Serif | Georgia, serif | h1-h6, hero text |
| Body/UI | DM Sans | system-ui, sans-serif | Body text, navigation, buttons |
| Mono/Tags | Space Mono | monospace | D.O.T.S. labels, tags, data |

### Colors
| Name | Hex | Tailwind Class | Usage |
|------|-----|---------------|-------|
| Lavender (Data) | #C8B6FF | `text-dots-data`, `bg-dots-data` | Data pillar content |
| Mint (Operations) | #B8E0D2 | `text-dots-ops`, `bg-dots-ops` | Operations pillar content |
| Peach (Technology) | #FFCDB2 | `text-dots-tech`, `bg-dots-tech` | Tech pillar content |
| Sky (Strategy) | #A2D2FF | `text-dots-strategy`, `bg-dots-strategy` | Strategy pillar content |
| Ink | #191924 | `text-ink`, `bg-ink` | Primary text, dark backgrounds |
| Plum | #2D1B4E | `text-plum`, `bg-plum` | Hovers, premium elements |
| Charcoal | #2A2A3C | — | Footer, dark sections |
| Cream 50 | #FDFCFA | `bg-cream-50` | Page background |
| Sand 200 | #E8E6E0 | `border-sand-200` | Borders, dividers |

---

## Deployment Pipeline

### Website
```
Developer → Git Push → GitHub → Cloudflare Pages → Global CDN
```
- Automatic builds on push to main
- Preview deployments for pull requests
- Edge caching across Cloudflare's global network

### AI Infrastructure
```
Docker Compose → Single Server → All 9 containers
```
- `docker compose up -d` deploys everything
- Container health checks for monitoring
- Manual deployment (not CI/CD) for infrastructure changes
