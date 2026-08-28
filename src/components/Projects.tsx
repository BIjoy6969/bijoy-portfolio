import Link from "next/link";
import { Github, ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { ProjectVisual } from "./ProjectVisual";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section className="section" id="projects">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">§ 03 — Selected work</span>
          <h2>Projects, built end to end.</h2>
        </Reveal>

        <div className="projects-list">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.05}>
              <article className={`proj ${p.featured ? "featured" : ""}`}>
                <div className="proj-inner">
                  <div className="proj-body">
                    <span className="proj-tag">{p.tag}</span>
                    <h3>{p.name}</h3>
                    <p className="desc">{p.description}</p>
                    {p.github && (
                      <div className="links">
                        <a className="proj-link" href={p.github} target="_blank" rel="noopener noreferrer">
                          <Github size={13} /> Code
                        </a>
                      </div>
                    )}
                    <div className="tech">
                      {p.tech.map((t) => <span key={t}>{t}</span>)}
                    </div>
                    <Link className="proj-cta" href={`/projects/${p.slug}`}>
                      Read case study <em>{p.index}</em>
                      <ArrowUpRight className="ar" size={15} />
                    </Link>
                  </div>
                  <Link className="proj-visual" href={`/projects/${p.slug}`} aria-label={`Open ${p.name} case study`}>
                    <ProjectVisual slug={p.slug} />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
