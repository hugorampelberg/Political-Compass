const ALLEMAGNE_RESPONSE_OVERRIDES = {
  3: {
    response: 1,
    justification: "Accord modéré : en juillet 2026, le gouvernement Merz a présenté une réforme fiscale visant à alléger les revenus faibles et moyens tout en faisant davantage contribuer les revenus les plus élevés, au nom d'une plus grande justice sociale. Cela va dans le sens d'une fiscalité plus progressive sur les hauts revenus, mais sans programme général de forte taxation des grandes fortunes ; +1 est donc plus précis que -1.",
    source: "https://www.bundesregierung.de/breg-de/aktuelles/regierungserklaerung-merz-juli-26-2446298"
  },
  15: {
    response: -3,
    justification: "Désaccord très fort : le budget fédéral doit être adopté par le Bundestag, qui dispose du pouvoir budgétaire et contrôle l'action du gouvernement. Le chancelier ne peut pas mettre en vigueur seul un nouveau budget afin de contourner l'absence de majorité parlementaire. La proposition est donc directement contraire au fonctionnement institutionnel allemand ; -3 est plus adapté que -2.",
    source: "https://www.bundestag.de/fr/parlement/fonctions"
  },
  28: {
    response: 0,
    justification: "Position intermédiaire : le gouvernement conserve des politiques de prévention et de réinsertion, mais sa politique pénale actuelle comprend parallèlement des durcissements de peines, un renforcement des moyens policiers et une lutte plus ferme contre la criminalité grave et organisée. Il ne privilégie donc pas clairement la prévention et la réinsertion plutôt que l'augmentation des sanctions ; les deux approches sont poursuivies simultanément. Un score neutre est plus précis que +1.",
    source: "https://www.bundesregierung.de/breg-de/bundesregierung/bundeskanzleramt/strafe-k-o-tropfen-2429950"
  },
  50: {
    response: 2,
    justification: "Accord net : la commission allemande sur les retraites a recommandé de relier à terme l'âge légal de départ à l'évolution de l'espérance de vie, selon une règle répartissant l'allongement entre durée d'activité et durée de retraite. Le gouvernement a décidé de reprendre ces recommandations dans sa réforme. Le mécanisme correspond donc clairement à la question, mais sa mise en œuvre reste progressive et future ; +2 est plus prudent que +3.",
    source: "https://www.bmas.de/DE/Soziales/Rente-und-Altersvorsorge/Rentenreform-2025/Rentenkommission-2026/rentenkommission-2026.html"
  },
  55: {
    response: 1,
    justification: "Accord modéré : le gouvernement Merz mène une politique ambitieuse de réduction de la bureaucratie, de simplification des procédures et de diminution des coûts réglementaires pour les entreprises. Mais il présente cette démarche comme la suppression de contraintes inutiles ou disproportionnées, non comme l'acceptation générale d'un affaiblissement des protections sociales ou environnementales. La contrepartie précise de la question limite donc l'accord à +1 plutôt que +2.",
    source: "https://www.bundesregierung.de/breg-de/aktuelles/faq-zur-staatsmodernisierung-2444550"
  },
  63: {
    response: 3,
    justification: "Accord très fort : la réforme du droit de la police fédérale renforce les capacités de surveillance et de collecte préventive d'informations, notamment en matière de menaces graves et terroristes, avant même qu'une infraction déterminée puisse nécessairement être poursuivie. Le principe d'une surveillance préventive ciblée face à un risque terroriste correspond donc directement à la proposition ; +3 est plus adapté que +2.",
    source: "https://www.bundesregierung.de/breg-de/suche/kabinett-bundespolizeigesetz-2387796"
  },
  64: {
    response: 2,
    justification: "Accord net : la liberté d'expression protégée par la Loi fondamentale couvre aussi des propos très offensants ou blessants tant qu'ils ne franchissent pas les limites prévues par le droit pénal et les autres droits fondamentaux. La jurisprudence constitutionnelle exige une véritable mise en balance avant de sanctionner de tels propos. Comme la question exclut déjà les discours violents ou criminels, +2 est plus adapté que +1, sans aller jusqu'à +3 en raison des limites juridiques allemandes relativement développées.",
    source: "https://www.bundesverfassungsgericht.de/SharedDocs/Pressemitteilungen/DE/2026/bvg26-013.html"
  },
  67: {
    response: 1,
    justification: "Accord modéré : l'Allemagne maintient une tarification du CO₂ sur les combustibles et carburants, mais le gouvernement Merz cherche parallèlement à contenir les prix de l'énergie et à alléger la facture des ménages. Les compensations ne prennent pas la forme d'un mécanisme permanent et précisément ciblé sur les ménages modestes en contrepartie de la taxe carbone. La logique générale de la question existe, mais la correspondance est seulement partielle ; +1 est plus précis que +2.",
    source: "https://www.bundesregierung.de/breg-de/aktuelles/gesetzliche-neuregelungen-januar-2026-2399838"
  },
  68: {
    response: -2,
    justification: "Désaccord net : le gouvernement Merz s'oppose à une interdiction rigide des ventes de véhicules thermiques neufs à partir de 2035 et veut préserver après cette date des solutions comme les hybrides rechargeables, les prolongateurs d'autonomie ou certains moteurs très efficaces. Il soutient parallèlement l'électrification et les véhicules électriques, ce qui empêche un désaccord maximal ; -2 est plus précis que -1.",
    source: "https://www.bundesregierung.de/breg-de/suche/automobildialog-im-kanzleramt-2388442"
  },
  69: {
    response: -3,
    justification: "Désaccord très fort : le gouvernement allemand considère la sortie du nucléaire comme irréversible et poursuit parallèlement le développement massif des énergies renouvelables. La proposition de privilégier le nucléaire quitte à réduire certains investissements dans les renouvelables va donc directement à l'encontre de la politique énergétique actuelle ; -3 est plus adapté que -2.",
    source: "https://www.bundesregierung.de/breg-de/aktuelles/regierungspressekonferenz-vom-11-maerz-2026-2410052"
  },
  74: {
    response: -2,
    justification: "Désaccord net : au niveau fédéral, l'Allemagne repose principalement sur une démocratie représentative et ne prévoit des référendums que dans des cas constitutionnels très limités, contrairement aux Länder et aux communes où la démocratie directe est plus développée. Multiplier fortement les référendums fédéraux, y compris sur des sujets techniques, s'écarterait donc nettement du modèle actuel ; -2 est plus précis que -1.",
    source: "https://www.bundestag.de/services/glossar/glossar/D/direkte_demokratie-247316"
  },
  75: {
    response: -3,
    justification: "Désaccord très fort : l'article 38 de la Loi fondamentale impose l'égalité du suffrage, ce qui signifie que chaque voix doit avoir le même poids. Accorder davantage d'influence politique aux citoyens selon leur niveau de connaissance économique ou institutionnelle créerait précisément une inégalité électorale contraire à ce principe ; -3 est plus adapté que -1.",
    source: "https://www.bundestag.de/services/glossar/glossar/W/wahlgrundsaetze-445288"
  },
  76: {
    response: -3,
    justification: "Désaccord très fort : le chancelier allemand est élu par le Bundestag et son gouvernement dépend d'une majorité parlementaire. En cas de perte de soutien, les mécanismes constitutionnels passent par le vote de confiance, le remplacement du chancelier ou éventuellement de nouvelles élections, pas par un pouvoir permettant à l'exécutif de contourner le Parlement. La proposition est donc directement contraire au régime parlementaire allemand ; -3 est adapté.",
    source: "https://www.bundestag.de/services/glossar/glossar/V/vertrauensfrage-245558"
  },
  92: {
    response: 1,
    justification: "Accord modéré : en 2026, le gouvernement allemand débat activement d'un âge minimum pour l'accès aux réseaux sociaux et la ministre fédérale de la Famille a défendu une interdiction avant 13 ans. Cela montre une orientation claire vers une restriction légale de l'accès des mineurs, mais la proposition n'est pas encore une règle gouvernementale définitive, le seuil évoqué est inférieur à 15 ans et la question exclut même le consentement parental. +1 est donc plus précis qu'un score neutre ou plus élevé.",
    source: "https://www.bundesregierung.de/breg-de/aktuelles/regierungspressekonferenz-vom-13-juli-2026-2446818"
  }
};

const allemagneGovernment = DATA.entities.find(entity => entity.id === 'allemagne');
if (allemagneGovernment) {
  const questionIndexById = new Map(DATA.questions.map((question, index) => [question.id, index]));

  Object.entries(ALLEMAGNE_RESPONSE_OVERRIDES).forEach(([questionId, override]) => {
    const index = questionIndexById.get(Number(questionId));
    if (index === undefined) return;
    allemagneGovernment.responses[index] = override.response;
    allemagneGovernment.justifications[index] = override.justification;
    if (Array.isArray(allemagneGovernment.sources)) allemagneGovernment.sources[index] = override.source;
  });

  const scores = {};
  DATA.axes.forEach(axis => {
    const denominator = 3 * DATA.questions.reduce(
      (sum, question) => sum + Math.abs(question.coefficients[axis.key]),
      0
    );
    const numerator = DATA.questions.reduce(
      (sum, question, index) => sum + (allemagneGovernment.responses[index] ?? 0) * question.coefficients[axis.key],
      0
    );
    scores[axis.key] = denominator ? 10 * numerator / denominator : 0;
  });
  allemagneGovernment.axisScores = scores;
}

// Dernières couches synchrones : ajustements gouvernementaux généraux,
// calibration Q75 et restauration de sa formulation historique, puis calibration Q50 finale.
if (typeof document !== 'undefined' && document.readyState === 'loading') {
  document.write('<script src="/data/government-final-overrides.js"></scr' + 'ipt>');
  document.write('<script src="/data/q75-overrides.js"></scr' + 'ipt>');
  document.write('<script src="/data/q75-question-restore.js"></scr' + 'ipt>');
  document.write('<script src="/data/q50-overrides.js"></scr' + 'ipt>');
}
