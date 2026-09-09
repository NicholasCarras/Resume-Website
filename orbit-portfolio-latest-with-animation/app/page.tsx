import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Braces,
  Cpu,
  Telescope,
} from "lucide-react";
import { profile, projects } from "@/content/portfolio";
import { HeroArt } from "@/components/effects/hero-art";
import { HeroStage } from "@/components/effects/hero-stage";
import { ProjectCard } from "@/components/portfolio/project-card";
import { ContactBanner, ExampleNote } from "@/components/portfolio/shared";

export default function Home() {
  return (
    <>
      <HeroStage>
        <section className="hero">
          <HeroArt />
          <div className="site-width hero-inner">
            <div className="hero-copy">
              <span className="eyebrow">Software engineer · Future-minded</span>
              <h1>
                {profile.headline.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </h1>
              <p className="hero-description">{profile.introduction}</p>
              <div className="hero-actions">
                <a href="/projects" className="primary-link">
                  Explore my work <ArrowUpRight aria-hidden="true" />
                </a>
                <a href="/about" className="text-link">
                  A little about me <ArrowRight aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
          <div className="hero-label mono" aria-hidden="true">
            EXPLORER SERIES<strong>Beyond the familiar.</strong>
          </div>
          <div className="site-width hero-footer">
            <a href="#selected-work">
              <ArrowDown aria-hidden="true" />
              Scroll to explore
            </a>
            <div className="hero-signature mono">
              <span>CODE. CREATE. EXPLORE.</span>
              <span>EST. IN CURIOSITY</span>
            </div>
          </div>
        </section>
      </HeroStage>
      <div className="identity-strip">
        <div className="site-width identity-inner">
          <p>
            <strong>{profile.name}</strong>
            {profile.role}
          </p>
          <div className="identity-values">
            <span>
              <Braces aria-hidden="true" />
              Software
            </span>
            <span>
              <Cpu aria-hidden="true" />
              Intelligent systems
            </span>
            <span>
              <Telescope aria-hidden="true" />
              New frontiers
            </span>
          </div>
        </div>
      </div>
      <section id="selected-work" className="site-width section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Selected work</span>
            <h2>Ideas, made real.</h2>
          </div>
          <a href="/projects" className="text-link">
            All projects <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
        <div className="project-grid">
          {projects.slice(0, 2).map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i + 1} />
          ))}
        </div>
        <ExampleNote />
      </section>
      <section className="site-width section world-section reveal">
        <div className="world-copy">
          <span className="eyebrow">Behind the work</span>
          <h2>
            A builder’s mind.
            <br />
            <span className="muted">An explorer’s curiosity.</span>
          </h2>
          <p>
            From the architecture underneath to the experience on the screen. A
            closer look at the skills, decisions, and curiosity behind the code.
          </p>
          <a href="/about" className="text-link">
            Meet the human <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
        <div>
          {[
            {
              href: "/skills",
              number: "01",
              title: "The engineering toolkit",
              description: "Interfaces, systems, and everything between.",
            },
            {
              href: "/experience",
              number: "02",
              title: "The journey so far",
              description: "Experience, milestones, and lessons learned.",
            },
            {
              href: "/about",
              number: "03",
              title: "Beyond the keyboard",
              description: "The questions that keep me building.",
            },
          ].map((item) => (
            <a className="explore-link" key={item.href} href={item.href}>
              <span className="mono">{item.number}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <ArrowUpRight aria-hidden="true" />
            </a>
          ))}
        </div>
      </section>
      <ContactBanner />
    </>
  );
}
