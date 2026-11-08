"use server";

import { siteConfig } from "@/lib/site";
import { topics, validateContact, type FieldErrors } from "@/lib/data/contact";

export type SendResult =
  | { ok: true }
  | { ok: false; error: string; fieldErrors?: FieldErrors };

const str = (v: FormDataEntryValue | null) => (typeof v === "string" ? v : "");
const oneLine = (s: string) => s.replace(/[\r\n]+/g, " ").trim();

export async function sendMessage(formData: FormData): Promise<SendResult> {
  if (str(formData.get("website"))) return { ok: true };

  const input = {
    topic: str(formData.get("topic")),
    name: str(formData.get("name")),
    email: str(formData.get("email")),
    message: str(formData.get("message")),
  };

  const fieldErrors = validateContact(input);
  if (Object.keys(fieldErrors).length > 0) {
    return {
      ok: false,
      error: "Please fix the highlighted fields.",
      fieldErrors,
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY is not set");
    return { ok: false, error: "The form isn't set up yet." };
  }

  const topic = (topics as readonly string[]).includes(input.topic)
    ? input.topic
    : "General";
  const name = oneLine(input.name);
  const email = oneLine(input.email);

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM ?? "Portfolio <onboarding@resend.dev>",
        to: [process.env.CONTACT_TO ?? siteConfig.email],
        reply_to: email,
        subject: `[${topic}] New message from ${name}`,
        text: `Topic: ${topic}\nName: ${name}\nEmail: ${email}\n\n${input.message.trim()}`,
      }),
      signal: AbortSignal.timeout(10_000),
    });

    if (!res.ok) {
      console.error("[contact] Resend error", res.status, await res.text());
      return {
        ok: false,
        error: "Couldn't send your message. Please try again.",
      };
    }
    return { ok: true };
  } catch (err) {
    console.error("[contact] send failed", err);
    return {
      ok: false,
      error: "Couldn't send your message. Please try again.",
    };
  }
}
