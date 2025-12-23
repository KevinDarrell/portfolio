"use client";

import { useActionState } from "react"; 
import { useFormStatus } from "react-dom"; 
import { sendContactEmail } from "@/app/actions/send-email";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollReveal, fadeInUpVariants } from "@/hooks/use-scroll-reveal";

function SubmitButton() {
  const { pending } = useFormStatus();
  
  return (
    <Button
      type="submit"
      disabled={pending}
      className="w-full h-12 text-base font-medium"
    >
      {pending ? (
        <>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"
          />
          Sending...
        </>
      ) : (
        <>
          Send Message
          <Send className="ml-2 h-4 w-4" />
        </>
      )}
    </Button>
  );
}

export function Contact() {
  const { ref, controls } = useScrollReveal();
  
  
  const [state, formAction] = useActionState(sendContactEmail, {});

  return (
    <div className="flex flex-col h-full gap-6">
      <div className="space-y-2 text-left">
        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
           Let's Build Something
        </h2>
        <p className="text-muted-foreground md:text-lg">
           Have a project in mind? Drop me a message and I'll get back to you within 24 hours.
        </p>
      </div>


      <Card className="p-6 md:p-8 shadow-sm border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 flex-1">
        <form action={formAction} className="space-y-5">
          
          {state.success && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center gap-3 p-4 bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg"
            >
              <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 shrink-0" />
              <p className="text-sm font-medium text-green-900 dark:text-green-100">
                Message sent successfully!
              </p>
            </motion.div>
          )}          
              {state.error && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-3 p-4 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-lg"
                >
                  <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400 shrink-0" />
                  <p className="text-sm font-medium text-red-900 dark:text-red-100">
                    {state.error}
                  </p>
                </motion.div>
              )}

              
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  className="w-full h-12 px-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  aria-describedby={state.errors?.name ? "name-error" : undefined}
                />
                {state.errors?.name && (
                  <p id="name-error" className="text-sm text-red-600 dark:text-red-400">
                    {state.errors.name[0]}
                  </p>
                )}
              </div>

              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  className="w-full h-12 px-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  aria-describedby={state.errors?.email ? "email-error" : undefined}
                />
                {state.errors?.email && (
                  <p id="email-error" className="text-sm text-red-600 dark:text-red-400">
                    {state.errors.email[0]}
                  </p>
                )}
              </div>

              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                  aria-describedby={state.errors?.message ? "message-error" : undefined}
                />
                {state.errors?.message && (
                  <p id="message-error" className="text-sm text-red-600 dark:text-red-400">
                    {state.errors.message[0]}
                  </p>
                )}
              </div>

              <SubmitButton />
            </form>
          </Card>
      </div>
  );
}