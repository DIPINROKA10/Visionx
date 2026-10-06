import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Replace any emoji with a generic SVG dot or just remove them, or map them roughly
html = re.sub(r'<div class="val-icon">.*?</div>', '<div class="val-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg></div>', html, flags=re.DOTALL)
html = re.sub(r'<div class="ach-card-icon">.*?</div>', '<div class="ach-card-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg></div>', html, flags=re.DOTALL)
html = re.sub(r'<div class="tech-icon">.*?</div>', '<div class="tech-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg></div>', html, flags=re.DOTALL)

# For the social links
html = html.replace('✉️', '')
html = html.replace('💼', '')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
