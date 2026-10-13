import type { Metadata } from "next";
import Link from "next/link";
import Arrow from "@/components/Arrow";
import Footer from "@/components/Footer";
import FilmPlayer from "@/components/FilmPlayer";
import { FILM_POSTER, FILM_SRC } from "@/components/film";
import { DESK_HREF } from "@/components/links";

const TITLE = "Fix by Berth · The film";
const DESC = "Two and a half minutes with Fix, the chartering desk agent: from the 07:30 inbox to the fixture and the laytime sheet, and where it goes next.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESC,
  openGraph: {
    title: TITLE, description: DESC, type: "video.other",
    images: [{ url: FILM_POSTER, width: 1920, height: 1080, alt: "Fix by Berth" }],
    videos: [{ url: FILM_SRC, type: "video/mp4", width: 1920, height: 1080 }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC, images: [FILM_POSTER] },
};

/** The page to send: the film, up and centre, and the two next steps under it. */
export default function FilmPage() {
  return (
    <>
      <main className="filmpage">
        <div className="wrap"><div className="fp-box">
          <div className="fp-top">
            <span className="label">Fix by Berth</span>
            <span className="label">The film · 2:33</span>
          </div>
          <FilmPlayer />
          <div className="fp-foot">
            <p className="fp-line">The chartering desk agent. It lives in your inbox, reads every email and attachment, remembers every deal, drafts the next move, and never sends. You do.</p>
            <div className="cta-row">
              <a className="btn" href={DESK_HREF}>Start a free month <Arrow /></a>
              <Link className="textlink" href="/fix">See Fix at work</Link>
            </div>
          </div>
        </div></div>
      </main>
      <Footer line="Fix by Berth · 2026" />
    </>
  );
}
