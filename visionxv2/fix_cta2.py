with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

target = '<button type="submit" class="submit-btn">Start a Conversation →</button>\n          <button type="button" class="btn-secondary" style="margin-left: 10px; padding: 14px 24px;" onclick="document.getElementById(\'projects\').scrollIntoView({ behavior: \'smooth\' })">View Our Work</button>'
replacement = '<div style="display: flex; gap: 10px; width: 100%;"><button type="submit" class="submit-btn" style="flex: 1;">Start a Conversation →</button><button type="button" class="btn-secondary" style="flex: 1; padding: 14px 24px; color: #fff; border-color: rgba(255,255,255,0.4);" onclick="document.getElementById(\'projects\').scrollIntoView({ behavior: \'smooth\' })">View Our Work</button></div>'

content = content.replace(target, replacement)
# In case the previous script failed, check for the div wrapper first:
if target not in content:
   # Already modified or different? Let's check for the exact string from before
   target2 = '<div style="display: flex; gap: 10px; flex-direction: column; @media(min-width: 600px){flex-direction: row;}"><button type="submit" class="submit-btn" style="flex: 1;">Start a Conversation →</button><button type="button" class="btn-secondary" style="flex: 1; padding: 14px 24px; color: #fff; border-color: rgba(255,255,255,0.4);" onclick="document.getElementById(\'projects\').scrollIntoView({ behavior: \'smooth\' })">View Our Work</button></div>'
   content = content.replace(target2, replacement)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
