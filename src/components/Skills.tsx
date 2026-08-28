"use client";
import { useState } from "react";
import { Reveal } from "./Reveal";
import { skills, skillCategories, type SkillCategory } from "@/data/skills";

const CATLABEL: Record<SkillCategory, string> = {
  lang: "lang", web: "web", ml: "ml/ai", db: "tools", cs: "cs",
};

export function Skills() {
  const [active, setActive] = useState<SkillCategory | "all">("all");

  return (
    <section className="section" id="skills">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">§ 02 — Toolkit</span>
          <h2>The stack I build with.</h2>
        </Reveal>

        <Reveal>
          <div className="skill-tabs" role="tablist" aria-label="Skill categories">
            {skillCategories.map((c) => (
              <button
                key={c.id}
                role="tab"
                aria-selected={active === c.id}
                className="skill-tab"
                onClick={() => setActive(c.id as SkillCategory | "all")}
              >
                {c.label}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <div className="skill-grid">
            {skills
              .filter((s) => active === "all" || s.category === active)
              .map((s) => (
                <span className="chip" key={s.name}>
                  <span className="dotc" />
                  {s.name}
                  <span className="cat">{CATLABEL[s.category]}</span>
                </span>
              ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
