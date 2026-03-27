# Known Issues & Tech Debt

## 🔴 Critical

### 1. Client-side Telegram credentials exposed
- **File:** `src/lib/telegram.ts`
- **Issue:** `VITE_TELEGRAM_BOT_TOKEN` is embedded in browser JS bundle (VITE_ prefix = client-side)
- **Risk:** Anyone can view source and steal the bot token
- **Fix:** Move Telegram logic to a Cloudflare Worker or Pages Function

## 🟠 High

### 2. Lint failures (10 errors, 8 warnings)
Run `npm run lint` to see current list. Key issues:
- `Infinity` component name conflicts with global JS `Infinity` object → rename component
- Multiple `any` type usages → add proper TypeScript types
- `require()` in `tailwind.config.ts` → convert to ES `import`
- Empty interface warnings

### 3. Large JS bundle
- Main bundle: ~892 KB minified (~257 KB gzip)
- For a consulting/marketing site this is heavy
- Blog pages are already lazy-loaded (good), but main bundle still large
- Impact: slower LCP on mobile (Core Web Vitals)

## 🟡 Medium

### 4. Sitemap lastmod is stale
- All `<lastmod>` entries show `2026-03-17`
- Update when content changes

### 5. No BreadcrumbList schema on nested routes
- `/private-ai/council`, `/private-ai/office`, `/resources/*` lack breadcrumb JSON-LD
- Minor SEO gap for page hierarchy signals

### 6. No GSC (Google Search Console) verification
- No verification tag in repo
- Cannot monitor crawl status, index coverage, keyword performance

### 7. SPA pre-render is good but has limits
- Secondary crawlers/bots that don't wait for JS may miss per-page metadata
- Mitigated by puppeteer prerender, but not fully eliminated
- Long-term: consider static site generation (Next.js/Astro) for full SSG

## 🟢 Low

### 8. README.md is Lovable template boilerplate
- Not project-specific. Should be updated.

### 9. `.axon/` and `WEBSITE_CONTEXT.md` are untracked
- `.axon/` should be in `.gitignore`
- `WEBSITE_CONTEXT.md` should either be committed or gitignored

### 10. `docs.zip` in root
- Archived docs zip in repo root — should be removed or moved
