import re

with open('style.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Fix .ach-tl-highlight .ach-tl-card
css = css.replace('background: #fffbeb;', 'background: rgba(22, 135, 255, 0.05);')

# Fix ach-card-highlight border
css = css.replace('border-color: #d97706 !important;', 'border-color: var(--purple) !important;')

# Replace orange tags/badges globally if any are left
css = re.sub(r'color:\s*#d97706\s*;', 'color: var(--purple);', css)

with open('style.css', 'w', encoding='utf-8') as f:
    f.write(css)
