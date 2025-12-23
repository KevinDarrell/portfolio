import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { SelectedWork } from "@/components/sections/selected-work";
import { Skills } from "@/components/sections/skills";
import { Contact } from "@/components/sections/contact";
import { Guestbook } from "@/components/sections/guestbook"; 
import { getGuestbookEntries } from "@/app/actions/guestbook";


export default async function Home() {
  const guestbookEntries = await getGuestbookEntries();

  return (
    <main className="relative flex flex-col min-h-screen">
      <Navbar />

      <div className="pt-16">
      <Hero />
      <SelectedWork />
      <Skills />
      <Experience />
      </div>
      <Guestbook initialEntries={guestbookEntries} />
      <Contact />
      <Footer />
    </main>
  );
}