// src/lib/contact.ts
export const topics = [
  "Project",
  "Full-time role",
  "Collaboration",
  "Just saying hi",
] as const;

export const LIMITS = {
  nameMax: 80,
  messageMin: 10,
  messageMax: 2000,
} as const;

export type ContactField = "name" | "email" | "message";
export type FieldErrors = Partial<Record<ContactField, string>>;
export type ContactInput = {
  topic: string;
  name: string;
  email: string;
  message: string;
};

export function validateContact(input: ContactInput): FieldErrors {
  const errors: FieldErrors = {};
  const name = input.name.trim();
  const email = input.email.trim();
  const message = input.message.trim();

  if (name.length < 2) errors.name = "Please enter your name.";
  else if (name.length > LIMITS.nameMax)
    errors.name = "That name is a bit long.";

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email))
    errors.email = "Enter a valid email address.";

  if (message.length < LIMITS.messageMin)
    errors.message = `Tell me a little more (at least ${LIMITS.messageMin} characters).`;
  else if (message.length > LIMITS.messageMax)
    errors.message = `Please keep it under ${LIMITS.messageMax} characters.`;

  return errors;
}
