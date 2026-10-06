import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# 1. Remove stats-bar
# It looks like: <div class="stats-bar"> ... </div>
# We can use regex to remove it.
html = re.sub(r'<div class="stats-bar">.*?</div>\s*(?=<section id="positioning")', '', html, flags=re.DOTALL)

# 2. Extract sections
def extract_section(section_id, html):
    # Matches from <section id="XYZ" to the next <section or <div class="contact-wrap
    pattern = rf'(<section id="{section_id}".*?)(?=\n\s*<section id="|\n\s*<div class="contact-wrap)'
    match = re.search(pattern, html, flags=re.DOTALL)
    if not match:
        return ""
    return match.group(1)

hero = extract_section('hero', html)
positioning = extract_section('positioning', html)
services = extract_section('services', html)
about = extract_section('about', html)
team = extract_section('team', html)
projects = extract_section('projects', html)
achievements = extract_section('achievements', html)
tech = extract_section('tech', html)

# 3. Text updates
# Projects
projects = projects.replace("Projects We've Built.", "Projects We've Built")
projects = projects.replace("From blockchain to AI — projects crafted with purpose and precision.", "Selected digital products, prototypes, and technical projects built by the TechCraft team.")

# Technology
tech = tech.replace("Tools we wield.", "Technology Stack")
tech = tech.replace("Tools we <span class=\"purple\">wield.</span>", "Technology <span class=\"purple\">Stack</span>")
tech = tech.replace("The languages, frameworks, and tools we use to bring ideas to life.", "Technologies we use to design, build, deploy, and secure digital products.")

# About
about = about.replace("TechCraft is a collective of visionary developers", "TechCraft is a technology-driven product engineering company focused on building modern digital solutions for startups, businesses, and emerging ventures")
about = about.replace("About TechCraft", "Product Engineering & Design")
# Remove emoji from about "🤖 Web & Mobile App Development..." -> SVG or just remove emoji
# Wait, let's just strip emojis from about section.
about = re.sub(r'[⚙️🤖✨☁️🌐📱💻🎨🔒🏆💼📜🚀🌍]', '', about)

# Team
team = team.replace("Meet the builders.", "Meet the Builders.")
team = team.replace("Meet the <span class=\"purple\">builders.</span>", "Meet the <span class=\"purple\">Builders.</span>")
team = team.replace("The minds behind the magic.", "The engineering and design team behind TechCraft.")

# Services
services = services.replace("What We Build.", "What We Build")
services = services.replace("What We <span class=\"purple\">Build.</span>", "What We <span class=\"purple\">Build</span>")
services = services.replace("We specialize in cutting-edge technologies to deliver scalable, secure, and user-centric solutions.", "From digital products to intelligent systems, we combine engineering, design, and practical product thinking to solve real problems.")

# Achievements
achievements = achievements.replace("Achievements", "Recognition & Experience", 1) # section-tag
achievements = achievements.replace("25+ Participated", "25+ Hackathon Participations")

# 4. Reconstruct HTML
# Find where hero ends
hero_end = html.find('</section>', html.find('<section id="hero"')) + 10

pre_sections = html[:hero_end]
post_sections = html[html.find('<div class="contact-wrap'):]

# Ensure stats bar is removed from pre_sections if it was inside hero? No, it's after hero.
# Actually, let's just split by <section id="positioning"
split_index = html.find('<section id="positioning"')
pre_sections = html[:split_index]
# Remove stats bar from pre_sections
pre_sections = re.sub(r'<div class="stats-bar">.*?</div>\s*$', '', pre_sections, flags=re.DOTALL)


new_html = pre_sections + '\n    ' + positioning + '\n    ' + services + '\n    ' + projects + '\n    ' + about + '\n    ' + team + '\n    ' + achievements + '\n    ' + tech + '\n    ' + post_sections

with open('index_new.html', 'w', encoding='utf-8') as f:
    f.write(new_html)
