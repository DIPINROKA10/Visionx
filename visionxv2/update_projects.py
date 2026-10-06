import re

with open('script.js', 'r', encoding='utf-8') as f:
    js = f.read()

# Replace cat with type in projects array definition
js = js.replace('cat: "Blockchain A Supply Chain"', 'type: "Prototype"')
js = js.replace('cat: "Trade Intelligence"', 'type: "Hackathon Project"')
js = js.replace('cat: "AI A DevOps"', 'type: "Prototype"')
js = js.replace('cat: "Full Stack"', 'type: "Internal Product"')
js = js.replace('cat: "AI A Sustainability"', 'type: "Prototype"')
js = js.replace('cat: "Sustainability A Web"', 'type: "Hackathon Project"')

# Fallbacks for encoding issues in case it didn't match
js = re.sub(r'cat:\s*"[^"]+",\s*\n\s*name:\s*"TraceChain"', 'type: "Prototype",\n      name: "TraceChain"', js)
js = re.sub(r'cat:\s*"[^"]+",\s*\n\s*name:\s*"Tariff Weaver"', 'type: "Hackathon Project",\n      name: "Tariff Weaver"', js)
js = re.sub(r'cat:\s*"[^"]+",\s*\n\s*name:\s*"RootPilot AI"', 'type: "Prototype",\n      name: "RootPilot AI"', js)
js = re.sub(r'cat:\s*"[^"]+",\s*\n\s*name:\s*"Food Court App"', 'type: "Internal Product",\n      name: "Food Court App"', js)
js = re.sub(r'cat:\s*"[^"]+",\s*\n\s*name:\s*"EcoTwin AI"', 'type: "Prototype",\n      name: "EcoTwin AI"', js)
js = re.sub(r'cat:\s*"[^"]+",\s*\n\s*name:\s*"CarbonTrace"', 'type: "Hackathon Project",\n      name: "CarbonTrace"', js)

# Change rendering of projects
# Original rendering:
# <div class="pcard-cat">${p.cat}</div>
# Change to: <div class="pcard-type">${p.type}</div>
js = js.replace('<div class="pcard-cat">${p.cat}</div>', '<div class="pcard-type" style="font-size: 10px; font-weight: 700; color: var(--purple); text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 8px;">${p.type}</div>')

# Change old `.purple` classes to `.accent` where applicable? Wait, `style.css` still uses `--purple`, which is the blue accent now. So it's fine.

with open('script.js', 'w', encoding='utf-8') as f:
    f.write(js)
