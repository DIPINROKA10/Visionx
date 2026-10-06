import re

with open('style.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Replace hardcoded rgba(255, 255, 255, X) with proper variables for the achievements hero section
replacements = {
    'color: rgba(255, 255, 255, 0.4);': 'color: var(--muted);',
    'color: rgba(255, 255, 255, 0.5);': 'color: var(--muted);',
    'color: rgba(255, 255, 255, 0.55);': 'color: var(--muted);',
    'background: rgba(255, 255, 255, 0.08);': 'background: var(--card-bg);',
    'border: 1px solid rgba(255, 255, 255, 0.12);': 'border: 1px solid var(--border);',
    'background: rgba(255, 255, 255, 0.15);': 'background: var(--border);',
    'background: rgba(255, 255, 255, 0.06);': 'background: var(--card-bg);',
    'border: 1px solid rgba(255, 255, 255, 0.08);': 'border: 1px solid var(--border);',
    'background: rgba(255, 255, 255, 0.1);': 'background: var(--border);',
    'border: 2px solid rgba(255, 255, 255, 0.15);': 'border: 2px solid var(--border);',
    'box-shadow: 0 0 30px rgba(255, 255, 255, 0.06);': 'box-shadow: none;'
}

for old, new in replacements.items():
    css = css.replace(old, new)

# Fix the grid background
css = css.replace('linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px)', 'linear-gradient(var(--border) 1px, transparent 1px)')

with open('style.css', 'w', encoding='utf-8') as f:
    f.write(css)
