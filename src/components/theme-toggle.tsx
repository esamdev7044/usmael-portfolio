// src/components/theme-toggle.tsx
"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils/cn";

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className={cn(
        "grid size-10 place-items-center rounded-full border border-border bg-surface text-muted transition hover:rotate-12 hover:border-brand-text hover:text-fg active:scale-95",
        className,
      )}
    >
      <Sun className="hidden size-4.5 dark:block" />
      <Moon className="size-4.5 dark:hidden" />
    </button>
  );
}
