import re

for file in ['index.html', 'achievements.html']:
    with open(file, 'r', encoding='utf-8') as f:
        html = f.read()

    # Footer
    html = re.sub(r'<div class="footer-logo">TECH<span class="purple">CRAFT</span></div>', '<div class="footer-logo" style="display: flex; align-items: center; gap: 10px;"><img src="logo.png" style="width: 36px; height: 36px; border-radius: 50%;" alt="TechCraft" />TECH<span class="purple">CRAFT</span></div>', html)
    
    with open(file, 'w', encoding='utf-8') as f:
        f.write(html)
