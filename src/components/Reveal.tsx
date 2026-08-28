"use client";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

/** Scroll-triggered reveal. Respects prefers-reduced-motion automatically. */
export function Reveal({
  children, delay = 0, className, as = "div",
}: { children: ReactNode; delay?: number; className?: string; as?: "div" | "span" | "li" }) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      initial={reduce ? false : { opacity: 0, y: 22 }}
      whileInView={reduce ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </MotionTag>
  );
}
