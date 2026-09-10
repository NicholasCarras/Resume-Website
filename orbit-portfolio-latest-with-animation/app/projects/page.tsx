import type { Metadata } from "next";
import { projects } from "@/content/portfolio";
import { ProjectCard } from "@/components/portfolio/project-card";
import {
  ContactBanner,
  ExampleNote,
  PageIntro,
} from "@/components/portfolio/shared";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <>
      <div className="site-width projects-page">
        <PageIntro
          eyebrow="Selected projects"
          number="01"
          title="From possibility to production."
          description="A closer look at the things I build, the problems, the decisions, and the code that brings them together."
        />
        <div style={{ marginTop: -32, marginBottom: 36 }}>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index + 1}
            />
          ))}
        </div>
      </div>
      <ContactBanner />
    </>
  );
}
