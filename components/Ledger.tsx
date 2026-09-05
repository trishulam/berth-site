import Mark from "./Mark";

type Who = "inbox" | "fix" | "you";

function Row({ t, who, children }: { t: string; who: Who; children: React.ReactNode }) {
  return (
    <div className={`row${who === "fix" ? " fx" : ""}`}>
      <span className="t">{t}</span>
      <span className={`who ${who}`}>{who === "fix" && <Mark />}{who === "inbox" ? "Inbox" : who === "fix" ? "Fix" : "You"}</span>
      <div className="c">{children}</div>
    </div>
  );
}

const FIELDS: [string, string][] = [
  ["Vessel", "Pearl Island"], ["Type", "Ultramax"], ["DWT", "63,878"], ["Built", "2018"],
  ["Open", "Kandla"], ["Dates", "12–15 Oct"], ["Gear", "4 × 30 t, grabs"], ["Prefers", "India / PG → Far East"],
];

const MATCHES = [
  { n: "01", tt: "55,000 mt iron ore fines, Paradip → Qingdao", r: "Laycan 18–24 Oct",
    why: "Ballast 7 days, arrives day one of laycan. Gear and grabs as required. Same charterers fixed her sister in March." },
  { n: "02", tt: "52,000 mt sulphur, Ras Al Khair → Fangcheng", r: "Laycan 20–26 Oct",
    why: "Ballast 4 days, 4 days spare. Discharge port asks for 12 cbm grabs; she has them." },
  { n: "03", tt: "TCT 35–45 days via PG, redelivery SE Asia", r: "Delivery 12–18 Oct",
    why: "Delivery Kandla direct. Owners said open for TCT; these charterers last paid $14,250 for similar." },
];

const CIRCULAR = `GOOD DAY, PLS FIND BELOW OUR OPEN POSITION. ANY CARGO / TCT?
MV PEARL ISLAND – ULTRAMAX, BLT 2018, 63,878 DWT ON 13.30M SSW – LOA 199.9M / BEAM 32.26M – 5 HO / 5 HA, 4 X 30T CRANES, 4 X 12 CBM GRABS – GRAIN 77,300 CBM
OPEN KANDLA 12–15 OCT AGW WP – PREFER INDIA / PG – FAR EAST, OPEN FOR TCT – ALL DTLS ABT / WOG`;

const DRAFT = `TKS FOR PEARL ISLAND. PLS PROPOSE HER FOR THE FOLLOWING:

ACCT CHRTRS / 55,000 MT 10% MOLOO IRON ORE FINES
PARADIP – QINGDAO / LAYCAN 18–24 OCT
25,000 SHINC LOAD / 20,000 SHINC DISCH
3.75% ADDCOM / OWISE AS PER LAST DONE

VESSEL FITS ON DATES AND GEAR. PLS ADVISE OWNERS' IDEAS.

BRGDS
`;

/** "One circular, followed to the fixture." — a Monday-to-Thursday deal thread with Fix's work in it. */
export default function Ledger() {
  return (
    <section className="section wrap" id="circular">
      <div className="grid head">
        <h2>One circular, followed to the fixture.</h2>
        <p className="body">A position lands on a Monday morning. This is what Fix does with it, and what it keeps doing after the desk has moved on to the next thing.</p>
      </div>
      <div className="ledger">
        <Row t="Mon 09:41" who="inbox">
          <div className="mail">
            <span className="hdr"><b>From</b>  Owners&rsquo; brokers, Singapore &nbsp;&nbsp; <b>Subj</b>  MV PEARL ISLAND – ULTRAMAX 63,878 DWT – OPEN KANDLA 12/15 OCT</span>
            {CIRCULAR}
          </div>
        </Row>
        <Row t="Mon 09:41" who="fix">
          <p className="act">Read it. Position opened on the desk.</p>
          <div className="fields">
            {FIELDS.map(([k, v]) => (
              <div className="field" key={k}><span className="label">{k}</span><span>{v}</span></div>
            ))}
          </div>
        </Row>
        <Row t="Mon 09:42" who="fix">
          <p className="act">Matched her against the desk&rsquo;s 41 live orders. Three fit.</p>
          <div className="matches">
            {MATCHES.map((m) => (
              <div className="match" key={m.n}>
                <span className="n">{m.n}</span><span className="tt">{m.tt}</span><span className="r">{m.r}</span><span className="why">{m.why}</span>
              </div>
            ))}
          </div>
        </Row>
        <Row t="Mon 09:43" who="fix">
          <p className="act">Drafted the proposal for the first match, in your Outlook, in your words.</p>
          <div className="draft">
            <div className="bar"><b>RE: MV PEARL ISLAND – OPEN KANDLA 12–15 OCT</b><span className="chip">Draft</span></div>
            <div className="meta"><b>To</b> &nbsp;Owners&rsquo; brokers, Singapore<br /><b>Cc</b> &nbsp;Chartering</div>
            <div className="txt">{DRAFT}<span className="send" aria-disabled="true">Send · You</span></div>
          </div>
        </Row>
        <Row t="Mon 10:05" who="you"><p className="act">Read it, changed one line, sent it.</p></Row>
        <Row t="Mon 15:20" who="inbox"><p className="act mono">OWNERS IDEA USD 18.75 PMT FIOST, 1/1, LAYCAN OK, SUBS 48 HRS. PLS REVERT.</p></Row>
        <Row t="Mon 15:20" who="fix">
          <p className="act">Held it. Deal opened: owners at $18.75, charterers&rsquo; last done on this run $17.10. Watch set for a reply by 17:00.</p>
          <p className="act">Drafted the counter at $17.25, with the reason in the internal note: your last three Paradip–Qingdao fixtures averaged $17.10 and the route is up 40 cents this week.</p>
        </Row>
        <Row t="Mon 16:48" who="you"><p className="act">Sent the counter.</p></Row>
        <Row t="Tue 08:00" who="fix"><p className="act">No reply overnight. Woke itself, drafted the chase, kept the deal open. Nothing dropped.</p></Row>
        <Row t="Tue 11:30" who="inbox"><p className="act mono">OWNERS CAN DO USD 17.60 PMT, OWISE AS OFFERED. FIRM TILL 1700 SGT.</p></Row>
        <Row t="Tue 11:30" who="fix"><p className="act">Logged the counter, moved the watch to 17:00 SGT, drafted the reply at $17.40 and flagged the firm deadline in the deal thread.</p></Row>
        <Row t="Wed 09:15" who="you"><p className="act">Fixed at $17.40, on subs.</p></Row>
        <Row t="Wed 09:16" who="fix"><p className="act">Deal on subs. Watch set for subs to lift by Thursday noon. Clean recap drafted from the thread, clause by clause, laytime terms noted for the claims file.</p></Row>
        <Row t="Thu 11:12" who="inbox"><p className="act mono">SUBS LIFTED. PLS SEND CLEAN RECAP.</p></Row>
        <Row t="Thu 11:12" who="fix"><p className="act">Fixed. Recap in your outbox. Remembered: these owners come back on price after a night&rsquo;s silence; these charterers pay a little over last done for early laycan.</p></Row>
      </div>
      <div className="grid stats tally">
        <div className="stat"><b>4</b><p>days, Monday circular to Thursday fixture.</p></div>
        <div className="stat"><b>9</b><p>messages read, 5 drafted, 1 chase. Nothing dropped.</p></div>
        <div className="stat"><b>5</b><p>messages left the desk. You sent every one.</p></div>
      </div>
    </section>
  );
}
