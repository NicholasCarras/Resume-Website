"use client";

import { useEffect } from "react";

export function useScrollReveals(enabled: boolean, pathname: string) {
  useEffect(() => {
    if (!enabled) return;
    const animations = new Set<Animation>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          observer.unobserve(entry.target);
          const animation = entry.target.animate(
            [
              { opacity: 0, transform: "translateY(64px) scale(0.97)" },
              { opacity: 1, transform: "translateY(0) scale(1)" },
            ],
            { duration: 900, easing: "cubic-bezier(0.2, 0.7, 0.2, 1)" },
          );
          animations.add(animation);
          animation.finished
            .then(() => animations.delete(animation))
            .catch(() => {});
        }
      },
      { threshold: 0.12 },
    );

    document
      .querySelectorAll(".reveal")
      .forEach((element) => observer.observe(element));
    return () => {
      observer.disconnect();
      animations.forEach((animation) => animation.cancel());
    };
  }, [enabled, pathname]);
}
