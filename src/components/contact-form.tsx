"use client";

import { AnimatePresence } from "motion/react";
import * as m from "motion/react-m";
import { FormField, inputClass } from "@/components/form-field";
import { FormSuccess } from "@/components/form-success";
import { SubmitButton } from "@/components/submit-button";
import { useContactForm } from "@/components/use-contact-form";
import { LIMITS } from "@/lib/data/contact";
import { profile } from "@/lib/data";
import { cn } from "@/lib/utils/cn";

export function ContactForm() {
  const f = useContactForm();
  const firstName = profile.name.split(" ")[0];

  return (
    <div className="rounded-2xl border border-border bg-surface p-5 sm:p-7">
      <AnimatePresence mode="wait" initial={false}>
        {f.sent ? (
          <FormSuccess key="sent" onReset={f.reset} />
        ) : (
          <m.form
            key="form"
            onSubmit={f.onSubmit}
            noValidate
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid gap-5"
          >
            <header className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="font-display text-xl font-semibold tracking-tight">
                Send a message
              </h3>
            </header>
            <div className="grid gap-5 sm:grid-cols-2">
              <FormField
                id={f.fieldId("name")}
                label="Your name"
                error={f.errors.name}
              >
                <input
                  id={f.fieldId("name")}
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Alex Smith"
                  maxLength={LIMITS.nameMax}
                  aria-required="true"
                  aria-invalid={!!f.errors.name}
                  aria-describedby={
                    f.errors.name ? `${f.fieldId("name")}-error` : undefined
                  }
                  onInput={() => f.clearError("name")}
                  className={inputClass}
                />
              </FormField>

              <FormField
                id={f.fieldId("email")}
                label="Email address"
                error={f.errors.email}
              >
                <input
                  id={f.fieldId("email")}
                  name="email"
                  type="email"
                  autoComplete="email"
                  inputMode="email"
                  placeholder="alex@company.com"
                  aria-required="true"
                  aria-invalid={!!f.errors.email}
                  aria-describedby={
                    f.errors.email ? `${f.fieldId("email")}-error` : undefined
                  }
                  onInput={() => f.clearError("email")}
                  className={inputClass}
                />
              </FormField>
            </div>

            <FormField
              id={f.fieldId("message")}
              label="Message"
              error={f.errors.message}
              aside={
                <span className="font-mono text-xs text-muted" aria-hidden>
                  {f.length}/{LIMITS.messageMax}
                </span>
              }
            >
              <textarea
                id={f.fieldId("message")}
                name="message"
                rows={5}
                maxLength={LIMITS.messageMax}
                placeholder={`Hi ${firstName}, I'd like to discuss a project…`}
                aria-required="true"
                aria-invalid={!!f.errors.message}
                aria-describedby={
                  f.errors.message ? `${f.fieldId("message")}-error` : undefined
                }
                onInput={(e) => {
                  f.setLength(e.currentTarget.value.length);
                  f.clearError("message");
                }}
                className={cn(inputClass, "min-h-32 resize-y")}
              />
            </FormField>
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden
              className="absolute left-[-9999px] size-0 opacity-0"
            />

            {f.serverError && (
              <p
                role="alert"
                className="rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm"
              >
                {f.serverError}{" "}
                <a
                  href={`mailto:${profile.email}`}
                  className="underline underline-offset-4"
                >
                  Email me directly
                </a>
                .
              </p>
            )}

            <SubmitButton pending={f.pending} />
          </m.form>
        )}
      </AnimatePresence>
    </div>
  );
}
