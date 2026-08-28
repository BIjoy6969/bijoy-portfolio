import { Reveal } from "./Reveal";
import { profile } from "@/data/profile";

export function About() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">§ 01 — About</span>
          <h2>Engineering software that thinks and scales.</h2>
        </Reveal>
        <div className="about-grid">
          <Reveal>
            <p className="about-lead">
              A Computer Science undergraduate who builds across the whole stack — turning
              ambiguous problems into <span className="serif">scalable,</span> maintainable
              systems, from the database schema to the interface.
            </p>
          </Reveal>
          <div className="about-blocks">
            {profile.about.blocks.map((b, i) => (
              <Reveal key={b.no} delay={i * 0.06}>
                <div className="ablock">
                  <span className="no">{b.no}</span>
                  <div>
                    <h3>{b.title}</h3>
                    <p>{b.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
