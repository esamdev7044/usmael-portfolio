import { Timeline } from "@/components/timeline";
import type { Edu } from "@/lib/data/education";

export function Education({ items }: { items: Edu[] }) {
  return (
    <Timeline
      entries={items.map((e) => ({
        id: `${e.school}-${e.period}`,
        title: e.school,
        url: e.url,
        logo: e.logo,
        logoFit: "contain",
        badge: e.badge ?? "Degree",
        badgeTone: "neutral",
        subtitle: e.degree,
        location: e.location,
        period: e.period,
        description: e.description,
        tags: e.tags,
      }))}
    />
  );
}
