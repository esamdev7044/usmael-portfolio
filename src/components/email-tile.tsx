// src/components/contact/email-tile.tsx
"use client";

import { useState } from "react";
import { ArrowUpRight, Check, Copy, Mail } from "lucide-react";

export function EmailTile({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <div className="flex gap-2">
      <button
        type="button"
        onClick={copy}
        className="group flex min-w-0 flex-1 items-center gap-3 rounded-2xl border border-border bg-surface px-4 py-3.5 text-left transition hover:border-brand-text/30 cursor-pointer active:scale-[.99]"
      >
        <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-bg text-brand-text">
          <Mail className="size-5" aria-hidden />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
            Email
          </span>
          <span className="block truncate text-sm sm:text-base">{email}</span>
        </span>
        <span className="inline-flex items-center gap-1.5 font-mono text-xs text-muted transition-colors group-hover:text-brand-text">
          {copied ? (
            <Check className="size-4 text-brand-text" aria-hidden />
          ) : (
            <Copy className="size-4" aria-hidden />
          )}
          <span className="hidden sm:inline">{copied ? "Copied" : "Copy"}</span>
        </span>
        <span className="sr-only" aria-live="polite">
          {copied ? "Email copied" : ""}
        </span>
      </button>
      <a
        href={`mailto:${email}`}
        aria-label="Open in mail app"
        title="Open in mail app"
        className="grid w-14 shrink-0 place-items-center rounded-2xl border border-border bg-surface text-muted transition hover:border-brand-text/30 hover:text-fg"
      >
        <ArrowUpRight className="size-5" aria-hidden />
      </a>
    </div>
  );
}
