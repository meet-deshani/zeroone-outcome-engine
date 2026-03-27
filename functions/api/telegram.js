/**
 * Cloudflare Pages Function — /api/telegram
 * Proxies Telegram notifications server-side so bot token never reaches the browser.
 *
 * Required Cloudflare Pages environment variables (set in Pages → Settings → Variables):
 *   TELEGRAM_BOT_TOKEN
 *   TELEGRAM_CHAT_ID
 */
export async function onRequestPost(context) {
  const { env, request } = context;

  const botToken = env.TELEGRAM_BOT_TOKEN;
  const chatId = env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    return new Response(JSON.stringify({ ok: false, error: 'Telegram not configured' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ ok: false, error: 'Invalid JSON' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const { message } = body;
  if (!message || typeof message !== 'string') {
    return new Response(JSON.stringify({ ok: false, error: 'Missing message' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const tgRes = await fetch(
    `https://api.telegram.org/bot${botToken}/sendMessage`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text: message, parse_mode: 'HTML' }),
    }
  );

  const tgData = await tgRes.json();
  return new Response(JSON.stringify({ ok: tgData.ok }), {
    status: tgRes.ok ? 200 : 502,
    headers: { 'Content-Type': 'application/json' },
  });
}
