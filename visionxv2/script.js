
/* ===== THEME TOGGLE ===== */
function initThemeToggle() {
  const toggleBtn = document.getElementById("themeToggle");
  if (!toggleBtn) return;
  
  // Check local storage or system preference
  const currentTheme = localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
  document.documentElement.setAttribute("data-theme", currentTheme);
  
  toggleBtn.addEventListener("click", () => {
    let theme = document.documentElement.getAttribute("data-theme");
    let newTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  });
}

/* ===== TEAM DATA ===== */
const TEAM_DATA = [
  {
    id: 1,
    initials: "NG",
    name: "Neeraj Gahlout",
    role: "Co-Founder",
    university: "Garden City University · BCA (2027)",
    badge: "Co-Founder",
    badgeClass: "badge-lead",
    avatarClass: "",
    avatarUrl: "certs/images/neeraj-profile.jpeg",
    skills: [
      "Data Analytics",
      "Power BI",
      "Web Development",
      "Project Management",
      "Leadership",
      "Business Development",
    ],
    achievements: [
      "10+ Hackathons Participated",
      "Co-Founder of TechCraft",
      "4+ Years Learning Data Analytics",
      "Multiple Internship Programs",
    ],
    projects: [
      "TraceChain",
      "Tariff Weaver",
      "Smart Clinic Queue",
      "Data Analytics Dashboard",
    ],
    linkedin: "https://www.linkedin.com/in/neeraj-gahlout-b39993308",
    github: "https://github.com/neerajcoder1",
    quote: "Turning ideas into impactful technology solutions.",
  },
  {
    id: 4,
    initials: "PD",
    name: "Prince Dubey",
    role: "Co-Founder",
    university:
      "Garden City University · B.Sc Data Science & Cybersecurity (2027)",
    badge: "Co-Founder",
    badgeClass: "badge-lead",
    badge2: "IIT Kanpur Certification",
    badge2Class: "badge-iit",
    avatarClass: "green",
    avatarUrl: "certs/images/prince-profile.jpeg",
    skills: [
      "Python",
      "SQL",
      "Machine Learning",
      "Power BI",
      "Pandas/NumPy",
      "Scikit-learn",
      "Predictive Modeling",
      "Data Engineering",
      "Business Intelligence",
    ],
    achievements: [
      "IIT Kanpur Certification",
      "Co-Founder of TechCraft",
      "AI for Skilling Internship at Capgemini",
    ],
    projects: [
      "Last Mile Delivery Analytics",
      "Customer Churn Prediction (85% Accuracy)",
      "Sales Forecasting Analysis",
    ],
    linkedin: "https://www.linkedin.com/in/prince-dubey-365056323",
    github: "https://github.com/Prince-Dubeyy",
    portfolio: "https://prince-portfolio-lime-mu.vercel.app/",
    quote: "Data tells the story. Intelligence drives the future.",
  },
  {
    id: 2,
    initials: "DR",
    name: "Dipin Roka",
    role: "Web Developer & AI Enthusiast",
    university: "Alliance University \u00B7 Bengaluru",
    badge: "Core Member",
    badgeClass: "badge-core",
    avatarClass: "blue",
    avatarUrl: "certs/images/dipin-profile.jpeg",
    skills: [
      "HTML5/CSS3",
      "JavaScript",
      "React",
      "Python",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Machine Learning",
      "Data Analysis",
    ],
    achievements: [
      "AICTE \u00D7 1M1B Green Skills Internship",
      "GreenHack Sustainability Hackathon",
      "EcoWise AI & AirSense creator",
    ],
    projects: [
      "EcoWise AI",
      "AI Incident Root Cause Analyzer",
      "Smart Text Editor",
      "Sorting Algorithms",
    ],
    linkedin: "https://www.linkedin.com/in/dipin-roka",
    github: "https://github.com/DIPINROKA10",
    quote: "Learn. Build. Innovate. Repeat.",
  },
  {
    id: 3,
    initials: "AT",
    name: "Aryan Singh Thapa",
    role: "Backend Dev & Cybersecurity",
    university: "Garden City University \u00B7 BCA (2024\u20132027)",
    badge: "Core Member",
    badgeClass: "badge-core",
    avatarClass: "pink",
    avatarUrl: "certs/images/aryan-profile.jpeg",
    skills: [
      "Python",
      "Java",
      "FastAPI",
      "Node.js",
      "REST APIs",
      "SQL & MySQL",
      "Linux",
      "Cybersecurity",
      "Machine Learning",
    ],
    achievements: [
      "Top 20 Finalist \u2013 National Quant Finance Olympiad (IIT Guwahati)",
      "India AI Impact Buildathon Participant",
      "ET Gen AI Hackathon Participant",
      "Developed AI Voice Detection API",
    ],
    projects: [
      "AI Voice Detection API",
      "Payment Integration System",
      "Implied Volatility Prediction Model",
    ],
    linkedin: "https://www.linkedin.com/in/aryan-singh-thapa-57aba5324",
    github: "https://github.com/aryanst123",
    quote: "Building secure, scalable, and intelligent systems for the future.",
  },
  {
    id: 5,
    initials: "SM",
    name: "Sai Srujan Murthy A N",
    role: "AI-Powered Cybersecurity Builder",
    university: "Garden City University",
    badge: "Core Member",
    badgeClass: "badge-core",
    avatarClass: "orange",
    avatarUrl: "certs/images/sai-profile.jpeg",
    skills: [
      "Python",
      "JavaScript",
      "SQL",
      "SOC Operations",
      "SIEM",
      "Threat Hunting",
      "SAST/DAST",
      "YARA",
      "Ghidra",
      "Reverse Engineering",
      "Semgrep",
    ],
    achievements: [
      "3+ Security Tools Built",
      "AI-Accelerated Cybersecurity Builder",
      "Security Tool Developer",
      "Passionate about building intelligent security solutions",
    ],
    projects: [],
    linkedin: "https://www.linkedin.com/in/sai-srujan-murthy-bb6801322",
    github: "https://github.com/Shiva-destroyer",
    quote: "",
  },
];

/* ===== PROJECT DATA ===== */
const PROJECT_DATA = [
  {
    type: "Prototype",
      name: "TraceChain",
    desc: "Blockchain-powered supply chain transparency platform for secure, immutable product tracking across the entire ecosystem.",
    tags: ["React", "JavaScript", "Blockchain"],
    links: [
      {
        text: "GitHub",
        url: "https://github.com/neerajcoder1/tracechain",
        demo: false,
      },
      {
        text: "Live Demo →",
        url: "https://tracechain-psi.vercel.app/login",
        demo: true,
      },
    ],
    filter: "blockchain",
  },
  {
    type: "Hackathon Project",
    name: "Tariff Weaver",
    desc: "Intelligent tariff analysis platform simplifying regulatory insights and trade cost estimation for businesses.",
    tags: ["React", "Data Viz"],
    links: [
      {
        text: "GitHub",
        url: "https://github.com/neerajcoder1/TariffWeaver-",
        demo: false,
      },
      {
        text: "Live Demo →",
        url: "https://tariff-weaver.vercel.app/",
        demo: true,
      },
    ],
    filter: "web",
  },
  {
    type: "Prototype",
      name: "RootPilot AI",
    desc: "AI-powered incident root cause analyzer for SRE and DevOps teams — monitors logs, detects failures, and recommends fixes.",
    tags: ["React", "FastAPI", "Gemini AI", "Tailwind"],
    links: [
      {
        text: "GitHub",
        url: "https://github.com/neerajcoder1/Rootpilot_Ai",
        demo: false,
      },
    ],
    filter: "ai",
  },
  {
    type: "Internal Product",
    name: "Food Court App",
    desc: "A full-stack food court management application built with modern web technologies.",
    tags: ["React", "Node.js", "MongoDB"],
    links: [
      {
        text: "GitHub",
        url: "https://github.com/neerajcoder1/food-court-app",
        demo: false,
      },
      {
        text: "Live Demo →",
        url: "https://food-court-app-chi.vercel.app/",
        demo: true,
      },
    ],
    filter: "web",
  },
  {
    type: "Prototype",
      name: "EcoTwin AI",
    desc: "Digital twin platform that simulates environmental and financial outcomes for logistics networks — predict carbon reduction, cost savings, and ESG scores before making capital decisions.",
    tags: ["React", "AI", "Data Viz", "Sustainability"],
    links: [
      {
        text: "Live Demo →",
        url: "https://ecotwin-ai-sustainability-platform.vercel.app/",
        demo: true,
      },
    ],
    filter: "ai",
  },
  {
    type: "Hackathon Project",
      name: "CarbonTrace",
    desc: "Track your carbon footprint across travel, energy, and food. Get personalized insights and AI-driven recommendations to reduce emissions and live sustainably.",
    tags: ["React", "AI", "Data Viz", "Carbon Tracking"],
    links: [
      {
        text: "Live Demo →",
        url: "https://carbontracev2.netlify.app/",
        demo: true,
      },
    ],
    filter: "web",
  },
];

/* ===== DOM REFS ===== */
const DOM = {
  loader: document.getElementById("loader"),
  mobileNav: document.getElementById("mobileNav"),
  teamGrid: document.getElementById("teamGrid"),
  projGrid: document.getElementById("pg"),
  filterBar: document.getElementById("filterBar"),
};

/* ===== INIT ===== */
document.addEventListener("DOMContentLoaded", () => {
  initLoader();
  initThemeToggle();
  initMobileNav();
  initRevealAnimations();
  initProjectFilter();
  initStatCounter();
  renderTeamCards();
  renderProjectCards();
  initHeroTypewriter();
  initSmoothScroll();
  initFormHandler();
  initNavScrollEffect();
  initTechStackHover();
  initKeyboardNav();
});

/* ===== LOADER ===== */
function initLoader() {
  window.addEventListener("load", () => {
    setTimeout(() => {
      DOM.loader.classList.add("hide");
    }, 600);
  });
  // Fallback: hide after 3s even if load event is slow
  setTimeout(() => {
    if (!DOM.loader.classList.contains("hide")) {
      DOM.loader.classList.add("hide");
    }
  }, 3000);
}

/* ===== MOBILE NAV ===== */
function initMobileNav() {
  window.toggleMobile = function () {
    DOM.mobileNav.classList.toggle("open");
  };
  // Close on escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && DOM.mobileNav.classList.contains("open")) {
      DOM.mobileNav.classList.remove("open");
    }
  });
}

/* ===== REVEAL ANIMATIONS (Intersection Observer) ===== */
function initRevealAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Add a staggered delay within the same section
          const delay = entry.target.dataset.delay || 0;
          setTimeout(() => {
            entry.target.classList.add("visible");
          }, delay);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
  );

  // Also add stagger support for children
  document.querySelectorAll(".reveal").forEach((el, i) => {
    // Assign staggered delays automatically for grouped reveals
    const parent = el.closest("[data-stagger]");
    if (parent) {
      const idx = Array.from(parent.children).indexOf(el);
      el.dataset.delay = idx * 80;
    }
    observer.observe(el);
  });
}

/* ===== PROJECT FILTER ===== */
function initProjectFilter() {
  window.filterP = function (cat, btn) {
    document
      .querySelectorAll(".fbtn")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    document.querySelectorAll(".proj-card").forEach((card, i) => {
      if (cat === "all") {
        card.style.display = "block";
        setTimeout(() => {
          card.style.opacity = "1";
        }, i * 50);
      } else {
        if (card.dataset.cat === cat) {
          card.style.display = "block";
          setTimeout(() => {
            card.style.opacity = "1";
          }, i * 50);
        } else {
          card.style.opacity = "0";
          setTimeout(() => {
            card.style.display = "none";
          }, 200);
        }
      }
    });
  };
}

/* ===== STAT COUNTER ===== */
function initStatCounter() {
  const statObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounters(entry.target);
          statObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 },
  );

  const heroStats = document.querySelector(".hero-floating-stats");
  if (heroStats) statObserver.observe(heroStats);
}

function animateCounters(container) {
  container.querySelectorAll(".hero-stat-num, .stat-num").forEach((el) => {
    const text = el.textContent.trim();
    const target = parseInt(text);
    if (isNaN(target)) return;
    let current = 0;
    const step = Math.max(1, Math.ceil(target / 30));
    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        el.textContent = text;
        clearInterval(interval);
      } else {
        el.textContent = current + "+";
      }
    }, 50);
  });
}

/* ===== RENDER TEAM CARDS ===== */
function renderTeamCards() {
  if (!DOM.teamGrid) return;
  DOM.teamGrid.innerHTML = TEAM_DATA.map(
    (m, i) => `
    <div class="team-card reveal" data-delay="${i * 100}">
      <div class="tc-head">
        ${m.avatarUrl ? `<img class="tc-avatar-img" src="${m.avatarUrl}" alt="${m.name}" />` : `<div class="tc-avatar ${m.avatarClass}">${m.initials}</div>`}
        <div class="tc-badge ${m.badgeClass}">${m.badge}</div>
        ${m.badge2 ? `<div class="tc-badge ${m.badge2Class}">${m.badge2}</div>` : ""}
        <div class="tc-name">${m.name}</div>
        <div class="tc-role">${m.role}</div>
        <div class="tc-uni">${m.university}</div>
      </div>
      <div class="tc-body">
        ${m.quote ? `<div class="tc-quote">"${m.quote}"</div>` : ""}
        <div class="skill-wrap">
          ${m.skills.map((s) => `<span class="st">${s}</span>`).join("")}
        </div>
        ${m.achievements
          .map(
            (a) => `
          <div class="tc-ach"><span class="tc-ach-arrow">→</span>${a}</div>
        `,
          )
          .join("")}
        ${
          m.projects && m.projects.length
            ? `<div style="margin-top:12px;font-size:11px;color:var(--muted);font-weight:600;letter-spacing:.05em;text-transform:uppercase;font-family:var(--font-mono)">Projects</div>
             <div style="display:flex;flex-wrap:wrap;gap:4px;margin-top:6px;margin-bottom:12px">
               ${m.projects.map((p) => `<span style="font-size:10px;padding:3px 8px;background:rgba(124,58,237,.08);color:#a78bfa;border-radius:4px;font-weight:600">${p}</span>`).join("")}
             </div>`
            : ""
        }
        <div class="tc-links">
          <a href="${m.linkedin}" target="_blank" class="tc-link">LinkedIn →</a>
          <a href="${m.github}" target="_blank" class="tc-link">GitHub →</a>
          ${m.portfolio ? `<a href="${m.portfolio}" target="_blank" class="tc-link">Portfolio →</a>` : ""}
        </div>
      </div>
    </div>
  `,
  ).join("");

  // Observe newly added cards
  DOM.teamGrid.querySelectorAll(".reveal").forEach((el) => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(
              () => entry.target.classList.add("visible"),
              entry.target.dataset.delay || 0,
            );
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
  });
}

/* ===== RENDER PROJECT CARDS ===== */
function renderProjectCards() {
  if (!DOM.projGrid) return;
  DOM.projGrid.innerHTML = PROJECT_DATA.map(
    (p, i) => `
    <div class="proj-card reveal" data-cat="${p.filter}" data-delay="${i * 60}">
      <div class="proj-cat">${p.cat}</div>
      <div class="proj-name">${p.name}</div>
      <div class="proj-desc">${p.desc}</div>
      <div class="proj-tags">
        ${p.tags.map((t) => `<span class="pt">${t}</span>`).join("")}
      </div>
      <div class="proj-links">
        ${
          p.links.length
            ? p.links
                .map(
                  (l) => `
          <a href="${l.url}" target="_blank" class="pl ${l.demo ? "demo" : ""}">${l.text}</a>
        `,
                )
                .join("")
            : ""
        }
      </div>
    </div>
  `,
  ).join("");

  // Observe new cards
  DOM.projGrid.querySelectorAll(".reveal").forEach((el) => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(
              () => entry.target.classList.add("visible"),
              entry.target.dataset.delay || 0,
            );
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
  });
}

/* ===== HERO TYPEWRITER EFFECT ===== */
function initHeroTypewriter() {
  const el = document.querySelector(".hero-desc");
  if (!el) return;
  const original = el.textContent;
  // We only do this on initial page load as a nice touch
  // Already rendered, but we add a subtle highlight effect
}

/* ===== SMOOTH SCROLL ===== */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href === "#") return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

/* ===== FORM HANDLER ===== */
function initFormHandler() {
  document.querySelectorAll(".contact-form").forEach((form) => {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const btn = this.querySelector(".submit-btn");
      const original = btn.textContent;
      btn.textContent = "Sending...";
      btn.disabled = true;

      setTimeout(() => {
        btn.textContent = "✓ Message Sent!";
        btn.style.background = "linear-gradient(135deg, #059669, #10b981)";
        setTimeout(() => {
          btn.textContent = original;
          btn.style.background = "";
          btn.disabled = false;
        }, 2000);
        this.reset();
      }, 1200);
    });
  });
}

/* ===== NAV SCROLL EFFECT ===== */
function initNavScrollEffect() {
  const nav = document.querySelector("nav");
  let lastScroll = 0;
  window.addEventListener("scroll", () => {
    const current = window.pageYOffset;
    if (current > 50) {
        nav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
      }
    lastScroll = current;
  });

  // Active nav link highlight
  const sections = document.querySelectorAll("section[id]");
  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const top = section.offsetTop - 150;
      if (window.pageYOffset >= top) {
        current = section.getAttribute("id");
      }
    });
    document.querySelectorAll(".nav-links a").forEach((link) => {
      if (link.getAttribute("href") === "#" + current) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
    });
  });
}

/* ===== TECH STACK INTERACTION ===== */
function initTechStackHover() {
  document.querySelectorAll(".tech-item").forEach((item) => {
    item.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-6px) scale(1.05)";
    });
    item.addEventListener("mouseleave", function () {
      this.style.transform = "";
    });
  });
}

/* ===== KEYBOARD NAVIGATION ===== */
function initKeyboardNav() {
  document.addEventListener("keydown", (e) => {
    if (e.key >= "1" && e.key <= "6") {
      const sections = [
        "hero",
        "about",
        "team",
        "projects",
        "achievements",
        "contact",
      ];
      const idx = parseInt(e.key) - 1;
      if (idx < sections.length) {
        const el = document.getElementById(sections[idx]);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  });
}

/* ===== PARALLAX ON MOUSE MOVE (hero) ===== */
document.addEventListener("mousemove", (e) => {
  const cubes = document.querySelectorAll(".hero-cube, .hero-cube-feat");
  const hero = document.getElementById("hero");
  if (!hero) return;
  const rect = hero.getBoundingClientRect();
  if (e.clientY < rect.top || e.clientY > rect.bottom) return;
  const x = (e.clientX / window.innerWidth - 0.5) * 12;
  const y = (e.clientY / window.innerHeight - 0.5) * 12;
  cubes.forEach((cube, i) => {
    const factor = (i + 1) * 0.3;
    cube.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
  });
});

/* ===== ADD PROJECT MODAL ===== */
function openProjectModal() {
  document.getElementById("projectModal").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeProjectModal(e) {
  if (e && e.target !== document.getElementById("projectModal")) return;
  document.getElementById("projectModal").classList.remove("open");
  document.body.style.overflow = "";
}

function addProject(e) {
  e.preventDefault();
  const name = document.getElementById("pName").value.trim();
  const cat = document.getElementById("pCat").value.trim();
  const desc = document.getElementById("pDesc").value.trim();
  const tagsStr = document.getElementById("pTags").value.trim();
  const filter = document.getElementById("pFilter").value.trim().toLowerCase();
  const gitUrl = document.getElementById("pGit").value.trim();
  const demoUrl = document.getElementById("pDemo").value.trim();

  if (!name || !cat || !desc || !filter) return;

  const tags = tagsStr
    ? tagsStr
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean)
    : [];
  const links = [];
  if (gitUrl) links.push({ text: "GitHub", url: gitUrl, demo: false });
  if (demoUrl) links.push({ text: "Live Demo →", url: demoUrl, demo: true });
  if (!links.length) links.push({ text: "New Project", url: "#", demo: false });

  const validFilters = ["ai", "web", "blockchain", "data"];
  const finalFilter = validFilters.includes(filter) ? filter : "web";

  PROJECT_DATA.push({
    cat,
    name,
    desc,
    tags,
    links,
    filter: finalFilter,
  });

  renderProjectCards();
  document.getElementById("projectForm").reset();
  closeProjectModal();
}

// Close modal on Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    const modal = document.getElementById("projectModal");
    if (modal.classList.contains("open")) closeProjectModal();
  }
});
document.querySelectorAll(".footer-copy").forEach((el) => {
  el.textContent = el.textContent.replace("2026", new Date().getFullYear());
});

/* ===== ACHIEVEMENTS PAGE ===== */
const ACHIEVEMENTS_DATA = [
  {
    id: 1,
    title: "ET AI Hackathon 2026",
    subtitle: "Semi Finalist",
    member: "Neeraj Gahlout, Aryan Singh Thapa & Prince Dubey",
    type: "team",
    category: "Hackathon",
    desc: "Semi-finalist at the ET Gen AI Hackathon 2026 — competing among top teams nationally.",
    image: "certs/images/et-ai-hackathon.png",
    date: "2026-05-07",
  },
  {
    id: 2,
    title: "National Quant Finance Olympiad",
    subtitle: "Top 20 Finalist",
    member: "Aryan Singh Thapa",
    type: "individual",
    category: "Competition",
    desc: "Ranked Top 20 at the National Quant Finance Olympiad organized by IIT Guwahati.",
    image: "certs/images/national-quant-olympiad.png",
    date: "2025-11",
  },
  {
    id: 4,
    title: "GreenHack Sustainability Hackathon",
    subtitle: "Participant",
    member: "Dipin Roka",
    type: "individual",
    category: "Hackathon",
    desc: "Participated in GreenHack — a sustainability-focused hackathon driving green tech innovation.",
    image: "certs/images/dipin-greenhack.jpg",
    date: "2026-05-30",
  },
  {
    id: 5,
    title: "AICTE × 1M1B Green Skills Internship",
    subtitle: "Internship",
    member: "Dipin Roka",
    type: "individual",
    category: "Internship",
    desc: "Completed the AICTE × 1M1B Green Skills Internship program focused on sustainability.",
    image: "certs/images/dipin-aicte.png",
    date: "2026-02",
  },
  {
    id: 6,
    title: "ArtPark CodeForge Hackathon",
    subtitle: "Participant",
    member: "Prince Dubey",
    type: "individual",
    category: "Hackathon",
    desc: "Participated in ArtPark CodeForge Hackathon — building creative tech solutions.",
    image: "certs/images/codeforge.png",
    date: "2026-04-01",
  },
  {
    id: 7,
    title: "TechCraft — Team Hackathon Series",
    subtitle: "10+ Hackathons",
    member: "TechCraft",
    type: "team",
    category: "Hackathon",
    desc: "As a team, we've participated in 10+ national and international hackathons across AI, blockchain, and sustainability.",
    image: "certs/images/neeraj.jpg",
    date: "2026-03-14",
  },
  {
    id: 8,
    title: "JP Morgan Software Engineering",
    subtitle: "Virtual Experience",
    member: "Aryan Singh Thapa",
    type: "individual",
    category: "Internship",
    desc: "Completed the JP Morgan Software Engineering Virtual Experience Program.",
    image: "certs/images/jp-morgan.png",
    date: "2026-02-22",
  },
  {
    id: 9,
    title: "E&ICT Academy, IIT Kanpur",
    subtitle: "Certification",
    member: "Prince Dubey",
    type: "individual",
    category: "Certification",
    desc: "Completed the E&ICT Academy certification program at IIT Kanpur — advanced technology & innovation.",
    image: "certs/images/iit-kanpur.png",
    date: "2025-01-01",
    highlight: true,
  },
  {
    id: 10,
    title: "Smart Campus Hackathon CSTC",
    subtitle: "Team Participant",
    member: "Neeraj Gahlout & Dipin Roka",
    type: "team",
    category: "Hackathon",
    desc: "Participated in the Smart Campus Hackathon at CSTC — building innovative campus solutions as a team.",
    image: "certs/images/cstc.jpg",
    date: "2026-04-09",
  },
  {
    id: 16,
    title: "HCL GUVI Certification",
    subtitle: "Certification",
    member: "Prince Dubey",
    type: "individual",
    category: "Certification",
    desc: "Completed HCL GUVI certification — covering technology and software development fundamentals.",
    image: "certs/images/hcl-guvi.png",
    date: "2026-02-16",
  },
  {
    id: 15,
    title: "Palo Alto Network Security",
    subtitle: "Certification",
    member: "Sai Srujan Murthy A N",
    type: "individual",
    category: "Certification",
    desc: "Completed Palo Alto Network Security certification — covering firewall configuration, threat prevention, and network security fundamentals.",
    image: "certs/images/palo-alto-network-security.png",
    date: "2025-09-09",
  },
  {
    id: 14,
    title: "Google Cybersecurity Certificate",
    subtitle: "Certification",
    member: "Sai Srujan Murthy A N",
    type: "individual",
    category: "Certification",
    desc: "Completed the Google Cybersecurity certification — covering security foundations, network security, and risk management.",
    image: "certs/images/google-cybersecurity.png",
    date: "2025-08-30",
  },
  {
    id: 13,
    title: "GreenHack Sustainability Hackathon",
    subtitle: "2nd Place Winner",
    member: "Neeraj Gahlout",
    type: "individual",
    category: "Hackathon",
    desc: "Secured 2nd place at GreenHack Sustainability Hackathon — won for building innovative green tech solutions.",
    image: "certs/images/greenhack.jpg",
    date: "2026-05-30",
    highlight: true,
  },
  {
    id: 12,
    title: "Exo Mobile Innovation Hackathon",
    subtitle: "Team Participant",
    member: "TechCraft",
    type: "team",
    category: "Hackathon",
    desc: "TechCraft participated in the Exo Mobile Innovation Hackathon — building mobile innovation solutions.",
    image: "certs/images/exo-mobile.jpg",
    date: "2025-12",
  },
];

let achViewMode = "grid";
let achSortOrder = "newest";

function renderAchievements(filter) {
  const grid = document.getElementById("achGallery");
  if (!grid) return;
  const f = filter || "all";

  let items =
    f === "all"
      ? [...ACHIEVEMENTS_DATA]
      : ACHIEVEMENTS_DATA.filter((a) => a.type === f || a.category === f);

  if (achSortOrder === "newest") {
    items.sort((a, b) => b.date.localeCompare(a.date));
  } else {
    items.sort((a, b) => a.date.localeCompare(b.date));
  }

  grid.innerHTML = items
    .map((a, i) => {
      const catColors = {
        Hackathon: "#7c3aed",
        Internship: "#3b82f6",
        Competition: "#f59e0b",
        Certification: "#10b981",
      };
      const catColor = catColors[a.category] || "#7c3aed";

      if (achViewMode === "timeline") {
        return `
        <div class="ach-tl-item reveal${a.highlight ? " ach-tl-highlight" : ""}" style="transition-delay:${i * 80}ms">
          <div class="ach-tl-dot" style="background:${catColor}"></div>
          <div class="ach-tl-card">
            <div class="ach-tl-header">
              <span class="ach-gallery-type ${a.type}">${a.type === "team" ? "TEAM" : "INDIVIDUAL"}</span>
              <span class="ach-tl-cat" style="background:${catColor}20;color:${catColor}">${a.category}</span>
              <span class="ach-tl-date">${formatDate(a.date)}</span>
            </div>
            <div class="ach-gallery-title">${a.title}${a.highlight ? '<span class="hl-badge">Featured</span>' : ""}</div>
            <div class="ach-gallery-sub">${a.subtitle}</div>
            <div class="ach-gallery-member">${a.member}</div>
            <div class="ach-gallery-desc">${a.desc}</div>
            ${a.pdf ? `<div style="margin-top:8px"><a href="${a.pdf}" target="_blank" style="font-size:12px;color:var(--accent);font-weight:600;text-decoration:none">View Certificate PDF →</a></div>` : ""}
          </div>
        </div>`;
      }

      return `
    <div class="ach-gallery-card reveal${a.highlight ? " ach-card-highlight" : ""}" style="transition-delay:${i * 60}ms">
      <div class="ach-gallery-img" onclick="${a.pdf ? `window.open('${a.pdf}','_blank')` : `openLightbox(${a.id})`}">
        ${a.image ? `<img src="${a.image}" alt="${a.title}" />` : a.pdf ? `<div class="ach-gallery-placeholder" style="background:linear-gradient(135deg,#f8fafc,#f1f5f9);flex-direction:column;gap:6px"><span style="font-size:32px">📄</span><span style="font-size:10px;font-weight:600;color:#94a3b8;letter-spacing:.06em;text-transform:uppercase">Certificate PDF</span></div>` : `<div class="ach-gallery-placeholder"><span>+</span><span style="font-size:10px;font-weight:400;margin-top:4px">Add Photo</span></div>`}
        <input type="file" id="imgInput${a.id}" accept="image/*" style="display:none" onchange="uploadAchievementImg(${a.id}, this)" />
      </div>
      <div class="ach-gallery-body">
        <div class="ach-gallery-top">
          <div class="ach-gallery-type ${a.type}">${a.type === "team" ? "TEAM" : "INDIVIDUAL"}</div>
          <span class="ach-gallery-cat" style="background:${catColor}15;color:${catColor}">${a.category}</span>
        </div>
        <div class="ach-gallery-title">${a.title}${a.highlight ? '<span class="hl-badge">Featured</span>' : ""}</div>
        <div class="ach-gallery-sub">${a.subtitle}</div>
        <div class="ach-gallery-member">${a.member}</div>
        <div class="ach-gallery-desc">${a.desc}</div>
        <div class="ach-gallery-date">${formatDate(a.date)}${a.pdf ? ` &middot; <a href="${a.pdf}" target="_blank" style="color:var(--accent);font-weight:600;text-decoration:none">PDF</a>` : ""}</div>
      </div>
    </div>`;
    })
    .join("");

  updateStats();

  grid.querySelectorAll(".reveal").forEach((el) => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 },
    );
    obs.observe(el);
  });
}

function formatDate(d) {
  const parts = d.split("-");
  const months = [
    "",
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  if (parts.length === 3) {
    return `${months[parseInt(parts[1])]} ${parseInt(parts[2])}, ${parts[0]}`;
  }
  if (parts.length === 2) {
    return `${months[parseInt(parts[1])]} ${parts[0]}`;
  }
  return d;
}

function updateStats() {
  const total = ACHIEVEMENTS_DATA.length;
  const team = ACHIEVEMENTS_DATA.filter((a) => a.type === "team").length;
  const individual = ACHIEVEMENTS_DATA.filter(
    (a) => a.type === "individual",
  ).length;
  const html = `
    <div class="ach-stat-item"><span class="ach-stat-num" data-target="${total}">0</span><span class="ach-stat-label">Total</span></div>
    <div class="ach-stat-divider"></div>
    <div class="ach-stat-item"><span class="ach-stat-num" data-target="${individual}">0</span><span class="ach-stat-label">Individual</span></div>
    <div class="ach-stat-divider"></div>
    <div class="ach-stat-item"><span class="ach-stat-num" data-target="${team}">0</span><span class="ach-stat-label">Team</span></div>
  `;
  const el = document.getElementById("achStats");
  if (el) el.innerHTML = html;
  const heroEl = document.getElementById("heroStats");
  if (heroEl) heroEl.innerHTML = html;
  animateStats();
}

function animateStats() {
  const nums = document.querySelectorAll(".ach-stat-num");
  nums.forEach((num) => {
    const target = parseInt(num.dataset.target);
    let current = 0;
    const step = Math.max(1, Math.ceil(target / 30));
    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(interval);
      }
      num.textContent = current;
    }, 40);
  });
}

function toggleAchView(mode) {
  achViewMode = mode;
  document
    .querySelectorAll(".view-toggle-btn")
    .forEach((b) => b.classList.remove("active"));
  document
    .querySelector(`.view-toggle-btn[data-view="${mode}"]`)
    ?.classList.add("active");
  const f =
    document.querySelector(".ach-filter .fbtn.active")?.dataset?.filter ||
    "all";
  renderAchievements(f);
}

function sortAchievements(order) {
  achSortOrder = order;
  document
    .querySelectorAll(".sort-btn")
    .forEach((b) => b.classList.remove("active"));
  document
    .querySelector(`.sort-btn[data-sort="${order}"]`)
    ?.classList.add("active");
  const f =
    document.querySelector(".ach-filter .fbtn.active")?.dataset?.filter ||
    "all";
  renderAchievements(f);
}

function filterAchievements(type, btn) {
  document
    .querySelectorAll(".ach-filter .fbtn")
    .forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  renderAchievements(type);
}

function uploadAchievementImg(id, input) {
  const file = input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function (e) {
    const ach = ACHIEVEMENTS_DATA.find((a) => a.id === id);
    if (ach) {
      ach.image = e.target.result;
      renderAchievements(
        document.querySelector(".ach-filter .fbtn.active")?.dataset?.filter ||
          "all",
      );
    }
  };
  reader.readAsDataURL(file);
}

// Add Achievement
function addAchievement(e) {
  e.preventDefault();
  const title = document.getElementById("achTitle").value.trim();
  const subtitle = document.getElementById("achSubtitle").value.trim();
  const member = document.getElementById("achMember").value.trim();
  const type = document.getElementById("achType").value;
  const category = document.getElementById("achCategory").value;
  const desc = document.getElementById("achDesc").value.trim();
  const date = document.getElementById("achDate").value.trim();
  if (!title || !member || !desc) return;

  ACHIEVEMENTS_DATA.push({
    id: Date.now(),
    title,
    subtitle,
    member,
    type,
    category,
    desc,
    image: "",
    date: date || "2026-06",
  });

  renderAchievements(
    document.querySelector(".ach-filter .fbtn.active")?.dataset?.filter ||
      "all",
  );
  document.getElementById("achForm").reset();
  document.getElementById("achModal").classList.remove("open");
  document.body.style.overflow = "";
}

function openAchModal() {
  document.getElementById("achModal").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeAchModal() {
  document.getElementById("achModal").classList.remove("open");
  document.body.style.overflow = "";
}

/* ===== LIGHTBOX ===== */
function openLightbox(id) {
  const ach = ACHIEVEMENTS_DATA.find((a) => a.id === id);
  if (!ach) return;
  if (!ach.image) {
    // No image — trigger file upload instead
    document.getElementById(`imgInput${id}`)?.click();
    return;
  }
  const overlay = document.getElementById("lightbox");
  const img = document.getElementById("lightboxImg");
  const cap = document.getElementById("lightboxCap");
  img.src = ach.image;
  cap.textContent = `${ach.title} — ${ach.member}`;
  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeLightbox() {
  document.getElementById("lightbox").classList.remove("open");
  document.body.style.overflow = "";
}

/* ===== FEATURED CAROUSEL ===== */
function initFeaturedCarousel() {
  const container = document.getElementById("featuredCarousel");
  const dots = document.getElementById("featuredDots");
  if (!container) return;
  const items = ACHIEVEMENTS_DATA.filter((a) => a.highlight);
  if (!items.length) return;
  let current = 0;
  let interval;

  function renderSlide(idx) {
    const a = items[idx];
    const catColors = {
      Hackathon: "#7c3aed",
      Internship: "#3b82f6",
      Competition: "#f59e0b",
      Certification: "#10b981",
    };
    const catColor = catColors[a.category] || "#7c3aed";
    container.innerHTML = `<div class="featured-slide">
      <h2 class="ach-featured-title">${a.title.replace(/&/g, "&amp;")}${a.subtitle ? ',<br /><span class="ach-featured-accent">' + a.subtitle + "</span>" : ""}</h2>
      <div class="ach-featured-meta">
        <span class="ach-featured-badge" style="background:${catColor}20;color:${catColor}">${a.category}</span>
        <span class="ach-featured-badge prince">${a.member}</span>
      </div>
      <p class="ach-featured-desc">${a.desc}</p>
      <div class="ach-featured-footer">
        <span class="ach-featured-date">${formatDate(a.date)}</span>
        ${a.image ? `<a href="${a.image}" target="_blank" class="ach-featured-link">View Certificate →</a>` : ""}
        ${a.pdf ? `<a href="${a.pdf}" target="_blank" class="ach-featured-link">View Certificate →</a>` : ""}
      </div>
    </div>`;
    dots.innerHTML = items
      .map(
        (_, i) =>
          `<button class="featured-dot${i === idx ? " active" : ""}" data-idx="${i}"></button>`,
      )
      .join("");
    dots.querySelectorAll(".featured-dot").forEach((dot) => {
      dot.addEventListener("click", () => {
        clearInterval(interval);
        current = parseInt(dot.dataset.idx);
        renderSlide(current);
        startAuto();
      });
    });
  }

  function startAuto() {
    if (items.length < 2) return;
    interval = setInterval(() => {
      current = (current + 1) % items.length;
      renderSlide(current);
    }, 5000);
  }

  renderSlide(0);
  startAuto();
}

// Init achievements page
if (document.getElementById("achGallery")) {
  initFeaturedCarousel();
  renderAchievements("all");
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      const m = document.getElementById("achModal");
      if (m?.classList.contains("open")) closeAchModal();
    }
  });
}
