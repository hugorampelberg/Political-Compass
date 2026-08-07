import { AI_ENABLED, API_KEY, MODEL, SERVICE_TIER } from "../lib/gemini.js";

export default function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  res.setHeader("X-Content-Type-Options", "nosniff");

  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Méthode non autorisée." });
  }

  return res.status(200).json({
    ok: true,
    ai_enabled: AI_ENABLED,
    provider: "Google Gemini",
    model: MODEL,
    service_tier: SERVICE_TIER,
    configuration_error: !API_KEY
      ? "GEMINI_API_KEY_NOT_CONFIGURED"
      : SERVICE_TIER !== "unpaid"
        ? "GEMINI_PAID_TIER_REQUIRED"
        : null
  });
}
