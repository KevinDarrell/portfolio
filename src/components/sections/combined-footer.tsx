import { Contact } from "@/components/sections/contact";
import { Guestbook } from "@/components/sections/guestbook";
import { GuestbookEntry } from "@/types";

interface CombinedFooterProps {
  initialEntries: GuestbookEntry[];
}

export function CombinedFooter({ initialEntries }: CombinedFooterProps) {
  return (
    <section id="contact" className="py-24 bg-zinc-100 dark:bg-zinc-950/50">
      <div className="container px-4 md:px-6">
 
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
       
          <div className="w-full">
            <Contact />
          </div>

          <div className="w-full">
            <Guestbook initialEntries={initialEntries} />
          </div>

        </div>
      </div>
    </section>
  );
}