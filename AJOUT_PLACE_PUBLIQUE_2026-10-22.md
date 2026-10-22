# Place publique — ajout du 22 octobre 2026

Le test contient désormais 14 partis français et 8 gouvernements. Le profil
`place-publique` est construit indépendamment du PS, sur les 88 questions finales.
Les publications de Place publique, sa charte, son projet Acte I et les votes
nominatifs de ses élus constituent les sources liées dans chaque réponse.

## Codage

- Le signe indique l'accord ou le désaccord et la valeur absolue son intensité :
  1 modérée, 2 nette, 3 très forte. Ce n'est pas une note de qualité du programme.
- La confiance documentaire est séparée : les positions explicites et les
  interprétations sont identifiées dans les justifications.
- 77 questions sont codées. Les 11 autres (Q22, Q43, Q44, Q47, Q56, Q59,
  Q62, Q65, Q75, Q78 et Q85) restent explicitement non documentées.
- Pour conserver le format numérique des données, ces dernières stockent un
  marqueur 0 avec `positionStatus: undocumented`. Il ne s'agit pas d'une réponse
  neutre : ces lignes sont exclues des similitudes, des coordonnées et des
  principaux accords/désaccords. L'interface affiche un tiret et la couverture
  documentaire, en mode rapide comme en mode complet.
- Un vrai zéro documenté, comme Q14, reste pris en compte normalement.

La lecture des sources porte sur la formulation entière : Q64 s'oppose au
sacrifice des renouvelables, sans attribuer au parti une opposition au nucléaire.
Q69 illustre un désaccord très fort avec une confiance moyenne : l'intensité
politique ne dépend pas mécaniquement du niveau de confiance.

## Intégration

`scripts/data-files.mjs` fixe l'ordre partagé par le navigateur, le générateur
des fiches et la validation. L'accueil omettait plusieurs corrections finales
déjà présentes dans les fiches ; il charge maintenant la même pile, notamment
la correction de Nouvelle Énergie à Q48 (+1).

Les réponses, confiances, justifications, sources et coordonnées des 21 profils
préexistants ont été comparées à leurs fiches finales : aucune modification.
L'ajout ne constitue pas une nouvelle réévaluation politique de ces profils.

Les pages de navigation, la fiche statique, le sitemap et les mentions du nombre
de partis sont synchronisés. La date de la nouvelle synthèse n'altère pas les
dates de vérification des synthèses précédentes.

## Vérification

`npm run build` régénère les pages et exécute la validation des données, du SEO
et du calcul de proximité. Les contrôles vérifient notamment les deux modes du
test, l'invariance des similitudes aux réponses non documentées, le maintien
des vrais zéros, les résultats finis dans l'intervalle 0–100 et les 88 lignes
des fiches. La méthodologie décrit le comportement effectif : la confiance est
affichée séparément et ne pondère pas le pourcentage global.
