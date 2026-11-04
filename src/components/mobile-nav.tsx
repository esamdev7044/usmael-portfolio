// src/components/mobile-nav.tsx
"use client";

import { useEffect, useRef } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { useActiveSection } from "@/hooks/use-active-section";
import { nav, sectionIds } from "@/lib/data";
import { cn } from "@/lib/utils/cn";
import { Download } from "lucide-react";

export function MobileNav() {
  const active = useActiveSection(sectionIds);
  const ref = useRef<HTMLElement>(null);

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
    <header className="z-40 border-b pb-3 border-border  backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-6xl items-center gap-3">
        <nav
          ref={ref}
          aria-label="Sections"
          className="no-scrollbar flex items-center flex-1 gap-1 overflow-x-auto"
        >
          {nav.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={active === id ? "true" : undefined}
              className={cn(
                "whitespace-nowrap rounded flex items-center px-3 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors",
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
        <button
          type="button"
          aria-label="Download"
          className={cn(
            "grid size-10 place-items-center rounded-full border border-border bg-surface text-muted transition hover:rotate-12 hover:border-brand-text hover:text-fg active:scale-95",
          )}
        >
          <Download className="md:hidden size-4.5 block" />
        </button>
      </div>
    </header>
  );
}
