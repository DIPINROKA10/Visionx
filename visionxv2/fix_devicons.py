import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Replace SimpleIcons with Devicons where applicable
html = html.replace('https://cdn.simpleicons.org/react', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg')
html = html.replace('https://cdn.simpleicons.org/html5', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg')
html = html.replace('https://cdn.simpleicons.org/tailwindcss', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg')
html = html.replace('https://cdn.simpleicons.org/vuedotjs', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg')
html = html.replace('https://cdn.simpleicons.org/python', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg')
html = html.replace('https://cdn.simpleicons.org/fastapi', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg')
html = html.replace('https://cdn.simpleicons.org/tensorflow', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg')
html = html.replace('https://cdn.simpleicons.org/nodedotjs', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg')
html = html.replace('https://cdn.simpleicons.org/docker', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg')
# Leave PowerBI as SimpleIcons since Devicon doesn't have it

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
