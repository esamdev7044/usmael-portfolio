import { Timeline } from "@/components/timeline";
import type { Job } from "@/lib/data/experience";

export function Experience({ items }: { items: Job[] }) {
  return (
    <Timeline
      entries={items.map((j) => ({
        id: `${j.company}-${j.period}`,
        title: j.company,
        url: j.url,
        logo: j.logo,
        badge: j.badge,
        badgeTone: "brand",
        subtitle: j.role,
        location: j.location,
        period: j.period,
        current: j.current,
        description: j.description,
        highlights: j.highlights,
        tags: j.tags,
      }))}
    />
  );
}
