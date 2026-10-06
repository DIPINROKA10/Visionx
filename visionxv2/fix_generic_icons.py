import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

def replace_icon(name, new_icon_html):
    global html
    # The block looks like:
    # <div class="tech-icon">...</div>
    # <div class="tech-name">Name</div>
    pattern = r'<div class="tech-icon">.*?</div>\s*<div class="tech-name">' + re.escape(name) + r'</div>'
    replacement = f'<div class="tech-icon">{new_icon_html}</div>\n                <div class="tech-name">{name}</div>'
    html = re.sub(pattern, replacement, html, flags=re.DOTALL)

# Power BI (bar chart SVG)
chart_svg = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="18" y="3" width="4" height="18"></rect><rect x="10" y="8" width="4" height="13"></rect><rect x="2" y="13" width="4" height="8"></rect></svg>'
replace_icon('Power BI', chart_svg)

# Blockchain (link/chain SVG)
chain_svg = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>'
replace_icon('Blockchain', chain_svg)

# Security (shield SVG)
shield_svg = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>'
replace_icon('Security', shield_svg)

# Databases (database/cylinder SVG)
db_svg = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>'
replace_icon('Databases', db_svg)

# Responsive (monitor/smartphone SVG)
responsive_svg = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>'
replace_icon('Responsive', responsive_svg)

# LLMs (brain/zap SVG)
ai_svg = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polyline></svg>'
replace_icon('LLMs', ai_svg)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
