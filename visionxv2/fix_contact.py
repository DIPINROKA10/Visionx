import re

# 1. Update style.css
with open('style.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Fix contact-wrap background
css = css.replace('.contact-wrap {\n  background: var(--purple);\n}', '.contact-wrap {\n  background: #05070D;\n}')

# Contact form inputs
contact_css_add = """
/* ===== REVISED CONTACT STYLES ===== */
.contact-wrap {
  background: #05070D !important;
}

#contact .section-tag {
  color: #38BDF8 !important;
}

#contact h2 {
  color: #F5F7FA;
}

#contact h2 span.purple, #contact h2 span {
  color: #1687FF !important;
}

#contact .section-sub {
  color: #A7B0C0 !important;
}

.cform input,
.cform textarea {
  background: #0B1020 !important;
  border: 1.5px solid #1E3A5F !important;
  color: #F5F7FA !important;
}

.cform input::placeholder,
.cform textarea::placeholder {
  color: #64748B !important;
}

.cform .submit-btn {
  background: #1687FF !important;
  color: #ffffff !important;
}

.cform .submit-btn:hover {
  background: #38BDF8 !important;
}
"""

with open('style.css', 'a', encoding='utf-8') as f:
    f.write(contact_css_add)

# 2. Update index.html inline styles
with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Remove inline styles that clash with our new CSS
html = re.sub(r'style="[^"]*background:\s*rgba\(255,\s*255,\s*255,\s*0\.12\);[^"]*"', '', html)
html = html.replace('<div class="section-tag" style="color: rgba(255, 255, 255, 0.6)">', '<div class="section-tag">')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
