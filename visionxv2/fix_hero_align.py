import re

with open('style.css', 'r', encoding='utf-8') as f:
    css = f.read()

css = re.sub(
    r'\.hero-right\s*\{\s*position:\s*relative;\s*height:\s*100%;\s*min-height:\s*500px;\s*display:\s*flex;\s*align-items:\s*flex-end;',
    '.hero-right {\n  position: relative;\n  height: 100%;\n  min-height: 500px;\n  display: flex;\n  align-items: center;',
    css
)

with open('style.css', 'w', encoding='utf-8') as f:
    f.write(css)
