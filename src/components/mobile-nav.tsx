"use client";

import { useEffect, useRef, useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { useActiveSection } from "@/hooks/use-active-section";
import { nav, sectionIds } from "@/lib/data";
import { cn } from "@/lib/utils/cn";
import { Download } from "lucide-react";

export function MobileNav() {
  const active = useActiveSection(sectionIds);
  const ref = useRef<HTMLElement>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setStuck(!entry.isIntersecting);
      },
      {
        threshold: 0,
        rootMargin: "-1px 0px 0px 0px",
      },
    );

    observer.observe(sentinel);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const navElement = ref.current;
    const activeLink = navElement?.querySelector<HTMLElement>(
      "[aria-current='true']",
    );

    if (!navElement || !activeLink) return;

    const navRect = navElement.getBoundingClientRect();
    const linkRect = activeLink.getBoundingClientRect();

    navElement.scrollTo({
      left:
        navElement.scrollLeft +
        linkRect.left -
        navRect.left -
        (navElement.clientWidth - activeLink.clientWidth) / 2,
      behavior: "smooth",
    });
  }, [active]);

  return (
    <>
      <div
        ref={sentinelRef}
        aria-hidden="true"
        className="h-px shrink-0 md:hidden"
      />

      <header
        className={cn(
          "sticky top-0 z-50 w-full shrink-0 border-b border-border pb-3 backdrop-blur transition-[background-color,box-shadow] duration-300 md:hidden",
          stuck
            ? "bg-bg/80 shadow-[0_8px_24px_-16px_rgb(0_0_0/0.4)]"
            : "bg-transparent shadow-none",
        )}
      >
        <div className="mx-auto flex max-w-6xl items-center gap-3">
          <nav
            ref={ref}
            aria-label="Sections"
            className="no-scrollbar flex flex-1 items-center gap-1 overflow-x-auto"
          >
            {nav.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                aria-current={active === id ? "true" : undefined}
                className={cn(
                  "flex items-center whitespace-nowrap rounded px-3 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors",
                  active === id
                    ? "bg-brand text-brand-fg"
                    : "text-muted hover:text-fg",
                )}
              >
                {label}
              </a>
            ))}
          </nav>

          <ThemeToggle className="size-9 shrink-0" />

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download résumé"
            className="grid size-10 shrink-0 place-items-center rounded-full border border-border bg-surface text-muted transition hover:rotate-12 hover:border-brand-text hover:text-fg active:scale-95"
          >
            <Download className="size-4.5" />
          </a>
        </div>
      </header>
    </>
  );
}
