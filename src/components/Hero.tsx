"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Terminal as TerminalIcon,
  Sparkles,
  MapPin,
  GraduationCap,
  Layers,
  Code2,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { profile } from "@/data/profile";
import { site } from "@/data/site";

const DEFAULT_HISTORY = [
  { cmd: "whoami", out: "A Z M Bodruddoza Bijoy — Full-Stack Developer & Applied ML Enthusiast" },
  { cmd: "focus", out: "MERN Stack · PyTorch Deep Learning · System Architecture · REST APIs" },
  { cmd: "status", out: "AVAILABLE — Open to Software Engineering & AI/ML opportunities" },
];

const AVAILABLE_COMMANDS: Record<string, string> = {
  whoami: "A Z M Bodruddoza Bijoy — CSE undergraduate at BRAC University, building intelligent full-stack systems.",
  focus: "Full-Stack Web (MERN, REST APIs, RBAC) + Applied ML (PyTorch, XGBoost, Explainable AI).",
  status: "🟢 Available for full-time software engineering roles and internships.",
  projects: "Featured: 01-RentNest (MERN), 02-Fraud Detection (Deep Learning/XAI), 03-TravelMate (APIs), 04-3D Survival Shooter (PyOpenGL).",
  skills: "React, Node.js, Express, MongoDB, Python, PyTorch, TensorFlow, Scikit-learn, C++, TypeScript, Git, Postman.",
  contact: "Email: azmbodruddozabijoy@gmail.com | LinkedIn: /in/a-z-m-bodruddoza-bijoy",
  university: "BRAC University — B.Sc. in Computer Science and Engineering (Dhaka, Bangladesh).",
  help: "Available commands: whoami, focus, projects, skills, contact, university, status, clear",
};

export function Hero() {
  const [activeTab, setActiveTab] = useState<"portrait" | "terminal">("portrait");
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState(DEFAULT_HISTORY);
  const termEndRef = useRef<HTMLDivElement>(null);

  const handleCommand = (cmdStr: string) => {
    const clean = cmdStr.trim().toLowerCase();
    if (!clean) return;

    if (clean === "clear") {
      setHistory([]);
      setInputVal("");
      return;
    }

    const reply = AVAILABLE_COMMANDS[clean] || `Command not found: '${clean}'. Type 'help' for available commands.`;
    setHistory((prev) => [...prev, { cmd: clean, out: reply }]);
    setInputVal("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleCommand(inputVal);
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-glow" />
      <div className="wrap hero-grid">
        {/* Left Column: Personal Brand, Headline & Direct CTAs */}
        <div className="hero-content">
          <Reveal as="div">
            <div className="hero-eyebrow-row">
              <span className="status">
                <span className="dot" />
                {profile.status}
              </span>
              <span className="hero-university-tag">
                <GraduationCap size={13} />
                {profile.university}
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="hero-title">
              <span className="hero-name-label">{profile.name}</span>
              <span className="hero-main-statement">
                {profile.headline.statement}
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="hero-role-badge">
              <span className="hero-role-text">{profile.role}</span>
              <span className="hero-role-dot" />
              <span className="hero-location-text">
                <MapPin size={12} /> {profile.location}
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="hero-lede">{profile.lede}</p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="hero-actions">
              <a
                className="btn btn--primary"
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                View Selected Work <ArrowUpRight className="ar" size={16} />
              </a>
              <a className="btn btn--ghost" href={site.resumePath} target="_blank" rel="noopener noreferrer" download>
                Download Résumé <ArrowDown size={15} />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.22}>
            <div className="hero-footer-bar">
              <div className="hero-social">
                <a
                  className="icon-link"
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                >
                  <Github size={18} />
                </a>
                <a
                  className="icon-link"
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  className="icon-link"
                  href={`mailto:${profile.email}`}
                  aria-label="Direct Email"
                >
                  <Mail size={18} />
                </a>
              </div>

              <div className="hero-stats-inline">
                <div className="hero-stat-pill">
                  <b>04</b> <span>Featured Projects</span>
                </div>
                <div className="hero-stat-pill">
                  <b>200+</b> <span>Problems Solved</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right Column: Signature Interactive Terminal & Editorial Portrait Presentation */}
        <Reveal delay={0.12} className="hero-interactive-column">
          <div className="hero-card-container">
            {/* Top switcher tabs */}
            <div className="hero-tabs-header">
              <button
                type="button"
                className={`hero-tab-btn ${activeTab === "terminal" ? "active" : ""}`}
                onClick={() => setActiveTab("terminal")}
              >
                <TerminalIcon size={14} />
                <span>~/bijoy — Interactive Console</span>
              </button>
              <button
                type="button"
                className={`hero-tab-btn ${activeTab === "portrait" ? "active" : ""}`}
                onClick={() => setActiveTab("portrait")}
              >
                <Sparkles size={14} />
                <span>Profile Portrait</span>
              </button>
            </div>

            {/* TAB 1: Interactive Signature Terminal */}
            {activeTab === "terminal" && (
              <div className="hero-terminal">
                <div className="terminal-bar">
                  <div className="term-dots">
                    <span className="dot-red" />
                    <span className="dot-yellow" />
                    <span className="dot-green" />
                  </div>
                  <span className="term-title">bash — 80×24</span>
                  <span className="term-badge">LIVE REPL</span>
                </div>

                <div className="terminal-body" onClick={() => document.getElementById("term-input")?.focus()}>
                  <div className="terminal-welcome">
                    <p className="tw-line">Bijoy DevEnvironment v2.4 (x86_64-node)</p>
                    <p className="tw-sub">Type a command or click quick chips below:</p>
                  </div>

                  <div className="terminal-history">
                    {history.map((item, idx) => (
                      <div key={idx} className="term-entry">
                        <div className="term-cmd-line">
                          <span className="term-prompt">bijoy@bracu:~$</span>
                          <span className="term-cmd">{item.cmd}</span>
                        </div>
                        <div className="term-output">{item.out}</div>
                      </div>
                    ))}
                    <div ref={termEndRef} />
                  </div>

                  <div className="terminal-input-row">
                    <span className="term-prompt">bijoy@bracu:~$</span>
                    <input
                      id="term-input"
                      type="text"
                      className="term-input-field"
                      value={inputVal}
                      onChange={(e) => setInputVal(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder="try 'projects', 'skills', 'whoami', 'help'..."
                      autoComplete="off"
                      spellCheck={false}
                    />
                  </div>
                </div>

                {/* Quick command buttons */}
                <div className="terminal-quick-chips">
                  {["whoami", "focus", "projects", "skills", "contact", "clear"].map((cmd) => (
                    <button
                      key={cmd}
                      type="button"
                      className="term-chip"
                      onClick={() => handleCommand(cmd)}
                    >
                      ${cmd}
                    </button>
                  ))}
                </div>

                {/* Terminal Footer Specs */}
                <div className="terminal-footer-metrics">
                  <div>
                    <span className="tf-val">MERN + ML</span>
                    <span className="tf-lbl">Core Stack</span>
                  </div>
                  <div>
                    <span className="tf-val">2026</span>
                    <span className="tf-lbl">Thesis Focus</span>
                  </div>
                  <div>
                    <span className="tf-val">Dhaka, BD</span>
                    <span className="tf-lbl">Location</span>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: Editorial Portrait Presentation */}
            {activeTab === "portrait" && (
              <div className="hero-portrait-card">
                <div className="portrait-frame">
                  <div className="portrait-img-wrap">
                    <Image
                      src="/profile/profile.jpg"
                      alt={profile.name}
                      width={480}
                      height={580}
                      quality={95}
                      className="portrait-img"
                      priority
                    />
                  </div>

                  <div className="portrait-overlay-meta">
                    <div className="pom-name">{profile.name}</div>
                    <div className="pom-sub">Full-Stack Developer · Applied ML</div>
                    <div className="pom-inst">BRAC University · CSE</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </Reveal>
      </div>

      <div className="wrap">
        <div className="scroll-cue">
          <span className="bar" />
          <span>Scroll to explore portfolio</span>
        </div>
      </div>
    </section>
  );
}
