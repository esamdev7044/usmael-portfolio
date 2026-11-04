// src/components/tech-stack.tsx
"use client";

import { useState } from "react";
import { AnimatePresence } from "motion/react";
import * as m from "motion/react-m";
import { cn } from "@/lib/utils/cn";

export function TechStack({ groups }: { groups: Record<string, string[]> }) {
  const categories = ["All", ...Object.keys(groups)];
  const [active, setActive] = useState("All");
  const items =
    active === "All" ? Object.values(groups).flat() : groups[active];

  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            aria-pressed={active === c}
            onClick={() => setActive(c)}
            className={cn(
              "rounded-full border px-3.5 py-1.5 font-mono text-xs transition active:scale-95",
              active === c
                ? "border-brand bg-brand text-brand-fg"
                : "border-border bg-surface text-muted hover:border-brand-text hover:text-fg",
            )}
          >
            {c}
          </button>
        ))}
      </div>

      <ul className="flex flex-wrap gap-2">
        <AnimatePresence initial={false}>
          {items.map((t) => (
            <m.li
              key={t}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.18 }}
              className="rounded-lg border border-border bg-surface px-3 py-2 text-sm"
            >
              {t}
            </m.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
}
