// Audit documentaire de Renaissance d'août 2026.
// Les clés correspondent aux IDs stables des questions, jamais à leur position dans le tableau.
const RENAISSANCE_OVERRIDES = {
  "43": {
    "response": -2,
    "justification": "Désaccord net : Renaissance privilégie la transmission familiale du patrimoine et a défendu des relèvements d'abattements sur les donations et successions plutôt qu'une hausse générale des droits au-delà d'un seuil. Le parti ne propose pas de supprimer toute fiscalité successorale, ce qui conduit à -2 plutôt qu'à un désaccord maximal.",
    "source": "https://ensemble-2024.fr/notre-projet"
  },
  "44": {
    "response": -2,
    "justification": "Désaccord net : des députés du groupe Ensemble pour la République ont combattu le durcissement de l'exit tax visant les très grandes fortunes parties à l'étranger, au nom de l'attractivité et de la mobilité des capitaux. Renaissance préfère lutter contre l'évasion fiscale dans un cadre coordonné plutôt que maintenir une imposition française étendue du patrimoine mondial après expatriation.",
    "source": "https://www.assemblee-nationale.fr/dyn/17/amendements/0930/AN/37"
  },
  "46": {
    "justification": "Accord modéré : l'État a participé à des dispositifs outre-mer visant à réduire fortement le prix de produits essentiels, notamment par des mécanismes sur le fret, les frais d'approche, la fiscalité et les marges. Renaissance privilégie toutefois aussi la concurrence, la transparence et des mesures structurelles et ne porte pas une garantie nationale permanente d'alignement des prix avec l'Hexagone ; +1 reste adapté.",
    "source": "https://www.outre-mer.gouv.fr/signature-du-protocole-dobjectifs-et-de-moyens-de-lutte-contre-la-vie-chere-en-martinique"
  },
  "50": {
    "response": 1,
    "justification": "Accord modéré : Renaissance a renforcé le lien entre certaines prestations et l'activité, notamment avec l'inscription automatique à France Travail et l'obligation d'activité associée au RSA. La question vise cependant une forte conditionnalité de l'ensemble des prestations sociales à une durée de cotisation ou de participation au marché du travail, ce que le parti ne propose pas ; +1 est donc plus précis que +2.",
    "source": "https://parti-renaissance.fr/nos-ambitions/organiser-un-travail-pour-tous"
  },
  "51": {
    "justification": "Accord modéré : Renaissance veut conditionner davantage certaines aides publiques aux entreprises à des objectifs d'innovation, d'investissement ou de transformation et passer d'une logique de subvention à une logique plus contractuelle. Le parti ne propose toutefois pas une règle générale interdisant dividendes et fortes rémunérations jusqu'au remboursement intégral de toute aide de plusieurs milliards ; +1 reste adapté.",
    "source": "https://parti-renaissance.fr/nos-ambitions/faire-de-linnovation-notre-boussole-de-laction-publique"
  },
  "52": {
    "justification": "Accord modéré : Renaissance veut un État investisseur et une commande publique capables d'orienter l'économie vers des secteurs stratégiques français, l'innovation et la souveraineté. Cette orientation rejoint un actionnariat public plus actif, mais le parti ne formule pas une doctrine générale imposant aux entreprises où l'État est actionnaire des objectifs industriels de long terme par l'exercice systématique de ses droits de vote ; +1 reste prudent.",
    "source": "https://parti-renaissance.fr/nos-ambitions/faire-de-linnovation-notre-boussole-de-laction-publique"
  },
  "55": {
    "justification": "Accord modéré : Renaissance veut renforcer les conditions de résidence, d'intégration et de régularité du séjour pour certains droits et interrompre rapidement les prestations lorsque le titre de séjour n'est plus valable. Sa convention régalienne ne prévoit cependant pas une exclusion générale de tous les immigrés légalement admis de la protection sociale pendant leurs premières années ; +1 reste adapté.",
    "source": "https://doc.parti.re/conventions/Restitution-Regalien-Une-Republique-ferme-une-France-apaisee.pdf"
  },
  "56": {
    "justification": "Accord net : Renaissance propose une immigration économique davantage choisie, notamment au moyen de critères portant sur les qualifications, l'âge, la maîtrise du français et les besoins du marché du travail. Cette logique favorise les profils qualifiés, tout en conservant des voies pour des emplois moins qualifiés lorsque des secteurs en ont besoin ; +2 est donc plus précis que +3.",
    "source": "https://doc.parti.re/conventions/Restitution-Regalien-Une-Republique-ferme-une-France-apaisee.pdf"
  },
  "58": {
    "justification": "Accord modéré : Renaissance veut sélectionner davantage l'immigration selon la langue, l'emploi, l'intégration et le respect des principes républicains. Le parti ne propose toutefois pas un pouvoir général de refuser l'entrée à une personne par ailleurs légalement admissible sur la seule anticipation d'une mauvaise intégration culturelle ; +1 reste le meilleur calibrage.",
    "source": "https://doc.parti.re/conventions/Restitution-Regalien-Une-Republique-ferme-une-France-apaisee.pdf"
  },
  "59": {
    "justification": "Accord net : Renaissance défend la liberté de croire ou de ne pas croire et l'universalité des droits individuels, tout en exigeant le respect de la loi, de la laïcité et du cadre républicain et en combattant le séparatisme. Des pratiques culturelles ou religieuses différentes ne sont donc pas un problème en elles-mêmes tant qu'elles respectent ce cadre ; +2 reflète cette ouverture assortie d'exigences d'intégration.",
    "source": "https://doc.parti.re/conventions/Restitution-Regalien-Une-Republique-ferme-une-France-apaisee.pdf"
  },
  "61": {
    "justification": "Accord net, avec une part d'inférence : le corpus de valeurs de Renaissance affirme un attachement fort aux libertés individuelles, à l'État de droit et à l'universalité des droits. La convention régalienne distingue la lutte contre les infractions, la haine ou les menaces de la simple expression d'opinions. Aucun texte récent ne répond exactement au cas d'un propos seulement profondément offensant ; +2 reste donc plus prudent qu'un accord maximal.",
    "source": "https://parti-renaissance.fr/le-parti"
  },
  "63": {
    "justification": "Accord net : la convention économique et climatique de Renaissance accepte l'utilisation d'un signal-prix carbone tout en demandant qu'il soit socialement progressif et accompagné pour les ménages les plus exposés. Maintenir l'incitation écologique tout en compensant les ménages modestes correspond directement à la logique de la question ; +2 reste adapté car les modalités précises peuvent varier.",
    "source": "https://doc.parti.re/Conventions-thematiques_Nouvelle-donne.pdf"
  },
  "65": {
    "justification": "Accord modéré : Renaissance soutient fortement la relance du nucléaire, mais inscrit cette politique dans un développement conjoint des énergies renouvelables et d'autres sources bas-carbone. La préférence nucléaire est nette, mais le parti ne propose pas de réduire de façon générale les investissements renouvelables pour financer le nucléaire ; +1 reste donc approprié.",
    "source": "https://doc.parti.re/Conventions-thematiques_Nouvelle-donne.pdf"
  },
  "66": {
    "justification": "Position intermédiaire : Renaissance fait de la décarbonation une priorité mais présente sa transition comme devant rester compatible avec la prospérité, l'innovation, la compétitivité et une écologie réaliste. Aucun document identifié n'accepte l'arbitrage chiffré de la question — 20 % d'émissions en moins, 3 % de PIB perdu et absence d'effort comparable à l'étranger. La note 0 évite donc d'attribuer au parti une concession non documentée.",
    "source": "https://doc.parti.re/Conventions-thematiques_Nouvelle-donne.pdf"
  },
  "67": {
    "justification": "Accord modéré : Renaissance valorise la science, l'expertise, l'évaluation et les institutions indépendantes pour éclairer les décisions complexes, tout en renforçant parallèlement la participation citoyenne et la légitimité des responsables élus. Les experts ont vocation à encadrer ou éclairer certains choix, pas à remplacer les décideurs politiques ; +1 est donc plus précis.",
    "source": "https://parti-renaissance.fr/nos-ambitions/une-participation-citoyenne-plus-forte"
  },
  "68": {
    "justification": "Accord net : Renaissance assume qu'un gouvernement puisse conduire des réformes économiques difficiles ou impopulaires lorsqu'il les estime nécessaires, comme l'ont illustré ses positions sur les retraites, le travail ou les finances publiques. Le parti maintient néanmoins le contrôle parlementaire, le débat public et une volonté accrue de participation citoyenne ; +2 reflète un exécutif capable d'arbitrer sans lui attribuer un blanc-seing.",
    "source": "https://parti-renaissance.fr/nos-ambitions/une-participation-citoyenne-plus-forte"
  },
  "70": {
    "justification": "Désaccord net : Renaissance fonde la citoyenneté sur l'égalité devant la loi et propose de mieux former et associer les citoyens aux décisions plutôt que de hiérarchiser leurs droits politiques selon leurs connaissances. Aucun projet ne prévoit un vote pondéré au bénéfice des personnes jugées plus compétentes. Le désaccord est net, mais l'absence de prise de position explicite sur cette proposition très théorique justifie -2 plutôt que -3.",
    "source": "https://parti-renaissance.fr/nos-ambitions/apprendre-les-valeurs-republicaines-avec-le-tremplin-citoyen"
  },
  "71": {
    "justification": "Accord net : Renaissance reste attaché à une Ve République dotée d'un exécutif capable d'agir et a soutenu des mécanismes permettant de gouverner malgré l'absence d'une majorité homogène. Le parti cherche toutefois aujourd'hui à associer davantage les citoyens et ne propose pas de supprimer les contre-pouvoirs parlementaires ou juridictionnels ; +2 traduit un exécutif fort plutôt qu'un pouvoir présidentiel sans frein.",
    "source": "https://parti-renaissance.fr/nos-ambitions/une-participation-citoyenne-plus-forte"
  },
  "74": {
    "justification": "Accord modéré : Renaissance présente la délinquance comme un phénomène multifactoriel lié notamment à la désocialisation, aux trafics, aux conditions de vie, à l'échec scolaire et à l'intégration et refuse de l'expliquer globalement par l'origine. Sa convention régalienne attribue néanmoins aussi un rôle réel aux difficultés d'intégration et au respect des normes communes ; +1 reflète mieux cette lecture mixte que +2 ou +3.",
    "source": "https://doc.parti.re/conventions/Restitution-Regalien-Une-Republique-ferme-une-France-apaisee.pdf"
  },
  "77": {
    "justification": "Désaccord net : Renaissance défend l'accès universel aux soins et a porté le dispositif 100 % Santé, mais son modèle conserve un rôle structurant aux complémentaires santé. Il ne propose pas une prise en charge intégrale de l'ensemble des soins essentiels par la seule Assurance maladie ni une forte réduction du rôle des complémentaires ; -2 reste donc adapté.",
    "source": "https://ensemble-2024.fr/notre-projet"
  },
  "78": {
    "justification": "Accord net : la fermeture de la maternité des Lilas a été justifiée par le Gouvernement notamment par la qualité et la sécurité des soins, les accouchements étant transférés vers un établissement disposant d'un environnement plus sécurisé tandis que des soins de proximité étaient maintenus localement. Cet arbitrage correspond bien au principe de regroupement de certaines activités, sans constituer une doctrine de fermeture systématique ; +2 reste adapté.",
    "source": "https://questions.assemblee-nationale.fr/q17/17-10362QE.htm"
  },
  "80": {
    "response": 2,
    "justification": "Accord net : des députés du groupe Ensemble pour la République ont proposé de faire dépendre la répartition des financements publics des établissements privés sous contrat de leur contribution mesurable à la mixité sociale, au moyen notamment d'un indicateur fondé sur l'IPS. Le mécanisme proposé privilégiait une modulation positive plutôt qu'un malus automatique, ce qui justifie +2 plutôt que +3.",
    "source": "https://www.assemblee-nationale.fr/dyn/17/amendements/0418/CION-CEDU/AC7"
  },
  "85": {
    "response": -2,
    "justification": "Désaccord net : la ligne récente du bloc central conserve une place importante au financement et à l'investissement privés dans les EHPAD et cherche à sécuriser ce modèle tout en renforçant les contrôles et la qualité de prise en charge. Cela va clairement contre l'interdiction progressive des groupes privés lucratifs, sans signifier pour autant un soutien à un secteur non régulé ; -2 est donc plus précis que -1.",
    "source": "https://questions.assemblee-nationale.fr/q17/17-14240QE.htm"
  },
  "86": {
    "response": -3,
    "justification": "Désaccord très fort : le groupe Ensemble pour la République a explicitement défendu le maintien de la modulation des allocations familiales selon les ressources et contesté le retour à une logique strictement universelle de montant indépendant du revenu. Cette position est directement opposée à la question, qui demande que les allocations ne diminuent pas lorsque les revenus augmentent.",
    "source": "https://www.assemblee-nationale.fr/dyn/17/comptes-rendus/seance/session-ordinaire-de-2024-2025/deuxieme-seance-du-jeudi-05-juin-2025"
  },
  "87": {
    "justification": "Accord très fort : Renaissance et Gabriel Attal proposent explicitement une interdiction des réseaux sociaux avant 15 ans, complétée par des restrictions supplémentaires pour les 15-18 ans. La mesure est fondée sur l'âge et n'est pas conditionnée à une simple autorisation parentale ; +3 correspond directement à la proposition du parti.",
    "source": "https://parti-renaissance.fr/petitions/regulation-ecrans-et-rs"
  },
  "88": {
    "response": 1,
    "justification": "Accord modéré : Renaissance fait de la souveraineté technologique française et européenne un objectif stratégique, veut orienter une partie de la commande publique vers des acteurs français innovants et développer des usages publics de l'IA. Le parti conserve cependant une forte exigence de performance et ne dit pas que l'administration devrait accepter de manière générale un modèle sensiblement moins performant ou plus coûteux pour le seul motif qu'il est hébergé en Europe ; +1 est donc plus prudent que +2.",
    "source": "https://parti-renaissance.fr/nos-ambitions/faire-de-linnovation-notre-boussole-de-laction-publique"
  }
};

const renaissanceParty = DATA.entities.find(entity => entity.id === 'renaissance');
if (renaissanceParty) {
  const questionIndexById = new Map(DATA.questions.map((question, index) => [question.id, index]));

  Object.entries(RENAISSANCE_OVERRIDES).forEach(([questionId, override]) => {
    const index = questionIndexById.get(Number(questionId));
    if (index === undefined) return;
    if (Object.prototype.hasOwnProperty.call(override, 'response')) renaissanceParty.responses[index] = override.response;
    if (override.justification) renaissanceParty.justifications[index] = override.justification;
    if (override.source && Array.isArray(renaissanceParty.sources)) renaissanceParty.sources[index] = override.source;
  });

  const scores = {};
  DATA.axes.forEach(axis => {
    const denominator = 3 * DATA.questions.reduce(
      (sum, question) => sum + Math.abs(question.coefficients[axis.key]),
      0
    );
    const numerator = DATA.questions.reduce(
      (sum, question, index) => sum + (renaissanceParty.responses[index] ?? 0) * question.coefficients[axis.key],
      0
    );
    scores[axis.key] = denominator ? 10 * numerator / denominator : 0;
  });
  renaissanceParty.axisScores = scores;
}
