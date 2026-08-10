from pathlib import Path
import copy
import json
import re

# Triggered once to apply only the LFH questions explicitly approved on 2026-08-10.
q_path = Path('data/questionnaire.js')
p_path = Path('data/parties.js')

q_text = q_path.read_text(encoding='utf-8')
p_text = p_path.read_text(encoding='utf-8')

q_match = re.search(r'const\s+QUESTIONNAIRE_DATA\s*=\s*(\{.*\});\s*$', q_text, flags=re.S)
p_match = re.search(r'const\s+PARTIES_DATA\s*=\s*(\[.*\]);\s*$', p_text, flags=re.S)
if not q_match or not p_match:
    raise SystemExit('Unable to parse questionnaire.js or parties.js')

questionnaire = json.loads(q_match.group(1))
parties = json.loads(p_match.group(1))
q_index = {q['id']: i for i, q in enumerate(questionnaire['questions'])}
lfh = next((p for p in parties if p.get('id') == 'france-humaniste'), None)
if lfh is None:
    raise SystemExit('La France Humaniste not found')

before = copy.deepcopy(parties)

changes = {
    33: (1, "Accord modéré : La France Humaniste défend un prix du carbone et une fiscalité écologique, mais insiste sur leur justice sociale et leur redistribution ; aucune position ne justifie d'accepter sans réserve une forte hausse du prix des énergies fossiles."),
    68: (1, "Accord modéré : La France Humaniste veut accélérer l'électrification des transports et la sortie des énergies fossiles, mais ne défend pas explicitement l'interdiction des voitures thermiques dans les termes stricts de la question."),
    69: (0, "Position équilibrée : La France Humaniste défend le nucléaire comme composante importante du mix électrique tout en soutenant aussi les renouvelables ; aucune priorité générale au nucléaire au prix d'une réduction des investissements renouvelables n'est établie."),
    72: (-1, "Désaccord modéré : Dominique de Villepin refuse un gouvernement technocratique soustrait à la responsabilité politique, tout en accordant une place importante à l'expertise et aux institutions compétentes ; le désaccord n'est donc pas absolu."),
    73: (1, "Accord modéré : la conception gaulliste défendue par Dominique de Villepin suppose qu'un exécutif puisse prendre et assumer une décision jugée nécessaire même lorsqu'elle est impopulaire, tout en restant responsable devant les institutions."),
    74: (1, "Accord modéré : La France Humaniste souhaite recourir davantage au référendum dans certaines circonstances, mais Dominique de Villepin le présente comme l'aboutissement d'un processus démocratique plutôt que comme un outil à utiliser systématiquement."),
    76: (-1, "Désaccord modéré : Dominique de Villepin refuse un président gouvernant seul contre le Parlement, mais reste attaché à une présidence forte d'arbitrage, d'impulsion et de dernier recours ; le désaccord avec un renforcement présidentiel reste donc limité."),
    80: (1, "Accord modéré : La France Humaniste veut réduire fortement l'usage des pesticides, mais demande aussi des clauses miroirs et des protections contre la concurrence étrangère moins-disante ; l'interdiction malgré un désavantage concurrentiel n'est donc pas soutenue sans réserve."),
    81: (0, "Position non tranchée : La France Humaniste veut lutter contre les déserts médicaux et augmenter l'offre de soins, mais aucune position suffisamment précise n'établit un soutien ou un rejet du conventionnement sélectif dans les zones déjà bien dotées."),
    83: (0, "Position non tranchée : La France Humaniste défend à la fois l'accès territorial aux soins et une réorganisation plus efficace des établissements ; aucune position suffisamment précise ne permet de conclure à un soutien aux fermetures ou regroupements de petites maternités et urgences."),
    91: (2, "Accord net : Dominique de Villepin défend le caractère universel de la politique familiale et critique la modulation des allocations familiales selon le revenu ; cela correspond clairement au principe d'allocations versées à toutes les familles, sans aller jusqu'à en faire un marqueur absolu."),
}

expected_old = {33: 2, 68: 2, 69: 1, 72: -2, 73: -1, 74: 2, 76: -2, 80: 2, 81: -1, 83: 1, 91: 1}

for qid, (new_response, new_justification) in changes.items():
    i = q_index[qid]
    if lfh['responses'][i] != expected_old[qid]:
        raise SystemExit(f'Unexpected current LFH response for Q{qid}: {lfh["responses"][i]} instead of {expected_old[qid]}')
    lfh['responses'][i] = new_response
    lfh['justifications'][i] = new_justification

axes = [a['key'] for a in questionnaire['axes']]
new_axis_scores = {}
for axis in axes:
    numerator = 0.0
    mass = 0.0
    for i, q in enumerate(questionnaire['questions']):
        coeff = q['coefficients'].get(axis, 0) or 0
        numerator += lfh['responses'][i] * coeff
        mass += abs(coeff)
    new_axis_scores[axis] = 10 * numerator / (3 * mass) if mass else 0
lfh['axisScores'] = new_axis_scores

# Strict scope validation: only LFH responses/justifications at approved questions and LFH axisScores may differ.
for old_party, new_party in zip(before, parties):
    if old_party['id'] != new_party['id']:
        raise SystemExit('Party ordering changed')
    if new_party['id'] != 'france-humaniste':
        if old_party != new_party:
            raise SystemExit(f'Unexpected change outside LFH: {new_party["id"]}')
        continue
    for key in new_party:
        if key in ('responses', 'justifications', 'axisScores'):
            continue
        if old_party[key] != new_party[key]:
            raise SystemExit(f'Unexpected LFH field change: {key}')
    approved_indexes = {q_index[qid] for qid in changes}
    for i, (old, new) in enumerate(zip(old_party['responses'], new_party['responses'])):
        if i not in approved_indexes and old != new:
            raise SystemExit(f'Unexpected LFH response change at index {i}')
    for i, (old, new) in enumerate(zip(old_party['justifications'], new_party['justifications'])):
        if i not in approved_indexes and old != new:
            raise SystemExit(f'Unexpected LFH justification change at index {i}')

prefix = p_text[:p_match.start(1)]
suffix = p_text[p_match.end(1):]
p_path.write_text(prefix + json.dumps(parties, ensure_ascii=False, indent=2) + suffix, encoding='utf-8')

print('Updated LFH:', ', '.join(f'Q{qid}={changes[qid][0]:+d}' for qid in changes))
print('New axisScores:', json.dumps(new_axis_scores, ensure_ascii=False))
