import { Navbar } from "@/components/Navbar";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { WhatIDo } from "@/components/WhatIDo";
import { Projects } from "@/components/Projects";
import { Journey } from "@/components/Journey";
import { Skills } from "@/components/Skills";
import { Achievements } from "@/components/Achievements";
import { GitHubSection } from "@/components/GitHubSection";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <WhatIDo />
        <Projects />
        <Journey />
        <Skills />
        <Achievements />
        <GitHubSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
