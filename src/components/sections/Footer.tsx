import { CopyrightYear } from "@/components/copyright-year";
import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="mt-10 flex flex-col gap-3 border-t border-border py-6 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-sm text-muted">
        &copy; <CopyrightYear /> {profile.name}. All rights reserved.
      </p>
      <span className="font-mono text-xs text-muted">v1.0.0</span>
    </footer>
  );
}
