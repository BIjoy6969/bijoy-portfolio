import { journeyTimeline } from "./journey";

export const experience = journeyTimeline.filter(
  (item) => item.category === "leadership" || item.category === "research"
);
