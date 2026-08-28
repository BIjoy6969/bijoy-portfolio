// -----------------------------------------------------------------------------
// GLOBAL SITE CONFIG — the few switches you'll touch most often.
// -----------------------------------------------------------------------------
export const site = {
  url: "https://example.com", // <-- set to your deployed domain (used for SEO/OG/sitemap)
  title:
    "A Z M Bodruddoza Bijoy — Computer Science Engineer & Full-Stack Developer",
  description:
    "Computer Science engineer building intelligent, scalable software — full-stack MERN applications, REST APIs and applied machine learning. Based in Dhaka, Bangladesh.",
  keywords: [
    "A Z M Bodruddoza Bijoy", "Full-Stack Developer", "Software Engineer",
    "MERN", "React", "Node.js", "Machine Learning", "PyTorch", "BRAC University", "Dhaka",
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
