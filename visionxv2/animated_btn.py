import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

old_btn = '<button class="theme-toggle" id="themeToggle" title="Toggle Theme">🌓</button>'
new_btn = """<button class="theme-toggle-animated" id="themeToggle" title="Toggle Theme" aria-label="Toggle Theme">
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

if old_btn in html:
    html = html.replace(old_btn, new_btn)
else:
    print("Could not find the old button in index.html")

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

with open('style.css', 'a', encoding='utf-8') as f:
    f.write("""
/* ===== ANIMATED THEME TOGGLE ===== */
.theme-toggle-animated {
  background: transparent;
  border: 1px solid var(--border);
  color: var(--text);
  width: 38px;
  height: 38px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: 14px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  padding: 0;
}
.theme-toggle-animated:hover {
  background: var(--purple-light);
  color: var(--purple);
  border-color: var(--purple);
  transform: scale(1.05);
}

.sun-and-moon > :is(.moon, .sun, .sun-beams) {
  transform-origin: center center;
}
.sun-and-moon > .sun {
  transition: transform .5s cubic-bezier(.5,1.25,.75,1.25);
}
.sun-and-moon > .sun-beams {
  transition: transform .5s cubic-bezier(.5,1.5,.75,1.25), opacity .5s cubic-bezier(.25,0,.3,1);
}
.sun-and-moon .moon > circle {
  transition: transform .25s cubic-bezier(0,0,0,1);
}

[data-theme="dark"] .sun-and-moon > .sun {
  transform: scale(1.75);
}
[data-theme="dark"] .sun-and-moon > .sun-beams {
  opacity: 0;
  transform: rotate(-25deg);
}
[data-theme="dark"] .sun-and-moon .moon > circle {
  transform: translateX(-7px);
}
""")
