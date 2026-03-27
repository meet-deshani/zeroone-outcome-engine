# Analytics & Tracking

## GA4
- **Measurement ID:** G-6YY65MG3TJ
- **Library:** react-ga4
- **Init:** `src/lib/analytics.ts` → `initGA()`
- **Tracking:** `logPageView()` on every route change via AnalyticsTracker.tsx

## Google Sheets Webhook (Secondary logging)
- **Endpoint:** `https://script.google.com/macros/s/AKfycbx.../exec`
- **Logs:** category, action, page, source (referrer)
- **Auth:** Public Apps Script endpoint (execute as owner)

## Telegram Notifications
Real-time alerts to Telegram bot for:

| Event | When | Data sent |
|-------|------|-----------|
| New visitor | First page load | IP location, device, browser, entry page, referrer, session ID |
| Service page view | Navigating to a service page | Session ID, path, time on site |
| Form submit | Contact form submitted | Name, email, company, subject, message, timestamp |
| Form abandonment | User leaves partially-filled form | Filled fields, time spent, session ID |
| CTA click | Contact modal opened | Session ID, page, timestamp |

**Implementation:** `src/lib/telegram.ts` + `src/components/AnalyticsTracker.tsx`

⚠️ **Known issue:** Bot token is client-side (VITE_ prefix = visible in browser JS bundle).
Move to a Cloudflare Worker / edge function to hide credentials properly.

## Visitor Info Collection
- **IP geolocation:** ipapi.co (free, public)
- **Device detection:** navigator.userAgent parsing
- **Session ID:** random 8-char string, stored in memory
- **Timezone:** Asia/Kolkata (IST)
