import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Replace cform-row with form-row to use existing grid CSS that has gap: 12px
html = html.replace('class="cform-row"', 'class="form-row"')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
