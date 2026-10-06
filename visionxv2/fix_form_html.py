import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Replace the fake form logic
form_pattern = r'<form\s+class="cform"[^>]*>.*?</form>'
new_form = """<form class="cform" action="mailto:visionxofficial@zohomail.in" method="GET" enctype="text/plain">
            <div class="cform-row">
              <input type="text" name="name" placeholder="Name" required />
              <input type="email" name="email" placeholder="Email" required />
            </div>
            <textarea name="message" placeholder="Project Details" rows="4" required></textarea>
            <button type="submit" class="submit-btn">Send Message</button>
          </form>"""

html = re.sub(form_pattern, new_form, html, flags=re.DOTALL)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
