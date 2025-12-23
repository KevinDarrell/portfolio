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

const CombinedFooter = nextDynamic(
  () => import("@/components/sections/combined-footer").then((mod) => mod.CombinedFooter),
  { loading: () => <div className="h-96 animate-pulse bg-zinc-100 dark:bg-zinc-800 rounded-xl my-24" /> }
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
      <CombinedFooter initialEntries={guestbookEntries} />
      <Footer />
    </main>
    </>
  );
}