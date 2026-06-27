/**
 * Sprig "Ask Sprig" backend — Cloudflare Worker.
 *
 * Why a Worker: the Sprig page is static (no Node backend in production), and
 * Cloudflare is already in the Rebel stack (email routing). A Worker holds the
 * Anthropic key server-side and can be routed at rebeltalentsystems.com/api/sprig
 * so the static page's fetch("/api/sprig") is same-origin.
 *
 * The Sprig front-end already calls /api/sprig and falls back to canned answers
 * if this isn't live, so nothing breaks until this is deployed.
 *
 * ── DEPLOY (Richie does this; I can't reach the Cloudflare account) ──
 * 1. npm i -g wrangler   (if needed)
 * 2. Put this file in a small repo with the wrangler.toml below.
 * 3. wrangler secret put ANTHROPIC_API_KEY      <- paste the key when prompted (never in code)
 * 4. wrangler deploy
 * 5. In Cloudflare dashboard: add a Route  rebeltalentsystems.com/api/sprig*  -> this Worker.
 * 6. COST GUARDRAIL (do not skip): add a WAF Rate Limiting rule on that path
 *    (e.g. 10 requests / 10 min per IP) and set a low monthly spend alert.
 *    This endpoint is public; without a limit it can be abused into a real bill.
 *
 * wrangler.toml:
 *   name = "sprig-api"
 *   main = "sprig-api-worker.js"
 *   compatibility_date = "2026-06-01"
 *   # (optional) bind a KV namespace named RATE for the soft in-Worker limiter below:
 *   # [[kv_namespaces]]
 *   # binding = "RATE"
 *   # id = "<your-kv-namespace-id>"
 */

const MODEL = "claude-haiku-4-5"; // cheapest current model: $1 / $5 per MTok
const ANTHROPIC_URL = "https://api.anthropic.com/v1/messages";
const MAX_TOKENS = 400; // answers are short by design
const MAX_MESSAGES = 16; // cap conversation length sent upstream
const MAX_CHARS = 1500; // cap a single user message

// Sprig persona (from the design handoff), scoped to ONE concrete next step,
// per the research finding that information alone does not change behavior.
const SYSTEM = `You are Sprig, a warm, practical AI assistant for greener everyday living, built by Rebel Talent.
Answer in 2 to 4 sentences, or a few short bullet points. End with ONE concrete next step the person can take today.
Focus on sustainability: composting, recycling, reducing food and water waste, energy, nature and biodiversity, herbs and gardening, low-impact exercise, and community action. Be encouraging, never preachy. If a question is off-topic, answer briefly and gently steer back to greener living.
Write in plain text only. No markdown, no asterisks for bold, no headers. For lists, use a simple dash at the start of each line. Never use em dashes or en dashes; use commas or periods instead.`;

const CORS = {
  "Access-Control-Allow-Origin": "https://rebeltalentsystems.com",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", ...CORS },
  });
}

export default {
  async fetch(request, env) {
    if (request.method === "OPTIONS") return new Response(null, { headers: CORS });
    if (request.method !== "POST") return json({ error: "method_not_allowed" }, 405);
    if (!env.ANTHROPIC_API_KEY) return json({ error: "not_configured" }, 500);

    // Soft per-IP limiter (best-effort; the WAF rate-limit rule is the real guard).
    if (env.RATE) {
      const ip = request.headers.get("CF-Connecting-IP") || "anon";
      const key = `rl:${ip}`;
      const n = parseInt((await env.RATE.get(key)) || "0", 10);
      if (n >= 20) return json({ error: "rate_limited" }, 429);
      await env.RATE.put(key, String(n + 1), { expirationTtl: 600 }); // 20 / 10 min
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return json({ error: "bad_json" }, 400);
    }

    let messages = Array.isArray(body && body.messages) ? body.messages : null;
    if (!messages || messages.length === 0) return json({ error: "no_messages" }, 400);

    // Sanitize: only role/content, trim length, cap count.
    messages = messages
      .filter((m) => m && (m.role === "user" || m.role === "assistant") && typeof m.content === "string")
      .slice(-MAX_MESSAGES)
      .map((m) => ({ role: m.role, content: m.content.slice(0, MAX_CHARS) }));
    if (messages.length === 0 || messages[messages.length - 1].role !== "user") {
      return json({ error: "bad_messages" }, 400);
    }

    let resp;
    try {
      resp = await fetch(ANTHROPIC_URL, {
        method: "POST",
        headers: {
          "x-api-key": env.ANTHROPIC_API_KEY,
          "anthropic-version": "2023-06-01",
          "content-type": "application/json",
        },
        body: JSON.stringify({ model: MODEL, max_tokens: MAX_TOKENS, system: SYSTEM, messages }),
      });
    } catch {
      return json({ error: "upstream_unreachable" }, 502);
    }

    if (!resp.ok) {
      return json({ error: "sprig_failed", status: resp.status }, 502);
    }

    const data = await resp.json();
    const text = (data.content || [])
      .filter((b) => b && b.type === "text" && typeof b.text === "string")
      .map((b) => b.text)
      .join("")
      .trim();

    if (!text) return json({ error: "empty" }, 502);
    return json({ text });
  },
};
