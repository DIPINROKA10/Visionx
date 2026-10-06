import re

with open('script.js', 'r', encoding='utf-8') as f:
    js = f.read()

# Remove the form submit handler
js = re.sub(r'const form = document\.querySelector\("\.cform"\);.*?form\.reset\(\);\n\s*},\s*2000\);\n\s*}\);\n\s*\}', '', js, flags=re.DOTALL)

with open('script.js', 'w', encoding='utf-8') as f:
    f.write(js)
