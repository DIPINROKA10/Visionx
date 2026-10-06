import re

with open('style.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Make the achievements hero have a beautiful glow like the home page
css = css.replace(
    '.ach-page-hero {\n  background: transparent;\n  color: var(--text);\n',
    '.ach-page-hero {\n  background: radial-gradient(circle at top center, var(--purple-light) 0%, var(--bg) 70%);\n  color: var(--text);\n'
)

with open('style.css', 'w', encoding='utf-8') as f:
    f.write(css)
