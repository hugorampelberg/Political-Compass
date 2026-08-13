// Restaure la formulation historique de Q75 et applique la formulation validée de Q50.
// Les scores, confiances, justifications et sources restent inchangés.
(() => {
  if (typeof DATA === 'undefined' || !Array.isArray(DATA.questions)) return;

  const q50 = DATA.questions.find(item => item.id === 50);
  if (q50) {
    q50.text = "L'âge légal de départ à la retraite devrait être augmenté afin d'assurer plus facilement le financement du système de retraite.";
  }

  const q75 = DATA.questions.find(item => item.id === 75);
  if (q75) {
    q75.text = "Il serait acceptable de donner davantage de poids politique aux citoyens qui démontrent un niveau élevé de connaissance du fonctionnement des institutions et de l'économie.";
  }
})();
