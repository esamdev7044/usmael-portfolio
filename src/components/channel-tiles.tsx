// src/components/contact/channel-tiles.tsx
import { ArrowUpRight, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { links } from "@/lib/data";

const channels: {
  label: string;
  hint: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}[] = [
  {
    label: "Telegram",
    hint: "Fastest reply",
    href: links.telegram,
    icon: Send,
  },
  {
    label: "LinkedIn",
    hint: "Let's connect",
    href: links.linkedin,
    icon: LinkedinIcon,
  },
  {
    label: "GitHub",
    hint: "See my code",
    href: links.github,
    icon: GithubIcon,
  },
];

export function ChannelTiles() {
  return (
    <ul className="grid gap-2 sm:grid-cols-3">
      {channels.map(({ label, hint, href, icon: Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-full gap-4 rounded-2xl border border-border bg-surface p-4 hover:border-brand-text/30"
          >
            <span className="grid size-10 place-items-center rounded-xl bg-bg text-muted transition-colors group-hover:text-brand-text">
              <Icon className="size-5" />
            </span>
            <span className="flex flex-1 items-start justify-between">
              <span>
                <span className="block font-medium">{label}</span>
                <span className="block text-sm text-muted">{hint}</span>
              </span>
              <ArrowUpRight
                className="size-4 text-muted transition-all group-hover:text-brand-text"
                aria-hidden
              />
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
