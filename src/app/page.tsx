import nextDynamic from "next/dynamic";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { getGuestbookEntries } from "@/app/actions/guestbook";
import { StructuredData } from "@/components/structured-data";

export const dynamic = "force-dynamic";

const SelectedWork = nextDynamic(
  () => import("@/components/sections/selected-work").then((mod) => mod.SelectedWork),
  {
    loading: () => (
      <div className="py-32 flex justify-center text-zinc-400 animate-pulse">
        Loading Projects...
      </div>
    ),
  }
);

const Skills = nextDynamic(
  () => import("@/components/sections/skills").then((mod) => mod.Skills),
  { loading: () => <div className="h-64" /> } 
);

const Experience = nextDynamic(
  () => import("@/components/sections/experience").then((mod) => mod.Experience),
  { loading: () => <div className="h-64" /> }
);

const Contact = nextDynamic(
  () => import("@/components/sections/contact").then((mod) => mod.Contact),
  { loading: () => <div className="h-64" /> }
);

const Guestbook = nextDynamic(
  () => import("@/components/sections/guestbook").then((mod) => mod.Guestbook),
  { loading: () => <div className="h-64" /> }
);


export default async function Home() {
  const guestbookEntries = await getGuestbookEntries();

  return (
    <>
    <StructuredData />
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
    </>
  );
}