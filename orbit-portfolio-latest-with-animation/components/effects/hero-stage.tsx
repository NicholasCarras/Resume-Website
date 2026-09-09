"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { useMotion } from "@/components/portfolio/site-shell";

export function HeroStage({ children }: { children: ReactNode }) {
  const stageRef = useRef<HTMLDivElement>(null);
  const { motionEnabled } = useMotion();

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    if (!motionEnabled) {
      stage.style.setProperty("--hero-progress", "0");
      return;
    }

    let frame = 0;
    const desktop = window.matchMedia(
      "(min-width: 801px) and (min-height: 700px)",
    );
    const update = () => {
      frame = 0;
      const hero = stage.querySelector<HTMLElement>(".hero");
      if (!hero) return;
      const top = stage.getBoundingClientRect().top;
      const distance = desktop.matches
        ? stage.offsetHeight - hero.offsetHeight
        : hero.offsetHeight * 0.8;
      const start = desktop.matches ? 88 : 72;
      const progress = Math.max(
        0,
        Math.min((start - top) / Math.max(distance, 1), 1),
      );
      stage.style.setProperty("--hero-progress", progress.toFixed(4));
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const resizeObserver = new ResizeObserver(schedule);
    resizeObserver.observe(stage);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
    update();

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      resizeObserver.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [motionEnabled]);

  return (
    <div ref={stageRef} className="hero-track" data-cinematic={motionEnabled}>
      {children}
    </div>
  );
}
