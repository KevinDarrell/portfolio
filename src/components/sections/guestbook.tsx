"use client";

import { useActionState } from "react"; 
import { useFormStatus } from "react-dom";
import { addGuestbookEntry } from "@/app/actions/guestbook"; 
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Loader2, Send } from "lucide-react";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";


function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button 
      type="submit" 
      disabled={pending} 
      className="w-full"
    >
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Signing...
        </>
      ) : (
        <>
          Sign Guestbook <Send className="ml-2 h-4 w-4" />
        </>
      )}
    </Button>
  );
}


export function Guestbook({ initialEntries }: { initialEntries: any[] }) {
  
  const [state, formAction] = useActionState(addGuestbookEntry, {});
  const formRef = useRef<HTMLFormElement>(null);


  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
    }
  }, [state.success]);

  return (
    <div className="flex flex-col h-full gap-6">
      
      <div className="space-y-2 text-left">
        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
          Sign My Guestbook
        </h2>
        <p className="text-muted-foreground md:text-lg">
          Leave a message or say hello!
        </p>
      </div>

      <Card className="p-6 md:p-8 shadow-sm border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50">
        <form ref={formRef} action={formAction} className="space-y-4">
          
          {state.error && (
            <div className="p-3 bg-red-50 text-red-600 text-sm rounded-md border border-red-200">
              {state.error}
            </div>
          )}
          
          {state.success && (
            <div className="p-3 bg-green-50 text-green-600 text-sm rounded-md border border-green-200">
              Message added! It will appear below shortly.
            </div>
          )}

          <div>
            <input
              name="name"
              placeholder="Your Name"
              className="w-full h-11 px-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              required
            />
            {state.errors?.name && <p className="text-red-500 text-xs mt-1">{state.errors.name[0]}</p>}
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Your Message..."
              rows={3}
              className="w-full px-4 py-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-transparent resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              required
            />
            {state.errors?.message && <p className="text-red-500 text-xs mt-1">{state.errors.message[0]}</p>}
          </div>

          <SubmitButton />
        </form>
      </Card>
      
      <div className="space-y-4 pt-2">
          <h3 className="font-semibold text-lg border-b pb-2">Recent Messages</h3>
          <div className="h-[350px] overflow-y-auto pr-2 space-y-4 scrollbar-thin scrollbar-thumb-zinc-200 dark:scrollbar-thumb-zinc-800">
            {initialEntries.length === 0 ? (
              <p className="text-zinc-500 italic text-sm">No messages yet. Be the first!</p>
            ) : (
              initialEntries.map((entry) => (
                <motion.div
                  key={entry.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-4 rounded-lg border bg-white dark:bg-zinc-950 shadow-sm"
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-semibold text-sm">{entry.name}</span>
                    <span className="text-xs text-zinc-400">
                      {new Date(entry.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-300 text-sm break-words">
                    {entry.message}
                  </p>
                </motion.div>
              ))
            )}
          </div>
      </div>

    </div>
  );
}