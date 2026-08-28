import type { Config } from "tailwindcss";

/**
 * Tailwind is used for LAYOUT utilities only. All colour/typography design
 * tokens live as CSS variables in globals.css so the whole theme (and the
 * single accent colour) can be changed from one place.
 */
const config: Config = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
        serif: ["var(--font-serif)"],
      },
      colors: {
        bg: "var(--bg)",
        "bg-2": "var(--bg-2)",
        surface: "var(--surface)",
        border: "var(--border)",
        text: "var(--text)",
        muted: "var(--muted)",
        faint: "var(--faint)",
        accent: "var(--accent)",
      },
      maxWidth: { content: "1200px" },
    },
  },
  plugins: [],
};
export default config;
