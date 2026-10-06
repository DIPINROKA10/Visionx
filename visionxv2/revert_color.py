import re

for file in ['index.html', 'achievements.html']:
    with open(file, 'r', encoding='utf-8') as f:
        html = f.read()

    # Revert nav logo
    html = html.replace('TECH<span class="purple">CRAFT</span>', 'TECHCRAFT')

    with open(file, 'w', encoding='utf-8') as f:
        f.write(html)
