"use client";
import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, ArrowUp, MapPin, Clock } from "lucide-react";
import { profile } from "@/data/profile";
import { site } from "@/data/site";

export function Footer() {
  const [dhakaTime, setDhakaTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Dhaka",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      };
      setDhakaTime(new Intl.DateTimeFormat([], options).format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000 * 30);
    return () => clearInterval(interval);
  }, []);

  const socials = [
    { Icon: Github, href: profile.github, label: "GitHub", ext: true },
    { Icon: Linkedin, href: profile.linkedin, label: "LinkedIn", ext: true },
    { Icon: Mail, href: `mailto:${profile.email}`, label: "Email", ext: false },
  ];

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand-column">
            <div className="footer-brand-row">
              <span className="footer-mk">{profile.brandMark}</span>
              <span className="footer-brand-title">{profile.shortName}.</span>
            </div>
            <p className="footer-tag">{profile.footerTag}</p>

            <div className="footer-location-row">
              <span className="fl-item">
                <MapPin size={13} /> {profile.location}
              </span>
              {dhakaTime && (
                <span className="fl-item">
                  <Clock size={13} /> {dhakaTime} (GMT+6)
                </span>
              )}
            </div>
          </div>

          <div className="footer-right-column">
            <div className="footer-nav-links">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#what-i-do">What I Do</a>
              <a href="#projects">Projects</a>
              <a href="#journey">Journey</a>
              <a href="#skills">Skills</a>
              <a href="#contact">Contact</a>
            </div>

            <div className="footer-social">
              {socials.map(({ Icon, href, label, ext }) => (
                <a
                  key={label}
                  className="icon-link"
                  href={href}
                  aria-label={label}
                  {...(ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="mono">
            © {new Date().getFullYear()} {profile.name} · Designed &amp; Engineered in Dhaka
          </span>
          <button
            type="button"
            className="to-top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Scroll back to top"
          >
            Back to top{" "}
            <span className="ic">
              <ArrowUp size={14} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
