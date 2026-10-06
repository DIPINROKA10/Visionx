import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

start = html.find('<!-- STATS -->')
if start != -1:
    end = html.find('<section id="positioning"')
    if end != -1:
        html = html[:start] + html[end:]

# Also let's fix the contact form fake submission behavior
# Contact form is: <form class="cform" id="contactForm">
# Action: mailto:visionxofficial@zohomail.in
html = html.replace('<form class="cform" id="contactForm">', '<form class="cform" id="contactForm" action="mailto:visionxofficial@zohomail.in" method="GET" enctype="text/plain">')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
