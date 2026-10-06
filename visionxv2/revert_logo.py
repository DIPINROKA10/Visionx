import re

# Revert HTML
for file in ['index.html', 'achievements.html']:
    with open(file, 'r', encoding='utf-8') as f:
        html = f.read()

    # Nav
    html = re.sub(r'<img class="nav-logo-img" src="logo\.png" alt="TechCraft" />', r'<img class="nav-logo-img" src="logo.png" alt="TechCraft" />\n        TECHCRAFT', html)
    
    # Footer
    html = re.sub(r'<div class="footer-logo"><img src="logo\.png" style="height: 36px; width: auto; max-width: 100%; object-fit: contain;" alt="TechCraft" /></div>', '<div class="footer-logo">TECH<span class="purple">CRAFT</span></div>', html)
    
    # Background text
    html = re.sub(r'<div class="bg-text-inner" style="opacity: 0\.02;"><img src="logo\.png" style="width: 100%; max-width: 800px;" alt="TechCraft" /></div>', '<div class="bg-text-inner">TECHCRAFT</div>', html)

    with open(file, 'w', encoding='utf-8') as f:
        f.write(html)

# Revert CSS
with open('style.css', 'r', encoding='utf-8') as f:
    css = f.read()

css = re.sub(r'\.nav-logo-img\s*\{[^}]*\}', '.nav-logo-img {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  object-fit: cover;\n  object-position: 10% center;\n}', css)

with open('style.css', 'w', encoding='utf-8') as f:
    f.write(css)
