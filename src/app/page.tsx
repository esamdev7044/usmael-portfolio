import { Globe, Server, Smartphone } from "lucide-react";
import { CopyEmail } from "@/components/copy-email";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { MobileNav } from "@/components/mobile-nav";
import { ProjectCard } from "@/components/ui/ProjectsCard";
import { Reveal } from "@/components/reveal";
import { ScrollProgress } from "@/components/scroll-progress";
import { Section } from "@/components/section";
import { Sidebar } from "@/components/layout/Sidebar";
import { TechStack } from "@/components/sections/TechStach";
import {
  education,
  experience,
  links,
  profile,
  projects,
  stack,
} from "@/lib/data";

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
              <Reveal key={p.title} delay={i * 0.06} className="h-full">
                <ProjectCard project={p} index={i} />
              </Reveal>
            ))}
          </Section>

          <Section id="about" title="About">
            <Reveal>
              <div className="max-w-2xl space-y-4 leading-relaxed text-muted">
                <p>
                  I am a software engineer who enjoys the full path from idea to
                  production: designing the system, modeling the data, and
                  building interfaces people actually enjoy using.
                </p>
                <p>
                  Most of my work is for the Ethiopian market, where speed on
                  slower networks, reliability, and local payment and banking
                  flows matter.
                </p>
              </div>
            </Reveal>
            <ul className="mt-8 grid gap-4 sm:grid-cols-3">
              {services.map(({ icon: Icon, title, text }, i) => (
                <Reveal key={title} delay={i * 0.06}>
                  <li className="h-full list-none rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-brand-text/60">
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

          <Section id="experience" title="Experience">
            <Reveal>
              <Experience items={experience} />
            </Reveal>
          </Section>

          <Section id="education" title="Education">
            <Reveal>
              <ul className="divide-y divide-border border-y border-border">
                {education.map((e) => (
                  <li
                    key={e.school}
                    className="flex flex-wrap items-baseline justify-between gap-2 py-5"
                  >
                    <div>
                      <h3 className="font-display text-md font-semibold">
                        {e.school}
                      </h3>
                      <p className="text-sm text-muted">{e.degree}</p>
                    </div>
                    <p className="font-mono text-xs text-muted">{e.period}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </Section>

          <Section id="tech-stack" title="Tech stack">
            <Reveal>
              <TechStack groups={stack} />
            </Reveal>
          </Section>

          <Section id="contact" title="Contact">
            <Reveal>
              <p className="max-w-xl leading-relaxed text-muted">
                Have a project, a role, or an idea? Let&apos;s talk. I usually
                reply within a day.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-4">
                <CopyEmail email={profile.email} />
                <a
                  href={links.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm underline decoration-brand-text decoration-2 underline-offset-4 transition-colors hover:text-brand-text"
                >
                  Message on Telegram
                </a>
              </div>
            </Reveal>
          </Section>
        </main>
      </div>
    </>
  );
}
