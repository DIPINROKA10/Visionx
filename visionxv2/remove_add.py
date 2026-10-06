with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

import re
content = re.sub(r'<button class="fbtn add-btn"[^>]*>\s*\+\s*Add Project\s*</button>', '', content)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
