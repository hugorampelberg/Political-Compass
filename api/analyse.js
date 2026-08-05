import {
  MAX_BODY_BYTES,
  analyse,
  clientIp,
  rateAllowed,
  validatePayload
} from "../lib/gemini.js";

export const config = {
  maxDuration: 300
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

    const code = error?.code || "GEMINI_ERROR";
    let status = Number(error?.status) || 502;
    let message = "L’analyse Gemini n’a pas pu être générée.";

    if (code === "GEMINI_API_KEY_NOT_CONFIGURED") {
      status = 503;
      message = "La clé Gemini n’est pas configurée sur le serveur.";
    } else if (status === 401 || status === 403) {
      message = "La clé Gemini est invalide ou n’a pas accès au modèle demandé.";
    } else if (status === 429) {
      message = "Le quota ou la limite de fréquence Gemini est atteint. Réessayez plus tard.";
    } else if (code === "GEMINI_ATTEMPT_TIMEOUT" || status === 504) {
      status = 504;
      message = "Gemini n’a pas répondu à temps, même après plusieurs tentatives. Réessayez dans quelques minutes.";
    } else if (status >= 500 || error?.transient) {
      status = 503;
      message = "Gemini est temporairement saturé ou indisponible. Plusieurs tentatives ont échoué ; réessayez dans quelques minutes.";
    }

    if (status < 400 || status > 599) status = 502;
    res.setHeader("Retry-After", "60");
    return res.status(status).json({ error: message, code });
  }
}
