import Image from "next/image";
import { Reveal } from "./Reveal";
import { profile } from "@/data/profile";
import { Sparkles, Compass, Lightbulb, Workflow, Camera } from "lucide-react";

export function About() {
  return (
    <section className="section about-section" id="about">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">§ 01 — About</span>
          <h2>Engineering software with systems-level intent.</h2>
        </Reveal>

        <div className="about-grid">
          {/* Left Column: Lead text, Editorial Photo & Signature Quote */}
          <div className="about-left">
            <Reveal>
              <p className="about-lead">
                A Computer Science undergraduate who builds across the whole stack — turning
                ambiguous problems into <span className="serif">scalable,</span> maintainable
                systems, from the database schema to the user interface.
              </p>
            </Reveal>

            {/* Editorial Portrait in About Section */}
            <Reveal delay={0.08}>
              <div className="about-portrait-card">
                <div className="about-portrait-wrap">
                  <Image
                    src="/profile/about.webp"
                    alt={`${profile.name} — About Portrait`}
                    width={480}
                    height={600}
                    className="about-portrait-img"
                    priority
                  />
                  <div className="about-portrait-badge">
                    <span className="apb-dot" />
                    <span>{profile.shortName} · BRAC University CSE</span>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="about-signature-quote">
                &ldquo;Clean code is not just about syntax — it&apos;s about designing resilient boundaries, clear data contracts, and predictable error states.&rdquo;
              </div>
            </Reveal>
          </div>

          {/* Right Column: Editorial Story Blocks */}
          <div className="about-blocks">
            {profile.about.blocks.map((b, i) => (
              <Reveal key={b.no} delay={i * 0.08}>
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

        {/* CURRENTLY EXPLORING */}
        <div className="exploring-wrap">
          <Reveal delay={0.1}>
            <div className="exploring-header">
              <span className="eyebrow">
                <Compass size={13} /> Current Focus &amp; Research
              </span>
              <h3>What I am currently exploring</h3>
            </div>
          </Reveal>

          <div className="exploring-grid">
            {profile.about.exploring.map((exp, idx) => (
              <Reveal key={exp.topic} delay={idx * 0.06}>
                <div className="exploring-card">
                  <div className="exp-top">
                    <span className="exp-num">0{idx + 1}</span>
                    <Sparkles size={16} className="exp-icon" />
                  </div>
                  <h4 className="exp-title">{exp.topic}</h4>
                  <p className="exp-detail">{exp.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
