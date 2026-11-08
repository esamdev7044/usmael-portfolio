export const inputClass =
  "w-full rounded-xl border border-muted/20 bg-bg px-4 py-3 text-base outline-none transition placeholder:text-muted/60 aria-[invalid=true]:border-red-500/70";

export function FormField({
  id,
  label,
  error,
  aside,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  aside?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="mb-1.5 flex items-baseline justify-between gap-3">
        <label htmlFor={id} className="text-sm font-medium">
          {label}
        </label>
        {aside}
      </div>
      {children}
      {error && (
        <p
          id={`${id}-error`}
          role="alert"
          className="mt-1.5 text-sm text-red-600 dark:text-red-400"
        >
          {error}
        </p>
      )}
    </div>
  );
}
