export const sectionNav = [
  { id: "hero", label: "Opening" },
  { id: "about", label: "Identity" },
  { id: "journey", label: "Journey" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "oss", label: "Open Source" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Awards" },
  { id: "blogs", label: "Blogs" },
  { id: "podcast", label: "Podcast" },
  { id: "github", label: "GitHub" },
  { id: "experience", label: "Highlights" },
  { id: "philosophy", label: "Vision" },
  { id: "contact", label: "Finale" }
];

export const sectionVisibility = {
  hero: true,
  about: true,
  journey: true,
  skills: true,
  education: true,
  oss: true,
  projects: true,
  achievements: true,
  blogs: true,
  podcast: true,
  github: true,
  experience: true,
  philosophy: true,
  contact: true
};

export const siteMeta = {
  titleSuffix: "Resume Experience",
  footerTagline: "Crafted with Next.js, Tailwind, GSAP, and obsessive detail.",
  description:
    "Creative frontend engineer portfolio focused on cinematic interaction, modern UI systems, and high-performance web experiences.",
  siteUrl: "https://example.com",
  locale: "en_US",
  ogImage: "/og-profile.jpg",
  keywords: [
    "frontend engineer",
    "next.js portfolio",
    "creative developer",
    "interactive resume",
    "gsap scrolltrigger",
    "ui engineering",
    "web performance"
  ],
  twitterHandle: "@yourhandle",
  themeColor: "#06050d"
};

export const personal = {
  name: "Amir Hashemi",
  title: "Creative Frontend Engineer & Interactive Storyteller",
  location: "Finland / Remote",
  heroKicker: "Creative Frontend Engineer",
  heroHeadline: "I build premium interactive web experiences.",
  heroStatement: "I design and develop modern, high-performance web experiences.",
  aboutHeading: "I build digital products that feel clear, modern, and memorable.",
  aboutParagraphs: [
    "I am a frontend engineer focused on product quality, interaction detail, and performance. I turn complex ideas into interfaces that users understand in seconds.",
    "My process is simple: define the story, design the system, and ship polished execution. The result is a product that looks premium and works reliably."
  ]
};

export const journey = [
  {
    year: "2015 - 2016",
    role: "Web Developer",
    company: "Datam Company",
    summary: "Designed and implemented a ticketing system",
    impact: "• Designed and implemented a ticketing system for museums of a prominent cultural institution using PHP and Python."+
    "\n• Developed controller programs for entry management."
  },
  {
    year: "2017 - 2018",
    role: "Web Administrator",
    company: "Zarmesh Company",
    summary: "Managed the company website and server infrastructure.",
    impact: "• Designed the company website (zarmesh.com).\n• Provided support for a Linux-based website server.\n• Monitored and improved the site’s SEO and overall performance.\n• Ensured security and service monitoring using Zabbix.\n• Implemented site changes as needed."
  },
  {
    year: "2020 - 2021",
    role: "Web Developer",
    company: "Zitel",
    summary: "Contributed to the development of a cloud server sales system, CRM, and ticketing system.",
    impact: "• Developed UI/UX for a cloud server sales system and CRM.\n• Designed UI/UX for a cloud server ticketing system."
  },
  {
    year: "2023",
    role: "Web Developer",
    company: "Qame Company",
    summary: "Contributed to the frontend development of The qame project and MorrowFood project.",
    impact: "• Developed frontend of The qame project\n• Developed frontend of MorrowFood project"
  },
  {
    year: "2011 - 2024",
    role: "Senior Software Engineer",
    company: "Pars Fanavaran Mobtaker (PFM)",
    summary: "Directing full-stack immersive experiences from concept to deployment.",
    impact: "• Designed and optimized a cooperative and union system for a leading social welfare organization (taavoni.mcls.gov.ir).\n• Developed and maintained the logging and monitoring system for 8 physical servers related to the education project and 1 physical server for the social welfare project.\n• Led the UI/UX design and implementation of a voice communication system for an education organization (seda.medu.ir).\n• Established a streaming and video conferencing system for the same organization."
  }
];

export const skills = [
  {
    category: "Frontend Architecture",
    accent: "violet",
    items: ["Next.js App Router", "React 19", "Tailwind Systems", "State Design", "Performance Budgets"]
  },
  {
    category: "Motion & Interaction",
    accent: "cyan",
    items: ["GSAP + ScrollTrigger", "Scene Choreography", "Parallax Systems", "Micro-Interaction Design", "3D Illusion Motion"]
  },
  {
    category: "Product & Story",
    accent: "magenta",
    items: ["Narrative UX", "Brand Storyboarding", "Experience Mapping", "Copy Rhythm", "Conversion Craft"]
  },
  {
    category: "AI & Tooling",
    accent: "amber",
    items: ["LLM Product Integrations", "Prompt Workflows", "Creative Automation", "Rapid Prototyping", "Data-informed Iteration"]
  }
];

export const education = [
  {
    period: "2014 – 2018",
    degree: "Bachelor's Degree, Computer Software Engineering",
    institution: "Islamic Azad University of Tehran",
    focus: "Full-stack development, system design, performance optimization",
    note: "Completed comprehensive software engineering curriculum with a focus on scalable web applications."
  },
  {
    period: "2011 – 2014",
    degree: "Computer Software Engineering",
    institution: "University of Eyvanekey",
    focus: "Full-stack development, system design, performance optimization",
    note: "Completed comprehensive software engineering curriculum with a focus on scalable web applications."
  }
];

export const projects = [
  {
    id: "01",
    title: "Obsidian Atlas",
    concept: "A cinematic brand platform for a luxury fintech product launch.",
    stack: ["Next.js", "GSAP", "Headless CMS", "Vercel"],
    impact: "Raised waitlist conversions by 71% in the first month.",
    cta: "View Case Study"
  },
  {
    id: "02",
    title: "Signal / Archive",
    concept: "An interactive portfolio publication for a design collective.",
    stack: ["React", "WebGL layers", "Custom animation engine"],
    impact: "Featured in multiple design galleries and attracted enterprise clients.",
    cta: "Open Prototype"
  },
  {
    id: "03",
    title: "Neon Biome",
    concept: "An AI-assisted storytelling platform for product education at scale.",
    stack: ["Next.js", "Node", "OpenAI API", "Motion framework"],
    impact: "Cut onboarding time by 42% while improving retention metrics.",
    cta: "Read Breakdown"
  }
];

export const openSourceFallback = [
  {
    name: "cinema-scroll-kit",
    description: "Reusable GSAP scene transitions for narrative web experiences.",
    language: "JavaScript",
    stars: 124,
    url: "https://github.com/amir-signalcraft/cinema-scroll-kit"
  },
  {
    name: "tailwind-story-blocks",
    description: "Composable Tailwind blocks tuned for visual storytelling layouts.",
    language: "TypeScript",
    stars: 88,
    url: "https://github.com/amir-signalcraft/tailwind-story-blocks"
  },
  {
    name: "web-perf-audit-lab",
    description: "Automation toolkit for Lighthouse budgets and regression tracking.",
    language: "JavaScript",
    stars: 73,
    url: "https://github.com/amir-signalcraft/web-perf-audit-lab"
  }
];

export const achievements = [
  {
    year: "2025",
    title: "Awwwards Honorable Mention",
    issuer: "Awwwards",
    detail: "Recognized for immersive interaction design and execution quality."
  },
  {
    year: "2024",
    title: "Google UX Design Certificate",
    issuer: "Google",
    detail: "Completed advanced modules in UX research and product structure."
  },
  {
    year: "2023",
    title: "Top 10 Product Launch Experience",
    issuer: "Product Hunt Community",
    detail: "Launch microsite shortlisted for interaction clarity and conversion lift."
  },
  {
    year: "2022",
    title: "Meta Front-End Developer Certificate",
    issuer: "Meta",
    detail: "Formal certification in frontend architecture and testing workflows."
  }
];

export const blogs = [
  {
    title: "Designing Scroll Scenes Without Hurting Performance",
    outlet: "Signalcraft Journal",
    date: "2026",
    href: "https://example.com/blog/scroll-scenes-performance"
  },
  {
    title: "Building Motion Systems That Scale Across Teams",
    outlet: "Dev.to",
    date: "2025",
    href: "https://example.com/blog/motion-systems-scale"
  },
  {
    title: "From Visual Direction to Production UI",
    outlet: "Medium",
    date: "2024",
    href: "https://example.com/blog/visual-direction-production-ui"
  }
];

export const podcasts = [
  {
    title: "When Motion Improves UX (and when it hurts)",
    show: "The Product Frontline",
    date: "2026",
    href: "https://example.com/podcast/motion-improves-ux",
    audioMp3: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
  },
  {
    title: "Engineering Creative Direction",
    show: "Builders of the Web",
    date: "2025",
    href: "https://example.com/podcast/engineering-creative-direction",
    audioMp3: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
  }
];

export const githubProfile = {
  username: "amirho3inh",
  intro: "Open-source experiments around motion systems, frontend architecture, and performance tooling."
};

export const highlights = [
  {
    value: 58,
    suffix: "+",
    label: "Premium digital experiences shipped"
  },
  {
    value: 96,
    suffix: "%",
    label: "Average stakeholder satisfaction score"
  },
  {
    value: 12,
    suffix: "M",
    label: "Combined user impressions across launches"
  }
];

export const experiencePanels = [
  {
    title: "Creative Direction Meets Engineering Rigor",
    body: "From visual direction to production code, I bridge disciplines without sacrificing maintainability or velocity."
  },
  {
    title: "Performance Is Part of the Aesthetic",
    body: "I optimize animation architecture, render strategy, and asset flow so premium visual quality still feels effortless."
  },
  {
    title: "Systemic Thinking Across Teams",
    body: "I build reusable UI and motion systems that align product, design, and engineering around a shared language."
  }
];

export const philosophy = {
  quote: "The best interfaces do more than inform. They make people feel momentum.",
  body: "My philosophy is simple: clarity creates trust, motion creates memory, and craft creates differentiation. I build products that earn attention through intention."
};

export const contact = {
  headline: "Let\'s build the next unforgettable digital experience.",
  statement:
    "Available for senior frontend roles, creative technology leadership, and high-impact product collaborations.",
  methods: [
    { label: "Email", value: "amir.hashemisogheh@gmail.com", href: "mailto:amir.hashemisogheh@gmail.com" },
    { label: "LinkedIn", value: "linkedin.com/in/ah-hashemi-s", href: "https://www.linkedin.com/in/ah-hashemi-s" },
    { label: "GitHub", value: "github.com/amirho3inh", href: "https://github.com/amirho3inh" }
  ]
};
