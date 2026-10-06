import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

html = html.replace(
    '<span class="hero-cta-pill">Live Projects →</span>',
    '<span class="hero-cta-pill" onclick="document.getElementById(\'projects\').scrollIntoView({ behavior: \'smooth\' })" style="cursor: pointer;">Live Projects →</span>'
)
# Just in case the arrow character is encoded differently
html = html.replace(
    '<span class="hero-cta-pill">Live Projects &#8594;</span>',
    '<span class="hero-cta-pill" onclick="document.getElementById(\'projects\').scrollIntoView({ behavior: \'smooth\' })" style="cursor: pointer;">Live Projects &#8594;</span>'
)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
