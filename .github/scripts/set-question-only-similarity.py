from pathlib import Path

app_path = Path('scripts/app.js')
app = app_path.read_text(encoding='utf-8')

replacements = {
    "const QUESTION_SIMILARITY_SHARE = 0.8;": "const QUESTION_SIMILARITY_SHARE = 1;",
    "const AXIS_COORDINATE_SIMILARITY_SHARE = 0.2;": "const AXIS_COORDINATE_SIMILARITY_SHARE = 0;",
    "similarity_formula:'Le score global combine 80 % de proximité question par question et 20 % de proximité fondée sur la distance euclidienne pondérée entre les coordonnées finales des six axes, avec une pénalité progressive lorsque les coordonnées sont de signes opposés.'": "similarity_formula:'Le score global repose à 100 % sur la proximité question par question. La proximité fondée sur les coordonnées finales reste calculée à titre diagnostique mais ne contribue pas au score global.'",
}
for old, new in replacements.items():
    if old not in app and new not in app:
        raise SystemExit(f'Expected app.js text not found: {old}')
    app = app.replace(old, new)
app_path.write_text(app, encoding='utf-8')

lib_path = Path('lib/gemini.js')
lib = lib_path.read_text(encoding='utf-8')

lib_replacements = {
    "top_party_drivers contient, pour les trois partis les mieux classés, le score global, sa composante question par question, sa composante fondée sur les coordonnées finales, les positions réelles sur les six axes, les similitudes par axe et les principaux accords et désaccords concrets.": "top_party_drivers contient, pour les trois partis les mieux classés, le score global fondé à 100 % sur la proximité question par question, un indicateur diagnostique de proximité des coordonnées finales, les positions réelles sur les six axes, les similitudes par axe et les principaux accords et désaccords concrets.",
    "Le score global combine 80 % de proximité question par question et 20 % de proximité fondée sur la distance entre les coordonnées finales des axes.": "Le score global repose à 100 % sur la proximité question par question. axis_coordinate_similarity reste un indicateur diagnostique et ne contribue pas au classement.",
    "Elles contiennent, pour les gouvernements comparés, le score global, sa composante question par question, sa composante fondée sur les coordonnées finales, les positions réelles sur les six axes, les similitudes par axe et les principaux accords et désaccords concrets.": "Elles contiennent, pour les gouvernements comparés, le score global fondé à 100 % sur la proximité question par question, un indicateur diagnostique de proximité des coordonnées finales, les positions réelles sur les six axes, les similitudes par axe et les principaux accords et désaccords concrets.",
    "Le score global combine 80 % de proximité question par question et 20 % de proximité entre les coordonnées finales des axes. Utilise cette décomposition pour expliquer le classement sans présenter le pourcentage comme un taux d’adhésion.": "Le score global repose à 100 % sur la proximité question par question. La proximité entre les coordonnées finales des axes est uniquement diagnostique : elle peut éclairer le profil, mais ne doit pas servir à expliquer le classement comme une composante du score. Ne présente jamais le pourcentage comme un taux d’adhésion.",
}
for old, new in lib_replacements.items():
    if old not in lib and new not in lib:
        raise SystemExit(f'Expected lib/gemini.js text not found: {old}')
    lib = lib.replace(old, new)
lib_path.write_text(lib, encoding='utf-8')
