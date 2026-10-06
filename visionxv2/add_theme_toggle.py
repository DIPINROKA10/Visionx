import re

# 1. Update style.css
with open('style.css', 'r', encoding='utf-8') as f:
    css = f.read()

light_theme = """
[data-theme="light"] {
  --bg: #ffffff;
  --bg-navy: #f8fafc;
  --text: #0f0f14;
  --muted: #6b6b80;
  --card-bg: #fafafe;
  --border: rgba(59, 130, 246, 0.2);
  --purple-light: rgba(59, 130, 246, 0.1);
}

[data-theme="light"] body {
  background-image: 
    linear-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(59, 130, 246, 0.05) 1px, transparent 1px);
}

[data-theme="light"] nav {
  background: rgba(255, 255, 255, 0.85);
}

[data-theme="light"] .hero-input {
  background: var(--white);
  color: var(--text);
}

[data-theme="light"] .nav-logo {
  color: var(--text);
}

[data-theme="light"] .nav-links a:hover {
  color: var(--purple);
}

.theme-toggle {
  background: transparent;
  border: 1px solid var(--border);
  color: var(--text);
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
  margin-left: 12px;
  font-size: 14px;
}
.theme-toggle:hover {
  background: var(--purple-light);
  color: var(--purple);
}
"""
if '[data-theme="light"]' not in css:
    with open('style.css', 'a', encoding='utf-8') as f:
        f.write("\n" + light_theme)

# 2. Update index.html
with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

if 'class="theme-toggle"' not in html:
    # Insert button next to logo in nav
    html = html.replace('VISIONX NEXUS\n      </div>', 'VISIONX NEXUS\n        <button class="theme-toggle" id="themeToggle" title="Toggle Theme">🌓</button>\n      </div>')
    
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(html)

# 3. Update script.js
with open('script.js', 'r', encoding='utf-8') as f:
    js = f.read()

if 'initThemeToggle' not in js:
    toggle_script = """
/* ===== THEME TOGGLE ===== */
function initThemeToggle() {
  const toggleBtn = document.getElementById("themeToggle");
  if (!toggleBtn) return;
  
  // Check local storage or system preference
  const currentTheme = localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
  document.documentElement.setAttribute("data-theme", currentTheme);
  
  toggleBtn.addEventListener("click", () => {
    let theme = document.documentElement.getAttribute("data-theme");
    let newTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  });
}
"""
    js = toggle_script + "\n" + js
    # Add initThemeToggle(); to DOMContentLoaded
    js = js.replace('initLoader();', 'initLoader();\n  initThemeToggle();')
    
    with open('script.js', 'w', encoding='utf-8') as f:
        f.write(js)
