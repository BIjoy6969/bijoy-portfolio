import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { ProjectVisual } from "@/components/ProjectVisual";
import { Footer } from "@/components/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";
import { projects, getProject } from "@/data/projects";
import { profile } from "@/data/profile";
import { site } from "@/data/site";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = getProject(params.slug);
  if (!p) return { title: "Project not found" };
  const title = `${p.name} — Case Study · ${profile.name}`;
  return {
    title,
    description: p.description,
    alternates: { canonical: `/projects/${p.slug}` },
    openGraph: { title, description: p.description, url: `${site.url}/projects/${p.slug}`, type: "article" },
    twitter: { card: "summary_large_image", title, description: p.description },
  };
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const p = getProject(params.slug);
  if (!p) notFound();
  const cs = p.caseStudy;

  const sections: [string, string, React.ReactNode][] = [
    ["01", "Overview", <p key="o">{cs.overview}</p>],
    ["02", "Problem", <p key="pr">{cs.problem}</p>],
    ["03", "Solution", <p key="so">{cs.solution}</p>],
    ["04", "Architecture", <p key="ar">{cs.architecture}</p>],
    ["05", "Features", <ul key="fe">{cs.features.map((f) => <li key={f}>{f}</li>)}</ul>],
    ["06", "Technology", <div key="te" className="cs-tech">{p.tech.map((t) => <span key={t}>{t}</span>)}</div>],
    ["07", "Technical challenges", <p key="ch">{cs.challenges}</p>],
    ["08", "Key implementation", <p key="im">{cs.implementation}</p>],
    ["09", "Outcome", <p key="ou">{cs.outcome}</p>],
    ["10", "Links", (
      <div key="li" className="cs-links">
        {p.github && (
          <a className="btn btn--ghost" href={p.github} target="_blank" rel="noopener noreferrer">
            View code <Github size={15} />
          </a>
        )}
        {p.demo ? (
          <a className="btn btn--primary" href={p.demo} target="_blank" rel="noopener noreferrer">
            Live demo <ArrowUpRight size={15} />
          </a>
        ) : (
          <span className="btn btn--ghost" style={{ opacity: 0.6, pointerEvents: "none" }}>
            Live demo — add URL
          </span>
        )}
      </div>
    )],
  ];

  return (
    <>
      <header className="nav scrolled">
        <nav className="nav-inner" aria-label="Primary">
          <Link className="brand" href="/">
            <span className="mk">{profile.initials}</span><span>{profile.shortName}</span>
          </Link>
          <div className="nav-cta">
            <ThemeToggle />
            <Link className="btn btn--primary" href="/#projects">All projects</Link>
          </div>
        </nav>
      </header>

      <main id="main" className="cs-wrap">
        <Link className="cs-back" href="/#projects"><ArrowLeft size={14} /> Back to work</Link>

        <div className="cs-hero">
          <span className="proj-tag">{p.tag}</span>
          <h1>{p.name}</h1>
          <p className="sub">{p.description}</p>
        </div>

        <div className="cs-visual"><ProjectVisual slug={p.slug} /></div>

        <div style={{ marginTop: 24, marginBottom: 40 }}>
          {sections.map(([n, h, content]) => (
            <section className="cs-sec" key={n}>
              <span className="n">{n} — {h}</span>
              <div>
                <h2>{h}</h2>
                {content}
              </div>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
