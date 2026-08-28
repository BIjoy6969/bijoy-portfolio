import { FraudResearchVisual } from "./FraudResearchVisual";

export function ProjectVisual({ slug }: { slug: string }) {
  if (slug === "rentnest") return <RentNestVisual />;
  if (slug === "fraud-detection") return <FraudResearchVisual />;
  if (slug === "travelmate") return <TravelMateVisual />;
  if (slug === "3d-survival-shooter") return <ShooterVisual />;
  return null;
}

function RentNestVisual() {
  return (
    <svg viewBox="0 0 440 260" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="proj-svg">
      <defs>
        <pattern id="rn-grid" width="28" height="28" patternUnits="userSpaceOnUse">
          <path d="M28 0H0V28" fill="none" stroke="var(--grid-line)" />
        </pattern>
        <linearGradient id="rn-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--surface-2)" />
          <stop offset="100%" stopColor="var(--bg-2)" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="url(#rn-grid)" />
      
      {/* Property Map / Listing Network Nodes */}
      <circle cx="110" cy="80" r="6" fill="var(--accent)" />
      <circle cx="110" cy="80" r="14" fill="none" stroke="var(--accent)" strokeOpacity="0.3" />
      <circle cx="280" cy="140" r="6" fill="var(--accent)" />
      <circle cx="340" cy="70" r="5" fill="var(--muted)" />
      <circle cx="180" cy="190" r="5" fill="var(--border-2)" />
      <path d="M110 80 Q190 40 280 140 T340 70" fill="none" stroke="var(--border-2)" strokeDasharray="4 4" />
      
      {/* Property Listing Card Simulation */}
      <g transform="translate(24,115)">
        <rect width="180" height="115" rx="12" fill="url(#rn-grad)" stroke="var(--border-2)" />
        <rect x="14" y="14" width="70" height="48" rx="8" fill="var(--surface-2)" stroke="var(--border)" />
        {/* Placeholder image lines */}
        <path d="M24 50 L44 32 L64 50" stroke="var(--muted)" strokeWidth="1.5" fill="none" opacity="0.6" />
        <circle cx="62" cy="26" r="4" fill="var(--accent)" opacity="0.8" />
        
        <rect x="94" y="16" width="68" height="8" rx="4" fill="var(--text)" opacity="0.9" />
        <rect x="94" y="30" width="50" height="6" rx="3" fill="var(--muted)" opacity="0.7" />
        <rect x="94" y="42" width="60" height="6" rx="3" fill="var(--border-2)" />
        
        <rect x="14" y="74" width="76" height="26" rx="7" fill="var(--accent)" />
        <text x="26" y="91" fontFamily="monospace" fontSize="9.5" fontWeight="700" fill="var(--accent-ink)">BOOK LEASE</text>
        <rect x="100" y="80" width="64" height="14" rx="4" fill="var(--surface-2)" />
        <text x="106" y="90" fontFamily="monospace" fontSize="8" fill="var(--accent-text)">★ 4.9 · Verified</text>
      </g>

      {/* Role-Based Badge */}
      <g transform="translate(230,24)">
        <rect width="180" height="42" rx="10" fill="var(--bg-2)" stroke="var(--border-2)" />
        <circle cx="22" cy="21" r="6" fill="#3dd68c" />
        <text x="36" y="18" fontFamily="monospace" fontSize="9" fontWeight="600" fill="var(--text)">RBAC: LANDLORD/TENANT</text>
        <text x="36" y="32" fontFamily="monospace" fontSize="8" fill="var(--muted)">Stateless JWT Auth Guard</text>
      </g>

      {/* Booking State Notification */}
      <g transform="translate(230,175)">
        <rect width="180" height="48" rx="10" fill="var(--bg-2)" stroke="var(--border)" />
        <rect x="12" y="12" width="24" height="24" rx="6" fill="var(--surface-2)" stroke="var(--accent)" strokeWidth="1" />
        <text x="18" y="28" fill="var(--accent)">✓</text>
        <text x="44" y="24" fontFamily="monospace" fontSize="8.5" fontWeight="600" fill="var(--text)">Application Approved</text>
        <text x="44" y="38" fontFamily="monospace" fontSize="7.5" fill="var(--muted)">Security Deposit Cleared</text>
      </g>
    </svg>
  );
}

function TravelMateVisual() {
  return (
    <svg viewBox="0 0 440 260" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="proj-svg">
      <defs>
        <linearGradient id="tm-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--surface-2)" />
          <stop offset="100%" stopColor="var(--bg)" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="url(#tm-sky)" />
      
      {/* Flight Arc & Coordinates */}
      <path d="M40 200 Q220 30 400 170" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="5 5" />
      <circle cx="40" cy="200" r="7" fill="var(--muted)" />
      <circle cx="400" cy="170" r="7" fill="var(--accent)" />
      <circle cx="400" cy="170" r="16" fill="none" stroke="var(--accent)" strokeOpacity="0.4" />

      {/* Airplane Silhouette */}
      <g transform="translate(215,86) rotate(22)">
        <path d="M0 -10 L26 0 L0 10 L6 0 Z" fill="var(--accent)" />
      </g>

      {/* Itinerary Dashboard Card */}
      <g transform="translate(24,28)">
        <rect width="165" height="120" rx="12" fill="var(--bg-2)" stroke="var(--border-2)" />
        <rect x="14" y="14" width="80" height="8" rx="4" fill="var(--text)" />
        <rect x="14" y="28" width="135" height="6" rx="3" fill="var(--border-2)" />
        
        {/* Day Schedule Blocks */}
        <rect x="14" y="44" width="135" height="18" rx="5" fill="var(--surface-2)" stroke="var(--border)" />
        <text x="22" y="56" fontFamily="monospace" fontSize="7.5" fill="var(--accent-text)">09:00 AM · Flight DAC → BKK</text>
        
        <rect x="14" y="68" width="135" height="18" rx="5" fill="var(--surface-2)" stroke="var(--border)" />
        <text x="22" y="80" fontFamily="monospace" fontSize="7.5" fill="var(--muted)">02:00 PM · Hotel Check-in</text>
        
        <rect x="14" y="92" width="60" height="16" rx="5" fill="var(--accent)" />
        <text x="20" y="103" fontFamily="monospace" fontSize="7.5" fontWeight="700" fill="var(--accent-ink)">EXPORT PDF</text>
      </g>

      {/* Multi-API Aggregation Cards */}
      <g transform="translate(250,28)">
        {/* Weather card */}
        <rect width="165" height="48" rx="10" fill="var(--bg-2)" stroke="var(--border)" />
        <circle cx="26" cy="24" r="9" fill="none" stroke="var(--accent)" strokeWidth="2" />
        <path d="M26 10v-3M26 41v-3M12 24h-3M43 24h-3" stroke="var(--accent)" strokeWidth="1.5" />
        <text x="44" y="20" fontFamily="monospace" fontSize="8.5" fontWeight="600" fill="var(--text)">Bangkok, TH</text>
        <text x="44" y="34" fontFamily="monospace" fontSize="8" fill="var(--muted)">28°C · Sunny (OpenWeather)</text>
      </g>

      {/* Budget & Currency Card */}
      <g transform="translate(250,90)">
        <rect width="165" height="70" rx="10" fill="var(--bg-2)" stroke="var(--border)" />
        <text x="14" y="18" fontFamily="monospace" fontSize="8" fill="var(--faint)">TRIP SPENDING BREAKDOWN</text>
        <rect x="14" y="28" width="30" height="28" rx="4" fill="var(--accent)" />
        <text x="20" y="46" fontFamily="monospace" fontSize="9" fontWeight="700" fill="var(--accent-ink)">$</text>
        <rect x="52" y="30" width="95" height="7" rx="3.5" fill="var(--border-2)" />
        <rect x="52" y="44" width="65" height="7" rx="3.5" fill="var(--accent)" opacity="0.8" />
      </g>
    </svg>
  );
}

function ShooterVisual() {
  return (
    <svg viewBox="0 0 440 260" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="proj-svg">
      <defs>
        <linearGradient id="ss-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0a0c10" />
          <stop offset="100%" stopColor="#141720" />
        </linearGradient>
      </defs>
      <rect width="440" height="260" fill="url(#ss-sky)" />
      
      {/* 3D Perspective Grid / Floor */}
      <g stroke="var(--border-2)" strokeWidth="1" opacity="0.7">
        <line x1="0" y1="150" x2="440" y2="150" />
        <line x1="220" y1="150" x2="40" y2="260" />
        <line x1="220" y1="150" x2="130" y2="260" />
        <line x1="220" y1="150" x2="220" y2="260" />
        <line x1="220" y1="150" x2="310" y2="260" />
        <line x1="220" y1="150" x2="400" y2="260" />
        <line x1="0" y1="175" x2="440" y2="175" strokeOpacity="0.5" />
        <line x1="0" y1="210" x2="440" y2="210" strokeOpacity="0.3" />
      </g>

      {/* Crosshair & Aim Target */}
      <g stroke="var(--accent)" strokeWidth="2" fill="none">
        <circle cx="220" cy="115" r="16" />
        <line x1="220" y1="92" x2="220" y2="82" />
        <line x1="220" y1="138" x2="220" y2="148" />
        <line x1="197" y1="115" x2="187" y2="115" />
        <line x1="243" y1="115" x2="253" y2="115" />
      </g>

      {/* AI Enemy Wireframes */}
      <g transform="translate(130,120)">
        <polygon points="12,0 24,20 0,20" fill="none" stroke="#e5645f" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="3" fill="#e5645f" />
        <text x="-4" y="32" fontFamily="monospace" fontSize="6.5" fill="#e5645f">CHASER AI</text>
      </g>
      <g transform="translate(300,110)">
        <rect width="26" height="26" rx="4" fill="none" stroke="#e5645f" strokeWidth="1.5" />
        <text x="-2" y="38" fontFamily="monospace" fontSize="6.5" fill="#e5645f">TANK AI</text>
      </g>

      {/* HUD System Overlay */}
      <g transform="translate(24,24)">
        <rect width="130" height="26" rx="7" fill="var(--bg-2)" stroke="var(--border)" />
        <rect x="6" y="6" width="118" height="14" rx="4" fill="var(--surface-2)" />
        <rect x="6" y="6" width="88" height="14" rx="4" fill="var(--accent)" />
        <text x="12" y="16" fontFamily="monospace" fontSize="8" fontWeight="700" fill="var(--accent-ink)">HEALTH 85%</text>
      </g>

      <g transform="translate(290,24)">
        <rect width="126" height="26" rx="7" fill="var(--bg-2)" stroke="var(--border)" />
        <text x="12" y="17" fontFamily="monospace" fontSize="8" fontWeight="600" fill="var(--text)">AMMO 28 / 120</text>
      </g>

      {/* Framerate & Engine Metric */}
      <g transform="translate(24,215)">
        <rect width="120" height="26" rx="6" fill="var(--bg-2)" stroke="var(--border)" />
        <circle cx="14" cy="13" r="4" fill="#3dd68c" />
        <text x="24" y="16" fontFamily="monospace" fontSize="7.5" fill="var(--muted)">60 FPS · PyOpenGL</text>
      </g>
    </svg>
  );
}
