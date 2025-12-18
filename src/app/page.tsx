import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { SelectedWork } from "@/components/sections/selected-work";

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen">
      <Navbar />

      <div className="pt-16">
      <Hero />
      <SelectedWork />
      {/* Future Sections to be added:
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      */}
      </div>
    </main>
  );
}