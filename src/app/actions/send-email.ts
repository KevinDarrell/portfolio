"use server";

import { z } from "zod";
import { Resend } from "resend";

const contactSchema = z.object({
    name: z.string().min(2, "Name must be atleast 2 character"),
    email: z.string().email("Invalid email address"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormState = {
    success?: boolean;
    error?: string;
    errors?: {
        name?: string[];
        email?: string[];
        message?: string[];
  };
};

export async function sendContactEmail(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
    const validatedFields = contactSchema.safeParse({

        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
  });

  if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            error: "Validation failed. Please check your inputs.",
    };
  }

  const { name, email, message } = validatedFields.data;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Portfolio Contact <onboarding@resend.dev>", // Replace with verified domain
        to: "mkevindarrell1207@gmail.com",
        subject: `Portfolio Contact from ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to send email");
    }

    return {
      success: true,
    };
  } catch (error) {
    console.error("Email send error:", error);
    return {
      error: "Failed to send message. Please try again later.",
    };
  }
}