import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";

const items = [
  { href: profile.github, label: "GitHub", Icon: Github, external: true },
  { href: profile.linkedin, label: "LinkedIn", Icon: Linkedin, external: true },
  { href: `mailto:${profile.email}`, label: "Email", Icon: Mail, external: false },
];

export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      {items.map(({ href, label, Icon, external }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          className="icon-link"
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          <Icon size={19} />
        </a>
      ))}
    </div>
  );
}
