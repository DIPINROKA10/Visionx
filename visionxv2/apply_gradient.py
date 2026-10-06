import re

for file in ['index.html', 'achievements.html']:
    with open(file, 'r', encoding='utf-8') as f:
        html = f.read()

    # Wrap TECHCRAFT text in nav-logo
    html = re.sub(r'(<img class="nav-logo-img"[^>]*>\s*)TECHCRAFT', r'\1<span class="brand-gradient">TECHCRAFT</span>', html)
    
    # Wrap TECHCRAFT in footer
    html = re.sub(r'(<div class="footer-logo"[^>]*>\s*<img[^>]*>\s*)TECHCRAFT', r'\1<span class="brand-gradient">TECHCRAFT</span>', html)

    with open(file, 'w', encoding='utf-8') as f:
        f.write(html)

with open('style.css', 'a', encoding='utf-8') as f:
    f.write("""
/* ===== BRAND GRADIENT TEXT ===== */
.brand-gradient {
  background: linear-gradient(90deg, var(--text) 0%, var(--purple) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}
""")
