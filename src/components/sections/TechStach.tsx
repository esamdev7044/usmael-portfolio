"use client";

import { Reveal } from "@/components/reveal";
import type { IconData, StackGroup } from "@/lib/data/tech-stack";
import { cn } from "@/lib/utils/cn";

function BrandIcon({ icon, name }: { icon?: IconData; name: string }) {
  if (!icon) {
    return (
      <span
        aria-hidden
        className="grid size-5 place-items-center font-mono text-xs font-bold"
      >
        {name[0]}
      </span>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="size-5">
      <path d={icon.path} />
    </svg>
  );
}

function StackCard({ group }: { group: StackGroup }) {

  return (
    <article className="rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-border/80 sm:p-6">
      <header className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h3 className="mt-1 font-display text-xl font-semibold tracking-tight">
            {group.title}
          </h3>
          <p className="mt-1 text-sm text-muted">{group.description}</p>
        </div>
      </header>

      <ul className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
        {group.tools.map((tool) => {
          return (
            <li key={tool.name} className="list-none">
              <div
                className={cn(
                  "group flex w-full items-center gap-3 rounded-xl border border-muted/30 px-3 py-2.5 text-left text-sm transition-all duration-200 active:scale-[.97]",
                )}
              >
                <span className={cn("shrink-0 transition-colors duration-200")}>
                  <BrandIcon icon={tool.icon} name={tool.name} />
                </span>
                <div className="flex h-full min-h-14 flex-col justify-center">
                  <span className="truncate">{tool.name}</span>
                  <span className="text-muted">{tool.note}</span>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </article>
  );
}

export function TechStack({ groups }: { groups: StackGroup[] }) {
  return (
    <div className="grid gap-4">
      {groups.map((group) => (
        <Reveal key={group.title}>
          <StackCard group={group} />
        </Reveal>
      ))}
    </div>
  );
}
