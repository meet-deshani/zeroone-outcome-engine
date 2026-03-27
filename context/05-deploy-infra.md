# Deploy & Infrastructure

## Current Setup
| Item | Value |
|------|-------|
| **Framework** | Vite + React 18 + TypeScript (SPA) |
| **Hosting** | Cloudflare Pages |
| **Domain** | zeroonedotsai.consulting (bought on Namecheap) |
| **DNS** | Namecheap → Cloudflare (NS delegated) |
| **Repo** | https://github.com/meet-deshani/zeroone-outcome-engine |
| **Branch strategy** | main = production, feature branches for all changes |

## Build Pipeline
```bash
npm install
npm run build
# → Vite builds to dist/
# → Puppeteer prerender script creates static HTML for 32 routes
# → dist/ uploaded to Cloudflare Pages CDN
```

Build takes ~2-3 min (puppeteer prerender adds ~1-2 min).

## Deployment Flow (after setup)
```
Developer pushes branch
       ↓
GitHub PR → Meet reviews → merges to main
       ↓
GitHub Actions fires → build → deploy to Cloudflare Pages
       ↓
zeroonedotsai.consulting live in ~3 minutes ✅
```

## Environment Variables
Set in Cloudflare Pages dashboard AND as GitHub Actions secrets:
```
VITE_TELEGRAM_BOT_TOKEN=<bot_token>
VITE_TELEGRAM_CHAT_ID=<chat_id>
```

## GitHub Actions Setup (Required Secrets)
In GitHub repo → Settings → Secrets → Actions:
```
CLOUDFLARE_API_TOKEN   ← Create at dash.cloudflare.com → My Profile → API Tokens
CLOUDFLARE_ACCOUNT_ID  ← Cloudflare dashboard right sidebar
VITE_TELEGRAM_BOT_TOKEN
VITE_TELEGRAM_CHAT_ID
```

## Manual Deploy (if CI breaks)
```bash
npm run build
npx wrangler pages deploy dist --project-name=<project-name>
```

## Cloudflare Pages Config (pages.json)
```json
{
  "installCommand": "npm install",
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite"
}
```

## SPA Routing
Cloudflare Pages serves SPA via `public/_redirects`:
```
/* /index.html 200
```
This ensures React Router handles all routes client-side.

## Prerender Script
`scripts/prerender.mjs` — Puppeteer renders 32 routes to static HTML.
This ensures Google and AI crawlers see correct page titles, meta, and JSON-LD
without waiting for JavaScript to execute.

## Domain / DNS
- Domain registered on Namecheap
- Namecheap NS records point to Cloudflare nameservers
- All DNS managed in Cloudflare dashboard
- SSL: Cloudflare handles SSL automatically (Full or Full Strict mode)
