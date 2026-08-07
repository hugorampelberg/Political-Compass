import { API_KEY, MODEL, SERVICE_TIER, MOCK } from "../lib/gemini.js";

export default function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  res.setHeader("X-Content-Type-Options", "nosniff");

  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Méthode non autorisée." });
  }

  return res.status(200).json({
    ok: true,
    ai_enabled: Boolean(API_KEY || MOCK),
    provider: "Google Gemini",
    model: MOCK ? "mode démonstration" : MODEL,
    service_tier: SERVICE_TIER,
    unpaid_data_use_warning: SERVICE_TIER === "unpaid"
  });
}
