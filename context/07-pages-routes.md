# Pages & Routes

## Core Pages
| Route | Component | SEO Goal |
|-------|-----------|----------|
| `/` | Index.tsx | Homepage — brand + entry point |
| `/solutions` | Solutions.tsx | "AI solutions India" |
| `/pricing` | Pricing.tsx | "AI consulting pricing India" |
| `/about` | About.tsx | Brand trust, team |
| `/security` | Security.tsx | DPDP compliance, trust signals |
| `/community` | Community.tsx | Case studies, social proof |
| `/resources` | Resources.tsx | Content hub, "AI guides India" |

## Private AI Cluster
| Route | Component | SEO Goal |
|-------|-----------|----------|
| `/private-ai` | PrivateAI.tsx | "private AI deployment India" |
| `/private-ai/without-internet` | WithoutInternet.tsx | "offline AI India" |
| `/private-ai/council` | AiCouncil.tsx | "AI council India" |
| `/private-ai/office` | AiOffice.tsx | "AI office setup India" |

## Product/Service Pages
| Route | Component | SEO Goal |
|-------|-----------|----------|
| `/seo-geo` | SeoGeo.tsx | "SEO GEO AI India" |
| `/infinity-crm` | Infinity.tsx | "AI CRM India" |
| `/overtrade-op` | OvertradeOP.tsx | "algo trading platform India" |
| `/ai-workshop` | AiWorkshop.tsx | "AI workshop India" |
| `/he-design` | HeatExchanger.tsx | "heat exchanger design India" |
| `/personal-ai-agent` | PersonalAiAgent.tsx | "personal AI agent program" |

## Blog / Resource Content (lazy-loaded)
| Route | Component |
|-------|-----------|
| `/resources/private-ai-india` | PrivateAiIndia.tsx |
| `/resources/ai-automation-guide` | AiAutomationGuide.tsx |
| `/resources/business-margin-guide` | BusinessMarginGuide.tsx |
| `/resources/ai-community` | AiCommunityGuide.tsx |
| `/resources/ai-education` | AiEducationGuide.tsx |
| `/resources/ai-tools-india` | AiToolsIndia.tsx |
| `/resources/ai-council-guide` | AiCouncilGuide.tsx |
| `/resources/ai-office-setup` | AiOfficeSetup.tsx |
| `/resources/offline-ai-guide` | OfflineAiGuide.tsx |
| `/resources/private-ai-vs-cloud` | PrivateAiVsCloud.tsx |
| `/resources/on-premise-ai-guide` | OnPremiseAiGuide.tsx |
| `/resources/lmtd-calculator` | LMTDCalculator.tsx |
| `/resources/baffle-cut-optimization` | BaffleCutArticle.tsx |

## Legal
| Route | Component |
|-------|-----------|
| `/privacy` | Privacy.tsx |
| `/terms` | Terms.tsx |

## Legacy Redirects (in App.tsx)
| Old Route | Redirects To |
|-----------|-------------|
| `/digital-authority` | `/seo-geo` |
| `/inhouse-slm` | `/private-ai` |
| `/approach` | `/pricing` |
| `/services` | `/solutions` |
| `/work` | `/community` |
| `/contact` | `/` |

## 404
- `*` → NotFound.tsx
