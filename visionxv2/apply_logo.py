import re

files = ['index.html', 'achievements.html']

for file in files:
    with open(file, 'r', encoding='utf-8') as f:
        html = f.read()

    # Change jpg to png
    html = html.replace('logo.jpg', 'logo.png')
    
    # Remove text "TECHCRAFT" from nav logo if it exists
    # The current structure:
    # <div class="nav-logo">
    #   <img class="nav-logo-img" src="logo.png" alt="TechCraft" />
    #   TECHCRAFT
    html = re.sub(r'(<img class="nav-logo-img" src="logo\.png" alt="TechCraft" />\s*)TECHCRAFT', r'\1', html)
    html = re.sub(r'(<img class="nav-logo-img" src="logo\.png" alt="Vision X" />\s*)Vision X', r'\1', html)
    html = html.replace('alt="Vision X"', 'alt="TechCraft"')
    
    # Replace footer text logo with image
    html = re.sub(r'<div class="footer-logo">TECH<span class="purple">CRAFT</span></div>', '<div class="footer-logo"><img src="logo.png" style="height: 36px; width: auto; max-width: 100%; object-fit: contain;" alt="TechCraft" /></div>', html)
    
    # Replace the big background text
    html = html.replace('<div class="bg-text-inner">TECHCRAFT</div>', '<div class="bg-text-inner" style="opacity: 0.02;"><img src="logo.png" style="width: 100%; max-width: 800px;" alt="TechCraft" /></div>')
    html = html.replace('<div class="bg-text-inner" style="opacity: 0.04">VISION X</div>', '<div class="bg-text-inner" style="opacity: 0.02;"><img src="logo.png" style="width: 100%; max-width: 800px;" alt="TechCraft" /></div>')

    with open(file, 'w', encoding='utf-8') as f:
        f.write(html)

with open('style.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Update nav-logo-img
css = re.sub(r'\.nav-logo-img\s*\{[^}]*\}', '.nav-logo-img {\n  height: 36px;\n  width: auto;\n  border-radius: 0;\n  object-fit: contain;\n}', css)

with open('style.css', 'w', encoding='utf-8') as f:
    f.write(css)
