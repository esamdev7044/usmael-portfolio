export type Project = {
  title: string;
  category: string;
  role: string;
  description: string;
  tags: string[];
  image?: { src: string; alt: string };
  live?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    title: "WorkBridge",
    category: "SaaS - Recruitment platform",
    role: "Full-stack developer & system designer",
    description:
      "A recruitment platform that connects local and global job seekers with employers, with a React frontend and a microservice backend.",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Microservices",
      "Turborepo",
      "RabbitMQ",
      "JWT",
      "Cloudinary",
      "Google OAuth",
      "Chapa",
      "Recharts",
    ],
    image: {
      src: "/projects/workbridge.png",
      alt: "WorkBridge home page showing job listings and search",
    },
    live: "https://workbridge-monorepo-client.vercel.app",
    repo: "https://github.com/esamdev7044/workbridge-backend",
  },
  {
    title: "Warafa Cloud",
    category: "SaaS - Multi-tenant Queue Management",
    role: "Developer & Project Founder",
    description:
      "A multi-tenant queue management SaaS designed to digitize and streamline customer service operations across hospitals, banks, passport offices, and transport hubs. Enables organizations to manage queues, organize service counters, monitor customer flow, and oversee operations through centralized dashboards. Built with a modern Next.js frontend and Node.js backend, featuring organization-based access control, QR code integration, and multilingual support.",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "Multi-tenancy",
      "REST API",
      "JWT",
      "RBAC",
      "QR Code",
      "next-intl",
      "SaaS Architecture",
    ],
    image: {
      src: "/projects/warafacloud.png",
      alt: "Warafa Cloud multi-tenant queue management platform",
    },
    live: "https://warafa-cloud.com",
    repo: "https://github.com/esamdev7044/warafa-cloud",
  },
  {
    title: "EtechCamp",
    category: "SaaS - Multilingual Learning Platform",
    role: "Full-stack Developer & System Designer",
    description:
      "A multilingual technology-learning platform designed to make programming education more accessible through structured tutorials, interactive coding exercises, quizzes, and AI-powered learning assistance. ",
    tags: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "PERN Stack",
      "REST API",
      "Socket.IO",
      "WebSockets",
      "JWT Authentication",
      "Refresh Tokens",
      "Google OAuth",
      "Cloudinary",
      "AI Integration",
      "i18next",
      "TanStack Query",
      "Framer Motion",
    ],
    image: {
      src: "/projects/etechcamp.png",
      alt: "EtechCamp multilingual programming education platform",
    },
    live: "https://etechcamp-frontend.vercel.app",
    repo: "https://github.com/esamdev7044/etechcamp-fronted",
  },
  {
    title: "WaliinTourEvent",
    category: "SaaS - AI-Powered Tourism & Tour Management",
    role: "Full-stack Developer & System Designer",
    description:
      "An AI-powered tourism and tour management platform designed to streamline tour operations, guest experiences, and hospitality management. Includes intelligent tour and event management, resort dashboards, guest intelligence, personalized tour and service recommendations, and AI-driven insights into guest satisfaction and behavior.",
    tags: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "Gemini AI",
      "AI Integration",
      "Tour Management",
      "Event Management",
      "Resort Management",
      "Guest Intelligence",
      "AI Recommendations",
      "Dynamic Pricing",
      "Business Analytics",
      "Revenue Insights",
      "Guest Satisfaction Analytics",
      "REST API",
    ],
    image: {
      src: "/projects/waliintourevent.png",
      alt: "WaliinTourEvent AI-powered tourism and tour management platform",
    },
    live: "https://waaliin-tour-event-hxd5.vercel.app",
    repo: undefined,
  },
];
