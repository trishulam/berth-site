"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Two small behaviours shared by both pages:
 *  - cards and ledger rows rise 24px and fade in on first sight, staggered; at rest without JS
 */
export default function Effects() {
  const path = usePathname();

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const items = Array.from(document.querySelectorAll<HTMLElement>(".card, .row"));
    let pending: HTMLElement[] = [];
    if (!reduce) {
      items.forEach((c) => c.classList.add("pre"));
      pending = items.slice();
    }
    const reveal = () => {
      if (reduce) return;
      const vh = window.innerHeight;
      pending = pending.filter((c) => {
        const r = c.getBoundingClientRect();
        if (r.top < vh * 0.92 && r.bottom > 0) {
          const i = items.indexOf(c);
          setTimeout(() => c.classList.remove("pre"), (i % 8) * 80);
          return false;
        }
        return true;
      });
    };
    window.addEventListener("scroll", reveal, { passive: true });
    window.addEventListener("resize", reveal);
    const t0 = setTimeout(reveal, 400);
    const tick = setInterval(() => {
      reveal();
      if (!pending.length) clearInterval(tick);
    }, 400);

    return () => {
      window.removeEventListener("scroll", reveal);
      window.removeEventListener("resize", reveal);
      clearTimeout(t0);
      clearInterval(tick);
      items.forEach((c) => c.classList.remove("pre"));
    };
  }, [path]);

  return null;
}
