"use client";

import { useRef, useState } from "react";
import { FILM_POSTER, FILM_SRC } from "./film";

/** The film on its end card, with one clear play button under the name; the player's own controls take over once it plays. */
export default function FilmPlayer() {
  const v = useRef<HTMLVideoElement>(null);
  const [on, setOn] = useState(false);
  const play = () => { setOn(true); void v.current?.play(); };
  return (
    <div className={`player${on ? " on" : ""}`}>
      <video ref={v} controls={on} preload="metadata" playsInline poster={FILM_POSTER} onPlay={() => setOn(true)}>
        <source src={FILM_SRC} type="video/mp4" />
      </video>
      {!on && (
        <button type="button" className="play" aria-label="Play the film, 2 minutes 33" onClick={play}>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6.5v11l9-5.5z" fill="currentColor" /></svg>
          <span className="label">Play the film · 2:33</span>
        </button>
      )}
    </div>
  );
}
