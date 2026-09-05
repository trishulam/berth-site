import type { Metadata } from "next";
import Mark from "@/components/Mark";
import Ledger from "@/components/Ledger";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import { DESK_HREF, TALK_HREF } from "@/components/links";

export const metadata: Metadata = {
  title: "Fix by Berth",
  description: "Fix, the chartering desk agent. A private teammate that lives in the desk's email: reads the market mail you already get, remembers every open cargo, vessel and deal, spots fits, drafts the next move, chases follow-ups, and talks to you in plain email. It never sends anything outside. You do.",
  openGraph: { images: ["/assets/fix-cover.jpg"] },
};

const STEPS = [
  ["01", "Read", "Every circular, order, recap and reply, understood the moment it lands. Cargoes, positions, laycans, rates, filed against the deal they belong to."],
  ["02", "Remember", "Every open cargo, vessel and deal. Who offered, who countered, who went firm, what's still open. A position from last Tuesday is still a position."],
  ["03", "Draft", "The proposal, the counter, the chase, the recap. Written into your Outlook Drafts, in your words. You edit if you want, and you send."],
  ["04", "Talk", "Fix emails you when it has something: the fit it found, what's missing, what it would do next. Reply to steer it. Forward it anything you want it to see."],
];

const FAQ = [
  { q: "How does it start?", a: "Connect the desk's inbox. That's it. Done in an afternoon, no IT project, nothing installed. Nothing changes on day one: same Outlook, same counterparties. From that moment Fix is reading, and it emails you when it has something. Reply to steer it. Forward anything you want it to look at." },
  { q: "Does Fix send emails on our behalf?", a: "No, and it can't. There is no send in the code, the mailbox connection is read and draft only, and the app permission excludes sending. Every message to a counterparty is a draft in your own Outlook until you send it." },
  { q: "Do we have to move to a new system?", a: "No. Fix works inside the Outlook you have. It appears as one more address in your address book, and drafts appear in your Drafts folder. Nothing to migrate, nothing to learn." },
  { q: "What does it keep?", a: "Index cards, not your mail: listings, deals, watches, and its conversations with you. Your mail stays in your mailbox. Nothing is pooled with another desk or used to train another desk's agent." },
  { q: "What does it learn?", a: "Your desk. Your counterparties and how they trade, your last done, how you like a first message written. Every correction you make in a reply is remembered. It does not learn from other desks, and other desks do not learn from yours." },
  { q: "Who is it for?", a: "Shipbrokers, owners' chartering desks, operators and traders. From a two-person desk upward. Dry cargo first." },
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
            <p>A private chartering teammate in your email. It reads the market, remembers every deal, drafts the next move, and talks to you the way a colleague would. It never sends. You do.</p>
          </div>
          <Mark className="mark" />
        </div>
        <div className="cfoot"><span>berth.ai/fix</span><em>Fix by Berth</em></div>
      </header>

      <main className="fixmain">
        <section className="section wrap" id="what">
          <div className="grid head">
            <h2>What Fix does</h2>
            <p className="body">Chartering runs on email. Fix moves in and does the work that sits between the emails.</p>
          </div>
          <div className="grid steps">
            {STEPS.map(([n, t, p]) => (
              <div className="step" key={n}><span className="label">{n}</span><h3>{t}</h3><p>{p}</p></div>
            ))}
          </div>
          <div className="grid stats after">
            <div className="stat"><b>0</b><p>systems to adopt. Fix lives in the inbox your desk already uses.</p></div>
            <div className="stat"><b>1</b><p>new address in the address book. Fix&rsquo;s.</p></div>
            <div className="stat"><b>24/7</b><p>on the deal. It wakes itself up to check, chase and remind.</p></div>
          </div>
        </section>

        <Ledger />

        <section className="section wrap" id="trust">
          <div className="grid trust">
            <p>It can&rsquo;t send. Not won&rsquo;t. Can&rsquo;t.<small>There is no send in the code. The mailbox connection is read and draft only. The app permission excludes sending. Every message to the outside world is yours.</small></p>
            <p>Index cards, never your mail.<small>Fix keeps listings, deals, watches and its conversations with you. Your mail stays in your mailbox. Nothing is pooled with another desk.</small></p>
            <p>One deal, one conversation.<small>From first match to close, in the thread you already have with Fix. Reply to steer it. Forward anything you want it to see.</small></p>
          </div>
        </section>

        <section className="paper sheet" id="lives">
          <div className="wrap grid head">
            <h2>A colleague in the address book</h2>
            <p className="body">Nothing to install. Fix is connected to the desk inbox, read and draft only, and gets an address of its own. From there it behaves like a person on the desk who never sleeps and never sends.</p>
          </div>
          <div className="wrap grid lives">
            <div><h3>Your Outlook</h3><p>Fix reads the desk mailbox as mail arrives and writes drafts into your Drafts folder. Nothing else changes.</p></div>
            <div><h3>Its address</h3><p>Fix writes to you from its own address, one conversation per deal. Reply in the thread to change a draft, set a reminder, or say no.</p></div>
            <div><h3>Forward anything</h3><p>An agent&rsquo;s note, a stale circular, a WhatsApp screenshot. Fix works out which deal it belongs to, asks if it isn&rsquo;t sure, and carries on.</p></div>
          </div>
        </section>

        <section className="section wrap" id="next">
          <div className="grid head">
            <h2>Where it goes from here</h2>
            <p className="body">Email is right for the everyday loop and wrong for the heavy end of a deal. The same conversation is built to move.</p>
          </div>
          <div className="grid lives">
            <div><span className="label">Next</span><h3>The deal room</h3><p>When a deal reaches recap or charter party, every Fix email carries a link. One screen for that deal: the timeline across every thread, where things stand, the documents, and Fix to talk to. Same conversation as the email, so you can go back to your inbox tomorrow and nothing is lost.</p></div>
            <div><span className="label">Then</span><h3>The desk view</h3><p>Every live deal on the desk, what&rsquo;s waiting on you, what Fix is watching, what&rsquo;s due. Not a place you have to work; a place you can look. With the numbers alongside: voyage estimates, laytime, rate context.</p></div>
            <div><span className="label">Later</span><h3>More channels</h3><p>WhatsApp and Teams into the same conversations, with the same memory. And, for firms that want it, Fix&rsquo;s mailbox inside their own tenant.</p></div>
          </div>
        </section>

        <Faq id="fixfaq" items={FAQ} />

        <section className="close">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/hero-1200.jpg" alt="" aria-hidden="true" />
          <div className="inner">
            <h2>It moves in.</h2>
            <p className="sub">Not a parsing platform. Not a matching marketplace. Not a dashboard you migrate to. Not a trader. The teammate that works where you already work.</p>
            <div className="cta-row">
              <a className="btn" href={DESK_HREF}>Put Fix on your desk <span aria-hidden="true">↗</span></a>
              <a className="textlink" href={TALK_HREF}>Talk to us</a>
            </div>
          </div>
        </section>
      </main>
      <Footer line="Fix by Berth · 2026" />
    </>
  );
}
