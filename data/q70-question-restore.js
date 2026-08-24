// Applique les formulations validées de Q8 et Q49 et restaure la formulation historique de Q70.
// Les scores, confiances, justifications et sources restent inchangés.
(() => {
  if (typeof DATA === 'undefined' || !Array.isArray(DATA.questions)) return;

  const q8 = DATA.questions.find(item => item.id === 8);
  if (q8) {
    q8.text = "La concurrence est généralement préférable à l'encadrement par des normes pour améliorer les prix, la qualité et l'innovation.";
  }

  const q49 = DATA.questions.find(item => item.id === 49);
  if (q49) {
    q49.text = "L'âge légal de départ à la retraite devrait être augmenté afin d'assurer plus facilement le financement du système de retraite.";
  }

  const q70 = DATA.questions.find(item => item.id === 70);
  if (q70) {
    q70.text = "Il serait acceptable de donner davantage de poids politique aux citoyens qui démontrent un niveau élevé de connaissance du fonctionnement des institutions et de l'économie.";
  }
})();
