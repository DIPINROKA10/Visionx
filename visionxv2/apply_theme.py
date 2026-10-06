import re

with open('style.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Update root variables
root_vars = """
:root {
  --white: #ffffff;
  --bg: #05070D;
  --bg-navy: #0B1020;
  --text: #F5F7FA;
  --muted: #A7B0C0;
  --purple: #3b82f6; /* Renamed to Electric Blue for HTML compat */
  --purple-light: rgba(59, 130, 246, 0.1);
  --purple-mid: #60a5fa;
  --border: rgba(59, 130, 246, 0.2);
  --card-bg: #0B1020;
  --font-display: "Space Grotesk", sans-serif;
  --font-mono: "JetBrains Mono", monospace;
}
"""
css = re.sub(r':root\s*{[^}]*}', root_vars.strip(), css)

# Update body
css = re.sub(r'body\s*{[^}]*}', """body {
  font-family: "Inter", sans-serif;
  background: var(--bg);
  color: var(--text);
  overflow-x: hidden;
  line-height: 1.6;
  position: relative;
  background-image: 
    linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px);
  background-size: 40px 40px;
}""", css)

# Update .purple class (since it's now blue)
css = re.sub(r'\.purple\s*{\s*color:\s*var\(--purple\);\s*}', '.purple { color: var(--purple); text-shadow: 0 0 10px rgba(59,130,246,0.3); }', css)

# Fix background colors in sections
css = css.replace('background: #ffffff;', 'background: var(--bg);')
css = css.replace('background: var(--white);', 'background: var(--bg);')
css = css.replace('color: #0f0f14;', 'color: var(--text);')

# Fix nav background
css = css.replace('background: #000;', 'background: rgba(5, 7, 13, 0.85);')

# Update specific elements that need dark treatment
css = css.replace('border: 1px solid var(--border);', 'border: 1px solid var(--border);')
css = css.replace('background: linear-gradient(135deg, var(--purple-light) 0%, #f0edff 100%);', 'background: linear-gradient(135deg, var(--bg-navy) 0%, rgba(59,130,246,0.05) 100%); border: 1px solid var(--border);')

# Fix hero elements
css = css.replace('background: var(--white);', 'background: var(--card-bg);')
css = css.replace('color: #fff;', 'color: var(--text);')

# Make inputs dark
css = css.replace('.hero-input {\n  flex: 1;\n  max-width: 220px;\n  padding: 12px 16px;\n  border: 1.5px solid var(--border);\n  border-radius: 6px;\n  font-family: "Inter", sans-serif;\n  font-size: 14px;\n  background: var(--white);\n  outline: none;\n  transition: border-color 0.2s;\n}', '.hero-input {\n  flex: 1;\n  max-width: 220px;\n  padding: 12px 16px;\n  border: 1.5px solid var(--border);\n  border-radius: 6px;\n  font-family: "Inter", sans-serif;\n  font-size: 14px;\n  background: var(--bg-navy);\n  color: var(--text);\n  outline: none;\n  transition: border-color 0.2s;\n}')

# Update stats bar
css = re.sub(r'\.stats-bar\s*{[^}]*}', """.stats-bar {
  background: var(--bg-navy);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  padding: 40px 60px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  max-width: 100%;
}""", css)

# Update hero cubes/orbs for less intense colors
css = css.replace('background: radial-gradient(circle, #7c3aed, #a78bfa);', 'background: radial-gradient(circle, rgba(59,130,246,0.2), transparent);')
css = css.replace('background: radial-gradient(circle, #3b82f6, #60a5fa);', 'background: radial-gradient(circle, rgba(59,130,246,0.15), transparent);')
css = css.replace('background: radial-gradient(circle, #ec4899, #f472b6);', 'background: radial-gradient(circle, rgba(6,182,212,0.15), transparent);')
css = css.replace('background: radial-gradient(circle, #8b5cf6, #c084fc);', 'background: radial-gradient(circle, rgba(59,130,246,0.1), transparent);')
css = css.replace('background: radial-gradient(circle, #06b6d4, #22d3ee);', 'background: radial-gradient(circle, rgba(59,130,246,0.2), transparent);')

# Update team card header gradient
css = css.replace('background: linear-gradient(160deg, var(--purple-light) 0%, var(--white) 60%);', 'background: var(--bg-navy); border-bottom: 1px solid var(--border);')

# Add glassmorphism to general cards if needed
css = css.replace('.team-card {', '.team-card {\n  background: var(--card-bg);\n  backdrop-filter: blur(10px);')

with open('style.css', 'w', encoding='utf-8') as f:
    f.write(css)
