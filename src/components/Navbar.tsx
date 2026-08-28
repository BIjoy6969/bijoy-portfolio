"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Command, ArrowDown } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { CommandPalette } from "./CommandPalette";
import { profile } from "@/data/profile";
import { site } from "@/data/site";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "what-i-do", label: "What I Do" },
  { id: "projects", label: "Projects" },
  { id: "journey", label: "Journey" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-35% 0px -50% 0px" }
    );

    LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const go = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <>
      <header className={`nav ${scrolled ? "scrolled" : ""}`}>
        <nav className="nav-inner" aria-label="Primary Navigation">
          {/* AZM/B Brand Mark */}
          <a
            className="brand"
            href="#home"
            onClick={go("home")}
            aria-label={`Home — ${profile.name}`}
          >
            <span className="mk">{profile.brandMark}</span>
            <span className="brand-name">{profile.shortName}</span>
          </a>

          {/* Center Links */}
          <div className="nav-links">
            {LINKS.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={go(id)}
                className={active === id ? "active" : ""}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Right Action Bar */}
          <div className="nav-cta">
            <CommandPalette />
            <ThemeToggle />
            <a
              className="btn btn--ghost nav-cv-btn"
              href={site.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              <span>CV</span>
              <ArrowDown size={13} />
            </a>
            <a
              className="btn btn--primary nav-talk-btn"
              href="#contact"
              onClick={go("contact")}
            >
              Let&apos;s talk
            </a>
            <button
              className="burger"
              aria-label="Open mobile menu"
              aria-expanded={open}
              onClick={() => setOpen(true)}
            >
              <Menu size={19} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <div className={`mobile-panel ${open ? "open" : ""}`} role="dialog" aria-modal="true">
        <div className="mobile-header-bar">
          <div className="brand">
            <span className="mk">{profile.brandMark}</span>
            <span>{profile.shortName}</span>
          </div>
          <button
            className="mobile-close"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

        <div className="mobile-nav-list">
          {LINKS.map(({ id, label }, i) => (
            <a key={id} href={`#${id}`} onClick={go(id)}>
              <span>{label}</span>
              <span className="mono">0{i + 1}</span>
            </a>
          ))}
        </div>

        <div className="mobile-footer-actions">
          <a
            className="btn btn--primary"
            style={{ width: "100%", justifyContent: "center" }}
            href={site.resumePath}
            download
          >
            Download Résumé (PDF)
          </a>
        </div>
      </div>
    </>
  );
}
