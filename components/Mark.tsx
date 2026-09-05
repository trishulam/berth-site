/** The Berth mark: one hairline with a short tick at the right end. Inherits currentColor. */
export default function Mark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 24" aria-hidden="true" className={className}>
      <path d="M0 14H32M30.5 8V14" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
