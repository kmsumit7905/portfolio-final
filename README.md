# Sumit Kumar - Developer Portfolio

A modern, responsive, and professional personal portfolio website for **Sumit Kumar**, BCA Final-Year Student at Integral University and aspiring Software Developer / Java Backend Developer.

Built with clean semantic HTML5, modern vanilla CSS3 (design tokens, glassmorphism, responsive grid/flexbox), and vanilla JavaScript (theme toggle, interactive project modals, scroll animations, mobile drawer).

---

## 🌟 Key Features

- **Developer Aesthetic**: Modern dark/light theme toggle, glowing ambient accents, terminal badges, and clean typography.
- **Honest Fresher/Student Positioning**: Accurately highlights academic milestones, hands-on self-built projects, core computer science concepts, and practical learning without exaggerated work claims.
- **Interactive Project Showcase**:
  - **Student Management System** (Java, Spring Boot, MySQL, REST API)
  - **AI Customer Support Chatbot** (Spring Boot, FAQ matching engine, REST API)
  - **Personal Expense Tracker** (Java, Spring Boot, MySQL, Transaction analytics)
  - In-depth **"View Details" Modal** with architecture breakdowns, database entity schemas, and REST endpoints.
  - Interactive live preview modal / mini-chat widget.
- **Interactive Chronological Learning Timeline**:
  - Highlights educational progression from 12th (2023) → BCA Integral University (2024) → Fundamentals → Backend Development → Practical Projects → Final Year (2026).
  - Fully customizable via configuration in `js/script.js`.
- **Honest Technical Skills**:
  - Categorized into Programming, Backend, Database, Tools, and CS Concepts.
  - Transparent skill levels (`Intermediate`, `Familiar`, `Beginner`) rather than misleading percentage bars.
- **GitHub / Code Showcase**:
  - Simulated active contribution heatmap, repository cards, and links to explore source code.
- **Education & Certifications**:
  - Academic timeline featuring BCA at Integral University and 12th Higher Secondary Education.
  - Coursework & certification cards with explicit status labels (`[In Progress]`, `[Completed]`, `[Placeholder]`).
- **Interactive Resume Modal & Download**:
  - Direct download button for `resume/resume.pdf` as well as an in-page resume preview modal.
- **Working Contact Section**:
  - Client-side validated contact form with status feedback.
  - Quick 1-click "Copy Email" action.

---

## 📂 Project Directory Structure

```
portfolio/
├── index.html                   # Main portfolio webpage
├── css/
│   └── style.css                # Design system, CSS variables, layout, animations & themes
├── js/
│   └── script.js                # Interactive logic, modals, theme switcher, timeline data
├── assets/
│   ├── images/
│   │   ├── profile.jpg          # Sumit's developer portrait
│   │   ├── project1-student-management.jpg
│   │   ├── project2-chatbot.jpg
│   │   └── project3-expense-tracker.jpg
│   └── icons/                   # Custom icons and vector assets
├── resume/
│   └── resume.pdf               # Sumit's downloadable resume file
└── README.md                    # Documentation & customization guide
```

---

## 🚀 How to Run Locally

You can run this portfolio website locally in any of the following ways:

### Method 1: Direct File Opening
Double-click `index.html` or right-click and select **Open with Google Chrome / Microsoft Edge / Firefox**.

### Method 2: Python HTTP Server (Recommended)
Open a terminal inside the project directory and run:
```bash
python -m http.server 3000
```
Then visit `http://localhost:3000` in your web browser.

### Method 3: VS Code Live Server
1. Open this folder in VS Code.
2. Install the **Live Server** extension (by Ritwick Dey).
3. Click **"Go Live"** in the bottom status bar or right-click `index.html` -> **"Open with Live Server"**.

### Method 4: Node.js (npx serve)
```bash
npx serve .
```

---

## ✏️ How to Customize

All personal details and placeholders can be updated easily:

### 1. Update Contact & Social Links
In `index.html` and `js/script.js`:
- Search for `YOUR_GITHUB_USERNAME` and replace with your GitHub handle (e.g., `sumitkumar-dev`).
- LinkedIn profile: `https://www.linkedin.com/in/sumit-kumar-979b58328/`
- Search for `sumit.kumar@example.com` and replace with your actual email address.

### 2. Update Timeline Milestones
In `js/script.js`, edit the `TIMELINE_DATA` array:
```javascript
const TIMELINE_DATA = [
  {
    year: "2023",
    title: "Completed 12th Higher Secondary",
    // modify details as needed...
  },
  // ...
];
```

### 3. Update Resume
Replace the file `resume/resume.pdf` with your updated resume PDF. Keep the filename as `resume.pdf` or update the file path in `index.html`.

### 4. Update Profile Picture
Replace `assets/images/profile.jpg` with your own square photo (recommended resolution: 600x600px).

---

## 🛠️ Tech Stack Used for the Portfolio

- **Markup**: Semantic HTML5 (W3C compliant, accessibility tags, OpenGraph SEO meta)
- **Styling**: Vanilla CSS3 (Custom Properties, Flexbox, CSS Grid, Glassmorphism, Responsive Media Queries)
- **Icons**: Font Awesome 6 & Devicon CDN vector icon sets
- **Fonts**: Google Fonts (*Plus Jakarta Sans* & *JetBrains Mono*)
- **Interactions**: Vanilla JavaScript ES6+ (No bulky dependencies)

---

## 📜 License & Copyright

© 2026 **Sumit Kumar**. Built with passion for technology.  
*Learning. Building. Improving.*
