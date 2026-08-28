"use client";
import { useEffect, useState } from "react";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { Reveal } from "./Reveal";
import { SocialLinks } from "./SocialLinks";
import { profile } from "@/data/profile";
import { site } from "@/data/site";

const LOG = [
  { t: <><span className="c">$</span> <span className="k">bijoy</span> --whoami</> },
  { t: <><span className="p">›</span> cs.engineer · full-stack + applied ml</> },
  { t: <><span className="c">$</span> stack --load</> },
  { t: <><span className="p">✓</span> react · node · express · mongodb</> },
  { t: <><span className="p">✓</span> pytorch · tensorflow · scikit-learn</> },
  { t: <><span className="c">$</span> status</> },
  { t: <><span className="p">›</span> ready to build <span className="k">→</span></> },
];

const NODES = [
  { n: "React", x: "22%", y: "32%", hot: true, d: 0 },
  { n: "Node.js", x: "63%", y: "24%", hot: false, d: -1.2 },
  { n: "MongoDB", x: "80%", y: "58%", hot: false, d: -2.4 },
  { n: "PyTorch", x: "38%", y: "72%", hot: true, d: -3.1 },
  { n: "Express", x: "14%", y: "66%", hot: false, d: -1.8 },
  { n: "FastAPI", x: "57%", y: "64%", hot: false, d: -0.6 },
];

export function Hero() {
  const [reduce, setReduce] = useState(false);
  useEffect(() => {
    setReduce(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-glow" />
      <div className="wrap hero-grid">
        <div>
          <Reveal as="span">
            <span className="status"><span className="dot" />{profile.status}</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1>
              {profile.headline.pre} <span className="serif">{profile.headline.accentWord}</span>{" "}
              {profile.headline.post}
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="lede">{profile.lede}</p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="hero-actions">
              <a className="btn btn--primary" href="#projects"
                 onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }}>
                View projects <ArrowUpRight className="ar" size={16} />
              </a>
              <a className="btn btn--ghost" href={site.resumePath} download>
                Download résumé <ArrowDown size={16} />
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.24}>
            <SocialLinks className="hero-social" />
          </Reveal>
        </div>

        <Reveal delay={0.1} className="panel-wrap">
          <div className="panel" aria-hidden="true">
            <div className="panel-bar">
              <span className="dots"><i /><i /><i /></span>
              <span>~/bijoy — dev.system</span>
              <span className="live"><b />operational</span>
            </div>
            <div className="term">
              {LOG.map((l, i) => (
                <span key={i} className="ln" style={{ animationDelay: `${reduce ? 0 : i * 0.32}s` }}>{l.t}</span>
              ))}
            </div>
            <div className="constel">
              {NODES.map((nd) => (
                <span key={nd.n} className={`node ${nd.hot ? "hot" : ""}`}
                      style={{ left: nd.x, top: nd.y, animationDelay: `${nd.d}s` }}>
                  {nd.n}
                </span>
              ))}
            </div>
            <div className="panel-foot">
              <div><div className="n">03</div><div className="l">Projects</div></div>
              <div><div className="n">200<span>+</span></div><div className="l">Problems solved</div></div>
              <div><div className="n">MERN<span>+ML</span></div><div className="l">Core stack</div></div>
            </div>
          </div>
        </Reveal>
      </div>
      <div className="wrap">
        <div className="scroll-cue"><span className="bar" />Scroll to explore</div>
      </div>
    </section>
  );
}
