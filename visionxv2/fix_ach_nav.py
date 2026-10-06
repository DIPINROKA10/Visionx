import re

with open('achievements.html', 'r', encoding='utf-8') as f:
    html = f.read()

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

# Fix the nav-logo structure
html = re.sub(
    r'<a href="index\.html" class="nav-logo">\s*<img class="nav-logo-img" src="logo\.png" alt="TechCraft" />\s*<span class="brand-gradient">TECHCRAFT</span>\s*TechCraft\s*</a>',
    f'<div class="nav-logo">\n        <a href="index.html" style="display: flex; align-items: center; gap: 10px; text-decoration: none; color: inherit;">\n          <img class="nav-logo-img" src="logo.png" alt="TechCraft" />\n          <span class="brand-gradient">TECHCRAFT</span>\n        </a>\n        {toggle_btn}\n      </div>',
    html
)

# Wait, if they click the logo it goes to index.html. I will make the a tag wrap the logo and text, and put the button outside it.
with open('achievements.html', 'w', encoding='utf-8') as f:
    f.write(html)
