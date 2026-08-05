const API_KEY = process.env.GEMINI_API_KEY || "";
const MODEL = process.env.GEMINI_MODEL || "gemini-3.5-flash";
const API_BASE_URL = String(process.env.GEMINI_API_BASE_URL || "https://generativelanguage.googleapis.com/v1beta").replace(/\/$/, "");
const SERVICE_TIER = String(process.env.GEMINI_SERVICE_TIER || "unpaid").toLowerCase() === "paid" ? "paid" : "unpaid";
const MOCK = String(process.env.MOCK_GEMINI || "").toLowerCase() === "true";
const MAX_BODY_BYTES = 260_000;
const RATE_LIMIT_MAX = Math.max(1, Number(process.env.AI_RATE_LIMIT_MAX || 5));
const RATE_WINDOW_MS = Math.max(1, Number(process.env.AI_RATE_LIMIT_WINDOW_MINUTES || 60)) * 60_000;
const rateBuckets = globalThis.__boussoleRateBuckets || (globalThis.__boussoleRateBuckets = new Map());

const schema = {
  type: "object",
  additionalProperties: false,
  properties: {
    title: { type: "string" },
    overview: { type: "string" },
    independent_profile: {
      type: "object", additionalProperties: false,
      properties: {
        label: { type: "string" },
        analysis: { type: "string" }
      },
      required: ["label", "analysis"]
    },
    axis_analysis: {
      type: "array", minItems: 6, maxItems: 6,
      items: {
        type: "object", additionalProperties: false,
        properties: { axis: { type: "string" }, analysis: { type: "string" } },
        required: ["axis", "analysis"]
      }
    },
    party_analysis: {
      type: "array", minItems: 3, maxItems: 3,
      items: {
        type: "object", additionalProperties: false,
        properties: { party: { type: "string" }, analysis: { type: "string" } },
        required: ["party", "analysis"]
      }
    },
    tensions: { type: "array", minItems: 2, maxItems: 6, items: { type: "string" } },
    international_comparison: { type: "string" },
    conclusion: { type: "string" },
    factual_references: {
      type: "array", minItems: 0, maxItems: 4,
      items: {
        type: "object", additionalProperties: false,
        properties: {
          fact: { type: "string" },
          source: { type: "string" },
          url: { type: "string" }
        },
        required: ["fact", "source", "url"]
      }
    },
    caveat: { type: "string" }
  },
  required: ["title", "overview", "independent_profile", "axis_analysis", "party_analysis", "tensions", "international_comparison", "conclusion", "factual_references", "caveat"]
};

const REFERENCE_CONTEXT = [
  {
    fact: "Les dépenses publiques françaises ont atteint 57,2 % du PIB en 2025, soit 7,4 points de plus que la moyenne de la zone euro.",
    source: "OCDE, Études économiques de l’OCDE : France 2026",
    url: "https://www.oecd.org/en/publications/oecd-economic-surveys-france-2026_e88a1716-en/full-report/putting-public-finances-on-a-sustainable-path-while-boosting-long-term-growth_a7381159.html"
  },
  {
    fact: "Le ratio impôts/PIB de la France était de 43,5 % en 2024, contre 34,1 % en moyenne OCDE ; la France se classait deuxième parmi 38 pays.",
    source: "OCDE, Revenue Statistics 2025 — France",
    url: "https://www.oecd.org/content/dam/oecd/en/publications/reports/2025/12/revenue-statistics-2025-country-notes_3708be73/france_77750c88/c55b0aeb-en.pdf"
  },
  {
    fact: "L’OCDE estime que la stabilisation de la dette française dépendra principalement de la maîtrise des dépenses, tout en recommandant de préserver les dépenses favorables à la croissance.",
    source: "OCDE, Études économiques de l’OCDE : France 2026",
    url: "https://www.oecd.org/en/publications/oecd-economic-surveys-france-2026_e88a1716-en/full-report/putting-public-finances-on-a-sustainable-path-while-boosting-long-term-growth_a7381159.html"
  }
];

const SYSTEM_PROMPT = `Tu es un analyste politique français expérimenté. Ta tâche n’est pas de réciter des scores, mais de reconstruire le raisonnement politique de la personne à partir de ses 80 réponses, de ses précisions et de ses réponses ouvertes.

OBJECTIF DE QUALITÉ
- Produis une véritable analyse interprétative, précise et personnelle, pas un horoscope politique ni une paraphrase générique.
- Commence par une thèse claire sur la logique générale du profil : ce que la personne cherche à préserver, ce qu’elle accepte, ce qu’elle refuse et selon quels principes.
- Analyse indépendamment des partis avant de commenter les correspondances calculées.
- Cherche les distinctions conceptuelles révélatrices : égalité de départ contre égalité de résultat, État social contre hausse continue des prélèvements, liberté individuelle contre ordre public, souveraineté contre coopération, écologie par la technologie contre écologie par la contrainte, etc. Ne les affirme que si elles sont réellement soutenues par les réponses.
- Repère les raisonnements conditionnels : « favorable en théorie mais pas dans le contexte français », « intervention de l’État dans certains secteurs mais pas gestion directe », « maintien d’un système sans volonté de l’étendre », etc.
- Les contradictions apparentes doivent être traitées comme des tensions ou arbitrages à expliquer, pas comme des erreurs.

UTILISATION DES RÉPONSES
- Utilise les 80 notes, les commentaires associés et les questions ouvertes. Les commentaires ont priorité pour comprendre une note ambiguë.
- Cite ponctuellement de courtes formulations de la personne entre guillemets lorsque cela éclaire réellement son raisonnement. Ne mentionne jamais les numéros ou identifiants des questions dans le texte final : pas de « Q21 », « question 21 » ou équivalent. Ne multiplie pas les citations.
- Pour chaque axe, explique successivement : ce que la personne accepte ; ce qu’elle refuse ; le principe qui relie ces choix ; les nuances ou exceptions.
- Ne transforme pas mécaniquement un score positif ou négatif en étiquette. Les réponses concrètes priment sur la coordonnée.

PROFIL POLITIQUE INDÉPENDANT
- Donne une étiquette synthétique indépendante du classement des partis. Elle peut combiner plusieurs traditions : par exemple centre-droit technocratique, gaullisme social, libéralisme conservateur, social-libéralisme, souverainisme modéré, etc.
- Explique chaque terme de l’étiquette à partir des réponses concrètes.
- Si la personne se décrit elle-même dans une question ouverte, compare cette auto-description à ce que montrent les réponses : confirme-la, nuance-la ou corrige-la avec tact.
- Termine cette partie par un positionnement simple domaine par domaine, sans réduire la personne à gauche/droite : économie, État social, libertés individuelles, sécurité/autorité, immigration, Europe, écologie et institutions.

CORRESPONDANCES AVEC LES PARTIS
- N’aborde les partis qu’après le profil indépendant.
- Analyse les trois meilleures correspondances comme des proximités partielles. Pour chacune, indique les raisons concrètes de la proximité et au moins une divergence importante.
- Ne confonds jamais proximité mathématique et identité politique.

REPÈRES FACTUELS
- Tu reçois un petit ensemble de faits officiels vérifiés. Utilise au maximum deux de ces faits, uniquement lorsqu’ils éclairent directement un raisonnement exprimé par la personne.
- Reprends exactement les chiffres et les sources fournis. N’invente aucune autre statistique, étude, citation, URL ou donnée externe.
- Le fait doit soutenir ou contextualiser le raisonnement, jamais le déclarer vrai par autorité.

STYLE
- Écris en français, de façon analytique, nuancée et accessible.
- Le lecteur ne doit jamais voir les numéros techniques des questions. Reformule naturellement les éléments pertinents sans écrire « Q… », « question n°… » ou « question 21 ».
- Privilégie des paragraphes courts et, lorsque cela clarifie le raisonnement, de petites listes introduites par une phrase.
- Évite les formulations vagues comme « votre profil est complexe et nuancé » sans explication concrète.
- Utilise le tutoiement, comme dans le questionnaire.
- Longueur cible : 1 600 à 2 300 mots.

GARDE-FOUS
- Ne recommande jamais de vote, ne cherche pas à persuader et ne hiérarchise pas moralement les camps.
- Les pourcentages sont des distances mathématiques, pas des taux d’adhésion à un programme.
- Les profils des partis reposent surtout sur leurs programmes officiels et positions publiques documentées, sans analyse exhaustive de leurs votes réels à l’Assemblée nationale.
- Ne déduis pas d’identité définitive, d’intention de vote ou d’attribut personnel sensible.
- Si un texte libre contient une information personnelle, n’en reproduis que ce qui est strictement nécessaire à l’analyse politique.
- Respecte exactement le schéma JSON demandé.`;

function clientIp(req) {
  const forwarded = String(req.headers["x-forwarded-for"] || "").split(",")[0].trim();
  return forwarded || req.socket.remoteAddress || "unknown";
}

function rateAllowed(ip) {
  const now = Date.now();
  const recent = (rateBuckets.get(ip) || []).filter(time => now - time < RATE_WINDOW_MS);
  if (recent.length >= RATE_LIMIT_MAX) return false;
  recent.push(now);
  rateBuckets.set(ip, recent);
  return true;
}

function textLength(value, max) {
  return typeof value === "string" && value.length <= max;
}

function validatePayload(payload) {
  if (!payload || typeof payload !== "object") return false;
  if (payload.consent !== true || payload.age_confirmed !== true) return false;
  if (!payload.axis_scores || typeof payload.axis_scores !== "object") return false;
  if (!Array.isArray(payload.question_responses) || payload.question_responses.length !== 80) return false;
  for (const item of payload.question_responses) {
    if (!item || typeof item !== "object") return false;
    if (!Number.isInteger(item.id) || item.id < 1 || item.id > 80) return false;
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

function extractGeminiText(data) {
  const candidate = data?.candidates?.[0];
  if (!candidate) return "";
  return (candidate.content?.parts || []).map(part => typeof part.text === "string" ? part.text : "").join("").trim();
}

function mockAnalysis(payload) {
  const axes = Object.entries(payload.axis_scores || {}).map(([axis, value]) => ({
    axis,
    analysis: `Votre score de ${value} sur cet axe est mis en regard de vos réponses détaillées et de leurs commentaires. Cette phrase de démonstration est remplacée par une analyse Gemini lorsque la clé est configurée.`
  }));
  const parties = (payload.party_ranking || []).slice(0, 3).map(x => ({
    party: x.name,
    analysis: `Cette correspondance calculée de ${x.score} % doit être lue comme une distance relative, avec des accords et des divergences.`
  }));
  return {
    title: "Un profil politique multidimensionnel",
    overview: `Cette analyse de démonstration confirme que l'intégration Gemini fonctionne et que ${payload.question_responses?.length || 0} réponses détaillées ont été reçues.`,
    independent_profile: {
      label: "Profil politique multidimensionnel",
      analysis: "Cette étiquette de démonstration sera remplacée par une lecture indépendante et argumentée lorsque Gemini sera appelé."
    },
    axis_analysis: axes,
    party_analysis: parties,
    tensions: [
      "Vos arbitrages peuvent différer selon les domaines.",
      "Une proximité moyenne peut masquer des désaccords importants sur certaines mesures."
    ],
    international_comparison: "Les gouvernements étrangers servent de points de comparaison et non de modèles à suivre.",
    conclusion: "Votre profil doit être lu comme une combinaison de préférences, pas comme une étiquette politique définitive.",
    factual_references: [],
    caveat: "Résultat de démonstration. Les scores sont des distances calculées et non des taux d'adhésion ni des recommandations de vote."
  };
}

async function analyse(payload) {
  if (MOCK) return mockAnalysis(payload);
  if (!API_KEY) throw new Error("GEMINI_API_KEY_NOT_CONFIGURED");

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 90_000);
  try {
    const endpoint = `${API_BASE_URL}/models/${encodeURIComponent(MODEL)}:generateContent`;
    const response = await fetch(endpoint, {
      method: "POST",
      signal: controller.signal,
      headers: {
        "x-goog-api-key": API_KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
        contents: [{
          role: "user",
          parts: [{
            text: `Voici les résultats structurés du questionnaire. Analyse toutes les réponses, y compris les commentaires et les questions ouvertes. Commence par reconstruire le raisonnement propre de la personne avant d’examiner les partis. Les faits officiels ci-dessous sont les seuls repères externes autorisés ; ne les utilise que s’ils sont directement pertinents.\n\nREPÈRES OFFICIELS AUTORISÉS :\n${JSON.stringify(REFERENCE_CONTEXT)}\n\nRÉSULTATS DU QUESTIONNAIRE :\n${JSON.stringify(payload)}`
          }]
        }],
        generationConfig: {
          maxOutputTokens: 8_000,
          responseMimeType: "application/json",
          responseJsonSchema: schema
        },
        store: false
      })
    });

    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      const message = data?.error?.message || `Erreur Gemini (${response.status})`;
      throw new Error(message);
    }
    const text = extractGeminiText(data);
    if (!text) throw new Error("Réponse Gemini vide");
    const cleaned = text.replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/, "").trim();
    try {
      return JSON.parse(cleaned);
    } catch {
      throw new Error("La réponse Gemini n’était pas un JSON valide.");
    }
  } finally {
    clearTimeout(timeout);
  }
}

export {
  API_KEY, MODEL, SERVICE_TIER, MOCK, MAX_BODY_BYTES,
  clientIp, rateAllowed, validatePayload, analyse
};
