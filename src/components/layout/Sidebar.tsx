"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Briefcase,
  Download,
  FolderKanban,
  GraduationCap,
  House,
  Layers,
  Mail,
  MapPin,
  MessageSquare,
  Send,
  User,
  type LucideIcon,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { ThemeToggle } from "@/components/theme-toggle";
import { useActiveSection } from "@/hooks/use-active-section";
import { links, nav, profile, sectionIds } from "@/lib/data";
import { cn } from "@/lib/utils/cn";
import { MobileNav } from "../mobile-nav";

const navIcons: Record<string, LucideIcon> = {
  home: House,
  work: FolderKanban,
  about: User,
  experience: Briefcase,
  education: GraduationCap,
  "tech-stack": Layers,
  contact: MessageSquare,
};

const socials: {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}[] = [
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
  { label: "GitHub", href: links.github, icon: GithubIcon },
  { label: "LinkedIn", href: links.linkedin, icon: LinkedinIcon },
  { label: "Telegram", href: links.telegram, icon: Send },
];

function LocalTime({ timeZone }: { timeZone: string }) {
  const [time, setTime] = useState("");
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone,
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 20_000);
    return () => clearInterval(id);
  }, [timeZone]);
  return <span suppressHydrationWarning>{time || "--:--"}</span>;
}

export function Sidebar() {
  const active = useActiveSection(sectionIds);

  return (
    <>
    <aside className="no-scrollbar flex flex-col mb-3 gap-3 md:pb-6 pt-5 md:sticky md:top-0 md:h-dvh md:gap-4 md:overflow-y-auto md:py-8 md:[@media(max-height:700px)]:py-5">
      <div className="md:shrink-0">
        <div className="flex items-center pb-0 gap-4 md:flex-col md:items-start md:gap-3 lg:flex-row lg:items-center lg:gap-4">
          <Image
            src="/avatar.jpg"
            alt={`Portrait of ${profile.name}`}
            width={80}
            height={80}
            priority
            className="size-10 md:size-16 rounded-2xl object-cover transition duration-300 lg:size-16"
          />
          <div className="min-w-0">
            <p className="font-display text-xl font-bold leading-tight tracking-tight">
              {profile.name}
            </p>
            <p className="mt-1 text-sm md:text-xs text-muted">{profile.role}</p>
            <p className="mt-1.5 flex items-center gap-1.5 font-mono text-xs text-muted">
              <MapPin className="size-3.5" aria-hidden />
              {profile.location} · <LocalTime timeZone={profile.timeZone} />
            </p>
          </div>
        </div>

        <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted hidden md:flex">
          {profile.bio}
        </p>
      </div>

      <nav
        aria-label="Primary"
        className="hidden md:my-auto md:block md:shrink-0"
      >
        <ul className="flex flex-col gap-1">
          {nav.map(({ id, label }, i) => {
            const isActive = active === id;
            const Icon = navIcons[id];
            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "group flex items-center gap-3 rounded-xl border px-2.5 py-1 transition-all duration-300",
                    "[@media(max-height:700px)]:py-1",
                    isActive
                      ? "border-border bg-surface text-fg shadow-sm"
                      : "border-transparent text-muted hover:border-border hover:text-fg",
                  )}
                >
                  <span
                    className={cn(
                      "w-5 font-mono text-[10px] tabular-nums transition-colors",
                      isActive
                        ? "text-brand-text"
                        : "text-muted/70 group-hover:text-brand-text",
                    )}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={cn(
                      "grid size-6 shrink-0 place-items-center rounded-lg transition-all duration-300",
                      isActive
                        ? "bg-brand text-brand-fg"
                        : "bg-surface text-muted group-hover:text-brand-text",
                    )}
                  >
                    <Icon className="size-4" aria-hidden />
                  </span>
                  <span className="truncate font-mono text-xs uppercase tracking-[0.16em]">
                    {label}
                  </span>
                  <span
                    aria-hidden
                    className={cn(
                      "ml-auto size-1.5 rounded-full bg-brand transition-all duration-300",
                      isActive ? "scale-100 opacity-100" : "scale-0 opacity-0",
                    )}
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="space-y-3 hidden md:block md:shrink-0 md:border-t md:border-border md:pt-5">
        <ul className="flex gap-2">
          {socials.map(({ label, href, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                aria-label={label}
                title={label}
                {...(href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="grid size-10 place-items-center rounded-xl border border-border bg-surface text-muted transition hover:border-brand-text hover:text-fg"
              >
                <Icon className="size-4.5" />
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 flex-1 items-center justify-center gap-2 rounded-xl border border-border bg-surface text-sm transition hover:border-brand-text active:scale-[.98]"
          >
            <Download className="size-4" aria-hidden />
            Résumé (PDF)
            <ArrowUpRight className="size-3.5 text-muted" aria-hidden />
          </a>
          <ThemeToggle className="hidden md:grid" />
        </div>
      </div>
    </aside>
    <MobileNav />
    </>
  );
}
