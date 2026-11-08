// src/components/contact/submit-button.tsx
import { LoaderCircle, SendHorizontal } from "lucide-react";

export function SubmitButton({ pending }: { pending: boolean }) {
  return (
    <button
      type="submit"
      disabled={pending}
      className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-5 py-3.5 font-medium text-brand-fg cursor-pointer transition hover:brightness-95 active:scale-[.98] disabled:cursor-not-allowed disabled:opacity-70"
    >
      {pending ? (
        <>
          <LoaderCircle
            className="size-4 animate-spin motion-reduce:animate-none"
            aria-hidden
          />
          Sending…
        </>
      ) : (
        <>
          Send message
          <SendHorizontal
            className="size-4 transition-transform group-hover:translate-x-1"
            aria-hidden
          />
        </>
      )}
    </button>
  );
}
