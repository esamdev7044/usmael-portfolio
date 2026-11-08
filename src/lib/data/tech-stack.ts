import {
  siAndroid,
  siOpenjdk,
  siCloudflare,
  siCloudinary,
  siDart,
  siDocker,
  siExpress,
  siFlutter,
  siGit,
  siGithub,
  siHtml5,
  siJavascript,
  siKotlin,
  siMongodb,
  siMysql,
  siNestjs,
  siNextdotjs,
  siNodedotjs,
  siPostgresql,
  siPostman,
  siPrisma,
  siRabbitmq,
  siReact,
  siRedis,
  siSupabase,
  siTailwindcss,
  siTelegram,
  siTypescript,
  siVercel,
  siRailway,
  siSocketdotio,
} from "simple-icons";

export type IconData = {
  path?: string;
  src?: string;
};
export type Tool = { name: string; note: string; icon?: IconData };
export type StackGroup = {
  title: string;
  description: string;
  tools: Tool[];
};

const ic = (icon: { path: string }): IconData => ({
  path: icon.path,
});

export const stack: StackGroup[] = [
  {
    title: "Languages",
    description: "Languages I use to build applications and services.",
    tools: [
      {
        name: "JavaScript",
        note: "Modern ES features across web and Node.js",
        icon: ic(siJavascript),
      },
      {
        name: "TypeScript",
        note: "Type-safe applications and APIs",
        icon: ic(siTypescript),
      },
      {
        name: "Java",
        note: "Object-oriented programming and Android development",
        icon: ic(siOpenjdk),
      },
      {
        name: "Kotlin",
        note: "Native Android development",
        icon: ic(siKotlin),
      },
      {
        name: "Dart",
        note: "Cross-platform application development",
        icon: ic(siDart),
      },
    ],
  },
  {
    title: "Frontend",
    description: "Responsive, accessible, and modern web interfaces.",
    tools: [
      {
        name: "React",
        note: "Component architecture and state management",
        icon: ic(siReact),
      },
      {
        name: "Next.js",
        note: "App Router, SSR, SSG, and full-stack applications",
        icon: ic(siNextdotjs),
      },
      {
        name: "Tailwind CSS",
        note: "Responsive styling and design systems",
        icon: ic(siTailwindcss),
      },
      {
        name: "HTML & CSS",
        note: "Semantic markup and modern web styling",
        icon: ic(siHtml5),
      },
    ],
  },
  {
    title: "Mobile Development",
    description: "Cross-platform and native mobile experiences.",
    tools: [
      {
        name: "Flutter",
        note: "Cross-platform apps with a native feel",
        icon: ic(siFlutter),
      },
      {
        name: "React Native",
        note: "Native mobile apps using React and JavaScript",
        icon: ic(siReact),
      },
      {
        name: "Android",
        note: "Native platform integrations",
        icon: ic(siAndroid),
      },
      {
        name: "Telegram Mini Apps",
        note: "Telegram Web Apps and bot integrations",
        icon: ic(siTelegram),
      },
    ],
  },
  {
    title: "Backend & APIs",
    description: "Scalable APIs, services, and application architecture.",
    tools: [
      {
        name: "Node.js",
        note: "Event-driven backend services",
        icon: ic(siNodedotjs),
      },
      {
        name: "Express",
        note: "REST APIs, middleware, and service development",
        icon: ic(siExpress),
      },
      {
        name: "NestJS",
        note: "Structured and modular server-side applications",
        icon: ic(siNestjs),
      },
      {
        name: "Microservices",
        note: "Distributed services and inter-service communication",
      },
      {
        name: "RabbitMQ",
        note: "Asynchronous messaging and event-driven workflows",
        icon: ic(siRabbitmq),
      },
      {
        name: "Socket.IO",
        note: "Real-time, bidirectional communication",
        icon: ic(siSocketdotio),
      },
    ],
  },
  {
    title: "Databases & ORM",
    description: "Data modeling, persistence, and database management.",
    tools: [
      {
        name: "PostgreSQL",
        note: "Relational schema design and query optimization",
        icon: ic(siPostgresql),
      },
      {
        name: "MongoDB",
        note: "Document-oriented data modeling",
        icon: ic(siMongodb),
      },
      {
        name: "MySQL",
        note: "Relational database design and SQL queries",
        icon: ic(siMysql),
      },
      {
        name: "Prisma",
        note: "Type-safe database access and migrations",
        icon: ic(siPrisma),
      },
      {
        name: "Redis",
        note: "Caching and fast in-memory data access",
        icon: ic(siRedis),
      },
      {
        name: "Supabase",
        note: "Managed PostgreSQL, authentication, and storage",
        icon: ic(siSupabase),
      },
    ],
  },
  {
    title: "Cloud & Deployment",
    description: "Deploying, hosting, and managing applications.",
    tools: [
      {
        name: "Docker",
        note: "Containerization and consistent environments",
        icon: ic(siDocker),
      },
      {
        name: "Vercel",
        note: "Frontend deployment and hosting",
        icon: ic(siVercel),
      },
      {
        name: "Railway",
        note: "Backend services and database deployment",
        icon: ic(siRailway),
      },
      {
        name: "Cloudflare",
        note: "Edge hosting and application delivery",
        icon: ic(siCloudflare),
      },
    ],
  },

  {
    title: "AI & Integrations",
    description: "AI-powered features and third-party services.",
    tools: [
      {
        name: "OpenAI",
        note: "LLM APIs and AI-powered application features",
        icon: { src: "https://cdn.simpleicons.org/openai" },
      },
      {
        name: "Google Gemini",
        note: "Generative AI and multimodal integrations",
        icon: { src: "https://cdn.simpleicons.org/googlegemini" },
      },
      {
        name: "Cloudinary",
        note: "Media uploads and asset management",
        icon: ic(siCloudinary),
      },
      {
        name: "Google OAuth",
        note: "Third-party authentication",
        icon: { src: "https://cdn.simpleicons.org/google" },
      },
    ],
  },
  {
    title: "Payments",
    description: "Payment gateways and transaction integrations.",
    tools: [
      {
        name: "Stripe",
        note: "Online payments and checkout integration",
        icon: { src: "https://cdn.simpleicons.org/stripe" },
      },
      {
        name: "Chapa",
        note: "Ethiopian payment gateway integration",
      },
      {
        name: "PayPal",
        note: "Online payment processing",
        icon: { src: "https://cdn.simpleicons.org/paypal" },
      },
    ],
  },

  {
    title: "Tools & Workflow",
    description: "Development, collaboration, and delivery workflows.",
    tools: [
      {
        name: "Git",
        note: "Version control and branching workflows",
        icon: ic(siGit),
      },
      {
        name: "GitHub",
        note: "Code collaboration and repository management",
        icon: ic(siGithub),
      },
      {
        name: "Postman",
        note: "API testing and documentation",
        icon: ic(siPostman),
      },
    ],
  },
];
