import type { Metadata } from "next";
import Arrow from "@/components/Arrow";
import Mark from "@/components/Mark";
import Ledger from "@/components/Ledger";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import { DESK_HREF, TALK_HREF } from "@/components/links";

export const metadata: Metadata = {
  title: { absolute: "Fix by Berth" },
  description: "Fix, the chartering desk agent. A private teammate that lives in the desk's email: reads every email and attachment as it lands, remembers every open cargo, vessel and deal, finds the fits on real sea distances, attaches the voyage workbook and the laytime sheet, drafts the next move and chases follow-ups. It never sends anything outside. You do.",
  openGraph: { images: ["/assets/fix-cover-4.jpg"] },
};

const STEPS = [
  ["01", "Read", "Every circular, order, recap and reply, understood the moment it lands. Cargoes, positions, laycans, rates, filed against the deal they belong to."],
  ["02", "Remember", "Every open cargo, vessel and deal. Who offered, who countered, who went firm, what's still open. A position from last Tuesday is still a position."],
  ["03", "Draft", "The proposal, the counter, the chase, the recap. Written into your Outlook Drafts, in your words. You edit if you want, and you send."],
  ["04", "Talk", "Fix emails you when it has something: the fit it found, what's missing, what it would do next. Reply to steer it. Forward it anything you want it to see."],
];

/** The jobs Fix does on a desk, every day (the same eight as the one-pager). */
const JOBS = [
  ["01", "The desk review", "At 07:30: your fixtures, where they stand, what's due today, and which ships are opening."],
  ["02", "Fits, on real sea distances", "For each open ship, the cargoes that fit, every ballast checked on real routes: canals, ECA zones and war-risk areas."],
  ["03", "The voyage workbook", "The freight that pays the ship at your target hire, attached as a live workbook. Change one number and it all recalculates."],
  ["04", "Drafts, in your words", "Every enquiry and circular is already in your Drafts. Too long? Reply “Shorter.”"],
  ["05", "Watches, chases, recaps", "It watches for what fits, tracks every counter, chases when a thread goes quiet, and writes the recap."],
  ["06", "Charter parties, read", "Every CP read and summarised clause by clause, for the desk to check."],
  ["07", "Every attachment, read", "Recaps, fixture notes, NORs, SOFs, scans and images, read as they land."],
  ["08", "Laytime and demurrage", "When she discharges, the time sheet comes attached: time allowed, time used, demurrage or despatch."],
];

const FAQ = [
  { q: "How does it start?", a: "With a free month on one desk. Your IT approves a single Microsoft 365 consent: read mail and create drafts, nothing installed. Nothing changes on day one: same Outlook, same counterparties. From that moment Fix is reading, and it emails you when it has something. Reply to steer it. Forward anything you want it to look at." },
  { q: "What does it work out for us?", a: "Fits on real sea distances, voyage estimates as a live workbook, charter parties read clause by clause, and laytime sheets with demurrage or despatch, all from the mail and attachments the desk already gets. Every figure comes with its working, for the desk to check." },
  { q: "Does Fix send emails on our behalf?", a: "No, and it can't. There is no send in the code, the mailbox connection is read and draft only, and the app permission excludes sending. Every message to a counterparty is a draft in your own Outlook until you send it." },
  { q: "Do we have to move to a new system?", a: "No. Fix works inside the Outlook you have. It appears as one more address in your address book, and drafts appear in your Drafts folder. Nothing to migrate, nothing to learn." },
  { q: "What does it keep?", a: "Index cards, not your mail: listings, deals, watches, and its conversations with you. Your mail stays in your mailbox. Nothing is pooled with another desk or used to train another desk's agent." },
  { q: "What does it learn?", a: "Your desk. Your counterparties and how they trade, your last done, how you like a first message written. Every correction you make in a reply is remembered. It does not learn from other desks, and other desks do not learn from yours." },
  { q: "Who is it for?", a: "Shipbrokers, owners' chartering desks, operators and traders. Chartering and S&P alike; Fix covers both. From a two-person desk upward. Dry cargo first." },
];

export default function FixPage() {
  return (
    <>
      {/* The cover card, unfolded: paper band with the Z, the image panel, the paper footer. */}
      <header className="cover" id="fixtop">
        <div className="cband">
          <div className="fr r1">
            <div className="f"><i>Firm</i><b className="co">Berth</b></div>
            <div className="f right"><i>Status</i><b>Open</b></div>
          </div>
          <div className="fr r2"><span className="pr">Fix</span></div>
          <div className="fr r3">
            <div className="f"><i>Desk</i><b>Chartering</b></div>
            <div className="f right"><i>No.</i><b>01 of 04</b></div>
          </div>
        </div>
        <div className="cpanel">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/fix-cover-4.jpg" alt="" />
          <span className="desc">The chartering desk agent</span>
          <div className="ch">
            <h1>Fix lives in<br />your inbox.</h1>
            <p>A private chartering teammate in your email. It reads the market, remembers every deal, drafts the next move, and talks to you the way a colleague would. It never sends. You do.</p>
          </div>
          <Mark className="mark" />
        </div>
        <div className="cfoot"><span>berthmaritime.com/fix</span><em>Fix by Berth</em></div>
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

        <section className="section wrap" id="film">
          <div className="grid head">
            <h2>A morning on the desk</h2>
            <p className="body">Ninety seconds with Fix: the desk review at 07:30, the fits, the workbook, the drafts, the recap, and the laytime sheet when she discharges.</p>
          </div>
          <div className="film">
            <video controls preload="metadata" playsInline poster="/assets/fix-desk-film-poster.jpg">
              <source src="/assets/fix-desk-film.mp4" type="video/mp4" />
            </video>
          </div>
        </section>

        <section className="section wrap" id="jobs">
          <div className="grid head">
            <h2>Every day on the desk</h2>
            <p className="body">The groundwork between the emails, done before the desk sits down. Every answer comes with its working, for the desk to check.</p>
          </div>
          <div className="grid steps jobs">
            {JOBS.map(([n, t, p]) => (
              <div className="step" key={n}><span className="label">{n}</span><h3>{t}</h3><p>{p}</p></div>
            ))}
          </div>
        </section>

        <Ledger />

        <section className="section wrap" id="trust">
          <div className="grid trust">
            <p>It can&rsquo;t send. Not won&rsquo;t. Can&rsquo;t.<small>There is no send in the code. The mailbox connection is read and draft only. The app permission excludes sending. Every message to the outside world is yours.</small></p>
            <p>Index cards, never your mail.<small>Fix keeps listings, deals, watches and its conversations with you. Your mail stays in your mailbox. Nothing is pooled with another desk.</small></p>
            <p>One approval from IT.<small>A single Microsoft 365 admin consent: read mail and create drafts. Send is never requested.</small></p>
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
            <div><span className="label">Today</span><h3>The working, attached</h3><p>Every estimate arrives as a live voyage workbook, every discharge as a laytime sheet, attached to the email Fix sends you.</p></div>
            <div><span className="label">Next</span><h3>A deal room, more channels</h3><p>When a deal reaches recap or charter party, one screen for it: the timeline across every thread, the documents, and Fix to talk to. And WhatsApp and Teams into the same conversations, with the same memory.</p></div>
            <div><span className="label">Then</span><h3>Every desk in maritime trade</h3><p>Operations, claims and bunkering, each picking up the voyage where the desk before it left off. One memory of the voyage.</p></div>
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
              <a className="btn" href={DESK_HREF}>Start a free month <Arrow /></a>
              <a className="textlink" href={TALK_HREF}>Talk to us</a>
            </div>
          </div>
        </section>
      </main>
      <Footer line="Fix by Berth · 2026" />
    </>
  );
}
