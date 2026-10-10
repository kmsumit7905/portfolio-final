import os
from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable, Table, TableStyle
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors

pdf_path = os.path.join(os.getcwd(), 'resume', 'resume.pdf')
doc = SimpleDocTemplate(
    pdf_path,
    pagesize=letter,
    rightMargin=36,
    leftMargin=36,
    topMargin=36,
    bottomMargin=36
)

styles = getSampleStyleSheet()

# Custom styles
primary_color = colors.HexColor('#1e293b')
accent_color = colors.HexColor('#2563eb')
subtext_color = colors.HexColor('#475569')

name_style = ParagraphStyle(
    'NameStyle',
    parent=styles['Normal'],
    fontName='Helvetica-Bold',
    fontSize=20,
    leading=24,
    textColor=primary_color,
    alignment=1 # Center
)

title_style = ParagraphStyle(
    'TitleStyle',
    parent=styles['Normal'],
    fontName='Helvetica-Bold',
    fontSize=11,
    leading=14,
    textColor=accent_color,
    alignment=1
)

contact_style = ParagraphStyle(
    'ContactStyle',
    parent=styles['Normal'],
    fontName='Helvetica',
    fontSize=8.5,
    leading=12,
    textColor=subtext_color,
    alignment=1
)

section_heading_style = ParagraphStyle(
    'SectionHeadingStyle',
    parent=styles['Normal'],
    fontName='Helvetica-Bold',
    fontSize=11,
    leading=14,
    textColor=accent_color,
    spaceAfter=4
)

item_title_style = ParagraphStyle(
    'ItemTitleStyle',
    parent=styles['Normal'],
    fontName='Helvetica-Bold',
    fontSize=9.5,
    leading=12,
    textColor=primary_color
)

item_subtitle_style = ParagraphStyle(
    'ItemSubtitleStyle',
    parent=styles['Normal'],
    fontName='Helvetica-Oblique',
    fontSize=8.5,
    leading=11,
    textColor=subtext_color
)

body_text_style = ParagraphStyle(
    'BodyTextStyle',
    parent=styles['Normal'],
    fontName='Helvetica',
    fontSize=8.5,
    leading=11.5,
    textColor=colors.HexColor('#334155')
)

bullet_style = ParagraphStyle(
    'BulletStyle',
    parent=styles['Normal'],
    fontName='Helvetica',
    fontSize=8.5,
    leading=11.5,
    leftIndent=12,
    textColor=colors.HexColor('#334155')
)

story = []

# Header
story.append(Paragraph("SUMIT KUMAR", name_style))
story.append(Spacer(1, 2))
story.append(Paragraph("BCA Final-Year Student | Java Backend Developer | Aspiring Software Developer", title_style))
story.append(Spacer(1, 3))
story.append(Paragraph("Lucknow, India &nbsp;|&nbsp; sumit.kumar@example.com &nbsp;|&nbsp; github.com/YOUR_GITHUB_USERNAME &nbsp;|&nbsp; linkedin.com/in/sumit-kumar-979b58328", contact_style))
story.append(Spacer(1, 6))
story.append(HRFlowable(width="100%", thickness=1, color=colors.HexColor('#cbd5e1'), spaceBefore=2, spaceAfter=8))

# Summary
story.append(Paragraph("PROFESSIONAL SUMMARY", section_heading_style))
story.append(Paragraph(
    "Passionate BCA final-year student at Integral University focused on building practical, reliable software solutions using Java, Spring Boot, MySQL, and modern web technologies. Dedicated to continuous learning, strong object-oriented principles, and clean API design. Eager to contribute to software development teams as a fresher software engineer or backend developer intern.",
    body_text_style
))
story.append(Spacer(1, 7))

# Technical Skills
story.append(Paragraph("TECHNICAL SKILLS", section_heading_style))
skills_data = [
    [Paragraph("<b>Programming Languages:</b>", item_title_style), Paragraph("Java, Python, JavaScript, HTML5, CSS3, SQL", body_text_style)],
    [Paragraph("<b>Backend & Frameworks:</b>", item_title_style), Paragraph("Spring Boot, RESTful APIs, Node.js (basics)", body_text_style)],
    [Paragraph("<b>Databases & Storage:</b>", item_title_style), Paragraph("MySQL, Relational Database Management (RDBMS)", body_text_style)],
    [Paragraph("<b>Developer Tools:</b>", item_title_style), Paragraph("Git, GitHub, Docker (basics), Postman, VS Code, IntelliJ IDEA", body_text_style)],
    [Paragraph("<b>Core CS Concepts:</b>", item_title_style), Paragraph("OOP (Object-Oriented Programming), DBMS, Data Structures & Algorithms (DSA), Computer Networks, OS", body_text_style)]
]
skills_table = Table(skills_data, colWidths=[130, 410])
skills_table.setStyle(TableStyle([
    ('VALIGN', (0,0), (-1,-1), 'TOP'),
    ('BOTTOMPADDING', (0,0), (-1,-1), 2),
    ('TOPPADDING', (0,0), (-1,-1), 2),
    ('LEFTPADDING', (0,0), (-1,-1), 0),
    ('RIGHTPADDING', (0,0), (-1,-1), 0),
]))
story.append(skills_table)
story.append(Spacer(1, 7))

# Projects
story.append(Paragraph("PRACTICAL PROJECTS", section_heading_style))

# Project 1
story.append(Paragraph("<b>Student Management System</b> | <i>Java, Spring Boot, MySQL, REST API, HTML/CSS/JS</i>", item_title_style))
story.append(Paragraph("• Built a full-stack student management application handling records, course enrollment, and attendance tracking.", bullet_style))
story.append(Paragraph("• Implemented complete CRUD RESTful APIs with Spring Boot and persistent storage via MySQL database.", bullet_style))
story.append(Paragraph("• Designed responsive web interfaces featuring search, filtering, and student record management modules.", bullet_style))
story.append(Spacer(1, 4))

# Project 2
story.append(Paragraph("<b>AI Customer Support Chatbot</b> | <i>Java, Spring Boot, REST API, JavaScript, MySQL</i>", item_title_style))
story.append(Paragraph("• Developed an automated customer assistance chatbot interface handling user queries and frequently asked questions.", bullet_style))
story.append(Paragraph("• Designed Spring Boot REST endpoints to process incoming messages, match FAQ responses, and log support queries.", bullet_style))
story.append(Paragraph("• Created clean, asynchronous chat interface with conversation history and admin FAQ management capabilities.", bullet_style))
story.append(Spacer(1, 4))

# Project 3
story.append(Paragraph("<b>Personal Expense Tracker</b> | <i>Java, Spring Boot, MySQL, JavaScript, HTML5/CSS3</i>", item_title_style))
story.append(Paragraph("• Created a financial management web application enabling users to log income, categorize expenditures, and track budgets.", bullet_style))
story.append(Paragraph("• Engineered backend calculation services to compute monthly totals, expense distributions, and net balances.", bullet_style))
story.append(Paragraph("• Built dynamic filtering by month and category with instant dashboard analytical overviews.", bullet_style))
story.append(Spacer(1, 7))

# Education
story.append(Paragraph("EDUCATION", section_heading_style))
edu_data = [
    [Paragraph("<b>Bachelor of Computer Applications (BCA)</b> — <i>Integral University</i>", item_title_style), Paragraph("<b>2023 – 2026 (Final Year)</b>", item_title_style)],
    [Paragraph("Key Coursework: Java Programming, Database Management Systems, Data Structures, Web Development, Software Engineering", item_subtitle_style), Paragraph("Lucknow, India", item_subtitle_style)],
    [Paragraph("<b>Higher Secondary Education (12th Standard)</b> — <i>Science / Mathematics Stream</i>", item_title_style), Paragraph("<b>2023</b>", item_title_style)],
    [Paragraph("Focus on Mathematics, Computer Science, and Physics fundamentals [Score: Editable Placeholder]", item_subtitle_style), Paragraph("[Board Placeholder]", item_subtitle_style)]
]
edu_table = Table(edu_data, colWidths=[400, 140])
edu_table.setStyle(TableStyle([
    ('VALIGN', (0,0), (-1,-1), 'TOP'),
    ('BOTTOMPADDING', (0,0), (-1,-1), 1),
    ('TOPPADDING', (0,0), (-1,-1), 1),
    ('LEFTPADDING', (0,0), (-1,-1), 0),
    ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ('ALIGN', (1,0), (1,-1), 'RIGHT')
]))
story.append(edu_table)
story.append(Spacer(1, 7))

# Learning & Academic Highlights
story.append(Paragraph("ACTIVITIES & LEARNING HIGHLIGHTS", section_heading_style))
story.append(Paragraph("• <b>Hands-on Software Development:</b> Actively architecting full-stack applications to reinforce Object-Oriented principles and clean code.", bullet_style))
story.append(Paragraph("• <b>Algorithm & Coding Practice:</b> Regular problem-solving in Java focusing on arrays, strings, recursion, and core data structures.", bullet_style))
story.append(Paragraph("• <b>Modern Developer Tooling:</b> Utilizing Git & GitHub for disciplined version control, IntelliJ IDEA, and Postman for REST API testing.", bullet_style))
story.append(Paragraph("• <b>Technical Curiosity:</b> Continuously exploring Docker fundamentals and Spring Boot ecosystem enhancements.", bullet_style))

doc.build(story)
print("Resume generated successfully at:", pdf_path)
