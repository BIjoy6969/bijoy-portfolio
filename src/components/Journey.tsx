"use client";
import { useState } from "react";
import { Reveal } from "./Reveal";
import { journeyTimeline, JourneyItem } from "@/data/journey";
import {
  BrainCircuit,
  Users,
  GraduationCap,
  Sparkles,
  MapPin,
  Calendar,
  CheckCircle2,
} from "lucide-react";

const CATEGORY_ICONS: Record<string, any> = {
  research: BrainCircuit,
  leadership: Users,
  education: GraduationCap,
  project: Sparkles,
};

export function Journey() {
  const [activeFilter, setActiveFilter] = useState<"all" | "research" | "leadership" | "education">("all");
  const [selectedYear, setSelectedYear] = useState<string | null>(null);

  const filteredTimeline = journeyTimeline.filter((item) => {
    if (activeFilter !== "all" && item.category !== activeFilter) return false;
    if (selectedYear && item.year !== selectedYear) return false;
    return true;
  });

  const distinctYears = Array.from(new Set(journeyTimeline.map((j) => j.year)));

  return (
    <section className="section journey-section" id="journey">
      <div className="wrap">
        <div className="section-head-split">
          <Reveal className="section-head">
            <span className="eyebrow">§ 04 — Trajectory</span>
            <h2>My Journey &amp; Milestones</h2>
            <p className="section-sub">
              Chronological progression across software research, university leadership, and engineering foundations.
            </p>
          </Reveal>

          {/* Timeline Filter Pills */}
          <Reveal delay={0.1} className="journey-filter-wrap">
            <div className="journey-filter-pills" role="tablist">
              <button
                type="button"
                className={`filter-pill ${activeFilter === "all" ? "active" : ""}`}
                onClick={() => {
                  setActiveFilter("all");
                  setSelectedYear(null);
                }}
              >
                All Milestones
              </button>
              <button
                type="button"
                className={`filter-pill ${activeFilter === "research" ? "active" : ""}`}
                onClick={() => {
                  setActiveFilter("research");
                  setSelectedYear(null);
                }}
              >
                Research
              </button>
              <button
                type="button"
                className={`filter-pill ${activeFilter === "leadership" ? "active" : ""}`}
                onClick={() => {
                  setActiveFilter("leadership");
                  setSelectedYear(null);
                }}
              >
                Leadership
              </button>
              <button
                type="button"
                className={`filter-pill ${activeFilter === "education" ? "active" : ""}`}
                onClick={() => {
                  setActiveFilter("education");
                  setSelectedYear(null);
                }}
              >
                Education
              </button>
            </div>
          </Reveal>
        </div>

        {/* Interactive Year Ribbon */}
        <Reveal delay={0.12}>
          <div className="journey-year-ribbon">
            <span className="jyr-label">Filter by Year:</span>
            <div className="jyr-years">
              <button
                type="button"
                className={`jyr-btn ${selectedYear === null ? "active" : ""}`}
                onClick={() => setSelectedYear(null)}
              >
                View All
              </button>
              {distinctYears.map((yr) => (
                <button
                  key={yr}
                  type="button"
                  className={`jyr-btn ${selectedYear === yr ? "active" : ""}`}
                  onClick={() => setSelectedYear(yr === selectedYear ? null : yr)}
                >
                  {yr}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Visual Timeline Track */}
        <div className="journey-timeline-track">
          <div className="journey-vertical-line" aria-hidden="true" />

          {filteredTimeline.map((item, idx) => {
            const Icon = CATEGORY_ICONS[item.category] || Sparkles;

            return (
              <Reveal key={`${item.year}-${item.title}`} delay={idx * 0.08}>
                <div className={`journey-item-card ${item.badge ? "has-badge" : ""}`}>
                  {/* Left Column: Year & Category Marker */}
                  <div className="jic-left">
                    <div className="jic-year-box">
                      <span className="jic-year">{item.year}</span>
                      <span className="jic-category-tag">{item.tag}</span>
                    </div>

                    <div className="jic-node-dot" aria-hidden="true">
                      <Icon size={14} />
                    </div>
                  </div>

                  {/* Right Column: Detailed Card Body */}
                  <div className="jic-body">
                    <div className="jic-header">
                      <div>
                        <h3 className="jic-title">{item.title}</h3>
                        <div className="jic-subtitle">{item.subtitle}</div>
                      </div>

                      {item.badge && <span className="jic-badge">{item.badge}</span>}
                    </div>

                    <div className="jic-meta-row">
                      <span className="jic-period">
                        <Calendar size={12} /> {item.period}
                      </span>
                      {item.location && (
                        <span className="jic-location">
                          <MapPin size={12} /> {item.location}
                        </span>
                      )}
                      {item.metrics && <span className="jic-metric-tag">{item.metrics}</span>}
                    </div>

                    <p className="jic-desc">{item.description}</p>

                    <div className="jic-highlights">
                      <ul>
                        {item.highlights.map((hl) => (
                          <li key={hl}>
                            <CheckCircle2 size={13} className="jic-check" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
