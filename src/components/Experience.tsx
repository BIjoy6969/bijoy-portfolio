import { Reveal } from "./Reveal";
import { experience } from "@/data/experience";
import { education } from "@/data/education";

export function Experience() {
  return (
    <section className="section" id="experience">
      <div className="wrap">
        <div className="split">
          <div>
            <Reveal className="section-head" >
              <span className="eyebrow">§ 04 — Leadership</span>
              <h2 style={{ fontSize: "clamp(26px,4vw,40px)" }}>Experience</h2>
            </Reveal>
            <div className="tl">
              {experience.map((e, i) => (
                <Reveal key={e.org} delay={i * 0.05}>
                  <div className="tl-item">
                    <div className="tl-date">{e.date}</div>
                    <h3>{e.org}</h3>
                    <div className="tl-role">{e.role}</div>
                    <ul>{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
                    <div className="tl-meta">{e.location}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div id="education">
            <Reveal className="section-head">
              <span className="eyebrow">§ 05 — Academics</span>
              <h2 style={{ fontSize: "clamp(26px,4vw,40px)" }}>Education</h2>
            </Reveal>
            <div className="tl">
              {education.map((e, i) => (
                <Reveal key={e.degree} delay={i * 0.05}>
                  <div className="tl-item">
                    <div className="tl-date">{e.date}</div>
                    <h3>{e.degree}</h3>
                    <div className="tl-role">{e.school}</div>
                    <div className="gpa">{e.gradeLabel} <b>{e.grade}</b> / {e.gradeMax}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
