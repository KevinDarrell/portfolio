import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { SelectedWork } from "@/components/sections/selected-work";
import { Skills } from "@/components/sections/skills";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen">
      <Navbar />

      <div className="pt-16">
      <Hero />
      <SelectedWork />
      <Skills />
      <Experience />
      </div>
      <Contact />
      <Footer />
    </main>
  );
}