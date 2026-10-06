import os
with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

target = 'class="btn-primary"\n              style="background: transparent; border: 1.5px solid var(--purple); margin-left: 10px;"'
replacement = 'class="btn-secondary"\n              style="margin-left: 10px;"'
content = content.replace(target, replacement)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
