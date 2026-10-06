import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

cloud_icon = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>'
db_icon = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>'
ai_icon = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="10" rx="2"></rect><circle cx="12" cy="5" r="2"></circle><path d="M12 7v4"></path><line x1="8" y1="16" x2="8" y2="16"></line><line x1="16" y1="16" x2="16" y2="16"></line></svg>'
sec_icon = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>'

techs = {
    'AWS': cloud_icon,
    'Google Cloud': cloud_icon,
    'Docker': cloud_icon,
    'MongoDB': db_icon,
    'PostgreSQL': db_icon,
    'TensorFlow': ai_icon,
    'PyTorch': ai_icon,
    'Scikit-learn': ai_icon,
    'Pandas': db_icon,
    'Wireshark': sec_icon,
    'Burp Suite': sec_icon,
    'Nmap': sec_icon,
    'Metasploit': sec_icon
}

for name, icon in techs.items():
    html = html.replace(f'<div class="tech-name">{name}</div>', f'<!--{name}--><div class="tech-name">{name}</div>')
    html = re.sub(rf'<div class="tech-icon"><svg.*?</svg></div>\s*<!--{name}-->', f'<div class="tech-icon">{icon}</div>', html)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
