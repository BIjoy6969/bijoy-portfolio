export type SkillCategory = "core" | "web" | "ml" | "tools" | "cs";

export const skillCategories: { id: SkillCategory | "all"; label: string }[] = [
  { id: "all", label: "All Skills" },
  { id: "core", label: "Core Languages" },
  { id: "web", label: "Web & Backend" },
  { id: "ml", label: "AI / ML & Data" },
  { id: "tools", label: "Databases & Tools" },
  { id: "cs", label: "Computer Science" },
];

export type Skill = {
  name: string;
  category: SkillCategory;
  level: "Core" | "Applied" | "Proficient" | "Foundational";
  usedIn?: string[]; // Project slugs where this skill is demonstrated
};

export const skills: Skill[] = [
  // Core Languages
  { name: "JavaScript", category: "core", level: "Core", usedIn: ["rentnest", "travelmate"] },
  { name: "Python", category: "core", level: "Core", usedIn: ["fraud-detection", "3d-survival-shooter"] },
  { name: "TypeScript", category: "core", level: "Proficient", usedIn: ["rentnest"] },
  { name: "C++", category: "core", level: "Proficient", usedIn: [] },

  // Web & Backend
  { name: "React", category: "web", level: "Core", usedIn: ["rentnest", "travelmate"] },
  { name: "Node.js", category: "web", level: "Core", usedIn: ["rentnest", "travelmate"] },
  { name: "Express.js", category: "web", level: "Core", usedIn: ["rentnest", "travelmate"] },
  { name: "MERN Stack", category: "web", level: "Core", usedIn: ["rentnest"] },
  { name: "REST APIs", category: "web", level: "Core", usedIn: ["rentnest", "travelmate"] },
  { name: "Tailwind CSS", category: "web", level: "Core", usedIn: ["travelmate"] },
  { name: "JWT Auth", category: "web", level: "Core", usedIn: ["rentnest"] },
  { name: "FastAPI", category: "web", level: "Applied", usedIn: [] },

  // AI / ML & Data
  { name: "PyTorch", category: "ml", level: "Applied", usedIn: ["fraud-detection"] },
  { name: "TensorFlow", category: "ml", level: "Applied", usedIn: ["fraud-detection"] },
  { name: "Scikit-learn", category: "ml", level: "Applied", usedIn: ["fraud-detection"] },
  { name: "XGBoost", category: "ml", level: "Applied", usedIn: ["fraud-detection"] },
  { name: "SHAP & LIME", category: "ml", level: "Applied", usedIn: ["fraud-detection"] },
  { name: "SMOTE & PCA", category: "ml", level: "Applied", usedIn: ["fraud-detection"] },
  { name: "Data Preprocessing", category: "ml", level: "Applied", usedIn: ["fraud-detection"] },

  // Databases & Tools
  { name: "MongoDB", category: "tools", level: "Core", usedIn: ["rentnest", "travelmate"] },
  { name: "MySQL", category: "tools", level: "Proficient", usedIn: [] },
  { name: "SQLite", category: "tools", level: "Proficient", usedIn: [] },
  { name: "Git & GitHub", category: "tools", level: "Core", usedIn: ["rentnest", "fraud-detection", "travelmate", "3d-survival-shooter"] },
  { name: "Postman", category: "tools", level: "Core", usedIn: ["rentnest", "travelmate"] },
  { name: "PyOpenGL", category: "tools", level: "Applied", usedIn: ["3d-survival-shooter"] },
  { name: "Linux / Shell", category: "tools", level: "Proficient", usedIn: [] },

  // Core Computer Science
  { name: "Data Structures", category: "cs", level: "Foundational", usedIn: ["3d-survival-shooter"] },
  { name: "Algorithms", category: "cs", level: "Foundational", usedIn: ["3d-survival-shooter"] },
  { name: "OOP (Object-Oriented)", category: "cs", level: "Foundational", usedIn: ["rentnest", "3d-survival-shooter"] },
  { name: "Database Systems", category: "cs", level: "Foundational", usedIn: ["rentnest"] },
  { name: "Operating Systems", category: "cs", level: "Foundational", usedIn: [] },
  { name: "Computer Networks", category: "cs", level: "Foundational", usedIn: ["rentnest", "travelmate"] },
  { name: "Computer Graphics", category: "cs", level: "Foundational", usedIn: ["3d-survival-shooter"] },
  { name: "Software Engineering", category: "cs", level: "Foundational", usedIn: ["rentnest", "travelmate"] },
];
