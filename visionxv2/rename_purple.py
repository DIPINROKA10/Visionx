import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()
html = html.replace('class="purple"', 'class="accent"')
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

with open('achievements.html', 'r', encoding='utf-8') as f:
    html = f.read()
html = html.replace('class="purple"', 'class="accent"')
with open('achievements.html', 'w', encoding='utf-8') as f:
    f.write(html)

with open('style.css', 'r', encoding='utf-8') as f:
    css = f.read()
css = css.replace('.purple {', '.accent {')
css = css.replace('var(--purple)', 'var(--accent)')
css = css.replace('--purple:', '--accent:')
css = css.replace('--purple-light:', '--accent-light:')
css = css.replace('var(--purple-light)', 'var(--accent-light)')
with open('style.css', 'w', encoding='utf-8') as f:
    f.write(css)

with open('script.js', 'r', encoding='utf-8') as f:
    js = f.read()
js = js.replace('var(--purple)', 'var(--accent)')
with open('script.js', 'w', encoding='utf-8') as f:
    f.write(js)
