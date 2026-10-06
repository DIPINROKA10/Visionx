import re

for file in ['index.html', 'achievements.html']:
    with open(file, 'r', encoding='utf-8') as f:
        html = f.read()

    # Nav logo
    # <div class="nav-logo">
    #   <img class="nav-logo-img" src="logo.png" alt="TechCraft" />
    #   TECHCRAFT
    html = re.sub(r'(<img class="nav-logo-img" src="logo\.png" alt="TechCraft" />\s*)TECHCRAFT', r'\1TECH<span class="purple">CRAFT</span>', html)

    with open(file, 'w', encoding='utf-8') as f:
        f.write(html)
