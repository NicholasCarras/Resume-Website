import type { Metadata } from "next";
import {
  ArrowUpRight,
  Download,
  FileText,
  CodeXml,
  BriefcaseBusiness,
} from "lucide-react";
import { profile } from "@/content/portfolio";
import { OrbitalScene } from "@/components/effects/orbital-scene";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <section className="contact-page">
      <div className="contact-scene" aria-hidden="true">
        <OrbitalScene variant="rings" />
      </div>
      <div className="site-width">
        <header className="page-intro">
          <span className="eyebrow">Make contact · 05 / 05</span>
          <h1>
            Let’s build
            <br />
            <span className="accent-text">what’s next.</span>
          </h1>
          <p>
            A good idea, an interesting challenge, or a conversation about the
            future. It starts here.
          </p>
        </header>
        <div className="contact-details">
          {profile.email ? (
            <a href={`mailto:${profile.email}`} className="contact-email">
              {profile.email}
              <ArrowUpRight aria-hidden="true" />
            </a>
          ) : (
            <div className="contact-placeholder">
              <strong>Your next connection starts here.</strong>
              <p>Contact details are coming soon.</p>
              {profile.exampleContent && (
                <p>
                  Add your email and profile links to activate this section.
                </p>
              )}
            </div>
          )}
          <div className="contact-links">
            {profile.githubUrl && (
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <CodeXml aria-hidden="true" />
                GitHub <ArrowUpRight aria-hidden="true" />
              </a>
            )}
            {profile.linkedinUrl && (
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <BriefcaseBusiness aria-hidden="true" />
                LinkedIn <ArrowUpRight aria-hidden="true" />
              </a>
            )}
          </div>
          <div className="resume-block">
            <FileText aria-hidden="true" />
            <div>
              <h2>The résumé</h2>
              {profile.resumeUrl ? (
                <a className="text-link" href={profile.resumeUrl} download>
                  Download résumé <Download aria-hidden="true" />
                </a>
              ) : (
                <p>
                  {profile.exampleContent
                    ? "Add your résumé PDF to enable the download."
                    : "Résumé available on request."}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
