with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('<h2>Let\'s <span class="purple">build together.</span></h2>', '<h2>Have a <span class="purple">Product Idea?</span></h2>')
content = content.replace('<button type="submit" class="submit-btn">Send Message →</button>', '<button type="submit" class="submit-btn">Start a Conversation →</button>\n          <button type="button" class="btn-secondary" style="margin-left: 10px; padding: 14px 24px;" onclick="document.getElementById(\'projects\').scrollIntoView({ behavior: \'smooth\' })">View Our Work</button>')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
