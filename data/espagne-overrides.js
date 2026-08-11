const ESPAGNE_RESPONSE_OVERRIDES = {
  9: {
    response: -2,
    justification: "Désaccord net : le gouvernement Sánchez poursuit la réduction du déficit et de la dette, mais refuse d'en faire dépendre la réussite de coupes importantes dans la protection sociale. Il augmente simultanément les moyens consacrés aux retraites, à la dépendance, au logement, aux bourses et aux services publics ; -2 est plus précis que -1.",
    source: "https://www.hacienda.gob.es/ca-es/prensa/noticias/paginas/2026/20260707-np-cm-techo-gastos-2027.aspx"
  },
  15: {
    response: -3,
    justification: "Désaccord très fort : la Constitution espagnole impose que les budgets généraux de l'État soient examinés et approuvés par les Cortes Generales. Si un nouveau budget n'est pas adopté à temps, l'ancien est automatiquement prorogé ; le gouvernement ne peut donc pas mettre unilatéralement en vigueur son propre budget pour contourner l'absence de majorité parlementaire. La proposition est directement contraire au cadre constitutionnel ; -3 est adapté.",
    source: "https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229"
  },
  32: {
    response: 1,
    justification: "Accord modéré : le gouvernement Sánchez mène une politique climatique ambitieuse et veut accélérer fortement la décarbonation, mais il présente cette transition comme devant renforcer la compétitivité, réduire le coût de l'énergie et soutenir l'investissement et la croissance. Il ne défend donc pas clairement le principe selon lequel le climat devrait rester prioritaire même au prix d'une baisse de la croissance à court terme ; +1 est plus précis que +2.",
    source: "https://www.lamoncloa.gob.es/presidente/intervenciones/paginas/2026/20260427-transcripcion-sanchez-in-spain-summit.aspx"
  },
  33: {
    response: 1,
    justification: "Accord modéré : l'Espagne accepte la tarification carbone européenne et prépare des mécanismes de compensation pour accompagner son extension, mais le gouvernement cherche parallèlement à limiter les fortes hausses du prix des carburants et de l'énergie supportées par les ménages. Il accepte donc le signal-prix carbone sans assumer une hausse importante et durable du coût des énergies fossiles pour la population ; +1 est plus précis que +2.",
    source: "https://www.miteco.gob.es/es/prensa/ultimas-noticias/2026/mayo/el-gobierno-impulsa-un-plan-social-para-el-clima-de-9-099-millon.html"
  },
  45: {
    response: -3,
    justification: "Désaccord très fort : en Espagne, les résidents fiscaux sont imposés sur leur patrimoine mondial, mais les non-résidents ne sont normalement soumis à l'impôt sur le patrimoine qu'au titre des biens et droits situés en Espagne. Quitter le pays met donc fin, en principe, à l'imposition obligatoire du patrimoine mondial ; -3 est plus adapté que +1 à la proposition qui demande de maintenir cette imposition après expatriation.",
    source: "https://sede.agenciatributaria.gob.es/Sede/no-residentes/impuesto-sobre-patrimonio/exigibilidad-impuesto-sobre-patrimonio-no-residentes.html"
  },
  88: {
    response: -3,
    justification: "Désaccord très fort : Pedro Sánchez a explicitement rejeté l'idée de renforcer la sécurité européenne par davantage d'armement nucléaire et défend au contraire une dissuasion européenne fondée prioritairement sur des capacités conventionnelles, accompagnée d'une logique de désarmement nucléaire. Étendre la garantie nucléaire française à d'autres États européens va donc directement à l'encontre de cette ligne ; -3 est plus adapté que -2.",
    source: "https://www.lamoncloa.gob.es/presidente/actividades/Paginas/2026/140226-sanchez-conferencia-seguridad-munich.aspx"
  }
};

const espagneGovernment = DATA.entities.find(entity => entity.id === 'espagne');
if (espagneGovernment) {
  const questionIndexById = new Map(DATA.questions.map((question, index) => [question.id, index]));

  Object.entries(ESPAGNE_RESPONSE_OVERRIDES).forEach(([questionId, override]) => {
    const index = questionIndexById.get(Number(questionId));
    if (index === undefined) return;
    espagneGovernment.responses[index] = override.response;
    espagneGovernment.justifications[index] = override.justification;
    if (Array.isArray(espagneGovernment.sources)) espagneGovernment.sources[index] = override.source;
  });

  const scores = {};
  DATA.axes.forEach(axis => {
    const denominator = 3 * DATA.questions.reduce(
      (sum, question) => sum + Math.abs(question.coefficients[axis.key]),
      0
    );
    const numerator = DATA.questions.reduce(
      (sum, question, index) => sum + (espagneGovernment.responses[index] ?? 0) * question.coefficients[axis.key],
      0
    );
    scores[axis.key] = denominator ? 10 * numerator / denominator : 0;
  });
  espagneGovernment.axisScores = scores;
}
