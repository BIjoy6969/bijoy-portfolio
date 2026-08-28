export type Project = {
  slug: string;
  index: string;
  featured: boolean;
  tag: string;
  name: string;
  description: string;
  tech: string[];
  github: string; // "" -> button hidden
  demo: string; // "" -> "add URL" placeholder shown
  caseStudy: {
    overview: string;
    problem: string;
    solution: string;
    architecture: string;
    features: string[];
    challenges: string;
    implementation: string;
    outcome: string;
  };
};

// -----------------------------------------------------------------------------
// PROJECTS — add / edit here. To add a live demo, fill in `demo`.
// GitHub links point to the profile until per-repo URLs are known — replace
// `github` with the exact repository URL when available.
// -----------------------------------------------------------------------------
export const projects: Project[] = [
  {
    slug: "rentnest",
    index: "01",
    featured: true,
    tag: "Full-stack · MERN",
    name: "RentNest",
    description:
      "A full-stack house & apartment rental platform covering the complete listing-to-booking lifecycle, with role-based access for tenants, landlords and admins.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "REST APIs", "JWT"],
    github: "https://github.com/BIjoy6969",
    demo: "",
    caseStudy: {
      overview:
        "RentNest is an end-to-end rental marketplace built on the MERN stack. It handles the full journey from a landlord posting a property to a tenant completing a booking — with distinct experiences and permissions for each role.",
      problem:
        "Rental workflows involve several actors with very different needs, plus sensitive actions (approving applications, managing listings) that must be tightly permissioned. The challenge was modelling one coherent system for tenants, landlords and admins without the logic becoming tangled.",
      solution:
        "A REST API over well-structured MongoDB schemas, with JWT authentication and role-based access control cleanly separating what tenants, landlords and admins can do. Listing, search and multi-criteria filtering sit on top, alongside booking and rental-application workflows.",
      architecture:
        "React front-end ↔ Express REST API ↔ MongoDB. Stateless JWT auth guards every protected route; middleware resolves the caller's role before any action; schemas model users, listings, bookings, applications and messages.",
      features: [
        "JWT auth with role-based access control (Tenant / Landlord / Admin)",
        "Property listing, search and multi-criteria filtering",
        "Booking & rental-application workflows with status tracking",
        "In-app messaging between tenants and landlords",
        "Wishlists for saved properties",
      ],
      challenges:
        "Keeping authorization correct across three roles and many endpoints, and modelling application status transitions so state never drifts out of sync between users.",
      implementation:
        "Central auth middleware verifies the JWT and attaches the user's role; route guards enforce permissions declaratively. Filtering is composed server-side from query parameters into MongoDB queries so the client stays thin.",
      outcome:
        "A complete, coherent rental system demonstrating secure authentication, relational-style data modelling in MongoDB, and multi-role product thinking.",
    },
  },
  {
    slug: "travelmate",
    index: "02",
    featured: false,
    tag: "Full-stack · APIs",
    name: "TravelMate",
    description:
      "A smart travel planner that consolidates itinerary, weather, flights and budget into one personalised dashboard — with PDF export for downloadable trip reports.",
    tech: ["React", "TailwindCSS", "Node.js", "MongoDB", "Google Maps API", "OpenWeather"],
    github: "https://github.com/BIjoy6969",
    demo: "",
    caseStudy: {
      overview:
        "TravelMate turns scattered trip information into a single, personalised planning dashboard. It pulls live data from several external services and presents itinerary, weather, flight and spending insights side by side.",
      problem:
        "Planning a trip means juggling many disconnected sources — weather, currencies, flights, maps — each with its own async, differently-shaped response. Users need one calm view, not five browser tabs.",
      solution:
        "A React + Tailwind front-end backed by a Node REST API, integrating OpenWeather, currency-exchange, flight and Google Maps APIs. External responses are normalised into a consistent internal shape before reaching the UI.",
      architecture:
        "React/Tailwind client ↔ Node REST API (itinerary & budget) ↔ MongoDB, with a service layer that fans out to external APIs and reconciles their asynchronous responses.",
      features: [
        "Personalised dashboard: trip summary, weather, flights, spending",
        "Integrations: OpenWeather, currency exchange, flight & Google Maps APIs",
        "Normalised handling of asynchronous external responses",
        "REST APIs for itinerary and budget data",
        "PDF export for downloadable itineraries and budget reports",
      ],
      challenges:
        "Coordinating multiple third-party APIs with different latencies and payloads, and keeping the dashboard responsive while several requests resolve.",
      implementation:
        "A normalisation layer maps each external payload to a shared internal model, so the dashboard renders uniformly regardless of source. Budget and itinerary data persist through the Node API to MongoDB and export to PDF on demand.",
      outcome:
        "A polished planner showcasing real third-party API integration, async data orchestration and a genuinely useful consolidated view.",
    },
  },
  {
    slug: "3d-survival-shooter",
    index: "03",
    featured: false,
    tag: "Systems · Graphics",
    name: "3D Survival Shooter",
    description:
      "A real-time 3D game engine written from scratch in Python with PyOpenGL — render loop, input handling, enemy AI, combat and collision detection.",
    tech: ["Python", "PyOpenGL", "Computer Graphics", "Game AI"],
    github: "https://github.com/BIjoy6969",
    demo: "",
    caseStudy: {
      overview:
        "A real-time 3D survival shooter engineered in Python with PyOpenGL. It implements the core of a game engine — the render loop, input handling and state management — and layers combat, AI and progression on top.",
      problem:
        "Real-time graphics demand a tight, predictable loop: render, read input and update state every frame without stutter, while collision, scoring and enemy behaviour all stay in sync.",
      solution:
        "A hand-built render loop drives frame updates; input handling and explicit state management keep the simulation deterministic. Enemy AI, difficulty scaling and a full combat system sit on the engine core.",
      architecture:
        "PyOpenGL render loop → input handler → game-state update → draw. Systems for enemies, combat, collision, scoring and camera are modular around that central loop.",
      features: [
        "Real-time render loop, input handling & state management",
        "Enemy AI with three behaviour types (Normal, Fast, Tank)",
        "Dynamic difficulty scaling across multiple levels",
        "Combat & collision detection with shooting, health & scoring",
        "Power-ups, safe zones, HUD, cheat mode & multiple camera modes",
      ],
      challenges:
        "Maintaining a smooth frame loop while resolving collisions and driving multiple AI behaviour types, then scaling difficulty without breaking game feel.",
      implementation:
        "Enemy types are parameterised behaviours over shared movement logic; difficulty scales their speed and spawn pressure per level. Collision detection gates shooting, health and scoring each frame; multiple camera modes and a HUD round out the experience.",
      outcome:
        "A from-scratch 3D engine demonstrating computer-graphics fundamentals, real-time systems design and game-AI implementation in pure Python.",
    },
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
