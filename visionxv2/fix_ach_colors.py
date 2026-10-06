import re

with open('style.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Fix ach-page-hero
css = css.replace('background: linear-gradient(135deg, #5b21b6 0%, #7c3aed 50%, #a78bfa 100%);', 'background: transparent;')

# Fix ach-featured-bg
css = css.replace('background: linear-gradient(135deg, #fefce8 0%, #fffbeb 50%, #fef3c7 100%);', 'background: var(--card-bg);\n  border: 1px solid var(--border);')

# Fix ach-featured-label color
css = css.replace('color: #d97706;', 'color: var(--purple);')

# Fix ach-featured-desc color
css = css.replace('color: #6b6b80;', 'color: var(--muted);')

# Fix ach-hero-title-accent
css = css.replace('background: linear-gradient(to right, #c4b5fd, #fff);', 'background: linear-gradient(to right, var(--purple), var(--text));')

# Fix ach-featured-link
css = css.replace('color: #b45309;', 'color: var(--purple);')

# Fix ach-featured-badge.prince
css = css.replace('background: #ede9ff;\n  color: #7c3aed;', 'background: var(--border);\n  color: var(--purple);')

with open('style.css', 'w', encoding='utf-8') as f:
    f.write(css)
