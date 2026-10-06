import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Safe replacement using split
items = html.split('<div class="tech-item">')

def safe_replace(name, new_icon_html):
    for i in range(1, len(items)):
        if f'<div class="tech-name">{name}</div>' in items[i] or f'<!--{name}--><div class="tech-name">{name}</div>' in items[i]:
            items[i] = re.sub(r'<div class="tech-icon">.*?</div>', f'<div class="tech-icon">{new_icon_html}</div>', items[i], flags=re.DOTALL)

# Run Devicons safely (using image tags)
safe_replace('React', '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" width="24" height="24" alt="React logo" />')
safe_replace('HTML/CSS/JS', '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" width="24" height="24" alt="JS logo" />')
safe_replace('Tailwind', '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" width="24" height="24" alt="Tailwind logo" />')
safe_replace('Vue.js', '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" width="24" height="24" alt="Vue logo" />')
safe_replace('Python', '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" width="24" height="24" alt="Python logo" />')
safe_replace('FastAPI', '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" width="24" height="24" alt="FastAPI logo" />')
safe_replace('TensorFlow', '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" width="24" height="24" alt="TensorFlow logo" />')
safe_replace('Node.js', '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" width="24" height="24" alt="Node logo" />')
safe_replace('Docker', '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" width="24" height="24" alt="Docker logo" />')
safe_replace('Databases', '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" width="24" height="24" alt="Database logo" />')
safe_replace('Blockchain', '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/solidity/solidity-original.svg" width="24" height="24" alt="Solidity logo" />')

# SVG replacements for generic ones
chart_svg = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="18" y="3" width="4" height="18"></rect><rect x="10" y="8" width="4" height="13"></rect><rect x="2" y="13" width="4" height="8"></rect></svg>'
safe_replace('Power BI', chart_svg)

shield_svg = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>'
safe_replace('Security', shield_svg)

responsive_svg = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>'
safe_replace('Responsive', responsive_svg)

ai_svg = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polyline></svg>'
safe_replace('LLMs', ai_svg)

html = '<div class="tech-item">'.join(items)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
