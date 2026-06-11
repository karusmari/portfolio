export const sectionNav = [
  { id: "hero", label: "Opening" },
  { id: "about", label: "Identity" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" }
];

export const sectionVisibility = {
  hero: true,
  about: true,
  journey: false,
  skills: true,
  education: true,
  oss: false,
  projects: false,
  achievements: false,
  blogs: false,
  podcast: false,
  github: false,
  experience: true,
  philosophy: false,
  contact: true
};

export const siteMeta = {
  titleSuffix: "Maris Karu — Fullstack & Mobile Developer",
  footerTagline: "Fullstack & Mobile Developer · Mariehamn, Åland",
  description:
    "Fullstack and mobile developer working with JavaScript, Go, Java, and Flutter. Currently completing the 01Edu / Gritlab ICT program in Åland.",
  siteUrl: "https://karusmari.github.io/portfolio",
  locale: "en_US",
  ogImage: "/og-profile.jpg",
  keywords: [
    "fullstack developer",
    "mobile developer",
    "flutter developer",
    "golang developer",
    "javascript developer",
    "01edu gritlab",
    "åland developer"
  ],
  twitterHandle: "",
  themeColor: "#111210"
};

export const personal = {
  name: "Maris Karu",
  title: "Fullstack & Mobile Developer",
  location: "Mariehamn, Åland / Remote",
  heroKicker: "Fullstack & Mobile Developer",
  heroHeadline: "I build web and mobile applications with focus on clarity and usability.",
  heroStatement: "Fullstack and mobile developer working with JavaScript, Go, Java, and Flutter. Based in Åland, available for remote work.",
  aboutHeading: "I build practical digital products with a focus on structure and usability.",
  aboutParagraphs: [
    "I am a developer completing my education at the 01Edu school (Gritlab, Åland). I have worked with JavaScript, Go, and Java, and I am expanding into mobile development with Flutter and Dart.",
    "My focus is on building fullstack and mobile applications that are clean, functional, and easy to understand. I am also drawn to UI/UX — how design choices directly shape the user's experience.",
    "I bring an unusual mix of backgrounds: years of hands-on work in fast-paced environments, teaching, and cross-cultural communication have sharpened my problem-solving, adaptability, and ability to collaborate across different teams and contexts."
  ]
};

export const journey = [];


export const skills = [
  {
    category: "Frontend",
    accent: "violet",
    items: ["JavaScript", "Angular", "Next.js"]
  },
  {
    category: "Backend & Data",
    accent: "cyan",
    items: ["Go (Golang)", "Java", "Python (basics)", "SQLite", "MongoDB"]
  },
  {
    category: "Mobile",
    accent: "amber",
    items: ["Flutter", "Dart", "Firebase"]
  },
  {
    category: "Tooling & Practices",
    accent: "magenta",
    items: ["GitHub", "Jenkins", "SonarQube", "UI/UX perspective", "Independent learning"]
  }
];

export const education = [
  {
    period: "2024 – 2026",
    degree: "Vocational Qualification in Information and Communication Technology",
    institution: "Gritlab, Åland (01Edu program)",
    focus: "Fullstack development, mobile development, self-directed learning",
    note: "Self-paced, project-based technical education. Developed strong self-motivation and consistency while tackling assignments independently and in teams across diverse technical challenges."
  },
  {
    period: "2007 – 2009",
    degree: "Bachelor of Early Year Childhood Teacher",
    institution: "University of Tartu, Estonia",
    focus: "Communication, planning, structured environments",
    note: "Gained experience in planning, structuring learning environments, and communicating with diverse groups — skills that transfer directly to team collaboration and clear technical documentation."
  }
];

export const projects = [];

export const openSourceFallback = [];

export const achievements = [
  {
    year: "2024",
    title: "Programming I — Basics of Python",
    issuer: "University of Turku, Finland",
    detail: "Completed introductory Python programming course."
  },
  {
    year: "2023–2024",
    title: "Special Education; Language and Communication; Early Childhood Education; Swedish as a Second Native Language",
    issuer: "University of Turku, Finland",
    detail: "Completed several university-level courses alongside ICT studies."
  }
];

export const blogs = [];

export const podcasts = [];

export const githubProfile = {
  username: "",
  intro: ""
};

export const highlights = [
  {
    value: 3,
    suffix: "+",
    label: "programming language experience"
  },
  {
    value: 2,
    suffix: "",
    label: "years of hands-on experience in software development environments"
  },
  {
    value: 3,
    suffix: "",
    label: "Languages spoken",
    tooltip: [
      { lang: "Estonian", level: "Native" },
      { lang: "English", level: "B2 — Intermediate" },
      { lang: "Swedish", level: "B1 — Beginner/Intermediate" }
    ]
  }
];

export const experiencePanels = [
  {
    title: "Self-Directed and Disciplined",
    body: "The 01Edu program is fully self-paced. Managing my own learning path has built strong habits around planning, consistency, and independent problem-solving."
  },
  {
    title: "Adaptable Across Contexts",
    body: "I've worked in very different environments over the years. That experience has made me easy to work with, quick to pick things up, and comfortable asking questions when I need to."
  },
  {
    title: "Clarity in Communication",
    body: "Years of teaching and teamwork in high-pressure environments mean I communicate clearly, document carefully, and know how to present ideas to different audiences."
  }
];

export const philosophy = {
  quote: "Clean code and clear design are two sides of the same coin.",
  body: "I believe good software is built on honest fundamentals: understand the problem, keep the structure clean, and always consider the person on the other side of the screen."
};

export const contact = {
  headline: "Open to IT opportunities — let's talk.",
  statement:
    "Looking for internships where I can contribute, learn, and grow. Available in Åland or remote.",
  methods: [
    { label: "Email", value: "karusmari@gmail.com", href: "mailto:karusmari@gmail.com" },
    { label: "LinkedIn", value: "linkedin.com/in/maris-karu", href: "https://www.linkedin.com/in/maris-karu" },
    { label: "Phone", value: "+358 40 539 1506", href: "tel:+358405391506" }
  ]
};