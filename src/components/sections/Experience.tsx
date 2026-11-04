"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { Job } from "@/lib/data";
import { cn } from "@/lib/utils/cn";

export function Experience({ items }: { items: Job[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <ol className="divide-y divide-border border-y border-border">
      {items.map((job, i) => {
        const isOpen = open === i;
        return (
          <li key={`${job.company}-${job.period}`}>
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={`job-${i}`}
              onClick={() => setOpen(isOpen ? null : i)}
              className="group flex w-full items-center justify-between gap-4 py-5 text-left"
            >
              <div>
                <h3 className="font-display text-lg font-semibold">
                  {job.role}{" "}
                  <span className="font-normal text-muted">
                    · {job.company}
                  </span>
                </h3>
                <p className="mt-1 font-mono text-xs text-muted">
                  {job.period}
                </p>
              </div>
              <ChevronDown
                className={cn(
                  "size-5 shrink-0 text-muted transition-transform duration-300 group-hover:text-brand-text",
                  isOpen && "rotate-180",
                )}
                aria-hidden
              />
            </button>
            <div
              id={`job-${i}`}
              inert={!isOpen}
              className={cn(
                "grid transition-[grid-template-rows] duration-300 ease-out",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <ul className="list-disc space-y-2 pb-6 pl-5 text-muted marker:text-brand-text">
                  {job.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
