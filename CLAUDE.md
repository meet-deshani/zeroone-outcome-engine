# CLAUDE.md — ZeroOne D.O.T.S. AI Project Guide

## Project Overview
ZeroOne D.O.T.S. AI is an outcome-driven AI consulting firm. This is the main marketing website built with Vite + React 18 + TypeScript + Tailwind CSS + shadcn/ui.

## Tech Stack
- **Framework:** Vite + React 18.3 + TypeScript 5.8
- **Styling:** Tailwind CSS 3.4 with CSS custom properties (HSL-based for shadcn/ui)
- **Components:** shadcn/ui (Radix UI primitives)
- **Routing:** React Router DOM v6
- **Animation:** Framer Motion
- **Forms:** React Hook Form + Zod validation
- **Analytics:** Google Analytics 4 (GA4), Telegram notifications
- **Deployment:** Cloudflare Pages

## Brand System — D.O.T.S. Pillar Colors

Every color and design decision ties back to the D.O.T.S. framework:

| Pillar | Letter | Color | Hex | Usage |
|--------|--------|-------|-----|-------|
| Data | D | Lavender | #C8B6FF | Data sections, analytics content |
| Operations | O | Mint | #B8E0D2 | Operations, efficiency, process |
| Tech | T | Peach | #FFCDB2 | Tech content, implementation |
| Strategy | S | Sky | #A2D2FF | Strategy, roadmaps, planning |

### Additional Colors
- **Rose:** #FFB5C2 — Featured creative elements
- **Lemon:** #FFF3B0 — Highlights and badges
- **Ink:** #191924 — Primary text, dark backgrounds, CTA buttons
- **Plum:** #2D1B4E — Hovers, premium elements
- **Charcoal:** #2A2A3C — Footer, dark sections

### Warm Neutrals
- **Cream 50:** #FDFCFA — Page background
- **Cream 100:** #F8F7F4 — Section backgrounds (muted)
- **Sand 200:** #E8E6E0 — Borders, dividers
- **Stone 500:** #918D82 — Muted text (large text only, fails AA for small)
- **Slate 700:** #4A4842 — Body text (passes AA)

### Gradients
- **Aurora:** Lavender -> Sky -> Mint (cool, energetic)
- **Warmth:** Peach -> Rose -> Lavender (warm, inviting)
- **Cosmos:** Ink -> Plum (dark, premium)

## Typography

| Role | Font | Fallback | Usage |
|------|------|----------|-------|
| Display/Headlines | Instrument Serif | Georgia, serif | h1-h6, hero text, pull quotes |
| Body/UI | DM Sans | system-ui, sans-serif | All body text, navigation, buttons |
| Mono/Tags | Space Mono | monospace | D.O.T.S. labels, tags, data displays |

### Fluid Type Scale (use these Tailwind classes)
- `text-display-xxl` — Hero headlines (48-80px)
- `text-display-xl` — Section headlines (40-64px)
- `text-display-lg` — Sub-headlines (32-48px)
- `text-display-sm` — Card titles (20-24px)
- `text-body-lg` — Lead paragraphs (18-20px)
- `text-body-md` — Body text (16px)
- `text-body-sm` — Small text (14px)

## Motion & Animation

### Easing Curves
- **Spring:** `cubic-bezier(.34, 1.56, .64, 1)` — Buttons, interactive elements (0.2s)
- **Float:** `cubic-bezier(.22, 1, .36, 1)` — Card hover, lift effects (0.4s)
- **Expo-out:** `cubic-bezier(0.16, 1, 0.3, 1)` — Scroll-triggered entrance animations (0.8s)

### Animation Standards
- Entrance: `opacity: 0, y: 24px` -> `opacity: 1, y: 0` with expo-out easing
- Duration: 800ms for entrances, 200ms for buttons, 400ms for cards
- Always wrap sections in `<AnimatedSection>` for scroll-triggered reveal
- Stagger grid children with 100ms delay between items
- Card hover: `scale(1.02)` with `transition-transform duration-500`
- Respect `prefers-reduced-motion` — use framer-motion's `useReducedMotion`

## Component Patterns

### Section Spacing (Anthropic-style)
```
py-20 md:py-28 lg:py-36   — Standard section padding
py-24 md:py-32 lg:py-40   — Hero/CTA sections (extra generous)
```

### Cards
```
bg-white border border-sand-200 rounded-2xl p-8 transition-all duration-500
hover:shadow-lg hover:-translate-y-1
```

### Buttons
- **Primary CTA:** `variant="default"` — Ink bg, white text, pill shape
- **Secondary CTA:** `variant="outline"` — Sand border, cream bg
- **Brand:** `variant="brand"` — Explicit Ink bg, Plum hover
- **Brand Secondary:** `variant="brand-secondary"` — Lavender bg, Ink text

### Tags (D.O.T.S. Pillar Labels)
Use `.tag-data`, `.tag-ops`, `.tag-tech`, `.tag-strategy` classes.
These are mono font, uppercase, pill-shaped, color-coded by pillar.

### Glass Effect
```
bg-cream-50/70 backdrop-blur-xl border border-sand-200/50
```

## Content Voice Rules

### The 10-Year-Old Test
Every piece of text on this website must be understandable by a 10-year-old.

**DO:**
- Use short sentences (max 15 words ideal)
- Lead with what the customer gets, not what we do
- Use everyday words: "make more money", "stop wasting time", "find problems fast"
- Back claims with numbers
- Use generous whitespace — let content breathe

**DON'T:**
- Use jargon: avoid "ETL", "pipeline", "unit economics", "PII" without explanation
- Use buzzwords: avoid "synergy", "leverage", "paradigm"
- Write walls of text — if a section has more than 3 sentences, break it up
- Use dark patterns or aggressive sales language

### Jargon Translation Guide
| Jargon | Simple Version |
|--------|---------------|
| margin recovery | help you stop losing money |
| AI-driven analytics | smart tools that find where your money goes |
| data hygiene audit | a check-up for your business data |
| ETL/ELT pipelines | moving your data safely to the right place |
| unit economics | how much you make vs. spend on each sale |
| PII-minimised | we keep your private info safe |
| BYO-VPC | runs on your own servers if you want |
| RTO guard | stops returns before they happen |
| process automation | machines do the boring work so your team doesn't have to |

## File Structure

```
src/
  components/
    ui/              — shadcn/ui primitives (button, input, card, etc.)
    home/            — Homepage section components
    AnimatedSection.tsx — Reusable scroll-triggered animation wrapper
    Navigation.tsx   — Fixed header with mega menu
    Footer.tsx       — Site footer
    ContactForm.tsx  — Contact dialog (Google Forms + Telegram)
    Logo.tsx         — Brand logo component (light/dark variants)
    SEO.tsx          — Helmet metadata
  pages/             — Route-level page components
  lib/               — Utilities (analytics, telegram, cn())
  hooks/             — Custom React hooks
  assets/            — Static imports (images)
```

## Tailwind Patterns

### Use
- `text-ink`, `text-plum`, `text-charcoal` for dark text
- `text-stone-500` for muted text (large only)
- `text-slate-700` for readable body text
- `bg-cream-50`, `bg-cream-100` for backgrounds
- `border-sand-200` for borders
- `text-dots-data`, `bg-dots-ops/10`, etc. for pillar colors
- `rounded-full` for buttons, `rounded-2xl` for cards
- `font-heading`, `font-body`, `font-mono`

### Avoid
- Hardcoded hex colors in className (use CSS vars or Tailwind tokens)
- `text-purple-*`, `text-teal-*`, `text-cyan-*` — use brand colors instead
- `shadow-glow` on every element — use sparingly
- `glass` class everywhere — prefer `bg-white border border-sand-200`
- Section padding less than `py-16` — we want generous whitespace

## Build & Deploy
- `npm run dev` — Start dev server (port 8080)
- `npm run build` — Production build
- Deploys via Cloudflare Pages
- Google Analytics ID: G-6YY65MG3TJ
