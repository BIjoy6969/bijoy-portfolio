import { Reveal } from "./Reveal";
import { achievements, Achievement } from "@/data/achievements";
import { Trophy, Medal, Award, Users } from "lucide-react";

const ICON_MAP = {
  trophy: Trophy,
  medal: Medal,
  award: Award,
  users: Users,
};

export function Achievements() {
  return (
    <section className="section achievements-section" id="achievements">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">§ 06 — Recognition</span>
          <h2>Validated achievements &amp; milestones.</h2>
          <p className="section-sub">
            Competitive programming placements, leadership outcomes, and international awards.
          </p>
        </Reveal>

        <div className="ach-grid-v2">
          {achievements.map((ach, idx) => {
            const Icon = ICON_MAP[ach.icon] || Trophy;

            return (
              <Reveal key={ach.title} delay={idx * 0.08}>
                <article className="ach-card-v2">
                  <div className="ach-card-top">
                    <span className="ach-cat">{ach.category}</span>
                    <span className="ach-icon-circle">
                      <Icon size={18} />
                    </span>
                  </div>

                  <div className="ach-big-num">
                    <span className="num-val">{ach.big}</span>
                    {ach.suffix && <span className="num-suf">{ach.suffix}</span>}
                  </div>

                  <h3 className="ach-title-v2">{ach.title}</h3>
                  <div className="ach-subtitle-v2">{ach.subtitle}</div>
                  <p className="ach-body-v2">{ach.body}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
