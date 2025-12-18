import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      {/* Future Sections to be added:
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      */}
    </main>
  );
}