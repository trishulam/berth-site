"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Mark from "./Mark";
import Arrow from "./Arrow";
import { DESK_HREF, TALK_HREF } from "./links";

const LINKS = [
  { href: "/#desks", label: "Desks", nav: "home" },
  { href: "/#thesis", label: "Thesis", nav: "home" },
  { href: "/fix", label: "Fix", nav: "fix" },
];

export default function Nav() {
  const path = usePathname();
  const [solid, setSolid] = useState(false);
  const [light, setLight] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const onFix = path === "/fix";

  // solid after 80px; ink over paper; on phones, slide away when scrolling down and back when scrolling up
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setSolid(y > 80);
      let l = false;
      document.querySelectorAll<HTMLElement>(".paper, .cover").forEach((p) => {
        const r = p.getBoundingClientRect();
        if (r.top < 44 && r.bottom > 44) l = true;
      });
      setLight(l);
      if (window.innerWidth < 640) setHidden(y > 160 && y > last + 4);
      else setHidden(false);
      if (Math.abs(y - last) > 4) last = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [path]);

  // the sheet: close on route change and Escape; lock the page behind it
  useEffect(() => { setOpen(false); }, [path]);
  useEffect(() => {
    document.documentElement.classList.toggle("sheet-open", open);
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => { window.removeEventListener("keydown", onKey); document.documentElement.classList.remove("sheet-open"); };
  }, [open]);

  return (
    <>
      <nav className={`nav${solid ? " solid" : ""}${light ? " light" : ""}${hidden && !open ? " away" : ""}${open ? " open" : ""}`} id="nav">
        <Link className="brand" href="/" aria-label="Berth" onClick={() => setOpen(false)}>
          <Mark />
          Berth
        </Link>
        <ul className="label">
          {LINKS.map((l) => (
            <li key={l.href}><Link href={l.href} className={l.nav === (onFix ? "fix" : "home") && l.nav === "fix" ? "here" : ""}>{l.label}</Link></li>
          ))}
          <li><Link href={onFix ? "/fix#fixfaq" : "/#faq"}>Faq</Link></li>
          <li className="cta"><a className="btn" href={DESK_HREF}>Start a free month</a></li>
        </ul>
        <button type="button" className={`burger${open ? " x" : ""}`} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="sheet" onClick={() => setOpen((o) => !o)}>
          <span /><span />
        </button>
      </nav>

      {/* the phone menu: a sheet of paper sliding in from the right */}
      <aside className={`sheet${open ? " show" : ""}`} id="sheet" aria-hidden={!open}>
        <div className="sheet-top"><span className="label">{onFix ? "Fix by Berth" : "Agents for every desk in maritime trade"}</span></div>
        <nav className="sheet-links">
          {LINKS.map((l, i) => (
            <Link key={l.href} href={l.href} style={{ transitionDelay: `${90 + i * 45}ms` }} onClick={() => setOpen(false)}>
              <span>{l.label}</span>
              <small>{l.nav === "fix" ? "The chartering desk agent" : l.label === "Desks" ? "One firm. Every desk." : "Why Berth"}</small>
            </Link>
          ))}
          <Link href={onFix ? "/fix#fixfaq" : "/#faq"} style={{ transitionDelay: "225ms" }} onClick={() => setOpen(false)}>
            <span>Questions</span><small>What people ask first</small>
          </Link>
        </nav>
        <div className="sheet-cta">
          <a className="btn" href={DESK_HREF} onClick={() => setOpen(false)}>Start a free month <Arrow /></a>
          <a className="textlink" href={TALK_HREF} onClick={() => setOpen(false)}>Talk to us</a>
        </div>
        <div className="sheet-foot">
          <Mark />
          <em>Fix by Berth · 2026</em>
        </div>
      </aside>
    </>
  );
}
