"use client";
import { Briefcase, Calendar, MapPin, CheckCircle2, Building2, Users } from "lucide-react";
import { Reveal } from "./Reveal";

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  department?: string;
  period: string;
  location: string;
  current?: boolean;
  type: "Industry" | "Leadership";
  description: string;
  bullets: string[];
  skills: string[];
}

const EXPERIENCES: ExperienceItem[] = [
  {
    id: "potaka",
    role: "Data Engineer Intern",
    company: "Potaka.ai Limited",
    department: "Data Team",
    period: "Present",
    location: "Dhaka, Bangladesh",
    current: true,
    type: "Industry",
    description:
      "Working within the Data Team to engineer robust data pipelines supplying clean, reliable datasets for production machine learning and AI workflows.",
    bullets: [
      "Engineered structured data sourcing and collection workflows across heterogeneous external and internal sources.",
      "Built repeatable data preprocessing, normalization, and cleaning pipelines to resolve noisy records and missing values.",
      "Collaborated within the Data Team to enforce strict data validation and quality standards for downstream AI readiness.",
    ],
    skills: ["Data Sourcing", "Data Collection", "Data Preprocessing", "Data Cleaning", "Python", "MongoDB", "REST APIs", "ETL Pipelines"],
  },
  {
    id: "bucc",
    role: "Assistant Director",
    company: "BRAC University Computer Club (BUCC)",
    department: "Event Management Department",
    period: "Apr 2024 — Dec 2024",
    location: "Dhaka, Bangladesh",
    type: "Leadership",
    description:
      "Directed event execution and logistical operations for BRAC University's largest departmental tech club with over 300 active student members.",
    bullets: [
      "Coordinated flagship departmental tech events, programming workshops, and competitive hackathons.",
      "Collaborated with faculty advisors and cross-departmental teams to deliver university-scale initiatives.",
      "Managed volunteer pipelines and communication schedules across 300+ club members.",
    ],
    skills: ["Leadership", "Operations", "Team Management", "Event Logistics", "Cross-functional Collaboration"],
  },
  {
    id: "robu",
    role: "Junior Executive",
    company: "Robotics Club of BRAC University (ROBU)",
    department: "Event Management Department",
    period: "Apr 2022 — Dec 2023",
    location: "Dhaka, Bangladesh",
    type: "Leadership",
    description:
      "Supported operational logistics, recruitment drives, and member onboarding for university robotics exhibitions and tech competitions.",
    bullets: [
      "Supported member recruitment, onboarding, and task coordination for new club cohorts.",
      "Maintained internal documentation and logistical communication during university tech exhibitions.",
    ],
    skills: ["Operations", "Member Onboarding", "Internal Communications", "Logistics"],
  },
];

export function Experience() {
  return (
    <section className="section experience-section" id="experience">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">§ 03 — Experience</span>
          <h2>Professional experience &amp; leadership.</h2>
          <p className="section-sub">
            Hands-on technical contributions in data engineering pipelines, data quality standards, and large-scale team operations.
          </p>
        </Reveal>

        <div className="exp-grid">
          {EXPERIENCES.map((exp, idx) => (
            <Reveal key={exp.id} delay={idx * 0.08} className="exp-card">
              <div className="exp-card-header">
                <div className="exp-header-left">
                  <div className="exp-badge-row">
                    <span className={`exp-type-badge ${exp.type === "Industry" ? "industry" : "leadership"}`}>
                      {exp.type === "Industry" ? <Briefcase size={12} /> : <Users size={12} />}
                      {exp.type} Experience
                    </span>
                    {exp.current && (
                      <span className="exp-status-live">
                        <span className="live-dot" /> Current Role
                      </span>
                    )}
                  </div>
                  <h3 className="exp-role">{exp.role}</h3>
                  <div className="exp-company-row">
                    <Building2 size={15} className="exp-icon" />
                    <span className="exp-company">{exp.company}</span>
                    {exp.department && <span className="exp-dept">· {exp.department}</span>}
                  </div>
                </div>

                <div className="exp-header-right">
                  <div className="exp-meta-pill">
                    <Calendar size={13} />
                    <span>{exp.period}</span>
                  </div>
                  <div className="exp-meta-pill">
                    <MapPin size={13} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <p className="exp-desc">{exp.description}</p>

              <ul className="exp-bullets">
                {exp.bullets.map((bullet, bIdx) => (
                  <li key={bIdx}>
                    <CheckCircle2 size={15} className="bullet-icon" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="exp-skills-wrap">
                {exp.skills.map((skill) => (
                  <span key={skill} className="exp-skill-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
