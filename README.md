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

Les pages éditoriales indexables se trouvent dans `methodologie/`,
`partis-politiques/`, `quel-parti-politique-me-correspond/` et
`test-gauche-droite/`. Toute nouvelle page publique doit être reliée depuis une
page existante et ajoutée à `sitemap.xml`.

## Modifier une question

Les 87 questions fermées sont dans le tableau `questions` de
`data/questionnaire.js`. Chaque entrée contient :

- `id` : position ordinale continue de la question (`1–87`, puis `88–92` pour les questions ouvertes) ;
- `theme` : thème affiché dans le questionnaire ;
- `text` : formulation affichée ;
- `explanation` : exemple ou précision affiché sous la question, facultatif ;
- `defaultAnswer` : réponse utilisée uniquement pour la démonstration ;
- `note` : précision éditoriale facultative ;
- `coefficients` : contribution aux six axes.

Les questions ouvertes se trouvent dans `openQuestions`. Si une question est
ajoutée ou supprimée, renuméroter toutes les questions suivantes, mettre à jour
`meta.questionCount`, les clés d'override et les identifiants du mode rapide. La
sélection des 40 questions du mode rapide est définie par `QUICK_QUESTION_IDS` au
début de `scripts/app.js`.

## Audit éditorial

L'[audit du questionnaire et des codages](AUDIT_QUESTIONNAIRE_ET_CODAGES.md)
recense la couverture thématique, les coefficients à revoir, la qualité des
sources et les codages prioritaires à vérifier. Le
[journal du recalibrage du 7 août 2026](CHANGEMENTS_CODAGES_2026-08-07.md)
liste séparément chaque vote modifié et les analogues internationaux retenus.
Le [journal de la refonte thématique du 7 août 2026](CHANGEMENTS_QUESTIONS_2026-08-07.md)
détaille les questions retirées et ajoutées, ainsi que leur contribution aux axes.
Le [journal d'ajout des profils du 7 août 2026](AJOUT_PROFILS_2026-08-07.md)
documente UDR, La France Humaniste, les Pays-Bas et la Pologne.
L'[audit complet des 1 827 codages du 7 août 2026](AUDIT_COMPLET_CODAGES_2026-08-07.md)
liste les neuf notes corrigées sur preuve officielle ou déclaration directe, les
neuf recalibrages réexaminés de La France Humaniste, les 429 indices réévalués
lors de la passe exhaustive et les 42 relèvements documentaires ultérieurs de
ce profil. Il combine désormais le programme 2026 et le bilan public de
Dominique de Villepin.
Le [bilan final du 8 août 2026](AUDIT_FINAL_CODAGES_2026-08-08.md) documente la
dernière vérification juridique et programmatique, les huit corrections
supplémentaires et les scores recalculés des 21 entités.

Après toute modification des questions, coefficients, réponses ou niveaux de
confiance, lancer :

```sh
node scripts/validate-data.js
```

Le contrôle vérifie l'ordre des questions fermées et ouvertes, les longueurs des
tableaux, les masses d'axe, les 21 `axisScores` et les moyennes de confiance
pré-calculées.
