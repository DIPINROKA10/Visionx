import os
import re

files_to_check = [
    'achievements.html'
]

replacements = [
    (r'\bVISIONX NEXUS\b', 'TECHCRAFT'),
    (r'\bVISIONX\b', 'TECHCRAFT'),
    (r'\bVISION X\b', 'TECHCRAFT'),
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
    
    for old, new in replacements:
        matches = re.findall(old, content)
        total_replacements += len(matches)
        content = re.sub(old, new, content)
        
    # Manual fixes for achievements footer if present
    content = content.replace('Ac 2026 Team TechCraft.', '© 2026 TechCraft. All rights reserved.')
        
    if original_content != content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {file_path}")

print(f"Total replacements: {total_replacements}")
