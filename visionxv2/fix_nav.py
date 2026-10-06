import re

# 1. Update script.js
with open('script.js', 'r', encoding='utf-8') as f:
    js = f.read()

# Replace the hardcoded inline styles in initNavScrollEffect
js = re.sub(
    r'if\s*\(current\s*>\s*100\)\s*\{\s*nav\.style\.background[^}]+} else {\s*nav\.style\.background[^}]+}', 
    'if (current > 50) {\n        nav.classList.add("scrolled");\n      } else {\n        nav.classList.remove("scrolled");\n      }', 
    js
)

# Active link highlight in JS also sets #fff hardcoded!
# link.style.color = link.getAttribute("href") === "#" + current ? "#fff" : "";
# Let's fix that too, just add an "active" class
js = re.sub(
    r'link\.style\.color\s*=\s*link\.getAttribute\("href"\)\s*===\s*"#"\s*\+\s*current\s*\?\s*"#fff"\s*:\s*"";',
    'if (link.getAttribute("href") === "#" + current) {\n          link.classList.add("active");\n        } else {\n          link.classList.remove("active");\n        }',
    js
)

with open('script.js', 'w', encoding='utf-8') as f:
    f.write(js)

# 2. Update style.css
with open('style.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Make sure we don't duplicate
if 'nav.scrolled' not in css:
    css += """

/* ===== NAV SCROLL & LIGHT/DARK ===== */
nav {
  background: rgba(5, 7, 13, 0.7) !important;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid transparent;
  transition: all 0.3s ease;
}

nav.scrolled {
  background: rgba(5, 7, 13, 0.95) !important;
  border-bottom: 1px solid var(--border);
}

[data-theme="light"] nav {
  background: rgba(255, 255, 255, 0.7) !important;
}

[data-theme="light"] nav.scrolled {
  background: rgba(255, 255, 255, 0.95) !important;
  border-bottom: 1px solid var(--border);
}

.nav-links a {
  transition: color 0.3s;
}

.nav-links a.active {
  color: var(--purple) !important;
}

[data-theme="light"] .nav-links a.active {
  color: var(--purple) !important;
}
"""

with open('style.css', 'w', encoding='utf-8') as f:
    f.write(css)
