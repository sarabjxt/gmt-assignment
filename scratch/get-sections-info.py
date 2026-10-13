import re, glob, json

sec_files = [
    ('Section 3: Who we help', 'scratch/sec_3.html', 'scratch/sec_3_styles.css'),
    ('Section 4: You deserve a place', 'scratch/sec_4.html', 'scratch/sec_4_styles.css'),
    ('Section 5: Our areas of expertise', 'scratch/sec_5.html', 'scratch/sec_5_styles.css'),
    ('Section 6: Were here to make a difference', 'scratch/sec_6.html', 'scratch/sec_6_styles.css'),
    ('Section 7: Honoring where youve been', 'scratch/sec_7.html', 'scratch/sec_7_styles.css'),
    ('Section 8: Our specialties include', 'scratch/sec_8.html', 'scratch/sec_8_styles.css'),
    ('Section 9: Find a therapist who is right fit', 'scratch/sec_9.html', 'scratch/sec_9_styles.css'),
    ('Section 10: Footer Logo & Links', 'scratch/sec_10.html', 'scratch/sec_10_styles.css'),
    ('Section 11: Footer Bottom / Disclaimer', 'scratch/sec_11.html', 'scratch/sec_11_styles.css'),
]

for title, h_path, c_path in sec_files:
    print(f"\n==================== {title} ====================")
    with open(h_path) as f: html = f.read()
    with open(c_path) as f: css = f.read()

    # theme
    m_theme = re.search(r'data-section-theme=\"([^\"]*)\"', html)
    theme = m_theme.group(1) if m_theme else 'unknown'
    print(f"Theme: {theme}")

    # fluid engine grid
    m_grid = re.search(r'\.(fe-[0-9a-f]{24})\s*\{([\s\S]*?)\}', css)
    if m_grid:
        g_name = m_grid.group(1)
        g_body = m_grid.group(2)
        m_rows = re.search(r'grid-template-rows:\s*([^;]+);', g_body)
        m_gap = re.search(r'column-gap:\s*([^;]+);', g_body)
        print(f"Grid: {g_name}, Mobile Rows: {m_rows.group(1) if m_rows else '?'}, Col Gap: {m_gap.group(1) if m_gap else '?'}")

    # desktop grid
    m_dgrid = re.search(r'@media\s*\(min-width:\s*768px\)[\s\S]*?grid-template-rows:\s*([^;]+);', css)
    if m_dgrid:
        print(f"Desktop Rows: {m_dgrid.group(1)}")

    # blocks
    blocks = re.findall(r'<div class=\"fe-block ([^\"]*)\"[\s\S]*?</div>\s*</div>', html)
    print(f"Blocks count: {len(blocks)}")
    for b in blocks:
        ga_m = re.search(rf'\.{b}\s*\{{[^}}]*grid-area:([^;]+);', css)
        ga_d = re.search(rf'@media[^{{]*\{{[^{{]*\.{b}\s*\{{[^}}]*grid-area:([^;]+);', css)
        print(f"  {b}: mobile=[{ga_m.group(1).strip() if ga_m else '?'}] desktop=[{ga_d.group(1).strip() if ga_d else '?'}]")

