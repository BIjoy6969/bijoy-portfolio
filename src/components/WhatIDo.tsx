import { Reveal } from "./Reveal";
import { whatIDoData } from "@/data/whatIDo";
import { CheckCircle2, Code2, BrainCircuit, Cpu, Sparkles } from "lucide-react";

const ICONS = [Code2, BrainCircuit, Cpu, Sparkles];

export function WhatIDo() {
  return (
    <section className="section what-i-do-section" id="what-i-do">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">§ 02 — Capabilities</span>
          <h2>Disciplines engineered for reliability &amp; intelligence.</h2>
          <p className="section-sub">
            From database schemas and distributed APIs to applied deep learning models and real-time interactive systems.
          </p>
        </Reveal>

        <div className="what-grid">
          {whatIDoData.map((item, idx) => {
            const Icon = ICONS[idx % ICONS.length];
            return (
              <Reveal key={item.index} delay={idx * 0.08}>
                <article className="what-card">
                  <div className="what-card-top">
                    <span className="what-num">{item.index}</span>
                    <span className="what-icon">
                      <Icon size={20} />
                    </span>
                  </div>

                  <h3 className="what-title">{item.title}</h3>
                  <p className="what-headline">{item.headline}</p>
                  <p className="what-desc">{item.description}</p>

                  <div className="what-capabilities">
                    <span className="what-cap-label">Core Competencies:</span>
                    <ul>
                      {item.capabilities.map((cap) => (
                        <li key={cap}>
                          <CheckCircle2 size={13} className="what-check" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="what-tech">
                    {item.technologies.map((t) => (
                      <span key={t} className="what-tech-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
