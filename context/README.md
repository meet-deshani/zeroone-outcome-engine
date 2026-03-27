# ZeroOne D.O.T.S. AI — Context Hub

> Single source of truth for anyone working on this codebase.
> Read this folder first. Everything else is implementation detail.

**Website:** https://zeroonedotsai.consulting
**Repo:** https://github.com/meet-deshani/zeroone-outcome-engine
**Last updated:** 2026-03-27

---

## Files in This Folder

| File | What it is | Read when |
|------|------------|-----------|
| `01-company.md` | Who ZeroOne is, philosophy, stats, moat | Always |
| `02-products-services.md` | Every product and service with pricing | Building pages, copy, forms |
| `03-brand-design.md` | Colors, fonts, tone of voice, visual rules | Touching UI or copy |
| `04-seo-strategy.md` | Keywords, clusters, schemas, GEO strategy | SEO/content work |
| `05-deploy-infra.md` | How to build, deploy, what CI/CD does | DevOps / deploy work |
| `06-analytics-tracking.md` | GA4, Telegram alerts, Google Sheets webhook | Analytics work |
| `07-pages-routes.md` | Every route, what it shows, its SEO goal | Adding/editing pages |
| `08-known-issues.md` | Bugs, limitations, tech debt | Debugging or refactoring |

---

## Quick Start

```bash
git clone https://github.com/meet-deshani/zeroone-outcome-engine.git
cd zeroone-outcome-engine
npm install
npm run dev          # http://localhost:8080

# Make changes on a branch — never commit to main directly
git checkout -b feat/your-change
# ... edit files ...
git push origin feat/your-change
# Open PR → Meet reviews → merges to main → auto-deploys to Cloudflare
```

## Tech Stack at a Glance

- **Framework:** Vite + React 18 + TypeScript
- **Styling:** Tailwind CSS + shadcn/ui
- **Routing:** React Router 6 (SPA)
- **Hosting:** Cloudflare Pages (auto-deploy on main)
- **Domain:** Namecheap → Cloudflare DNS
- **Analytics:** GA4 + Telegram notifications + Google Sheets
