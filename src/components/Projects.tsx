"use client";
import { useState } from "react";
import Link from "next/link";
import { Github, ArrowUpRight, ExternalLink, Layers, Sparkles, Filter } from "lucide-react";
import { Reveal } from "./Reveal";
import { ProjectVisual } from "./ProjectVisual";
import { projects, projectCategories, moreWork, ProjectCategory } from "@/data/projects";

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");

  const filteredProjects = projects.filter((p) => {
    if (activeCategory === "all") return true;
    return p.category === activeCategory;
  });

  return (
    <section className="section projects-section" id="projects">
      <div className="wrap">
        <div className="section-head-split">
          <Reveal className="section-head">
            <span className="eyebrow">§ 03 — Selected Work</span>
            <h2>Production software &amp; applied intelligence.</h2>
            <p className="section-sub">
              Engineered end-to-end with real architectures, databases, deep learning pipelines, and graphics loops.
            </p>
          </Reveal>

          {/* Category Filter Pills */}
          <Reveal delay={0.1} className="proj-filter-wrap">
            <div className="proj-filter-pills" role="tablist" aria-label="Filter projects by category">
              {projectCategories.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    className={`filter-pill ${isActive ? "active" : ""}`}
                    onClick={() => setActiveCategory(cat.id)}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </Reveal>
        </div>

        {/* Dynamic Filtered Projects List with Varied Layout Rhythm */}
        <div className="projects-rhythm-list">
          {filteredProjects.map((p, i) => {
            const isResearch = p.isResearch;

            return (
              <Reveal key={p.slug} delay={i * 0.08}>
                <article
                  className={`project-entry ${p.slug === "rentnest" ? "layout-fullwidth" : ""} ${
                    isResearch ? "layout-research" : ""
                  } ${p.slug === "travelmate" ? "layout-split-h" : ""} ${
                    p.slug === "3d-survival-shooter" ? "layout-graphics" : ""
                  }`}
                  data-category={p.category}
                >
                  <div className="proj-inner-v2">
                    {/* Left/Content Body */}
                    <div className="proj-body-v2">
                      <div className="proj-meta-bar">
                        <span className="proj-tag-v2">{p.tag}</span>
                        <span className="proj-index-v2">#{p.index}</span>
                      </div>

                      <h3 className="proj-title-v2">
                        <Link href={`/projects/${p.slug}`}>{p.name}</Link>
                      </h3>

                      <p className="proj-headline-v2">{p.headline}</p>
                      <p className="proj-desc-v2">{p.description}</p>

                      {/* Stats Pills */}
                      {p.stats && (
                        <div className="proj-stats-row">
                          {p.stats.map((st) => (
                            <div key={st.label} className="proj-stat-pill">
                              <span className="psp-val">{st.value}</span>
                              <span className="psp-lbl">{st.label}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Tech Stack Badges */}
                      <div className="proj-tech-v2">
                        {p.tech.map((t) => (
                          <span key={t} className="tech-badge">
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Action Links */}
                      <div className="proj-actions-v2">
                        <Link className="proj-btn-primary" href={`/projects/${p.slug}`}>
                          <span>{isResearch ? "Explore Research & Methodology" : "Read Full Case Study"}</span>
                          <ArrowUpRight size={15} />
                        </Link>

                        {p.github && (
                          <a
                            className="proj-btn-ghost"
                            href={p.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View ${p.name} source code on GitHub`}
                          >
                            <Github size={15} />
                            <span>Code</span>
                          </a>
                        )}

                        {p.demo && (
                          <a
                            className="proj-btn-ghost"
                            href={p.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View ${p.name} live demo`}
                          >
                            <ExternalLink size={15} />
                            <span>Demo</span>
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Right/Visual Area */}
                    <div className="proj-visual-v2">
                      <Link
                        href={`/projects/${p.slug}`}
                        className="proj-visual-link"
                        aria-label={`Open ${p.name} case study`}
                      >
                        <ProjectVisual slug={p.slug} />
                        <div className="proj-visual-hover-hint">
                          <span>View Case Study →</span>
                        </div>
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* MORE WORK SECTION */}
        <div className="more-work-section">
          <Reveal delay={0.1}>
            <div className="more-work-header">
              <span className="eyebrow">
                <Layers size={13} /> Additional Projects
              </span>
              <h3>More Work &amp; Repositories</h3>
              <p className="more-work-sub">
                Supplementary microservices, algorithmic solutions, and machine learning utilities.
              </p>
            </div>
          </Reveal>

          <div className="more-work-grid">
            {moreWork.map((mw, idx) => (
              <Reveal key={mw.title} delay={idx * 0.08}>
                <article className="more-work-card">
                  <div className="mw-top">
                    <span className="mw-category">{mw.category}</span>
                    <a
                      href={mw.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mw-gh-link"
                      aria-label={`View ${mw.title} on GitHub`}
                    >
                      <Github size={16} />
                    </a>
                  </div>

                  <h4 className="mw-title">{mw.title}</h4>
                  <p className="mw-desc">{mw.description}</p>

                  <div className="mw-tech">
                    {mw.tech.map((t) => (
                      <span key={t} className="mw-tech-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
