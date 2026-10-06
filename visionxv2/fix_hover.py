import re

with open('style.css', 'r', encoding='utf-8') as f:
    css = f.read()

css = css.replace(
    '.back-link:hover {\n  color: rgba(255, 255, 255, 0.8);\n}',
    '.back-link:hover {\n  color: var(--purple);\n}'
)

with open('style.css', 'w', encoding='utf-8') as f:
    f.write(css)
