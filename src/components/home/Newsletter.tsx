"use client";

import { useState } from "react";
import { subscribeToNewsletter } from "@/app/actions/newsletter";

export default function Newsletter() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult(null);

    const formData = new FormData(e.currentTarget);
    const response = await subscribeToNewsletter(formData);
    
    setResult(response);
    setIsSubmitting(false);

    if (response.success) {
      const form = e.target as HTMLFormElement;
      form.reset();
    }
  };

  return (
    <section className="py-24 bg-red text-paper">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-4 text-3xl font-normal md:text-4xl font-display">
            Stay Updated
          </h2>
          <p className="mb-10 text-lg text-paper-warm opacity-90">
            Join our newsletter to receive the latest updates, news, and opportunities to get involved directly in your inbox.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              name="email"
              required
              disabled={isSubmitting}
              placeholder="Enter your email address"
              className="flex-1 rounded-full border-none bg-white px-6 py-4 text-ink focus:outline-none focus:ring-4 focus:ring-white/30 disabled:opacity-50 transition-all duration-200 shadow-inner"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="rounded-full bg-ink px-8 py-4 font-semibold text-paper transition-all duration-200 hover:bg-ink-soft disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap hover:shadow-lg active:scale-[0.98]"
            >
              {isSubmitting ? "Subscribing..." : "Subscribe"}
            </button>
          </form>

          {result && (
            <div className="mt-6 mx-auto max-w-lg">
              <p className={`text-sm font-medium ${result.success ? "text-paper" : "text-black/70"}`}>
                {result.message}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
