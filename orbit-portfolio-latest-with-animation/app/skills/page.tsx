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
          description="Good software connects many disciplines. See what I've used."
        />
        <SkillsShowcase />
        <div className="skill-footer-note">
          <ExampleNote>
            Some of these skills I know better than others but I'm always commited to learning more.
          </ExampleNote>
        </div>
      </div>
      <ContactBanner />
    </>
  );
}
