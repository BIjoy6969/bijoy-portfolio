export type ProjectCategory = "all" | "fullstack" | "ml" | "systems" | "graphics";

export type Project = {
  slug: string;
  index: string;
  featured: boolean;
  isResearch?: boolean;
  category: ProjectCategory;
  tag: string;
  name: string;
  headline: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  stats?: { label: string; value: string }[];
  caseStudy: {
    overview: string;
    problem: string;
    goal?: string;
    solution: string;
    architecture: string;
    features: string[];
    challenges: string;
    implementation: string;
    outcome: string;
    pipeline?: { step: string; title: string; desc: string }[];
    metrics?: { name: string; value: string; note: string }[];
  };
};

export const projectCategories: { id: ProjectCategory; label: string }[] = [
  { id: "all", label: "All Projects" },
  { id: "fullstack", label: "Full-Stack" },
  { id: "ml", label: "AI / ML & Research" },
  { id: "systems", label: "Systems" },
  { id: "graphics", label: "Graphics" },
];

export const projects: Project[] = [
  {
    slug: "rentnest",
    index: "01",
    featured: true,
    category: "fullstack",
    tag: "Full-Stack · MERN",
    name: "RentNest",
    headline: "End-to-end property rental marketplace with role-based governance.",
    description:
      "A full-stack house and apartment rental platform covering the complete listing-to-booking lifecycle, featuring granular role-based access control for tenants, landlords, and administrators.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "REST APIs", "JWT", "Tailwind CSS"],
    github: "https://github.com/BIjoy6969",
    demo: "",
    stats: [
      { label: "Architecture", value: "MVC Pattern" },
      { label: "Auth", value: "JWT + RBAC" },
      { label: "Entities", value: "5+ Schemas" },
    ],
    caseStudy: {
      overview:
        "RentNest is an end-to-end property rental marketplace engineered on the MERN stack. It streamlines the entire rental lifecycle from landlord property listing and multi-criteria tenant search to rental applications, lease status tracking, and booking completion.",
      problem:
        "Rental workflows involve distinct stakeholders (tenants, landlords, admins) with conflicting security requirements and permissions. Without strict boundary controls, landlords could inadvertently modify unauthorized listings or tenants could access private booking data.",
      goal:
        "Architect a centralized, secure web application that guarantees data privacy across user roles while offering an intuitive, high-performance search and booking workflow.",
      solution:
        "Implemented a decoupled architecture with a React front-end communicating with an Express/Node.js REST API over MongoDB. Enforced stateless JWT authentication with custom role-checking middleware to secure sensitive actions.",
      architecture:
        "React Client (Single Page Application) ↔ Express.js REST API Layer ↔ MongoDB Database. The backend follows MVC architecture with centralized route guards, controllers for business logic, and Mongoose models for User, Listing, Booking, Application, and Message entities.",
      features: [
        "JWT-based Authentication with Role-Based Access Control (Tenant, Landlord, Admin)",
        "Advanced multi-criteria property search and filtering (price, location, property type, amenities)",
        "Complete rental application submission, review, and status tracking workflow",
        "Direct in-app messaging between tenants and landlords with conversation history",
        "Wishlist system for saving and comparing prospective rental properties",
        "Responsive administrative dashboard for listing moderation and user account control",
      ],
      challenges:
        "Ensuring state consistency across asynchronous application status transitions (pending, approved, rejected, booked) while keeping database queries efficient during complex multi-field filtering.",
      implementation:
        "Centralized authentication middleware verifies tokens and attaches role claims before routing to handlers. Server-side MongoDB query builders dynamically construct indexed aggregation queries based on request query parameters.",
      outcome:
        "A robust, production-ready rental platform demonstrating full-stack engineering proficiency, schema design in MongoDB, secure authorization flows, and clean component composition in React.",
    },
  },
  {
    slug: "fraud-detection",
    index: "02",
    featured: true,
    isResearch: true,
    category: "ml",
    tag: "Thesis / Research · Deep Learning & XAI",
    name: "Credit Card Fraud Detection & XAI",
    headline: "Explainable deep learning research on extreme class-imbalanced financial transactions.",
    description:
      "Undergraduate thesis research utilizing deep learning and XGBoost with SMOTE and PCA for fraud classification, featuring precision-recall threshold optimization and Explainable AI (SHAP & LIME) for transparent decision auditing.",
    tech: ["Python", "PyTorch", "TensorFlow", "Scikit-learn", "XGBoost", "SHAP", "LIME", "SMOTE", "PCA"],
    github: "https://github.com/BIjoy6969",
    demo: "",
    stats: [
      { label: "Focus", value: "Class Imbalance" },
      { label: "Explainability", value: "SHAP & LIME" },
      { label: "Optimization", value: "PR-Threshold" },
    ],
    caseStudy: {
      overview:
        "An applied machine learning research thesis investigating credit card fraud detection in highly imbalanced transactional datasets. The research compares Deep Neural Networks (DNN) against gradient-boosted ensembles (XGBoost), addresses extreme data skew with SMOTE and PCA, optimizes classification thresholds for financial risk, and integrates SHAP and LIME for transparent model explainability.",
      problem:
        "Fraudulent transactions typically account for less than 0.2% of total volume. Standard classifiers trained on such extreme class imbalance suffer from high false-negative rates, and complex deep models operate as black boxes, preventing compliance audits and root-cause explanations.",
      goal:
        "Build a robust fraud classification pipeline that maximizes recall and precision on rare fraud events while providing interpretable explanations for why any transaction was flagged.",
      solution:
        "Constructed an end-to-end pipeline: data preprocessing and scaling → SMOTE oversampling of the minority class → PCA dimensionality exploration → Deep Neural Network & XGBoost model training → Precision-Recall curve threshold optimization → Global and Local explainability via SHAP values and LIME surrogate models.",
      architecture:
        "Raw Transaction Stream → Preprocessing & Feature Normalization → SMOTE Synthetic Resampling → PyTorch DNN / XGBoost Classifier → Custom Threshold Calibrator (optimal F1/Recall) → SHAP Tree/Kernel Explainer + LIME Local Explanations → Auditable Output Report.",
      features: [
        "Advanced preprocessing and feature scaling on multi-dimensional transaction data",
        "Synthetic Minority Over-sampling Technique (SMOTE) balancing rare fraud patterns",
        "Deep Neural Network (DNN) architectures implemented in PyTorch and TensorFlow",
        "XGBoost gradient boosting classifier with hyperparameter tuning",
        "Precision-Recall threshold calibration tailored to minimize financial risk loss",
        "SHAP (SHapley Additive exPlanations) for global feature importance and interaction values",
        "LIME (Local Interpretable Model-agnostic Explanations) for individual transaction transparency",
      ],
      challenges:
        "Preventing synthetic oversampling from introducing unrealistic variance into the decision space, and balancing computational overhead when calculating Shapley values across thousands of features.",
      implementation:
        "Applied SMOTE strictly to training folds to eliminate data leakage. Optimized classification thresholds using cross-validated Precision-Recall curves rather than default 0.5 probability cuts. Deployed TreeSHAP for accelerated explainability calculation on tree models.",
      outcome:
        "A rigorous academic research project demonstrating deep knowledge of machine learning methodologies, statistical evaluation on imbalanced data, and modern Explainable AI standards.",
      pipeline: [
        { step: "01", title: "Data Ingestion & PCA", desc: "Normalized PCA-transformed transaction features to handle privacy-safe continuous distributions." },
        { step: "02", title: "SMOTE Resampling", desc: "Synthesized minority class samples to prevent majority-class bias without duplicate overfitting." },
        { step: "03", title: "Deep Learning & XGBoost", desc: "Trained multi-layer PyTorch neural nets and gradient-boosted decision trees with early stopping." },
        { step: "04", title: "Threshold Tuning", desc: "Calibrated decision boundaries against PR curves to maximize fraud detection while controlling false alerts." },
        { step: "05", title: "XAI Transparency", desc: "Generated SHAP summary plots and local LIME explanations identifying top predictive signals." },
      ],
    },
  },
  {
    slug: "travelmate",
    index: "03",
    featured: true,
    category: "fullstack",
    tag: "Full-Stack · API Orchestration",
    name: "TravelMate",
    headline: "Smart travel planning platform aggregating real-time flights, weather, and budget.",
    description:
      "A full-stack travel planning platform consolidating itinerary creation, live weather forecasts, flight data, currency conversion, and budget tracking into an integrated dashboard with downloadable PDF reports.",
    tech: ["React", "Tailwind CSS", "Node.js", "MongoDB", "Google Maps API", "OpenWeather API", "REST APIs"],
    github: "https://github.com/BIjoy6969",
    demo: "",
    stats: [
      { label: "APIs", value: "4+ Services" },
      { label: "Export", value: "PDF Itinerary" },
      { label: "UI", value: "Tailwind CSS" },
    ],
    caseStudy: {
      overview:
        "TravelMate simplifies trip planning by consolidating scattered information into a single, intuitive travel dashboard. It pulls real-time data from weather, flight, mapping, and currency conversion APIs to give travelers a holistic view of their itinerary and budget.",
      problem:
        "Travelers often juggle 5+ separate tabs for flights, weather, maps, and expenses, resulting in fragmented information and difficult budget tracking.",
      goal:
        "Create a centralized platform that normalizes disparate external API responses into an easy-to-use itinerary with persistent cloud storage and offline export capabilities.",
      solution:
        "Built a responsive React interface powered by a Node.js/Express backend that orchestrates external third-party requests and stores user trips, expenses, and milestones in MongoDB.",
      architecture:
        "React Frontend (Tailwind UI) ↔ Node.js API Gateway (Request Orchestration & Caching) ↔ External APIs (OpenWeather, Google Maps, Exchange Rates) ↔ MongoDB Database (Itineraries & Expenses).",
      features: [
        "Interactive day-by-day itinerary builder with draggable activity schedules",
        "Live weather forecast integration via OpenWeather API for destination cities",
        "Real-time currency exchange conversion and category-based expense tracker",
        "Google Maps integration for visual route planning and location markers",
        "One-click PDF generation for downloading itineraries and budget summaries for offline use",
      ],
      challenges:
        "Managing multiple asynchronous external API calls with differing response latencies and payload formats without degrading front-end rendering performance.",
      implementation:
        "Implemented an API proxy layer on the Node server to cache external responses and normalize distinct third-party data structures into a unified schema for the client.",
      outcome:
        "A polished full-stack application demonstrating practical third-party API integration, asynchronous data orchestration, and PDF document generation.",
    },
  },
  {
    slug: "3d-survival-shooter",
    index: "04",
    featured: true,
    category: "graphics",
    tag: "Systems · Computer Graphics",
    name: "3D Survival Shooter",
    headline: "Real-time 3D game engine engineered from scratch in Python with PyOpenGL.",
    description:
      "A custom-built real-time 3D game engine implementing core graphics rendering loops, coordinate transformations, enemy AI state machines, dynamic difficulty scaling, and spatial collision physics.",
    tech: ["Python", "PyOpenGL", "Computer Graphics", "Game AI", "Linear Algebra"],
    github: "https://github.com/BIjoy6969",
    demo: "",
    stats: [
      { label: "Framerate", value: "Target 60 FPS" },
      { label: "Engine", value: "Custom Built" },
      { label: "Graphics", value: "PyOpenGL" },
    ],
    caseStudy: {
      overview:
        "A real-time 3D survival shooter designed and implemented from the ground up in Python using PyOpenGL. The project demonstrates the foundational principles of computer graphics, real-time game loops, camera transformations, state machines, and mathematical collision detection without reliance on commercial game engines.",
      problem:
        "Building a 3D game from low-level OpenGL bindings requires hand-crafting the render pipeline, timing cycles, matrix calculations, and spatial collision detection from raw mathematical principles.",
      goal:
        "Engineer a deterministic, smooth 60fps real-time 3D graphics loop supporting multiple interactive entities, camera viewports, and AI behaviors.",
      solution:
        "Architected a modular game engine structured around a central game loop: input processing → physics & AI state updates → collision resolution → OpenGL buffer rendering.",
      architecture:
        "Game Engine Core (Delta-time Loop) → Input Subsystem (Keyboard & Mouse) → World Simulation (Player, Enemies, Projectiles) → Collision Engine (Bounding Spheres/Boxes) → PyOpenGL Draw Pipeline (Perspective Projection, Lighting, HUD Overlay).",
      features: [
        "Real-time 60fps render loop with deterministic delta-time frame pacing",
        "Enemy AI with three distinct behavior profiles (Normal patrol, Fast chaser, Heavy tank)",
        "Dynamic difficulty scaling with wave-based enemy spawn mechanics",
        "Combat system with projectile physics, hit detection, health depletion, and score counting",
        "Power-up collectibles, safe zone mechanics, and cheat-code debug overlays",
        "Multiple camera perspectives (First-person view, Third-person chase, Overhead tactical)",
      ],
      challenges:
        "Optimizing frame rendering and collision checks in interpreted Python to avoid stutter and maintain consistent frame rates during multi-enemy waves.",
      implementation:
        "Employed spatial partitioning and lightweight bounding sphere checks for quick collision pruning before precise geometry testing. Organized OpenGL state calls to minimize pipeline flushes.",
      outcome:
        "A complete 3D graphics simulation demonstrating mastery of computer graphics mathematics, low-level OpenGL programming, and real-time interactive systems.",
    },
  },
];

export const moreWork = [
  {
    title: "MERN Authentication & RBAC Microservice",
    category: "Full-Stack",
    description: "Stateless JWT authentication template with refresh token rotation, password hashing, and declarative permission middleware.",
    tech: ["Node.js", "Express.js", "MongoDB", "JWT", "Bcrypt"],
    github: "https://github.com/BIjoy6969",
  },
  {
    title: "Exploratory Data Analysis & Classifier Suite",
    category: "AI / ML",
    description: "Benchmark comparison of Random Forest, SVM, and Logistic Regression on multi-class tabular datasets with hyperparameter tuning.",
    tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Seaborn"],
    github: "https://github.com/BIjoy6969",
  },
  {
    title: "Algorithmic Problem Solutions Repository",
    category: "Computer Science",
    description: "Curated collection of 200+ competitive programming and data structure problem solutions in C++ and Python from HackerRank and contests.",
    tech: ["C++", "Python", "Data Structures", "Algorithms"],
    github: "https://github.com/BIjoy6969",
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
