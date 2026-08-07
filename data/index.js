// Assemble les fichiers de données sans modifier le format attendu par l'application.
const DATA = {
  ...QUESTIONNAIRE_DATA,
  entities: [...PARTIES_DATA, ...GOVERNMENTS_DATA],
};
