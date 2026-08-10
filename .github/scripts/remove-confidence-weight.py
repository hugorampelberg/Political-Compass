from pathlib import Path
import json
import re

# 1) Similarity: documentary confidence must not change political similarity.
app_path = Path('scripts/app.js')
app = app_path.read_text(encoding='utf-8')
old = 'const c = Math.sqrt(entity.confidence[i] || 0);'
new = 'const c = 1;'
if old not in app and new not in app:
    raise SystemExit('Similarity confidence coefficient not found in scripts/app.js')
app = app.replace(old, new, 1)
app_path.write_text(app, encoding='utf-8')

# 2) Store party averageConfidence on the native 1-3 scale.
parties_path = Path('data/parties.js')
parties_text = parties_path.read_text(encoding='utf-8')
match = re.search(r'const\s+PARTIES_DATA\s*=\s*(\[.*\]);\s*$', parties_text, flags=re.S)
if not match:
    raise SystemExit('PARTIES_DATA array not found')
parties = json.loads(match.group(1))
averages = [sum(p['confidence']) / len(p['confidence']) for p in parties]
pattern = re.compile(r'("averageConfidence"\s*:\s*)(-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)')
index = 0

def replace_average(m):
    global index
    if index >= len(averages):
        raise SystemExit('Too many averageConfidence fields in data/parties.js')
    value = averages[index]
    index += 1
    return m.group(1) + repr(value)

parties_text = pattern.sub(replace_average, parties_text)
if index != len(averages):
    raise SystemExit(f'Updated {index} party averages, expected {len(averages)}')
parties_path.write_text(parties_text, encoding='utf-8')

# 3) Keep the audit/regeneration script consistent with the 1-3 storage scale.
audit_path = Path('scripts/audit-codings-2026-08-07.js')
audit = audit_path.read_text(encoding='utf-8')
old_audit = "entity.averageConfidence = entity.confidence.reduce((sum, value) => sum + value, 0)\n    / (entity.confidence.length * 3);"
new_audit = "entity.averageConfidence = entity.confidence.reduce((sum, value) => sum + value, 0)\n    / entity.confidence.length;"
if old_audit not in audit and new_audit not in audit:
    raise SystemExit('averageConfidence recompute formula not found in audit script')
audit = audit.replace(old_audit, new_audit, 1)
audit_path.write_text(audit, encoding='utf-8')

# 4) Keep validation consistent with raw average confidence storage.
validate_path = Path('scripts/validate-data.js')
validate = validate_path.read_text(encoding='utf-8')
old_validate = "const expectedConfidence = entity.confidence.reduce((sum, value) => sum + value, 0)\n    / (questionCount * 3);"
new_validate = "const expectedConfidence = entity.confidence.reduce((sum, value) => sum + value, 0)\n    / questionCount;"
if old_validate not in validate and new_validate not in validate:
    raise SystemExit('averageConfidence validation formula not found')
validate = validate.replace(old_validate, new_validate, 1)
validate_path.write_text(validate, encoding='utf-8')

# Triggered after workflow creation.
