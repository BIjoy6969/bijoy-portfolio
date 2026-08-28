import { Github, ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { profile } from "@/data/profile";
import { site } from "@/data/site";
import { projects } from "@/data/projects";

const LANGS: Record<string, { label: string; color: string }> = {
  rentnest: { label: "JavaScript", color: "var(--accent)" },
  travelmate: { label: "JavaScript", color: "var(--accent)" },
  "3d-survival-shooter": { label: "Python", color: "#4B8BBE" },
};

export function GitHubSection() {
  return (
    <section className="section" id="github">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">§ 07 — Code</span>
          <h2>Where I build in the open.</h2>
        </Reveal>

        <div className="gh">
          <Reveal className="gh-card">
            <div className="gh-head">
              <span className="gh-av"><Github size={26} /></span>
              <div>
                <div className="gh-handle">@{site.githubUsername}</div>
                <div className="gh-sub">github.com/{site.githubUsername}</div>
              </div>
            </div>
            <div className="gh-repos">
              {projects.map((p) => {
                const lang = LANGS[p.slug];
                return (
                  <a key={p.slug} className="gh-repo" href={p.github} target="_blank" rel="noopener noreferrer">
                    <div>
                      <div className="rn">{p.name.replace(/\s+/g, "")}</div>
                      <div className="rd">{p.tag.split(" · ")[0]}</div>
                    </div>
                    <span className="lang"><i style={{ background: lang?.color }} />{lang?.label}</span>
                  </a>
                );
              })}
            </div>
            <a className="btn btn--ghost" href={profile.github} target="_blank" rel="noopener noreferrer"
               style={{ marginTop: 20, width: "100%", justifyContent: "center" }}>
              View GitHub profile <ArrowUpRight className="ar" size={16} />
            </a>
          </Reveal>

          <Reveal className="gh-activity">
            <div className="cap"><span>Contribution activity</span><span>· last 26 weeks</span></div>
            <div className="heat" aria-hidden="true">
              {Array.from({ length: 26 * 7 }).map((_, i) => <i key={i} />)}
            </div>
            <p className="gh-note">
              Live activity is <b>API-ready</b>: set <code>GITHUB_USERNAME</code> and wire the GitHub
              API to render real contribution data. No statistics are fabricated here.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
