import Link from "next/link";
import Mark from "./Mark";

const FUTURE = [
  { pr: "Ops", img: "/assets/card-ops.jpg", alt: "Heavy weather from the bridge wing", desc: "The operations desk agent",
    para: "Ops holds the voyage after the fixture. NOR, laytime, agents, delays, all watched, all in the thread." },
  { pr: "Claims", img: "/assets/card-claims.jpg", alt: "A port at night, a ship alongside a lit quay", desc: "The laytime and claims desk agent",
    para: "Claims builds the laytime statement from what actually happened, and settles what's owed." },
  { pr: "Bunker", img: "/assets/card-bunker.jpg", alt: "A bunker barge alongside a tanker at night", desc: "The bunkering desk agent",
    para: "Bunker knows who's supplying what, where, and at what price, before you ask." },
];

/** "One firm. Every desk." — the cover-card row. FIX is live and links to /fix; the rest are COMING at 55%. */
export default function DeskCards() {
  return (
    <section className="section" id="desks">
      <div className="wrap s3-head">
        <h2>One firm. Every desk.</h2>
        <p className="body">Berth puts a proactive, long-running agent on every desk in maritime trade. Fix by Berth, the chartering desk agent, is the first.</p>
      </div>
      <div className="rail">
        <div className="rail-track" id="cards">
          <Link className="card" href="/fix" aria-label="Fix, the chartering desk agent">
            <div className="band">
              <span className="co">Berth</span><span className="co-rule" /><span className="pr-rule" /><span className="pr">Fix</span><span className="open">Open</span>
            </div>
            <div className="panel">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/card-fix.jpg" alt="" />
              <span className="desc">The chartering desk agent</span>
              <p className="para">Fix lives in your inbox. It reads every cargo and position, holds every live deal, drafts the counter, and follows up until it&rsquo;s fixed.</p>
              <Mark className="mark" />
            </div>
            <div className="foot"><span>berth.ai/fix</span><em>See the desk &rarr;</em></div>
          </Link>
          {FUTURE.map((c) => (
            <article className="card future" key={c.pr}>
              <div className="band">
                <span className="co">Berth</span><span className="co-rule" /><span className="pr-rule" /><span className="pr">{c.pr}</span><span className="coming">Coming</span>
              </div>
              <div className="panel">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.img} alt={c.alt} />
                <span className="desc">{c.desc}</span>
                <p className="para">{c.para}</p>
                <Mark className="mark" />
              </div>
              <div className="foot"><span>berth.ai</span></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
