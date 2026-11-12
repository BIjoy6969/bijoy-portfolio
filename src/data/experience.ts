import { journeyTimeline } from "./journey";

export const experience = journeyTimeline.filter(
  (item) => item.category === "experience" || item.category === "leadership"
);
