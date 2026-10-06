import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# We need to find the <section id="about" ...> to </section> block.
about_section_pattern = re.compile(r'(<section id="about".*?</section>)', re.DOTALL)
about_match = about_section_pattern.search(html)

if about_match:
    old_about = about_match.group(1)
    
    new_sections = """<section id="positioning" style="padding: 0; max-width: 100%; margin-bottom: 80px;">
          <div class="section-tag">Company Positioning</div>
          <div class="about-grid" style="grid-template-columns: 1fr; gap: 40px;">
            <div class="about-text reveal">
              <h2>
                From Idea to <span class="purple">Product.</span>
              </h2>
              <p style="max-width: 600px; font-size: 16px;">
                We combine product thinking, modern engineering, and user-focused design to turn ideas into reliable digital products.
              </p>
            </div>
            <div class="values-grid reveal reveal-delay-2" style="grid-template-columns: repeat(4, 1fr);">
              <div class="val-card">
                <div class="val-icon">⚙️</div>
                <div class="val-name">Product Engineering</div>
                <div class="val-desc">From product architecture to production-ready implementation.</div>
              </div>
              <div class="val-card">
                <div class="val-icon">🤖</div>
                <div class="val-name">AI & Automation</div>
                <div class="val-desc">AI-powered workflows, intelligent applications, and automation.</div>
              </div>
              <div class="val-card">
                <div class="val-icon">✨</div>
                <div class="val-name">Digital Experiences</div>
                <div class="val-desc">Web, mobile, and user interfaces designed around real users.</div>
              </div>
              <div class="val-card">
                <div class="val-icon">☁️</div>
                <div class="val-name">Cloud & Security</div>
                <div class="val-desc">Scalable infrastructure and security-conscious engineering.</div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" style="padding: 0; max-width: 100%; margin-bottom: 80px;">
          <div class="section-tag">Services</div>
          <h2 class="reveal">What We <span class="purple">Build.</span></h2>
          <div class="values-grid reveal reveal-delay-2" style="grid-template-columns: repeat(3, 1fr); margin-top: 40px;">
              <div class="val-card"><div class="val-icon">🌐</div><div class="val-name">Web Applications</div><div class="val-desc">Modern, responsive, and scalable web platforms.</div></div>
              <div class="val-card"><div class="val-icon">📱</div><div class="val-name">Mobile Applications</div><div class="val-desc">Native and cross-platform mobile experiences.</div></div>
              <div class="val-card"><div class="val-icon">🤖</div><div class="val-name">AI & Automation</div><div class="val-desc">Intelligent systems to automate and optimize workflows.</div></div>
              <div class="val-card"><div class="val-icon">💻</div><div class="val-name">Custom Software</div><div class="val-desc">Tailored solutions for complex business needs.</div></div>
              <div class="val-card"><div class="val-icon">🎨</div><div class="val-name">UI/UX Design</div><div class="val-desc">Intuitive, user-centered interface design.</div></div>
              <div class="val-card"><div class="val-icon">☁️</div><div class="val-name">Cloud Solutions</div><div class="val-desc">Robust cloud infrastructure and deployment.</div></div>
              <div class="val-card"><div class="val-icon">🔒</div><div class="val-name">Cybersecurity</div><div class="val-desc">Secure systems and vulnerability assessments.</div></div>
          </div>
        </section>

        <section id="about" style="padding: 0; max-width: 100%">
          <div class="section-tag">About VisionX Nexus</div>
          <div class="about-grid" style="grid-template-columns: 1fr; gap: 40px;">
            <div class="about-text reveal">
              <h2>
                Product Engineering<br /><span class="purple">&amp; Design.</span>
              </h2>
              <p style="max-width: 800px; font-size: 16px;">
                VisionX Nexus is a technology-driven product engineering company focused on building modern digital solutions for startups, businesses, and emerging ventures.
              </p>
              <p style="max-width: 800px; font-size: 16px;">
                Our work spans web and mobile applications, AI-powered systems, custom software, cloud solutions, UI/UX, and cybersecurity. We combine engineering with practical product thinking to build solutions that are scalable, usable, and designed around real-world problems.
              </p>
            </div>
          </div>
        </section>"""
    
    html = html.replace(old_about, new_sections)
    
    # Let's fix the values-grid CSS in mobile to wrap
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(html)
        
    print("Updated About/Positioning/Services")
