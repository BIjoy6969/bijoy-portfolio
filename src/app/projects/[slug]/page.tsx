import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  Github,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
  ExternalLink,
} from "lucide-react";
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
  if (!p) return { title: "Project Not Found" };
  const title = `${p.name} — Technical Case Study · ${profile.name}`;
  return {
    title,
    description: p.description,
    alternates: { canonical: `/projects/${p.slug}` },
    openGraph: {
      title,
      description: p.description,
      url: `${site.url}/projects/${p.slug}`,
      type: "article",
    },
    twitter: { card: "summary_large_image", title, description: p.description },
  };
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const p = getProject(params.slug);
  if (!p) notFound();
  const cs = p.caseStudy;

  return (
    <>
      <header className="nav scrolled">
        <nav className="nav-inner" aria-label="Case Study Navigation">
          <Link className="brand" href="/">
            <span className="mk">{profile.brandMark}</span>
            <span>{profile.shortName}</span>
          </Link>
          <div className="nav-cta">
            <ThemeToggle />
            <Link className="btn btn--primary" href="/#projects">
              ← All Projects
            </Link>
          </div>
        </nav>
      </header>

      <main id="main" className="cs-wrap">
        <Link className="cs-back" href="/#projects">
          <ArrowLeft size={14} /> Back to Selected Work
        </Link>

        {/* Hero Header */}
        <div className="cs-hero">
          <div className="cs-meta-row">
            <span className="proj-tag">{p.tag}</span>
            <span className="cs-index">PROJECT #{p.index}</span>
          </div>
          <h1>{p.name}</h1>
          <p className="sub">{p.headline || p.description}</p>

          {/* Quick Metrics Bar */}
          {p.stats && (
            <div className="cs-stats-bar">
              {p.stats.map((st) => (
                <div key={st.label} className="cs-stat-item">
                  <span className="cs-stat-val">{st.value}</span>
                  <span className="cs-stat-lbl">{st.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Visual / Abstract Representation */}
        <div className="cs-visual">
          <ProjectVisual slug={p.slug} />
        </div>

        {/* Deep Case Study Sections */}
        <div className="cs-content-body">
          {/* 01: Overview */}
          <section className="cs-sec">
            <span className="n">01 — Overview</span>
            <div>
              <h2>Project Overview</h2>
              <p>{cs.overview}</p>
            </div>
          </section>

          {/* 02: Problem & Goal */}
          <section className="cs-sec">
            <span className="n">02 — The Problem</span>
            <div>
              <h2>The Problem &amp; Core Challenge</h2>
              <p>{cs.problem}</p>
              {cs.goal && (
                <div className="cs-goal-box">
                  <b>Primary Objective:</b> {cs.goal}
                </div>
              )}
            </div>
          </section>

          {/* 03: Architecture & Solution */}
          <section className="cs-sec">
            <span className="n">03 — Solution</span>
            <div>
              <h2>Architecture &amp; Engineered Solution</h2>
              <p>{cs.solution}</p>
              <div className="cs-arch-box">
                <div className="cs-arch-label">
                  <Layers size={14} /> System Architecture Flow
                </div>
                <code>{cs.architecture}</code>
              </div>
            </div>
          </section>

          {/* Special Research Pipeline (For Fraud Detection Thesis) */}
          {cs.pipeline && (
            <section className="cs-sec">
              <span className="n">04 — Methodology</span>
              <div>
                <h2>Research &amp; Data Pipeline</h2>
                <div className="cs-pipeline-grid">
                  {cs.pipeline.map((pip) => (
                    <div key={pip.step} className="cs-pipeline-card">
                      <span className="cpp-step">{pip.step}</span>
                      <h4 className="cpp-title">{pip.title}</h4>
                      <p className="cpp-desc">{pip.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* 05: Key Features */}
          <section className="cs-sec">
            <span className="n">05 — Features</span>
            <div>
              <h2>Implemented System Features</h2>
              <ul className="cs-feature-list">
                {cs.features.map((f) => (
                  <li key={f}>
                    <CheckCircle2 size={15} className="cs-check" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 06: Technologies */}
          <section className="cs-sec">
            <span className="n">06 — Stack</span>
            <div>
              <h2>Technology &amp; Tools Used</h2>
              <div className="cs-tech">
                {p.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          </section>

          {/* 07: Challenges & Implementation */}
          <section className="cs-sec">
            <span className="n">07 — Deep Dive</span>
            <div>
              <h2>Technical Challenges &amp; Key Implementation</h2>
              <div className="cs-deepdive-block">
                <h4>Challenges Encountered</h4>
                <p>{cs.challenges}</p>
              </div>
              <div className="cs-deepdive-block">
                <h4>Implementation Strategy</h4>
                <p>{cs.implementation}</p>
              </div>
            </div>
          </section>

          {/* 08: Outcome */}
          <section className="cs-sec">
            <span className="n">08 — Outcome</span>
            <div>
              <h2>Results &amp; Impact</h2>
              <p>{cs.outcome}</p>
            </div>
          </section>

          {/* 09: Repository & Links */}
          <section className="cs-sec">
            <span className="n">09 — Access</span>
            <div>
              <h2>Source Code &amp; Deployments</h2>
              <div className="cs-links">
                {p.github && (
                  <a
                    className="btn btn--ghost"
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={15} />
                    <span>View Repository</span>
                  </a>
                )}
                {p.demo ? (
                  <a
                    className="btn btn--primary"
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Launch Live Demo</span>
                    <ArrowUpRight size={15} />
                  </a>
                ) : (
                  <span className="btn btn--ghost" style={{ opacity: 0.6, pointerEvents: "none" }}>
                    Live Demo — Staging URL
                  </span>
                )}
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
