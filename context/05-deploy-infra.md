# Deploy & Infrastructure

## Current Setup
| Item | Value |
|------|-------|
| **Framework** | Vite + React 18 + TypeScript (SPA) |
| **Hosting** | Cloudflare Pages |
| **Domain** | zeroonedotsai.consulting (bought on Namecheap) |
| **DNS** | Namecheap → Cloudflare (NS delegated) |
| **Repo** | https://github.com/meet-deshani/zeroone-outcome-engine |
| **CF Pages Project** | `dots-ai-web` |
| **CF Account ID** | `3d0a5d6f6324b810bac2af0e6e3b8f2b` |
| **Branch strategy** | main = production, feature branches for all changes |

## Build Pipeline
```bash
npm install
npm run build
# → Vite builds to dist/
# → Puppeteer prerender script creates static HTML for 32 routes
# → dist/ uploaded to Cloudflare Pages CDN
# → functions/api/telegram.js deployed as Pages Function
```

Build takes ~2-3 min (puppeteer prerender adds ~1-2 min).

## Deployment Flow
```
Developer pushes branch
       ↓
GitHub PR → Meet reviews → merges to main
       ↓
GitHub Actions fires → npm ci → npm run build → wrangler pages deploy
       ↓
zeroonedotsai.consulting live in ~3 minutes ✅
```

## GitHub Actions Secrets (✅ all set as of 2026-03-27)
In `meet-deshani/zeroone-outcome-engine` → Settings → Secrets → Actions:
```
CLOUDFLARE_API_TOKEN          ← scoped to Pages Write on account 3d0a5d6f63...
CLOUDFLARE_ACCOUNT_ID         ← 3d0a5d6f6324b810bac2af0e6e3b8f2b
CLOUDFLARE_PAGES_PROJECT_NAME ← dots-ai-web
```

## Cloudflare Pages Environment Variables (✅ set as of 2026-03-27)
Set in Cloudflare Dashboard → Pages → dots-ai-web → Settings → Environment variables.
These are **server-side only** (not VITE_ prefixed — never exposed to browser):
```
TELEGRAM_BOT_TOKEN  ← secret_text type  (bot: 8220683829)
TELEGRAM_CHAT_ID    ← 823530416         (Meet's Telegram ID)
```

## Telegram Architecture (updated 2026-03-27)
- **Before:** `VITE_TELEGRAM_BOT_TOKEN` in browser bundle (security risk)
- **After:** `functions/api/telegram.js` — Cloudflare Pages Function proxies requests
  - Client POSTs `{ message }` to `/api/telegram`
  - Function reads `TELEGRAM_BOT_TOKEN` + `TELEGRAM_CHAT_ID` from CF env
  - Token never reaches the browser

## Manual Deploy (if CI breaks)
```bash
npm run build
npx wrangler pages deploy dist --project-name=dots-ai-web
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

## Pages Functions
`functions/api/telegram.js` — serverless function at `/api/telegram`.
Cloudflare Pages automatically serves all files in `functions/` as API routes.
No wrangler.toml needed — Pages detects them automatically.

## Prerender Script
`scripts/prerender.mjs` — Puppeteer renders 32 routes to static HTML.
This ensures Google and AI crawlers see correct page titles, meta, and JSON-LD
without waiting for JavaScript to execute.

## SEO / GSC (✅ set up 2026-03-27)
- GSC property verified via DNS TXT: `google-site-verification=t7cdVzm2sV8_Wljasd1_ESElgZihYnClg3MHV4xmIpM`
- Sitemap submitted: `https://zeroonedotsai.consulting/sitemap.xml` → Status: Success

## Domain / DNS
- Domain registered on Namecheap
- Namecheap NS records point to Cloudflare nameservers
- All DNS managed in Cloudflare dashboard (zone: `021d10ffc3a7157616aee039b1dc258f`)
- SSL: Cloudflare handles SSL automatically (Full or Full Strict mode)
