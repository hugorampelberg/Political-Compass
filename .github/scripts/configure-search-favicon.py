from pathlib import Path
import json
from PIL import Image

root = Path('.')
logo_path = root / 'logo.png'
favicon_path = root / 'favicon.png'
apple_path = root / 'apple-touch-icon.png'
index_path = root / 'index.html'
vercel_path = root / 'vercel.json'

# Validate the user's new source logo.
with Image.open(logo_path) as img:
    w, h = img.size
    if w != h:
        raise SystemExit(f'logo.png must be square, got {w}x{h}')
    if w <= 48:
        raise SystemExit(f'logo.png should be larger than 48x48, got {w}x{h}')
    rgba = img.convert('RGBA')
    rgba.save(favicon_path, 'PNG', optimize=True)
    rgba.resize((180, 180), Image.Resampling.LANCZOS).save(apple_path, 'PNG', optimize=True)

# Update the favicon declarations in the home page.
index = index_path.read_text(encoding='utf-8')
old = '''  <link\n  rel="icon"\n  type="image/png"\n  sizes="512x512"\n  href="/logo.png"\n  >\n  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />'''
new = f'''  <link rel="icon" type="image/png" sizes="{w}x{h}" href="/favicon.png" />\n  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />'''
if old not in index:
    raise SystemExit('Expected favicon block not found in index.html')
index = index.replace(old, new, 1)
index_path.write_text(index, encoding='utf-8')

# Canonicalize the apex domain to the www hostname already used by canonical,
# sitemap and WebSite structured data.
config = json.loads(vercel_path.read_text(encoding='utf-8'))
redirects = config.setdefault('redirects', [])
canonical_redirect = {
    'source': '/:path*',
    'has': [
        {
            'type': 'header',
            'key': 'host',
            'value': 'frenchpoliticalcompass.com'
        }
    ],
    'destination': 'https://www.frenchpoliticalcompass.com/:path*',
    'permanent': True
}
# Avoid duplicates if the script is ever re-run.
redirects = [r for r in redirects if not (
    r.get('destination') == canonical_redirect['destination'] or
    (r.get('has') and any(h.get('key','').lower() == 'host' and h.get('value') == 'frenchpoliticalcompass.com' for h in r.get('has', [])))
)]
redirects.insert(0, canonical_redirect)
config['redirects'] = redirects
vercel_path.write_text(json.dumps(config, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')

print(f'Validated logo.png: {w}x{h}')
print('Created favicon.png and apple-touch-icon.png')
print('Updated index.html favicon declarations')
print('Added permanent apex -> www redirect')

# Triggered intentionally after the workflow definition exists.
