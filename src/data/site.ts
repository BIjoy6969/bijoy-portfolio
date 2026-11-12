// -----------------------------------------------------------------------------
// GLOBAL SITE CONFIG — the few switches you'll touch most often.
// -----------------------------------------------------------------------------
export const site = {
  url: "https://azmbijoyportfolio.netlify.app",
  title:
    "A Z M Bodruddoza Bijoy — Full-Stack & Data Engineer",
  description:
    "Computer Science undergraduate and Data Engineer Intern at Potaka.ai Limited building scalable full-stack MERN systems, data pipelines, and applied machine learning. Based in Dhaka, Bangladesh.",
  keywords: [
    "A Z M Bodruddoza Bijoy", "Full-Stack Developer", "Data Engineer", "Software Engineer",
    "MERN", "React", "Node.js", "Data Pipelines", "Potaka.ai Limited", "BRAC University", "Dhaka",
  ],
  ogImage: "/og.png", // add an og.png to /public for rich social previews

  resumePath: "/resume.pdf", // drop your resume.pdf into /public
  githubUsername: "BIjoy6969",

  // Contact form: "/api/contact" (routes to your email azmbodruddozabijoy@gmail.com)
  // Or use a Formspree / Resend URL.
  contactEndpoint: "/api/contact",

  // The one accent colour. Change it here AND in globals.css (--accent).
  accent: "#f3b23c",
} as const;
