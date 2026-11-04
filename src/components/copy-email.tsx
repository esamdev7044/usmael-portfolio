// src/components/copy-email.tsx
"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export function CopyEmail({ email }: { email: string }) {
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
    <button
      type="button"
      onClick={copy}
      className="group inline-flex items-center gap-3 rounded-xl border border-border bg-surface px-5 py-3 font-mono text-sm transition hover:border-brand-text active:scale-[.98]"
    >
      {email}
      {copied ? (
        <Check className="size-4 text-brand-text" aria-hidden />
      ) : (
        <Copy
          className="size-4 text-muted transition-colors group-hover:text-fg"
          aria-hidden
        />
      )}
      <span className="sr-only" aria-live="polite">
        {copied ? "Email copied" : ""}
      </span>
    </button>
  );
}
