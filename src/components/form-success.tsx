// src/components/contact/form-success.tsx
"use client";

import * as m from "motion/react-m";
import { Check } from "lucide-react";

export function FormSuccess({ onReset }: { onReset: () => void }) {
  return (
    <m.div
      role="status"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="grid place-items-center gap-3 py-10 text-center"
    >
      <m.span
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.1 }}
        className="grid size-14 place-items-center rounded-full bg-brand text-brand-fg"
      >
        <Check className="size-7" aria-hidden />
      </m.span>
      <h3 className="font-display text-2xl font-semibold tracking-tight">
        Message sent
      </h3>
      <p className="max-w-sm text-muted">
        Thanks for reaching out. I&apos;ll get back to you within 24 hours.
      </p>
      <button
        type="button"
        onClick={onReset}
        className="mt-2 rounded-xl border border-border bg-bg px-4 py-2 text-sm transition hover:border-brand-text active:scale-[.97]"
      >
        Send another message
      </button>
    </m.div>
  );
}
