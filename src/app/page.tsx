import { Globe, Server, Smartphone } from "lucide-react";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { ProjectCard } from "@/components/ui/ProjectsCard";
import { Reveal } from "@/components/reveal";
import { ScrollProgress } from "@/components/scroll-progress";
import { Section } from "@/components/section";
import { Sidebar } from "@/components/layout/Sidebar";
import { TechStack } from "@/components/sections/TechStach";
import { projects } from "@/lib/data/projects";
import { experience } from "@/lib/data/experience";
import { Education } from "@/components/sections/Education";
import { education } from "@/lib/data/education";
import { stack } from "@/lib/data/tech-stack";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/sections/Footer";

const services = [
  {
    icon: Globe,
    title: "Web apps",
    text: "Next.js and React frontends that load fast and stay accessible.",
  },
  {
    icon: Smartphone,
    title: "Mobile apps",
    text: "Flutter and native Android apps built for real-world networks.",
  },
  {
    icon: Server,
    title: "APIs & backends",
    text: "Node.js services, database design, and system architecture.",
  },
];

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <div className="mx-auto max-w-7xl px-3 md:grid md:grid-cols-[22rem_minmax(0,1fr)] md:gap-20 md:px-12">
        <Sidebar />

        <main id="main" className="pb-10 pt-6 md:py-20">
          <div id="home">
            <Hero />
          </div>
          <Section
            id="work"
            title="Selected Projects"
            description="A look at the products, platforms, and systems I've built to solve real-world problems."
          >
            {projects.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06} className="h-full mt-3">
                <ProjectCard project={p} index={i} />
              </Reveal>
            ))}
          </Section>
          <Section id="about" title="About">
            <Reveal>
              <div className="max-w-2xl space-y-4 leading-relaxed text-muted">
                <p>
                  My journey in Software Engineering has been about more than
                  just earning a degree. Along the way, I have explored new
                  technologies, strengthened my problem-solving skills, and
                  learned how to turn academic knowledge into real-world
                  solutions
                </p>
                <p>
                  I started building personal projects in my second year of
                  university. Through countless hours of learning,
                  experimenting, and refining my skills, I have grown into a
                  developer capable of building complex, distributed systems. My
                  internship experiences have also given me valuable insights
                  into how real-world engineering teams operate, collaborate,
                  and make technical decisions.
                </p>
                <p>
                  I have had the opportunity to build several systems, including
                  <strong> WorkBridge</strong> - a recruitment platform
                  connecting job seekers with employers,{" "}
                  <strong>Warafa Cloud</strong> - a multi-tenant queue
                  management SaaS for organizations, <strong>EtechCamp</strong>{" "}
                  - an AI-assisted, multilingual learning platform,{" "}
                  <strong>Walin Tour</strong> - a group tour platform designed
                  to simplify travel for tourists, and <strong>Gullit</strong> -
                  an e-commerce mobile application connecting farmers directly
                  with markets.
                </p>
                <p>
                  My development journey began with PHP, but today, most of my
                  work revolves around JavaScript and TypeScript, using
                  technologies such as Node.js, React, and Next.js. I enjoy
                  working with relational databases, particularly PostgreSQL,
                  and have a strong interest in backend engineering, API design,
                  database architecture, and software system design.
                </p>
                <p>
                  I&appos;m based in Ethiopia and open to local and global
                  opportunities, including remote roles, where I can contribute,
                  collaborate, and continue growing as a Software Engineer.
                </p>
              </div>
            </Reveal>
            <ul className="mt-8 grid gap-4 sm:grid-cols-3">
              {services.map(({ icon: Icon, title, text }, i) => (
                <Reveal key={title} delay={i * 0.06}>
                  <li className="h-full list-none rounded-2xl border border-muted/30 bg-surface p-5">
                    <Icon className="size-5 text-brand-text" aria-hidden />
                    <h3 className="mt-4 font-display font-semibold">{title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">
                      {text}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ul>
          </Section>
          <Section
            id="experience"
            title="Experience"
            description="Roles where I shipped production features and collaborated with teams."
          >
            <Experience items={experience} />
          </Section>
          <Section
            id="education"
            title="Education"
            description="Academic background and the foundations behind my engineering work."
          >
            <Education items={education} />
          </Section>
          <Section
            id="tech-stack"
            title="Tech stack"
            description="Core technologies, frameworks, and tooling I use in production."
          >
            <TechStack groups={stack} />
          </Section>
          <Section
            id="contact"
            title="Contact"
            description="Open to freelance projects, contract work, and full-time engineering roles. I usually reply within 24 hours."
          >
            <Contact />
          </Section>
          <Footer />
        </main>
      </div>
    </>
  );
}
