import os
import re

files_to_check = [
    'index.html',
    'script.js',
    'README.md',
    '../README.md'
]

replacements = [
    (r'\bVISIONX NEXUS\b', 'TECHCRAFT'),
    (r'\bVISIONX\b', 'TECHCRAFT'),
    (r'\bVisionX Nexus\b', 'TechCraft'),
    (r'\bVision X Nexus\b', 'TechCraft'),
    (r'\bVisionX\b', 'TechCraft'),
    (r'\bVision X\b', 'TechCraft'),
]

total_replacements = 0

for file_path in files_to_check:
    if not os.path.exists(file_path):
        continue
        
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    original_content = content
    
    # We want to avoid replacing URLs or emails if possible, but let's just do text replacements.
    # To avoid URLs, we can use a callback or just trust the regex.
    # URLs typically have no spaces, so Vision X Nexus is safe.
    # VisionX and Vision X are the ones to be careful with.
    # Let's do the exact case replacements.
    
    for old, new in replacements:
        # Find all occurrences
        matches = re.findall(old, content)
        total_replacements += len(matches)
        content = re.sub(old, new, content)
        
    if original_content != content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {file_path}")

print(f"Total replacements: {total_replacements}")
