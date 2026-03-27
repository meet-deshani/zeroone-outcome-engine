# ZeroOne D.O.T.S. AI Website Context

Last audited: 2026-03-17
Repo path: `/Users/meetdeshani/Desktop/ZeroOne-DOTS-ai/website-zeronedotsai`

## 1. What this website is

- Main marketing website for ZeroOne D.O.T.S. AI.
- Stack: Vite + React 18 + TypeScript + Tailwind + shadcn/ui.
- Routing: client-side React Router.
- Analytics: GA4 + Google Apps Script sheet logging + Telegram notifications.
- Primary business positioning in the code: Private AI, AI automation, SEO/GEO, community, pricing, engineering tools.

Key local references:
- `package.json`
- `src/App.tsx`
- `src/components/SEO.tsx`
- `src/pages/Index.tsx`
- `docs/README.md`
- `AGENT_CONTEXT.md`

## 2. Live URL and hosting

Confirmed live URL:
- `https://zeroonedotsai.consulting`

Observed live behavior:
- Domain resolves to Cloudflare IPs.
- Live responses return `server: cloudflare`.
- Repo docs also state Cloudflare Pages as deployment target.

Best current inference:
- This website is very likely deployed on Cloudflare Pages behind the custom domain.
- I do not see evidence that this website is deployed from a VPS.
- I do not see any VPS deploy script, Dockerfile, Nginx config, or repo-stored infrastructure config for this site.

Important nuance:
- The repo README still includes Lovable publishing instructions.
- The repo itself does not contain the Cloudflare project settings.
- That means the real deploy wiring is most likely configured in Cloudflare dashboard and/or Lovable, not versioned in git.

## 3. Repo and deploy path

Git remote:
- `origin = https://github.com/meet-deshani/dots-ai-web.git`

Current branch:
- `main`

Likely production flow:
1. Code lives in GitHub.
2. Cloudflare Pages is connected to the repo and custom domain.
3. Pushes to `main` are the most likely auto-deploy trigger.

Why this is an inference and not a certainty:
- No `.github/workflows/` deploy pipeline exists.
- No `wrangler.toml`, `cloudflare` config, `vercel.json`, or `netlify.toml` exists.
- No VPS deployment scripts exist in the repo.

What is versioned vs not versioned:
- Source code is versioned.
- Cloudflare dashboard config is not versioned here.
- `dist/` exists locally but is not tracked by git.

## 4. Site structure

Main route groups from `src/App.tsx`:
- Homepage: `/`
- Core pages: `/solutions`, `/seo-geo`, `/pricing`, `/about`, `/security`, `/community`
- Product pages: `/infinity-crm`, `/overtrade-op`, `/private-ai`, `/ai-workshop`, `/he-design`, `/personal-ai-agent`
- Private AI cluster: `/private-ai/without-internet`, `/private-ai/council`, `/private-ai/office`
- Resources hub: `/resources`
- Resource assets: one calculator and one engineering article
- Blog/content cluster: 11 resource guides under `/resources/*`
- Legal pages: `/privacy`, `/terms`

Notable redirect behavior in code:
- `/digital-authority` redirects to `/seo-geo`
- `/inhouse-slm` redirects to `/private-ai`

## 5. Current SEO implementation

What exists:
- Per-page `SEO` component using `react-helmet-async`
- Canonical tags on most routed pages
- Basic Open Graph and Twitter tags
- Static `robots.txt`
- Static `sitemap.xml`
- Organization JSON-LD in `index.html`
- Article and FAQ schema on a subset of pages
- Blog/resource cluster targeting India and Private AI topics

Examples:
- Homepage SEO in `src/pages/Index.tsx`
- Reusable SEO component in `src/components/SEO.tsx`
- Base metadata and Organization schema in `index.html`
- FAQ schema on `src/pages/SeoGeo.tsx`
- Article + FAQ schema on content pages like `src/pages/blog/PrivateAiIndia.tsx`

## 6. Current SEO blockers

These are the main reasons this site will struggle to rank like a top-tier consulting site.

### A. The site is a client-rendered SPA

The raw HTML served for deep URLs like `/private-ai` still contains the generic homepage title and description until JavaScript runs.

What that means:
- Google can sometimes render JavaScript, but it is slower and less reliable than server-rendered or pre-rendered HTML.
- Many AI crawlers, preview bots, and secondary search engines will not reliably see the intended per-page metadata.
- This is the single biggest technical SEO limitation in the current architecture.

### B. The sitemap includes a redirect URL

`public/sitemap.xml` includes `/inhouse-slm`, but the app redirects that path to `/private-ai`.

That is bad SEO hygiene:
- Sitemaps should list final canonical URLs, not redirected URLs.

### C. Structured data is incomplete

Missing or weak signals:
- `sameAs` is empty in Organization schema.
- No `LocalBusiness` schema.
- No `WebSite` schema.
- No `BreadcrumbList` schema on content pages.
- No obvious author/person entity strategy.

### D. GEO is being partially blocked by live robots policy

The live `robots.txt` includes Cloudflare-managed content rules that block:
- `ClaudeBot`
- `GPTBot`
- `Google-Extended`
- other AI-related crawlers

That does not hurt classic Google ranking directly, but it does work against the site's own GEO positioning if the business wants AI systems to ingest, cite, or understand its content more broadly.

### E. No repo-visible search console verification or indexing workflow

I do not see:
- Google Search Console verification tags
- Bing verification tags
- repo-visible indexing automation
- repo-visible crawl monitoring setup

That suggests indexing and SEO operations are being handled outside the repo, if at all.

### F. Bundle size is too large for a premium marketing site

Current production build output:
- main JS bundle is about `891.81 kB` minified
- gzip is about `256.82 kB`

This is not catastrophic, but it is heavy for a consulting website and leaves performance headroom on the table.

### G. Lint is not clean

Local validation results:
- `npm run build` passes
- `npm run lint` fails with 10 errors and 8 warnings

That means the repo can ship builds but is not operating with a clean engineering gate.

## 7. Credibility and conversion observations

What is good:
- Strong niche positioning around Private AI, India, ownership, offline AI, DPDP, and outcome-based delivery.
- There is already a content cluster around India-specific Private AI and AI adoption themes.
- The messaging is direct and differentiated.

What is risky:
- Lead capture is fully client-side via Google Forms and Telegram.
- Visitor tracking sends IP-derived location and lead events to Telegram.
- Analytics also sends data to a Google Apps Script endpoint.
- `VITE_` env vars mean Telegram bot credentials are browser-exposed if populated client-side.

This is workable for a lean team, but it is not enterprise-grade.

## 8. "Big 4-grade" gaps

To compete like a top consulting or top enterprise services site in India, the website needs more than better keywords.

It needs:
- Crawl-stable HTML for every important landing page
- Strong entity SEO
- Better information architecture
- tighter trust signals
- better performance
- indexed service pages built for distinct intent
- a repeatable publishing engine
- measurable search operations

Right now the site has good messaging and decent content direction, but the platform is not yet at that level.

## 9. What must change first if the goal is top rankings in India

Priority 0: fix the platform
- Move from pure SPA metadata to SSR, SSG, or route prerendering.
- Every important landing page must ship the correct title, description, canonical, schema, and body content in the initial HTML.
- If staying on Cloudflare Pages, use a framework or prerender flow that outputs route-specific HTML.

Priority 1: clean technical SEO
- Remove redirected URLs from sitemap.
- Add proper canonical discipline across every route.
- Add `WebSite`, `LocalBusiness` or `ProfessionalService`, `BreadcrumbList`, and richer Organization schema.
- Fill `sameAs` with real public profiles.
- Add search console verification and index monitoring.

Priority 2: tighten authority positioning for India
- Build dedicated service landing pages around clear search intents:
  - Private AI India
  - AI consulting India
  - AI automation for business India
  - On-prem AI India
  - Offline AI for business
  - DPDP-compliant AI
  - SEO and GEO agency India
- Create stronger proof assets:
  - named case studies
  - founder/about credibility
  - delivery methodology
  - security/compliance details
  - public benchmarks

Priority 3: fix GEO contradictions
- Decide whether the business wants AI systems to ingest content.
- If yes, review Cloudflare managed content restrictions in `robots.txt`.
- Current live bot restrictions conflict with a "be the brand AI recommends" positioning.

Priority 4: improve conversion infrastructure
- Move lead forms off direct Google Forms submission.
- Put lead capture behind a server-side endpoint.
- Move Telegram/webhook logic server-side.
- Keep analytics and form events, but remove client-side credential exposure.

Priority 5: improve performance and engineering hygiene
- Reduce the main JS bundle.
- Clean lint errors.
- Add a real CI gate: install, lint, build.

## 10. Recommended operating model

If this site should become a serious India-first authority engine, treat it as:
- brand site
- search engine
- trust layer
- content publication system
- lead capture system

Recommended stack direction:
- Keep Cloudflare if desired.
- But replace pure SPA SEO with a framework that supports prerendering or SSR cleanly.
- Good directions: Next.js, Astro, or a Vite prerender approach if the team wants minimal change.

## 11. How to test changes locally

Validated commands:

Install:
```bash
npm ci
```

Run dev server:
```bash
npm run dev
```

Default dev URL:
```bash
http://localhost:8080
```

Build production bundle:
```bash
npm run build
```

Preview production build locally:
```bash
npm run preview -- --host 127.0.0.1 --port 4173
```

Production-like preview URL:
```bash
http://127.0.0.1:4173
```

Recommended test flow for any content or SEO change:
1. Run `npm run dev` and check visual behavior.
2. Run `npm run build` to ensure the production bundle still builds.
3. Run `npm run preview -- --host 127.0.0.1 --port 4173`.
4. Open critical pages directly, not just by clicking around:
   - `/`
   - `/solutions`
   - `/seo-geo`
   - `/private-ai`
   - `/resources`
   - a few blog pages
5. Inspect raw HTML for deep routes with `curl` to verify what crawlers actually receive.
6. Validate `robots.txt`, `sitemap.xml`, canonicals, and JSON-LD after every SEO change.

Useful crawler-view checks:
```bash
curl -s http://127.0.0.1:4173/private-ai | sed -n '1,120p'
curl -s https://zeroonedotsai.consulting/private-ai | sed -n '1,120p'
curl -s https://zeroonedotsai.consulting/robots.txt
curl -s https://zeroonedotsai.consulting/sitemap.xml
```

## 12. Current validation status

Build:
- passes

Lint:
- fails

Main lint problems observed:
- `Infinity` component name conflicts with global `Infinity`
- several `any` usages
- empty interface warnings/errors in UI primitives
- a `require()` import in `tailwind.config.ts`

## 13. Bottom line

Current state:
- good brand voice
- good India-specific positioning
- promising content direction
- live production site on Cloudflare

But:
- not yet enterprise-grade technically
- not yet set up to win SEO at a national level consistently
- not yet aligned between GEO messaging and live crawler policy

If the goal is "come on top in India," the first real move is not more blog posts.
The first real move is rebuilding the search architecture so every important page is crawl-stable, trust-rich, and measurable.
