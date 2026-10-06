from PIL import Image, ImageDraw
import os

img = Image.open('logo.png').convert("RGBA")
width, height = img.size

# Create a mask to make the corners transparent
mask = Image.new('L', (width, height), 0)
draw = ImageDraw.Draw(mask)
draw.ellipse((0, 0, width, height), fill=255)

# Apply mask
img.putalpha(mask)

# Save it as true PNG
img.save('logo.png', format='PNG')
