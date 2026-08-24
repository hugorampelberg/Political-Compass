// Calibration finale de Q70 après reformulation de la question.
// Cette couche est chargée après les autres overrides afin de conserver un codage
// homogène entre partis et gouvernements, toujours résolu par l'ID ordinal 70.
(() => {
  if (typeof DATA === 'undefined' || !Array.isArray(DATA.questions) || !Array.isArray(DATA.entities)) return;

  const question = DATA.questions.find(item => item.id === 70);
  if (!question) return;

  question.text = "Pour avoir le droit de voter, les citoyens devraient avoir suivi une formation de base en économie.";

  const Q70_OVERRIDES = {
    lfi: {
      response: -3,
      confidence: 3,
      justification: "Désaccord très fort : LFI défend une conception particulièrement inclusive du suffrage et propose explicitement d'ouvrir le droit de vote dès 16 ans. Conditionner au contraire le droit de vote à une formation préalable en économie introduirait un filtre de compétence directement opposé à cette logique d'élargissement et d'égalité politique ; -3 est adapté.",
      source: "https://lafranceinsoumise.fr/europeennes-2024/programme-de-lunion-populaire/chapitre-5-faire-respecter-la-souverainete-populaire-en-europe-aussi/"
    },
    pcf: {
      response: -2,
      confidence: 2,
      justification: "Désaccord net : le PCF veut étendre les pouvoirs citoyens, notamment par le référendum d'initiative populaire, le droit de pétition et l'élargissement de certains droits électoraux, et ne conditionne pas le suffrage à une compétence économique. Son projet actuel ne porte toutefois pas l'abaissement général du droit de vote à 16 ans. L'opposition au filtre proposé est donc nette, sans atteindre le degré d'élargissement du suffrage défendu par LFI, le PS ou Les Écologistes ; -2 est adapté.",
      source: "https://www.pcf.fr/pacte_2025_republique"
    },
    "les-ecologistes": {
      response: -3,
      confidence: 3,
      justification: "Désaccord très fort : Les Écologistes proposent explicitement d'abaisser le droit de vote à 16 ans et d'accompagner cet élargissement par une éducation renforcée à la citoyenneté. La formation sert donc à mieux exercer un droit de vote élargi, non à déterminer qui peut voter. Subordonner le suffrage à une formation économique va directement à l'encontre de cette conception ; -3 est adapté.",
      source: "https://lesecologistes.fr/pages/iJUJizJIdURmTBrAdlE1C/iii-education-et-culture-en-partage"
    },
    ps: {
      response: -3,
      confidence: 3,
      justification: "Désaccord très fort : le projet socialiste 2026 veut explicitement abaisser le droit de vote à 16 ans, faciliter l'exercice du suffrage et l'étendre aux étrangers extra-européens pour les élections locales. Conditionner le droit de vote à une formation économique préalable prend exactement la direction inverse en restreignant le corps électoral selon un critère de compétence ; -3 est adapté.",
      source: "https://projet-socialiste.fr/projet/refaire-societe/"
    },
    renaissance: {
      response: -2,
      confidence: 2,
      justification: "Désaccord net : Renaissance veut renforcer la participation citoyenne et les dispositifs de consultation sans instaurer de condition de compétence pour accéder au vote. Aucune proposition actuelle suffisamment claire n'établit cependant une volonté d'abaisser généralement le droit de vote à 16 ans. Le parti est donc nettement opposé à un filtre économique du suffrage, mais moins éloigné de la proposition que les partis qui cherchent activement à élargir le corps électoral ; -2 est adapté.",
      source: "https://parti-renaissance.fr/nos-ambitions/une-participation-citoyenne-plus-forte"
    },
    modem: {
      response: -2,
      confidence: 3,
      justification: "Désaccord net : François Bayrou a explicitement défendu le maintien du droit de vote à 18 ans et rejeté son abaissement à 16 ans. Cette limite d'âge ne s'accompagne cependant d'aucune volonté de soumettre les électeurs majeurs à un test ou à une formation économique obligatoire. Le MoDem défend donc le suffrage égal à partir de 18 ans, ce qui conduit à -2 plutôt qu'à -3.",
      source: "https://www.mouvementdemocrate.fr/actualites/francois-bayrou-les-jeunes-generations-ne-sont-absolument-pas-condamnees-mon-propos-est"
    },
    horizons: {
      response: -2,
      confidence: 2,
      justification: "Désaccord net : Horizons valorise fortement l'éducation, la science et l'expertise afin d'éclairer le débat public, mais son manifeste conserve une démocratie représentative dans laquelle chaque citoyen peut faire valoir son opinion. La compétence doit améliorer la qualité de la décision, non devenir une condition d'accès au suffrage. En l'absence de proposition d'abaisser le vote à 16 ans, -2 est plus précis que -3.",
      source: "https://horizonsleparti.fr/le-manifeste/"
    },
    lr: {
      response: -2,
      confidence: 2,
      justification: "Désaccord net : Bruno Retailleau veut redonner directement aux Français le pouvoir de décider, notamment par davantage de référendums, sans conditionner la participation électorale à une compétence économique. LR ne porte cependant pas de proposition actuelle d'abaissement général du droit de vote à 16 ans. L'opposition au filtre proposé est donc nette mais non maximale ; -2 est adapté.",
      source: "https://republicains.fr/actualites/2026/02/12/je-suis-candidat-a-lelection-presidentielle/"
    },
    rn: {
      response: -2,
      confidence: 3,
      justification: "Désaccord net : le RN affirme que la démocratie repose sur la confiance dans le peuple et refuse que des experts décident à la place des citoyens quelles opinions sont légitimes. Il ne propose toutefois pas d'élargir généralement le droit de vote aux 16-17 ans. Conditionner le suffrage à une formation économique est nettement contraire à sa conception du pouvoir populaire, mais l'absence d'élargissement du corps électoral justifie -2 plutôt que -3.",
      source: "https://municipales2026.rassemblementnational.fr/communiques/ingerence-interieure-le-senat-invente-le-delit-dopinion-a-la-francaise"
    },
    reconquete: {
      response: -2,
      confidence: 2,
      justification: "Désaccord net : Reconquête met en avant la souveraineté populaire, le référendum et la consultation directe des Français et ne défend pas un droit de vote réservé aux citoyens ayant validé une compétence économique. Le parti ne propose cependant pas d'abaisser généralement le droit de vote à 16 ans. Le rejet du filtre de compétence est donc net sans justifier le niveau maximal réservé aux doctrines d'élargissement actif du suffrage ; -2 est adapté.",
      source: "https://fede84.parti-reconquete.fr/article/agissez-en-faveur-de-la-grande-consultation-nationale-du-programme-pour-la-france"
    },
    "nouvelle-energie": {
      response: -2,
      confidence: 2,
      justification: "Désaccord net : Nouvelle Énergie propose de développer la démocratie directe, notamment par un référendum d'initiative citoyenne, et ne réserve pas l'exercice du suffrage à des électeurs ayant suivi une formation économique. Le parti valorise fortement l'éducation et la responsabilité mais ne propose pas d'abaisser généralement le droit de vote à 16 ans. Cela conduit à un désaccord net, -2, plutôt qu'à -3.",
      source: "https://www.unenouvelleenergie.fr/a-bayeux-david-lisnard-la-joue-comme-de-gaulle/"
    },
    udr: {
      response: -2,
      confidence: 2,
      justification: "Désaccord net : l'UDR veut introduire des mécanismes de démocratie directe inspirés de la Suisse, notamment un référendum d'initiative populaire, sans condition de compétence économique pour voter. Elle ne porte toutefois pas de proposition d'abaissement général du droit de vote à 16 ans. Le mécanisme de formation obligatoire est donc nettement contraire à sa logique démocratique, sans que le désaccord atteigne le niveau maximal ; -2 est adapté.",
      source: "https://www.udr.fr/grandforumlibertes"
    },
    "france-humaniste": {
      response: -2,
      confidence: 2,
      justification: "Désaccord net : La France Humaniste et Dominique de Villepin défendent la démocratie libérale, l'égalité civique, le parlementarisme et la participation des citoyens, sans proposer de filtrer le corps électoral selon une compétence économique. LFH ne porte cependant pas de proposition claire d'abaissement du droit de vote à 16 ans. Le désaccord avec la condition de formation est donc net plutôt que maximal ; -2 est adapté.",
      source: "https://lafrancehumaniste.fr/articles/chemin-gaulliste.html"
    },
    allemagne: {
      response: -2,
      confidence: 3,
      justification: "Désaccord net : les élections fédérales allemandes reposent sur un suffrage général et égal à partir de 18 ans, sans condition de diplôme ou de connaissance économique. L'Allemagne autorise déjà le vote à 16 ans aux élections européennes, mais la CDU/CSU, principale composante du gouvernement Merz, s'était opposée à cet abaissement et le seuil fédéral reste 18 ans. Le gouvernement est donc nettement opposé à un filtre de compétence, sans justifier -3 ; -2 est adapté.",
      source: "https://www.bundestag.de/services/glossar/glossar/W/wahlgrundsaetze-445288"
    },
    espagne: {
      response: -2,
      confidence: 2,
      justification: "Désaccord net : le système électoral espagnol repose sur un suffrage universel, libre et égal à partir de 18 ans, sans condition de compétence économique. Des organisations socialistes de jeunesse défendent le vote à 16 ans, mais aucune réforme gouvernementale actuelle n'établit cet abaissement pour l'ensemble du corps électoral. Le gouvernement Sánchez est donc nettement opposé à un filtre économique du vote, mais -2 reste plus rigoureux que -3.",
      source: "https://infoelectoral.interior.gob.es/es/proceso-electoral/el-derecho-de-sufragio/index.html"
    },
    suisse: {
      response: -2,
      confidence: 3,
      justification: "Désaccord net : la démocratie suisse repose sur un droit de vote fédéral égal pour les citoyens à partir de 18 ans et sur un recours très développé aux votations populaires, sans condition de compétence économique. Le canton de Glaris autorise le vote dès 16 ans à son niveau, mais ce n'est pas la règle fédérale défendue par le Conseil fédéral. L'opposition à un filtre de formation est nette, tandis que le maintien du seuil fédéral à 18 ans justifie -2 plutôt que -3.",
      source: "https://www.ch.ch/fr/votations-et-elections/elections/elections-du-conseil-national/"
    },
    finlande: {
      response: -2,
      confidence: 3,
      justification: "Désaccord net : en Finlande, les citoyens disposent du droit de vote aux élections nationales à partir de 18 ans sans condition de diplôme, de test ou de formation économique. Le gouvernement Orpo ne porte pas de réforme générale abaissant ce seuil à 16 ans. Le principe d'un filtre de compétence est donc nettement contraire au modèle électoral finlandais, mais -2 permet de distinguer cette position des acteurs qui cherchent activement à élargir le suffrage aux 16-17 ans.",
      source: "https://finlex.fi/fi/lainsaadanto/1998/714"
    },
    "royaume-uni": {
      response: -3,
      confidence: 3,
      justification: "Désaccord très fort : le gouvernement travailliste a engagé en 2026 une réforme qui étend le droit de vote à tous les 16-17 ans pour les élections britanniques et renforce parallèlement l'éducation civique pour les préparer à exercer ce droit. La formation est donc conçue comme un accompagnement d'un suffrage élargi, jamais comme une condition permettant d'exclure un citoyen du vote. Cette logique est directement opposée à la proposition ; -3 est adapté.",
      source: "https://www.gov.uk/government/publications/representation-of-the-people-bill-policy-summaries/votes-at-16"
    },
    danemark: {
      response: -2,
      confidence: 3,
      justification: "Désaccord net : le droit de vote aux élections législatives danoises est ouvert aux citoyens remplissant les conditions légales à partir de 18 ans, sans exigence de compétence économique. Le gouvernement Frederiksen III ne porte pas de réforme générale abaissant l'âge électoral à 16 ans. Conditionner le suffrage à une formation est donc nettement contraire au modèle actuel, mais -2 est plus précis que -3.",
      source: "https://www.valg.im.dk/noegletal/folketingsvalg/"
    },
    "pays-bas": {
      response: -2,
      confidence: 3,
      justification: "Désaccord net : aux Pays-Bas, le droit de vote aux élections nationales est ouvert aux citoyens néerlandais à partir de 18 ans sans condition de diplôme ou de formation économique. Le gouvernement Jetten ne porte pas dans son accord de coalition de réforme générale abaissant ce seuil à 16 ans. Le filtre proposé est donc nettement contraire au suffrage actuel, sans justifier un désaccord maximal ; -2 est adapté.",
      source: "https://www.government.nl/topics/elections/voting-in-house-of-representatives-elections"
    },
    pologne: {
      response: -2,
      confidence: 3,
      justification: "Désaccord net : la Constitution et le droit électoral polonais accordent le suffrage national aux citoyens à partir de 18 ans et n'imposent aucune condition de connaissance économique. Le gouvernement Tusk ne porte pas de réforme générale du vote à 16 ans. L'introduction d'une formation obligatoire préalable constituerait donc une restriction nette du suffrage, mais -2 est plus adapté que -3 dans cette calibration d'intensité.",
      source: "https://eli.gov.pl/api/acts/DU/1997/483/text.html"
    }
  };

  const questionIndex = DATA.questions.findIndex(item => item.id === 70);
  if (questionIndex < 0) return;

  const recalculate = entity => {
    const scores = {};
    DATA.axes.forEach(axis => {
      const denominator = 3 * DATA.questions.reduce(
        (sum, item) => sum + Math.abs(item.coefficients[axis.key]),
        0
      );
      const numerator = DATA.questions.reduce(
        (sum, item, index) => sum + (entity.responses[index] ?? 0) * item.coefficients[axis.key],
        0
      );
      scores[axis.key] = denominator ? 10 * numerator / denominator : 0;
    });
    entity.axisScores = scores;

    if (Array.isArray(entity.confidence) && entity.confidence.length) {
      entity.averageConfidence = entity.confidence.reduce(
        (sum, value) => sum + (Number(value) || 0),
        0
      ) / entity.confidence.length;
    }
  };

  Object.entries(Q70_OVERRIDES).forEach(([entityId, override]) => {
    const entity = DATA.entities.find(item => item.id === entityId);
    if (!entity || !Array.isArray(entity.responses)) return;

    entity.responses[questionIndex] = override.response;
    if (Array.isArray(entity.confidence)) entity.confidence[questionIndex] = override.confidence;
    if (Array.isArray(entity.justifications)) entity.justifications[questionIndex] = override.justification;
    if (Array.isArray(entity.sources)) entity.sources[questionIndex] = override.source;
    recalculate(entity);
  });
})();
