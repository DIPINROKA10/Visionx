import re

with open('style.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Make hero-cta-card span 2 columns
pattern = r'(\.hero-cta-card\s*\{[^\}]*)'
replacement = r'\1\n  grid-column: span 2;'

# Ensure we don't add it multiple times
if 'grid-column: span 2;' not in css.split('.hero-cta-card')[1].split('}')[0]:
    css = re.sub(pattern, replacement, css, count=1)

with open('style.css', 'w', encoding='utf-8') as f:
    f.write(css)
