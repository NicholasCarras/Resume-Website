import type { Metadata } from "next";
import { profile, interests } from "@/content/portfolio";
import {
  ContactBanner,
  ExampleNote,
  PageIntro,
} from "@/components/portfolio/shared";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <div className="site-width">
        <PageIntro
          eyebrow="The human behind the code"
          number="04"
          title="Curiosity is the constant."
          description="Software engineer by craft. Explorer by instinct. Always wondering what we could build next."
        />
        <div className="about-grid">
          <div className="about-art reveal">
            <img
              src="/images/explorer.webp"
              alt="A futuristic explorer robot in white ceramic and titanium, illuminated by blue light."
              width={1536}
              height={1024}
            />
            <span className="about-art-caption mono">
              IMAGINATION → ENGINEERING → POSSIBILITY
            </span>
          </div>
          <div className="about-story">
            {profile.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <ExampleNote>
              Sample biography · make this story your own.
            </ExampleNote>
          </div>
        </div>
        <span className="eyebrow">What keeps me looking forward</span>
        <div className="interest-grid">
          {interests.map((interest) => (
            <section key={interest.number} className="interest-card reveal">
              <span className="mono">{interest.number}</span>
              <h3>{interest.title}</h3>
              <p>{interest.description}</p>
            </section>
          ))}
        </div>
      </div>
      <ContactBanner />
    </>
  );
}
