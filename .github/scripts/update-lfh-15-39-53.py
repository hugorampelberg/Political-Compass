from pathlib import Path
import json, re

q_path=Path('data/questionnaire.js')
p_path=Path('data/parties.js')
qt=q_path.read_text(encoding='utf-8')
pt=p_path.read_text(encoding='utf-8')
qm=re.search(r'const\s+QUESTIONNAIRE_DATA\s*=\s*(\{.*\});\s*$',qt,re.S)
pm=re.search(r'const\s+PARTIES_DATA\s*=\s*(\[.*\]);\s*$',pt,re.S)
if not qm or not pm: raise SystemExit('parse failure')
q=json.loads(qm.group(1)); parties=json.loads(pm.group(1))
idx={x['id']:i for i,x in enumerate(q['questions'])}
lfh=next(p for p in parties if p['id']=='france-humaniste')
changes={
15:(1,"Accord modéré : Dominique de Villepin admet qu'en cas de blocage budgétaire persistant, des mécanismes constitutionnels exceptionnels peuvent permettre l'adoption du budget sans vote ordinaire, mais il les présente comme un dernier recours et non comme un mode normal de gouvernement."),
39:(0,"Position équilibrée : La France Humaniste refuse à la fois le fédéralisme uniforme et le souverainisme de repli ; elle cherche à articuler souveraineté nationale et capacité d'action européenne, sans accepter clairement l'arbitrage formulé par la question."),
53:(1,"Accord modéré : La France Humaniste défend la conditionnalité des aides publiques et un État stratège, mais aucune proposition suffisamment précise n'établit une limitation systématique des dividendes et rémunérations jusqu'au remboursement de l'aide."),
}
expected={15:2,39:1,53:2}
for qid,(val,just) in changes.items():
    i=idx[qid]
    if lfh['responses'][i]!=expected[qid]: raise SystemExit(f'Q{qid} current={lfh["responses"][i]} expected={expected[qid]}')
    lfh['responses'][i]=val
    lfh['justifications'][i]=just
axes=[a['key'] for a in q['axes']]
for axis in axes:
    num=0; mass=0
    for i,qq in enumerate(q['questions']):
        c=qq['coefficients'].get(axis,0) or 0
        num += lfh['responses'][i]*c; mass += abs(c)
    lfh['axisScores'][axis]=10*num/(3*mass) if mass else 0
prefix=pt[:pm.start(1)]; suffix=pt[pm.end(1):]
p_path.write_text(prefix+json.dumps(parties,ensure_ascii=False,indent=2)+suffix,encoding='utf-8')
print('updated', {k:changes[k][0] for k in changes})
print('axisScores', lfh['axisScores'])
