"use client";

import { usePathname } from "next/navigation";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { ArrowUpRight, Menu, Orbit, Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { profile } from "@/content/portfolio";
import { useScrollReveals } from "@/components/effects/use-scroll-reveals";

const navigation = [
  { href: "/", label: "Overview" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/experience", label: "Experience" },
  { href: "/about", label: "About" },
];

const MotionContext = createContext({ motionEnabled: false });
export const useMotion = () => useContext(MotionContext);

export function SiteShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [motionEnabled, setMotionEnabled] = useState(false);
  useScrollReveals(motionEnabled, pathname);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    function syncMotion() {
      let enabled = !preference.matches;
      try {
        const saved = localStorage.getItem("orbit-motion");
        if (saved) enabled = saved === "on" && !preference.matches;
      } catch {
        /* Motion still follows the system if storage is unavailable. */
      }
      setMotionEnabled(enabled);
    }
    syncMotion();
    preference.addEventListener("change", syncMotion);
    return () => preference.removeEventListener("change", syncMotion);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.motion = motionEnabled ? "on" : "off";
  }, [motionEnabled]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  function toggleMotion() {
    const enabled = !motionEnabled;
    setMotionEnabled(enabled);
    try {
      localStorage.setItem("orbit-motion", enabled ? "on" : "off");
    } catch {
      /* Optional preference. */
    }
  }

  function isCurrent(href: string) {
    return href === "/" ? pathname === "/" : pathname.startsWith(href);
  }

  return (
    <MotionContext.Provider value={{ motionEnabled }}>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="site-width header-inner">
          <a
            href="/"
            className="wordmark"
            aria-label={`${profile.brand} portfolio home`}
          >
            <Orbit aria-hidden="true" />
            {profile.brand}
            <span className="sr-only"> — {profile.name}</span>
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">
            {navigation.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="nav-link"
                aria-current={isCurrent(href) ? "page" : undefined}
              >
                {label}
              </a>
            ))}
          </nav>
          <a href="/contact" className="header-contact">
            Let’s talk <ArrowUpRight size={15} aria-hidden="true" />
          </a>
          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="mobile-menu-button"
                aria-label="Open navigation"
              >
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent className="mobile-menu-content pt-10">
              <SheetTitle className="px-6">EXPLORE {profile.brand}</SheetTitle>
              <SheetDescription className="sr-only">
                Portfolio pages
              </SheetDescription>
              <nav className="mobile-nav" aria-label="Mobile navigation">
                {[...navigation, { href: "/contact", label: "Contact" }].map(
                  ({ href, label }) => (
                    <a
                      key={href}
                      href={href}
                      onClick={() => setMenuOpen(false)}
                      aria-current={isCurrent(href) ? "page" : undefined}
                    >
                      {label}
                    </a>
                  ),
                )}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>
      <main key={pathname} id="main" tabIndex={-1} className="page-content">
        {children}
      </main>
      <footer className="site-footer">
        <div className="site-width footer-inner">
          <p>
            © {new Date().getFullYear()} {profile.name}. Built with curiosity.
          </p>
          <div className="footer-actions">
            <span className="mono muted" style={{ fontSize: ".75rem" }}>
              {profile.location}
            </span>
            <a href="/contact">Contact</a>
            <button
              className="motion-toggle"
              onClick={toggleMotion}
              aria-pressed={motionEnabled}
              aria-label={
                motionEnabled
                  ? "Pause decorative motion"
                  : "Enable decorative motion"
              }
            >
              {motionEnabled ? (
                <Pause aria-hidden="true" />
              ) : (
                <Play aria-hidden="true" />
              )}
              Motion {motionEnabled ? "on" : "off"}
            </button>
          </div>
        </div>
      </footer>
    </MotionContext.Provider>
  );
}
