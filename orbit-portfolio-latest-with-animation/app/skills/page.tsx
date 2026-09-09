import type { Metadata } from "next";
import { SkillsShowcase } from "@/components/portfolio/skills-showcase";
import {
  ContactBanner,
  ExampleNote,
  PageIntro,
} from "@/components/portfolio/shared";

export const metadata: Metadata = { title: "Skills" };

export default function SkillsPage() {
  return (
    <>
      <div className="site-width">
        <PageIntro
          eyebrow="The engineering toolkit"
          number="02"
          title="Built across the stack."
          description="Good software connects many disciplines. Explore the layers—from the interface to the systems running underneath."
        />
        <SkillsShowcase />
        <div className="skill-footer-note">
          <ExampleNote>
            Sample skill groups. Keep the technologies you use, add your
            strengths, and link them to your own projects.
          </ExampleNote>
        </div>
      </div>
      <ContactBanner />
    </>
  );
}
