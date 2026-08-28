"use client";
import { useEffect, useState } from "react";
import { Github, ArrowUpRight, GitFork, Star, Code2, BookOpen, Activity } from "lucide-react";
import { Reveal } from "./Reveal";
import { profile } from "@/data/profile";
import { site } from "@/data/site";
import { projects } from "@/data/projects";

type GitHubRepo = {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
};

const FALLBACK_REPOS: Partial<GitHubRepo>[] = [
  {
    id: 1,
    name: "RentNest",
    description: "MERN stack house & apartment rental platform with role-based JWT auth.",
    html_url: "https://github.com/BIjoy6969",
    language: "JavaScript",
    stargazers_count: 0,
    forks_count: 0,
  },
  {
    id: 2,
    name: "credit-card-fraud-detection-xai",
    description: "Deep learning thesis research on imbalanced transaction data with SMOTE and SHAP.",
    html_url: "https://github.com/BIjoy6969",
    language: "Python",
    stargazers_count: 0,
    forks_count: 0,
  },
  {
    id: 3,
    name: "TravelMate",
    description: "Smart travel planner orchestrating weather, flights, currency, and map APIs.",
    html_url: "https://github.com/BIjoy6969",
    language: "JavaScript",
    stargazers_count: 0,
    forks_count: 0,
  },
  {
    id: 4,
    name: "3d-survival-shooter-pyopengl",
    description: "Real-time 3D game engine and survival shooter written in Python with PyOpenGL.",
    html_url: "https://github.com/BIjoy6969",
    language: "Python",
    stargazers_count: 0,
    forks_count: 0,
  },
];

const LANG_COLORS: Record<string, string> = {
  JavaScript: "var(--accent)",
  TypeScript: "#3178c6",
  Python: "#3572A5",
  "C++": "#f34b7d",
  HTML: "#e34c26",
  CSS: "#563d7c",
};

export function GitHubSection() {
  const [repos, setRepos] = useState<Partial<GitHubRepo>[]>(FALLBACK_REPOS);
  const [userStats, setUserStats] = useState<{ public_repos: number; followers: number } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGitHub() {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${site.githubUsername}`),
          fetch(`https://api.github.com/users/${site.githubUsername}/repos?sort=updated&per_page=6`),
        ]);

        if (userRes.ok) {
          const userData = await userRes.json();
          setUserStats({
            public_repos: userData.public_repos || 4,
            followers: userData.followers || 0,
          });
        }

        if (reposRes.ok) {
          const reposData = await reposRes.json();
          if (Array.isArray(reposData) && reposData.length > 0) {
            setRepos(reposData);
          }
        }
      } catch (err) {
        // Graceful fallback to pre-populated repository data
      } finally {
        setLoading(false);
      }
    }

    fetchGitHub();
  }, []);

  return (
    <section className="section github-section" id="github">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">§ 07 — Open Source</span>
          <h2>Where I build in the open.</h2>
          <p className="section-sub">
            Direct repositories, full-stack microservices, and applied research code.
          </p>
        </Reveal>

        <div className="gh-grid-v2">
          {/* GitHub Profile Card */}
          <Reveal className="gh-profile-card">
            <div className="gh-header">
              <div className="gh-avatar-circle">
                <Github size={28} />
              </div>
              <div className="gh-id">
                <h3 className="gh-name">{profile.name}</h3>
                <a
                  href={`https://github.com/${site.githubUsername}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gh-username"
                >
                  @{site.githubUsername} ↗
                </a>
              </div>
            </div>

            <p className="gh-bio">
              Software engineering, MERN full-stack platforms, PyTorch deep learning research, and 3D computer graphics in Python.
            </p>

            <div className="gh-metrics-row">
              <div className="gh-metric-box">
                <BookOpen size={16} />
                <div>
                  <span className="gmb-val">{userStats?.public_repos ?? "10+"}</span>
                  <span className="gmb-lbl">Public Repos</span>
                </div>
              </div>
              <div className="gh-metric-box">
                <Activity size={16} />
                <div>
                  <span className="gmb-val">Active</span>
                  <span className="gmb-lbl">Status</span>
                </div>
              </div>
            </div>

            <a
              className="btn btn--ghost gh-view-btn"
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Visit GitHub Profile</span>
              <ArrowUpRight size={16} className="ar" />
            </a>
          </Reveal>

          {/* Featured Repositories Grid */}
          <div className="gh-repos-container">
            <div className="gh-repos-list">
              {repos.slice(0, 4).map((repo) => {
                const langColor = LANG_COLORS[repo.language || "JavaScript"] || "var(--accent)";
                return (
                  <Reveal key={repo.id || repo.name} delay={0.06}>
                    <a
                      href={repo.html_url || profile.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gh-repo-card"
                    >
                      <div className="ghr-top">
                        <span className="ghr-name">
                          <Code2 size={15} />
                          <span>{repo.name}</span>
                        </span>
                        <ArrowUpRight size={14} className="ghr-arrow" />
                      </div>

                      <p className="ghr-desc">
                        {repo.description || "Full-stack / applied software repository."}
                      </p>

                      <div className="ghr-footer">
                        <span className="ghr-lang">
                          <i style={{ backgroundColor: langColor }} />
                          {repo.language || "JavaScript"}
                        </span>
                        <div className="ghr-counts">
                          {repo.stargazers_count !== undefined && repo.stargazers_count > 0 && (
                            <span className="ghr-stat">
                              <Star size={12} /> {repo.stargazers_count}
                            </span>
                          )}
                          {repo.forks_count !== undefined && repo.forks_count > 0 && (
                            <span className="ghr-stat">
                              <GitFork size={12} /> {repo.forks_count}
                            </span>
                          )}
                        </div>
                      </div>
                    </a>
                  </Reveal>
                );
              })}
            </div>

            {/* Contribution Heatmap strip */}
            <Reveal delay={0.15}>
              <div className="gh-activity-panel">
                <div className="gap-cap">
                  <span>Weekly Contribution Cadence</span>
                  <span>github.com/{site.githubUsername}</span>
                </div>
                <div className="heat-grid" aria-hidden="true">
                  {Array.from({ length: 26 * 7 }).map((_, i) => (
                    <i
                      key={i}
                      className={
                        i % 5 === 0 || i % 7 === 0 || i % 11 === 0
                          ? i % 11 === 0
                            ? "heat-lvl-3"
                            : "heat-lvl-2"
                          : "heat-lvl-1"
                      }
                    />
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
