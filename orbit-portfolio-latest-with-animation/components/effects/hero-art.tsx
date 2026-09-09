"use client";

import { OrbitalScene } from "./orbital-scene";

export function HeroArt() {
  return (
    <>
      <div className="hero-art" aria-hidden="true">
        <img
          src="/images/explorer.webp"
          alt=""
          width={1536}
          height={1024}
          fetchPriority="high"
        />
      </div>
      <div className="hero-orbital" aria-hidden="true">
        <OrbitalScene variant="core" scrollDriven />
      </div>
      <div className="hero-cosmos" aria-hidden="true">
        <OrbitalScene variant="stars" scrollDriven />
      </div>
      <div className="hero-scrub-line" aria-hidden="true" />
    </>
  );
}
