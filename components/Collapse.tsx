"use client";

import { useEffect, useState } from "react";

/**
 * On phones, the long tail of the ledger starts folded behind one line; on wider screens it's always open.
 * Rendered open on the server so nothing is hidden without JS.
 */
export default function Collapse({ label, count, children }: { label: string; count: number; children: React.ReactNode }) {
  const [open, setOpen] = useState(true);
  const [phone, setPhone] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 639px)");
    const apply = () => { setPhone(mq.matches); setOpen(!mq.matches); };
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);
  return (
    <>
      {phone && !open && (
        <button type="button" className="fold" onClick={() => setOpen(true)}>
          <span>{label}</span><small>{count} more messages</small>
        </button>
      )}
      <div className="folded" hidden={!open}>{children}</div>
    </>
  );
}
