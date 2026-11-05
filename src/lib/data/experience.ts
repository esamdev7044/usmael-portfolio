export type Job = {
  company: string;
  url?: string;
  logo?: string;
  badge?: string;
  role: string;
  location: string;
  period: string;
  current?: boolean;
  description: string;
  highlights?: string[];
  tags: string[];
};

export const experience: Job[] = [
  {
    company: "EagleLion System Technology",
    url: "https://www.eaglelionsystems.com",
    logo: "/company.png",
    badge: "Internship",
    role: "Backend Developer & Team Lead",
    location: "Addis Ababa, Ethiopia",
    period: "May 2026 — August 2026",
    current: false,
    description:
      "Led backend development of WorkBridge, applying software engineering principles to build a real-world recruitment platform.",
    highlights: [
      "Designed and developed a scalable microservices architecture using Node.js, Express, and Turborepo.",
      "Implemented authentication, role-based access control, and secure JWT access and refresh token workflows.",
      "Integrated RabbitMQ for asynchronous communication between services.",
      "Developed core services for job management, users, notifications, payments, chat, and ratings.",
      "Contributed to frontend development, deployment, and system integration.",
    ],
    tags: [
      "Node.js",
      "Express.js",
      "Next.js",
      "RabbitMQ",
      "JWT",
      "PostgreSQL",
      "Microservices",
    ],
  },
];
