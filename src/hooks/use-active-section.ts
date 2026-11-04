"use client";

import { useEffect, useState } from "react";

const PROBE_MIN = 120;
const PROBE_MAX = 200;

export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    let raf = 0;

    const update = () => {
      raf = 0;
      const probe = Math.min(
        Math.max(window.innerHeight * 0.3, PROBE_MIN),
        PROBE_MAX,
      );
      let current = ids[0];
      if (window.scrollY > 48) {
        for (const id of ids) {
          const el = document.getElementById(id);
          if (el && el.getBoundingClientRect().top <= probe) current = id;
        }
      }
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4;
      if (atBottom) current = ids[ids.length - 1];

      setActive((prev) => (prev === current ? prev : current));
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ids]);

  return active;
}
