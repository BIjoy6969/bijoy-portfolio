"use client";
import { useState } from "react";
import Link from "next/link";
import { Reveal } from "./Reveal";
import { skills, skillCategories, SkillCategory, Skill } from "@/data/skills";
import { projects } from "@/data/projects";
import { ArrowUpRight, Check, Sparkles, FolderGit2, X } from "lucide-react";

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory | "all">("all");
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const filteredSkills = skills.filter((s) => {
    if (activeCategory === "all") return true;
    return s.category === activeCategory;
  });

  const getProjectsForSkill = (slugs?: string[]) => {
    if (!slugs || slugs.length === 0) return [];
    return projects.filter((p) => slugs.includes(p.slug));
  };

  const activeProjects = selectedSkill ? getProjectsForSkill(selectedSkill.usedIn) : [];

  return (
    <section className="section skills-section" id="skills">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">§ 05 — Technical Repertoire</span>
          <h2>Tooling &amp; engineering stack.</h2>
          <p className="section-sub">
            Categorized by practical application — click any skill to inspect where it is implemented across featured projects.
          </p>
        </Reveal>

        {/* Category Tabs */}
        <Reveal delay={0.08}>
          <div className="skill-tabs-wrap">
            <div className="skill-tabs" role="tablist" aria-label="Skill categories">
              {skillCategories.map(({ id, label }) => {
                const isActive = activeCategory === id;
                return (
                  <button
                    key={id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    className={`skill-tab ${isActive ? "active" : ""}`}
                    onClick={() => {
                      setActiveCategory(id);
                      setSelectedSkill(null);
                    }}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Skill Chips Grid */}
        <Reveal delay={0.14}>
          <div className="skills-interactive-container">
            <div className="skill-chips-grid">
              {filteredSkills.map((s) => {
                const isSelected = selectedSkill?.name === s.name;
                const hasProjects = s.usedIn && s.usedIn.length > 0;

                return (
                  <button
                    key={s.name}
                    type="button"
                    className={`skill-chip-v2 ${isSelected ? "selected" : ""} ${
                      hasProjects ? "has-project-link" : ""
                    }`}
                    onClick={() =>
                      setSelectedSkill((prev) => (prev?.name === s.name ? null : s))
                    }
                    title={
                      hasProjects
                        ? `Click to see projects built with ${s.name}`
                        : `${s.name} (${s.level})`
                    }
                  >
                    <span className="sc-dot" />
                    <span className="sc-name">{s.name}</span>
                    <span className="sc-level-tag">{s.level}</span>
                    {hasProjects && <span className="sc-link-indicator">↗</span>}
                  </button>
                );
              })}
            </div>

            {/* Skill-to-Project Connection Panel */}
            {selectedSkill && (
              <div className="skill-project-popup">
                <div className="spp-header">
                  <div className="spp-title-wrap">
                    <FolderGit2 size={16} className="spp-icon" />
                    <span className="spp-title">
                      Projects utilizing <b>{selectedSkill.name}</b>
                    </span>
                  </div>
                  <button
                    type="button"
                    className="spp-close"
                    onClick={() => setSelectedSkill(null)}
                    aria-label="Close project connection box"
                  >
                    <X size={14} />
                  </button>
                </div>

                {activeProjects.length > 0 ? (
                  <div className="spp-projects-list">
                    {activeProjects.map((p) => (
                      <Link key={p.slug} href={`/projects/${p.slug}`} className="spp-project-card">
                        <div className="spp-p-info">
                          <span className="spp-p-tag">{p.tag}</span>
                          <h4 className="spp-p-name">{p.name}</h4>
                          <p className="spp-p-desc">{p.description}</p>
                        </div>
                        <span className="spp-p-cta">
                          View Case Study <ArrowUpRight size={14} />
                        </span>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="spp-empty">
                    <span>
                      <b>{selectedSkill.name}</b> is part of core algorithmic coursework, problem-solving, and general tooling.
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
