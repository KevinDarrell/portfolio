"use server";

import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";


const guestbookSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(50),
  message: z.string().min(5, "Message must be at least 5 characters").max(500),
});


export type GuestbookState = {
  success?: boolean;
  error?: string;
  errors?: {
    name?: string[];
    message?: string[];
  };
};


export async function addGuestbookEntry(
  prevState: GuestbookState, 
  formData: FormData
): Promise<GuestbookState> {
  
  
  const validated = guestbookSchema.safeParse({
    name: formData.get("name"),
    message: formData.get("message"),
  });

  if (!validated.success) {
    return { 
      error: "Validation failed",
      errors: validated.error.flatten().fieldErrors 
    };
  }

  try {
    await prisma.guestbook.create({
      data: {
        name: validated.data.name,
        message: validated.data.message,
        
        ipAddress: null, 
      },
    });

    revalidatePath("/");
    return { success: true };

  } catch (error) {
    console.error("Database Error:", error);
    return { error: "Failed to add entry. Please try again." };
  }
}

export async function getGuestbookEntries() {
  try {
    const entries = await prisma.guestbook.findMany({
      orderBy: { createdAt: "desc" },
      take: 10,
    });
    return entries;
  } catch (error) {
    console.error("Fetch Error:", error);
    return [];
  }
}