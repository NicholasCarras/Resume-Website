import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CodeXml } from "lucide-react";
import { profile, projects } from "@/content/portfolio";
import { ProjectVisual } from "@/components/portfolio/project-card";
import { ContactBanner, ExampleNote } from "@/components/portfolio/shared";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((project) => project.slug === slug);
  return {
    title: project?.name ?? "Project not found",
    description: project?.summary,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) notFound();
  const project = projects[index];
  const nextProject = projects[(index + 1) % projects.length];

  return (
    <>
      <article className="site-width project-detail">
        <div className="project-detail-top">
          <a href="/projects" className="text-link">
            <ArrowLeft aria-hidden="true" />
            All projects
          </a>
        </div>
        <header className="page-intro">
          <span className="eyebrow">{project.category}</span>
          <h1>{project.name}</h1>
          <p>{project.summary}</p>
        </header>
        <dl className="detail-meta">
          <div>
            <dt>Role</dt>
            <dd>{project.role}</dd>
          </div>
          <div>
            <dt>Year</dt>
            <dd>{project.year}</dd>
          </div>
          <div>
            <dt>Focus</dt>
            <dd>{project.category}</dd>
          </div>
          <div>
            <dt>Stack</dt>
            <dd>{project.tags.join(" / ")}</dd>
          </div>
        </dl>
        <ProjectVisual project={project} index={index + 1} />
        <div className="detail-body">
          {[
            { title: "The challenge", body: project.challenge },
            { title: "The engineering", body: project.approach },
            { title: "The outcome", body: project.outcome },
          ].map((section) => (
            <section className="detail-section reveal" key={section.title}>
              <h2>{section.title}</h2>
              <p>{section.body}</p>
            </section>
          ))}
          <div className="detail-actions">
            {project.demoUrl && (
              <a
                className="primary-link"
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live project <ArrowUpRight aria-hidden="true" />
              </a>
            )}
            {project.sourceUrl && (
              <a
                className="secondary-link"
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <CodeXml aria-hidden="true" />
                View source
              </a>
            )}
            {profile.exampleContent &&
              !project.demoUrl &&
              !project.sourceUrl && (
                <p className="example-note">
                  
                </p>
              )}
          </div>
          {projects.length > 1 && (
            <a
              href={`/projects/${nextProject.slug}`}
              className="explore-link"
              style={{ marginTop: 45 }}
            >
              <span className="mono">NEXT</span>
              <div>
                <h3>{nextProject.name}</h3>
                <p>{nextProject.category}</p>
              </div>
              <ArrowUpRight aria-hidden="true" />
            </a>
          )}
        </div>
      </article>
      <ContactBanner />
    </>
  );
}
