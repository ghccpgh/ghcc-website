"use server";

import { headers } from "next/headers";

const newsletterRateLimitMap = new Map<string, number>();
const RATE_LIMIT_WINDOW_MS = 60000; // 1 minute

export async function subscribeToNewsletter(formData: FormData) {
  try {
    const headersList = await headers();
    const ip = headersList.get("x-forwarded-for") || headersList.get("x-real-ip") || "unknown";

    const now = Date.now();
    
    // Clean up old entries
    for (const [key, timestamp] of newsletterRateLimitMap.entries()) {
      if (now - timestamp > RATE_LIMIT_WINDOW_MS) {
        newsletterRateLimitMap.delete(key);
      }
    }

    if (newsletterRateLimitMap.has(ip)) {
      const lastRequestTime = newsletterRateLimitMap.get(ip)!;
      if (now - lastRequestTime < RATE_LIMIT_WINDOW_MS) {
        return {
          success: false,
          message: "You are doing that too much. Please try again later.",
        };
      }
    }
    
    newsletterRateLimitMap.set(ip, now);

    const email = formData.get("email") as string;

    if (!email) {
      return { success: false, message: "Email is required." };
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return { success: false, message: "Please enter a valid email address." };
    }

    // Simulate network delay and submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Newsletter subscription:", { email });

    return { success: true, message: "Thank you for subscribing to our newsletter!" };
  } catch (error) {
    console.error("Error subscribing to newsletter:", error);
    return { success: false, message: "An unexpected error occurred. Please try again." };
  }
}
