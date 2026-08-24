#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

function read(relativePath) {
  return fs.readFileSync(path.join(projectRoot, relativePath), "utf8");
}

function write(relativePath, content) {
  fs.writeFileSync(path.join(projectRoot, relativePath), content, "utf8");
}

function loadConstant(relativePath, constantName) {
  const context = {};
  vm.createContext(context);
  vm.runInContext(
    `${read(relativePath)}\nglobalThis.__VALUE__ = ${constantName};`,
    context,
    { filename: relativePath }
  );
  return context.__VALUE__;
}

const questionnaire = loadConstant("data/questionnaire.js", "QUESTIONNAIRE_DATA");
const migratesLegacyQuestionnaire = questionnaire.questions.length === 87
  && questionnaire.meta.questionCount === 87;
const refreshesCurrentQuestionnaire = questionnaire.questions.length === 88
  && questionnaire.meta.questionCount === 88;
if (!migratesLegacyQuestionnaire && !refreshesCurrentQuestionnaire) {
  throw new Error("La migration attend exactement 87 ou 88 questions fermées.");
}

const research = loadConstant("data/residence-permit-overrides.js", "RESIDENCE_PERMIT_RESEARCH");
const parties = loadConstant("data/parties.js", "PARTIES_DATA");
const governments = loadConstant("data/governments.js", "GOVERNMENTS_DATA");

const q19 = questionnaire.questions.find(question => question.id === 19);
if (!q19) throw new Error("Q19 introuvable.");
q19.text = "La France devrait restreindre le nombre de titres de séjour qu'elle délivre ou rendre leurs conditions d'obtention plus difficiles.";

const q21 = questionnaire.questions.find(question => question.id === 21);
if (!q21) throw new Error("Q21 introuvable.");
q21.text = "À situation sociale comparable, une personne ayant acquis la nationalité française par naturalisation devrait bénéficier des mêmes prestations sociales et du même accès au logement social qu’une personne française de naissance.";

const q22Definition = {
  id: 22,
  theme: "Immigration / droits sociaux",
  text: "Les personnes disposant d'un titre de séjour, mais pas de la nationalité française, devraient avoir accès aux mêmes prestations sociales que les personnes de nationalité française.",
  defaultAnswer: 3,
  note: "",
  coefficients: {
    economy: 0,
    authority: 0,
    europe: 0,
    ecology: 0,
    immigration: 1,
    democracy: 0
  }
};

if (migratesLegacyQuestionnaire) {
  for (const question of questionnaire.questions) {
    if (question.id > 21) question.id += 1;
  }
  questionnaire.questions.splice(21, 0, q22Definition);
  for (const question of questionnaire.openQuestions) question.id += 1;
} else {
  const q22 = questionnaire.questions.find(question => question.id === 22);
  if (!q22) throw new Error("Q22 introuvable dans le questionnaire déjà migré.");
  Object.assign(q22, q22Definition);
}

questionnaire.meta.version = "2026-08-24";
questionnaire.meta.questionCount = questionnaire.questions.length;

for (const axis of questionnaire.axes) {
  questionnaire.axisMasses[axis.key] = questionnaire.questions.reduce(
    (sum, question) => sum + Math.abs(question.coefficients[axis.key] || 0),
    0
  );
}

function migrateEntity(entity) {
  const coding = research[entity.id];
  if (!coding) throw new Error(`Codage des titres de séjour absent pour ${entity.id}.`);
  const expectedLength = migratesLegacyQuestionnaire ? 87 : 88;

  for (const field of ["responses", "confidence", "justifications", "sources"]) {
    if (!Array.isArray(entity[field]) || entity[field].length !== expectedLength) {
      throw new Error(`${entity.id}.${field} ne contient pas ${expectedLength} valeurs.`);
    }
  }

  entity.responses[18] = coding.q19.response;
  entity.confidence[18] = coding.q19.confidence;
  entity.justifications[18] = coding.q19.justification;
  entity.sources[18] = coding.q19.source;

  entity.responses[20] = coding.q21.response;
  entity.confidence[20] = coding.q21.confidence;
  entity.justifications[20] = coding.q21.justification;
  entity.sources[20] = coding.q21.source;

  if (migratesLegacyQuestionnaire) {
    entity.responses.splice(21, 0, coding.q22.response);
    entity.confidence.splice(21, 0, coding.q22.confidence);
    entity.justifications.splice(21, 0, coding.q22.justification);
    entity.sources.splice(21, 0, coding.q22.source);
  } else {
    entity.responses[21] = coding.q22.response;
    entity.confidence[21] = coding.q22.confidence;
    entity.justifications[21] = coding.q22.justification;
    entity.sources[21] = coding.q22.source;
  }

  const axisScores = {};
  for (const axis of questionnaire.axes) {
    const mass = questionnaire.questions.reduce(
      (sum, question) => sum + Math.abs(question.coefficients[axis.key] || 0),
      0
    );
    const numerator = questionnaire.questions.reduce(
      (sum, question, index) => sum + entity.responses[index] * (question.coefficients[axis.key] || 0),
      0
    );
    axisScores[axis.key] = mass ? 10 * numerator / (3 * mass) : 0;
  }
  entity.axisScores = axisScores;
  entity.averageConfidence = entity.confidence.reduce((sum, value) => sum + value, 0) / questionnaire.questions.length;
}

for (const entity of [...parties, ...governments]) migrateEntity(entity);

write(
  "data/questionnaire.js",
  `// Questions, axes et métadonnées du questionnaire.\nconst QUESTIONNAIRE_DATA = ${JSON.stringify(questionnaire, null, 2)};\n`
);
write("data/parties.js", `const PARTIES_DATA = ${JSON.stringify(parties, null, 2)};\n`);
write("data/governments.js", `const GOVERNMENTS_DATA = ${JSON.stringify(governments, null, 2)};\n`);

const filesWithQuestionKeys = [
  "data/index.js",
  "data/question-details.js",
  "scripts/generate-seo-pages.mjs",
  ...fs.readdirSync(path.join(projectRoot, "data"))
    .filter(name => name.endsWith("overrides.js")
      && name !== "residence-permit-overrides.js"
      && name !== "consolidated-overrides.js")
    .map(name => `data/${name}`)
];

if (migratesLegacyQuestionnaire) {
  for (const relativePath of [...new Set(filesWithQuestionKeys)]) {
    const shifted = read(relativePath).replace(
      /^(\s*)(["']?)(\d+)\2:/gm,
      (match, indentation, quote, rawId) => {
        const id = Number(rawId);
        return id > 21 ? `${indentation}${quote}${id + 1}${quote}:` : match;
      }
    );
    write(relativePath, shifted);
  }
}

console.log(`Migration ${migratesLegacyQuestionnaire ? "effectuée" : "rafraîchie"} : 88 questions fermées, 5 ouvertes et 21 profils recalculés.`);
