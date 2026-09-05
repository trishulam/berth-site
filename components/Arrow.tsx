/** North-east arrow drawn as a path, so it renders the same on every device (the ↗ glyph falls back to emoji on iOS). */
export default function Arrow() {
  return (
    <svg className="arr" viewBox="0 0 12 12" width="11" height="11" aria-hidden="true">
      <path d="M2.5 9.5 9.5 2.5M4 2.5h5.5V8" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="square" />
    </svg>
  );
}
