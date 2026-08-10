#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const context = {};
vm.createContext(context);

for (const relativePath of [
  'data/questionnaire.js',
  'data/parties.js',
  'data/governments.js'
]) {
  const source = fs.readFileSync(path.join(projectRoot, relativePath), 'utf8');
  vm.runInContext(source.replace(/^const /gm, 'var '), context, {
    filename: relativePath
  });
}

const questionnaire = context.QUESTIONNAIRE_DATA;
const parties = context.PARTIES_DATA;
const governments = context.GOVERNMENTS_DATA;
const questionIndex = new Map(
  questionnaire.questions.map((question, index) => [question.id, index])
);
const axes = questionnaire.axes.map(axis => axis.key);
const changes = [];

function getEntity(collection, id) {
  const entity = collection.find(candidate => candidate.id === id);
  if (!entity) throw new Error(`Entité introuvable : ${id}`);
  return entity;
}

function getIndex(questionId) {
  const index = questionIndex.get(questionId);
  if (index === undefined) throw new Error(`Question introuvable : ${questionId}`);
  return index;
}

function setField(entity, questionId, field, value, reason) {
  const index = getIndex(questionId);
  const previous = entity[field][index];
  if (previous === value) return;
  entity[field][index] = value;
  changes.push({
    entity: entity.id,
    questionId,
    field,
    previous,
    value,
    reason
  });
}

function setConfidence(entity, questionId, value, reason, justification) {
  setField(entity, questionId, 'confidence', value, reason);
  if (justification) {
    setField(entity, questionId, 'justifications', justification, reason);
  }
}

// Un niveau 3 est réservé à une preuve qui vise directement la question.
// Les anciennes formules génériques sont conservées comme orientation officielle,
// mais ne sont plus présentées comme une preuve directe au point près.
for (const party of parties) {
  party.confidence.forEach((confidence, index) => {
    const justification = party.justifications[index] || '';
    const questionId = questionnaire.questions[index].id;

    if (confidence === 3 && justification.includes('position centrale ou répétée')) {
      const prefix = justification.split(':')[0].trim();
      setConfidence(
        party,
        questionId,
        2,
        'Source officielle cohérente, mais justification trop générique pour une confiance maximale.',
        `${prefix} : orientation cohérente avec le document officiel retenu, sans passage isolé directement équivalent à la question.`
      );
    }

    if (
      confidence === 3
      && justification.includes('estimation prudente ; aucune formulation parfaitement équivalente')
    ) {
      setConfidence(
        party,
        questionId,
        1,
        'La justification indique elle-même qu’aucune formulation équivalente n’a été trouvée.'
      );
    }
  });
}

const franceHumaniste = getEntity(parties, 'france-humaniste');
setField(
  franceHumaniste,
  35,
  'responses',
  -2,
  'Le texte écogaulliste critique les marchés carbone insuffisants et privilégie l’autorité publique et la planification, tout en conservant un prix du carbone.'
);
setField(
  franceHumaniste,
  35,
  'justifications',
  'Désaccord net : l’écogaullisme rétablit l’autorité publique et la planification plutôt que de faire reposer principalement l’écologie sur le marché ; il conserve néanmoins un prix du carbone.',
  'Correction fondée sur le texte officiel écogaulliste.'
);

for (const [questionId, confidence, justification] of [
  [14, 2, 'Accord fort : le discours défend l’ouverture, la dignité et la diversité des modes de vie, sans formuler exactement l’arbitrage proposé par la question.'],
  [15, 2, 'Accord fort : la défense des libertés et de l’autonomie individuelle est explicite, mais aucune proposition directement équivalente sur les normes morales n’est formulée.'],
  [32, 2, 'Accord fort : l’urgence climatique et la priorité d’agir sont explicites, sans arbitrage chiffré direct avec la croissance de court terme.'],
  [37, 2, 'Accord fort : le texte demande que les plus gros émetteurs contribuent davantage, sans viser exactement la répartition internationale entre pays riches et pauvres.'],
  [59, 1, 'Accord fort : la ligne universaliste soutient cette estimation, mais la source ne prend pas position sur l’automaticité de la nationalité à la majorité.'],
  [74, 2, 'Accord net : le texte prévoit un recours répété au référendum lorsque nécessaire, tout en le décrivant comme un aboutissement et sans traiter le niveau d’information des électeurs.'],
  [77, 1, 'Accord fort : aucune proposition explicite en faveur de la proportionnelle intégrale n’a été trouvée dans la source retenue.'],
  [79, 2, 'Accord fort : le texte rejette explicitement une causalité culturelle de la délinquance, mais ne quantifie pas la part explicative des inégalités sociales.'],
  [86, 1, 'Accord fort : le texte propose une politique volontariste du logement, mais ne mentionne pas l’interdiction municipale des locations touristiques.']
]) {
  setConfidence(
    franceHumaniste,
    questionId,
    confidence,
    'Réévaluation du caractère direct de la source La France Humaniste.',
    justification
  );
}

for (const [questionId, response, justification] of [
  [5, -2, 'Désaccord net : Dominique de Villepin critique directement les relèvements successifs du SMIC pour leur effet de tassement des salaires et privilégie un surcroît de revenu financé par la refonte des exonérations plutôt qu’une nouvelle forte hausse du minimum légal.'],
  [7, 1, 'Accord modéré : la doctrine de souveraineté et d’intervention stratégique rend une prise de contrôle publique possible, sans proposition explicite de nationalisation.'],
  [81, -1, 'Réserve : La France Humaniste privilégie l’augmentation de l’offre de soins et la lutte contre les déserts médicaux, sans proposer de limiter le conventionnement dans les zones déjà bien dotées.'],
  [82, 1, 'Accord modéré : le texte confie les soins essentiels à l’Assurance maladie, mais maintient aux complémentaires une pleine liberté d’innovation ; leur rôle serait clarifié plutôt que fortement supprimé.'],
  [83, 1, 'Accord modéré : le texte accepte des réorganisations hospitalières, des établissements autonomes et interconnectés et un changement de statut en cas de déficit, sans défendre explicitement la fermeture de services de proximité.'],
  [84, 0, 'Position neutre ou non arrêtée : aucune proposition directement comparable sur le recrutement ou l’évaluation des enseignants par les chefs d’établissement n’a été trouvée.'],
  [85, 0, 'Position neutre ou non arrêtée : le programme défend l’égalité des chances et la mixité, mais aucune prise de position sur le financement public des établissements privés sous contrat n’a été trouvée.'],
  [86, 1, 'Accord modéré : le texte défend une régulation volontariste du logement dans les zones tendues et des pouvoirs municipaux renforcés, mais ne propose pas directement l’interdiction des locations touristiques.'],
  [90, 0, 'Position neutre ou non arrêtée : le texte renforce le pilotage public de l’autonomie, mais ne propose pas d’interdire aux groupes lucratifs de gérer des EHPAD.']
]) {
  setField(
    franceHumaniste,
    questionId,
    'responses',
    response,
    'Arbitrage La France Humaniste réexaminé avec le propriétaire du questionnaire à partir du corpus consolidé de Dominique de Villepin.'
  );
  setField(
    franceHumaniste,
    questionId,
    'justifications',
    justification,
    'Justification synchronisée avec l’arbitrage retenu.'
  );
}

// Consolidation du profil La France Humaniste à partir du programme 2026,
// des prises de position directes de Dominique de Villepin et, lorsque la
// formulation actuelle est moins précise, de son bilan gouvernemental.
// Les archives anciennes ne dépassent jamais le niveau 2 à elles seules.
const franceHumanisteSources = {
  budget: 'https://lafrancehumaniste.fr/articles/le-sursaut-budgetaire.html',
  work: 'https://lafrancehumaniste.fr/articles/un-nouveau-monde-du-travail.html',
  social: 'https://lafrancehumaniste.fr/articles/protection-sociale.html',
  moment: 'https://lafrancehumaniste.fr/articles/le-moment-francais-sorbonne.html',
  identity: 'https://lafrancehumaniste.fr/articles/la-france-face-au-piege-identitaire.html',
  security: 'https://lafrancehumaniste.fr/articles/la-lutte-antiterroriste.html',
  institutions: 'https://lafrancehumaniste.fr/articles/chemin-gaulliste.html',
  europe: 'https://lafrancehumaniste.fr/articles/moment-europeen-europe-souveraine.html',
  agriculture: 'https://lafrancehumaniste.fr/articles/souverainete-agricole-et-alimentaire.html',
  ecology: 'https://lafrancehumaniste.fr/articles/pourquoi-je-suis-ecogaulliste.html',
  wealthTax: 'https://www.leparisien.fr/economie/dominique-de-villepin-favorable-a-la-taxe-zucman-et-a-un-retour-de-lisf-mais-en-etant-adaptes-25-09-2025-FTHAWTNDLFEJPGKRE35S5YJ6JQ.php',
  legacyWork: 'https://www.vie-publique.fr/discours/161705-conference-de-presse-mensuelle-de-dominique-de-villepin-premier-ministr',
  legacyImmigration: 'https://www.vie-publique.fr/discours/161466-communique-des-services-du-premier-ministre-en-date-du-24-avril-2006-s',
  legacyFamily: 'https://www.vie-publique.fr/discours/162308-declaration-de-m-dominique-de-villepin-premier-ministre-sur-les-orien'
};

for (const [questionId, response, confidence, source, justification] of [
  [43, -3, 3, franceHumanisteSources.wealthTax, 'Désaccord fort : Dominique de Villepin s’est déclaré directement favorable au retour d’un ISF adapté et à une taxation minimale des très hauts patrimoines, à l’opposé de la suppression de l’IFI.'],
  [49, 2, 3, franceHumanisteSources.social, 'Accord net : le projet propose une épargne retraite obligatoire, défiscalisée et garantie par l’État, intégrée à un fonds souverain, en complément du système de protection sociale.'],
  [50, -3, 3, franceHumanisteSources.moment, 'Désaccord fort : le programme propose explicitement de supprimer l’âge légal de départ et de le remplacer par une durée de cotisation tenant compte de la pénibilité.'],
  [80, 1, 3, franceHumanisteSources.agriculture, 'Accord modéré : le programme vise une baisse de moitié des pesticides malgré son coût, mais l’accompagne de clauses miroirs et de protections contre la concurrence étrangère moins-disante.'],
  [87, 1, 2, franceHumanisteSources.europe, 'Accord modéré : le texte soutient l’aide européenne à l’Ukraine et juge l’effort français insuffisant, tout en l’inscrivant dans une stratégie européenne et diplomatique plutôt que dans un engagement inconditionnel et indéfini.']
]) {
  setField(
    franceHumaniste,
    questionId,
    'responses',
    response,
    'Correction fondée sur une prise de position directement comparable de La France Humaniste ou de Dominique de Villepin.'
  );
  setConfidence(
    franceHumaniste,
    questionId,
    confidence,
    'Niveau de preuve recalibré sur la précision et l’actualité de la source.',
    justification
  );
  setField(
    franceHumaniste,
    questionId,
    'sources',
    source,
    'Source synchronisée avec le codage consolidé de La France Humaniste.'
  );
}

for (const [questionId, confidence, source, justification] of [
  [1, 2, franceHumanisteSources.work, 'Position neutre étayée : le projet articule baisse ciblée des cotisations patronales, contribution de la consommation et des profits et hausse du revenu des bas salaires, sans priorité univoque donnée aux seules charges.'],
  [2, 2, franceHumanisteSources.work, 'Réserve étayée : le projet défend une économie sociale de marché et un État arbitre et stratège, ce qui exclut une confiance exclusive dans le marché sans rejeter l’initiative privée.'],
  [3, 3, franceHumanisteSources.budget, 'Accord net directement documenté : le texte demande que les plus aisés contribuent selon leurs moyens et défend une fiscalité plus progressive.'],
  [5, 3, franceHumanisteSources.work, 'Désaccord net directement documenté : le texte critique les relèvements successifs du SMIC pour leur effet de tassement et propose de convertir une partie des exonérations en revenu supplémentaire pour les salariés concernés.'],
  [7, 2, franceHumanisteSources.budget, 'Accord modéré étayé : le projet défend un pôle public de crédit, un fonds souverain et des prises de participation stratégiques, sans programme général de nationalisations.'],
  [8, 2, franceHumanisteSources.work, 'Position partagée étayée : le projet conditionne les aides publiques aux entreprises et renforce le rôle stratégique de l’État tout en conservant l’économie de marché.'],
  [13, 3, franceHumanisteSources.social, 'Désaccord net directement documenté : le texte rejette le « chacun pour soi » et la privatisation de la santé, de l’éducation et des retraites au profit de systèmes solidaires obligatoires.'],
  [16, 2, franceHumanisteSources.moment, 'Réserve étayée : le projet combine égalité réelle des chances et défense des libertés individuelles, sans subordonner systématiquement celles-ci à l’égalité des résultats.'],
  [25, 2, franceHumanisteSources.identity, 'Position partagée étayée : le texte refuse la fermeture identitaire tout en reconnaissant la nécessité de règles et d’une politique migratoire maîtrisée.'],
  [27, 2, franceHumanisteSources.moment, 'Réserve étayée : le programme exige l’exécution effective des peines mais insiste aussi sur la prévention, la justice et l’État de droit plutôt que sur un durcissement carcéral uniforme.'],
  [29, 3, franceHumanisteSources.security, 'Réserve directement documentée : le texte refuse que l’exception sécuritaire et la surveillance généralisée deviennent la règle, même face au terrorisme.'],
  [30, 3, franceHumanisteSources.security, 'Réserve directement documentée : la lutte antiterroriste est subordonnée à l’État de droit et à des mesures ciblées, non à une restriction générale des libertés.'],
  [40, 2, franceHumanisteSources.europe, 'Accord net étayé : le projet veut davantage de décisions européennes à la majorité qualifiée et de capacités communes, mais refuse un fédéralisme uniforme.'],
  [42, 2, franceHumanisteSources.europe, 'Position partagée étayée : le projet recherche une souveraineté européenne renforcée tout en préservant la capacité d’initiative et les intérêts stratégiques français.'],
  [44, 3, franceHumanisteSources.social, 'Accord modéré directement documenté : le projet propose de taxer à la succession certaines plus-values latentes plutôt que de supprimer toute fiscalité spécifique sur les patrimoines immobiliers élevés.'],
  [46, 2, franceHumanisteSources.work, 'Réserve étayée : le revenu de transition serait lié à la formation et à une recherche active d’emploi, avec des droits et obligations négociés plutôt qu’une suppression automatique uniforme.'],
  [47, 2, franceHumanisteSources.legacyWork, 'Position partagée étayée : l’action gouvernementale de Villepin associait assouplissement de l’embauche et sécurisation des parcours ; son programme actuel reconnaît aussi les limites des dispositifs trop précaires.'],
  [48, 2, franceHumanisteSources.legacyWork, 'Réserve étayée : le bilan gouvernemental a expérimenté un contrat plus flexible, mais le projet actuel met davantage l’accent sur la sécurité des transitions et la lutte contre la précarité.'],
  [51, 2, franceHumanisteSources.social, 'Réserve étayée : la protection sociale rénovée maintient une assurance chômage solidaire, mais conditionne le revenu de transition à la formation et à la recherche active.'],
  [55, 2, franceHumanisteSources.agriculture, 'Réserve étayée : le programme réclame une simplification administrative et des normes applicables, sans renoncer aux protections sociales et environnementales.'],
  [56, 2, franceHumanisteSources.legacyImmigration, 'Accord fort mais indirect : la politique d’intégration portée par Villepin liait séjour durable, apprentissage du français, droits et citoyenneté, sans formuler la règle précise d’accès facilité proposée ici.'],
  [57, 2, franceHumanisteSources.identity, 'Désaccord net étayé : la ligne universaliste refuse une hiérarchie durable des droits selon l’origine ou la nationalité, sans traiter chaque prestation sociale séparément.'],
  [58, 2, franceHumanisteSources.legacyImmigration, 'Accord modéré étayé : la politique d’immigration de Villepin combinait maîtrise des flux, intégration et besoins économiques, ce qui correspond à une sélection partielle plutôt qu’exclusive.'],
  [60, 2, franceHumanisteSources.legacyImmigration, 'Réserve étayée : le contrat d’accueil et d’intégration reposait sur la langue, la citoyenneté et l’insertion, non sur une assimilation culturelle exhaustive.'],
  [61, 3, franceHumanisteSources.identity, 'Accord fort directement documenté : le texte défend la coexistence des cultures et des convictions dès lors que la loi républicaine commune est respectée.'],
  [63, 2, franceHumanisteSources.security, 'Accord modéré étayé : le texte accepte un renseignement et une prévention ciblés contre le terrorisme mais rejette la surveillance généralisée.'],
  [69, 2, franceHumanisteSources.ecology, 'Accord modéré étayé : l’écogaullisme assume l’héritage nucléaire français dans une stratégie publique de décarbonation, sans proposer de sacrifier les renouvelables.'],
  [72, 2, franceHumanisteSources.institutions, 'Désaccord net étayé : le projet refuse le gouvernement par l’expertise ou le décret et réaffirme la responsabilité du Parlement, du référendum et des citoyens.'],
  [73, 2, franceHumanisteSources.institutions, 'Réserve étayée : le président doit redevenir arbitre et les pouvoirs exceptionnels rester un dernier recours, ce qui s’oppose à une concentration ordinaire accrue.'],
  [75, 2, franceHumanisteSources.institutions, 'Désaccord fort étayé : le texte défend explicitement l’État de droit, le contrôle parlementaire et la participation citoyenne contre un gouvernement autoritaire.'],
  [78, 2, franceHumanisteSources.legacyImmigration, 'Accord net étayé : le contrat d’accueil et d’intégration porté par Villepin prévoyait explicitement apprentissage du français, formation civique et insertion pour un séjour durable.'],
  [81, 2, franceHumanisteSources.social, 'Réserve étayée : la lutte contre les déserts médicaux et l’organisation territoriale de l’offre sont explicites, mais le conventionnement sélectif n’est pas proposé.'],
  [83, 2, franceHumanisteSources.social, 'Accord modéré étayé : le texte prévoit des hôpitaux autonomes et interconnectés ainsi que des réorganisations en cas de déficit, sans défendre une fermeture générale des services de proximité.'],
  [90, 2, franceHumanisteSources.social, 'Position neutre étayée : l’autonomie devient une branche pleine de la Sécurité sociale et le pilotage public est renforcé, mais aucune interdiction des EHPAD lucratifs n’est formulée.'],
  [91, 2, franceHumanisteSources.legacyFamily, 'Accord modéré étayé : la politique familiale de Villepin associait universalité, soutien accru aux familles modestes et maintien de mécanismes fiscaux familiaux, ce qui appuie une réforme redistributive sans la préciser au point près.'],
  [92, 2, franceHumanisteSources.moment, 'Accord net étayé : le programme propose directement de supprimer les algorithmes de recommandation et le défilement infini pour les plus jeunes, sans aller jusqu’à une interdiction totale avant 15 ans.']
]) {
  setConfidence(
    franceHumaniste,
    questionId,
    confidence,
    'Confiance consolidée par le programme actuel ou le bilan public de Dominique de Villepin.',
    justification
  );
  setField(
    franceHumaniste,
    questionId,
    'sources',
    source,
    'Source synchronisée avec la justification consolidée de La France Humaniste.'
  );
}

const udr = getEntity(parties, 'udr');
const udrForumSource = 'https://www.udr.fr/grandforumlibertes';
for (const questionId of [43, 55]) {
  setField(
    udr,
    questionId,
    'sources',
    udrForumSource,
    'Le programme UDR mentionne directement la suppression de l’IFI et la réduction de 25 % des normes.'
  );
}
setField(
  udr,
  43,
  'justifications',
  'Accord fort : le programme fiscal de l’UDR propose explicitement de supprimer l’IFI, qualifié d’impôt contre-productif.',
  'Source UDR directe.'
);
setField(
  udr,
  55,
  'justifications',
  'Accord fort : le programme de simplification de l’UDR propose de supprimer 25 % des normes et plusieurs dispositifs environnementaux ou sociaux jugés liberticides.',
  'Source UDR directe.'
);

for (const questionId of [20, 23, 24, 26, 27, 29, 30, 39, 42, 46, 51, 57, 60, 63, 78]) {
  const index = getIndex(questionId);
  const prefix = udr.justifications[index].split(':')[0].trim();
  setConfidence(
    udr,
    questionId,
    1,
    'La source retenue documente une orientation générale, mais pas la mesure précise attribuée à l’UDR.',
    `${prefix} : note conservée au titre de la ligne générale de l’UDR, sans proposition officielle directement équivalente identifiée.`
  );
}

for (const questionId of [43, 55]) {
  setConfidence(
    udr,
    questionId,
    3,
    'Le programme UDR fournit une proposition directement équivalente.'
  );
}

const netherlands = getEntity(governments, 'pays-bas');
const dutchCitizenshipSource = 'https://www.government.nl/themes/migration-and-travel/dutch-citizenship/becoming-a-dutch-citizen';
setField(
  netherlands,
  59,
  'responses',
  -3,
  'La nationalité néerlandaise n’est pas acquise automatiquement à la majorité du seul fait d’être né et d’avoir grandi dans le pays.'
);
setConfidence(
  netherlands,
  59,
  3,
  'Règle officielle d’acquisition de la nationalité néerlandaise.',
  'Désaccord fort : la nationalité est automatique à la naissance lorsqu’un parent est néerlandais ; les autres personnes doivent relever d’une procédure d’option ou de naturalisation.'
);
setField(netherlands, 59, 'sources', dutchCitizenshipSource, 'Source gouvernementale directe.');

setConfidence(
  netherlands,
  82,
  3,
  'L’accord de coalition maintient explicitement les assureurs, leur contractualisation et une franchise obligatoire.',
  'Désaccord fort : l’accord maintient un rôle structurant pour les assureurs santé et augmente la franchise obligatoire, à l’opposé d’une réduction forte du rôle des complémentaires.'
);
setConfidence(
  netherlands,
  86,
  1,
  'L’accord de coalition ne contient pas la mesure précise sur les locations touristiques et réduit par ailleurs certaines restrictions municipales au logement.',
  'Accord net : note conservée comme estimation, mais aucune interdiction municipale directement équivalente des locations touristiques n’est formulée dans l’accord de coalition.'
);
setConfidence(
  netherlands,
  89,
  3,
  'La loi néerlandaise autorise directement l’euthanasie sous des critères stricts.',
  'Accord fort : l’euthanasie est permise lorsque la souffrance est insupportable, sans perspective d’amélioration, et que le médecin respecte les critères légaux de diligence.'
);
setField(
  netherlands,
  89,
  'sources',
  'https://www.government.nl/themes/family-health-and-care/euthanasia/is-euthanasia-allowed',
  'Source gouvernementale directe.'
);

const poland = getEntity(governments, 'pologne');
setField(
  poland,
  59,
  'responses',
  -3,
  'Le droit polonais repose sur la filiation : la naissance en Pologne de parents étrangers ne donne pas automatiquement la nationalité à la majorité.'
);
setConfidence(
  poland,
  59,
  3,
  'Règle officielle d’acquisition de la nationalité polonaise.',
  'Désaccord fort : un enfant acquiert la nationalité polonaise par filiation lorsqu’au moins un parent est polonais ; la naissance et la croissance dans le pays ne suffisent pas à une acquisition automatique à la majorité.'
);
setField(
  poland,
  59,
  'sources',
  'https://archiwum.mswia.gov.pl/en/document/ways-of-acquiring-poli/793%2CWays-of-acquiring-Polish-citizenship.html',
  'Source officielle directe sur le droit de la nationalité.'
);
setField(
  poland,
  61,
  'responses',
  -2,
  'La stratégie migratoire du gouvernement exige explicitement le respect des usages polonais et l’intégration, au-delà du seul respect de la loi.'
);
setConfidence(
  poland,
  61,
  3,
  'Position explicite de la stratégie migratoire gouvernementale.',
  'Désaccord net : le gouvernement exige des nouveaux arrivants qu’ils respectent les usages polonais et s’intègrent ; le seul respect formel des lois n’est donc pas présenté comme suffisant.'
);
setField(
  poland,
  61,
  'sources',
  'https://www.gov.pl/web/primeminister/taking-back-control-ensuring-security',
  'Source gouvernementale directe.'
);

const switzerland = getEntity(governments, 'suisse');
setField(
  switzerland,
  81,
  'sources',
  'https://www.bag.admin.ch/de/hoechstzahlen-fuer-arztinnen-und-aerzte',
  'Le droit suisse permet directement aux cantons de limiter l’admission de nouveaux médecins.'
);
setField(
  switzerland,
  81,
  'justifications',
  'Accord net : l’article 55a de la LAMal permet aux cantons de plafonner l’admission de nouveaux médecins facturant à l’assurance obligatoire afin d’éviter la sur-offre.',
  'Source fédérale directe.'
);

// Dernière passe transversale : les règles de nationalité comparées sont
// codées sur le mécanisme précis de la Q59 (automaticité liée à la naissance
// et à la croissance dans le pays), et non sur l'ouverture migratoire générale
// du gouvernement. Une voie facilitée mais soumise à une demande reste donc
// moins favorable que l'automaticité demandée par la question.
for (const [entityId, response, source, justification] of [
  [
    'allemagne',
    2,
    'https://www.bmi.bund.de/DE/themen/verfassung/staatsangehoerigkeit/geburt-in-deutschland/geburt-in-deutschland.html',
    'Accord net : un enfant né en Allemagne de parents étrangers acquiert automatiquement la nationalité lorsqu’un parent réside légalement dans le pays depuis au moins cinq ans avec un droit de séjour permanent ; l’automaticité existe donc, mais sous une condition parentale.'
  ],
  [
    'espagne',
    -2,
    'https://www.mjusticia.gob.es/es/ciudadania/nacionalidad/que-es-nacionalidad/como-adquiere-nacionalidad/espanoles-origen',
    'Désaccord net : la naissance en Espagne de parents étrangers ne confère la nationalité d’origine que dans des cas limités ; les autres personnes nées dans le pays doivent engager une procédure de nationalité par résidence, sans acquisition automatique à la majorité.'
  ],
  [
    'suisse',
    -3,
    'https://www.sem.admin.ch/sem/en/home/integration-einbuergerung/schweizer-werden.html',
    'Désaccord fort : la Suisse applique principalement le droit du sang et exige une demande de naturalisation ainsi que des conditions de résidence et d’intégration ; naître et grandir dans le pays ne rend pas automatiquement suisse à la majorité.'
  ],
  [
    'finlande',
    -3,
    'https://migri.fi/en/child-born-in-finland',
    'Désaccord fort : un enfant né en Finlande de parents étrangers n’acquiert la nationalité par le lieu de naissance que dans des cas exceptionnels, notamment pour éviter l’apatridie ; aucune automaticité générale n’existe à la majorité.'
  ],
  [
    'royaume-uni',
    1,
    'https://www.gov.uk/apply-citizenship-born-uk',
    'Accord modéré : une personne née au Royaume-Uni qui y a vécu jusqu’à dix ans dispose d’une voie de droit à l’enregistrement, mais doit accomplir une démarche ; l’acquisition n’est automatique à la naissance que si un parent est britannique ou établi.'
  ],
  [
    'danemark',
    -3,
    'https://lifeindenmark.borger.dk/settle-in-denmark/danish-citizenship/conditions-for-foreign-citizens--acquisition-of-danish-citizenship',
    'Désaccord fort : la naissance et l’enfance au Danemark ne suffisent pas ; l’acquisition ordinaire exige une naturalisation et, en principe, neuf années de résidence ainsi que d’autres conditions.'
  ]
]) {
  const entity = getEntity(governments, entityId);
  setField(
    entity,
    59,
    'responses',
    response,
    'Correction fondée sur la règle officielle de nationalité comparable au mécanisme exact de la Q59.'
  );
  setConfidence(
    entity,
    59,
    3,
    'La règle juridique officielle vise directement la naissance, la résidence et le mode d’acquisition de la nationalité.',
    justification
  );
  setField(
    entity,
    59,
    'sources',
    source,
    'Source gouvernementale directe sur le droit de la nationalité.'
  );
}

// Analogues internationaux de l'IFI : le système néerlandais de Box 3
// continue d'inclure les résidences secondaires et les biens loués parmi les
// actifs imposables. Il ne s'agit pas d'un IFI français à l'identique, d'où une
// confiance 2 et une opposition modérée seulement.
setField(
  netherlands,
  43,
  'responses',
  -1,
  'Le régime néerlandais conserve une imposition patrimoniale de Box 3 incluant les résidences secondaires et d’autres biens immobiliers.'
);
setConfidence(
  netherlands,
  43,
  2,
  'Analogie fiscale directe, mais le champ de Box 3 est plus large que celui de l’IFI français.',
  'Réserve : les résidences secondaires, logements loués et autres biens immobiliers sont déclarés comme actifs en Box 3 ; le système ne correspond toutefois pas exactement à un IFI ciblant le seul patrimoine immobilier élevé.'
);
setField(
  netherlands,
  43,
  'sources',
  'https://www.belastingdienst.nl/wps/wcm/connect/en/income-in-box-3/content/box-3-provisional-assessment-2026',
  'Source directe de l’administration fiscale néerlandaise.'
);

const nouvelleEnergie = getEntity(parties, 'nouvelle-energie');
setField(
  nouvelleEnergie,
  50,
  'responses',
  -2,
  'Le programme fixe une norme d’âge à 65 ans et dit vouloir mettre fin aux débats récurrents sur sa hausse liée au vieillissement, ce qui contredit une indexation automatique.'
);
setConfidence(
  nouvelleEnergie,
  50,
  3,
  'Le programme traite directement de l’âge de départ et de son évolution avec le vieillissement.',
  'Désaccord net : Nouvelle Énergie fixe une norme de départ à 65 ans et présente sa réforme comme un moyen d’en finir avec les hausses récurrentes liées au vieillissement, plutôt que d’indexer automatiquement l’âge légal sur l’espérance de vie.'
);
setField(
  nouvelleEnergie,
  50,
  'sources',
  'https://www.unenouvelleenergie.fr/notre-programme/reussir-une-nouvelle-ambition-francaise/',
  'Programme officiel directement comparable.'
);

setField(
  nouvelleEnergie,
  92,
  'responses',
  -3,
  'David Lisnard et Nouvelle Énergie rejettent explicitement l’interdiction d’accès aux réseaux sociaux pour les moins de 15 ans.'
);
setConfidence(
  nouvelleEnergie,
  92,
  3,
  'Prise de position officielle visant exactement l’interdiction de la Q92.',
  'Désaccord fort : Nouvelle Énergie qualifie l’interdiction des réseaux sociaux aux moins de 15 ans d’aveu d’impuissance publique et lui préfère la responsabilisation des plateformes et une régulation de leurs modèles addictifs.'
);
setField(
  nouvelleEnergie,
  92,
  'sources',
  'https://www.unenouvelleenergie.fr/reseaux-sociaux-linterdiction-est-le-dernier-refuge-de-limpuissance-publique/',
  'Prise de position officielle directement équivalente.'
);

const rassemblementNational = getEntity(parties, 'rn');
setField(
  rassemblementNational,
  28,
  'justifications',
  'Réserve : estimation prudente fondée sur la priorité donnée à l’effectivité et au durcissement des sanctions ; aucune formulation officielle parfaitement équivalente à l’arbitrage entre prévention, réinsertion et augmentation des sanctions n’a été identifiée.',
  'Correction de cohérence entre le signe de la note et sa justification, sans modification de la note faute de preuve directe contraire.'
);

for (const entity of [...parties, ...governments]) {
  entity.justifications.forEach((justification, index) => {
    const normalized = justification.replace(/ {2,}:/g, ' :');
    if (normalized !== justification) {
      setField(
        entity,
        questionnaire.questions[index].id,
        'justifications',
        normalized,
        'Normalisation typographique du séparateur de justification.'
      );
    }
  });
}

function recompute(entity) {
  entity.axisScores = Object.fromEntries(axes.map(axis => {
    let numerator = 0;
    let mass = 0;
    questionnaire.questions.forEach((question, index) => {
      const coefficient = question.coefficients[axis] || 0;
      numerator += entity.responses[index] * coefficient;
      mass += Math.abs(coefficient);
    });
    return [axis, mass ? 10 * numerator / (3 * mass) : 0];
  }));
  entity.averageConfidence = entity.confidence.reduce((sum, value) => sum + value, 0)
    / entity.confidence.length;
}

for (const entity of [...parties, ...governments]) recompute(entity);

function writeData(relativePath, comment, variableName, value) {
  const output = `${comment}\nconst ${variableName} = ${JSON.stringify(value, null, 2)};\n`;
  fs.writeFileSync(path.join(projectRoot, relativePath), output);
}

writeData(
  'data/parties.js',
  '// Données de comparaison avec les partis politiques français.',
  'PARTIES_DATA',
  parties
);
writeData(
  'data/governments.js',
  '// Données de comparaison avec les gouvernements étrangers.',
  'GOVERNMENTS_DATA',
  governments
);

const responseChanges = changes.filter(change => change.field === 'responses');
const confidenceChanges = changes.filter(change => change.field === 'confidence');
console.log(`Audit appliqué : ${responseChanges.length} notes et ${confidenceChanges.length} indices de confiance modifiés.`);
for (const change of responseChanges) {
  console.log(`- ${change.entity}, Q${change.questionId}: ${change.previous} -> ${change.value}`);
}
