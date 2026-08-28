"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { profile } from "@/data/profile";
import { site } from "@/data/site";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
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
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      <header className={`nav ${scrolled ? "scrolled" : ""}`}>
        <nav className="nav-inner" aria-label="Primary">
          <a className="brand" href="#home" onClick={go("home")} aria-label={`Home — ${profile.name}`}>
            <span className="mk">{profile.initials}</span>
            <span>{profile.shortName}</span>
          </a>
          <div className="nav-links">
            {LINKS.map(({ id, label }) => (
              <a key={id} href={`#${id}`} onClick={go(id)} className={active === id ? "active" : ""}>
                {label}
              </a>
            ))}
          </div>
          <div className="nav-cta">
            <ThemeToggle />
            <a className="btn btn--ghost" href={site.resumePath} download>Résumé</a>
            <a className="btn btn--primary" href="#contact" onClick={go("contact")}>Let&apos;s talk</a>
            <button className="burger" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(true)}>
              <Menu size={18} />
            </button>
          </div>
        </nav>
      </header>

      <div className={`mobile-panel ${open ? "open" : ""}`}>
        {LINKS.filter((l) => l.id !== "home").map(({ id, label }, i) => (
          <a key={id} href={`#${id}`} onClick={go(id)}>
            {label}
            <span className="mono">{String(i + 1).padStart(2, "0")}</span>
          </a>
        ))}
      </div>
      {open && (
        <button className="mobile-close" aria-label="Close menu" onClick={() => setOpen(false)}>
          <X size={20} />
        </button>
      )}
    </>
  );
}
