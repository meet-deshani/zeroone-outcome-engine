# SEO & GEO Strategy

---

## Target Keywords (Priority Order)

### India-Focused Core
- `private AI deployment India`
- `AI agency India`
- `AI consulting India`
- `DPDP compliant AI`
- `custom AI solutions India`
- `AI automation agency India`
- `solopreneur AI agency India`

### Product Clusters
- `private AI India` (high value, blog + /private-ai)
- `offline AI India` (/private-ai/without-internet)
- `AI without internet India`
- `on-premise AI India`
- `AI CRM India` (/infinity-crm)
- `algo trading platform India` (/overtrade-op)
- `AI workshop India` (/ai-workshop)
- `SEO GEO AI India` (/seo-geo)

### Brand Terms
- `ZeroOne DOTS AI`
- `zeroonedotsai.consulting`
- `D.O.T.S. framework`

---

## GEO (Generative Engine Optimization)

**Goal:** Get mentioned and recommended by ChatGPT, Perplexity, Gemini, Claude when users ask about AI in India.

**Tactics in place:**
- `robots.txt` explicitly allows all AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, Bytespider, cohere-ai)
- `public/llms.txt` — AI-readable plain text description (in brand_guide/, copy to public/ if needed)
- JSON-LD Organization schema with `knowsAbout` array (10 topics)
- India-geo meta tags: `geo.region: IN`, `hreflang: en-IN`

---

## Current SEO Implementation

### What's In Place ✅
- Per-page SEO component (`src/components/SEO.tsx`) via react-helmet-async
- Dynamic page titles, descriptions, canonical on every route
- Open Graph + Twitter cards on all pages
- Organization + ProfessionalService + WebSite JSON-LD in `index.html`
- Article + FAQ schema on blog/resource pages
- Puppeteer prerender script — 32 routes get static HTML with correct metadata
- `robots.txt` — AI-friendly, all bots allowed
- `sitemap.xml` — 30+ routes with priorities, lastmod `2026-03-27`
- India-specific targeting: `geo.region: IN`, `hreflang: en-IN, en, x-default`

### Gaps / Missing ❌
- No Google Search Console verification
- No BreadcrumbList schema on nested routes
- No LocalBusiness schema (no physical address to add)
- `sameAs` in Organization schema only has GitHub — add LinkedIn, YouTube, Instagram
- No IndexNow key or submission (vs dotsai.in which has it)
- No Bing Webmaster Tools verification

---

## Content Cluster Strategy

### Cluster 1: Private AI India
- Hub: `/private-ai`
- Spokes: `/private-ai/without-internet`, `/private-ai/council`, `/private-ai/office`
- Blog: `/resources/private-ai-india`, `/resources/offline-ai-guide`, `/resources/on-premise-ai-guide`, `/resources/private-ai-vs-cloud`

### Cluster 2: AI Automation India
- Hub: `/solutions`
- Blog: `/resources/ai-automation-guide`, `/resources/business-margin-guide`

### Cluster 3: AI Tools India
- Blog: `/resources/ai-tools-india`, `/resources/ai-office-setup`, `/resources/ai-council-guide`

### Cluster 4: Engineering Tools
- `/resources/lmtd-calculator` — ranks for "LMTD calculator"
- `/resources/baffle-cut-optimization`
- `/he-design`

---

## Prerender Script
- `scripts/prerender.mjs` — Puppeteer renders 32 routes to static HTML in `dist/`
- Ensures crawlers see correct title, meta, JSON-LD without waiting for JS
- Run automatically via `npm run build` → `postbuild` hook

---

## Priorities for Next SEO Run
1. Add Google Search Console verification + submit sitemap
2. Add `sameAs` social links to Organization JSON-LD
3. Add BreadcrumbList schema to nested routes
4. Add IndexNow key + submit all 30 URLs
5. Consider `llms.txt` in `public/` (currently in `brand_guide/`)
