// src/components/timeline.tsx
"use client";

import { useId, useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils/cn";

export type TimelineEntry = {
  id: string;
  title: string;
  url?: string;
  logo?: string;
  logoFit?: "cover" | "contain";
  badge?: string;
  badgeTone?: "brand" | "neutral";
  subtitle: string;
  location?: string;
  period: string;
  current?: boolean;
  description?: string;
  highlights?: string[];
  tags?: string[];
};

function Logo({
  title,
  logo,
  fit = "cover",
}: Pick<TimelineEntry, "title" | "logo"> & { fit?: "cover" | "contain" }) {
  const initials = title
    .replace(/\(.*?\)/g, "")
    .split(" ")
    .filter(Boolean)
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div
      className={cn(
        "grid size-14 shrink-0 place-items-center overflow-hidden rounded-xl border border-border sm:size-16",
        fit === "contain" ? "bg-white p-1.5" : "bg-bg",
      )}
    >
      {logo ? (
        <Image
          src={logo}
          alt={`${title} logo`}
          width={64}
          height={64}
          className={cn(
            "size-full",
            fit === "contain" ? "object-contain" : "object-cover",
          )}
        />
      ) : (
        <span className="font-display text-lg font-bold text-brand-text">
          {initials}
        </span>
      )}
    </div>
  );
}

function TimelineCard({ entry }: { entry: TimelineEntry }) {
  const ref = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const {
    title,
    url,
    logo,
    logoFit,
    badge,
    badgeTone = "brand",
    subtitle,
    location,
    period,
    current,
    description,
    highlights,
    tags,
  } = entry;

  function onPointerMove(e: React.PointerEvent<HTMLElement>) {
    if (e.pointerType !== "mouse") return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - r.left}px`);
    el.style.setProperty("--y", `${e.clientY - r.top}px`);
  }

  return (
    <article
      ref={ref}
      onPointerMove={onPointerMove}
      className="group relative isolate overflow-hidden rounded-2xl border border-border bg-surface p-5 sm:p-6"
    >
      <header className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div className="flex min-w-0 items-center gap-4">
          <Logo title={title} logo={logo} fit={logoFit} />
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
              <h3 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
                {url ? (
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-1.5 transition-colors hover:text-brand-text"
                  >
                    {title}
                    <ArrowUpRight
                      className="size-4 text-muted transition-all group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 group-hover/link:text-brand-text"
                      aria-hidden
                    />
                  </a>
                ) : (
                  title
                )}
              </h3>
              {badge && (
                <span
                  className={cn(
                    "rounded-full border px-2.5 py-0.5 font-mono text-[11px] uppercase tracking-wider",
                    badgeTone === "brand"
                      ? "border-brand-text/40 bg-brand/10 text-brand-text"
                      : "border-border text-muted",
                  )}
                >
                  {badge}
                </span>
              )}
            </div>
            <p className="mt-1 text-sm sm:text-base">
              {subtitle}
              {location && <span className="text-muted"> · {location}</span>}
            </p>
          </div>
        </div>

        <p className="flex items-center gap-2 font-mono text-xs text-muted md:shrink-0 md:pt-2">
          {current && (
            <span className="relative flex size-2" aria-hidden>
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand opacity-70 motion-reduce:animate-none" />
              <span className="relative inline-flex size-2 rounded-full bg-brand" />
            </span>
          )}
          {period}
        </p>
      </header>

      {description && (
        <p className="mt-5 leading-relaxed text-muted">{description}</p>
      )}

      {highlights && highlights.length > 0 && (
        <div className="mt-4">
          <button
            type="button"
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-brand-text transition-opacity hover:opacity-80"
          >
            {open ? "Hide highlights" : "Key highlights"}
            <ChevronDown
              className={cn(
                "size-4 transition-transform duration-300",
                open && "rotate-180",
              )}
              aria-hidden
            />
          </button>
          <div
            id={panelId}
            inert={!open}
            className={cn(
              "grid transition-[grid-template-rows] duration-300 ease-out",
              open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
            )}
          >
            <div className="overflow-hidden">
              <ul className="list-disc space-y-2 pb-1 pl-5 pt-3 text-muted marker:text-brand-text">
                {highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {tags && tags.length > 0 && (
        <ul aria-label="Technologies" className="mt-5 flex flex-wrap gap-2">
          {tags.map((t) => (
            <li
              key={t}
              className="rounded-md border border-border bg-bg px-2.5 py-1 font-mono text-xs text-muted transition hover:-translate-y-0.5 hover:border-brand-text hover:text-fg"
            >
              {t}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}

export function Timeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <>
      {entries.map((entry) => (
        <li key={entry.id} className="relative list-none">
          <span
            aria-hidden
            className={cn(
              "absolute left-0 top-8 size-[15px] rounded-full border-2 transition-colors",
              entry.current ? "border-brand bg-brand" : "border-border bg-bg",
            )}
          />
          <Reveal>
            <TimelineCard entry={entry} />
          </Reveal>
        </li>
      ))}
    </>
  );
}
