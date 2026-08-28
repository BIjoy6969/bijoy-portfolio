export const profile = {
  name: "A Z M Bodruddoza Bijoy",
  shortName: "Bijoy",
  initials: "BB",
  role: "Computer Science Engineer & Full-Stack Developer",
  location: "Dhaka, Bangladesh",
  status: "Open to software & ML opportunities",

  email: "azmbodruddozabijoy@gmail.com",
  phone: "+880 1648 583672",
  github: "https://github.com/BIjoy6969",
  linkedin: "https://www.linkedin.com/in/a-z-m-bodruddoza-bijoy",

  // Hero — the accentWord renders in the italic serif accent face.
  headline: { pre: "Full-stack engineer building", accentWord: "intelligent,", post: "scalable software." },
  lede:
    "Computer Science undergraduate at BRAC University. I ship production-grade web apps with the MERN stack and build applied ML with PyTorch — from REST APIs and secure auth to real-time systems.",

  // About — three editorial blocks.
  about: {
    lead: "A Computer Science undergraduate who builds across the whole stack — turning ambiguous problems into scalable, maintainable systems, from the database schema to the interface.",
    blocks: [
      { no: "01", title: "Who I am", body: "CSE undergraduate at BRAC University with a strong software-engineering foundation and hands-on experience across full-stack development and applied machine learning." },
      { no: "02", title: "What I build", body: "Full-stack MERN applications, RESTful APIs, secure JWT authentication, well-modelled databases and third-party API integrations — plus applied ML with PyTorch and TensorFlow, and even a real-time 3D game engine." },
      { no: "03", title: "How I think", body: "Analytical and systems-minded. I care about clean architecture, edge cases and cross-functional collaboration — the same instinct that let me coordinate events for a 300+ member university club." },
    ],
  },
  footerTag: "Computer Science engineer building intelligent, scalable software. Dhaka, Bangladesh.",
} as const;
