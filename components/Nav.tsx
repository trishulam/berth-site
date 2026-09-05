"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Mark from "./Mark";

import { DESK_HREF } from "./links";

export default function Nav() {
  const path = usePathname();
  const [solid, setSolid] = useState(false);
  const [light, setLight] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setSolid(window.scrollY > 80);
      let l = false;
      document.querySelectorAll<HTMLElement>(".paper, .cover").forEach((p) => {
        const r = p.getBoundingClientRect();
        if (r.top < 44 && r.bottom > 44) l = true;
      });
      setLight(l);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [path]);

  const onFix = path === "/fix";

  return (
    <nav className={`nav${solid ? " solid" : ""}${light ? " light" : ""}`} id="nav">
      <Link className="brand" href="/" aria-label="Berth">
        <Mark />
        Berth
      </Link>
      <ul className="label">
        <li><Link href="/#desks" className={onFix ? "" : "here"}>Desks</Link></li>
        <li><Link href="/#thesis">Thesis</Link></li>
        <li><Link href="/fix" className={onFix ? "here" : ""}>Fix</Link></li>
        <li><Link href={onFix ? "/fix#fixfaq" : "/#faq"}>Faq</Link></li>
        <li className="cta"><a className="btn" href={DESK_HREF}>Put Fix on your desk</a></li>
      </ul>
    </nav>
  );
}
