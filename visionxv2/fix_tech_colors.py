import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Change simpleicons to use their native brand colors instead of white (F5F7FA)
html = html.replace('/F5F7FA', '')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
