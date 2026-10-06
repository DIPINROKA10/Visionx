import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Fix footer logo
html = html.replace('<div class="footer-logo">TECHCRAFT <span class="purple">NEXUS</span></div>', '<div class="footer-logo">TECH<span class="purple">CRAFT</span></div>')
html = html.replace('<div class="footer-logo">VISIONX <span class="purple">NEXUS</span></div>', '<div class="footer-logo">TECH<span class="purple">CRAFT</span></div>')

# Fix achievements text
html = html.replace('TechCraft, TechCraft, and multiple product ideas', 'TechCraft, and multiple product ideas')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
