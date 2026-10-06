import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Remove the bad inline styles that made sections touch the edges
html = re.sub(r'(<section\s+id="[^"]+")\s*style="[^"]*padding:\s*0;?[^"]*"', r'\1', html)

# The UI/UX icon is wrong. The user specifically asked to "add a good and new icon for ux in everwhere like in tech stack and many more things according to the section"
# Wait, I gave all of them the same icon in my previous fix. I should give them UNIQUE icons.

# Services icons in What We Build:
# Web Applications:
html = html.replace('<div class="val-name">Web Applications</div>', '<!--WEB--><div class="val-name">Web Applications</div>')
# Mobile:
html = html.replace('<div class="val-name">Mobile Applications</div>', '<!--MOB--><div class="val-name">Mobile Applications</div>')
# AI:
html = html.replace('<div class="val-name">AI & Automation</div>', '<!--AI--><div class="val-name">AI & Automation</div>')
# Custom Software:
html = html.replace('<div class="val-name">Custom Software</div>', '<!--SOFT--><div class="val-name">Custom Software</div>')
# UI/UX:
html = html.replace('<div class="val-name">UI/UX Design</div>', '<!--UX--><div class="val-name">UI/UX Design</div>')
# Cloud:
html = html.replace('<div class="val-name">Cloud Solutions</div>', '<!--CLOUD--><div class="val-name">Cloud Solutions</div>')
# Cyber:
html = html.replace('<div class="val-name">Cybersecurity</div>', '<!--SEC--><div class="val-name">Cybersecurity</div>')

web_icon = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>'
mob_icon = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>'
ai_icon = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>' # generic
soft_icon = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>'
ux_icon = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="21.17" y1="8" x2="12" y2="8"></line><line x1="3.95" y1="6.06" x2="8.54" y2="14"></line><line x1="10.88" y1="21.94" x2="15.46" y2="14"></line></svg>'
cloud_icon = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>'
sec_icon = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>'

# I'll just use regex to replace the preceding val-icon SVG
html = re.sub(r'<div class="val-icon"><svg.*?</svg></div><!--WEB-->', f'<div class="val-icon">{web_icon}</div>', html)
html = re.sub(r'<div class="val-icon"><svg.*?</svg></div><!--MOB-->', f'<div class="val-icon">{mob_icon}</div>', html)
html = re.sub(r'<div class="val-icon"><svg.*?</svg></div><!--AI-->', f'<div class="val-icon">{ai_icon}</div>', html)
html = re.sub(r'<div class="val-icon"><svg.*?</svg></div><!--SOFT-->', f'<div class="val-icon">{soft_icon}</div>', html)
html = re.sub(r'<div class="val-icon"><svg.*?</svg></div><!--UX-->', f'<div class="val-icon">{ux_icon}</div>', html)
html = re.sub(r'<div class="val-icon"><svg.*?</svg></div><!--CLOUD-->', f'<div class="val-icon">{cloud_icon}</div>', html)
html = re.sub(r'<div class="val-icon"><svg.*?</svg></div><!--SEC-->', f'<div class="val-icon">{sec_icon}</div>', html)

# For Tech Stack (which used the same soft_icon everywhere)
# The user said "add a good and new icon for ux in everwhere like in tech stack and many more things according to the section"
# Wait, tech stack has names like "React", "HTML/CSS/JS", "Figma", "Node.js". I should use appropriate icons.
# Figma is UX!
html = html.replace('<div class="tech-name">Figma</div>', '<!--FIGMA--><div class="tech-name">Figma</div>')
html = re.sub(r'<div class="tech-icon"><svg.*?</svg></div>\s*<!--FIGMA-->', f'<div class="tech-icon">{ux_icon}</div>', html)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
