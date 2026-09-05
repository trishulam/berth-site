import Link from "next/link";
import Mark from "./Mark";

export default function Footer({ line }: { line: string }) {
  return (
    <footer>
      <Link className="brand" href="/" aria-label="Berth"><Mark />Berth</Link>
      <em>{line}</em>
    </footer>
  );
}
