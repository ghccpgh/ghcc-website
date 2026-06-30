"use server";

import { headers } from "next/headers";

const rateLimitMap = new Map<string, number>();
const RATE_LIMIT_WINDOW_MS = 60000; // 1 minute

export async function submitContactForm(formData: FormData) {
  try {
    const headersList = await headers();
    const ip = headersList.get("x-forwarded-for") || headersList.get("x-real-ip") || "unknown";

    const now = Date.now();
    
    // Clean up old entries
    for (const [key, timestamp] of rateLimitMap.entries()) {
      if (now - timestamp > RATE_LIMIT_WINDOW_MS) {
        rateLimitMap.delete(key);
      }
    }

    if (rateLimitMap.has(ip)) {
      const lastRequestTime = rateLimitMap.get(ip)!;
      if (now - lastRequestTime < RATE_LIMIT_WINDOW_MS) {
        return {
          success: false,
          message: "You are doing that too much. Please try again later.",
        };
      }
    }
    
    rateLimitMap.set(ip, now);

    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    if (!firstName || !lastName || !email || !message) {
      return { success: false, message: "All fields are required." };
    }

    if (message.length > 500) {
      return { success: false, message: "Message is too long. Maximum 500 characters." };
    }

    // Simulate network delay and submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Contact form submitted:", { firstName, lastName, email, message });

    return { success: true, message: "Your message has been sent successfully!" };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return { success: false, message: "An unexpected error occurred. Please try again." };
  }
}
