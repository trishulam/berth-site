import type { Metadata } from "next";
import Mark from "@/components/Mark";
import Ledger from "@/components/Ledger";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import { FORWARD_HREF } from "@/components/links";

export const metadata: Metadata = {
  title: "Fix by Berth",
  description: "Fix, the chartering desk agent. It lives in your inbox, reads every cargo and position, holds every live deal, drafts the counter, and follows up until it's fixed.",
  openGraph: { images: ["/assets/fix-cover.jpg"] },
};

const STEPS = [
  ["01", "Read", "Every circular, order, recap and reply, structured the moment it lands. Cargoes, positions, laycans, rates."],
  ["02", "Hold", "Every live deal kept open. Who offered, who countered, who went firm, what's pending. Nothing drops."],
  ["03", "Act", "Drafts the offer, the counter, the chase. Wakes itself up and follows up. You send."],
  ["04", "Learn", "Knows your counterparties, your habits, your phrasing. Gets better on your desk, not on a demo."],
];

const FAQ = [
  { q: "Do we have to move to a new system?", a: "No. Fix works inside Outlook or Gmail and reads WhatsApp exports. Nothing to migrate." },
  { q: "Does Fix send emails on our behalf?", a: "No. Fix drafts; you send. Every external message is yours." },
  { q: "What does it hold?", a: "Every live deal: who offered, who countered, who went firm, what's pending, and the watch it has set for each. It wakes itself to follow up." },
  { q: "What does it learn?", a: "Your desk. Your counterparties and how they trade, your phrasing, your last done. It does not learn from other desks and other desks do not learn from yours." },
  { q: "How does it start?", a: "Forward one circular. Fix comes back with what it read, what it matched and what it would have drafted. Then it starts on one desk, on live enquiries, alongside whatever you use today." },
];

export default function FixPage() {
  return (
    <>
      {/* The cover card, unfolded: paper band with the Z, the image panel, the paper footer. */}
      <header className="cover" id="fixtop">
        <div className="cband">
          <span className="tag">The chartering desk agent · Open</span>
          <div className="row1"><span className="co">Berth</span><span className="rule" /></div>
          <div className="row2"><span className="rule" /><span className="pr">Fix</span></div>
        </div>
        <div className="cpanel">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/fix-cover.jpg" alt="" />
          <span className="desc">The chartering desk agent</span>
          <div className="ch">
            <h1>Fix lives in<br />your inbox.</h1>
            <p>It reads every cargo and position, holds every live deal, drafts the counter, and follows up until it&rsquo;s fixed.</p>
          </div>
          <Mark className="mark" />
        </div>
        <div className="cfoot"><span>berth.ai/fix</span><em>Fix by Berth</em></div>
      </header>

      <main>
        <section className="section wrap" id="what">
          <div className="grid head">
            <h2>What Fix does</h2>
            <p className="body">Chartering runs on email and WhatsApp. Fix moves in and does the work.</p>
          </div>
          <div className="grid steps">
            {STEPS.map(([n, t, p]) => (
              <div className="step" key={n}><span className="label">{n}</span><h3>{t}</h3><p>{p}</p></div>
            ))}
          </div>
          <div className="grid stats after">
            <div className="stat"><b>0</b><p>platforms to adopt. Fix lives in the inbox your desk already uses.</p></div>
            <div className="stat"><b>1</b><p>inbox, the one you already use.</p></div>
            <div className="stat"><b>24/7</b><p>on the deal. Long-running, not a chat box.</p></div>
          </div>
        </section>

        <Ledger />

        <section className="section wrap">
          <div className="grid trust">
            <p>It drafts. You send.<small>Every external message leaves from your account, in your name, when you say so.</small></p>
            <p>Your desk&rsquo;s data stays yours.<small>Never shared or pooled unless you opt in. Never used to train another desk&rsquo;s agent.</small></p>
            <p>Your mail stays in your mailbox.<small>Fix keeps only the deal state it needs, on infrastructure dedicated to your desk, and deletes it when you leave.</small></p>
          </div>
        </section>

        <section className="section wrap" id="lives">
          <div className="grid head">
            <h2>Where it lives</h2>
            <p className="body">Nothing to install on the desk. Fix is given a seat in the mailbox and starts reading.</p>
          </div>
          <div className="grid lives">
            <div><h3>Outlook</h3><p>Reads the shared chartering mailbox, files drafts in your Drafts, notes in an internal deal thread.</p></div>
            <div><h3>Gmail</h3><p>Same seat, same drafts, same deal threads, for desks on Google Workspace.</p></div>
            <div><h3>WhatsApp</h3><p>Reads exported chats so the offers that arrive by phone are held with the ones that arrive by mail.</p></div>
          </div>
        </section>

        <Faq id="fixfaq" items={FAQ} />

        <section className="close">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/hero-1200.jpg" alt="" aria-hidden="true" />
          <div className="inner">
            <h2>It moves in.</h2>
            <p className="sub">Fix doesn&rsquo;t ask your desk to move. Forward one circular and see what it makes of it.</p>
            <div className="cta-row">
              <a className="btn" href={FORWARD_HREF}>Forward one circular <span aria-hidden="true">↗</span></a>
              <span className="cta-addr">fix@berth.ai</span>
              <a className="textlink" href="mailto:hello@berth.ai">Talk to us</a>
            </div>
          </div>
        </section>
      </main>
      <Footer line="Fix by Berth · 2026" />
    </>
  );
}
