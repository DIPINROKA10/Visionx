import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# I want to find the stats-bar
print("Stats bar found:", "stats-bar" in html)

# Find all section IDs and their exact positions
matches = re.finditer(r'<section id="([^"]+)"', html)
for m in matches:
    print(m.group(1), m.start())

contact = html.find('<div class="contact-wrap')
print("contact", contact)
