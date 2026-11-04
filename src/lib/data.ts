import { siteConfig } from "@/lib/site";

export type Project = {
  title: string;
  category: string; // e.g. "SaaS · Recruitment platform"
  role: string;
  description: string;
  tags: string[];
  image?: { src: string; alt: string };
  live?: string;
  repo?: string;
};

export type Job = {
  role: string;
  company: string;
  period: string;
  points: string[];
};

export const profile = {
  name: siteConfig.name,
  role: "Software Engineer & Full-Stack Developer",
  location: "Ethiopia",
  timeZone: "Africa/Addis_Ababa",
  bio: "I build fast, reliable web and mobile products, from database design to polished interfaces.",
  email: siteConfig.email,
};

export const links = {
  github: siteConfig.links.github,
  linkedin: siteConfig.links.linkedin,
  telegram: "https://t.me/Hasbunallahhh",
};

export const nav = [
  { id: "home", label: "Home" },
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "tech-stack", label: "Tech Stack" },
  { id: "contact", label: "Contact" },
] as const;

export const sectionIds: string[] = nav.map((n) => n.id);

export const projects: Project[] = [
  {
    title: "Warafa Cloud",
    category: "SaaS - Multi tenant Queue system",
    role: "Developer and funder",
    description:
      "Multi-tenant queue management SaaS for hospitals, transport hubs, passport offices, and banks.",
    tags: ["Next.js", "Node.js", "SaaS"],
    image: { src: "/projects/warafa-cloud.png", alt: "Warafa cloud" },
    live: "https://warafa-cloud.com",
    repo: undefined, // TODO live link
  },
  {
    title: "WorkBridge",
    category: "SaaS - Recruitment platform",
    role: "Full-stack developer & system designer",
    description:
      "A recruitment platform that connects local and global job seekers with employers, with a React frontend and a microservice backend.",
    tags: ["React", "Node.js", "PostgreSQL", "Microservices"],
    image: {
      src: "/projects/etechcamp.png", // 1600×900 screenshot, top of the page
      alt: "WorkBridge home page showing job listings and search",
    },
    live: "https://workbridge.com", // TODO: real URL
    repo: undefined,
  },
];

export const experience: Job[] = [
  {
    role: "Full-Stack Developer", // TODO
    company: "Company or Freelance",
    period: "2023 — Present",
    points: [
      "Shipped production web and mobile apps for the Ethiopian market.",
      "Designed APIs, database schemas, and deployment pipelines.",
      "Improved load times and reliability on slower networks.",
    ],
  },
];

export const education = [
  {
    school: "Your University",
    degree: "BSc in Software Engineering",
    period: "2019 — 2023",
  }, // TODO
];

export const stack: Record<string, string[]> = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Motion"],
  Mobile: ["Flutter", "Kotlin", "Java", "Android"],
  Backend: ["Node.js", "Express", "PostgreSQL", "Supabase"],
  Tools: ["Git", "GitHub", "Vercel", "Postman"],
};
