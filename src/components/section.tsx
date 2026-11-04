import { Reveal } from "@/components/reveal";

export function Section({
  id,
  title,
  description,
  children,
}: {
  id: string;
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      aria-describedby={description ? `${id}-description` : undefined}
      className="scroll-mt-20 border-t border-border py-14 md:scroll-mt-12"
    >
      <Reveal className="mb-8">
        <h2
          id={`${id}-title`}
          className="font-display text-2xl font-semibold tracking-tight sm:text-3xl"
        >
          {title}
        </h2>
        {description && (
          <p
            id={`${id}-description`}
            className="mt-3 max-w-2xl leading-relaxed text-muted"
          >
            {description}
          </p>
        )}
      </Reveal>
      {children}
    </section>
  );
}
