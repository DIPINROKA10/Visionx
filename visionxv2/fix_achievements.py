import re

with open('achievements.html', 'r', encoding='utf-8') as f:
    html = f.read()

# 1. Fix encoding artifacts
html = html.replace('Ac 2026 Team TechCraft.', '© 2026 TechCraft. All rights reserved.')
html = html.replace('Ac 2026 Team Vision X.', '© 2026 TechCraft. All rights reserved.')
html = html.replace('+"', '↓')
html = html.replace('+`', '↑')
html = html.replace('Sz', '⊞')
html = html.replace('~', '◴')
html = html.replace('o ', '×')
html = html.replace('+\'', '→')
html = html.replace('?"', '—')

# 2. Add theme toggle to navbar
toggle_btn = """<button class="theme-toggle-animated" id="themeToggle" title="Toggle Theme" aria-label="Toggle Theme">
          <svg class="sun-and-moon" aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" style="stroke-width: 2px; stroke-linecap: round;">
            <mask class="moon" id="moon-mask">
              <rect x="0" y="0" width="100%" height="100%" fill="white" />
              <circle cx="24" cy="10" r="6" fill="black" />
            </mask>
            <circle class="sun" cx="12" cy="12" r="6" mask="url(#moon-mask)" fill="currentColor" />
            <g class="sun-beams" stroke="currentColor">
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </g>
          </svg>
        </button>"""

if 'class="theme-toggle-animated"' not in html:
    html = html.replace('<span class="brand-gradient">TECHCRAFT</span>\n      </div>', f'<span class="brand-gradient">TECHCRAFT</span>\n        {toggle_btn}\n      </div>')

# 3. Remove "Add Achievement" button
html = re.sub(r'<button\s+class="add-ach-btn"[^>]*>\s*\+\s*Add Achievement\s*</button>', '', html)

# 4. Remove achModal overlay
html = re.sub(r'<!-- Add Achievement Modal -->\s*<div\s+class="modal-overlay"\s+id="achModal".*?</div>\s*</div>', '', html, flags=re.DOTALL)

# 5. Fix background text
html = re.sub(r'<div class="bg-text-inner" style="opacity: 0\.02;"><img src="logo\.png" style="width: 100%; max-width: 800px;" alt="TechCraft" /></div>', '<div class="bg-text-inner">TECHCRAFT</div>', html)
html = html.replace('<div class="bg-text-inner" style="opacity: 0.04">TECHCRAFT</div>', '<div class="bg-text-inner">TECHCRAFT</div>')
html = html.replace('<div class="bg-text-inner" style="opacity: 0.04">VISION X</div>', '<div class="bg-text-inner">TECHCRAFT</div>')

# 6. Fix footer motto
html = html.replace('<div class="footer-motto">BUILDING THE FUTURE</div>', '<div class="footer-motto">Product Engineering &amp; Software Development</div>')

with open('achievements.html', 'w', encoding='utf-8') as f:
    f.write(html)
