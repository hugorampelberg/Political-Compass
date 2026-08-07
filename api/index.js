export default function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  res.setHeader("X-Content-Type-Options", "nosniff");

  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Méthode non autorisée." });
  }

  return res.status(200).json({
    ok: true,
    service: "Compas politique français",
    endpoints: {
      health: "/api/health",
      analyse: "/api/analyse"
    }
  });
}
