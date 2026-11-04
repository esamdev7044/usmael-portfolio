"use client";

import Image from "next/image";
import { ArrowUpRight, Circle } from "lucide-react";

import { GithubIcon } from "@/components/ui/icons";
import type { Project } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const { title, category, role, description, tags, image, live, repo } =
    project;

  return (
    <article
      aria-label={`${title}, project ${index + 1}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface p-5 transition-colors duration-300 sm:p-7"
    >
      <header className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2.5">
            <h3 className="font-display text-2xl font-semibold tracking-tight text-fg">
              {title}
            </h3>

            <span className="inline-flex items-center rounded-full border border-border bg-bg px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-wider text-muted">
              {category}
            </span>
          </div>

          <p className="mt-2 font-mono text-xs uppercase tracking-[0.12em] text-muted">
            {role}
          </p>
        </div>
        {(live || repo) && (
          <div className="flex shrink-0 items-center gap-2">
            {repo && (
              <a
                href={repo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title} source code on GitHub`}
                title="Source code"
                className="grid size-10 place-items-center rounded-xl border border-border bg-bg text-muted transition-colors hover:border-brand-text/60 hover:text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              >
                <GithubIcon className="size-4.5" />
              </a>
            )}

            {live && (
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${title} live website`}
                className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/25 bg-emerald-500/10 px-2 py-1 text-sm font-medium text-emerald-700 transition-colors hover:bg-emerald-500/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:text-emerald-400"
              >
                <Circle className="size-2 fill-current" aria-hidden="true" />

                <span>Live website</span>

                <ArrowUpRight className="size-4" />
              </a>
            )}
          </div>
        )}
      </header>

      <p className="mt-10 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
        {description}
      </p>

      <ul
        aria-label={`${title} technology stack`}
        className="mt-5 flex flex-wrap gap-2"
      >
        {tags.map((tag) => (
          <li
            key={tag}
            className="rounded-md border border-border bg-bg px-2.5 py-1 font-mono text-[11px] text-muted"
          >
            {tag}
          </li>
        ))}
      </ul>

      {image && (
        <figure className="mt-6">
          <div className="overflow-hidden rounded-xl border border-border bg-bg">
            <div className="flex items-center justify-start gap-3 border-b border-border px-3 py-2">
              <div className="flex shrink-0 gap-1.5" aria-hidden="true">
                <span className="size-2.5 rounded-full bg-muted/30" />
                <span className="size-2.5 rounded-full bg-muted/30" />
                <span className="size-2.5 rounded-full bg-muted/30" />
              </div>

              <span className="w-7.5" aria-hidden="true" />
            </div>
            <div className="relative aspect-video overflow-hidden bg-bg">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1280px) 720px, (min-width: 768px) 80vw, 100vw"
                className="object-contain"
              />
            </div>
          </div>

          {image.alt && (
            <figcaption className="sr-only">
              Screenshot of {title}: {image.alt}
            </figcaption>
          )}
        </figure>
      )}
    </article>
  );
}
