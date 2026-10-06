with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('style="grid-template-columns: repeat(4, 1fr);"', 'class="values-grid values-grid-4"')
content = content.replace('class="values-grid reveal reveal-delay-2" class="values-grid values-grid-4"', 'class="values-grid values-grid-4 reveal reveal-delay-2"')

content = content.replace('style="grid-template-columns: repeat(3, 1fr); margin-top: 40px;"', 'class="values-grid values-grid-3" style="margin-top: 40px;"')
content = content.replace('class="values-grid reveal reveal-delay-2" class="values-grid values-grid-3"', 'class="values-grid values-grid-3 reveal reveal-delay-2"')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

css_append = """
.values-grid-4 {
  grid-template-columns: repeat(4, 1fr);
}
.values-grid-3 {
  grid-template-columns: repeat(3, 1fr);
}

@media (max-width: 992px) {
  .values-grid-4 {
    grid-template-columns: repeat(2, 1fr);
  }
  .values-grid-3 {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .values-grid-4, .values-grid-3 {
    grid-template-columns: 1fr;
  }
}
"""

with open('style.css', 'a', encoding='utf-8') as f:
    f.write(css_append)
