import Mark from "./Mark";

/**
 * "One cargo, one conversation." — a deal followed from first match to fixture,
 * shown as the actual thread: the mail that lands on the desk, the emails Fix sends
 * the broker, and the broker's replies that steer it. Fix never writes to the outside;
 * every external message is a draft in the broker's Outlook until the broker sends it.
 */

type Who = "inbox" | "fix" | "you";

function Row({ t, who, children }: { t: string; who: Who; children: React.ReactNode }) {
  return (
    <div className={`row${who === "fix" ? " fx" : ""}`}>
      <span className="t">{t}</span>
      <span className={`who ${who}`}>
        {who === "fix" && <Mark />}
        {who === "inbox" ? "Desk inbox" : who === "fix" ? "Fix" : "You"}
      </span>
      <div className="c">{children}</div>
    </div>
  );
}

/** An email from Fix, in the conversation the broker has with it about this deal. */
function Note({ subject, children }: { subject?: string; children: React.ReactNode }) {
  return (
    <div className="note">
      {subject && <span className="subj"><b>Subject</b> {subject}</span>}
      {children}
    </div>
  );
}

const CARGO = `ACCT CHRTRS / 50,000 MT 10% MOLOO STEAM COAL
TABONEO – KRISHNAPATNAM / LAYCAN 20–25 JUL
12,000 SHINC LOAD / 15,000 SHINC DISCH
2.5% ADDCOM / NEED GEARED SUPRA / PLS OFFER`;

const DRAFT_1 = `TKS. PLS PROPOSE MV CRAMOND ISLAND, SUPRAMAX 57,315 DWT BLT 2017, FOR:

50,000 MT 10% MOLOO STEAM COAL / TABONEO – KRISHNAPATNAM
LAYCAN 20–25 JUL / 12,000 SHINC LOAD / 15,000 SHINC DISCH / 2.5% ADDCOM

PLS CONFIRM VSL READINESS MANGALORE 8 JUL AND OWNERS' IDEAS.

BRGDS
`;

export default function Ledger() {
  return (
    <section className="section wrap" id="circular">
      <div className="grid head">
        <h2>One cargo, one conversation.</h2>
        <p className="body">A cargo lands on the desk on a Monday morning. Nobody briefs Fix. This is the conversation the broker has with it over the next eight days, and the drafts that sit in Outlook along the way.</p>
      </div>
      <div className="ledger">
        <Row t="Mon 09:12" who="inbox">
          <div className="mail">
            <span className="hdr"><b>From</b>  Charterers&rsquo; brokers, Singapore &nbsp;&nbsp; <b>Subj</b>  50K COAL TABONEO / KRISHNAPATNAM 20-25 JUL</span>
            {CARGO}
          </div>
        </Row>

        <Row t="Mon 09:13" who="fix">
          <Note subject="Possible match: 50k coal Taboneo / Krishnapatnam, 20–25 Jul">
            <p>Found a fit for the coal that just came in.</p>
            <dl className="kv">
              <dt>Cargo</dt><dd>50,000 mt steam coal, Taboneo to Krishnapatnam, laycan 20–25 Jul, geared Supra wanted.</dd>
              <dt>Vessel</dt><dd>MV Cramond Island, Supramax 57,315 dwt, built 2017, 4 × 30 t cranes. Opening Mangalore about 8 Jul, from the owners&rsquo; brokers&rsquo; position list last Tuesday. Ballast to Taboneo about nine days, so on the laycan.</dd>
              <dt>Concerns</dt><dd>Load readiness unconfirmed. No freight idea yet.</dd>
              <dt>Next move</dt><dd>Ask owners to confirm readiness and give an indication.</dd>
            </dl>
            <p>The draft is in your Drafts folder. Reply here for changes.</p>
          </Note>
        </Row>

        <Row t="Mon 09:20" who="you"><p className="act">Shorter, and don&rsquo;t mention freight.</p></Row>

        <Row t="Mon 09:21" who="fix">
          <Note><p>Done. Draft updated.</p></Note>
          <div className="draft">
            <div className="bar"><b>RE: 50K COAL TABONEO / KRISHNAPATNAM 20-25 JUL</b><span className="chip">Draft</span></div>
            <div className="meta"><b>To</b> &nbsp;Owners&rsquo; brokers, Singapore</div>
            <div className="txt">{DRAFT_1}<span className="send" aria-disabled="true">Send · You</span></div>
          </div>
        </Row>

        <Row t="Mon 09:34" who="you"><p className="act">Sent it from Outlook, unchanged.</p></Row>

        <Row t="Thu 14:05" who="inbox"><p className="act mono">VSL READY MANGALORE 8 JUL AGW WP. OWNERS IDEA USD 14.50 PMT FIOST 1/1. SUBS 48 HRS. PLS REVERT.</p></Row>

        <Row t="Thu 14:06" who="fix">
          <Note>
            <p>Owners came back on Cramond Island. Same conversation, picking up where we left off.</p>
            <dl className="kv">
              <dt>Changed</dt><dd>Readiness confirmed for 8 Jul. First idea $14.50 per mt.</dd>
              <dt>Still open</dt><dd>Demurrage rate. Laydays margin at Taboneo.</dd>
              <dt>Last time</dt><dd>These owners moved 40 cents after a night&rsquo;s silence, in March.</dd>
              <dt>Suggested counter</dt><dd>$13.60, laycan as is. Your last three on this run were $13.40 to $14.10.</dd>
            </dl>
            <p>Counter is drafted. Reply here for changes.</p>
          </Note>
        </Row>

        <Row t="Thu 14:40" who="you"><p className="act">Go 13.75. Remind me tomorrow if they haven&rsquo;t replied.</p></Row>

        <Row t="Thu 14:41" who="fix"><Note><p>Draft updated to $13.75. I&rsquo;ll check the thread at ten tomorrow and only write if it&rsquo;s quiet.</p></Note></Row>

        <Row t="Fri 10:00" who="fix"><Note><p>Quiet since yesterday afternoon. A two-line chase is in your Drafts. Send it if you want to push; I&rsquo;m watching the thread either way.</p></Note></Row>

        <Row t="Fri 11:20" who="you">
          <p className="act">Forwarded an agent&rsquo;s mail about berth congestion at Krishnapatnam: <em>can you help with this?</em></p>
        </Row>

        <Row t="Fri 11:21" who="fix"><Note><p>This looks like the coal / Cramond Island deal. Confirm? If so I&rsquo;ll note the berth delay against the laycan and flag it when we talk demurrage.</p></Note></Row>

        <Row t="Fri 11:23" who="you"><p className="act">Yes.</p></Row>

        <Row t="Mon 09:05" who="inbox"><p className="act mono">OWNERS CAN DO USD 13.90 PMT, OWISE AS OFFERED. FIRM TILL 1700 SGT.</p></Row>

        <Row t="Mon 09:06" who="fix">
          <Note>
            <p>Owners at $13.90, firm until 17:00 Singapore. That&rsquo;s inside your last three on this run. Demurrage still to agree; the Krishnapatnam congestion note from Friday is attached to the deal for that conversation.</p>
            <p>Acceptance is drafted, subs 48 hours. Reply <em>go</em> and it&rsquo;s ready to send.</p>
          </Note>
        </Row>

        <Row t="Mon 09:40" who="you"><p className="act">Go.</p></Row>

        <Row t="Wed 09:15" who="inbox"><p className="act mono">SUBS LIFTED. PLS SEND CLEAN RECAP.</p></Row>

        <Row t="Wed 09:16" who="fix">
          <Note>
            <p>Fixed. Cramond Island, Taboneo to Krishnapatnam, $13.90 per mt. The clean recap is in your Drafts, built from the agreed points in the thread.</p>
            <p>Noted for next time: these owners come back after a night&rsquo;s silence, and you like the first message short.</p>
          </Note>
        </Row>
      </div>
      <div className="grid stats tally">
        <div className="stat"><b>1</b><p>conversation, from first match to fixture. Eight days, one thread.</p></div>
        <div className="stat"><b>6</b><p>drafts in Outlook. You sent every one of them.</p></div>
        <div className="stat"><b>0</b><p>emails sent by Fix to anyone outside the desk. It can&rsquo;t.</p></div>
      </div>
    </section>
  );
}
