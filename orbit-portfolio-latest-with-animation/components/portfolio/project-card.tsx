import type { CSSProperties } from "react";
import { ArrowUpRight, Plus } from "lucide-react";
import { profile, type Project } from "@/content/portfolio";
import { OrbitalScene } from "@/components/effects/orbital-scene";

export function ProjectVisual({
  project,
  index = 1,
}: {
  project: Project;
  index?: number;
}) {
  return (
    <div className={`project-visual visual-${project.visual}`}>
      <span className="visual-index">
        {String(index).padStart(2, "0")} / {project.name.toUpperCase()}
      </span>
      {project.imageUrl ? (
        <img
          src={project.imageUrl}
          alt={project.imageAlt ?? ""}
          loading="lazy"
        />
      ) : (
        <>
          {project.visual === "robot" && (
            <img
              src="/images/explorer.webp"
              alt=""
              width={1536}
              height={1024}
              loading="lazy"
            />
          )}
          {project.visual === "orbit" && <OrbitalScene variant="rings" />}
          {project.visual === "signal" && (
            <div className="signal-bars" aria-hidden="true">
              {Array.from({ length: 45 }, (_, i) => (
                <span
                  key={i}
                  style={
                    {
                      height: `${18 + Math.abs(Math.sin(i * 0.31) * Math.cos(i * 0.13)) * 82}%`,
                      "--i": i,
                    } as CSSProperties
                  }
                />
              ))}
            </div>
          )}
        </>
      )}
      <div className="visual-caption">
        <span>
          {project.visual === "robot"
            ? "HUMAN IDEAS. MACHINE PRECISION."
            : project.visual === "orbit"
              ? "CONNECTED BY DESIGN"
              : "FIND THE SIGNAL"}
        </span>
        <Plus size={16} />
      </div>
    </div>
  );
}

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <a href={`/projects/${project.slug}`} className="project-card reveal">
      <ProjectVisual project={project} index={index} />
      <div className="card-title-row">
        <h3>{project.name}</h3>
        <ArrowUpRight aria-hidden="true" />
      </div>
      <p className="card-category">
        {project.category}
        {profile.exampleContent && " · Example project"}
      </p>
      <div className="tags">
        {project.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
}
