import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

html = html.replace('Ac 2026 TechCraft. All rights reserved.', '© 2026 TechCraft. All rights reserved.')
html = html.replace('Ac 2026 Team TechCraft', '© 2026 TechCraft')
html = html.replace('Ac 2026 Team Vision X', '© 2026 TechCraft')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
