"use client";

import { useFormState } from "react-dom";
import { addGuestbookEntry } from "@/app/actions/guestbook";
import { Button } from "@/components/ui/button";

export function GuestbookForm() {
  const [state, formAction] = useFormState(addGuestbookEntry, {});

  return (
    <form action={formAction} className="space-y-4">
      <input
        name="name"
        placeholder="Your name"
        className="w-full h-10 px-3 rounded-lg border"
        required
      />
      <textarea
        name="message"
        placeholder="Your message..."
        className="w-full px-3 py-2 rounded-lg border resize-none"
        rows={3}
        required
      />
      <Button type="submit">Sign Guestbook</Button>
      {state?.success && <p className="text-green-600">Entry added!</p>}
      {state?.error && <p className="text-red-600">{state.error}</p>}
    </form>
  );
}