# Compas politique français

Le site est une application statique déployée sur Vercel. Le fichier `index.html`
ne contient désormais que la structure de la page et charge les ressources
suivantes dans l'ordre :

- `styles/main.css` : tous les styles de l'interface ;
- `data/questionnaire.js` : axes, questions, questions ouvertes et métadonnées ;
- `data/parties.js` : réponses et justificatifs des partis français ;
- `data/governments.js` : réponses et justificatifs des gouvernements étrangers ;
- `data/index.js` : assemblage des données dans le format attendu par le moteur ;
- `scripts/app.js` : état, calculs, rendu, analyse Gemini et événements.

## Modifier une question

Les 80 questions fermées sont dans le tableau `questions` de
`data/questionnaire.js`. Chaque entrée contient :

- `id` : identifiant stable de la question ;
- `theme` : thème affiché dans le questionnaire ;
- `text` : formulation affichée ;
- `explanation` : exemple ou précision affiché sous la question, facultatif ;
- `defaultAnswer` : réponse utilisée uniquement pour la démonstration ;
- `note` : précision éditoriale facultative ;
- `coefficients` : contribution aux six axes.

Les questions ouvertes se trouvent dans `openQuestions`. Si le nombre total de
questions change, mettre également à jour `meta.questionCount`. La sélection des
40 questions du mode rapide est définie par `QUICK_QUESTION_IDS` au début de
`scripts/app.js`.

## Audit éditorial

L'[audit du questionnaire et des codages](AUDIT_QUESTIONNAIRE_ET_CODAGES.md)
recense la couverture thématique, les coefficients à revoir, la qualité des
sources et les codages prioritaires à vérifier. Il ne modifie pas les scores
existants.
