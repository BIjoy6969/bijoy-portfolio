"use client";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { profile } from "@/data/profile";

export function Footer() {
  const socials = [
    { Icon: Github, href: profile.github, label: "GitHub", ext: true },
    { Icon: Linkedin, href: profile.linkedin, label: "LinkedIn", ext: true },
    { Icon: Mail, href: `mailto:${profile.email}`, label: "Email", ext: false },
  ];
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div>
            <div className="footer-brand">{profile.shortName}.</div>
            <p className="footer-tag">{profile.footerTag}</p>
          </div>
          <div className="footer-social">
            {socials.map(({ Icon, href, label, ext }) => (
              <a key={label} className="icon-link" href={href} aria-label={label}
                 {...(ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <span className="mono">
            © {new Date().getFullYear()} {profile.name} · Designed &amp; built in Dhaka
          </span>
          <button className="to-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            Back to top <span className="ic"><ArrowUp size={14} /></span>
          </button>
        </div>
      </div>
    </footer>
  );
}
