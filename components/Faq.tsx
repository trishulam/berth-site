export type QA = { q: string; a: string };

export default function Faq({ id, items }: { id: string; items: QA[] }) {
  return (
    <section className={`section wrap s5`} id={id}>
      <div className="grid">
        <h2>Questions</h2>
        <div className="faq">
          {items.map((it, i) => (
            <details key={it.q} open={i === 0}>
              <summary>{it.q}</summary>
              <p className="body">{it.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
