/**
 * Central project dataset — single source of truth for the projects
 * directory. Every repo and demo URL here was verified against the
 * public GitHub profile before being included. Dead deployments are
 * intentionally omitted rather than linked.
 */
window.PROJECTS = [
  {
    name: "REDROB",
    slug: "redrob",
    category: "AI knowledge platform",
    cats: ["backend", "ai"],
    flagship: true,
    summary:
      "RAG knowledge platform: async document ingestion into pgvector, workspace-scoped JWT auth, and LangGraph research workflows that answer questions with citations.",
    problem:
      "Teams accumulate documents but have no reliable way to query them together — ad-hoc chatbots lack workspace boundaries, provenance, and a real ingestion pipeline.",
    solution:
      "Workspaces own their documents. Uploads land in S3-compatible storage; a Celery worker parses, deduplicates, chunks and embeds them into PostgreSQL + pgvector. A LangGraph research workflow retrieves with strict similarity thresholds and returns structured answers with citations.",
    stack: ["FastAPI", "PostgreSQL + pgvector", "Redis", "Celery", "LangGraph", "SQLAlchemy 2", "OpenAI embeddings"],
    repo: "https://github.com/Sahas2711/Redrob_AI",
    demo: null,
    year: "2026",
  },
  {
    name: "DocuMitra",
    slug: "documitra",
    category: "Document intelligence",
    cats: ["ai", "automation", "backend"],
    flagship: true,
    summary:
      "Document processing system that extracts text, classifies by department, summarizes, highlights, and routes documents — with field extraction and multilingual support.",
    problem:
      "Mixed-format documents (PDF, DOCX, XLSX, scans) have to be read, sorted and forwarded to the right team by hand — slow, inconsistent, and impossible to audit at volume.",
    solution:
      "An extraction pipeline (PyPDF2, python-docx, openpyxl, OCR) feeds a trained Naive Bayes classifier that scores 12 departments with confidence and keyword evidence, extracts structured fields, generates department-specific summaries and highlighted copies, and routes results by email.",
    stack: ["Python", "OCR", "NLP", "scikit-learn", "React"],
    repo: "https://github.com/Sahas2711/DocuMitra",
    demo: null,
    year: "2025 – 2026",
    note: "Team project — I worked on the automation and processing pipeline.",
  },
  {
    name: "StayNest",
    slug: "staynest",
    category: "Full-stack booking platform",
    cats: ["backend", "fullstack"],
    flagship: true,
    summary:
      "PG/hostel booking platform: Spring Boot REST APIs with JWT auth and role-based access, property search and booking workflows, and a React frontend — deployed on Render.",
    problem:
      "Students need a single place to search verified PG/hostel listings and book them; owners need lightweight tools to manage listings, bookings and tenants.",
    solution:
      "Spring Boot 3 / Java 17 backend with Spring Security, JWT authentication, Spring Data JPA over MySQL, mail services for notifications, and a React 19 frontend with map integration and image hosting. Built with a four-person team on Git workflows.",
    stack: ["Spring Boot", "Java 17", "Spring Security", "JWT", "MySQL", "React", "Render"],
    repo: "https://github.com/Sahas2711/StayNest",
    repo2: "https://github.com/Sahas2711/StayNest_DEP",
    demo: null,
    year: "2025",
    note: "Built during a 2025 internship at Campus Credentials.",
  },
  {
    name: "MonArch",
    slug: "monarch",
    category: "Multi-agent AI platform",
    cats: ["ai", "backend"],
    flagship: true,
    summary:
      "Multi-agent orchestration platform: LangGraph agents for planning, research, hybrid RAG and vision, wrapped in guardrails, rate limiting and an evaluation harness.",
    problem:
      "Single-shot LLM calls fail on complex tasks — no routing, no grounding in documents, no protection against prompt injection or hallucinated output.",
    solution:
      "A FastAPI entrypoint fronts a sliding-window rate limiter and PII/injection guardrails, then a LangGraph orchestrator routes to planner, researcher, hybrid RAG (FAISS + BM25) and Groq vision agents. A reflection critic retries failed passes; an output-faithfulness guardrail checks the final answer. Dockerised, deployed on AWS.",
    stack: ["FastAPI", "LangGraph", "FAISS + BM25", "Groq Vision", "FastMCP", "Docker", "AWS"],
    repo: "https://github.com/Sahas2711/MonArch_AI",
    demo: null,
    year: "2026",
  },
  {
    name: "OrbitPMS",
    slug: "orbitpms",
    category: "Property management system",
    cats: ["backend", "fullstack"],
    flagship: true,
    summary:
      "Hotel PMS covering rooms, reservations, check-in/out and invoicing — FastAPI + PostgreSQL with a React 19 frontend, JWT roles, and database-level double-booking protection.",
    problem:
      "Small hotels run bookings, front-desk state and invoicing across spreadsheets, with double bookings and no audit trail.",
    solution:
      "FastAPI + SQLAlchemy backend with access/refresh JWT tokens and three roles (admin, receptionist, staff). Room status is a validated state machine; bookings are protected twice — an application-level date-overlap check and a PostgreSQL GiST exclusion constraint. React 19 + Vite frontend.",
    stack: ["FastAPI", "PostgreSQL", "SQLAlchemy", "React 19", "Vite", "JWT"],
    repo: "https://github.com/Sahas2711/OrbitPMS",
    demo: "https://orbit-pms.vercel.app",
    year: "2026",
  },
  {
    name: "BhashaSetu",
    slug: "bhashasetu",
    category: "Offline AI translation",
    cats: ["ai", "automation"],
    flagship: true,
    summary:
      "Fully offline OCR + translation system for Nepali and Sinhala literature — PaddleOCR, NLLB-200 and FastText running locally behind a Flask API, with a Streamlit front end.",
    problem:
      "Literature translation tools assume connectivity and cloud GPUs; heritage and low-connectivity contexts need everything to run on the reader's own machine.",
    solution:
      "A Flask backend orchestrates PaddleOCR for text extraction, FastText for language detection, and NLLB-200 for offline translation. A separate Streamlit front end calls the API; the models run on-device with no cloud inference.",
    stack: ["Python", "Flask", "PaddleOCR", "NLLB-200", "FastText", "Streamlit"],
    repo: "https://github.com/Sahas2711/BhashaSetu",
    demo: null,
    year: "2026",
  },

  /* ---- Supporting projects ---- */
  {
    name: "Sampark AI",
    slug: "samparkai",
    category: "Civic decision intelligence",
    cats: ["ai", "backend"],
    flagship: false,
    summary:
      "Multi-agent platform that turns citizen complaints into policy-grounded municipal decisions — LangGraph pipeline with Gemini, FAISS RAG and DuckDB analytics.",
    stack: ["FastAPI", "LangGraph", "Gemini API", "FAISS", "DuckDB", "Docker"],
    repo: "https://github.com/Sahas2711/SamparkAI",
    demo: "https://sampark-ai-psi.vercel.app",
    year: "2026",
  },
  {
    name: "ResolveX",
    slug: "resolvex",
    category: "Enterprise complaint management",
    cats: ["fullstack", "backend"],
    flagship: false,
    summary:
      "Complaint lifecycle platform with RBAC (5 roles, 40+ permissions), SLA tracking, threaded comments and analytics dashboards on Next.js + Prisma + PostgreSQL.",
    stack: ["Next.js", "React", "Prisma", "PostgreSQL", "RBAC"],
    repo: "https://github.com/Sahas2711/ResolveX",
    demo: null,
    year: "2026",
  },
  {
    name: "Snapora",
    slug: "snapora",
    category: "Travel storytelling platform",
    cats: ["fullstack"],
    flagship: false,
    summary:
      "Full-stack visual storytelling platform — typed end to end with Next.js, Prisma and Neon PostgreSQL, deployed on Vercel.",
    stack: ["Next.js", "TypeScript", "Prisma", "Neon", "Tailwind CSS"],
    repo: "https://github.com/Sahas2711/Snapora",
    demo: "https://snapora-psi.vercel.app",
    year: "2026",
  },
  {
    name: "AI Media OS · HiveMind",
    slug: "hivemind",
    category: "Media intelligence platform",
    cats: ["ai", "automation"],
    flagship: false,
    summary:
      "Unified media platform where video insights, news curation and social publishing share memory and feed each other's models.",
    stack: ["Python", "AI workflows"],
    repo: "https://github.com/Sahas2711/AI-Media-OS-HiveMind",
    demo: "https://ai-media-os-hive-mind.vercel.app",
    year: "2026",
  },
  {
    name: "SpamShield",
    slug: "spamshield",
    category: "ML classification",
    cats: ["ai"],
    flagship: false,
    summary:
      "Email spam classifier — NLP preprocessing, TF-IDF features and Logistic Regression / Naive Bayes, packaged as a Streamlit app.",
    stack: ["Python", "scikit-learn", "NLP", "Streamlit"],
    repo: "https://github.com/Sahas2711/SpamShield",
    demo: null,
    year: "2026",
    note: "The hosted Streamlit demo is sign-in gated; run it from the repository instead.",
  },
  {
    name: "TaskSphere",
    slug: "tasksphere",
    category: "Microservices",
    cats: ["backend", "cloud"],
    flagship: false,
    summary:
      "Task management system decomposed into Spring Boot microservices with Eureka service discovery, an API Gateway and Dockerised deployments.",
    stack: ["Spring Boot", "Spring Cloud", "Eureka", "API Gateway", "Docker"],
    repo: "https://github.com/Sahas2711/TaskSphere",
    demo: null,
    year: "2025",
  },
  {
    name: "AWS Resource Manager",
    slug: "aws-sdk-automation",
    category: "Cloud automation",
    cats: ["cloud", "automation"],
    flagship: false,
    summary:
      "Menu-driven Python CLI built on Boto3 to provision and manage EC2, VPC, IAM and S3 resources without console work.",
    stack: ["Python", "Boto3", "AWS"],
    repo: "https://github.com/Sahas2711/AWS-SDK_Automation",
    demo: null,
    year: "2026",
  },
  {
    name: "E-commerce Cache Layer",
    slug: "ecommerce-cache",
    category: "Performance engineering",
    cats: ["backend", "cloud"],
    flagship: false,
    summary:
      "Redis caching layer in front of Django endpoints backed by AWS RDS, so repeated reads are served from cache instead of the database.",
    stack: ["Python", "Django", "Redis", "AWS RDS"],
    repo: "https://github.com/Sahas2711/ecommerce-cache",
    demo: null,
    year: "2026",
  },
  {
    name: "Samvrtti",
    slug: "samvrtti",
    category: "Personal finance assistant",
    cats: ["ai", "fullstack"],
    flagship: false,
    summary:
      "AI-assisted personal finance assistant with a web interface.",
    stack: ["Python"],
    repo: "https://github.com/Sahas2711/Samvrtti",
    demo: "https://samvrtti-web.vercel.app",
    year: "2026",
  },
  {
    name: "FinCorp",
    slug: "fincorp",
    category: "Hackathon · fintech",
    cats: ["fullstack"],
    flagship: false,
    summary:
      "Financial services web application built as a hackathon submission.",
    stack: ["JavaScript"],
    repo: "https://github.com/Sahas2711/FinCorp",
    demo: "https://fin-corp-hackathon.vercel.app",
    year: "2026",
  },
  {
    name: "JWT Auth API",
    slug: "jwt-auth-api",
    category: "Backend fundamentals",
    cats: ["backend"],
    flagship: false,
    summary:
      "Spring Boot REST API demonstrating JWT issue, validation and protected routes.",
    stack: ["Java", "Spring Boot", "JWT"],
    repo: "https://github.com/Sahas2711/JWT_AUTH_TOKEN_API",
    demo: null,
    year: "2025",
  },
  {
    name: "Django Storefront",
    slug: "django-storefront",
    category: "Full-stack e-commerce",
    cats: ["fullstack", "backend"],
    flagship: false,
    summary:
      "Dark-themed e-commerce platform on Django with authentication, product catalogue and cart flows.",
    stack: ["Python", "Django"],
    repo: "https://github.com/Sahas2711/ecommerce-website",
    demo: null,
    year: "2025",
  },
  {
    name: "AI Text Summarizer",
    slug: "ai-text-summarizer",
    category: "NLP tooling",
    cats: ["ai"],
    flagship: false,
    summary: "Text summarization tool with an interactive web interface.",
    stack: ["JavaScript", "NLP"],
    repo: "https://github.com/Sahas2711/AI-Text-Summarizer",
    demo: null,
    year: "2025",
  },
  {
    name: "Chatbot",
    slug: "chatbot",
    category: "Conversational AI",
    cats: ["ai"],
    flagship: false,
    summary: "Python chatbot powered by the Grok API with session-aware conversation flow.",
    stack: ["Python"],
    repo: "https://github.com/Sahas2711/Chatbot",
    demo: null,
    year: "2025",
  },
];

window.FILTERS = [
  { id: "all", label: "All" },
  { id: "backend", label: "Backend" },
  { id: "fullstack", label: "Full-Stack" },
  { id: "ai", label: "AI / ML" },
  { id: "cloud", label: "Cloud / DevOps" },
  { id: "automation", label: "Automation" },
];
