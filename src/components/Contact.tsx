"use client";
import { useState } from "react";
import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { profile } from "@/data/profile";
import { site } from "@/data/site";

type Errors = Partial<Record<"name" | "email" | "subject" | "message", boolean>>;
const emailOk = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export function Contact() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<{ tone: "ok" | "bad" | ""; msg: string }>({ tone: "", msg: "" });
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    }).catch(() => {});
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ tone: "", msg: "" });
    const form = e.currentTarget;
    const data = new FormData(form);
    const honeypot = String(data.get("company") || "");
    if (honeypot) return; // bot trap

    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const subject = String(data.get("subject") || "").trim();
    const message = String(data.get("message") || "").trim();

    const errs: Errors = {
      name: !name, email: !emailOk(email), subject: !subject, message: message.length < 10,
    };
    setErrors(errs);
    if (Object.values(errs).some(Boolean)) {
      setStatus({ tone: "bad", msg: "Please fix the highlighted fields." });
      return;
    }

    setLoading(true);
    try {
      const endpoint = site.contactEndpoint || "/api/contact";
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });

      const result = await res.json().catch(() => ({}));

      if (!res.ok || result.success === false) {
        throw new Error(result.message || "Failed to send message.");
      }

      form.reset();
      setErrors({});
      setStatus({
        tone: "ok",
        msg: result.message || "Message sent — thanks, I'll be in touch soon.",
      });
    } catch (err: any) {
      setStatus({
        tone: "bad",
        msg: err.message || "Something went wrong. Please email me directly instead.",
      });
    } finally {
      setLoading(false);
    }
  };

  const links = [
    { Icon: Mail, cl: "Email", cv: profile.email, href: `mailto:${profile.email}`, copy: true },
    { Icon: Linkedin, cl: "LinkedIn", cv: "a-z-m-bodruddoza-bijoy-878409247", href: profile.linkedin, copy: false },
    { Icon: Github, cl: "GitHub", cv: site.githubUsername, href: profile.github, copy: false },
  ];

  return (
    <section className="section contact" id="contact">
      <div className="wrap">
        <div className="contact-grid">
          <div>
            <Reveal as="span"><span className="eyebrow">§ 08 — Contact</span></Reveal>
            <Reveal delay={0.05}>
              <h2 style={{ marginTop: 16 }}>Let&apos;s build something <span className="serif">meaningful.</span></h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="lede">
                Open to software-engineering roles, full-stack and AI/ML internships, and interesting
                collaborations. Drop a line — I usually reply within a day.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="contact-links">
                {links.map(({ Icon, cl, cv, href, copy }) => (
                  <a key={cl} className="clink" href={href}
                     {...(cl !== "Email" ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                    <span className="ci"><Icon size={18} /></span>
                    <span>
                      <span className="cl">{cl}</span><br />
                      <span className="cv">{cv}</span>
                    </span>
                    {copy ? (
                      <button type="button" className="copy" aria-label="Copy email address"
                        onClick={(e) => { e.preventDefault(); copyEmail(); }}>
                        {copied ? "Copied ✓" : "Copy"}
                      </button>
                    ) : (
                      <span className="copy" aria-hidden="true">↗</span>
                    )}
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <form className="form" onSubmit={onSubmit} noValidate>
              <div className="form-row">
                <div className={`field ${errors.name ? "err" : ""}`}>
                  <label htmlFor="name">Name</label>
                  <input id="name" name="name" type="text" autoComplete="name" />
                  {errors.name && <span className="msg">Please enter your name.</span>}
                </div>
                <div className={`field ${errors.email ? "err" : ""}`}>
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" autoComplete="email" />
                  {errors.email && <span className="msg">Enter a valid email address.</span>}
                </div>
              </div>
              <div className={`field ${errors.subject ? "err" : ""}`}>
                <label htmlFor="subject">Subject</label>
                <input id="subject" name="subject" type="text" />
                {errors.subject && <span className="msg">Add a short subject.</span>}
              </div>
              <div className={`field ${errors.message ? "err" : ""}`}>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" />
                {errors.message && <span className="msg">Write a message (min 10 characters).</span>}
              </div>
              <input className="hp" type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" />
              <button className={`btn btn--primary ${loading ? "loading" : ""}`} type="submit"
                      style={{ width: "100%", justifyContent: "center" }} disabled={loading}>
                {loading ? "Sending…" : "Send message"} {!loading && <ArrowUpRight className="ar" size={16} />}
              </button>
              <p className={`form-status ${status.tone}`} role="status" aria-live="polite">{status.msg}</p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
