import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Pattern to remove Dipin Roka card
# It looks like:
#              <div class="hero-card">
#                <div class="hero-avatar av-blue">DR</div>
#                <div class="hero-card-name">Dipin Roka</div>
#                <div class="hero-card-role">Web Dev & AI</div>
#                <div class="hero-card-tags">
#                  <span class="htag">AI</span><span class="htag">FRONTEND</span>
#                </div>
#              </div>

pattern = r'\s*<div class="hero-card">\s*<div class="hero-avatar av-blue">DR</div>\s*<div class="hero-card-name">Dipin Roka</div>\s*<div class="hero-card-role">Web Dev & AI</div>\s*<div class="hero-card-tags">\s*<span class="htag">AI</span><span class="htag">FRONTEND</span>\s*</div>\s*</div>'

html = re.sub(pattern, '', html)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
