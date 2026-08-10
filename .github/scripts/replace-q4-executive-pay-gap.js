#!/usr/bin/env node

import fs from 'node:fs';
import vm from 'node:vm';

const paths = {
  questionnaire: 'data/questionnaire.js',
  parties: 'data/parties.js',
  governments: 'data/governments.js'
};

function loadConst(path, variableName) {
  const context = {};
  vm.createContext(context);
  const source = fs.readFileSync(path, 'utf8');
  vm.runInContext(source.replace(/^const /gm, 'var '), context, { filename: path });
  return context[variableName];
}

const questionnaire = loadConst(paths.questionnaire, 'QUESTIONNAIRE_DATA');
const parties = loadConst(paths.parties, 'PARTIES_DATA');
const governments = loadConst(paths.governments, 'GOVERNMENTS_DATA');
const axes = questionnaire.axes.map(a => a.key);
const q4Index = questionnaire.questions.findIndex(q => q.id === 4);
if (q4Index < 0) throw new Error('Q4 introuvable');

const originalQuestionnaire = structuredClone(questionnaire);
const originalParties = structuredClone(parties);
const originalGovernments = structuredClone(governments);
const oldQ4 = questionnaire.questions[q4Index];
if (oldQ4.coefficients.economy !== -0.7) throw new Error(`Coefficient économie Q4 inattendu: ${oldQ4.coefficients.economy}`);

questionnaire.questions[q4Index] = {
  ...oldQ4,
  text: "Les entreprises devraient être obligées de limiter l’écart entre la rémunération de leurs dirigeants et celle de leurs salariés les moins bien payés.",
  explanation: "Par exemple : fixer un plafond de 20 ou 30 fois le salaire le plus bas ; un dirigeant déjà à ce plafond ne pourrait être augmenté que si les plus bas salaires augmentent aussi.",
  defaultAnswer: 0
};

const partyCodings = {
  'lfi': {
    response: 3, confidence: 4,
    justification: "Accord fort : LFI a elle-même déposé en 2024 une proposition visant à plafonner la rémunération maximale dans une entreprise à vingt fois la rémunération la plus faible.",
    source: 'https://www.assemblee-nationale.fr/dyn/opendata/PIONANR5L17B0412.html'
  },
  'pcf': {
    response: 3, confidence: 4,
    justification: "Accord fort : les communistes défendent depuis plusieurs législatures un écart maximal de 1 à 20 entre la rémunération la plus basse et la rémunération la plus haute dans l’entreprise.",
    source: 'https://groupe-communiste.assemblee-nationale.fr/propositions/propositions-de-loi/article/lutte-contre-les-inegalites-salariales-4593'
  },
  'les-ecologistes': {
    response: 3, confidence: 4,
    justification: "Accord fort : lors de l’examen de la proposition de plafonnement à 1 pour 20, Les Écologistes ont explicitement soutenu la limitation des écarts de rémunération au sein des entreprises.",
    source: 'https://www.assemblee-nationale.fr/dyn/docs/RAPPANR5L17B0618.raw'
  },
  'ps': {
    response: 3, confidence: 4,
    justification: "Accord fort : le groupe socialiste a explicitement soutenu en commission la proposition limitant à vingt fois l’écart entre la rémunération la plus basse et la plus haute d’une entreprise.",
    source: 'https://www.assemblee-nationale.fr/dyn/docs/RAPPANR5L17B0618.raw'
  },
  'renaissance': {
    response: -3, confidence: 4,
    justification: "Désaccord fort : Renaissance s’est explicitement opposé au plafond de 1 à 20, le jugeant dirigiste et contraire à la liberté des entreprises de rémunérer des compétences ou talents exceptionnels.",
    source: 'https://www.assemblee-nationale.fr/dyn/docs/RAPPANR5L17B0618.raw'
  },
  'modem': {
    response: -1, confidence: 4,
    justification: "Désaccord modéré : le MoDem partage l’objectif de mieux répartir la valeur et de contenir certains excès, mais a rejeté un plafond légal national des écarts de rémunération, jugé inadapté dans sa méthode.",
    source: 'https://www.assemblee-nationale.fr/dyn/docs/RAPPANR5L17B0618.raw'
  },
  'horizons': {
    response: -3, confidence: 4,
    justification: "Désaccord fort : Horizons s’est explicitement opposé à un plafonnement légal des rémunérations, invoquant la liberté d’entreprise, l’attractivité et la capacité à recruter des dirigeants compétitifs.",
    source: 'https://www.assemblee-nationale.fr/dyn/docs/RAPPANR5L17B0618.raw'
  },
  'france-humaniste': {
    response: 0, confidence: 2,
    justification: "Position non tranchée : La France Humaniste critique les inégalités excessives et accepte des conditions sociales sur les entreprises bénéficiant d’argent public, mais aucune proposition de plafond général entre rémunérations hautes et basses n’est établie.",
    source: 'https://lafrancehumaniste.fr/articles/la-rupture-du-pacte-social.html'
  },
  'lr': {
    response: -3, confidence: 4,
    justification: "Désaccord fort : Les Républicains se sont opposés au plafond de 1 à 20, considérant qu’un encadrement légal général des rémunérations nuirait à la liberté de l’entreprise et à son attractivité.",
    source: 'https://www.assemblee-nationale.fr/dyn/docs/RAPPANR5L17B0618.raw'
  },
  'nouvelle-energie': {
    response: -3, confidence: 2,
    justification: "Désaccord fort par cohérence programmatique : Nouvelle Énergie défend la liberté entrepreneuriale, la baisse des contraintes et une économie de marché ; aucune proposition de plafond légal des écarts de rémunération n’est avancée.",
    source: 'https://www.unenouvelleenergie.fr/cotiser-moins-pour-gagner-plus/'
  },
  'udr': {
    response: -3, confidence: 4,
    justification: "Désaccord fort : l’UDR s’est explicitement opposée au plafonnement de 1 à 20, présenté comme contraire à la liberté d’entreprendre et comme une intervention excessive dans la fixation des rémunérations.",
    source: 'https://www.assemblee-nationale.fr/dyn/docs/RAPPANR5L17B0618.raw'
  },
  'rn': {
    response: -2, confidence: 4,
    justification: "Désaccord net : le RN a rejeté le principe d’un plafond légal entre plus basse et plus haute rémunération, tout en reconnaissant certains excès et en préférant agir sur les bas salaires ou les indemnités exceptionnelles des dirigeants.",
    source: 'https://www.assemblee-nationale.fr/dyn/docs/RAPPANR5L17B0618.raw'
  },
  'reconquete': {
    response: -3, confidence: 2,
    justification: "Désaccord fort par cohérence idéologique : Reconquête défend une ligne économique favorable à la liberté des entreprises et hostile aux contraintes supplémentaires sur les entreprises ; aucun soutien à un plafond légal des rémunérations n’est identifié.",
    source: 'https://fede56.parti-reconquete.fr/article/une-surtaxe-absurde-de-plus'
  }
};

const governmentCodings = {
  'allemagne': {
    response: 0, confidence: 2,
    justification: "Position équilibrée : le droit allemand exige que la rémunération des dirigeants reste proportionnée à leurs fonctions, performances et à la situation de l’entreprise, mais il n’impose pas de ratio légal entre dirigeants et salariés et le gouvernement actuel ne porte pas de plafond général comparable.",
    source: 'https://www.gesetze-im-internet.de/aktg/__87.html'
  },
  'espagne': {
    response: 1, confidence: 3,
    justification: "Accord modéré : la politique de rémunération des sociétés cotées doit expliquer comment les conditions de rémunération et d’emploi des salariés ont été prises en compte ; l’Espagne encadre donc le lien entre rémunérations, sans imposer de ratio maximal général.",
    source: 'https://www.boe.es/buscar/act.php?id=BOE-A-2010-10544&p=20250103&tn=0'
  },
  'suisse': {
    response: -2, confidence: 3,
    justification: "Désaccord net : le Conseil fédéral a explicitement recommandé de rejeter l’initiative 1:12 qui aurait interdit qu’un salaire dépasse douze fois le salaire le plus bas d’une même entreprise, préférant d’autres mécanismes de gouvernance et de redistribution.",
    source: 'https://www.admin.ch/fr/nsb?id=43067'
  },
  'finlande': {
    response: -2, confidence: 3,
    justification: "Désaccord net : l’État finlandais demande des rémunérations raisonnables et transparentes dans les entreprises publiques, mais le gouvernement Orpo a relevé le plafond de rémunération variable des dirigeants de sociétés cotées publiques pour rester compétitif sur le marché des dirigeants.",
    source: 'https://valtioneuvosto.fi/en/-/sustainable-growth-through-state-ownership-government-adopts-resolution-on-state-ownership-policy'
  },
  'royaume-uni': {
    response: 0, confidence: 2,
    justification: "Position équilibrée : les grandes sociétés cotées doivent publier et expliquer le ratio entre la rémunération du dirigeant et celle des salariés, mais il n’existe pas de plafond légal général et aucune position suffisamment directe du gouvernement actuel n’établit qu’il souhaite en créer un.",
    source: 'https://www.gov.uk/government/news/new-executive-pay-transparency-measures-come-into-force'
  },
  'danemark': {
    response: 0, confidence: 2,
    justification: "Position équilibrée : les sociétés cotées danoises doivent publier une politique et un rapport de rémunération, mais aucune règle générale ne lie la rémunération maximale au salaire le plus faible et le gouvernement n’a pas proposé de ratio légal comparable.",
    source: 'https://erhvervsstyrelsen.dk/vejledning-selskabslovens-krav-til-boersnoterede-selskabers-vederlagspolitik-og-vederlagsrapport'
  },
  'pays-bas': {
    response: -1, confidence: 3,
    justification: "Désaccord modéré : les Pays-Bas plafonnent légalement les rémunérations des dirigeants du secteur public et semi-public, mais n’imposent pas de ratio entre dirigeants et salariés dans les entreprises privées ; le modèle actuel reste donc moins interventionniste que la proposition.",
    source: 'https://www.rijksoverheid.nl/themas/overheid-en-democratie/beloningen-bestuurders/topinkomens-overheid'
  },
  'pologne': {
    response: 0, confidence: 2,
    justification: "Position équilibrée : les sociétés cotées doivent expliquer comment les conditions salariales des employés ont été prises en compte et comparer l’évolution de la rémunération des dirigeants à celle des salariés, mais aucun plafond légal général de ratio salarial n’est établi.",
    source: 'https://eli.gov.pl/api/acts/DU/2024/620/text.html'
  }
};

function applyCoding(entity, coding) {
  if (entity.responses.length !== questionnaire.questions.length ||
      entity.confidence.length !== questionnaire.questions.length ||
      entity.justifications.length !== questionnaire.questions.length ||
      entity.sources.length !== questionnaire.questions.length) {
    throw new Error(`${entity.id}: longueurs incohérentes`);
  }
  entity.responses[q4Index] = coding.response;
  entity.confidence[q4Index] = coding.confidence;
  entity.justifications[q4Index] = coding.justification;
  entity.sources[q4Index] = coding.source;
}

for (const p of parties) {
  const coding = partyCodings[p.id];
  if (!coding) throw new Error(`Codage Q4 manquant pour le parti ${p.id}`);
  applyCoding(p, coding);
}
for (const g of governments) {
  const coding = governmentCodings[g.id];
  if (!coding) throw new Error(`Codage Q4 manquant pour le gouvernement ${g.id}`);
  applyCoding(g, coding);
}
if (Object.keys(partyCodings).length !== parties.length) throw new Error('Nombre de codages partis incorrect');
if (Object.keys(governmentCodings).length !== governments.length) throw new Error('Nombre de codages gouvernements incorrect');

function recompute(entity) {
  entity.axisScores = Object.fromEntries(axes.map(axis => {
    let numerator = 0;
    let mass = 0;
    questionnaire.questions.forEach((q, i) => {
      const coefficient = q.coefficients[axis] || 0;
      numerator += entity.responses[i] * coefficient;
      mass += Math.abs(coefficient);
    });
    return [axis, mass ? 10 * numerator / (3 * mass) : 0];
  }));
  entity.averageConfidence = entity.confidence.reduce((sum, x) => sum + x, 0) / entity.confidence.length;
}
parties.forEach(recompute);
governments.forEach(recompute);

// Scope assertions: no questionnaire coefficient/mass or non-Q4 entity coding may change.
for (const axis of axes) {
  if (questionnaire.axisMasses[axis] !== originalQuestionnaire.axisMasses[axis]) throw new Error(`Masse ${axis} modifiée`);
}
questionnaire.questions.forEach((q, i) => {
  if (i === q4Index) return;
  if (JSON.stringify(q) !== JSON.stringify(originalQuestionnaire.questions[i])) throw new Error(`Question Q${q.id} modifiée hors périmètre`);
});
if (JSON.stringify(questionnaire.questions[q4Index].coefficients) !== JSON.stringify(originalQuestionnaire.questions[q4Index].coefficients)) {
  throw new Error('Coefficients Q4 modifiés alors qu’ils devaient rester identiques');
}

function assertEntityScope(before, after) {
  const scalarKeys = Object.keys(before).filter(k => !['responses','confidence','justifications','sources','axisScores','averageConfidence'].includes(k));
  for (const key of scalarKeys) {
    if (JSON.stringify(before[key]) !== JSON.stringify(after[key])) throw new Error(`${after.id}: clé ${key} modifiée hors périmètre`);
  }
  for (const key of ['responses','confidence','justifications','sources']) {
    before[key].forEach((value, i) => {
      if (i !== q4Index && JSON.stringify(value) !== JSON.stringify(after[key][i])) throw new Error(`${after.id}: ${key}[${i}] modifié hors Q4`);
    });
  }
}
originalParties.forEach((before, i) => assertEntityScope(before, parties[i]));
originalGovernments.forEach((before, i) => assertEntityScope(before, governments[i]));

function write(path, comment, variableName, value) {
  fs.writeFileSync(path, `${comment}\nconst ${variableName} = ${JSON.stringify(value, null, 2)};\n`);
}
write(paths.questionnaire, '// Questions, axes et métadonnées du questionnaire.', 'QUESTIONNAIRE_DATA', questionnaire);
write(paths.parties, '// Données de comparaison avec les partis politiques français.', 'PARTIES_DATA', parties);
write(paths.governments, '// Données de comparaison avec les gouvernements étrangers.', 'GOVERNMENTS_DATA', governments);

console.log(`Q4 replaced; recoded ${parties.length} parties and ${governments.length} governments.`);
