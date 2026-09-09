import { ArrowUpRight } from "lucide-react";
import { profile } from "@/content/portfolio";

export function PageIntro({
  eyebrow,
  title,
  description,
  number,
}: {
  eyebrow: string;
  title: string;
  description: string;
  number: string;
}) {
  return (
    <header className="page-intro">
      <span className="eyebrow">{eyebrow}</span>
      <span className="page-number" aria-hidden="true">
        {number} / 05
      </span>
      <h1>{title}</h1>
      <p>{description}</p>
    </header>
  );
}

export function ExampleNote({ children }: { children?: React.ReactNode }) {
  if (!profile.exampleContent) return null;
  return (
    <p className="example-note">
      {children ?? "Example content · ready for your own work."}
    </p>
  );
}

export function ContactBanner() {
  return (
    <section className="contact-banner">
      <div className="site-width contact-banner-inner">
        <div>
          <span className="eyebrow">The next chapter</span>
          <h2>Good things start with a conversation.</h2>
        </div>
        <a href="/contact" className="secondary-link">
          Let’s connect <ArrowUpRight aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
