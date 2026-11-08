// src/components/contact/use-contact-form.ts
"use client";

import { useId, useState, useTransition } from "react";
import { sendMessage } from "@/app/actions/contact";
import {
  validateContact,
  type ContactField,
  type FieldErrors,
} from "@/lib/data/contact";

export function useContactForm() {
  const uid = useId();
  const [pending, startTransition] = useTransition();
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [serverError, setServerError] = useState<string | null>(null);
  const [length, setLength] = useState(0);

  const fieldId = (f: ContactField) => `${uid}-${f}`;

  const clearError = (f: ContactField) =>
    setErrors((prev) => (prev[f] ? { ...prev, [f]: undefined } : prev));

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const str = (k: string) => String(data.get(k) ?? "");

    const found = validateContact({
      topic: str("topic"),
      name: str("name"),
      email: str("email"),
      message: str("message"),
    });

    setErrors(found);
    setServerError(null);

    const first = (["name", "email", "message"] as const).find((k) => found[k]);
    if (first) {
      (form.elements.namedItem(first) as HTMLElement | null)?.focus();
      return;
    }

    startTransition(async () => {
      const res = await sendMessage(data);
      if (res.ok) {
        form.reset();
        setLength(0);
        setSent(true);
      } else {
        setErrors(res.fieldErrors ?? {});
        setServerError(res.error);
      }
    });
  }

  return {
    pending,
    sent,
    errors,
    serverError,
    length,
    setLength,
    fieldId,
    clearError,
    onSubmit,
    reset: () => setSent(false),
  };
}
