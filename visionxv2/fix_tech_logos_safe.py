import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Fix contact padding
html = html.replace('class="cform-row"', 'class="form-row"')

# Fix tech logos safely
tech_logos = {
    'React': 'https://cdn.simpleicons.org/react/F5F7FA',
    'HTML/CSS/JS': 'https://cdn.simpleicons.org/html5/F5F7FA',
    'Tailwind': 'https://cdn.simpleicons.org/tailwindcss/F5F7FA',
    'Vue.js': 'https://cdn.simpleicons.org/vuedotjs/F5F7FA',
    'Python': 'https://cdn.simpleicons.org/python/F5F7FA',
    'FastAPI': 'https://cdn.simpleicons.org/fastapi/F5F7FA',
    'TensorFlow': 'https://cdn.simpleicons.org/tensorflow/F5F7FA',
    'Node.js': 'https://cdn.simpleicons.org/nodedotjs/F5F7FA',
    'Power BI': 'https://cdn.simpleicons.org/powerbi/F5F7FA',
    'Docker': 'https://cdn.simpleicons.org/docker/F5F7FA'
}

items = html.split('<div class="tech-item">')
for i in range(1, len(items)):
    for name, url in tech_logos.items():
        if f'<div class="tech-name">{name}</div>' in items[i] or f'<!--{name}--><div class="tech-name">{name}</div>' in items[i]:
            # Replace whatever is inside <div class="tech-icon">...</div> with the img
            items[i] = re.sub(r'<div class="tech-icon">.*?</div>', f'<div class="tech-icon"><img src="{url}" width="24" height="24" alt="{name} logo" /></div>', items[i], flags=re.DOTALL)

html = '<div class="tech-item">'.join(items)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
