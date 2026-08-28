"use client";
import { useEffect, useState, useRef } from "react";
import {
  Search,
  FolderGit2,
  User,
  Sparkles,
  Milestone,
  Wrench,
  Award,
  Github,
  Mail,
  FileDown,
  SunMoon,
  ExternalLink,
  X,
  Command,
} from "lucide-react";
import { site } from "@/data/site";
import { profile } from "@/data/profile";

type CommandItem = {
  id: string;
  category: "Navigation" | "Actions" | "Socials";
  icon: any;
  label: string;
  sublabel?: string;
  action: () => void;
};

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleTheme = () => {
    const html = document.documentElement;
    const current = html.getAttribute("data-theme") || "dark";
    const next = current === "dark" ? "light" : "dark";
    html.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
    setIsOpen(false);
  };

  const commands: CommandItem[] = [
    // Navigation
    {
      id: "nav-home",
      category: "Navigation",
      icon: User,
      label: "Home / Overview",
      sublabel: "Jump to hero introduction",
      action: () => scrollTo("home"),
    },
    {
      id: "nav-about",
      category: "Navigation",
      icon: Sparkles,
      label: "About & Story",
      sublabel: "Personal story & current exploration",
      action: () => scrollTo("about"),
    },
    {
      id: "nav-what-i-do",
      category: "Navigation",
      icon: Wrench,
      label: "What I Do",
      sublabel: "Engineering disciplines & capabilities",
      action: () => scrollTo("what-i-do"),
    },
    {
      id: "nav-projects",
      category: "Navigation",
      icon: FolderGit2,
      label: "Selected Projects",
      sublabel: "RentNest, Fraud Detection, TravelMate, 3D Engine",
      action: () => scrollTo("projects"),
    },
    {
      id: "nav-journey",
      category: "Navigation",
      icon: Milestone,
      label: "My Journey (Timeline)",
      sublabel: "Academic, research & leadership milestones",
      action: () => scrollTo("journey"),
    },
    {
      id: "nav-skills",
      category: "Navigation",
      icon: Wrench,
      label: "Technical Skills",
      sublabel: "Core stack, ML frameworks & CS foundations",
      action: () => scrollTo("skills"),
    },
    {
      id: "nav-achievements",
      category: "Navigation",
      icon: Award,
      label: "Achievements & Honors",
      sublabel: "Contests, algorithmic milestones & awards",
      action: () => scrollTo("achievements"),
    },
    {
      id: "nav-github",
      category: "Navigation",
      icon: Github,
      label: "GitHub Repositories & Activity",
      sublabel: `@${site.githubUsername} live activity`,
      action: () => scrollTo("github"),
    },
    {
      id: "nav-contact",
      category: "Navigation",
      icon: Mail,
      label: "Contact & Inquiries",
      sublabel: "Send a direct message",
      action: () => scrollTo("contact"),
    },

    // Actions
    {
      id: "act-resume",
      category: "Actions",
      icon: FileDown,
      label: "Download Résumé (PDF)",
      sublabel: "Direct PDF download",
      action: () => {
        window.open(site.resumePath, "_blank");
        setIsOpen(false);
      },
    },
    {
      id: "act-theme",
      category: "Actions",
      icon: SunMoon,
      label: "Toggle Theme",
      sublabel: "Switch between Dark & Light mode",
      action: toggleTheme,
    },
    {
      id: "act-email",
      category: "Actions",
      icon: Mail,
      label: `Copy Email (${profile.email})`,
      sublabel: "Copy to clipboard",
      action: () => {
        navigator.clipboard.writeText(profile.email);
        setIsOpen(false);
      },
    },

    // Socials
    {
      id: "soc-github",
      category: "Socials",
      icon: Github,
      label: "GitHub Profile",
      sublabel: profile.github,
      action: () => {
        window.open(profile.github, "_blank", "noopener,noreferrer");
        setIsOpen(false);
      },
    },
    {
      id: "soc-linkedin",
      category: "Socials",
      icon: ExternalLink,
      label: "LinkedIn Profile",
      sublabel: profile.linkedin,
      action: () => {
        window.open(profile.linkedin, "_blank", "noopener,noreferrer");
        setIsOpen(false);
      },
    },
  ];

  const filteredCommands = commands.filter(
    (cmd) =>
      cmd.label.toLowerCase().includes(query.toLowerCase()) ||
      (cmd.sublabel && cmd.sublabel.toLowerCase().includes(query.toLowerCase())) ||
      cmd.category.toLowerCase().includes(query.toLowerCase())
  );

  // Keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  // Arrow key navigation inside menu
  const handleInputKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev < filteredCommands.length - 1 ? prev + 1 : 0
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev > 0 ? prev - 1 : filteredCommands.length - 1
      );
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filteredCommands[selectedIndex]) {
        filteredCommands[selectedIndex].action();
      }
    }
  };

  return (
    <>
      <button
        type="button"
        className="cmd-trigger-btn"
        aria-label="Open Command Palette (Ctrl+K or Cmd+K)"
        onClick={() => setIsOpen(true)}
      >
        <Command size={13} />
        <span className="cmd-k-text">
          <kbd>⌘</kbd>
          <kbd>K</kbd>
        </span>
      </button>

      {isOpen && (
        <div
          className="cmd-backdrop"
          onClick={() => setIsOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Command Palette"
        >
          <div
            className="cmd-dialog"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={handleInputKeyDown}
          >
            <div className="cmd-header">
              <Search className="cmd-search-icon" size={18} />
              <input
                ref={inputRef}
                type="text"
                className="cmd-input"
                placeholder="Type a command or jump to section..."
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
              />
              <button
                type="button"
                className="cmd-close-btn"
                onClick={() => setIsOpen(false)}
                aria-label="Close command palette"
              >
                <X size={16} />
              </button>
            </div>

            <div className="cmd-list">
              {filteredCommands.length === 0 ? (
                <div className="cmd-empty">
                  No commands found for &ldquo;{query}&rdquo;
                </div>
              ) : (
                filteredCommands.map((cmd, idx) => {
                  const Icon = cmd.icon;
                  const isSelected = idx === selectedIndex;
                  return (
                    <button
                      key={cmd.id}
                      type="button"
                      className={`cmd-item ${isSelected ? "selected" : ""}`}
                      onClick={() => cmd.action()}
                      onMouseEnter={() => setSelectedIndex(idx)}
                    >
                      <span className="cmd-item-icon">
                        <Icon size={16} />
                      </span>
                      <div className="cmd-item-text">
                        <span className="cmd-item-label">{cmd.label}</span>
                        {cmd.sublabel && (
                          <span className="cmd-item-sub">{cmd.sublabel}</span>
                        )}
                      </div>
                      <span className="cmd-item-cat">{cmd.category}</span>
                    </button>
                  );
                })
              )}
            </div>

            <div className="cmd-footer">
              <span>
                <kbd>↑</kbd> <kbd>↓</kbd> Navigate
              </span>
              <span>
                <kbd>↵</kbd> Select
              </span>
              <span>
                <kbd>esc</kbd> Close
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
