import re

with open('style.css', 'r', encoding='utf-8') as f:
    css = f.read()

css = css.replace('object-position: 10% center;', '')

with open('style.css', 'w', encoding='utf-8') as f:
    f.write(css)
