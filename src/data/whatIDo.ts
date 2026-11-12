export type WhatIDoItem = {
  index: string;
  title: string;
  headline: string;
  description: string;
  technologies: string[];
  capabilities: string[];
};

export const whatIDoData: WhatIDoItem[] = [
  {
    index: "01",
    title: "Full-Stack Engineering",
    headline: "End-to-end web applications with robust backend foundations.",
    description:
      "Designing and implementing scalable full-stack web platforms. From relational and document schema design to stateless JWT authentication, role-based authorization, and fluid user interfaces.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "REST APIs", "Tailwind CSS", "JWT"],
    capabilities: [
      "Role-Based Access Control (RBAC)",
      "RESTful API design & integration",
      "Database schema modelling & indexing",
      "State management & responsive UI",
    ],
  },
  {
    index: "02",
    title: "Data Engineering & Applied ML",
    headline: "Clean, reliable data pipelines and predictive machine learning workflows.",
    description:
      "Designing end-to-end data sourcing, collection, preprocessing, and cleaning pipelines for AI workflows, alongside developing and evaluating machine learning models.",
    technologies: ["Python", "Data Sourcing", "Data Cleaning", "Preprocessing", "PyTorch", "TensorFlow", "Scikit-learn"],
    capabilities: [
      "Multi-source data sourcing & collection",
      "Automated data preprocessing & cleaning",
      "Schema consistency & data quality checks",
      "Model training & workflow automation",
    ],
  },
  {
    index: "03",
    title: "Software Engineering",
    headline: "Maintainable systems engineered for stability and scale.",
    description:
      "Writing clean, modular code with solid computer science fundamentals. Applying MVC architectural patterns, strict type-safety, algorithmic optimization, and structured debugging across the stack.",
    technologies: ["TypeScript", "JavaScript", "Python", "C++", "Git / GitHub", "Postman", "Linux"],
    capabilities: [
      "Data structures & algorithm design",
      "MVC & modular service architecture",
      "API contract verification & testing",
      "Asynchronous concurrency & error resilience",
    ],
  },
  {
    index: "04",
    title: "Creative Computing",
    headline: "Real-time graphics loops and interactive simulation systems.",
    description:
      "Exploring the mechanics of computer graphics and interactive systems by building game engine cores from the ground up in Python with PyOpenGL — including render loops, AI behaviors, and collision physics.",
    technologies: ["Python", "PyOpenGL", "Computer Graphics", "Game AI", "Linear Algebra"],
    capabilities: [
      "Real-time 60fps render loop architecture",
      "Coordinate transformations & camera systems",
      "State-machine enemy AI behaviors",
      "Spatial collision detection & physics",
    ],
  },
];
