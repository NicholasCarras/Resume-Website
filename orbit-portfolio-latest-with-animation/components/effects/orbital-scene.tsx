"use client";

import { useEffect, useRef, useState } from "react";
import { Orbit } from "lucide-react";
import { useMotion } from "@/components/portfolio/site-shell";
import type { SceneOptions } from "./orbital-renderer";

export function OrbitalScene({
  variant = "core",
  color = "#b8a4ff",
  interactive = false,
  scrollDriven = false,
}: Omit<SceneOptions, "animate">) {
  const hostRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const { motionEnabled } = useMotion();

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    let cancelled = false;
    let dispose: (() => void) | undefined;
    setReady(false);

    // Load WebGL only when the visual is close to the viewport.
    const observer = new IntersectionObserver(
      async ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        try {
          const { createOrbitalScene } = await import("./orbital-renderer");
          if (cancelled) return;
          dispose = createOrbitalScene(host, {
            variant,
            color,
            interactive,
            scrollDriven,
            animate: motionEnabled,
          });
          setReady(true);
        } catch {
          // Keep all content usable if a device cannot create a WebGL context.
          if (!cancelled) setReady(false);
        }
      },
      { rootMargin: "150px" },
    );
    observer.observe(host);
    return () => {
      cancelled = true;
      observer.disconnect();
      dispose?.();
    };
  }, [variant, color, interactive, scrollDriven, motionEnabled]);

  return (
    <>
      {!ready && (
        <div className="scene-fallback" aria-hidden="true">
          <Orbit />
        </div>
      )}
      <div
        ref={hostRef}
        className="scene-host"
        data-interactive={interactive}
        tabIndex={interactive ? 0 : undefined}
        role={interactive ? "img" : undefined}
        aria-label={
          interactive
            ? "Interactive 3D engineering core. Drag horizontally or use arrow keys to rotate."
            : undefined
        }
        aria-hidden={interactive ? undefined : true}
      />
    </>
  );
}
