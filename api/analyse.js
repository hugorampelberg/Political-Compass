import {
  MAX_BODY_BYTES,
  analyse,
  clientIp,
  rateAllowed,
  validatePayload
} from "../lib/gemini.js";

export const config = {
  maxDuration: 120
};

async function readBody(req) {
  if (req.body !== undefined && req.body !== null) {
    if (Buffer.isBuffer(req.body)) {
      if (req.body.length > MAX_BODY_BYTES) throw new Error("PAYLOAD_TOO_LARGE");
      return JSON.parse(req.body.toString("utf8") || "{}");
    }
    if (typeof req.body === "string") {
      if (Buffer.byteLength(req.body) > MAX_BODY_BYTES) throw new Error("PAYLOAD_TOO_LARGE");
      return JSON.parse(req.body || "{}");
    }
    return req.body;
  }

  return await new Promise((resolve, reject) => {
    let size = 0;
    const chunks = [];
    req.on("data", chunk => {
      size += chunk.length;
      if (size > MAX_BODY_BYTES) {
        reject(new Error("PAYLOAD_TOO_LARGE"));
        return;
      }
      chunks.push(chunk);
    });
    req.on("end", () => {
      try {
        resolve(JSON.parse(Buffer.concat(chunks).toString("utf8") || "{}"));
      } catch {
        reject(new Error("INVALID_JSON"));
      }
    });
    req.on("error", reject);
  });
}

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("Referrer-Policy", "no-referrer");

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Méthode non autorisée." });
  }

  if (!rateAllowed(clientIp(req))) {
    return res.status(429).json({ error: "Trop de demandes d’analyse. Réessayez plus tard." });
  }

  let payload;
  try {
    payload = await readBody(req);
  } catch (error) {
    const status = error?.message === "PAYLOAD_TOO_LARGE" ? 413 : 400;
    return res.status(status).json({ error: "Requête invalide ou trop volumineuse." });
  }

  if (!validatePayload(payload)) {
    return res.status(400).json({
      error: "Les résultats transmis, le consentement ou la confirmation d’âge sont incomplets."
    });
  }

  try {
    const analysis = await analyse(payload);
    return res.status(200).json({ analysis });
  } catch (error) {
    console.error("Gemini analysis error:", error?.message || error);
    const message = error?.message === "GEMINI_API_KEY_NOT_CONFIGURED"
      ? "La clé Gemini n’est pas configurée sur le serveur."
      : "L’analyse Gemini n’a pas pu être générée. Le modèle subit actuellement une forte demande. Vos réponses sont enregistrées et vous pourrez rééssayer plus tard l'analyse Gemini sans recommencer le questionnaire.";
    return res.status(502).json({ error: message });
  }
}
