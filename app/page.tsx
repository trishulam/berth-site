import Link from "next/link";
import Arrow from "@/components/Arrow";
import Hero from "@/components/Hero";
import DeskCards from "@/components/DeskCards";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import { TALK_HREF } from "@/components/links";

const FAQ = [
  { q: "What is Berth?", a: "Berth is a maritime AI firm. We build proactive, long-running agents, one for each desk in maritime trade, starting with chartering." },
  { q: "What is a desk agent?", a: "A teammate that lives in a desk's existing email. It reads what the desk already receives, remembers every live matter, drafts the next move into the desk's own Drafts, and talks to the desk in plain email. It never sends outside; the desk does. Fix is the chartering one." },
  { q: "Who is it for?", a: "Shipbrokers, owners' chartering desks, operators and traders. From a two-person desk upward." },
  { q: "Which desks are next?", a: "Operations, claims and bunkering, in that order, each picking up the voyage where the desk before it left off." },
  { q: "How does it start?", a: "With a free month on one desk. Your IT approves a single Microsoft 365 consent: read mail and create drafts, nothing installed, nothing changes on day one. The agent starts reading and emails the desk when it has something. Keep it if it earns its place." },
];

export default function Home() {
  return (
    <>
      <Hero />
      <main>
        <DeskCards />

        <section className="paper thesis" id="thesis">
          <div className="wrap grid s4">
            <h2>Why Berth</h2>
            <div className="col">
              <div><span className="label">Inbox, not platform</span><p className="body">Berth builds the agent and doesn&rsquo;t need the destination. Your desk keeps its inbox. The agent moves in.</p></div>
              <div><span className="label">Proactive, not prompted</span><p className="body">A Berth agent holds state across days and weeks, keeps watches on every deal, and acts on its own. It is not waiting to be asked.</p></div>
              <div><span className="label">Your desk, not the industry</span><p className="body">Industry knowledge is in every vendor&rsquo;s model. Desk knowledge, your counterparties and how they trade, is only in your inbox. That&rsquo;s what a Berth agent learns.</p></div>
            </div>
            <p className="now">Why now: the incumbents built platforms and are adding AI to them. The desk still works in the inbox. That&rsquo;s where the agent goes.</p>
          </div>
        </section>

        <section className="section wrap" id="fix">
          <div className="grid teaser">
            <h2>Fix, the first desk.</h2>
            <div className="col">
              <div className="quad">
                <div><h3>Read</h3><p>Every circular, order, recap and reply, and every attachment, understood the moment it lands.</p></div>
                <div><h3>Remember</h3><p>Every open cargo, vessel and deal. Who offered, who countered, what&rsquo;s still open.</p></div>
                <div><h3>Work out</h3><p>Fits on real sea distances, the voyage workbook, the laytime sheet. The working comes attached.</p></div>
                <div><h3>Draft</h3><p>The proposal, the counter, the chase, the recap, into your Outlook Drafts. You send.</p></div>
              </div>
              <div className="pull">
                <div>
                  <q>Quiet since yesterday afternoon. A two-line chase is in your Drafts. Send it if you want to push; I&rsquo;m watching the thread either way.</q>
                  <small className="label">Fix, Friday 10:00, from one cargo followed to the fixture</small>
                </div>
                <div className="pull-cta">
                  <Link className="btn" href="/fix">See Fix at work <Arrow /></Link>
                  <Link className="textlink" href="/fix#film">Watch the film, 1:28</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Faq id="faq" items={FAQ} />

        <section className="close">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/hero-1200.jpg" alt="" aria-hidden="true" />
          <div className="inner">
            <h2>Every voyage, <span className="br">understood.</span></h2>
            <p className="sub">One firm, every desk, connected along the voyage.</p>
            <div className="cta-row">
              <Link className="btn" href="/fix">See Fix at work <Arrow /></Link>
              <a className="textlink" href={TALK_HREF}>Talk to us</a>
            </div>
          </div>
        </section>
      </main>
      <Footer line="Berth · 2026" />
    </>
  );
}
