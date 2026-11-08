import { siteConfig } from "@/lib/site";


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
