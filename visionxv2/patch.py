import os
import re

html_path = r"c:\Users\HP\Downloads\VisionX_V0.1\Visionx\visionxv2\index.html"
js_path = r"c:\Users\HP\Downloads\VisionX_V0.1\Visionx\visionxv2\script.js"

with open(html_path, "r", encoding="utf-8") as f:
    html = f.read()

# Metadata
html = html.replace("<title>\n      Team Vision X — Building digital products &amp; intelligent solutions.\n    </title>", "<title>\n      VisionX Nexus | Product Engineering & Software Development\n    </title>")
html = html.replace('content="Vision X is a multidisciplinary student innovation team building intelligent solutions in AI, Web, Blockchain, and Cybersecurity."', 'content="VisionX Nexus builds modern digital products across AI, web, mobile, cloud, and cybersecurity."')
html = html.replace('content="Team Vision X — Building the Future"', 'content="VisionX Nexus | Product Engineering & Software Development"')
html = html.replace('content="A multidisciplinary student innovation team building intelligent solutions."', 'content="VisionX Nexus builds modern digital products across AI, web, mobile, cloud, and cybersecurity."')

# Background text
html = html.replace('<div class="bg-text-inner">VISION X</div>', '<div class="bg-text-inner">VISIONX NEXUS</div>')

# Nav
html = html.replace('<img class="nav-logo-img" src="logo.jpg" alt="Vision X" />\n        Vision X', '<img class="nav-logo-img" src="logo.jpg" alt="VisionX Nexus" />\n        VISIONX NEXUS')

# Hero
html = html.replace('Student Innovation Team', 'VISIONX NEXUS')
html = html.replace('<h1>\n            Building digital<br />products &amp;\n            <span class="purple">intelligent solutions.</span>\n          </h1>', '<h1>\n            BUILD. INNOVATE.<br />\n            <span class="purple">SCALE.</span>\n          </h1>')
html = html.replace('<strong>A multidisciplinary student innovation team</strong>\n            specializing in AI, Full Stack Development, Blockchain, Data\n            Analytics, and Cybersecurity — turning ideas into impactful digital\n            products.', 'VisionX Nexus designs and engineers modern digital products across AI, web, mobile, cloud, and cybersecurity for startups and growing businesses.')

# Hero CTA
hero_cta = """<button
              class="btn-primary"
              onclick="
                document
                  .getElementById('projects')
                  .scrollIntoView({ behavior: 'smooth' })
              "
            >
              View Our Work
            </button>
            <button
              class="btn-primary"
              style="background: transparent; border: 1.5px solid var(--purple); margin-left: 10px;"
              onclick="
                document
                  .getElementById('contact')
                  .scrollIntoView({ behavior: 'smooth' })
              "
            >
              Work With Us
            </button>"""
html = re.sub(r'<input\s+class="hero-input"\s+type="email"\s+placeholder="Email address"\s*/>\s*<button\s+class="btn-primary"\s+onclick="\s*document\s*\.getElementById\(\'contact\'\)\s*\.scrollIntoView\(\{ behavior: \'smooth\' \}\)\s*"\s*>\s*Connect With Us\s*</button>', hero_cta, html)

# Stats - "30+ Participated" to "25+ Participated"
html = html.replace('30+ Participated', '25+ Participated')

# About
html = html.replace('<div class="section-tag">About Vision X</div>', '<div class="section-tag">About VisionX Nexus</div>')
html = html.replace('A team built on<br /><span class="purple">Innovation.</span>', 'Product Engineering<br /><span class="purple">&amp; Design.</span>')
html = html.replace('Vision X is a\n                <strong>multidisciplinary technology team</strong> formed by\n                passionate students committed to solving real-world problems\n                through innovation and technology.', 'VisionX Nexus is a technology-driven product engineering company focused on building modern digital solutions for startups, businesses, and emerging ventures.')
html = html.replace('We actively participate in hackathons, internships, startup\n                initiatives, and collaborative projects to transform ideas into\n                impactful digital products across AI, Web Development,\n                Blockchain, and Sustainability.', 'Our work spans web and mobile applications, AI-powered systems, custom software, cloud solutions, UI/UX, and cybersecurity. We combine engineering with practical product thinking to build solutions that are scalable, usable, and designed around real-world problems.')
html = html.replace('<p>\n                Our mission is to become a leading student innovation team\n                building impactful products and empowering future technology\n                leaders.\n              </p>', '')

# Services (replace values-grid with capability cards)
services_html = """<div class="values-grid reveal reveal-delay-2">
              <div class="val-card">
                <div class="val-icon">⚡</div>
                <div class="val-name">Product Engineering</div>
                <div class="val-desc">
                  From product architecture to production-ready implementation.
                </div>
              </div>
              <div class="val-card">
                <div class="val-icon">🤖</div>
                <div class="val-name">AI & Automation</div>
                <div class="val-desc">
                  AI-powered workflows, intelligent applications, and automation.
                </div>
              </div>
              <div class="val-card">
                <div class="val-icon">✨</div>
                <div class="val-name">Digital Experiences</div>
                <div class="val-desc">
                  Web, mobile, and user interfaces designed around real users.
                </div>
              </div>
              <div class="val-card">
                <div class="val-icon">☁️</div>
                <div class="val-name">Cloud & Security</div>
                <div class="val-desc">
                  Scalable infrastructure and security-conscious engineering.
                </div>
              </div>
              <div class="val-card">
                <div class="val-icon">📱</div>
                <div class="val-name">Custom Software</div>
                <div class="val-desc">
                  Tailored solutions for complex business workflows.
                </div>
              </div>
              <div class="val-card">
                <div class="val-icon">🎨</div>
                <div class="val-name">UI/UX Design</div>
                <div class="val-desc">
                  Intuitive and engaging user interfaces.
                </div>
              </div>
            </div>"""
html = re.sub(r'<div class="values-grid reveal reveal-delay-2">.*?</div>\s*</div>\s*</div>\s*</section>', services_html + '\n          </div>\n        </section>', html, flags=re.DOTALL)

# Team
html = html.replace('Five passionate technologists driving Vision X — each bringing\n            unique expertise to the table.', 'The engineering and design team driving VisionX Nexus — each bringing unique expertise to the table.')

# Projects
html = html.replace('<div class="section-tag">Featured Works</div>', '<div class="section-tag">Selected Work</div>')
html = html.replace("What we've <span class=\"purple\">built.</span>", "Projects We've <span class=\"purple\">Built.</span>")

# Tech stack
html = html.replace('<div class="section-tag">Tech Stack</div>', '<div class="section-tag">Built With Modern Engineering</div>')

# Contact
html = html.replace('Have an idea, a project, or just want to connect? Reach out.', "Let's turn the idea into a practical, scalable digital product.")

# Footer
html = html.replace('Vision <span class="purple">X</span>', 'VISIONX <span class="purple">NEXUS</span>')
html = html.replace('BUILDING THE FUTURE', 'Product Engineering &amp; Software Development')
html = html.replace('© 2026 Team Vision X.', '© 2026 VisionX Nexus. All rights reserved.')

# General replaces
html = html.replace('Team Vision X', 'VisionX Nexus')
html = html.replace('student innovation team', 'product engineering company')
html = html.replace('student-led team', 'team')
html = html.replace('student team', 'team')


with open(html_path, "w", encoding="utf-8") as f:
    f.write(html)

with open(js_path, "r", encoding="utf-8") as f:
    js = f.read()

js = js.replace('Team Vision X', 'VisionX Nexus')
js = js.replace('Vision X', 'VisionX Nexus')
js = js.replace('student innovation team', 'product engineering company')

with open(js_path, "w", encoding="utf-8") as f:
    f.write(js)

print("Files updated successfully!")
