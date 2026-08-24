// Applique les formulations validées de Q8 et Q48 et restaure la formulation historique de Q69.
// Les scores, confiances, justifications et sources restent inchangés.
(() => {
  if (typeof DATA === 'undefined' || !Array.isArray(DATA.questions)) return;

  const q8 = DATA.questions.find(item => item.id === 8);
  if (q8) {
    q8.text = "La concurrence est généralement préférable à l'encadrement par des normes pour améliorer les prix, la qualité et l'innovation.";
  }

  const q48 = DATA.questions.find(item => item.id === 48);
  if (q48) {
    q48.text = "L'âge légal de départ à la retraite devrait être augmenté afin d'assurer plus facilement le financement du système de retraite.";
  }

  const q69 = DATA.questions.find(item => item.id === 69);
  if (q69) {
    q69.text = "Il serait acceptable de donner davantage de poids politique aux citoyens qui démontrent un niveau élevé de connaissance du fonctionnement des institutions et de l'économie.";
  }
})();
