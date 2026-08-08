# Refonte thématique du questionnaire — 7 août 2026

## Résumé

Le questionnaire complet passe de 80 à 87 questions fermées. Six questions ont
été retirées et treize questions ont été ajoutées. La version rapide reste à
40 questions : les anciennes questions 11 et 70 y sont remplacées par les
questions 81 (accès territorial aux soins) et 87 (soutien à l'Ukraine).

Les identifiants 11, 31, 52, 62, 65 et 70 ne sont pas réutilisés. Les nouvelles
questions portent les identifiants 81 à 93. Les questions ouvertes ont été
déplacées en fin de séquence et portent désormais les identifiants 94 à 98.

## Questions retirées

| ID | Sujet retiré | Motif éditorial |
|---:|---|---|
| 11 | Dette finançant un investissement public rentable | Faible pouvoir discriminant et coefficient économique ambigu |
| 31 | Sanctions pénales plus sévères | Redondance dans un bloc sécurité déjà dense |
| 52 | Diminution des allocations chômage avec le temps | Redondance économique et sociale |
| 62 | Pouvoirs de fouille de la police | Redondance dans le bloc sécurité |
| 65 | Usage de la reconnaissance faciale | Redondance dans le bloc surveillance |
| 70 | Interdiction des manifestations écologistes non autorisées | Mélange sécurité, libertés publiques et écologie |

## Contribution des nouvelles questions aux axes

Un coefficient positif déplace vers le pôle positif indiqué dans
`data/questionnaire.js`; un coefficient négatif déplace vers le pôle négatif.
Une case vide vaut zéro.

| ID | Sujet synthétique | Économie | Autorité | Europe | Écologie | Immigration | Démocratie |
|---:|---|---:|---:|---:|---:|---:|---:|
| 81 | Conventionnement des médecins selon le territoire | -0,7 |  |  |  |  |  |
| 82 | Assurance maladie à 100 % | -1,0 |  |  |  |  |  |
| 83 | Regroupement de maternités et urgences | +0,2 |  |  |  |  | -0,5 |
| 84 | Recrutement et évaluation par les chefs d'établissement | +0,5 | +0,4 |  |  |  |  |
| 85 | Financement du privé conditionné à la mixité | -0,5 |  |  |  |  |  |
| 86 | Interdiction locale des locations touristiques régulières | -0,6 |  |  |  |  | +0,3 |
| 87 | Soutien durable à l'Ukraine |  | +0,2 | +0,9 |  |  |  |
| 88 | Dissuasion française étendue aux partenaires européens |  | +0,2 | +1,0 |  |  |  |
| 89 | Aide médicale à mourir |  | -0,8 |  |  |  |  |
| 90 | Fin des EHPAD privés lucratifs | -0,9 |  |  |  |  |  |
| 91 | Allocations familiales sans modulation par le revenu | -0,5 |  |  |  |  |  |
| 92 | Réseaux sociaux interdits avant 15 ans |  | +0,9 |  |  |  |  |
| 93 | IA publique hébergée en Europe | -0,2 |  | +0,7 |  |  |  |

### Justification des doubles contributions

- La question 83 reçoit un faible coefficient économique favorable à la
  rationalisation et un coefficient institutionnel plus important en faveur de
  la décision centralisée plutôt que de la proximité territoriale.
- La question 84 mesure à la fois une organisation plus managériale du service
  public et un pouvoir hiérarchique accru dans l'établissement.
- La question 86 mesure une intervention sur l'usage d'un bien privé et le choix
  de confier explicitement ce pouvoir à la commune.
- Les questions 87 et 88 renforcent principalement l'axe européen ; le faible
  coefficient d'autorité traduit leur dimension militaire sans en faire des
  questions de sécurité intérieure.
- La question 93 mesure d'abord la souveraineté numérique européenne ; son faible
  coefficient économique traduit l'acceptation d'un coût public supplémentaire.

## Masses d'axe avant et après

| Axe | Avant | Après suppressions | Ajouts | Masse finale |
|---|---:|---:|---:|---:|
| Économie | 17,4 | 16,9 | +5,1 | 22,0 |
| Libertés / autorité | 23,1 | 19,9 | +2,5 | 22,4 |
| Europe | 4,6 | 4,6 | +2,6 | 7,2 |
| Écologie | 8,8 | 8,1 | 0 | 8,1 |
| Immigration / intégration | 10,9 | 10,9 | 0 | 10,9 |
| Démocratie / institutions | 5,5 | 5,5 | +0,8 | 6,3 |

La refonte réduit donc la surreprésentation de l'autorité et augmente nettement
la capacité de l'axe européen à distinguer les profils. Les axes sont toujours
normalisés séparément sur une échelle de -10 à +10. Pour la similitude globale,
le poids de chaque axe combine désormais 70 % de poids commun et 30 % de sa
masse structurelle relative : la couverture continue donc à compter, avec des
écarts fortement resserrés par rapport à une pondération directement
proportionnelle aux masses.

## Codages ajoutés

Échelle : `-3` désaccord fort, `0` position neutre ou partagée, `+3` accord fort.
Les niveaux de confiance, justifications et URL correspondantes figurent à la
même position dans les quatre tableaux de chaque profil.

| Profil | 81 | 82 | 83 | 84 | 85 | 86 | 87 | 88 | 89 | 90 | 91 | 92 | 93 |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| LFI | +3 | +3 | -3 | -3 | +3 | +2 | -3 | -3 | +3 | +3 | +2 | -3 | +1 |
| PCF | +3 | +3 | -3 | -3 | +3 | +2 | -3 | -3 | +2 | +3 | +3 | 0 | +2 |
| Les Écologistes | +3 | +2 | -2 | -2 | +3 | +3 | +3 | -2 | +3 | +3 | 0 | +1 | +3 |
| PS | +3 | +1 | -2 | -2 | +3 | +2 | +3 | +3 | +3 | +2 | -2 | +1 | +3 |
| Renaissance | -2 | -2 | +2 | +2 | +1 | +1 | +3 | +3 | +2 | -1 | -2 | +3 | +3 |
| MoDem | +2 | -1 | +1 | +1 | +2 | +1 | +3 | +3 | +1 | 0 | +2 | +3 | +3 |
| Horizons | +1 | -2 | +2 | +2 | 0 | 0 | +3 | +3 | 0 | -2 | +1 | +3 | +2 |
| LR | 0 | -3 | -1 | +2 | -2 | -1 | +3 | +1 | -2 | -2 | +3 | +3 | +2 |
| Nouvelle Énergie | -3 | -3 | +2 | +3 | -3 | -2 | +3 | +1 | -1 | -3 | +3 | +1 | +1 |
| RN | -3 | -1 | -3 | +1 | -2 | +1 | 0 | -3 | -3 | +1 | +3 | 0 | -1 |
| Reconquête | -3 | -3 | -1 | +2 | -3 | -2 | -1 | -3 | -3 | -3 | +3 | 0 | -2 |
| Allemagne | +3 | -3 | +2 | +2 | 0 | +2 | +3 | +2 | +2 | -3 | +3 | -2 | +3 |
| Espagne | +2 | +1 | -2 | -2 | +3 | +3 | +3 | -2 | +3 | +1 | -2 | +3 | +3 |
| Suisse | +2 | -3 | +1 | +2 | -2 | +1 | -3 | -3 | +3 | -3 | +2 | -1 | -2 |
| Finlande | +1 | -1 | +2 | +3 | +2 | +1 | +3 | +2 | -2 | -2 | +3 | +1 | +3 |
| Royaume-Uni | +2 | +3 | +1 | +3 | 0 | +2 | +3 | +2 | 0 | -2 | -1 | +3 | -3 |
| Danemark | +2 | +3 | +3 | +2 | +1 | +2 | +3 | +1 | 0 | -1 | -1 | +1 | +3 |

## Scores d'axe recalculés

Valeurs arrondies ici à deux décimales ; les fichiers de données conservent la
précision complète utilisée par l'application.

| Profil | Économie | Autorité | Europe | Écologie | Immigration | Démocratie |
|---|---:|---:|---:|---:|---:|---:|
| LFI | -9,21 | -4,97 | -4,81 | +9,38 | +7,77 | +6,77 |
| PCF | -9,76 | -3,62 | -4,49 | +8,07 | +6,70 | +6,67 |
| Les Écologistes | -8,70 | -4,52 | +7,31 | +9,42 | +7,86 | +6,14 |
| PS | -6,20 | -3,14 | +9,63 | +7,37 | +6,27 | +4,92 |
| Renaissance | +3,17 | +1,34 | +10,00 | +1,69 | -0,34 | -2,86 |
| MoDem | -0,33 | +0,36 | +10,00 | +4,90 | +1,65 | +0,16 |
| Horizons | +4,55 | +2,25 | +7,92 | +0,74 | -2,84 | -3,02 |
| LR | +6,17 | +3,45 | +1,90 | -3,74 | -5,87 | -2,96 |
| Nouvelle Énergie | +7,33 | +2,07 | +1,11 | -2,22 | -6,27 | -3,39 |
| RN | +0,39 | +2,83 | -5,69 | -6,54 | -8,75 | +3,86 |
| Reconquête | +7,98 | +3,01 | -6,44 | -6,42 | -9,39 | +1,06 |
| Allemagne | +2,41 | -0,27 | +7,78 | +0,62 | -2,78 | +1,16 |
| Espagne | -5,03 | -2,05 | +7,69 | +4,86 | +4,62 | +3,70 |
| Suisse | +3,97 | -1,65 | -6,06 | +0,70 | -2,42 | +5,98 |
| Finlande | +4,62 | +1,50 | +7,31 | -1,81 | -5,54 | -0,05 |
| Royaume-Uni | -1,85 | +0,74 | +0,37 | +4,98 | -0,46 | 0,00 |
| Danemark | -0,33 | +0,54 | +7,50 | +6,21 | -2,75 | +0,79 |

## Méthode et traçabilité

Pour chaque axe, le score est recalculé avec la formule déjà utilisée par le
site :

`10 × somme(réponse × coefficient) / (3 × somme(|coefficient|))`.

Les six lignes supprimées ont été retirées des réponses, niveaux de confiance,
justifications et sources des 17 profils alors présents. Les treize nouveaux codages
ont ensuite été ajoutés dans le même ordre, puis les `axisScores`, les masses et
les confiances moyennes ont été recalculés.

Quatre profils ajoutés ensuite — UDR, La France Humaniste, les Pays-Bas et la
Pologne — ont été codés directement sur la version à 87 questions. Ils sont
documentés dans [le journal d'ajout des profils](AJOUT_PROFILS_2026-08-07.md).

Les codages les plus directs s'appuient sur les scrutins de l'Assemblée nationale
relatifs au conventionnement des médecins, au soutien à l'Ukraine, à l'aide à
mourir et à l'accès des mineurs aux réseaux sociaux. Pour les pays, une politique
nationale analogue est utilisée lorsque la proposition est propre au contexte
français. Les inférences sans équivalent exact sont signalées par une confiance
de 1 ou 2 plutôt que 3.
