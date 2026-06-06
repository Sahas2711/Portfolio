/* ============================================
   PORTFOLIO APP — Multi-Role Data & Render
   ============================================ */

// ---- SVG Icons (shared) ----
const ICONS = {
  external: '<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" width="12" height="12"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>',
  github: '<svg fill="currentColor" viewBox="0 0 24 24" width="12" height="12"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>',
  githubBig: '<svg fill="currentColor" viewBox="0 0 24 24" width="14" height="14"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>',
  linkedin: '<svg fill="currentColor" viewBox="0 0 24 24" width="14" height="14"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
  email: '<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" width="14" height="14"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>',
  resume: '<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" width="14" height="14"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>'
};

const RESUME_URL = 'https://drive.google.com/file/d/1KjREXXaouJ2qb90KRGvnn9mHe3A1GFA-/view?usp=sharing';

// ---- Shared Icons Helper ----
function icon(name) { return ICONS[name] || ''; }

// ---- Shared Data ----
const PROJECTS = {
  inventra: {
    name: 'Inventra — ERP for Laxmi Granites',
    badge: 'flagship',
    badgeText: '\u2605 Client Delivery \u2014 Production System',
    subtitle: 'Production ERP-style system \u2014 Spring Boot, MySQL, Railway, Client Delivery',
    links: [{ url: 'https://github.com/Sahas2711', label: 'GitHub', icon: 'github' }],
    problem: '<strong>Engagement:</strong> Direct freelance contract with Laxmi Granites, a small business needing a custom ERP solution. Handled every phase from initial requirements gathering through production deployment on Railway. Billing, staff management, and GST-compliant invoice generation were the core modules.',
    blocks: [
      {
        title: 'What I Delivered',
        items: [
          '<strong>Requirements:</strong> Gathered and refined business requirements through direct client conversations \u2014 translated business workflows into technical specifications',
          '<strong>Backend:</strong> Spring Boot application with REST APIs for billing, staff management, inventory, and GST-compliant invoice generation',
          '<strong>Database:</strong> MySQL schema designed for transactional workflows, invoice history, staff attendance, and financial reporting',
          '<strong>Deployment:</strong> Production deployment on Railway with continuous feature iteration based on client feedback',
          '<strong>Communication:</strong> Weekly syncs with the client for demo, feedback, and feature prioritization'
        ]
      },
      {
        title: 'Why This Matters',
        items: [
          '<strong>Real accountability:</strong> A paying client depended on this system for daily business operations \u2014 not a classroom project',
          '<strong>Business domain:</strong> Had to understand GST compliance, invoice numbering, and billing workflows unique to Indian small businesses',
          '<strong>Full ownership:</strong> No senior engineer to fall back on \u2014 sole decision-maker on architecture, stack, deployment, and delivery',
          '<strong>Iterative delivery:</strong> Multiple release cycles with evolving requirements, mirroring real-world software delivery'
        ]
      }
    ],
    tech: ['Spring Boot', 'MySQL', 'Railway', 'REST APIs', 'GST Invoicing'],
    outcome: 'Production system serving a real business for billing, invoicing, and staff management. Client currently using the system for daily operations.',
    fpStack: 'Spring Boot \u00b7 MySQL \u00b7 Railway \u00b7 Client Work',
    fpProblem: '<strong>Problem:</strong> Small business needed billing, staff management, and GST-compliant invoicing. No off-the-shelf ERP fit their workflow. Built custom ERP-style system from scratch with direct client collaboration.',
    fpWhy: '<strong>Why it matters:</strong> Real client, real requirements, production deployment. Demonstrates full product lifecycle \u2014 from requirement gathering to deployment and iterative refinement.',
    highlight: true
  },
  taskSphere: {
    name: 'TaskSphere',
    badge: 'major',
    badgeText: 'Major Project',
    subtitle: 'Microservices-based task management \u2014 Spring Boot, Spring Cloud, Docker',
    links: [
      { url: 'https://task-sphere-d.vercel.app/', label: 'Demo', icon: 'external' },
      { url: 'https://github.com/Sahas2711/TaskSphere_d', label: 'Source', icon: 'github' }
    ],
    problem: '<strong>Problem:</strong> Monolithic task management apps lack independent deployability and fault isolation. Enterprise teams need user, task, and auth services operating independently. Existing solutions (Jira, Trello) are SaaS-only \u2014 not designed for teams that want self-hosted, modular task management with independent service scaling.',
    blocks: [
      {
        title: 'Architecture',
        content: '<div class="arch-diagram"><svg viewBox="0 0 700 320" xmlns="http://www.w3.org/2000/svg" style="max-width:680px"><rect x="20" y="10" width="660" height="300" rx="8" fill="none" stroke="#2a2a2e" stroke-width="1"/><text x="350" y="32" text-anchor="middle" fill="#71717a" font-family="JetBrains Mono, monospace" font-size="11">Client Layer</text><rect x="260" y="42" width="140" height="42" rx="6" fill="#1a1a1d" stroke="#3a3a3e" stroke-width="1"/><text x="330" y="67" text-anchor="middle" fill="#a1a1aa" font-family="JetBrains Mono, monospace" font-size="12">React UI</text><text x="350" y="110" text-anchor="middle" fill="#71717a" font-family="JetBrains Mono, monospace" font-size="11">API Gateway (Spring Cloud Gateway)</text><rect x="180" y="120" width="310" height="32" rx="4" fill="#4f46e510" stroke="#4f46e5" stroke-width="1" stroke-dasharray="4,2"/><text x="335" y="140" text-anchor="middle" fill="#6366f1" font-family="JetBrains Mono, monospace" font-size="11">/api/v1/* \u2014 Centralized Routing &amp; Load Balancing</text><text x="350" y="175" text-anchor="middle" fill="#71717a" font-family="JetBrains Mono, monospace" font-size="11">Microservices (Spring Boot)</text><rect x="40" y="185" width="180" height="42" rx="6" fill="#1a1a1d" stroke="#22c55e" stroke-width="1.5"/><text x="130" y="206" text-anchor="middle" fill="#22c55e" font-family="JetBrains Mono, monospace" font-size="12">User Service</text><text x="130" y="220" text-anchor="middle" fill="#71717a" font-family="JetBrains Mono, monospace" font-size="9">Profiles \u00b7 Roles</text><rect x="260" y="185" width="180" height="42" rx="6" fill="#1a1a1d" stroke="#6366f1" stroke-width="1.5"/><text x="350" y="206" text-anchor="middle" fill="#6366f1" font-family="JetBrains Mono, monospace" font-size="12">Task Service</text><text x="350" y="220" text-anchor="middle" fill="#71717a" font-family="JetBrains Mono, monospace" font-size="9">CRUD \u00b7 Assignments</text><rect x="480" y="185" width="180" height="42" rx="6" fill="#1a1a1d" stroke="#f59e0b" stroke-width="1.5"/><text x="570" y="206" text-anchor="middle" fill="#f59e0b" font-family="JetBrains Mono, monospace" font-size="12">Auth Service</text><text x="570" y="220" text-anchor="middle" fill="#71717a" font-family="JetBrains Mono, monospace" font-size="9">JWT \u00b7 Refresh</text><text x="350" y="250" text-anchor="middle" fill="#71717a" font-family="JetBrains Mono, monospace" font-size="11">Data Layer (Per-Service Database)</text><rect x="130" y="260" width="130" height="28" rx="4" fill="#1a1a1d" stroke="#3a3a3e" stroke-width="1"/><text x="195" y="279" text-anchor="middle" fill="#a1a1aa" font-family="JetBrains Mono, monospace" font-size="10">MySQL (User DB)</text><rect x="290" y="260" width="130" height="28" rx="4" fill="#1a1a1d" stroke="#3a3a3e" stroke-width="1"/><text x="355" y="279" text-anchor="middle" fill="#a1a1aa" font-family="JetBrains Mono, monospace" font-size="10">MySQL (Task DB)</text><rect x="450" y="260" width="130" height="28" rx="4" fill="#1a1a1d" stroke="#3a3a3e" stroke-width="1"/><text x="515" y="279" text-anchor="middle" fill="#a1a1aa" font-family="JetBrains Mono, monospace" font-size="10">MySQL (Auth DB)</text></svg></div>',
        items: [
          '3 independent microservices communicating via REST (Spring Cloud Feign) for loose coupling',
          'Spring Cloud Gateway handles centralized routing, request filtering, and load distribution',
          'Per-service database strategy enables independent scaling and fault isolation',
          'Docker Compose for consistent multi-environment deployment'
        ]
      },
      {
        title: 'Engineering Decisions',
        items: [
          '<strong>Data consistency:</strong> Accepted eventual consistency across services rather than distributed transactions \u2014 used application-level validation and idempotent API design',
          '<strong>Inter-service communication:</strong> Chose synchronous REST calls over async messaging for simplicity at current scale; architecture supports migration to event-driven patterns',
          '<strong>API design:</strong> Versioned endpoints (/api/v1/) with pagination, filtering, and Swagger/OpenAPI documentation'
        ]
      }
    ],
    tech: ['Spring Boot 3', 'Spring Cloud', 'Docker', 'MySQL', 'React', 'JWT', 'Feign Client'],
    outcome: 'Production-deployed microservices system. Detailed schema, API docs, and deployment config on <a href="https://github.com/Sahas2711/TaskSphere_d" style="color:inherit;text-decoration:underline">GitHub</a>.',
    fpStack: 'Spring Boot \u00b7 Spring Cloud \u00b7 Docker',
    fpProblem: '<strong>Problem:</strong> Monolithic apps lack scalability and fault isolation. Built 3 independent microservices (User, Task, Auth) with API Gateway and per-service databases.',
    fpWhy: '<strong>Why it matters:</strong> Demonstrates ability to decompose monoliths into independently deployable services \u2014 a core skill for distributed systems.'
  },
  stayNest: {
    name: 'StayNest',
    badge: 'major',
    badgeText: 'Major Project',
    subtitle: 'Hostel &amp; PG booking platform \u2014 Spring Boot, React, MySQL',
    links: [
      { url: 'https://staynest-dep.onrender.com/', label: 'Demo', icon: 'external' },
      { url: 'https://github.com/Sahas2711/StayNest', label: 'Source', icon: 'github' }
    ],
    problem: '<strong>Problem:</strong> Students need PG/hostel booking with gender-based filters, room-level availability, and short-term booking. Existing platforms (MagicBricks, Nestaway) target full-home rentals \u2014 lacking these specific workflows.',
    blocks: [
      {
        title: 'Architecture',
        content: '<div class="arch-diagram"><svg viewBox="0 0 660 240" xmlns="http://www.w3.org/2000/svg" style="max-width:620px"><rect x="10" y="10" width="640" height="220" rx="8" fill="none" stroke="#2a2a2e" stroke-width="1"/><text x="330" y="30" text-anchor="middle" fill="#71717a" font-family="JetBrains Mono, monospace" font-size="11">Monolithic Layered Architecture</text><rect x="30" y="44" width="600" height="28" rx="4" fill="#1a1a1d" stroke="#6366f1" stroke-width="1.5"/><text x="330" y="62" text-anchor="middle" fill="#6366f1" font-family="JetBrains Mono, monospace" font-size="11">Controller Layer \u2014 REST Controllers (Auth, Property, Booking, Review)</text><text x="330" y="98" text-anchor="middle" fill="#71717a" font-family="JetBrains Mono, monospace" font-size="14">\u2191 \u2193</text><rect x="30" y="108" width="600" height="28" rx="4" fill="#1a1a1d" stroke="#22c55e" stroke-width="1.5"/><text x="330" y="126" text-anchor="middle" fill="#22c55e" font-family="JetBrains Mono, monospace" font-size="11">Service Layer \u2014 Business Logic, Booking Validation, Email Notifications</text><text x="330" y="160" text-anchor="middle" fill="#71717a" font-family="JetBrains Mono, monospace" font-size="14">\u2191 \u2193</text><rect x="30" y="170" width="600" height="28" rx="4" fill="#1a1a1d" stroke="#f59e0b" stroke-width="1.5"/><text x="330" y="188" text-anchor="middle" fill="#f59e0b" font-family="JetBrains Mono, monospace" font-size="11">Repository Layer \u2014 JPA/Hibernate, Spring Data, MySQL (Render)</text></svg></div>',
        items: [
          'Spring Boot layered architecture (Controller \u2192 Service \u2192 Repository) with React frontend',
          'JWT authentication with role-based access (User, Owner, Admin) + Cloudinary for images',
          'MySQL row-level locking (SELECT FOR UPDATE) to prevent double-booking at high concurrency'
        ]
      },
      {
        title: 'Screenshots',
        content: '<div class="screenshots"><a href="https://staynest-dep.onrender.com/" class="screenshot" target="_blank"><div class="ss-icon">&#127968;</div><div class="ss-label">Home Page</div><div class="ss-desc">Property search with location, gender, and budget filters</div></a><div class="screenshot"><div class="ss-icon">&#128203;</div><div class="ss-label">Property Listings</div><div class="ss-desc">Paginated listings with map view and image gallery</div></div><div class="screenshot"><div class="ss-icon">&#128197;</div><div class="ss-label">Booking Flow</div><div class="ss-desc">Date picker, price calculation, and booking confirmation</div></div><div class="screenshot"><div class="ss-icon">&#128202;</div><div class="ss-label">Owner Dashboard</div><div class="ss-desc">Property management, booking requests, earnings overview</div></div></div>'
      }
    ],
    tech: ['Spring Boot 3', 'React 19', 'MySQL', 'JPA/Hibernate', 'JWT', 'Cloudinary', 'Render'],
    outcome: 'Live at <a href="https://staynest-dep.onrender.com/" style="color:inherit;text-decoration:underline">staynest-dep.onrender.com</a>. Handles 500+ property listings with zero data loss during concurrent bookings.',
    fpStack: 'Spring Boot \u00b7 React \u00b7 MySQL \u00b7 JWT',
    fpProblem: '<strong>Problem:</strong> No centralized platform for PG/hostel booking with real-time availability. Built full-stack booking system with JWT auth, role-based access, and race-condition handling.',
    fpWhy: '<strong>Why it matters:</strong> End-to-end product ownership \u2014 from schema design to cloud deployment. Handles 1000+ concurrent transactions.'
  },
  library: {
    name: 'Library Management System',
    badge: 'supporting',
    badgeText: 'Supporting',
    links: [{ url: 'https://github.com/Sahas2711', label: 'Source', icon: 'github' }],
    problem: '<strong>Problem:</strong> Department library managed via spreadsheets \u2014 no real-time availability, manual fine calculation. Built Spring Boot MVC system with JDBC, role-based access, and automated fines.',
    tech: ['Spring Boot', 'JSP', 'JDBC', 'MySQL'],
    outcome: 'Deployed for department use. Zero data loss. Automated fine calculation eliminated manual errors.',
    isMini: true
  },
  sih: {
    name: 'SIH 2025 \u2014 Offline Multilingual Intelligence (NTRO)',
    badge: 'supporting',
    badgeText: 'AI/ML Project',
    links: [{ url: 'https://github.com/Sahas2711', label: 'Source', icon: 'github' }],
    problem: '<strong>Problem:</strong> NTRO needed fully offline Sinhala/Nepali language processing for air-gapped, high-security environments with zero internet dependency. No existing solution met these constraints.',
    blocks: [{
      items: [
        'Offline-first NLP pipeline with local model inference and bundled artifacts',
        'Model quantization reduced memory footprint by 60% for constrained hardware',
        'National hackathon finalist \u2014 demonstrated to NTRO evaluators'
      ]
    }],
    tech: ['Python', 'NLP', 'Offline-First', 'Model Quantization'],
    outcome: 'SIH 2025 National Finalist. Functional prototype with offline translation and analysis for Sinhala and Nepali.',
    isMini: true,
    fpStack: 'Python \u00b7 NLP \u00b7 Offline-First',
    fpProblem: '<strong>Problem:</strong> NTRO needed fully offline Sinhala/Nepali processing for air-gapped security environments.',
    fpWhy: '<strong>Why it matters:</strong> National-level hackathon finalist. Built offline NLP pipeline for India\'s intelligence agency.'
  },
  awsAutomation: {
    name: 'AWS SDK Automation CLI',
    badge: 'supporting',
    badgeText: 'DevOps',
    links: [{ url: 'https://github.com/Sahas2711/AWS-SDK_Automation', label: 'Source', icon: 'github' }],
    problem: '<strong>Problem:</strong> Manual cloud resource provisioning is slow and error-prone. Built CLI tool automating EC2, S3, IAM, and VPC setup \u2014 reducing provisioning time from 10 min to &lt;3 min.',
    tech: ['Python', 'Boto3', 'AWS (EC2, S3, IAM, VPC)'],
    outcome: 'Reduced cloud provisioning time by 70%. CLI tool used for rapid environment setup.',
    isMini: true,
    fpStack: 'Python \u00b7 Boto3 \u00b7 AWS',
    fpProblem: '<strong>Problem:</strong> Manual cloud provisioning is slow. Built CLI tool automating EC2, S3, IAM, VPC setup.',
    fpWhy: '<strong>Why it matters:</strong> Infrastructure-as-code thinking. Automates operations workflows.'
  }
};

// ---- Shared Experience ----
const EXPERIENCES = [
  {
    id: 'inventra',
    company: 'Inventra \u2014 Laxmi Granites (Freelance)',
    role: 'Full Stack Developer \u00b7 Client-Facing',
    date: 'Dec 2025 \u2013 May 2026 \u00b7 Remote',
    current: true,
    details: [
      'Delivered production-ready ERP-style system for a real client \u2014 billing, staff management, and GST-compliant invoice generation from requirements gathering through deployment',
      'Spring Boot backend with MySQL database, deployed on Railway with direct client communication for feature refinement and transaction workflow support'
    ]
  },
  {
    id: 'glimora',
    company: 'Glimora International',
    role: 'Trainee AI Full Stack Developer',
    date: 'Apr 2026 \u2013 Present \u00b7 Hybrid',
    current: false,
    details: [
      'Developing Spring Boot backend services with JWT auth and REST APIs for document-processing workflows across multiple application modules',
      'Containerized applications with Docker and contributed to AI-powered platform features'
    ]
  },
  {
    id: 'eduskills',
    company: 'AICTE Eduskills',
    role: 'Full Stack Developer Intern',
    date: 'Jul 2025 \u2013 Sep 2025 \u00b7 Remote',
    current: false,
    details: [
      'Built full-stack blogging platform with Spring Boot, React, and MySQL supporting 500+ user interactions',
      'Developed REST APIs for auth and CRUD operations; applied layered architecture for scalability'
    ]
  },
  {
    id: 'campusCred',
    company: 'Campus Credentials',
    role: 'Full Stack Developer Intern',
    date: 'Jun 2025 \u2013 Aug 2025 \u00b7 Remote',
    current: false,
    details: [
      'Architected StayNest \u2014 hostel booking platform with JWT auth, role-based access, and MySQL persistence',
      '4-member team using Git workflows; deployed on Render with auto-deploy from GitHub'
    ]
  }
];

// ---- Shared Achievements ----
const ACHIEVEMENTS = [
  { icon: '\uD83C\uDFC6', title: 'Smart India Hackathon (SIH) 2025 \u2014 National Finalist', desc: 'Selected for NTRO\'s offline multilingual intelligence problem. Competed among thousands of teams nationally.' },
  { icon: '\uD83D\uDCC8', title: 'Amazon ML Challenge \u2014 Global Rank #127', desc: 'Ranked 127th out of thousands of participants in Amazon\'s machine learning challenge.' },
  { icon: '\uD83C\uDF93', title: 'Super 30 Scholar \u2014 MIT Academy of Engineering', desc: 'Selected among top 30 students for merit-based scholarship and faculty mentorship.' },
  { icon: '\uD83C\uDFC6', title: 'Atos Srijan Hackathon 2025 \u2014 Special Recognition', desc: 'Industry hackathon recognition for innovative solution design.' },
  { icon: '\u2B50', title: 'CodeChef \u2014 3 Star', desc: 'Consistent competitive programming performance.' }
];

// ---- Role Data ----
const ROLES = {
  backend: {
    meta: {
      title: 'Sahas Nagar \u2014 Backend Engineer, Java & Spring Boot',
      description: 'Backend engineer who ships production systems for real clients. Freelance ERP-style delivery (billing, invoicing, staff mgmt). SIH 2025 Finalist. Java, Spring Boot, distributed architecture.',
      keywords: 'Sahas Nagar, Backend Engineer, Java Developer, Spring Boot, REST APIs, Microservices, Docker, AWS, SIH 2025'
    },
    hero: {
      name: 'Sahas Nagar',
      title: 'Backend Engineer \u00b7 Java &amp; Spring Boot',
      tagline: 'Shipped a production ERP-style system for a real client \u2014 billing, GST-compliant invoicing, staff management. Microservices, distributed architecture, API design. SIH 2025 National Finalist.',
      metrics: [
        { label: 'Clients Shipped', value: '1' },
        { label: 'Live Systems', value: '3' },
        { label: 'SIH 2025', value: 'Finalist' },
        { label: 'Amazon ML', value: '#127' },
        { label: 'DSA Solved', value: '315+' }
      ]
    },
    valueProps: [
      { icon: '\u2699\uFE0F', title: 'Microservices Architecture', desc: 'TaskSphere: 3-service microsystems with Spring Cloud, API Gateway, Docker Compose, and per-service databases.' },
      { icon: '\uD83D\uDCBC', title: 'Freelance Client Delivery', desc: 'Built and shipped an ERP-style system for Laxmi Granites \u2014 billing, invoicing, staff management, deployed on Railway.' },
      { icon: '\uD83C\uDFC6', title: 'SIH 2025 National Finalist', desc: 'Selected for NTRO\'s offline multilingual intelligence \u2014 competed among thousands.' }
    ],
    featuredProjects: ['inventra', 'taskSphere', 'stayNest'],
    capabilities: [
      { title: 'Microservices & Distributed Systems', desc: 'Architected 3-service systems with Spring Cloud Gateway, Feign clients, Docker Compose orchestration, and per-service database isolation.' },
      { title: 'Authentication & Security', desc: 'JWT-based auth across production applications using Spring Security filters, BCrypt, role-based access, and refresh token rotation.' },
      { title: 'API Design & Integration', desc: 'REST APIs with versioned endpoints, pagination, filtering, Swagger/OpenAPI docs. Designed for idempotency and eventual consistency.' },
      { title: 'Cloud Deployments', desc: 'Containerized Docker applications deployed on Render and Railway. Managed MySQL, auto-deploy from GitHub, and CDN integration.' }
    ],
    experienceOrder: ['inventra', 'glimora', 'eduskills', 'campusCred'],
    projects: ['inventra', 'taskSphere', 'stayNest', 'library'],
    skills: {
      clusters: [
        {
          title: 'Languages & Frameworks',
          primary: ['Java', 'Spring Boot', 'Spring MVC', 'Spring Security', 'Spring Data JPA'],
          secondary: ['Python', 'JavaScript', 'Django']
        },
        {
          title: 'Databases, Infrastructure & Cloud',
          primary: ['MySQL', 'JDBC', 'JPA/Hibernate'],
          secondary: ['Oracle', 'Docker', 'AWS (EC2, S3)', 'Git', 'Maven', 'Linux']
        },
        {
          title: 'Engineering Practices',
          primary: ['REST API Design', 'OOP', 'MVC Architecture', 'Microservices'],
          secondary: ['Data Structures & Algorithms', 'System Design']
        }
      ]
    },
    achievements: [0, 1, 2, 3, 4] // indices into ACHIEVEMENTS, reordered
  },

  fullstack: {
    meta: {
      title: 'Sahas Nagar \u2014 Full Stack Developer, React & Spring Boot',
      description: 'Full stack developer who builds end-to-end applications. React frontends, Spring Boot backends, MySQL databases. Client delivery. SIH 2025 Finalist.',
      keywords: 'Sahas Nagar, Full Stack Developer, React, Spring Boot, Java, JavaScript, REST APIs, MySQL, Docker'
    },
    hero: {
      name: 'Sahas Nagar',
      title: 'Full Stack Developer \u00b7 React &amp; Spring Boot',
      tagline: 'Built full-stack booking platforms, ERP systems, and microservices from database to deployment. React frontends, Spring Boot backends, cloud-native delivery. SIH 2025 Finalist.',
      metrics: [
        { label: 'Clients Shipped', value: '1' },
        { label: 'Live Systems', value: '3' },
        { label: 'SIH 2025', value: 'Finalist' },
        { label: 'Amazon ML', value: '#127' },
        { label: 'Live Deployments', value: '3' }
      ]
    },
    valueProps: [
      { icon: '\uD83D\uDCBC', title: 'Freelance Client Delivery', desc: 'Built and shipped an ERP-style system for Laxmi Granites \u2014 billing, invoicing, staff management, deployed on Railway.' },
      { icon: '\uD83C\uDFE0', title: 'Full-Stack Booking Platform', desc: 'StayNest: React + Spring Boot + MySQL with JWT auth, role-based access, and race-condition handling for 1000+ concurrent transactions.' },
      { icon: '\uD83C\uDFC6', title: 'SIH 2025 National Finalist', desc: 'Selected for NTRO\'s offline multilingual intelligence \u2014 competed among thousands.' }
    ],
    featuredProjects: ['stayNest', 'inventra', 'taskSphere'],
    capabilities: [
      { title: 'Full-Stack Applications', desc: 'End-to-end development from database schema (MySQL) to React frontend. Booking platforms, ERP systems, and blogging platforms with real-time features.' },
      { title: 'React & Modern Frontend', desc: 'React 19 with hooks, state management, routing, and responsive design. Integrated with Cloudinary for media and styled for production.' },
      { title: 'Spring Boot Backend', desc: 'REST APIs, JWT auth, Spring Security, JPA/Hibernate, layered architecture. Services handling 1000+ concurrent transactions.' },
      { title: 'Cloud & DevOps', desc: 'Docker containerization, deployments on Render and Railway, Git workflows, auto-deploy from GitHub, managed MySQL databases.' }
    ],
    experienceOrder: ['inventra', 'campusCred', 'glimora', 'eduskills'],
    projects: ['stayNest', 'inventra', 'taskSphere', 'library'],
    skills: {
      clusters: [
        {
          title: 'Frontend & Backend',
          primary: ['Java', 'Spring Boot', 'JavaScript', 'React', 'HTML/CSS'],
          secondary: ['Spring MVC', 'Spring Security', 'Python', 'Django']
        },
        {
          title: 'Databases & Cloud',
          primary: ['MySQL', 'JPA/Hibernate', 'JDBC'],
          secondary: ['Docker', 'AWS (EC2, S3)', 'Git', 'Maven', 'Linux', 'Oracle']
        },
        {
          title: 'Engineering Practices',
          primary: ['REST API Design', 'Full-Stack Architecture', 'OOP', 'MVC'],
          secondary: ['Data Structures & Algorithms', 'Microservices', 'System Design']
        }
      ]
    },
    achievements: [0, 1, 2, 3, 4]
  },

  aiml: {
    meta: {
      title: 'Sahas Nagar \u2014 AI/ML Engineer, Python & Machine Learning',
      description: 'AI/ML engineer with Amazon ML Rank #127. Python, NLP, offline multilingual intelligence. AI-powered document processing. SIH 2025 Finalist building for NTRO.',
      keywords: 'Sahas Nagar, AI/ML Engineer, Python, Machine Learning, NLP, Offline-First, SIH 2025, Amazon ML Challenge'
    },
    hero: {
      name: 'Sahas Nagar',
      title: 'AI/ML Engineer \u00b7 Python &amp; Machine Learning',
      tagline: 'Amazon ML Challenge Global Rank #127. Built offline NLP pipeline for NTRO \u2014 model quantization, multilingual processing. AI-powered document workflows at Glimora. Python, TensorFlow, NLP.',
      metrics: [
        { label: 'Amazon ML', value: '#127' },
        { label: 'SIH 2025', value: 'Finalist' },
        { label: 'ML Projects', value: '2' },
        { label: 'DSA Solved', value: '315+' },
        { label: 'CodeChef', value: '3\u2605' }
      ]
    },
    valueProps: [
      { icon: '\uD83D\uDCC8', title: 'Amazon ML Rank #127', desc: 'Global rank 127 among thousands in Amazon\'s ML challenge. Strong foundation in machine learning and data-driven problem solving.' },
      { icon: '\uD83C\uDFC6', title: 'SIH 2025 National Finalist', desc: 'Selected for NTRO\'s offline multilingual intelligence \u2014 NLP pipeline for Sinhala and Nepali in air-gapped environments.' },
      { icon: '\u2699\uFE0F', title: 'AI-Powered Document Processing', desc: 'At Glimora: contributing to AI-powered platform features alongside Spring Boot backend services.' }
    ],
    featuredProjects: ['sih', 'awsAutomation', 'taskSphere'],
    capabilities: [
      { title: 'Natural Language Processing', desc: 'Built offline NLP pipeline for Sinhala and Nepali language processing. Model quantization reduced memory footprint by 60% for constrained hardware.' },
      { title: 'Machine Learning Competitions', desc: 'Global Rank #127 in Amazon ML Challenge. Strong analytical and data-driven problem-solving skills backed by 315+ DSA problems.' },
      { title: 'Python Ecosystem', desc: 'Python for ML pipelines, data processing, and automation. Built AWS SDK automation CLI with Boto3 for EC2, S3, IAM, and VPC.' },
      { title: 'AI Integration', desc: 'Contributing to AI-powered document-processing features at Glimora. Combining backend engineering (Spring Boot) with ML capabilities.' }
    ],
    experienceOrder: ['glimora', 'inventra', 'eduskills', 'campusCred'],
    projects: ['sih', 'awsAutomation', 'library'],
    skills: {
      clusters: [
        {
          title: 'AI/ML & Languages',
          primary: ['Python', 'Machine Learning', 'NLP'],
          secondary: ['Java', 'JavaScript', 'Django', 'Spring Boot']
        },
        {
          title: 'Cloud & Infrastructure',
          primary: ['AWS (EC2, S3)', 'Docker', 'Boto3'],
          secondary: ['MySQL', 'Git', 'Maven', 'Linux']
        },
        {
          title: 'Engineering Practices',
          primary: ['Data Structures & Algorithms', 'OOP', 'REST API Design'],
          secondary: ['System Design', 'Microservices', 'MVC']
        }
      ]
    },
    achievements: [1, 0, 2, 3, 4]
  },

  sde: {
    meta: {
      title: 'Sahas Nagar \u2014 Software Engineer, Java & Full Stack',
      description: 'Software engineer with production delivery experience. Java, Spring Boot, React, microservices. SIH 2025 Finalist. Building systems that ship.',
      keywords: 'Sahas Nagar, Software Engineer, Java, Spring Boot, React, Microservices, Full Stack, SIH 2025'
    },
    hero: {
      name: 'Sahas Nagar',
      title: 'Software Engineer \u00b7 Java &amp; Full Stack',
      tagline: 'Shipped production systems for real clients. Full-stack applications, microservices, and offline AI \u2014 from requirements to deployment. SIH 2025 Finalist. 315+ DSA problems solved.',
      metrics: [
        { label: 'Clients Shipped', value: '1' },
        { label: 'Live Systems', value: '3' },
        { label: 'SIH 2025', value: 'Finalist' },
        { label: 'Amazon ML', value: '#127' },
        { label: 'DSA Solved', value: '315+' }
      ]
    },
    valueProps: [
      { icon: '\uD83D\uDCBC', title: 'Freelance Client Delivery', desc: 'Built and shipped an ERP-style system for Laxmi Granites \u2014 billing, invoicing, staff management, deployed on Railway.' },
      { icon: '\u2699\uFE0F', title: 'Microservices & Full-Stack', desc: 'TaskSphere: 3-service microsystems. StayNest: full-stack booking platform. React + Spring Boot + MySQL across the stack.' },
      { icon: '\uD83C\uDFC6', title: 'SIH 2025 National Finalist', desc: 'Selected for NTRO\'s offline multilingual intelligence \u2014 competed among thousands.' }
    ],
    featuredProjects: ['inventra', 'stayNest', 'taskSphere'],
    capabilities: [
      { title: 'Full-Stack Development', desc: 'End-to-end applications with React frontends and Spring Boot backends. Hostel booking platform, ERP system, and task management with real-time features.' },
      { title: 'Microservices Architecture', desc: '3-service microsystems with Spring Cloud Gateway, Feign clients, Docker Compose, per-service databases, and eventual consistency patterns.' },
      { title: 'Authentication & Security', desc: 'JWT auth with Spring Security, BCrypt, refresh token rotation, and role-based access control across multiple production applications.' },
      { title: 'Cloud & DevOps', desc: 'Docker containerization, Railway and Render deployments, MySQL management, Git-based CI/CD, and AWS infrastructure automation.' }
    ],
    experienceOrder: ['inventra', 'glimora', 'campusCred', 'eduskills'],
    projects: ['inventra', 'stayNest', 'taskSphere', 'library'],
    skills: {
      clusters: [
        {
          title: 'Languages & Frameworks',
          primary: ['Java', 'Spring Boot', 'JavaScript', 'React', 'Python'],
          secondary: ['Spring MVC', 'Spring Security', 'Spring Data JPA', 'Django']
        },
        {
          title: 'Databases & Cloud',
          primary: ['MySQL', 'JDBC', 'JPA/Hibernate', 'Docker'],
          secondary: ['AWS (EC2, S3)', 'Oracle', 'Git', 'Maven', 'Linux']
        },
        {
          title: 'Engineering Practices',
          primary: ['REST API Design', 'OOP', 'MVC Architecture', 'Data Structures & Algorithms'],
          secondary: ['Microservices', 'System Design']
        }
      ]
    },
    achievements: [0, 1, 2, 3, 4]
  }
};

// =============================================
// RENDER FUNCTIONS
// =============================================

function renderHero(data) {
  const h = data.hero;
  return `<section id="hero">
  <div class="hero-grid">
    <div class="hero-left">
      <h1 class="hero-name">${h.name}</h1>
      <p class="hero-title">${h.title}</p>
      <p class="hero-tagline">${h.tagline}</p>
      <div class="hero-links">
        <a href="${RESUME_URL}" class="primary" target="_blank">${icon('resume')} Resume</a>
        <a href="https://github.com/Sahas2711" target="_blank">${icon('githubBig')} GitHub</a>
        <a href="https://www.linkedin.com/in/sahas-nagar/" target="_blank">${icon('linkedin')} LinkedIn</a>
        <a href="mailto:sahas.p.nagar@gmail.com">${icon('email')} Email</a>
      </div>
    </div>
    <div class="hero-right">
      <div class="hero-card">${h.metrics.map(m => `<div class="hero-card-item"><span class="hero-card-label">${m.label}</span><span class="hero-card-value">${m.value}</span></div>`).join('\n        ')}
      </div>
    </div>
  </div>
</section>`;
}

function renderValueProps(items) {
  return `<section id="value-prop">
  <div class="value-prop">${items.map(v => `<div class="vp-card">
      <div class="vp-icon">${v.icon}</div>
      <h4>${v.title}</h4>
      <p>${v.desc}</p>
    </div>`).join('\n    ')}
  </div>
</section>`;
}

function renderFeaturedProjects(ids) {
  const items = ids.map(id => PROJECTS[id]).filter(Boolean);
  return `<section id="github">
  <div class="section-label">/featured-work</div>
  <div class="featured-projects">${items.map(p => {
    const style = p.highlight ? ' style="border-color:var(--accent-border);background:var(--accent-bg)"' : '';
    return `<a href="${p.links && p.links[0] ? p.links[0].url : '#'}" class="fp-card" target="_blank"${style}>
      <div class="fp-stack"${p.highlight ? ' style="color:var(--green)"' : ''}>${p.fpStack || ''}</div>
      <div class="fp-problem">${p.fpProblem || p.problem}</div>
      <div class="fp-why">${p.fpWhy || ''}</div>
    </a>`;
  }).join('\n    ')}
  </div>
</section>`;
}

function renderCapabilities(items) {
  return `<section id="capabilities">
  <div class="section-label">/what-i-build</div>
  <div class="capabilities">${items.map(c => `<div class="capability">
      <h4>${c.title}</h4>
      <p>${c.desc}</p>
    </div>`).join('\n    ')}
  </div>
</section>`;
}

function renderExperience(ids) {
  const items = ids.map(id => EXPERIENCES.find(e => e.id === id)).filter(Boolean);
  return `<section id="experience">
  <div class="section-label">/experience</div>
  <div class="timeline">${items.map(e => {
    const isCurrent = e.current ? ' current' : '';
    return `<div class="timeline-item">
      <div class="timeline-dot${isCurrent}"></div>
      <div class="timeline-header">
        <div class="timeline-company">${e.company}</div>
        <div class="timeline-role">${e.role}</div>
        <div class="timeline-date">${e.date}</div>
      </div>
      <ul class="timeline-details">${e.details.map(d => `<li>${d}</li>`).join('\n        ')}
      </ul>
    </div>`;
  }).join('\n    ')}
  </div>
</section>`;
}

function renderProjects(ids) {
  const items = ids.map(id => PROJECTS[id]).filter(Boolean);
  return `<section id="projects" class="projects">
  <div class="section-label">/projects</div>${items.map(p => {
    // Check if this is a mini project (library, sih, aws)
    if (p.isMini) {
      return `
  <div class="project">
    <div class="project-badge ${p.badge}">${p.badgeText}</div>
    <div class="project-header">
      <div class="project-name" style="font-weight:600;font-size:14px">${p.name}</div>
      <div class="project-links">${(p.links || []).map(l => `<a href="${l.url}" target="_blank">${icon(l.icon)} ${l.label}</a>`).join('\n          ')}
      </div>
    </div>
    <div class="project-problem">${p.problem}</div>${p.blocks ? p.blocks.map(b => `<div class="project-block">
      ${b.title ? `<div class="project-block-title">${b.title}</div>` : ''}
      ${b.items ? `<div class="project-block-content">${b.items.map(i => `<li>${i}</li>`).join('\n          ')}
      </div>` : ''}
      ${b.content || ''}
    </div>`).join('\n    ') : ''}
    <div class="project-tech">${(p.tech || []).map(t => `<span>${t}</span>`).join('\n      ')}</div>
    <div class="project-outcome"><strong>Outcome:</strong> ${p.outcome}</div>
  </div>`;
    }

    // Full project with h3 title
    return `
  <h3>${p.name}</h3>
  <p class="subtitle">${p.subtitle}</p>
  <div class="project">
    <div class="project-badge ${p.badge}">${p.badgeText}</div>
    <div class="project-header">
      <div class="project-links">${(p.links || []).map(l => `<a href="${l.url}" target="_blank">${icon(l.icon)} ${l.label}</a>`).join('\n          ')}
      </div>
    </div>
    <div class="project-problem">${p.problem}</div>${p.blocks.map(b => `<div class="project-block">
      ${b.title ? `<div class="project-block-title">${b.title}</div>` : ''}
      ${b.items ? `<div class="project-block-content">${b.items.map(i => `<li>${i}</li>`).join('\n          ')}
      </div>` : ''}
      ${b.content || ''}
    </div>`).join('\n    ')}
    <div class="project-tech">${p.tech.map(t => `<span>${t}</span>`).join('\n      ')}</div>
    <div class="project-outcome"><strong>Outcome:</strong> ${p.outcome}</div>
  </div>`;
  }).join('\n')}
</section>`;
}

function renderSkills(data) {
  const s = data.skills;
  return `<section id="skills">
  <div class="section-label">/skills</div>${s.clusters.map(c => `
  <div class="skill-cluster">
    <div class="skill-cluster-title">${c.title}</div>
    <div class="skill-cluster-tags">${c.primary.map(t => `<span class="skill-tag">${t}</span>`).join('\n      ')}${c.secondary.map(t => `\n      <span class="skill-tag secondary">${t}</span>`).join('')}
    </div>
  </div>`).join('')}
</section>`;
}

function renderAchievements(indices) {
  // Reorder achievements based on indices
  const items = indices.map(i => ACHIEVEMENTS[i]).filter(Boolean);
  // Add any remaining that aren't in the indices
  ACHIEVEMENTS.forEach((a, i) => {
    if (!indices.includes(i) && !items.find(item => item.title === a.title)) {
      items.push(a);
    }
  });

  return `<section id="achievements">
  <div class="section-label">/achievements</div>${items.map(a => `
  <div class="achievement">
    <div class="achievement-icon">${a.icon}</div>
    <div class="achievement-content">
      <div class="achievement-title">${a.title}</div>
      <div class="achievement-desc">${a.desc}</div>
    </div>
  </div>`).join('')}
</section>`;
}

function renderEducation() {
  return `<section id="education">
  <div class="section-label">/education</div>
  <div class="edu-item">
    <h3>B.Tech in Computer Engineering</h3>
    <div class="edu-meta">MIT Academy of Engineering, Pune \u00b7 2023 \u2013 2027</div>
    <div class="edu-detail">CGPA: 8.18 / 10</div>
    <div class="edu-coursework"><strong>Coursework:</strong> DSA, DBMS, OOP, Networks, OS, Software Engineering</div>
  </div>
</section>`;
}

function renderContact() {
  return `<section id="contact">
  <div class="section-label">/contact</div>
  <div class="contact-links">
    <a href="https://github.com/Sahas2711" target="_blank">${ICONS.githubBig} GitHub/Sahas2711</a>
    <a href="https://www.linkedin.com/in/sahas-nagar/" target="_blank">${ICONS.linkedin} LinkedIn/in/sahas-nagar</a>
    <a href="mailto:sahas.p.nagar@gmail.com">${ICONS.email} sahas.p.nagar@gmail.com</a>
    <a href="${RESUME_URL}" target="_blank">${ICONS.resume} Resume (PDF)</a>
  </div>
</section>`;
}

// =============================================
// MAIN RENDER FUNCTION
// =============================================

function renderPortfolio(role) {
  const data = ROLES[role];
  if (!data) {
    document.body.innerHTML = '<div style="padding:40px;text-align:center;color:var(--text-secondary)"><h2>Portfolio variant not found</h2><p>Role: ' + role + '</p></div>';
    return;
  }

  const main = document.querySelector('main');
  if (!main) return;

  main.innerHTML =
    renderHero(data) +
    renderValueProps(data.valueProps) +
    renderFeaturedProjects(data.featuredProjects) +
    renderCapabilities(data.capabilities) +
    renderExperience(data.experienceOrder) +
    renderProjects(data.projects) +
    renderSkills(data) +
    renderAchievements(data.achievements) +
    renderEducation() +
    renderContact();

  // Re-attach nav events after render
  setupNavEvents();
  setupIntersectionObserver();
}

// =============================================
// NAVIGATION & INTERACTIONS
// =============================================

function setupNavEvents() {
  const t = document.getElementById('themeToggle');
  const mt = document.getElementById('mobileToggle');
  const mm = document.getElementById('mobileMenu');

  if (t) {
    // Remove old listener by cloning
    const newT = t.cloneNode(true);
    t.parentNode.replaceChild(newT, t);
    newT.addEventListener('click', toggleTheme);
  }
  if (mt && mm) {
    const newMt = mt.cloneNode(true);
    mt.parentNode.replaceChild(newMt, mt);
    newMt.addEventListener('click', () => {
      const menu = document.getElementById('mobileMenu');
      if (menu) menu.classList.toggle('open');
    });
  }

  // Apply saved theme
  if (localStorage.getItem('theme') === 'light') {
    document.documentElement.classList.add('light');
  }
}

function toggleTheme() {
  const e = document.documentElement;
  e.classList.toggle('light');
  localStorage.setItem('theme', e.classList.contains('light') ? 'light' : 'dark');
}

function setupIntersectionObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('section, .project, .value-prop, .featured-projects').forEach(el => observer.observe(el));
}

// Apply saved theme immediately
(function() {
  if (localStorage.getItem('theme') === 'light') {
    document.documentElement.classList.add('light');
  }
})();
