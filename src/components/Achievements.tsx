import { Trophy, Medal, Award } from "lucide-react";
import { Reveal } from "./Reveal";
import { achievements } from "@/data/achievements";

const ICONS = { trophy: Trophy, medal: Medal, award: Award } as const;

export function Achievements() {
  return (
    <section className="section" id="achievements">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">§ 06 — Recognition</span>
          <h2>Achievements.</h2>
        </Reveal>
        <div className="ach-grid">
          {achievements.map((a, i) => {
            const Icon = ICONS[a.icon as keyof typeof ICONS];
            return (
              <Reveal key={a.title} delay={i * 0.06}>
                <div className="ach">
                  <span className="ic"><Icon size={20} /></span>
                  <div className="big">{a.big}<span>{a.suffix}</span></div>
                  <h3>{a.title}</h3>
                  <p>{a.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
