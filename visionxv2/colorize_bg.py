with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

html = html.replace('<div class="bg-text-inner">TECHCRAFT</div>', '<div class="bg-text-inner">TECH<span class="purple">CRAFT</span></div>')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
