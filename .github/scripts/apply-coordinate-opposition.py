from pathlib import Path

path = Path('scripts/app.js')
text = path.read_text(encoding='utf-8')

marker = 'function entityResult(entity, userScores, weights){'
helper = '''function politicalCoordinateDistance(user, party) {\n  const raw = Math.abs(user - party) / 20;\n  const opposite =\n    user !== 0 &&\n    party !== 0 &&\n    Math.sign(user) !== Math.sign(party);\n\n  if (!opposite) return raw;\n\n  const oppositionStrength =\n    Math.min(Math.abs(user), Math.abs(party)) / 10;\n\n  return Math.min(\n    1,\n    raw +\n      0.75 *\n      oppositionStrength *\n      (1 - raw)\n  );\n}\n\n'''

if 'function politicalCoordinateDistance(user, party)' not in text:
    if marker not in text:
        raise SystemExit('entityResult marker not found')
    text = text.replace(marker, helper + marker, 1)

old_net = "const netByAxis={}; DATA.axes.forEach(a=>netByAxis[a.key]=clamp(100*(1-Math.abs(userScores[a.key]-axisScores[a.key])/20),0,100));"
new_net = "const netByAxis={}; DATA.axes.forEach(a=>netByAxis[a.key]=clamp(100*(1-politicalCoordinateDistance(userScores[a.key],axisScores[a.key])),0,100));"
if old_net in text:
    text = text.replace(old_net, new_net, 1)
elif new_net not in text:
    raise SystemExit('netByAxis expression not found')

old_distance = '''const coordinateDistance=Math.sqrt(\n    DATA.axes.reduce((sum,a)=>{\n      const normalizedDelta=(userScores[a.key]-axisScores[a.key])/20;\n      return sum+weights[a.key]*normalizedDelta*normalizedDelta;\n    },0)/weightSum\n  );'''
new_distance = '''const coordinateDistance=Math.sqrt(\n    DATA.axes.reduce((sum,a)=>{\n      const penalizedDelta=politicalCoordinateDistance(userScores[a.key],axisScores[a.key]);\n      return sum+weights[a.key]*penalizedDelta*penalizedDelta;\n    },0)/weightSum\n  );'''
if old_distance in text:
    text = text.replace(old_distance, new_distance, 1)
elif new_distance not in text:
    raise SystemExit('coordinate distance block not found')

old_formula = "similarity_formula:'Le score global combine 80 % de proximité question par question et 20 % de proximité fondée sur la distance euclidienne pondérée entre les coordonnées finales des six axes.'"
new_formula = "similarity_formula:'Le score global combine 80 % de proximité question par question et 20 % de proximité fondée sur la distance euclidienne pondérée entre les coordonnées finales des six axes, avec une pénalité progressive lorsque les coordonnées sont de signes opposés.'"
if old_formula in text:
    text = text.replace(old_formula, new_formula, 1)

path.write_text(text, encoding='utf-8')
