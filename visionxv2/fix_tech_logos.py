import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

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

for name, url in tech_logos.items():
    # Replace the <div class="tech-icon"><svg...></div> with <div class="tech-icon"><img src="..." /></div>
    # Note: we need to match carefully because I might have already commented <!--name--> or similar
    
    # First, let's find the item block.
    # It looks like:
    # <div class="tech-icon"><svg...</svg></div>\s*(?:<!--.*?-->)?\s*<div class="tech-name">Name</div>
    # or it might just be:
    # <div class="tech-icon">...</div>\n <div class="tech-name">Name</div>
    
    pattern = r'<div class="tech-icon">.*?</div>(\s*(?:<!--.*?-->)?\s*<div class="tech-name">' + re.escape(name) + r'</div>)'
    replacement = f'<div class="tech-icon"><img src="{url}" width="24" height="24" alt="{name} logo" /></div>\\1'
    html = re.sub(pattern, replacement, html, flags=re.DOTALL)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
