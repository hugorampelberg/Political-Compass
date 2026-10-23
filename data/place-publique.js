// Place publique : codage vérifié le 23 octobre 2026.
// response = intensité politique ; confidence = solidité documentaire (1 à 3).
// Onze positions sans source propre reprennent le PS par choix de codage explicite.
// Le statut assumed et la confiance 1 distinguent cette hypothèse des sources PP.
// Charger après les corrections du questionnaire, notamment l'ajout de Q88.
(() => {
  'use strict';
  if (typeof DATA === 'undefined') throw new Error('Place publique doit être chargé après DATA.');
  if (DATA.entities.some(entity => entity.id === 'place-publique')) throw new Error('Place publique est déjà présent.');

  const S = {
    projet: 'https://place-publique.eu/document/6J8wjk3EW8dBCLwKxa7J96/projet-placepublique-acte1.pdf',
    charte: 'https://place-publique.eu/document/2qhnD4gywppQ8YM1XS2O26/charte-des-principes.pdf',
    lettre: 'https://place-publique.eu/posts/2fgDdljEIy36rgxBjRyiQZ/raphael-glucksmann-sa-lettre-aux-francais',
    budget: 'https://place-publique.eu/posts/4TUjE2vL9XrWK4sd9fWVi5/budget-pour-2026-un-moindre-mal-qui-nous-engage-a-construire-une-alternative-credible-pour-la-france',
    social: 'https://place-publique.eu/posts/3J26W05Op4w8TET9qJDYtP/plfss-2026-place-publique-salue-l-adoption-dans-le-compromis-parlementaire-du-budget-de-la-securite-sociale-par-l-assemblee-nationale',
    industrie: 'https://place-publique.eu/posts/PYrrh7W5julSvYII6cS2w/ecologie-emplois-donner-un-cap-clair-a-l-industrie-francaise',
    democratie: 'https://place-publique.eu/posts/1TRzmUsMmCenB0fdfA1G1d/etat-d-urgence-democratique-changeons-enfin-les-regles-du-jeu',
    egalite: 'https://place-publique.eu/posts/3XezlvxtSkBJ0WTLiJtWnq/droits-lgbtqia-l-egalite-est-le-socle-d-un-commun-retrouve-et-la-condition-d-une-puissance-collective',
    immigration: 'https://place-publique.eu/posts/1PnqqJt9E3HINlmytLrCdh/immigration-cessons-de-mentir-aux-francais',
    retour: 'https://place-publique.eu/posts/7fHMXU23MoWPvPrQae6CVX/immigration-au-parlement-europeen-les-deputes-europeens-place-publique-votent-contre-le-reglement-retour',
    police: 'https://place-publique.eu/posts/4zKz1ZPU9oSzKXxjYsCo9q/loi-sur-la-presomption-de-legitime-defense-un-texte-qui-fragilise-la-confiance-entre-citoyens-police-et-justice',
    mercosur: 'https://place-publique.eu/posts/1c8NyVqQ3KhQdHfyGJWaIc/mercosur-le-revelateur-d-une-crise-agricole-existentielle',
    energie: 'https://place-publique.eu/posts/37zQaW3UTECNjFxkZ8Ngar/programmation-pluriannuelle-de-l-energie-apres-des-annees-d-errance-le-gouvernement-veut-produire-sans-planifier',
    petrole: 'https://place-publique.eu/posts/3gUOSr2ozNSi6IWvI1v0JF/choc-petrolier-proteger-les-francais-sortir-de-la-dependance',
    europe: 'https://place-publique.eu/posts/3F8WlPG1A2q2mbyj8rGpKL/10-ans-apres-le-brexit-les-limites-du-repli-et-l-urgence-d-une-europe-politique',
    vigilance: 'https://place-publique.eu/posts/3DLKFQDCqnmXBEJI1Ae6Pi/devoir-de-vigilance-les-digues-sautent-pour-defendre-l-impunite-des-multinationales',
    pesticides: 'https://place-publique.eu/posts/7lmRClDsXTjofdo9fbADvk/loi-duplomb-2-comment-empoisonner-nos-corps-la-terre-et-les-comptes-publics',
    ukraine: 'https://place-publique.eu/posts/4dI4tTIGPNyO7Y8fvfpddJ/4-ans-plus-tard-proteger-l-ukraine-c-est-toujours-proteger-l-europe',
    finDeVie: 'https://www.assemblee-nationale.fr/dyn/17/scrutins/8280'
  };

  // Chaque entrée est attachée à l'identifiant de la question, pas à sa position.
  // [intensité, confiance, justification originale, source, statut facultatif]
  const positions = {
    1: [-3, 3, "Désaccord très fort (−3) : les recettes supplémentaires demandées sur les grandes fortunes contredisent cette baisse simultanée. L'allègement du travail seul relève de Q88.", S.budget],
    2: [1, 2, "Accord modéré (+1), par interprétation : valoriser le travail plutôt que la rente laisse une place aux différences de rémunération. Cela ne vaut pas acceptation de toute inégalité issue du travail ou du risque ; l'accord reste limité.", S.lettre],
    3: [3, 3, "Accord très fort (+3) : contribution accrue des grandes fortunes et hauts revenus explicitement demandée, conformément à l'affirmation.", S.budget],
    4: [2, 2, "Accord net (+2), inféré : écarts salariaux encadrés (p. 40).", S.projet],
    5: [3, 3, "Accord très fort (+3) : SMIC à 1 600 € nets (p. 40).", S.projet],
    6: [-2, 2, "Désaccord net (−2), par interprétation : la priorité aux services publics et la sortie du lucratif dans les EHPAD contredisent une présomption générale d'efficacité du privé. Cela n'implique pas un rejet de toute entreprise privée.", S.lettre],
    7: [1, 2, "Accord modéré (+1), par interprétation : l'entrée publique au capital d'entreprises stratégiques est soutenue. Une participation ne constitue toutefois pas nécessairement une nationalisation ; le programme industriel n'en fait pas un instrument systématique.", S.industrie],
    8: [-2, 3, "Désaccord net (−2) : la concurrence doit céder devant les objectifs industriels et les protections contre le dumping dans les secteurs stratégiques. Le désaccord concerne sa primauté, sans suppression générale du marché.", S.industrie],
    9: [-2, 3, "Désaccord net (−2) : recettes progressives et protections sociales sont privilégiées, tout en acceptant des compromis pour stabiliser le budget.", S.budget],
    10: [3, 3, "Accord très fort (+3) : Place publique défend le financement collectif de la Sécurité sociale et davantage de moyens pour les soins. Le coût fiscal n'est pas présenté comme une raison de réduire cette ambition.", S.social],
    11: [3, 3, "Accord très fort (+3) : orienter l'industrie, conditionner les aides et corriger les effets sociaux et environnementaux du marché sont au centre des propositions industrielles.", S.industrie],
    12: [-2, 2, "Désaccord net (−2), inféré : solidarités collectives et biens communs priment sur leur remplacement par des choix financiers individuels.", S.charte],
    13: [3, 3, "Accord très fort (+3) : le texte sur les droits LGBTQIA+ défend explicitement la diversité des familles, des identités et des parcours. L'éloignement des normes traditionnelles n'y justifie pas des droits moindres.", S.egalite],
    14: [0, 3, "Position intermédiaire (0) : malgré l'objectif de suppression du 49.3, le parti a accepté le budget de février 2026 adopté ainsi. Doctrine institutionnelle et compromis exceptionnel diffèrent.", S.budget],
    15: [0, 2, "Position intermédiaire (0) : redistribution et libertés sont associées. La contrainte économique et la restriction des droits fondamentaux ne se confondent pas.", S.charte],
    16: [3, 3, "Accord très fort (+3) : corriger les discriminations et sécuriser l'égalité réelle des droits constitue un engagement explicite. Il s'agit d'une intervention publique active, au-delà de la seule égalité formelle.", S.egalite],
    17: [2, 2, "Accord net (+2), par interprétation : décentralisation et pouvoirs locaux renforcés soutiennent des adaptations territoriales, sans établir une liberté générale de déroger aux garanties nationales.", S.democratie],
    18: [0, 2, "Position intermédiaire (0), par interprétation : l'héritage républicain est valorisé, mais les droits nouveaux et la diversité ne sont pas subordonnés à la tradition. Le mot « certaines » empêche d'assimiler cette proposition à un conservatisme général.", S.egalite],
    19: [-2, 3, "Désaccord net (−2) : nouvelles voies légales et contrôle des séjours sont associés, sans objectif général de réduction des entrées.", S.immigration],
    20: [3, 3, "Accord très fort (+3) : contribution économique, emplois et cotisations sont explicitement valorisés.", S.immigration],
    21: [3, 2, "Accord très fort (+3), inféré : l'accès au droit commun contredit une priorité fondée sur la nationalité.", S.immigration],
    22: 'ps',
    23: [0, 2, "Position intermédiaire (0) : le parti veut exécuter les décisions de retour justifiées, mais combat l'affaiblissement des garanties juridiques. Cela n'établit pas un soutien à un durcissement général des expulsions de condamnés.", S.retour],
    24: [-2, 2, "Désaccord net (−2), inféré : la cohésion repose sur l'intégration et les droits, plutôt que sur l'homogénéité culturelle.", S.immigration],
    25: [2, 2, "Accord net (+2), par interprétation : la défense du droit d'asile et le refus d'externalisations sans garanties soutiennent l'accueil. Le volume supplémentaire et son financement ne sont toutefois pas fixés dans ce texte.", S.retour],
    26: [-2, 3, "Désaccord net (−2) : surpopulation combattue (p. 61).", S.projet],
    27: [3, 3, "Accord très fort (+3) : prévention, réinsertion prioritaires (p. 60–61).", S.projet],
    28: [-2, 3, "Désaccord net (−2) : le parti refuse d'élargir les prérogatives policières en affaiblissant le contrôle judiciaire et les droits des victimes. Renforcer les moyens opérationnels n'est pas la même chose que réduire les garanties.", S.police],
    29: [2, 3, "Accord net (+2) : le refus du Mercosur vise notamment la concurrence de productions soumises à des normes moins exigeantes. La protection est nette, mais le parti recherche aussi une alimentation accessible, ce qui limite l'acceptation du sacrifice demandé.", S.mercosur],
    30: [2, 2, "Accord net (+2), par interprétation : la transformation écologique organise le projet industriel, mais celui-ci vise aussi la croissance et l'emploi. Des coûts transitoires sont compatibles avec cette stratégie ; la décroissance n'en est pas le principe.", S.industrie],
    31: [0, 2, "Position intermédiaire (0) : face au choc pétrolier, le parti refuse une baisse générale de TVA et préfère des aides ciblées et l'électrification. Il accepte certains prix élevés sans proposer de provoquer une forte hausse générale.", S.petrole],
    32: [-2, 2, "Désaccord net (−2), inféré : le rééquilibrage fiscal vise le capital et les patrimoines, plutôt qu'un transfert vers la consommation.", S.budget],
    33: [-2, 3, "Désaccord net (−2) : la stratégie repose sur la planification, des investissements et la régulation des prix énergétiques. Les instruments économiques peuvent compléter ces leviers, mais le marché n'est pas érigé en mécanisme principal.", S.energie],
    34: [2, 3, "Accord net (+2) : plastiques jetables interdits (p. 28).", S.projet],
    35: [2, 2, "Accord net (+2), inféré : justice environnementale et responsabilités inégales soutiennent une contribution accrue des pays riches, sans répartition mondiale précisée.", S.charte],
    36: [3, 3, "Accord très fort (+3) : le parti revendique une intégration fédérale et une puissance européenne disposant de capacités politiques propres. Le transfert de compétences est un moyen assumé de cette stratégie.", S.europe],
    37: [-3, 3, "Désaccord très fort (−3) : le repli national est décrit comme une perte de puissance. Préférer conserver des compétences au prix d'une influence européenne réduite inverse l'arbitrage défendu.", S.europe],
    38: [2, 2, "Accord net (+2), par interprétation : la logique d'intégration économique et de stabilité européenne soutient l'union monétaire. Cette source ne constitue cependant pas un bilan explicite des effets propres de l'euro ; confiance moyenne.", S.europe],
    39: [3, 3, "Accord très fort (+3) : une Europe politique capable de fixer et d'appliquer des règles protectrices communes est explicitement recherchée.", S.europe],
    40: [-2, 2, "Désaccord net (−2), par interprétation : réformer les politiques européennes collectivement est privilégié. Cela se distingue d'un droit général de désobéissance nationale dès qu'un intérêt économique entre en conflit avec une règle.", S.europe],
    41: [-3, 3, "Désaccord très fort (−3) : maintenir l'IFI et accroître la contribution des grands patrimoines contredit directement sa suppression.", S.budget],
    42: [3, 3, "Accord très fort (+3) : supprimer les avantages des grandes transmissions correspond au ciblage des héritages élevés prévu ici.", S.budget],
    43: 'ps',
    44: 'ps',
    45: [2, 3, "Accord net (+2) : plafonds de prix ultramarins (p. 65).", S.projet],
    46: [-2, 2, "Désaccord net (−2), inféré : protections collectives renforcées (p. 41).", S.projet],
    47: 'ps',
    48: [-2, 3, "Désaccord net (−2) : le parti salue la suspension de la réforme et recherche un autre compromis sur les retraites. Il refuse le recul général comme réponse privilégiée, sans promettre un même âge de départ abaissé pour tous.", S.social],
    49: [-2, 2, "Désaccord net (−2), inféré : couverture universelle défendue (p. 53).", S.projet],
    50: [2, 2, "Accord net (+2), par interprétation : le refus d'aides sans contreparties soutient un encadrement des bénéficiaires. Le plafonnement conjoint des dividendes et rémunérations pendant toute l'aide reste une extrapolation, signalée par la confiance moyenne.", S.industrie],
    51: [3, 3, "Accord très fort (+3) : l'actionnariat public, notamment régional, doit donner un pouvoir d'orientation industrielle sur les entreprises stratégiques.", S.industrie],
    52: [-3, 3, "Désaccord très fort (−3) : Place publique combat l'affaiblissement du devoir de vigilance des multinationales. La simplification qui réduit les protections sociales ou environnementales correspond précisément à l'arbitrage refusé.", S.vigilance],
    53: [3, 3, "Accord très fort (+3) : faciliter la régularisation des travailleurs sans papiers est explicitement proposé.", S.immigration],
    54: [-2, 2, "Désaccord net (−2), inféré : l'accès au droit commun pour intégrer les arrivants s'oppose à une restriction générale prolongée.", S.immigration],
    55: [-2, 2, "Désaccord net (−2), inféré : les besoins du bâtiment et de l'agriculture excluent une sélection réduite aux hautes qualifications.", S.immigration],
    56: 'ps',
    57: [-2, 2, "Désaccord net (−2), inféré : liberté de conscience et égalité s'opposent à une exclusion fondée sur une différence culturelle présumée.", S.charte],
    58: [3, 2, "Accord très fort (+3), par interprétation : la diversité des identités et des parcours est compatible avec l'appartenance nationale et les règles communes. Le respect des lois, déjà exigé par la question, répond à cette limite républicaine.", S.egalite],
    59: 'ps',
    60: [2, 2, "Accord net (+2), inféré : le pluralisme protège la critique, sans établir une immunité pour tout propos offensant susceptible de porter atteinte aux droits d'autrui.", S.charte],
    61: [-3, 3, "Désaccord très fort (−3) : Place publique défend la nécessité et la proportionnalité des tirs et combat l'assouplissement de leur contrôle. Le simple refus d'obtempérer ne justifie donc pas une autorisation générale d'ouvrir le feu.", S.police],
    62: 'ps',
    63: [2, 2, "Accord net (+2), par interprétation : la substitution des véhicules électriques aux thermiques est soutenue, avec un leasing social pour contenir le coût. Cette source établit la direction, mais pas à elle seule le calendrier d'interdiction des ventes.", S.petrole],
    64: [-2, 3, "Désaccord net (−2) : Place publique soutient à la fois le nucléaire et l'investissement dans les renouvelables. L'opposition porte sur le sacrifice des renouvelables, et ne doit pas être lue comme une hostilité au nucléaire.", S.energie],
    65: 'ps',
    66: [-2, 2, "Désaccord net (−2), par interprétation : l'expertise éclaire une démocratie parlementaire et participative. Elle n'est pas présentée comme un substitut au pouvoir de décision des élus.", S.democratie],
    67: [1, 2, "Accord modéré (+1), par interprétation : le compromis budgétaire accepté malgré ses limites traduit une capacité à décider sans accord populaire immédiat. Cela ne justifie ni un pouvoir sans contrôle ni l'abandon du dialogue parlementaire.", S.social],
    68: [2, 3, "Accord net (+2) : référendums d'initiative citoyenne et conventions sont proposés ensemble. La délibération et l'information encadrent l'accord ; le vote immédiat sans préparation n'est pas un idéal revendiqué.", S.democratie],
    69: [-3, 2, "Désaccord très fort (−3), par interprétation : élargir la participation et le droit de vote contredit une hiérarchie entre citoyens selon leurs connaissances. La confiance moyenne concerne l'inférence, pas l'intensité de ce désaccord.", S.democratie],
    70: [-3, 3, "Désaccord très fort (−3) : renforcer le Parlement et réduire les prérogatives présidentielles va directement à l'encontre d'un exécutif libéré des blocages parlementaires.", S.democratie],
    71: [3, 3, "Accord très fort (+3) : la proportionnelle et une organisation parlementaire fondée sur des accords sont explicitement défendues. Le recours aux coalitions ne réduit pas cet accord.", S.democratie],
    72: [1, 2, "Accord modéré (+1), inféré : français et parcours civique sont soutenus ; conditionner le séjour durable dépasse cet engagement.", S.immigration],
    73: [2, 2, "Accord net (+2), inféré : prévention et cohésion sociale structurent l'approche, sans comparaison causale explicite avec les facteurs culturels.", S.charte],
    74: [2, 3, "Accord net (+2) : le refus de réautoriser des pesticides contestés privilégie la santé et l'environnement. Les demandes parallèles de protection commerciale limitent toutefois l'acceptation d'un désavantage compétitif durable.", S.pesticides],
    75: 'ps',
    76: [0, 3, "Position intermédiaire (0) : complémentarité des assurances maintenue (p. 50).", S.projet],
    77: [-1, 2, "Désaccord modéré (−1), inféré : proximité et réorganisation (p. 50).", S.projet],
    78: 'ps',
    79: [2, 2, "Accord net (+2), inféré : mixité du privé (p. 68).", S.projet],
    80: [2, 3, "Accord net (+2) : locations touristiques réglementées (p. 64).", S.projet],
    81: [3, 3, "Accord très fort (+3) : le soutien durable à l'Ukraine est présenté comme une condition de la sécurité européenne. La prolongation du conflit ne constitue pas, en elle-même, un motif de retrait.", S.ukraine],
    82: [3, 3, "Accord très fort (+3) : dissuasion européenne, décision française (p. 11).", S.projet],
    83: [3, 2, "Accord très fort (+3) : Aurélien Rousseau et Sacha Houlié, élus de Place publique, ont voté pour le droit à l'aide à mourir le 15 juillet 2026. Le codage s'appuie sur ces votes ; il ne leur substitue pas une déclaration personnelle de Glucksmann.", S.finDeVie],
    84: [3, 3, "Accord très fort (+3) : la lettre de candidature annonce la démarchandisation des EHPAD. La sortie du but lucratif demandée dans la question correspond directement à cet objectif, même si les modalités de conversion restent à préciser.", S.lettre],
    85: 'ps',
    86: [3, 3, "Accord très fort (+3) : interdiction avant quinze ans (p. 21).", S.projet],
    87: [2, 2, "Accord net (+2), inféré : souveraineté numérique privilégiée (p. 20–21).", S.projet],
    88: [3, 3, "Accord très fort (+3) : fiscalité rééquilibrée travail/patrimoine (p. 40).", S.projet]
  };

  const ps = DATA.entities.find(entity => entity.id === 'ps');
  if (!ps) throw new Error('Le profil final du PS est requis pour les réponses reprises par défaut.');
  const entries = DATA.questions.map((question, index) => {
    const entry = positions[question.id];
    if (!entry) throw new Error(`Place publique : Q${question.id} absente.`);
    if (entry === 'ps') {
      const response = ps.responses[index];
      const intensity = { 1: 'modéré', 2: 'net', 3: 'très fort' }[Math.abs(response)];
      const label = response === 0 ? 'Position intermédiaire' : `${response > 0 ? 'Accord' : 'Désaccord'} ${intensity}`;
      const score = response > 0 ? `+${response}` : String(response).replace('-', '−');
      return [response, 1, `${label} (${score}), note reprise du Parti socialiste par défaut : aucune position propre suffisamment précise de Place publique n'a été établie. Cette valeur est une hypothèse de codage incluse dans la comparaison, et non une déclaration de Place publique. Justification du PS : ${ps.justifications[index]}`, ps.sources[index], 'assumed'];
    }
    return entry;
  });
  if (Object.keys(positions).length !== DATA.questions.length) throw new Error('Questions Place publique désynchronisées.');
  const party = {
    id: 'place-publique', sheet: 'Place publique', name: 'Place publique', shortName: 'Place publique', category: 'party',
    reviewedAt: '2026-10-23',
    responses: entries.map(entry => entry[0]),
    confidence: entries.map(entry => entry[1]),
    justifications: entries.map(entry => entry[2]),
    sources: entries.map(entry => entry[3]),
    positionStatus: entries.map(entry => entry[4] || (entry[1] === 3 ? 'documented' : 'inferred')),
    axisScores: {},
    averageConfidence: entries.reduce((sum, entry) => sum + entry[1], 0) / entries.length
  };
  DATA.axes.forEach(axis => {
    const mass = DATA.questions.reduce((sum, question, index) => sum + (party.positionStatus[index] === 'undocumented' ? 0 : Math.abs(question.coefficients[axis.key] || 0)), 0);
    const numerator = DATA.questions.reduce((sum, question, index) => sum + (party.positionStatus[index] === 'undocumented' ? 0 : party.responses[index] * (question.coefficients[axis.key] || 0)), 0);
    party.axisScores[axis.key] = mass ? 10 * numerator / (3 * mass) : 0;
  });
  const psIndex = DATA.entities.findIndex(entity => entity.id === 'ps');
  DATA.entities.splice(psIndex < 0 ? DATA.entities.length : psIndex + 1, 0, party);
})();
