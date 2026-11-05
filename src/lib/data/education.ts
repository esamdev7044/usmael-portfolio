// src/lib/data.ts
export type Edu = {
  school: string;
  url?: string;
  logo?: string; // seal or logo in /public/logos
  badge?: string; // defaults to "Degree"
  degree: string;
  location: string;
  period: string; // "Graduation: Jun 2026" or "2022 — 2026"
  description?: string;
  tags?: string[]; // optional: key courses or skills
};

export const education: Edu[] = [
  {
    school: "Jimma University",
    url: "https://ju.edu.et",
    logo: "/image.png",
    badge: "Degree",
    degree: "B.Sc. in Software Engineering",
    location: "Jimma, Ethiopia",
    period: "Graduation: Jun 2027 (Expected)",
    description:
      "Building a strong foundation in software architecture and design, distributed systems, database engineering, and web development, with a focus on applying engineering principles to design and develop scalable, reliable software solutions.",
  },
];
