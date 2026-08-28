export type Achievement = {
  big: string;
  suffix?: string;
  title: string;
  subtitle: string;
  body: string;
  category: "Competitive Programming" | "Contest" | "Honor" | "Leadership";
  icon: "trophy" | "medal" | "award" | "users";
};

export const achievements: Achievement[] = [
  {
    big: "200",
    suffix: "+",
    icon: "trophy",
    category: "Competitive Programming",
    title: "Algorithmic Problems Solved",
    subtitle: "HackerRank & Problem Solving",
    body: "Solved 200+ data structures and algorithm challenges across competitive platforms, building strong algorithmic intuition in C++ and Python.",
  },
  {
    big: "06",
    suffix: "th",
    icon: "medal",
    category: "Contest",
    title: "Intra BRAC Programming Contest",
    subtitle: "Competitive Programming (2022)",
    body: "Achieved 6th position out of participating university engineering teams in the annual Intra BRAC University Programming Contest.",
  },
  {
    big: "Bronze",
    suffix: "",
    icon: "award",
    category: "Honor",
    title: "Duke of Edinburgh's Int'l Award",
    subtitle: "Leadership & Community Recognition",
    body: "Awarded the Duke of Edinburgh's International Award (Bronze Standard) and recognized as Best Camper for outdoor leadership and community service.",
  },
  {
    big: "300",
    suffix: "+",
    icon: "users",
    category: "Leadership",
    title: "Club Members Coordinated",
    subtitle: "Assistant Director, BUCC",
    body: "Led event operations, logistics, and student coordination for BRAC University Computer Club, organizing tech seminars and coding workshops.",
  },
];
