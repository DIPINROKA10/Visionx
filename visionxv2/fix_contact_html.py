import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Replace any inline styles in contact form inputs to allow CSS to override
html = re.sub(
    r'style="\s*width:\s*100%;\s*padding:\s*14px\s*18px;\s*background:\s*rgba\(255,\s*255,\s*255,\s*0\.12\);\s*border:\s*1\.5px\s*solid\s*rgba\(255,\s*255,\s*255,\s*0\.2\);\s*border-radius:\s*8px;\s*color:\s*#fff;\s*margin-bottom:\s*14px;\s*font-family:\s*\'Inter\',\s*sans-serif;\s*outline:\s*none;\s*"',
    '',
    html
)
# For textarea
html = re.sub(
    r'style="\s*width:\s*100%;\s*padding:\s*14px\s*18px;\s*background:\s*rgba\(255,\s*255,\s*255,\s*0\.12\);\s*border:\s*1\.5px\s*solid\s*rgba\(255,\s*255,\s*255,\s*0\.2\);\s*border-radius:\s*8px;\s*color:\s*#fff;\s*margin-bottom:\s*24px;\s*font-family:\s*\'Inter\',\s*sans-serif;\s*outline:\s*none;\s*resize:\s*vertical;\s*"',
    '',
    html
)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
