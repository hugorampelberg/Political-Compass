from pathlib import Path

path = Path('scripts/app.js')
text = path.read_text(encoding='utf-8')
old = 'const STRUCTURAL_WEIGHT_SHARE = 0.3;'
new = 'const STRUCTURAL_WEIGHT_SHARE = 0.4;'
if old not in text and new not in text:
    raise SystemExit('STRUCTURAL_WEIGHT_SHARE declaration not found')
text = text.replace(old, new, 1)
path.write_text(text, encoding='utf-8')
