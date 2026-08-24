export const PERSONAL_INFO = {
  name: "Raghav Sharma",
  title: "Computer Science Student & Systems Developer",
  role: "Computer Science Student · Systems & Software Developer",
  institution: "Lovely Professional University",
  year: "2nd Year B.Tech CSE (2025–2029)",
  location: "Phagwara, Punjab / Himachal Pradesh, India",
  email: "raghavsharma282007@gmail.com",
  phone: "+91-8580487468",
  github: "https://github.com/Raghavsharma-salva",
  githubUsername: "Raghavsharma-salva",
  linkedin: "https://www.linkedin.com/in/raghav-sharma-894716282/",
  bio: "2nd Year B.Tech CSE student at Lovely Professional University specializing in C++, Linux systems, PostgreSQL, and full-stack software. Top 8 Hackathon Finalist with a focus on building high-performance applications, ML predictive engines, and embedded IoT systems.",
  avatar: "/raghav.jpg",
};

export const METRICS = [
  { value: "B.Tech", label: "Computer Science", subtext: "Lovely Professional Univ.", accent: "from-white via-zinc-200 to-zinc-400" },
  { value: "Top 8", label: "Hackathon Finalist", subtext: "24-Hour Sprint (200+ Teams)", accent: "from-white via-zinc-200 to-zinc-400" },
  { value: "2nd Yr", label: "B.Tech CSE", subtext: "Class of 2025–2029", accent: "from-white via-zinc-200 to-zinc-400" },
  { value: "04+", label: "Systems Builds", subtext: "Full-Stack, IoT & C++", accent: "from-white via-zinc-200 to-zinc-400" },
];

export const PROJECTS = [
  {
    id: "marketpulse",
    title: "MarketPulse 2.0",
    tagline: "Full-Stack Financial Analytics & ML Predictive Platform",
    category: "Full-Stack & ML",
    year: "2026",
    badge: "FastAPI + React + Postgres",
    description: "A full-stack financial market analytics platform combining a high-performance Python FastAPI backend, modern React client, PostgreSQL relational persistence, and ML predictive models with automated data tracking.",
    highlights: [
      "Architected asynchronous FastAPI backend with automated data tracking, structured checks, and reporting.",
      "Integrated machine learning predictive models for market trend analysis and quantitative pattern recognition.",
      "Engineered clean relational PostgreSQL data models for asset ledgers, quotes, and user portfolios.",
      "Built an intuitive React frontend with interactive data visualization and telemetry dashboards."
    ],
    architecture: {
      backend: "Python / FastAPI Async API",
      frontend: "React 19 / Modern Tailwind Interface",
      database: "PostgreSQL & SQLite Relational Storage",
      mlModels: "NumPy, Pandas, Predictive ML Pipeline"
    },
    tech: ["Python", "FastAPI", "React", "PostgreSQL", "Machine Learning", "NumPy", "Pandas"],
    github: "https://github.com/Raghavsharma-salva/marketpulse-platform",
    demo: "https://frontend-indol-eight-85.vercel.app/#intelligence",
    visualType: "trading",
  },
  {
    id: "firewatch-nexus",
    title: "FireWatch Nexus",
    tagline: "Interactive Fire & Environmental Alert Platform",
    category: "Systems & Software",
    year: "2025",
    badge: "Top 8 Finalist · 24H Sprint",
    description: "An interactive wildfire risk forecasting and incident platform featuring Leaflet geospatial maps, incident severity classification, searchable alert feeds, and synchronized emergency routing.",
    highlights: [
      "Engineered Leaflet geospatial map with live incident markers, popups, and layer controls.",
      "Built meteorological hazard scoring algorithm with real-time risk index classification.",
      "Implemented incident reporting system with emergency safety resource feeds.",
      "Led team in a 24-hour hackathon (GeeksforGeeks Infoverse), ranking in the Top 8 out of 200+ teams."
    ],
    architecture: {
      mapping: "Interactive Leaflet.js with Synchronized Alert Feed",
      analytics: "Meteorological Hazard & Severity Index Algorithm",
      frontend: "JavaScript / TypeScript / Modular UI",
      backend: "Python Environmental Telemetry Pipeline"
    },
    tech: ["JavaScript", "TypeScript", "Leaflet", "Python", "Geospatial Telemetry", "Incident Engine"],
    github: "https://github.com/AnkurkrSrivastava/FireWatch-Nexus",
    demo: "https://firewatchnexus.vercel.app/",
    visualType: "safety",
  },
  {
    id: "food-freshness",
    title: "Food Freshness IoT System",
    tagline: "Real-Time Embedded Spoilage Telemetry & Alerts",
    category: "Hardware & IoT",
    year: "2026",
    badge: "Arduino + Multi-Sensors",
    description: "An embedded hardware monitoring system combining multiple sensor inputs (pH probe, MQ gas sensors, moisture) with real-time LCD display telemetry, mobile sync, and LED/buzzer hazard alerts.",
    highlights: [
      "Calibrated multi-sensor arrays (MQ Gas, pH Probe) on Arduino microcontroller firmware.",
      "Integrated real-time 16x2 LCD display telemetry with audio-visual buzzer and LED alerts.",
      "Designed mobile-synchronized telemetry architecture for live condition monitoring.",
      "Engineered thresholding logic for instant bacterial spoilage detection."
    ],
    architecture: {
      microcontroller: "Arduino Uno / Nano with PlatformIO C++",
      sensors: "MQ Gas Sensors, pH Probe & Moisture Arrays",
      display: "I2C 16x2 Character LCD + LED / Buzzer Alerts",
      firmware: "Event-Driven Embedded C++ Loop"
    },
    tech: ["Arduino", "C++", "MQ Gas Sensors", "pH Probe", "PlatformIO", "I2C LCD", "IoT"],
    github: "https://github.com/Raghavsharma-salva",
    demo: null,
    visualType: "hardware",
  },
  {
    id: "file-compressor",
    title: "File Compressor",
    tagline: "Huffman Coding Lossless Binary Compression",
    category: "Systems & C++",
    year: "2026",
    badge: "-45% File Size · C++",
    description: "A fast command-line lossless file compression engine written in modern C++ utilizing binary Huffman prefix trees, priority queue min-heaps, and bitstream serialization for Linux streams.",
    highlights: [
      "Implemented binary prefix tree with STL priority queue min-heaps for optimal prefix codes.",
      "Achieved ~45% lossless reduction on standard text and structured data streams.",
      "Built custom bit-level stream I/O for direct binary file serialization and decompression.",
      "Optimized for POSIX Linux environments with minimal runtime memory footprint."
    ],
    architecture: {
      algorithm: "Canonical Huffman Coding Prefix Trees",
      dataStructure: "Min-Heap Priority Queue (STL)",
      ioPipeline: "Bitstream Bit-Packing Binary Serializer",
      language: "C++20 / Linux POSIX Toolchain"
    },
    tech: ["C++20", "Huffman Trees", "Bit-Level I/O", "STL Containers", "POSIX Linux", "DSA"],
    github: "https://github.com/Raghavsharma-salva",
    demo: null,
    visualType: "compressor",
  },
];

export const SKILL_CATEGORIES = [
  {
    id: "languages",
    name: "Languages & Core",
    description: "Core programming languages, systems toolchains, and data querying",
    skills: [
      { name: "C++ (C++20)", level: "Core / STL / OOP", tag: "Advanced" },
      { name: "C", level: "Memory / Pointers / POSIX", tag: "Proficient" },
      { name: "Python", level: "FastAPI / Pandas / NumPy / OOP", tag: "Advanced" },
      { name: "Java", level: "OOP / Core Fundamentals", tag: "Intermediate" },
      { name: "PostgreSQL", level: "Relational Queries / ACID", tag: "Proficient" },
      { name: "MySQL & SQLite", level: "Schemas / Ledger Design", tag: "Proficient" },
      { name: "JavaScript / TypeScript", level: "DOM / Async / React", tag: "Proficient" },
      { name: "HTML5 & CSS3", level: "Semantic Markup / Modern UI", tag: "Proficient" },
    ],
  },
  {
    id: "systems",
    name: "Systems & Tools",
    description: "Development environments, Linux toolchains, and version control",
    skills: [
      { name: "Linux / Bash", level: "POSIX CLI / Scripting", tag: "Daily Driver" },
      { name: "Git & GitHub", level: "Branching / Version Control", tag: "Proficient" },
      { name: "FastAPI", level: "Asynchronous REST APIs", tag: "Proficient" },
      { name: "React", level: "Hooks / Modern Component Architecture", tag: "Proficient" },
      { name: "VS Code", level: "Primary Development IDE", tag: "Expert" },
      { name: "Jupyter & Colab", level: "Data Science & Experimentation", tag: "Proficient" },
    ],
  },
  {
    id: "hardware",
    name: "Hardware & IoT",
    description: "Physical computing, microcontroller firmware, and sensor arrays",
    skills: [
      { name: "Arduino / C++", level: "Microcontroller Firmware", tag: "Hands-on" },
      { name: "PlatformIO", level: "Embedded IDE & Toolchains", tag: "Proficient" },
      { name: "MQ Gas Sensors", level: "Analog/Digital Spoilage Detection", tag: "Hardware" },
      { name: "pH Probes & Moisture", level: "Physical Signal Telemetry", tag: "Hardware" },
      { name: "I2C LCD & Audio Alerts", level: "Real-time Display & Actuators", tag: "Hardware" },
    ],
  },
  {
    id: "libraries",
    name: "Libraries & ML",
    description: "Data manipulation, visualization, and algorithmic problem solving",
    skills: [
      { name: "NumPy & Pandas", level: "Matrix Operations & DataFrames", tag: "Proficient" },
      { name: "Matplotlib", level: "Data Telemetry & Plotting", tag: "Proficient" },
      { name: "Leaflet.js", level: "Interactive Geospatial Mapping", tag: "Proficient" },
      { name: "DSA Algorithms", level: "Trees / Heaps / Graphs / Recursion", tag: "Active" },
    ],
  },
];

export const LEARNING_TOPICS = [
  {
    id: "dsa-trees",
    title: "Binary Trees & Min-Heaps",
    focus: "Optimal prefix codes, Huffman coding trees, priority queue operations in C++.",
    status: "Active Practice",
    codeSnippet: `// Huffman Min-Heap Node Construction
struct Node {
    char ch;
    int freq;
    Node *left, *right;
    Node(char c, int f) : ch(c), freq(f), left(nullptr), right(nullptr) {}
};

struct Compare {
    bool operator()(Node* l, Node* r) {
        return l->freq > r->freq;
    }
};

std::priority_queue<Node*, std::vector<Node*>, Compare> minHeap;`,
  },
  {
    id: "linux-posix",
    title: "Linux & Bash Systems Programming",
    focus: "POSIX process control, file streams, pipes, and shell automation scripts.",
    status: "Daily Work",
    codeSnippet: `#!/usr/bin/env bash
# Real-time process & PostgreSQL telemetry monitor
set -euo pipefail

echo "== [SYSTEM HEALTH CHECK] =="
uptime
df -h / | awk 'NR==2 {print "Disk Usage: " $5 " of " $2}'
systemctl is-active --quiet postgresql && echo "PostgreSQL: ACTIVE" || echo "PostgreSQL: INACTIVE"`,
  },
  {
    id: "postgres-schemas",
    title: "PostgreSQL Relational Design",
    focus: "Normalized schemas, indexed foreign keys, ACID transactions, and aggregations.",
    status: "Core Focus",
    codeSnippet: `-- MarketPulse 2.0 Relational Order Ledger
CREATE TABLE IF NOT EXISTS asset_orders (
    order_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    ticker_symbol VARCHAR(12) NOT NULL,
    order_type VARCHAR(8) CHECK (order_type IN ('BUY', 'SELL')),
    shares NUMERIC(14, 4) NOT NULL,
    execution_price NUMERIC(12, 2) NOT NULL,
    executed_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_orders_ticker ON asset_orders(ticker_symbol);`,
  },
];

export const TIMELINE = [
  {
    period: "Aug 2025 – Present",
    title: "B.Tech in Computer Science & Engineering",
    organization: "Lovely Professional University",
    location: "Phagwara, Punjab",
    description: "2nd Year student pursuing B.Tech in Computer Science & Engineering. Focusing on C++, Data Structures & Algorithms, Linux systems, PostgreSQL, and full-stack software development.",
    highlight: "B.Tech CSE",
    type: "Academic",
    tags: ["C++", "DSA", "PostgreSQL", "Linux", "Python", "B.Tech CSE"],
  },
  {
    period: "Nov 2025",
    title: "Top 8 Finalist — Infoverse Hackathon",
    organization: "GeeksforGeeks / University Challenge",
    location: "24-Hour Sprint",
    description: "Led a 4-member engineering sprint team to build FireWatch Nexus, ranking in the Top 8 among 200+ teams.",
    highlight: "Top 8 Finalist",
    type: "Leadership",
    tags: ["Team Lead", "Leaflet", "JavaScript", "Python", "24-Hour Sprint"],
  },
  {
    period: "Jun 2025 – Jul 2025",
    title: "Python Programming Training",
    organization: "Infosys Springboard",
    location: "Online",
    description: "Comprehensive training in Python OOP, functional methods (lambda, map, filter), regular expressions, and modular software architecture.",
    highlight: "Completed with Distinction",
    type: "Certification",
    tags: ["Python", "OOP", "Functional Programming", "Data Structures"],
  },
  {
    period: "Apr 2024 – Mar 2025",
    title: "Intermediate (State Board)",
    organization: "CRC GSS Rehan Khas",
    location: "Himachal Pradesh",
    description: "Completed higher secondary education with focus on Mathematics and Science.",
    highlight: "State Board",
    type: "Academic",
    tags: ["Mathematics", "Physics", "Science"],
  },
];

export const ACHIEVEMENTS = [
  {
    title: "Top 8 Hackathon Finalist",
    subtitle: "Infoverse 24H Sprint · GeeksforGeeks",
    description: "Led 4-person team building FireWatch Nexus, ranking Top 8 out of 200+ competing engineering teams.",
    icon: "Trophy",
    badge: "Top 8 / 200+ Teams",
  },
  {
    title: "B.Tech Computer Science",
    subtitle: "Lovely Professional University (CSE)",
    description: "Rigorous academic curriculum across algorithms, data structures, mathematics, and systems programming.",
    icon: "Award",
    badge: "2nd Year CSE",
  },
  {
    title: "Coding for Everyone: C and C++",
    subtitle: "UC Santa Cruz · Coursera Specialization",
    description: "4-course specialization by Prof. Ira Pohl covering deep C/C++ memory models, pointers, and algorithms.",
    icon: "Code",
    badge: "Verified UCSC Credential",
    verifyUrl: "https://coursera.org/verify/specialization/PHZNKK2D4V8W",
  },
  {
    title: "Deloitte Cyber Job Simulation",
    subtitle: "Deloitte · Issued by Forage",
    description: "Practical enterprise cybersecurity tasks, threat defense analysis, and technical vulnerability simulations.",
    icon: "GraduationCap",
    badge: "Verified Deloitte Credential",
  },
];

export const CERTIFICATIONS = [
  {
    id: "ucsc-cpp",
    title: "Coding for Everyone: C and C++",
    issuer: "University of California, Santa Cruz (UCSC)",
    platform: "Coursera",
    date: "Mar 1, 2026",
    instructor: "Prof. Ira Pohl, PhD (Baskin School of Engineering, UCSC)",
    credentialId: "PHZNKK2D4V8W",
    verifyUrl: "https://coursera.org/verify/specialization/PHZNKK2D4V8W",
    type: "Specialization (4 Courses)",
    courses: [
      "C for Everyone, Part 1: Programming Fundamentals",
      "C for Everyone, Part 2: Structured Programming",
      "C++ For C Programmers, Part A",
      "C++ For C Programmers, Part B",
    ],
    skills: ["C", "C++20", "Pointers & Memory", "Algorithms", "Structured Programming", "STL"],
  },
  {
    id: "deloitte-cyber",
    title: "Cyber Job Simulation",
    issuer: "Deloitte",
    platform: "Forage",
    date: "Dec 14, 2025",
    signatory: "Tina McCreery (Chief Human Resources Officer, Deloitte)",
    credentialId: "DhguqBRt6gjHMKZGA",
    userCode: "693ee9b0dbb49e92b636b75c",
    verifyUrl: null,
    type: "Enterprise Job Simulation",
    courses: ["Practical Cyber Security Tasks", "Enterprise Vulnerability Analysis", "Threat Defense"],
    skills: ["Cyber Security", "Threat Modeling", "Vulnerability Assessment", "Risk Mitigation"],
  },
  {
    id: "gfg-infoverse",
    title: "Infoverse 24-Hour Hackathon",
    issuer: "GeeksforGeeks",
    platform: "24-Hour University Sprint",
    date: "Nov 2025",
    standing: "Top 8 Finalist (out of 200+ Teams)",
    type: "Competitive Hackathon",
    courses: ["Lead Architect & Team Leader for FireWatch Nexus", "Rapid Prototype Deployment in 24 Hours"],
    skills: ["Team Leadership", "Geospatial Telemetry", "Leaflet", "JavaScript", "Python"],
  },
  {
    id: "infosys-python",
    title: "Python Programming Training",
    issuer: "Infosys Springboard",
    platform: "Infosys",
    date: "Jun 2025 – Jul 2025",
    standing: "Completed with Distinction",
    type: "Technical Training & Certification",
    courses: ["Python OOP & Modular Programming", "Functional Paradigms (map, filter, lambda)", "Regex & Data Structures"],
    skills: ["Python", "Object-Oriented Programming", "Functional Programming", "Data Structures"],
  },
];

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: "https://github.com/Raghavsharma-salva",
    handle: "@Raghavsharma-salva",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/raghav-sharma-894716282/",
    handle: "Raghav Sharma",
  },
  {
    name: "Email",
    url: "mailto:raghavsharma282007@gmail.com",
    handle: "raghavsharma282007@gmail.com",
  },
];
