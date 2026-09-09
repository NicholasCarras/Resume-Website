import type { Metadata } from "next";
import { experience } from "@/content/portfolio";
import { OrbitalScene } from "@/components/effects/orbital-scene";
import {
  ContactBanner,
  ExampleNote,
  PageIntro,
} from "@/components/portfolio/shared";

export const metadata: Metadata = { title: "Experience" };

export default function ExperiencePage() {
  return (
    <>
      <div className="site-width">
        <PageIntro
          eyebrow="The journey"
          number="03"
          title="Always moving forward."
          description="The roles, projects, and turning points that shape how I think about building software."
        />
        <div className="experience-layout">
          <aside className="experience-aside">
            <div className="orbit-window" aria-hidden="true">
              <OrbitalScene variant="rings" color="#9edff8" />
            </div>
            <div>
              <p className="muted" style={{ lineHeight: 1.85 }}>
                Every new challenge adds another layer. Better questions.
                Clearer thinking. More thoughtful code.
              </p>
              <ExampleNote>Add your roles and milestones here.</ExampleNote>
            </div>
          </aside>
          <div className="timeline">
            {experience.map((entry, index) => (
              <section
                className="timeline-entry reveal"
                key={`${entry.period}-${index}`}
              >
                <span className="timeline-period mono">{entry.period}</span>
                <h2>{entry.role}</h2>
                <h3>{entry.organization}</h3>
                <p>{entry.description}</p>
                <ul>
                  {entry.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
                <div className="tags">
                  {entry.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
      <ContactBanner />
    </>
  );
}
