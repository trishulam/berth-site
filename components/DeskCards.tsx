"use client";

import Link from "next/link";
import { useState } from "react";
import Mark from "./Mark";
import Arrow from "./Arrow";

export type Desk = {
  key: string; pr: string; desk: string; no: string; open: boolean;
  title: string; line: string; img: string; alt: string; para: string;
};

export const DESKS: Desk[] = [
  { key: "fix", pr: "Fix", desk: "Chartering", no: "01", open: true, title: "The chartering desk agent",
    line: "Lives in your inbox. Reads every cargo and position, holds every live deal, drafts the counter, and follows up until it's fixed.",
    img: "/assets/card-fix-4.jpg", alt: "A laden bulk carrier at anchor at dusk",
    para: "Fix lives in your inbox. It reads every cargo and position, holds every live deal, drafts the counter, and follows up until it's fixed." },
  { key: "ops", pr: "Ops", desk: "Operations", no: "02", open: false, title: "The operations desk agent",
    line: "Holds the voyage after the fixture. NOR, laytime, agents, delays, all watched, all in the thread.",
    img: "/assets/card-ops-3.jpg", alt: "One voyage drawn as days, bunching in port",
    para: "Ops holds the voyage after the fixture. NOR, laytime, agents, delays, all watched, all in the thread." },
  { key: "claims", pr: "Claims", desk: "Laytime & claims", no: "03", open: false, title: "The laytime and claims desk agent",
    line: "Builds the laytime statement from what actually happened, and settles what's owed.",
    img: "/assets/card-claims-3.jpg", alt: "A laytime statement drawn as rows of counted time",
    para: "Claims builds the laytime statement from what actually happened, and settles what's owed." },
  { key: "bunker", pr: "Bunker", desk: "Bunkering", no: "04", open: false, title: "The bunkering desk agent",
    line: "Knows who's supplying what, where, and at what price, before you ask.",
    img: "/assets/card-bunker-3.jpg", alt: "Fuel remaining on board, burning down between stems",
    para: "Bunker knows who's supplying what, where, and at what price, before you ask." },
];

/** A desk's cover: a paper band set as a form header (firm, status, the desk name, desk, number), the image, the footer. */
export function Cover({ d, className = "" }: { d: Desk; className?: string }) {
  const inner = (
    <>
      <div className="band">
        <div className="fr r1">
          <div className="f"><i>Firm</i><b className="co">Berth</b></div>
          <div className="f right"><i>Status</i><b>{d.open ? "Open" : "Coming"}</b></div>
        </div>
        <div className="fr r2"><span className="pr">{d.pr}</span></div>
        <div className="fr r3">
          <div className="f"><i>Desk</i><b>{d.desk}</b></div>
          <div className="f right"><i>No.</i><b>{d.no} of 04</b></div>
        </div>
      </div>
      <div className="panel">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={d.img} alt={d.alt} />
        <span className="desc">{d.title}</span>
        <p className="para">{d.para}</p>
        <Mark className="mark" />
      </div>
      <div className="foot"><span>berthmaritime.com{d.open ? "/fix" : ""}</span>{d.open && <em>See the desk &rarr;</em>}</div>
    </>
  );
  const cls = `card${d.open ? "" : " future"} ${className}`.trim();
  return d.open
    ? <Link className={cls} href="/fix" aria-label={`${d.pr}, ${d.title}`}>{inner}</Link>
    : <article className={cls}>{inner}</article>;
}

/** "One firm. Every desk." — the desks as a register. Desktop: the list with a card stage beside it; phones: the list, then the covers in a rail. */
export default function DeskCards() {
  const [active, setActive] = useState(0);
  return (
    <section className="section" id="desks">
      <div className="wrap s3-head">
        <h2>One firm. Every desk.</h2>
        <p className="body">Berth puts a proactive, long-running agent on every desk in maritime trade. Fix by Berth, the chartering desk agent, is the first.</p>
      </div>
      <div className="wrap register">
        <div className="reg">
          <div className="reg-h label"><span>No.</span><span>Desk</span><span>Status</span></div>
          {DESKS.map((d, i) => {
            const body = (
              <>
                <span className="no">{d.no}</span>
                <div className="d">
                  <span className={`pr${d.open ? "" : " hollow"}`}>{d.pr}</span>
                  <b>{d.title}</b>
                  <span className="s">{d.line}</span>
                </div>
                <span className={`st${d.open ? " open" : ""}`}>{d.open ? <>Open <Arrow /></> : "Coming"}</span>
              </>
            );
            const cls = `reg-row${i === active ? " on" : ""}${d.open ? " is-open" : ""}`;
            return d.open
              ? <Link key={d.key} href="/fix" className={cls} onMouseEnter={() => setActive(i)} onFocus={() => setActive(i)}>{body}</Link>
              : <div key={d.key} className={cls} onMouseEnter={() => setActive(i)} tabIndex={0} onFocus={() => setActive(i)}>{body}</div>;
          })}
        </div>
        <div className="stage" aria-hidden="true">
          {DESKS.map((d, i) => (
            <div key={d.key} className={`slot${i === active ? " show" : ""}`}><Cover d={d} /></div>
          ))}
        </div>
      </div>
      <div className="rail">
        <div className="rail-track" id="cards">
          {DESKS.map((d) => <Cover key={d.key} d={d} />)}
        </div>
      </div>
    </section>
  );
}
