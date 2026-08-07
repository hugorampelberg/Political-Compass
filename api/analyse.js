import {
  MAX_BODY_BYTES,
  analyse,
  clientIp,
  rateAllowed
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

function textLength(value, max) {
  return typeof value === "string" && value.length <= max;
}

// Validation de la version complète (87 réponses) et de la version rapide
// (40 réponses), synchronisée avec la validation défensive de lib/gemini.js.
function validateQuizPayload(payload) {
  if (!payload || typeof payload !== "object") return false;
  if (payload.consent !== true || payload.age_confirmed !== true) return false;
  if (!payload.axis_scores || typeof payload.axis_scores !== "object") return false;
  if (!Array.isArray(payload.question_responses)) return false;

  const responseCount = payload.question_responses.length;
  if (responseCount !== 40 && responseCount !== 87) return false;
  if (payload.question_count !== undefined && payload.question_count !== responseCount) return false;
  if (payload.quiz_mode === "quick" && responseCount !== 40) return false;
  if (payload.quiz_mode === "full" && responseCount !== 87) return false;

  const ids = new Set();
  for (const item of payload.question_responses) {
    if (!item || typeof item !== "object") return false;
    if (!Number.isInteger(item.id) || item.id < 1 || item.id > 93 || ids.has(item.id)) return false;
    ids.add(item.id);
    if (!Number.isInteger(item.answer) || item.answer < -3 || item.answer > 3) return false;
    if (!textLength(item.question, 1_200) || !textLength(item.theme || "", 200)) return false;
    if (!textLength(item.answer_label || "", 120) || !textLength(item.comment || "", 6_000)) return false;
  }

  if (!Array.isArray(payload.open_answers) || payload.open_answers.length > 10) return false;
  if (payload.open_answers.some(x => !x || !textLength(x.question || "", 1_200) || !textLength(x.answer || "", 8_000))) return false;
  if (!Array.isArray(payload.party_ranking) || payload.party_ranking.length < 1 || payload.party_ranking.length > 20) return false;
  if (!Array.isArray(payload.government_ranking) || payload.government_ranking.length > 12) return false;
  return JSON.stringify(payload).length <= 220_000;
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

  if (!validateQuizPayload(payload)) {
    return res.status(400).json({
      error: "Les résultats transmis, le consentement ou la confirmation d’âge sont incomplets."
    });
  }

  const responseCount = payload.question_responses.length;
  payload.quiz_mode = responseCount === 40 ? "quick" : "full";
  payload.question_count = responseCount;
  payload.analysis_scope_instruction = responseCount === 40
    ? "Version rapide : analyse exactement les 40 réponses transmises. Ne suppose pas que les 40 questions absentes ont reçu une réponse. Les scores de la personne, des partis et des gouvernements ont tous été recalculés sur ce même sous-ensemble de 40 questions."
    : "Version complète : analyse les 87 réponses transmises.";

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
