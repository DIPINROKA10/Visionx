with open('achievements.html', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('<div class="footer-logo">Vision <span class="purple">X</span></div>', '<div class="footer-logo">TECH<span class="purple">CRAFT</span></div>')

with open('achievements.html', 'w', encoding='utf-8') as f:
    f.write(content)
