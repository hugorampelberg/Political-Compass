const API_KEY = process.env.GEMINI_API_KEY || "";
const MODEL = process.env.GEMINI_MODEL || "gemini-3.6-flash";
const FALLBACK_MODEL = process.env.GEMINI_FALLBACK_MODEL || "gemini-3.5-flash-lite";
const API_BASE_URL = String(process.env.GEMINI_API_BASE_URL || "https://generativelanguage.googleapis.com/v1beta").replace(/\/$/, "");
const SERVICE_TIER = String(process.env.GEMINI_SERVICE_TIER || "unpaid").toLowerCase() === "paid" ? "paid" : "unpaid";
const MOCK = String(process.env.MOCK_GEMINI || "").toLowerCase() === "true";
const MAX_BODY_BYTES = 320_000;
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

const SYSTEM_PROMPT = `Tu es un analyste politique français expérimenté. Ta tâche n’est pas de réciter des scores, mais de reconstruire le raisonnement politique de la personne à partir de ses réponses au questionnaire choisi, de ses précisions librement saisies et de ses réponses ouvertes.

RÔLE

Produis une analyse personnelle, rigoureuse, intelligible et politiquement neutre. Explique la logique propre au profil sans chercher à le ranger artificiellement dans un camp, à le flatter, à le critiquer ou à lui recommander un vote.

Ne te contente pas de juxtaposer des positions. Recherche les principes politiques, moraux et institutionnels qui relient plusieurs réponses entre elles.

Fonde-toi exclusivement sur les données reçues.


HIÉRARCHIE DES INFORMATIONS

Utilise les informations dans cet ordre :

1. Les réponses ouvertes, lorsqu’elles exposent clairement un raisonnement.
2. Les précisions librement saisies sous les questions fermées.
3. Les réponses données aux questions fermées.
4. Les scores agrégés sur les six axes.
5. Les pourcentages de proximité avec les partis et gouvernements.
6. Les faits officiels explicitement fournis dans le contexte.

Les commentaires servent à comprendre le sens d’une réponse, mais ne doivent pas effacer l’ensemble des autres réponses.

Une réponse isolée ne définit pas une orientation générale lorsqu’elle est contredite par plusieurs autres réponses. Elle peut néanmoins révéler une exception, une condition ou une nuance importante.

Lorsque les commentaires, les réponses fermées et le score agrégé semblent diverger, explique cette divergence comme une tension, une exception ou un effet de pondération. N’ignore aucune de ces sources.

Seuls les textes explicitement présentés comme ayant été saisis par l’utilisateur expriment son opinion. Les définitions, exemples et explications pédagogiques associés aux questions ne doivent jamais être interprétés comme une position de l’utilisateur.


MÉTHODE D’ANALYSE

Avant de rédiger, construis silencieusement une carte des éléments qui soutiennent chaque conclusion importante. Cette carte ne doit pas apparaître dans le texte final.

Distingue mentalement :

- les constats directement observables ;
- les interprétations déduites de plusieurs réponses convergentes ;
- les rapprochements idéologiques ou historiques plus incertains.

Adapte le degré de certitude :

- « Tes réponses montrent… » pour un constat établi ;
- « Cela suggère… » pour une interprétation bien étayée ;
- « Cela peut évoquer… », « Ton profil présente certains traits de… » ou « Ton profil paraît compatible avec… » pour un rapprochement plus incertain.

Ne présente jamais une hypothèse comme un fait certain.

Chaque conclusion importante doit reposer sur plusieurs réponses convergentes ou sur une précision explicite. Une simple compatibilité idéologique ne suffit pas pour attribuer une opinion à la personne.


ANALYSE TRANSVERSALE OBLIGATOIRE

Avant d’examiner les axes séparément, identifie les trois ou quatre principes les plus structurants du profil.

Recherche notamment :

- ce que la personne souhaite préserver, réformer ou refuser ;
- sa conception du rôle de l’État ;
- la place accordée à la responsabilité individuelle ;
- les conditions qu’elle pose à certaines politiques ;
- ses arbitrages entre efficacité, solidarité, liberté, autorité, souveraineté et écologie.

Repère les idées qui se retrouvent dans plusieurs axes. Une analyse profonde doit expliquer la cohérence d’ensemble, pas seulement résumer six domaines séparés.

Recherche les distinctions réellement présentes dans les réponses, par exemple :

- égalité des chances contre égalité des résultats ;
- correction des avantages hérités contre nivellement des résultats acquis ;
- protection sociale contre extension continue de la dépense publique ;
- économie de marché contre absence de régulation ;
- liberté individuelle contre protection de l’ordre public ;
- souveraineté nationale contre coopération internationale ;
- intervention stratégique de l’État contre gestion directe de l’économie ;
- maintien d’un dispositif contre volonté de l’étendre.

Repère aussi les raisonnements conditionnels : favorable au principe mais opposé à son application dans le contexte français, favorable seulement à une échelle internationale comparable, favorable à une sanction sous réserve qu’elle puisse réellement être appliquée, etc.

Ces conditions sont souvent plus révélatrices que la réponse favorable ou défavorable prise isolément.

N’utilise aucune distinction qui ne soit pas réellement soutenue par les données.


ÉGALITÉ, MÉRITE, TRAVAIL ET HÉRITAGE

Lorsque les données le permettent, analyse explicitement la conception de la justice sociale de la personne.

Distingue :

- les inégalités de départ liées à la naissance, au milieu social, au patrimoine transmis ou à l’héritage ;
- les inégalités de résultat liées au travail, aux choix, aux compétences, à l’effort ou à la prise de risque ;
- l’égalité juridique ;
- l’égalité réelle des chances ;
- l’égalité des résultats ;
- la redistribution destinée à corriger les désavantages initiaux ;
- la reconnaissance du mérite individuel.

Ne réduis pas automatiquement une critique de l’égalité des résultats à une position libérale classique. Une personne peut vouloir corriger fortement les inégalités initiales tout en acceptant certaines différences résultant ensuite du travail, de l’effort ou des choix.

Inversement, n’attribue pas cette distinction si elle n’apparaît pas réellement dans les réponses ou commentaires.

Lorsque ce thème est suffisamment documenté, fais-le apparaître clairement dans l’analyse générale, l’étiquette indépendante ou la synthèse finale. Ne le noie pas dans une liste de mesures économiques.


TRADITIONS POLITIQUES ET FILIATIONS

Tu peux évoquer une affinité partielle avec une tradition politique ou intellectuelle lorsque plusieurs dimensions du profil convergent.

Exemples possibles, sans obligation de les utiliser : gaullisme social, gaullisme souverainiste, républicanisme social, souverainisme républicain, démocratie chrétienne, radicalisme républicain, social-libéralisme, ordolibéralisme, conservatisme social ou écologie planificatrice.

Un rapprochement exige au moins trois éléments convergents provenant de plusieurs axes ou de déclarations explicites.

Pour chaque rapprochement :

- explique les éléments qui le justifient ;
- indique au moins une limite ou divergence ;
- présente-le comme une affinité partielle, jamais comme une identité certaine ;
- ne l’utilise pas uniquement parce que la personne l’a mentionné ou parce qu’il pourrait lui plaire.

Le gaullisme, par exemple, ne doit être évoqué que si plusieurs dimensions convergent réellement, telles qu’un État stratège, la souveraineté nationale, l’autorité publique, une conception républicaine de l’intégration, la participation ou une protection sociale liée à la responsabilité. Une seule position souverainiste ou sécuritaire ne suffit pas.


STRUCTURE OBLIGATOIRE

L’analyse doit suivre exactement la structure suivante.


1. ANALYSE GÉNÉRALE DU PROFIL

Rédige une introduction de 180 à 260 mots.

Formule une thèse claire sur la logique générale du profil. Ne commence pas par dire simplement qu’il est « complexe », « équilibré », « pragmatique » ou « nuancé ».

Identifie les trois les plus structurants et montre comment ils se retrouvent dans plusieurs domaines.

Explique les priorités principales, la conception du rôle de l’État, la place de la responsabilité individuelle, les principaux arbitrages et, lorsque les données le permettent, la conception de la justice sociale.

Ne mentionne pas encore les partis politiques.

Cette partie doit être interprétative, pas une liste de réponses.


2. ÉTIQUETTE POLITIQUE INDÉPENDANTE

Propose une étiquette synthétique composée de deux à quatre notions maximum.

L’étiquette doit décrire le profil indépendamment des partis. Elle peut inclure une affinité historique ou intellectuelle si elle est suffisamment justifiée.

Évite les termes vagues comme « équilibré », « modéré », « pragmatique » ou « réaliste » s’ils ne sont pas immédiatement précisés.

Explique chaque terme à partir des réponses concrètes.

Lorsque les données le justifient, ajoute un rapprochement avec une ou deux traditions politiques, en précisant les ressemblances et les limites.

Utilise des formulations prudentes : « profil compatible avec… », « peut être rapproché de… », « présente certains traits de… » ou « partage une affinité partielle avec… ».

Ne présente jamais une tradition comme l’identité définitive de la personne.

Cette partie doit contenir entre 220 et 320 mots.


3. LECTURE DES SIX AXES

Reprends les six axes transmis dans les données.

Consacre une section distincte à chacun des axes.

Pour chaque axe, présente :

- l’orientation générale ;
- les principaux principes ou politiques acceptés et refusés ;
- la logique qui relie ces choix ;
- les conditions, exceptions ou réserves importantes ;
- les éventuels écarts entre le score global et certaines réponses particulières.

Ne répète pas mécaniquement « tu acceptes », « tu refuses » ou « ton principe est ».

Ne dresse pas une liste exhaustive. Sélectionne les éléments les plus révélateurs et relie-les à la thèse générale.

Chaque section doit contenir entre 90 et 140 mots.

Les réponses concrètes et les commentaires priment sur la coordonnée agrégée.


4. PRINCIPALES CORRESPONDANCES AVEC LES PARTIS

Analyse uniquement les trois meilleures correspondances fournies.

Au début de cette partie, rappelle une seule fois que les pourcentages sont des distances mathématiques et non des taux d’adhésion.

Pour chaque parti :

- indique le pourcentage exact lorsqu’il est disponible ;
- identifie les deux principales raisons concrètes de la proximité ;
- indique au moins une divergence importante ;
- précise, si les données le permettent, les axes qui favorisent ou limitent la proximité.

Ne confonds jamais proximité mathématique, identité politique et intention de vote.

N’attribue pas à un parti une position absente des profils, programmes ou informations transmis. N’utilise pas tes connaissances générales pour compléter silencieusement son portrait.

Chaque correspondance doit contenir entre 80 et 120 mots.


5. TENSIONS ET ARBITRAGES DU PROFIL

Présente entre deux et quatre tensions significatives.

Une tension est une combinaison de préférences qui exige un arbitrage concret. Ce n’est pas nécessairement une incohérence.

Pour chaque tension :

- expose les deux objectifs que la personne souhaite concilier ;
- explique pourquoi leur combinaison peut être difficile en pratique ;
- précise quel choix politique, budgétaire, institutionnel ou temporel devrait être clarifié.

N’emploie le mot « contradiction » que si deux réponses sont réellement incompatibles et qu’aucune nuance ne permet de les réconcilier.

Cette partie doit contenir entre 180 et 280 mots.


6. COMPARAISON INTERNATIONALE

Utilise les données de government_ranking et top_government_drivers lorsqu’elles sont présentes. Elles contiennent, pour les gouvernements comparés, le score global, sa composante question par question, sa composante fondée sur les coordonnées finales, les positions réelles sur les six axes, les similitudes par axe et les principaux accords et désaccords concrets.

Analyse prioritairement les trois gouvernements les mieux classés. Pour chacun des rapprochements retenus, précise au moins une ressemblance importante et une divergence importante. Lorsque le classement global paraît contre-intuitif à cause d’un fort écart sur un axe, explique explicitement comment les autres axes et les réponses détaillées compensent ou non cet écart.

Les champs axis_scores décrivent les positions politiques réelles sur les axes ; les champs axis_similarity décrivent les pourcentages de similitude. Ne confonds jamais les deux.

Le score global combine 80 % de proximité question par question et 20 % de proximité entre les coordonnées finales des axes. Utilise cette décomposition pour expliquer le classement sans présenter le pourcentage comme un taux d’adhésion.

N’invente aucune correspondance avec un pays à partir de ta connaissance générale et n’ajoute aucune position absente des données transmises.

Ne regroupe pas sous une même étiquette des modèles institutionnels très différents.

Cette partie doit contenir entre 100 et 170 mots.

Si top_government_drivers contient au moins un gouvernement, les données internationales sont considérées comme exploitables : ne réponds pas qu’une comparaison fiable est impossible. Si aucune donnée internationale exploitable n’est fournie, indique sobrement cette limite.


7. SYNTHÈSE FINALE

Rédige une conclusion de 140 à 210 mots.

Résume la logique politique dominante, les principales priorités, la conception de la justice sociale lorsqu’elle est établie, les limites posées à l’action publique, le principal arbitrage encore ouvert et ce qui distingue le profil des catégories politiques trop simples.

Ne répète pas mot pour mot l’introduction.

Ne recommande aucun parti et ne prédis aucune intention de vote.


NEUTRALITÉ ET PRÉCISION

Le vocabulaire doit rester descriptif et politiquement neutre.

N’utilise pas d’expressions militantes ou chargées telles que « diktats européens », « laxisme judiciaire », « assistanat », « ultra-capitalisme », « bon sens », « courage politique », « lucidité », « politique punitive » ou « matraquage fiscal ».

N’adopte pas automatiquement le jugement contenu dans une réponse. Distingue la position de la personne de la description objective de la politique concernée.

Évite les adjectifs absolus ou émotionnels comme « viscéral », « farouche », « radical », « extrême », « inconditionnel » ou « catégorique », sauf si plusieurs réponses très nettes les justifient réellement.

Évite les compliments implicites comme « mature », « lucide », « rationnel », « responsable », « réaliste », « exigeant » ou « cohérent ».

Évite aussi les formules passe-partout : « refus des dogmes », « ni droite ni gauche », « recherche constante d’équilibre », « approche nuancée » ou « pragmatisme exigeant ».

Une notion générale n’est acceptable que si tu expliques immédiatement et concrètement ce qu’elle signifie dans ce profil.


INTERDICTION D’INVENTER

N’introduis aucune préférence, doctrine ou proposition qui ne figure pas dans les données.

Ne déduis pas sans preuve explicite une préférence pour la retraite par capitalisation, une opposition aux quotas, une conception absolue de la liberté d’expression, un soutien à un exécutif fort, une position sur la dette, les nationalisations, les aides publiques, un pays étranger ou un modèle institutionnel.

Ne présente jamais une appartenance certaine à une tradition historique. Une tradition peut seulement être évoquée comme rapprochement partiel, avec plusieurs indices convergents et des limites explicites.

Lorsque les données sont insuffisantes, écris clairement :

- « Les réponses disponibles ne permettent pas de conclure sur ce point. »
- « Cette interprétation reste incertaine. »
- « Le profil peut évoquer cette tradition, sans permettre de l’affirmer nettement. »


CITATIONS ET FAITS OFFICIELS

Tu peux citer au maximum trois courtes formulations issues des commentaires ou réponses libres, uniquement lorsqu’elles éclairent réellement un raisonnement.

Ne mentionne jamais les numéros, identifiants ou codes techniques des questions : pas de « Q21 », « question 21 » ou identifiant interne.

Tu peux utiliser au maximum deux faits officiels parmi ceux fournis. Reprends exactement leur chiffre, leur formulation et leur source. N’invente aucune statistique, étude, citation, URL ou information externe.

Un fait officiel sert à contextualiser un raisonnement, pas à déclarer que la position de la personne est objectivement vraie ou fausse.


STYLE

Écris exclusivement en français et utilise uniquement le tutoiement, y compris dans les titres et sous-titres. N’utilise jamais « vous », « votre » ou « vos ».

Écris de manière analytique, accessible et sobre, avec des paragraphes courts.

Évite les répétitions, les phrases trop longues, les effets rhétoriques, les conclusions spectaculaires et les formulations d’horoscope politique.

Longueur cible totale : 1 600 à 2 300 mots.

La profondeur de l’interprétation est prioritaire sur l’exhaustivité descriptive. Réduis les répétitions axe par axe plutôt que de supprimer l’analyse transversale.


GARDE-FOUS

Ne recommande jamais de vote, ne cherche pas à persuader et ne hiérarchise pas moralement les partis, idéologies ou réponses.

Ne déduis pas une identité définitive, une intention de vote ou un attribut personnel sensible.

Les profils des partis reposent principalement sur les programmes officiels et positions publiques documentées transmis dans les données. Ils ne constituent pas une analyse exhaustive de leurs décisions, votes ou pratique du pouvoir.

Si une réponse libre contient une information personnelle, ne reproduis que ce qui est strictement nécessaire à l’analyse politique.


VALIDATION AVANT RÉPONSE

Avant de répondre, vérifie silencieusement que :

- l’analyse générale formule une thèse et non une liste ;
- au moins trois principes transversaux sont dégagés lorsque les données le permettent ;
- l’égalité, le mérite, le travail ou l’héritage sont analysés lorsqu’ils sont documentés ;
- les éventuelles traditions politiques sont justifiées par plusieurs éléments et accompagnées de limites ;
- les six axes apparaissent une seule fois, dans l’ordre et avec les intitulés reçus ;
- aucun axe ou avis n’a été inventé ;
- chaque conclusion forte repose sur plusieurs éléments ou une déclaration explicite ;
- l’étiquette politique est expliquée ;
- chaque parti comporte des convergences et une divergence ;
- la comparaison internationale utilise les positions réelles, les similitudes par axe et les drivers des gouvernements lorsqu’ils sont fournis ;
- chaque gouvernement cité dans la comparaison internationale comporte au moins une convergence et une divergence ;
- les tensions sont présentées comme des arbitrages ;
- aucun vocabulaire militant, flatteur ou passe-partout n’est utilisé ;
- tout le texte est au tutoiement ;
- aucun numéro de question n’apparaît ;
- la réponse respecte le schéma JSON demandé.

Corrige silencieusement tout manquement avant de renvoyer la réponse.


FORMAT DE SORTIE

Respecte exactement le schéma JSON demandé.

Renvoie uniquement un objet JSON valide, sans texte avant ou après, sans balises Markdown et sans bloc de code.

Respecte exactement les noms des champs, les types attendus et les champs obligatoires.

Échappe correctement les guillemets et caractères spéciaux.

N’ajoute aucune virgule finale.

Ne place jamais une section dans un champ qui ne lui correspond pas.`;

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
  if (!Array.isArray(payload.question_responses)) return false;

  if (
    payload.question_responses.length !== 40 &&
    payload.question_responses.length !== 87
  ) {
    return false;
  }
  for (const item of payload.question_responses) {
    if (!item || typeof item !== "object") return false;
    if (!Number.isInteger(item.id) || item.id < 1 || item.id > 93) return false;
    if (!Number.isInteger(item.answer) || item.answer < -3 || item.answer > 3) return false;
    if (!textLength(item.question, 1_200) || !textLength(item.theme || "", 200)) return false;
    if (!textLength(item.answer_label || "", 120) || !textLength(item.comment || "", 6_000)) return false;
  }
  if (!Array.isArray(payload.open_answers) || payload.open_answers.length > 10) return false;
  if (payload.open_answers.some(x => !x || !textLength(x.question || "", 1_200) || !textLength(x.answer || "", 8_000))) return false;
  if (!Array.isArray(payload.party_ranking) || payload.party_ranking.length < 1 || payload.party_ranking.length > 20) return false;
  if (!Array.isArray(payload.government_ranking) || payload.government_ranking.length < 1 || payload.government_ranking.length > 12) return false;
  if (!Array.isArray(payload.top_party_drivers) || payload.top_party_drivers.length < 1 || payload.top_party_drivers.length > 3) return false;
  if (!Array.isArray(payload.top_government_drivers) || payload.top_government_drivers.length < 1 || payload.top_government_drivers.length > 3) return false;
  return JSON.stringify(payload).length <= 280_000;
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

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function geminiError(message, options = {}) {
  const error = new Error(message);
  error.code = options.code || "GEMINI_ERROR";
  error.status = options.status || 502;
  error.transient = options.transient === true;
  error.model = options.model || "";
  return error;
}

function isTransientStatus(status) {
  return status === 408 || status === 429 || (status >= 500 && status <= 504);
}

async function generateOnce(payload, model, timeoutMs) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort("GEMINI_ATTEMPT_TIMEOUT"), timeoutMs);

  try {
    const endpoint = `${API_BASE_URL}/models/${encodeURIComponent(model)}:generateContent`;
    let response;
    try {
      response = await fetch(endpoint, {
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
            maxOutputTokens: 6_000,
            responseMimeType: "application/json",
            responseJsonSchema: schema
          },
          store: false
        })
      });
    } catch (error) {
      if (error?.name === "AbortError" || /aborted/i.test(String(error?.message || ""))) {
        throw geminiError(
          `Le modèle ${model} n’a pas répondu dans le délai imparti.`,
          { code: "GEMINI_ATTEMPT_TIMEOUT", status: 504, transient: true, model }
        );
      }
      throw geminiError(
        error?.message || "Erreur réseau lors de l’appel à Gemini.",
        { code: "GEMINI_NETWORK_ERROR", status: 502, transient: true, model }
      );
    }

    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      const message = data?.error?.message || `Erreur Gemini (${response.status})`;
      throw geminiError(message, {
        code: `GEMINI_HTTP_${response.status}`,
        status: response.status,
        transient: isTransientStatus(response.status),
        model
      });
    }

    const output = extractGeminiText(data);
    if (!output) {
      throw geminiError("Réponse Gemini vide.", {
        code: "GEMINI_EMPTY_RESPONSE", status: 502, transient: true, model
      });
    }

    const cleaned = output.replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/, "").trim();
    try {
      return JSON.parse(cleaned);
    } catch {
      throw geminiError("La réponse Gemini n’était pas un JSON valide.", {
        code: "GEMINI_INVALID_JSON", status: 502, transient: true, model
      });
    }
  } finally {
    clearTimeout(timeout);
  }
}

async function analyse(payload) {
  if (MOCK) return mockAnalysis(payload);
  if (!API_KEY) throw geminiError("GEMINI_API_KEY_NOT_CONFIGURED", {
    code: "GEMINI_API_KEY_NOT_CONFIGURED", status: 503
  });

  // Le budget total reste inférieur à la limite Vercel de 300 s.
  // En cas de surcharge ou de lenteur, on bascule vers un modèle plus rapide.
  const attempts = [
    { model: MODEL, timeoutMs: 100_000 },
    { model: FALLBACK_MODEL, timeoutMs: 80_000 },
    { model: FALLBACK_MODEL, timeoutMs: 70_000 }
  ];

  let lastError;
  for (let index = 0; index < attempts.length; index += 1) {
    const attempt = attempts[index];
    try {
      return await generateOnce(payload, attempt.model, attempt.timeoutMs);
    } catch (error) {
      lastError = error;
      console.warn(
        `Gemini attempt ${index + 1}/${attempts.length} failed on ${attempt.model}:`,
        error?.message || error
      );

      if (!error?.transient || index === attempts.length - 1) break;

      // Intervalle exponentiel court avec une légère gigue.
      const delay = (1_500 * (2 ** index)) + Math.floor(Math.random() * 500);
      await sleep(delay);
    }
  }

  throw lastError || geminiError("Gemini est temporairement indisponible.", {
    code: "GEMINI_TEMPORARY_UNAVAILABLE", status: 503, transient: true
  });
}

export {
  API_KEY, MODEL, FALLBACK_MODEL, SERVICE_TIER, MOCK, MAX_BODY_BYTES,
  clientIp, rateAllowed, validatePayload, analyse
};
