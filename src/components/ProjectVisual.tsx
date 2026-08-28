// Abstract, project-specific SVG visuals. These evoke each project's concept
// without pretending to be real screenshots. All colours are design tokens.

export function ProjectVisual({ slug }: { slug: string }) {
  if (slug === "rentnest") return <RentNest />;
  if (slug === "travelmate") return <TravelMate />;
  if (slug === "3d-survival-shooter") return <Shooter />;
  return null;
}

function RentNest() {
  return (
    <svg viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <pattern id="rn-g" width="26" height="26" patternUnits="userSpaceOnUse">
          <path d="M26 0H0V26" fill="none" stroke="var(--grid-line)" />
        </pattern>
      </defs>
      <rect width="400" height="240" fill="url(#rn-g)" />
      <circle cx="120" cy="90" r="5" fill="var(--accent)" />
      <circle cx="250" cy="150" r="5" fill="var(--accent)" />
      <circle cx="300" cy="70" r="5" fill="var(--muted)" />
      <path d="M120 90 Q185 60 250 150" fill="none" stroke="var(--border-2)" strokeDasharray="3 4" />
      <g transform="translate(28,120)">
        <rect width="150" height="86" rx="10" fill="var(--bg-2)" stroke="var(--border-2)" />
        <rect x="14" y="14" width="60" height="40" rx="6" fill="var(--surface-2)" stroke="var(--border)" />
        <rect x="86" y="16" width="50" height="7" rx="3.5" fill="var(--muted)" />
        <rect x="86" y="30" width="38" height="6" rx="3" fill="var(--border-2)" />
        <rect x="14" y="64" width="70" height="10" rx="5" fill="var(--accent)" />
        <text x="20" y="72" fontFamily="monospace" fontSize="7" fill="var(--accent-ink)">BOOK</text>
      </g>
      <g transform="translate(232,28)">
        <rect width="140" height="30" rx="8" fill="var(--bg-2)" stroke="var(--border)" />
        <circle cx="18" cy="15" r="5" fill="var(--accent)" />
        <text x="32" y="19" fontFamily="monospace" fontSize="9" fill="var(--muted)">booking confirmed</text>
      </g>
    </svg>
  );
}

function TravelMate() {
  return (
    <svg viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M40 180 Q200 40 360 150" fill="none" stroke="var(--border-2)" strokeDasharray="4 5" />
      <circle cx="40" cy="180" r="6" fill="var(--muted)" />
      <circle cx="360" cy="150" r="6" fill="var(--accent)" />
      <g transform="translate(150,88) rotate(35)">
        <path d="M0 -8 L22 0 L0 8 L5 0 Z" fill="var(--accent)" />
      </g>
      <circle cx="300" cy="52" r="16" fill="none" stroke="var(--accent)" strokeWidth="2" />
      <g stroke="var(--accent)" strokeWidth="2">
        <path d="M300 28v-8M300 84v-8" />
      </g>
      <g transform="translate(28,32)">
        <rect width="120" height="70" rx="10" fill="var(--bg-2)" stroke="var(--border-2)" />
        <rect x="12" y="14" width="44" height="7" rx="3.5" fill="var(--muted)" />
        <rect x="12" y="30" width="96" height="6" rx="3" fill="var(--border-2)" />
        <rect x="12" y="42" width="70" height="6" rx="3" fill="var(--border-2)" />
        <rect x="12" y="54" width="84" height="6" rx="3" fill="var(--border)" />
      </g>
      <g transform="translate(250,170)">
        <rect width="120" height="44" rx="10" fill="var(--bg-2)" stroke="var(--border)" />
        <rect x="12" y="26" width="18" height="8" rx="2" fill="var(--accent)" />
        <rect x="34" y="18" width="18" height="16" rx="2" fill="var(--border-2)" />
        <rect x="56" y="12" width="18" height="22" rx="2" fill="var(--muted)" />
        <rect x="78" y="22" width="18" height="12" rx="2" fill="var(--border-2)" />
        <text x="12" y="12" fontFamily="monospace" fontSize="7" fill="var(--faint)">BUDGET</text>
      </g>
    </svg>
  );
}

function Shooter() {
  return (
    <svg viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="ss-hz" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="var(--bg-2)" />
          <stop offset="1" stopColor="var(--bg)" />
        </linearGradient>
      </defs>
      <rect width="400" height="240" fill="url(#ss-hz)" />
      <g stroke="var(--border-2)" strokeWidth="1" opacity="0.8">
        <path d="M0 150 L400 150" />
        <path d="M200 150 L60 240" />
        <path d="M200 150 L140 240" />
        <path d="M200 150 L200 240" />
        <path d="M200 150 L260 240" />
        <path d="M200 150 L340 240" />
        <path d="M0 175 L400 175" opacity="0.6" />
        <path d="M0 205 L400 205" opacity="0.4" />
      </g>
      <g stroke="var(--accent)" strokeWidth="2" fill="none">
        <circle cx="200" cy="110" r="14" />
        <path d="M200 90v-9M200 130v9M180 110h-9M220 110h9" />
      </g>
      <g transform="translate(24,24)">
        <rect width="120" height="10" rx="5" fill="var(--surface-2)" stroke="var(--border)" />
        <rect width="82" height="10" rx="5" fill="var(--accent)" />
        <text x="0" y="26" fontFamily="monospace" fontSize="8" fill="var(--muted)">HP 82</text>
      </g>
      <g transform="translate(300,24)">
        <text fontFamily="monospace" fontSize="8" fill="var(--muted)">AMMO 24/90</text>
        <rect y="8" width="76" height="8" rx="4" fill="var(--surface-2)" stroke="var(--border)" />
        <rect y="8" width="40" height="8" rx="4" fill="var(--muted)" />
      </g>
      <circle cx="120" cy="128" r="4" fill="#e5645f" />
      <circle cx="286" cy="120" r="4" fill="#e5645f" />
      <circle cx="330" cy="140" r="4" fill="#e5645f" />
    </svg>
  );
}
