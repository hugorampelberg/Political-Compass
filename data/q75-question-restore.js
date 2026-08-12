// Restaure uniquement la formulation historique de Q75.
// Les scores, confiances, justifications et sources de q75-overrides.js restent inchangés.
(() => {
  if (typeof DATA === 'undefined' || !Array.isArray(DATA.questions)) return;
  const question = DATA.questions.find(item => item.id === 75);
  if (!question) return;
  question.text = "Il serait acceptable de donner davantage de poids politique aux citoyens qui démontrent un niveau élevé de connaissance du fonctionnement des institutions et de l'économie.";
})();
