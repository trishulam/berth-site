import Link from "next/link";
import Hero from "@/components/Hero";
import DeskCards from "@/components/DeskCards";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

const FAQ = [
  { q: "What is Berth?", a: "Berth is a maritime AI firm. We build proactive, long-running agents, one for each desk in maritime trade, starting with chartering." },
  { q: "What is a desk agent?", a: "An agent that lives in a desk's existing inbox, reads the market as it arrives, holds every live matter, drafts and follows up, and learns that desk. Fix is the chartering one." },
  { q: "Who is it for?", a: "Shipbrokers, owners' chartering desks, operators and traders. From a two-person desk upward." },
  { q: "Which desks are next?", a: "Operations, laytime and claims, and bunkering, in that order, each connected to the fixture that came before it." },
  { q: "How does it start?", a: "On one desk, on live enquiries, alongside whatever you use today. Keep it if it earns its place." },
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
                <div><h3>Read</h3><p>Every circular, order, recap and reply, structured the moment it lands.</p></div>
                <div><h3>Hold</h3><p>Every live deal kept open. Who offered, who countered, what&rsquo;s pending.</p></div>
                <div><h3>Act</h3><p>Drafts the offer, the counter, the chase. Wakes itself up. You send.</p></div>
                <div><h3>Learn</h3><p>Knows your counterparties, your habits, your phrasing. Gets better on your desk, not on a demo.</p></div>
              </div>
              <div className="pull">
                <div>
                  <q>No reply overnight. Woke itself, drafted the chase, kept the deal open. Nothing dropped.</q>
                  <small className="label">Tuesday 08:00, from one circular followed to the fixture</small>
                </div>
                <Link className="btn" href="/fix">See Fix at work <span aria-hidden="true">↗</span></Link>
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
              <Link className="btn" href="/fix">See Fix at work <span aria-hidden="true">↗</span></Link>
              <a className="textlink" href="mailto:hello@berth.ai">Talk to us</a>
            </div>
          </div>
        </section>
      </main>
      <Footer line="Berth · 2026" />
    </>
  );
}
