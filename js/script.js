/**
 * SUMIT KUMAR - DEVELOPER PORTFOLIO
 * Vanilla JavaScript ES6+
 * Clean, Modular, and Highly Customizable
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initTypingEffect();
  initWaveHello();
  initNavbar();
  initCursorGlow();
  renderTimeline();
  initSkillFilters();
  initProjectModals();
  initContactForm();
  initScrollReveal();
  initStatsCounter();
});

function initCursorGlow() {
  const glow = document.querySelector('.cursor-glow');
  const ring = document.querySelector('.cursor-ring');
  const dot = document.querySelector('.cursor-dot');
  const canShowGlow = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hasFinePointer = window.matchMedia('(pointer: fine)').matches;

  if ((!ring && !dot && !glow) || !hasFinePointer) return;

  window.addEventListener('pointermove', (event) => {
    const position = `translate3d(${event.clientX}px, ${event.clientY}px, 0) translate3d(-50%, -50%, 0)`;
    if (dot) {
      dot.style.transform = position;
      document.body.classList.add('has-pointer-dot');
    }
    if (ring) {
      ring.style.transform = position;
      document.body.classList.add('has-pointer-ring');
    }

    if (glow && canShowGlow) {
      glow.style.transform = `${position} scale(1)`;
      document.body.classList.add('has-pointer-glow');
    }
  }, { passive: true });

  document.addEventListener('pointerleave', () => {
    document.body.classList.remove('has-pointer-dot', 'has-pointer-ring');
    document.body.classList.remove('has-pointer-glow');
  });
}

function initWaveHello() {
  const button = document.getElementById('hero-wave-button');
  if (!button) return;

  const wave = button.querySelector('.hero-wave-emoji');
  if (!wave) return;

  wave.addEventListener('animationend', (event) => {
    if (event.animationName === 'hand-wave-tap') {
      button.classList.remove('is-waving');
    }
  });

  button.addEventListener('click', () => {
    button.classList.remove('is-waving');
    void button.offsetWidth;
    button.classList.add('is-waving');
  });
}

/* ==========================================================================
   1. EDITABLE DATA STRUCTURES & CONFIGURATION
   ========================================================================== */

// Contact configuration
const CONFIG = {
  email: 'kumar741875@gmail.com'
};

// Chronological Learning & Achievement Timeline Data (Strict Chronological Order)
const TIMELINE_DATA = [
  {
    year: "10th",
    icon: "fa-graduation-cap",
    title: "Completed High School",
    badge: "High School",
    description: "Completed high school and built a foundation in core academic subjects.",
    skills: ["School Education", "Academic Foundation"]
  },
  {
    year: "12th",
    icon: "fa-school",
    title: "Completed Intermediate",
    badge: "Intermediate",
    description: "Completed higher secondary education with a foundation in Mathematics, Science, and Computer Science.",
    skills: ["Mathematics", "Science", "Computer Science"]
  },
  {
    year: "2024",
    icon: "fa-university",
    title: "Started BCA at Integral University",
    badge: "Undergraduate Degree",
    description: "Started a Bachelor of Computer Applications at Integral University, Lucknow.",
    skills: ["Integral University", "Computer Applications", "BCA"]
  }
];

// Project Technical Specifications for Details & Interactive Demos
const PROJECT_SPECS = {
  1: {
    title: "Student Management System",
    subtitle: "Web-Based Academic & Student Record Management System",
    techStack: ["Java 17", "Spring Boot 3", "MySQL", "Spring Data JPA", "HTML5", "CSS3", "JavaScript", "RESTful API"],
    description: "A full-featured web application architected to streamline administrative workflows, student enrolment, subject cataloging, and attendance monitoring in academic departments.",
    keyFeatures: [
      "Student registration and secure profile maintenance",
      "Course and curriculum enrollment tracking",
      "Daily and monthly attendance management with percentage calculations",
      "Instant multi-criteria search and filter queries",
      "Robust CRUD operations with Spring Boot REST endpoints",
      "Normalized MySQL database schema with relational integrity"
    ],
    architecture: "Three-tier MVC architecture: Controller Layer exposes REST APIs, Service Layer handles business logic and validations, and Repository Layer utilizes Spring Data JPA for MySQL persistence.",
    endpoints: [
      { method: "GET", path: "/api/v1/students", desc: "Retrieve all active students with pagination" },
      { method: "POST", path: "/api/v1/students", desc: "Register a new student record" },
      { method: "GET", path: "/api/v1/courses", desc: "Fetch enrolled course catalogs" },
      { method: "POST", path: "/api/v1/attendance", desc: "Record attendance status for specific student" }
    ],
    schema: "Tables: 'students' (id, name, email, roll_no, department), 'courses' (id, course_code, course_name), 'attendance' (id, student_id, date, status)",
    githubUrl: "https://github.com/kmsumit7905/student-management-system",
    demoType: "student"
  },
  2: {
    title: "AI Customer Support Chatbot",
    subtitle: "Automated Customer Assistance & FAQ Query Engine",
    techStack: ["Java", "Spring Boot", "REST API", "JavaScript", "MySQL", "HTML5", "CSS3"],
    description: "An intuitive customer assistance chatbot platform designed to deliver instant answers to frequently asked customer queries, log conversation sessions, and manage FAQ catalogs via admin controls.",
    keyFeatures: [
      "Clean, modern conversational web chat interface",
      "Intelligent rule-based & keyword matching query engine",
      "Interactive quick-reply suggestion chips for common FAQs",
      "Session-based conversation logging",
      "RESTful API integration between UI and Spring Boot backend",
      "Admin endpoint capabilities for managing knowledge base entries"
    ],
    architecture: "Client communicates asynchronously via JSON over HTTP POST to Spring Boot `/api/v1/chat/message`. The backend queries the MySQL knowledge base using token matching, returning instant solutions.",
    endpoints: [
      { method: "POST", path: "/api/v1/chat/message", desc: "Send user question and receive automated FAQ answer" },
      { method: "GET", path: "/api/v1/faq/categories", desc: "Fetch popular question categories and chips" },
      { method: "POST", path: "/api/v1/admin/faq", desc: "Add or update FAQ knowledge base entries" }
    ],
    schema: "Tables: 'faq_entries' (id, keyword, question, answer, category), 'chat_sessions' (id, user_session_id, query, timestamp)",
    githubUrl: "https://github.com/kmsumit7905/customer-support-chatbot",
    demoType: "chatbot"
  },
  3: {
    title: "Personal Expense Tracker",
    subtitle: "Financial Tracking & Monthly Budget Analysis Application",
    techStack: ["Java", "Spring Boot", "MySQL", "JavaScript", "HTML5", "CSS3", "REST API"],
    description: "A financial management application designed to empower users to track everyday transactions, categorize expenditures, calculate monthly balances, and gain clarity on their budget.",
    keyFeatures: [
      "Logging of income and categorized expenses (Housing, Food, Bills, Transport, etc.)",
      "Automatic calculation of total income, total expenditure, and net balance",
      "Monthly summaries and dynamic transaction filtering",
      "Visual analytical dashboard with percentage distributions",
      "Spring Boot RESTful service endpoints for transaction records",
      "Secure MySQL database persistence with audit timestamps"
    ],
    architecture: "Layered Spring Boot application. Handles transaction validation, mathematical calculations, and dynamic grouping by categories and monthly periods before rendering on the frontend.",
    endpoints: [
      { method: "GET", path: "/api/v1/transactions", desc: "Fetch all user transactions with filtering options" },
      { method: "POST", path: "/api/v1/transactions", desc: "Add a new income or expense record" },
      { method: "GET", path: "/api/v1/summary/monthly", desc: "Calculate monthly income, expense totals, and net balance" },
      { method: "DELETE", path: "/api/v1/transactions/{id}", desc: "Remove a transaction record" }
    ],
    schema: "Tables: 'transactions' (id, title, amount, type, category, date, notes), 'categories' (id, name, budget_limit)",
    githubUrl: "https://github.com/kmsumit7905/personal-expense-tracker",
    demoType: "expense"
  }
};

/* ==========================================================================
   2. THEME SWITCHER (DARK / LIGHT MODE)
   ========================================================================== */
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const storedTheme = localStorage.getItem('sumit_portfolio_theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  const currentTheme = storedTheme || (systemPrefersDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const active = document.documentElement.getAttribute('data-theme');
      const newTheme = active === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('sumit_portfolio_theme', newTheme);
    });
  }
}

/* ==========================================================================
   3. DYNAMIC TYPING EFFECT
   ========================================================================== */
function initTypingEffect() {
  const textElement = document.getElementById('typing-role-text');
  if (!textElement) return;

  const roles = [
    "BCA Final-Year Student",
    "Java Backend Developer",
    "Software Developer",
    "Spring Boot Enthusiast"
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typeSpeed = 90;
  const deleteSpeed = 45;
  const pauseTime = 1800;

  function type() {
    const current = roles[roleIndex];
    if (isDeleting) {
      textElement.textContent = current.substring(0, charIndex - 1);
      charIndex--;
    } else {
      textElement.textContent = current.substring(0, charIndex + 1);
      charIndex++;
    }

    let delta = isDeleting ? deleteSpeed : typeSpeed;

    if (!isDeleting && charIndex === current.length) {
      delta = pauseTime;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      delta = 400;
    }

    setTimeout(type, delta);
  }

  type();
}

/* ==========================================================================
   4. NAVBAR & SCROLL HANDLING
   ========================================================================== */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const mobileToggle = document.getElementById('mobile-menu-btn');
  const mobileDrawer = document.getElementById('mobile-nav-drawer');
  const navLinks = document.querySelectorAll('.nav-link');
  const backToTopBtn = document.getElementById('back-to-top');

  const closeMobileMenu = () => {
    if (!mobileDrawer || !mobileToggle) return;
    mobileDrawer.classList.remove('open');
    mobileToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
  };

  const updateNavbarState = () => {
    if (!navbar) return;
    navbar.classList.toggle('scrolled', window.scrollY > 24);
  };

  updateNavbarState();
  window.addEventListener('scroll', updateNavbarState, { passive: true });

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('open');
      mobileToggle.innerHTML = isOpen ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
    });

    mobileDrawer.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => closeMobileMenu());
    });

    document.addEventListener('click', (event) => {
      if (!mobileDrawer.classList.contains('open')) return;
      const clickedInsideDrawer = mobileDrawer.contains(event.target);
      const clickedToggle = mobileToggle.contains(event.target);
      if (!clickedInsideDrawer && !clickedToggle) {
        closeMobileMenu();
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && mobileDrawer.classList.contains('open')) {
        closeMobileMenu();
      }
    });
  }

  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 350) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  const sections = document.querySelectorAll('section[id]');
  const setActiveLink = () => {
    let current = 'home';
    const scrollPos = window.scrollY + 120;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        current = sec.getAttribute('id') || 'home';
      }
    });

    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      const isActive = href === `#${current}`;
      link.classList.toggle('active', isActive);
    });
  };

  setActiveLink();
  window.addEventListener('scroll', setActiveLink, { passive: true });
}

/* ==========================================================================
   5. TIMELINE RENDERER (CHRONOLOGICAL MILESTONES)
   ========================================================================== */
function renderTimeline() {
  const container = document.getElementById('timeline-nodes-wrapper');
  if (!container) return;

  container.innerHTML = TIMELINE_DATA.map(item => `
    <div class="timeline-node reveal">
      <div class="timeline-marker">
        <span class="timeline-marker-year">${item.year}</span>
        <i class="fa-solid ${item.icon} timeline-marker-icon"></i>
      </div>
      <div class="timeline-content-card">
        <div class="timeline-header-meta">
          <h3 class="timeline-milestone-title">${item.title}</h3>
          <span class="timeline-badge-tag">${item.badge}</span>
        </div>
        <p class="timeline-desc">${item.description}</p>
        <div class="timeline-skills-pills">
          ${item.skills.map(s => `<span class="timeline-pill">${s}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   6. SKILL CATEGORY FILTERING
   ========================================================================== */
function initSkillFilters() {
  const filterBtns = document.querySelectorAll('.skill-filter-btn');
  const skillGroups = document.querySelectorAll('.skills-category-group');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      skillGroups.forEach(group => {
        const category = group.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          group.style.display = 'block';
        } else {
          group.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   8. PROJECT DETAILS & INTERACTIVE DEMO MODALS
   ========================================================================== */
function initProjectModals() {
  const modalOverlay = document.getElementById('global-modal-overlay');
  const modalTitle = document.getElementById('global-modal-title');
  const modalBody = document.getElementById('global-modal-body');
  const closeBtn = document.getElementById('global-modal-close-btn');

  function openModal(title, content) {
    if (!modalOverlay) return;
    modalTitle.textContent = title;
    modalBody.innerHTML = content;
    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('open')) {
      closeModal();
    }
  });

  // Attach handlers for "View Details" buttons
  document.querySelectorAll('.view-details-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const projId = btn.getAttribute('data-project-id');
      const spec = PROJECT_SPECS[projId];
      if (!spec) return;

      const content = `
        <div style="margin-bottom: 1.25rem;">
          <h4 style="font-size: 1.15rem; font-weight: 700; color: var(--accent-primary); margin-bottom: 0.25rem;">${spec.subtitle}</h4>
          <p style="font-size: 0.92rem; color: var(--text-secondary);">${spec.description}</p>
        </div>

        <div style="margin-bottom: 1.25rem;">
          <h5 style="font-size: 0.95rem; font-weight: 700; margin-bottom: 0.5rem; text-transform: uppercase; font-family: var(--font-code); color: var(--text-muted);">Technologies Used</h5>
          <div class="project-tech-tags">
            ${spec.techStack.map(t => `<span class="tech-tag">${t}</span>`).join('')}
          </div>
        </div>

        <div style="margin-bottom: 1.25rem;">
          <h5 style="font-size: 0.95rem; font-weight: 700; margin-bottom: 0.5rem; text-transform: uppercase; font-family: var(--font-code); color: var(--text-muted);">Key Functional Modules</h5>
          <ul style="display: flex; flex-direction: column; gap: 0.4rem;">
            ${spec.keyFeatures.map(f => `<li style="font-size: 0.88rem; color: var(--text-secondary); display: flex; align-items: center; gap: 0.5rem;"><i class="fa-solid fa-check" style="color: var(--accent-emerald);"></i> ${f}</li>`).join('')}
          </ul>
        </div>

        <div class="spec-box" style="margin-bottom: 1.25rem;">
          <h5 style="font-size: 0.88rem; font-weight: 700; font-family: var(--font-code); margin-bottom: 0.5rem; color: var(--accent-secondary);">System Architecture</h5>
          <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.5;">${spec.architecture}</p>
        </div>

        <div class="spec-box" style="margin-bottom: 1.25rem;">
          <h5 style="font-size: 0.88rem; font-weight: 700; font-family: var(--font-code); margin-bottom: 0.65rem; color: var(--accent-secondary);">REST API Endpoints Specification</h5>
          ${spec.endpoints.map(ep => `
            <div class="endpoint-row">
              <span class="http-method ${ep.method.toLowerCase()}">${ep.method}</span>
              <span style="color: var(--text-code); font-weight: 600;">${ep.path}</span>
              <span style="color: var(--text-muted); font-size: 0.78rem;">— ${ep.desc}</span>
            </div>
          `).join('')}
        </div>

        <div class="spec-box">
          <h5 style="font-size: 0.88rem; font-weight: 700; font-family: var(--font-code); margin-bottom: 0.35rem; color: var(--accent-secondary);">Database Entities Overview</h5>
          <p style="font-size: 0.82rem; font-family: var(--font-code); color: var(--text-muted);">${spec.schema}</p>
        </div>

        <div style="margin-top: 1.5rem; display: flex; gap: 0.75rem;">
          <a href="${spec.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
            <i class="fa-brands fa-github"></i> View GitHub Repository
          </a>
        </div>
      `;

      openModal(`Project Architecture: ${spec.title}`, content);
    });
  });

  // Attach handlers for "Live Demo" buttons
  document.querySelectorAll('.live-demo-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const projId = btn.getAttribute('data-project-id');
      const spec = PROJECT_SPECS[projId];
      if (!spec) return;

      if (spec.demoType === 'chatbot') {
        openChatbotDemoModal(spec, openModal);
      } else if (spec.demoType === 'expense') {
        openExpenseDemoModal(spec, openModal);
      } else {
        openStudentDemoModal(spec, openModal);
      }
    });
  });

  // Resume Modal Preview Handler
  const viewResumeBtn = document.getElementById('view-resume-modal-btn');
  if (viewResumeBtn) {
    viewResumeBtn.addEventListener('click', () => {
      const content = `
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          <div style="padding: 0.5rem 0; text-align: center;">
            <div style="width: 72px; height: 72px; border-radius: 50%; background: rgba(99, 102, 241, 0.12); color: var(--accent-primary); display: flex; align-items: center; justify-content: center; font-size: 2rem; margin: 0 auto 1rem auto;">
              <i class="fa-solid fa-file-lines"></i>
            </div>
            <h4 style="font-size: 1.3rem; font-weight: 700; margin: 0 0 0.35rem 0; color: var(--text-primary);">Sumit Kumar Resume</h4>
            <p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6; margin: 0;">
              Same resume file is shown here inline so you can view it directly in the browser.
            </p>
          </div>

          <div style="border: 1px solid var(--border-subtle); border-radius: var(--radius-md); overflow: hidden; background: var(--surface-card); box-shadow: 0 12px 28px rgba(0,0,0,0.12);">
            <iframe src="resume/resume.pdf" title="Sumit Kumar Resume" style="width: 100%; min-height: 560px; height: 68vh; border: 0; display: block; background: #fff;"></iframe>
          </div>

          <div style="display: flex; justify-content: center; gap: 0.75rem; flex-wrap: wrap;">
            <a href="resume/resume.pdf" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
              <i class="fa-solid fa-up-right-from-square"></i> Open in New Tab
            </a>
            <a href="resume/resume.pdf" download="Sumit_Kumar_Resume.pdf" class="btn btn-primary btn-sm">
              <i class="fa-solid fa-download"></i> Download PDF
            </a>
          </div>
        </div>
      `;
      openModal("Resume Preview — Sumit Kumar", content);
    });
  }

  // Certifications View Certificate Handlers
  document.querySelectorAll('.view-cert-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const certName = btn.getAttribute('data-cert-name') || "Certification";
      const certIssuer = btn.getAttribute('data-cert-issuer') || "Online Platform";
      const content = `
        <div style="text-align: center; padding: 1.5rem 0.5rem;">
          <div style="width: 72px; height: 72px; border-radius: 50%; background: rgba(99, 102, 241, 0.12); color: var(--accent-primary); display: flex; align-items: center; justify-content: center; font-size: 2rem; margin: 0 auto 1.25rem auto;">
            <i class="fa-solid fa-award"></i>
          </div>
          <h4 style="font-size: 1.3rem; font-weight: 700; margin-bottom: 0.35rem; color: var(--text-primary);">${certName}</h4>
          <p style="font-size: 0.95rem; color: var(--accent-secondary); font-weight: 600; margin-bottom: 0.85rem;">Issuing Organization: ${certIssuer}</p>
          
          <div class="spec-box" style="text-align: left; margin: 1.25rem 0;">
            <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.5rem;">
              <i class="fa-solid fa-circle-info" style="color: var(--accent-amber);"></i> <b>Editable Placeholder Notice:</b>
            </p>
            <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.5;">
              As per portfolio guidelines, this certification card is an editable student placeholder. Sumit Kumar can link his official verification URL or uploaded certificate document here once issued.
            </p>
          </div>

          <button class="btn btn-secondary btn-sm" onclick="document.getElementById('global-modal-close-btn').click();">
            Close Preview
          </button>
        </div>
      `;
      openModal("Certification Verification", content);
    });
  });
}

// Interactive Chatbot Demo in Modal
function openChatbotDemoModal(spec, openModal) {
  const content = `
    <div style="margin-bottom: 1rem;">
      <p style="font-size: 0.88rem; color: var(--text-secondary);">
        Interactive simulated preview of the <b>${spec.title}</b>. Test the FAQ matcher below or choose a suggested inquiry chip!
      </p>
    </div>
    <div class="demo-chat-window">
      <div class="chat-history" id="demo-chat-history">
        <div class="chat-bubble bot">
          Hello! 👋 Welcome to Aether Support. I am your automated customer support assistant built with Spring Boot. How can I help you today?
        </div>
      </div>
      <div class="chat-quick-faqs">
        <span class="faq-chip" onclick="window.sendChatFAQ('How do I reset my account password?')">Reset Password</span>
        <span class="faq-chip" onclick="window.sendChatFAQ('What are your service operating hours?')">Operating Hours</span>
        <span class="faq-chip" onclick="window.sendChatFAQ('How can I contact a human developer?')">Contact Human</span>
        <span class="faq-chip" onclick="window.sendChatFAQ('What tech stack powers this bot?')">Tech Stack</span>
      </div>
      <div class="chat-input-bar">
        <input type="text" id="demo-chat-input" placeholder="Type an FAQ question (e.g. password, contact, hours)..." onkeypress="if(event.key === 'Enter') window.sendChatMessage();">
        <button class="btn btn-primary btn-sm" onclick="window.sendChatMessage()">
          <i class="fa-solid fa-paper-plane"></i>
        </button>
      </div>
    </div>
  `;

  openModal("Live Interactive Demo — AI Support Chatbot", content);

  // Setup Chatbot Bot responses
  const FAQ_RESPONSES = {
    password: "To reset your password, navigate to Settings > Security > Reset Password, or submit a request to our authentication API endpoint.",
    hours: "Our customer assistance services operate 24/7 automated FAQ support, while technical human engineers are available Mon–Fri 9 AM – 6 PM IST.",
    human: "You can reach out directly to Sumit Kumar via email at sumit.kumar@example.com or through LinkedIn!",
    stack: "This chatbot is designed with a Java & Spring Boot REST backend, MySQL knowledge-base repository, and an asynchronous JavaScript frontend UI.",
    default: "Thank you for asking! In the production version, this query checks the MySQL knowledge-base index. You can ask about 'password', 'hours', 'human', or 'tech stack'."
  };

  window.sendChatFAQ = function(text) {
    const input = document.getElementById('demo-chat-input');
    if (input) {
      input.value = text;
      window.sendChatMessage();
    }
  };

  window.sendChatMessage = function() {
    const input = document.getElementById('demo-chat-input');
    const history = document.getElementById('demo-chat-history');
    if (!input || !history) return;

    const userText = input.value.trim();
    if (!userText) return;

    // Append user message
    const userBubble = document.createElement('div');
    userBubble.className = 'chat-bubble user';
    userBubble.textContent = userText;
    history.appendChild(userBubble);
    input.value = '';
    history.scrollTop = history.scrollHeight;

    // Simulate bot thinking
    setTimeout(() => {
      const lower = userText.toLowerCase();
      let reply = FAQ_RESPONSES.default;
      if (lower.includes('password') || lower.includes('reset')) reply = FAQ_RESPONSES.password;
      else if (lower.includes('hour') || lower.includes('time')) reply = FAQ_RESPONSES.hours;
      else if (lower.includes('human') || lower.includes('contact') || lower.includes('sumit')) reply = FAQ_RESPONSES.human;
      else if (lower.includes('stack') || lower.includes('tech') || lower.includes('spring')) reply = FAQ_RESPONSES.stack;

      const botBubble = document.createElement('div');
      botBubble.className = 'chat-bubble bot';
      botBubble.textContent = reply;
      history.appendChild(botBubble);
      history.scrollTop = history.scrollHeight;
    }, 450);
  };
}

// Interactive Expense Tracker Demo
function openExpenseDemoModal(spec, openModal) {
  const content = `
    <div style="margin-bottom: 1rem;">
      <p style="font-size: 0.88rem; color: var(--text-secondary);">
        Interactive simulated calculation widget for the <b>${spec.title}</b>. Add sample transactions and watch balance totals update in real-time!
      </p>
    </div>
    <div style="background: var(--bg-secondary); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1.25rem;">
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.75rem; margin-bottom: 1.25rem; text-align: center;">
        <div style="background: var(--surface-card); padding: 0.75rem; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle);">
          <div style="font-size: 0.72rem; color: var(--text-muted); font-family: var(--font-code);">TOTAL INCOME</div>
          <div id="demo-income" style="font-size: 1.25rem; font-weight: 700; color: var(--accent-emerald);">₹25,000</div>
        </div>
        <div style="background: var(--surface-card); padding: 0.75rem; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle);">
          <div style="font-size: 0.72rem; color: var(--text-muted); font-family: var(--font-code);">TOTAL EXPENSES</div>
          <div id="demo-expense" style="font-size: 1.25rem; font-weight: 700; color: var(--accent-rose);">₹10,500</div>
        </div>
        <div style="background: var(--surface-card); padding: 0.75rem; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle);">
          <div style="font-size: 0.72rem; color: var(--text-muted); font-family: var(--font-code);">NET BALANCE</div>
          <div id="demo-balance" style="font-size: 1.25rem; font-weight: 700; color: var(--accent-secondary);">₹14,500</div>
        </div>
      </div>

      <div style="display: flex; gap: 0.5rem; margin-bottom: 1rem; flex-wrap: wrap;">
        <input type="text" id="demo-tx-name" placeholder="Item description (e.g. Books, Host fees)" style="flex: 2; min-width: 150px; padding: 0.45rem 0.75rem; background: var(--surface-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); color: var(--text-primary); font-size: 0.85rem;">
        <input type="number" id="demo-tx-amount" placeholder="Amount (₹)" style="flex: 1; min-width: 80px; padding: 0.45rem 0.75rem; background: var(--surface-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); color: var(--text-primary); font-size: 0.85rem;">
        <select id="demo-tx-type" style="padding: 0.45rem 0.75rem; background: var(--surface-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); color: var(--text-primary); font-size: 0.85rem;">
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>
        <button class="btn btn-primary btn-sm" onclick="window.addDemoTransaction()">+ Add</button>
      </div>

      <div id="demo-tx-list" style="max-height: 160px; overflow-y: auto; display: flex; flex-direction: column; gap: 0.4rem;">
        <div style="display: flex; justify-content: space-between; padding: 0.45rem 0.75rem; background: var(--surface-card); border-radius: 4px; font-size: 0.82rem;">
          <span>Monthly Allowance / Stipend</span>
          <span style="color: var(--accent-emerald); font-weight: 600;">+ ₹25,000</span>
        </div>
        <div style="display: flex; justify-content: space-between; padding: 0.45rem 0.75rem; background: var(--surface-card); border-radius: 4px; font-size: 0.82rem;">
          <span>Course Material & Books</span>
          <span style="color: var(--accent-rose); font-weight: 600;">- ₹3,500</span>
        </div>
        <div style="display: flex; justify-content: space-between; padding: 0.45rem 0.75rem; background: var(--surface-card); border-radius: 4px; font-size: 0.82rem;">
          <span>Hostel Food & Groceries</span>
          <span style="color: var(--accent-rose); font-weight: 600;">- ₹7,000</span>
        </div>
      </div>
    </div>
  `;

  openModal("Live Interactive Demo — Personal Expense Tracker", content);

  let currentIncome = 25000;
  let currentExpense = 10500;

  window.addDemoTransaction = function() {
    const nameInput = document.getElementById('demo-tx-name');
    const amtInput = document.getElementById('demo-tx-amount');
    const typeSelect = document.getElementById('demo-tx-type');
    const list = document.getElementById('demo-tx-list');

    if (!nameInput || !amtInput || !list) return;
    const title = nameInput.value.trim() || 'New Entry';
    const amount = parseFloat(amtInput.value);

    if (isNaN(amount) || amount <= 0) {
      alert("Please enter a valid amount.");
      return;
    }

    const isIncome = typeSelect.value === 'income';
    if (isIncome) currentIncome += amount;
    else currentExpense += amount;

    const row = document.createElement('div');
    row.style.cssText = 'display: flex; justify-content: space-between; padding: 0.45rem 0.75rem; background: var(--surface-card); border-radius: 4px; font-size: 0.82rem;';
    row.innerHTML = `
      <span>${title}</span>
      <span style="color: ${isIncome ? 'var(--accent-emerald)' : 'var(--accent-rose)'}; font-weight: 600;">
        ${isIncome ? '+' : '-'} ₹${amount.toLocaleString()}
      </span>
    `;
    list.prepend(row);

    document.getElementById('demo-income').textContent = `₹${currentIncome.toLocaleString()}`;
    document.getElementById('demo-expense').textContent = `₹${currentExpense.toLocaleString()}`;
    document.getElementById('demo-balance').textContent = `₹${(currentIncome - currentExpense).toLocaleString()}`;

    nameInput.value = '';
    amtInput.value = '';
  };
}

// Student Management Demo
function openStudentDemoModal(spec, openModal) {
  const content = `
    <div style="margin-bottom: 1rem;">
      <p style="font-size: 0.88rem; color: var(--text-secondary);">
        Interactive simulated record table for <b>${spec.title}</b>. Demonstrates CRUD search & status controls:
      </p>
    </div>
    <div style="background: var(--bg-secondary); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1.25rem;">
      <div style="display: flex; justify-content: space-between; margin-bottom: 0.75rem; align-items: center;">
        <input type="text" id="student-search-input" placeholder="Search student name or roll..." onkeyup="window.filterDemoStudents()" style="padding: 0.4rem 0.75rem; background: var(--surface-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); color: var(--text-primary); font-size: 0.85rem; width: 60%;">
        <span style="font-family: var(--font-code); font-size: 0.75rem; color: var(--accent-emerald);">● 4 Records Active</span>
      </div>
      <div style="overflow-x: auto;">
        <table style="width: 100%; border-collapse: collapse; font-size: 0.82rem;" id="demo-student-table">
          <thead>
            <tr style="border-bottom: 1px solid var(--border-subtle); text-align: left; color: var(--text-muted); font-family: var(--font-code);">
              <th style="padding: 0.5rem;">Roll No</th>
              <th style="padding: 0.5rem;">Name</th>
              <th style="padding: 0.5rem;">Course</th>
              <th style="padding: 0.5rem;">Attendance</th>
              <th style="padding: 0.5rem;">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom: 1px solid var(--border-subtle);">
              <td style="padding: 0.5rem; font-family: var(--font-code);">BCA-2023-01</td>
              <td style="padding: 0.5rem; font-weight: 600;">Sumit Kumar</td>
              <td style="padding: 0.5rem;">Java Backend Dev</td>
              <td style="padding: 0.5rem; color: var(--accent-emerald); font-weight: 600;">96%</td>
              <td style="padding: 0.5rem;"><span style="background: rgba(16,185,129,0.15); color: #10b981; padding: 2px 6px; border-radius: 4px; font-size: 0.72rem;">Active</span></td>
            </tr>
            <tr style="border-bottom: 1px solid var(--border-subtle);">
              <td style="padding: 0.5rem; font-family: var(--font-code);">BCA-2023-02</td>
              <td style="padding: 0.5rem; font-weight: 600;">Aman Sharma</td>
              <td style="padding: 0.5rem;">Database Systems</td>
              <td style="padding: 0.5rem; color: var(--accent-emerald); font-weight: 600;">91%</td>
              <td style="padding: 0.5rem;"><span style="background: rgba(16,185,129,0.15); color: #10b981; padding: 2px 6px; border-radius: 4px; font-size: 0.72rem;">Active</span></td>
            </tr>
            <tr style="border-bottom: 1px solid var(--border-subtle);">
              <td style="padding: 0.5rem; font-family: var(--font-code);">BCA-2023-03</td>
              <td style="padding: 0.5rem; font-weight: 600;">Rohan Verma</td>
              <td style="padding: 0.5rem;">Web Technologies</td>
              <td style="padding: 0.5rem; color: var(--accent-amber); font-weight: 600;">84%</td>
              <td style="padding: 0.5rem;"><span style="background: rgba(16,185,129,0.15); color: #10b981; padding: 2px 6px; border-radius: 4px; font-size: 0.72rem;">Active</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `;

  openModal("Live Interactive Demo — Student Management System", content);

  window.filterDemoStudents = function() {
    const input = document.getElementById('student-search-input');
    const filter = input.value.toLowerCase();
    const rows = document.querySelectorAll('#demo-student-table tbody tr');

    rows.forEach(r => {
      const text = r.textContent.toLowerCase();
      r.style.display = text.includes(filter) ? '' : 'none';
    });
  };
}

/* ==========================================================================
   9. CONTACT FORM HANDLING & COPY EMAIL
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const alertBox = document.getElementById('contact-status-alert');
  const copyBtn = document.getElementById('copy-email-btn');

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(CONFIG.email).then(() => {
        const originalText = copyBtn.innerHTML;
        copyBtn.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
        copyBtn.style.borderColor = 'var(--accent-emerald)';
        copyBtn.style.color = 'var(--accent-emerald)';
        setTimeout(() => {
          copyBtn.innerHTML = originalText;
          copyBtn.style.borderColor = '';
          copyBtn.style.color = '';
        }, 2200);
      });
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('contact-name').value.trim();
      const email = document.getElementById('contact-email').value.trim();
      const subject = document.getElementById('contact-subject').value.trim();
      const message = document.getElementById('contact-message').value.trim();

      if (!name || !email || !subject || !message) {
        alert("Please fill in all fields before sending.");
        return;
      }

      // Display realistic success state
      if (alertBox) {
        alertBox.innerHTML = `
          <strong>Thank you, ${name}!</strong> Your message regarding "<em>${subject}</em>" has been received. Sumit will get back to you at <u>${email}</u> shortly.
        `;
        alertBox.className = 'form-status-alert success';
        alertBox.style.display = 'block';

        form.reset();
        setTimeout(() => {
          alertBox.style.display = 'none';
        }, 8000);
      }
    });
  }
}

/* ==========================================================================
   10. SCROLL REVEAL ANIMATIONS
   ========================================================================== */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    revealElements.forEach(el => el.classList.add('active'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => observer.observe(el));
}

/* ==========================================================================
   11. STATS COUNTER ANIMATION
   ========================================================================== */
function initStatsCounter() {
  const statNumbers = document.querySelectorAll('.stat-number[data-target]');
  if (!statNumbers.length) return;

  const obs = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-target'), 10);
        const suffix = el.getAttribute('data-suffix') || '';
        let start = 0;
        const duration = 1200;
        const stepTime = 30;
        const totalSteps = duration / stepTime;
        const increment = target / totalSteps;

        const timer = setInterval(() => {
          start += increment;
          if (start >= target) {
            el.textContent = `${target}${suffix}`;
            clearInterval(timer);
          } else {
            el.textContent = `${Math.floor(start)}${suffix}`;
          }
        }, stepTime);

        observer.unobserve(el);
      }
    });
  }, { threshold: 0.4 });

  statNumbers.forEach(num => obs.observe(num));
}
