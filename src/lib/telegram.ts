// Telegram Notification Service
// Messages are sent via /api/telegram (Cloudflare Pages Function) — no tokens in the browser.

interface VisitorInfo {
    ip: string;
    city: string;
    region: string;
    country: string;
    timezone: string;
    org: string;
}

interface FormData {
    name?: string;
    email?: string;
    company?: string;
    subject?: string;
    message?: string;
}

// Get visitor info from IP
export const getVisitorInfo = async (): Promise<VisitorInfo | null> => {
    try {
        const response = await fetch('https://ipapi.co/json/');
        if (!response.ok) return null;
        const data = await response.json();
        return {
            ip: data.ip || 'Unknown',
            city: data.city || 'Unknown',
            region: data.region || 'Unknown',
            country: data.country_name || 'Unknown',
            timezone: data.timezone || 'Unknown',
            org: data.org || 'Unknown',
        };
    } catch (error) {
        console.error('Failed to get visitor info:', error);
        return null;
    }
};

// Core function to send Telegram message via server-side proxy
export const sendTelegramMessage = async (message: string): Promise<boolean> => {
    try {
        const res = await fetch('/api/telegram', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message }),
        });
        const data = await res.json();
        return data.ok === true;
    } catch (error) {
        console.error('Failed to send Telegram message:', error);
        return false;
    }
};

// Get device info
const getDeviceInfo = () => {
    const ua = navigator.userAgent;
    let device = 'Desktop';
    if (/Mobile|Android|iPhone|iPad/.test(ua)) {
        device = /iPad/.test(ua) ? 'Tablet' : 'Mobile';
    }

    let browser = 'Unknown';
    if (ua.includes('Chrome') && !ua.includes('Edg')) browser = 'Chrome';
    else if (ua.includes('Safari') && !ua.includes('Chrome')) browser = 'Safari';
    else if (ua.includes('Firefox')) browser = 'Firefox';
    else if (ua.includes('Edg')) browser = 'Edge';

    return { device, browser };
};

// Format timestamp
const getTimestamp = () => {
    return new Date().toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata',
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
    });
};

// Session ID for tracking
let sessionId: string | null = null;
let sessionStartTime: number | null = null;

const getSessionId = () => {
    if (!sessionId) {
        sessionId = Math.random().toString(36).substring(2, 10);
        sessionStartTime = Date.now();
    }
    return sessionId;
};

const getTimeOnSite = () => {
    if (!sessionStartTime) return '0s';
    const seconds = Math.floor((Date.now() - sessionStartTime) / 1000);
    if (seconds < 60) return `${seconds}s`;
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}m ${remainingSeconds}s`;
};

// Notify about new website visitor
export const notifyWebsiteVisit = async () => {
    const visitorInfo = await getVisitorInfo();
    const { device, browser } = getDeviceInfo();
    const referrer = document.referrer || 'Direct';
    const entryPage = window.location.pathname;

    let locationStr = 'Unknown';
    if (visitorInfo) {
        locationStr = `${visitorInfo.city}, ${visitorInfo.region}, ${visitorInfo.country}`;
    }

    const message = `
🌐 <b>NEW VISITOR</b>

📍 Location: ${locationStr}
🌍 IP: ${visitorInfo?.ip || 'Unknown'}
📱 Device: ${device}
🖥️ Browser: ${browser}
📄 Entry Page: ${entryPage}
🔗 Referrer: ${referrer}
🆔 Session: ${getSessionId()}
⏰ Time: ${getTimestamp()}
  `.trim();

    await sendTelegramMessage(message);
};

// Page name mapping for service pages
const SERVICE_PAGES: Record<string, string> = {
    '/solutions': 'Solutions',
    '/seo-geo': 'SEO & GEO',
    '/infinity-crm': 'Infinity CRM',
    '/overtrade-op': 'OvertradeOP',
    '/inhouse-slm': 'In-house SLM',
    '/ai-workshop': 'AI Workshop',
    '/he-design': 'Heat Exchanger Design',
    '/personal-ai-agent': 'Personal AI Agent',
    '/pricing': 'Pricing',
    '/about': 'About Us',
    '/community': 'Community',
    '/resources': 'Resources',
    '/security': 'Security',
};

// Notify about page view
export const notifyPageView = async (pagePath: string) => {
    const pageName = SERVICE_PAGES[pagePath];
    if (!pageName) return; // Only notify for service pages

    const message = `
📄 <b>PAGE VIEW</b>

🆔 Session: ${getSessionId()}
📄 Page: ${pagePath}
📑 Title: ${pageName}
⏱️ Time on Site: ${getTimeOnSite()}
⏰ Time: ${getTimestamp()}
  `.trim();

    await sendTelegramMessage(message);
};

// Notify about form submission
export const notifyFormSubmission = async (formData: FormData, pagePath: string) => {
    const message = `
✅ <b>FORM SUBMITTED!</b>

👤 Name: ${formData.name || 'Not provided'}
📧 Email: ${formData.email || 'Not provided'}
🏢 Company: ${formData.company || 'Not provided'}
📋 Subject: ${formData.subject || 'Not provided'}
💬 Message: ${formData.message || 'Not provided'}

🆔 Session: ${getSessionId()}
📄 Page: ${pagePath}
⏰ Time: ${getTimestamp()}
  `.trim();

    await sendTelegramMessage(message);
};

// Notify about form abandonment
export const notifyFormAbandonment = async (
    filledFields: string[],
    pagePath: string,
    timeInFormSeconds: number
) => {
    if (filledFields.length === 0) return; // Don't notify if no fields were filled

    const timeInForm = timeInFormSeconds < 60
        ? `${timeInFormSeconds}s`
        : `${Math.floor(timeInFormSeconds / 60)}m ${timeInFormSeconds % 60}s`;

    const message = `
❌ <b>FORM ABANDONED</b>

📝 Fields Filled: ${filledFields.join(', ')}
⏱️ Time in Form: ${timeInForm}
🆔 Session: ${getSessionId()}
📄 Page: ${pagePath}
⏰ Time: ${getTimestamp()}
  `.trim();

    await sendTelegramMessage(message);
};

// Notify when CTA button is clicked but form not opened yet (form modal opened)
export const notifyFormOpened = async (pagePath: string) => {
    const message = `
📝 <b>CTA CLICKED - FORM OPENED</b>

🆔 Session: ${getSessionId()}
📄 Page: ${pagePath}
⏱️ Time on Site: ${getTimeOnSite()}
⏰ Time: ${getTimestamp()}
  `.trim();

    await sendTelegramMessage(message);
};
