"use client";

import { ArrowDown, ArrowUpRight } from "lucide-react";
import type { Variants } from "motion/react";
import * as m from "motion/react-m";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function Hero() {
  return (
    <m.section
      id="home"
      variants={container}
      initial="hidden"
      animate="show"
      className="pb-20 pt-2 md:flex md:flex-col md:items-start md:justify-center md:pb-12 md:pt-0 lg:min-h-[calc(90dvh-5rem)]"
    >
      <m.p
        variants={item}
        className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 text-sm text-muted"
      >
        <span className="relative flex size-2">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand opacity-70" />
          <span className="relative inline-flex size-2 rounded-full bg-brand" />
        </span>
        Open to new projects &amp; roles
      </m.p>

      <h1 className="mt-6 font-display text-3xl md:text-5xl font-bold leading-[1.2] md:leading-[1.1] tracking-tight">
        Engineering fast,{" "}
        <span className="relative inline-block">
          dependable
          <m.svg
            aria-hidden="true"
            viewBox="0 0 220 14"
            preserveAspectRatio="none"
            className="absolute bottom-[-0.12em] left-0 h-[0.16em] w-full overflow-visible"
          >
            <m.path
              d="M3 9 C35 2, 55 12, 88 7 S145 3, 175 7 S205 5, 218 3"
              fill="none"
              stroke="currentColor"
              strokeWidth="7"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
              className="text-brand"
            />
          </m.svg>
        </span>{" "}
        software from database to interface.
      </h1>

      <m.p
        variants={item}
        className="mt-6 max-w-2xl leading-relaxed text-muted font-normal"
      >
        Hey, I&apos;m Usmael Taju, a software engineer specializing in
        full-stack systems, based in Ethiopia. I turn product ideas into fast,
        accessible, and secure systems that are ready for production, owning
        everything from requirements and design to development and maintenance.
      </m.p>

      <m.div variants={item} className="mt-8 flex flex-wrap gap-3">
        <a
          href="#work"
          className="group inline-flex items-center gap-2 rounded-xl bg-brand px-3 font-medium text-brand-fg transition hover:brightness-95 active:scale-[.97]"
        >
          Explore projects
          <ArrowDown
            className="size-4 transition-transform group-hover:translate-y-0.5"
            aria-hidden
          />
        </a>
        <a
          href="#contact"
          className="group inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-3 py-2 transition hover:border-brand-text active:scale-[.97]"
        >
          Get in touch
          <ArrowUpRight
            className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden
          />
        </a>
      </m.div>
    </m.section>
  );
}
