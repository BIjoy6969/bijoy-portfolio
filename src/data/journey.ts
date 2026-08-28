export type JourneyItem = {
  year: string;
  category: "research" | "leadership" | "education" | "project";
  tag: string;
  title: string;
  subtitle: string;
  location?: string;
  period: string;
  description: string;
  highlights: string[];
  metrics?: string;
  badge?: string;
};

export const journeyTimeline: JourneyItem[] = [
  {
    year: "2018",
    category: "education",
    tag: "Secondary School",
    title: "Bogra Zilla School",
    subtitle: "Secondary School Certificate (SSC) · Science",
    period: "2010 — 2018",
    location: "Bogra, Bangladesh",
    badge: "GPA 5.00 / 5.00",
    description: "Completed foundational secondary school education with academic excellence in Science.",
    highlights: ["Achieved perfect GPA 5.00 / 5.00 in National Board Examinations."],
  },
  {
    year: "2020",
    category: "education",
    tag: "Higher Secondary",
    title: "Govt Shah Sultan College",
    subtitle: "Higher Secondary Certificate (HSC) · Science",
    period: "2018 — 2020",
    location: "Bogra, Bangladesh",
    badge: "GPA 5.00 / 5.00",
    description: "Completed higher secondary education in the Science division with top academic honors.",
    highlights: ["Achieved perfect GPA 5.00 / 5.00 in National Board Examinations."],
  },
  {
    year: "2022",
    category: "education",
    tag: "Academic Foundation",
    title: "BRAC University",
    subtitle: "B.Sc. in Computer Science & Engineering",
    period: "Apr 2022 — Present",
    location: "Dhaka, Bangladesh",
    badge: "CGPA 3.10 / 4.00",
    description:
      "Enrolled in a 4-year undergraduate degree in Computer Science and Engineering with coursework focused on Data Structures, Algorithms, Database Systems, Computer Networks, Operating Systems, and Machine Learning.",
    highlights: [
      "6th place in Intra BRAC University Programming Contest (2022).",
      "Solved 200+ algorithmic problems across HackerRank and competitive platforms.",
      "Awarded the Duke of Edinburgh's International Award (Bronze, Best Camper).",
    ],
  },
  {
    year: "2023",
    category: "leadership",
    tag: "Leadership",
    title: "Robotics Club of BRAC University (ROBU)",
    subtitle: "Junior Executive — Event Management",
    period: "Apr 2022 — Dec 2023",
    location: "Dhaka, Bangladesh",
    description:
      "Supported club operations, member recruitment drives, and event logistics coordination for university robotics exhibitions and tech competitions.",
    highlights: [
      "Assisted in managing recruitment, onboarding, and documentation for new club cohorts.",
      "Maintained internal communications and operational logistics during university competitions.",
    ],
  },
  {
    year: "2024",
    category: "leadership",
    tag: "Leadership & Community",
    title: "BRAC University Computer Club (BUCC)",
    subtitle: "Assistant Director — Event Management",
    period: "Apr 2024 — Dec 2024",
    location: "Dhaka, Bangladesh",
    metrics: "300+ Members",
    description:
      "Directed event management and logistical coordination for BRAC University's largest departmental club with over 300 active members, collaborating with faculty advisors and cross-functional teams.",
    highlights: [
      "Coordinated flagship departmental tech events and programming workshops.",
      "Managed volunteer pipelines, scheduling, and logistical execution at university scale.",
      "Bridged communication between executive committees, faculty members, and student participants.",
    ],
  },
  {
    year: "2025",
    category: "project",
    tag: "Full-Stack Development",
    title: "TravelMate & Full-Stack Systems",
    subtitle: "Smart Travel Planner & API Aggregation",
    period: "2025",
    location: "Dhaka, Bangladesh",
    description:
      "Designed and launched TravelMate, a comprehensive travel dashboard orchestrating real-time weather, flights, currency exchange, and mapping APIs into an integrated itinerary builder with PDF export.",
    highlights: [
      "Orchestrated 4+ third-party REST APIs asynchronously.",
      "Implemented client-side PDF document generation for offline itineraries.",
      "Engineered responsive UI systems with React and Tailwind CSS.",
    ],
  },
  {
    year: "2026",
    category: "research",
    tag: "Undergraduate Thesis",
    badge: "Current Focus",
    title: "Credit Card Fraud Detection & XAI",
    subtitle: "Thesis Research · Deep Learning & Explainable AI",
    period: "Jan 2026 — Present",
    location: "BRAC University",
    description:
      "Conducting undergraduate thesis research on extreme class-imbalanced transactional data using PyTorch, XGBoost, SMOTE, and PCA, with SHAP and LIME frameworks for model explainability and compliance auditing.",
    highlights: [
      "Engineered machine learning pipelines for extreme imbalance (fraud < 0.2%).",
      "Calibrated decision thresholds against Precision-Recall curves to minimize false negatives.",
      "Integrated SHAP & LIME interpretability for transparent risk attribution.",
    ],
  },
];
