"use client";

import { useState, useEffect } from "react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null);
  const [cooldown, setCooldown] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const MAX_CHARS = 500;

  useEffect(() => {
    const lastSubmit = localStorage.getItem("contact_last_submit");
    if (lastSubmit) {
      const timeSinceSubmit = Date.now() - parseInt(lastSubmit, 10);
      if (timeSinceSubmit < 60000) {
        setCooldown(Math.ceil((60000 - timeSinceSubmit) / 1000));
      }
    }
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (cooldown > 0) {
      timer = setInterval(() => {
        setCooldown((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [cooldown]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === "message") {
      setFormData((prev) => ({ ...prev, [name]: value.slice(0, MAX_CHARS) }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (cooldown > 0) return;

    setIsSubmitting(true);
    setResult(null);

    try {
      await fetch(process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL!, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify(formData),
      });

      // If fetch didn't throw, the request was sent successfully
      setResult({ success: true, message: "Thank you for your message. We'll get back to you soon." });
      localStorage.setItem("contact_last_submit", Date.now().toString());
      setCooldown(60);
      setFormData({ firstName: "", lastName: "", email: "", message: "" });
    } catch {
      setResult({ success: false, message: "Something went wrong. Please try again." });
    }

    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-2xl bg-paper-warm p-8 rounded-2xl border border-paper-edge shadow-[0_8px_24px_-4px_rgba(0,0,0,0.12),0_2px_8px_-2px_rgba(0,0,0,0.08)]">
      {result && (
        <div className={`mb-6 p-4 rounded-xl text-sm font-medium ${result.success ? "bg-[#d1fae5] text-[#065f46]" : "bg-[#fee2e2] text-red-dark"}`}>
          {result.message}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-ink mb-2">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            disabled={isSubmitting || cooldown > 0}
            value={formData.firstName}
            onChange={handleChange}
            className="w-full rounded-xl border border-paper-edge bg-white px-4 py-3 text-ink focus:border-red focus:outline-none focus:ring-2 focus:ring-red/20 disabled:opacity-50 transition-all duration-200"
            placeholder="Jane"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-ink mb-2">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            disabled={isSubmitting || cooldown > 0}
            value={formData.lastName}
            onChange={handleChange}
            className="w-full rounded-xl border border-paper-edge bg-white px-4 py-3 text-ink focus:border-red focus:outline-none focus:ring-2 focus:ring-red/20 disabled:opacity-50 transition-all duration-200"
            placeholder="Doe"
          />
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="email" className="block text-sm font-medium text-ink mb-2">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          disabled={isSubmitting || cooldown > 0}
          value={formData.email}
          onChange={handleChange}
          className="w-full rounded-xl border border-paper-edge bg-white px-4 py-3 text-ink focus:border-red focus:outline-none focus:ring-2 focus:ring-red/20 disabled:opacity-50 transition-all duration-200"
          placeholder="jane@example.com"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium text-ink mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          disabled={isSubmitting || cooldown > 0}
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="w-full rounded-xl border border-paper-edge bg-white px-4 py-3 text-ink focus:border-red focus:outline-none focus:ring-2 focus:ring-red/20 disabled:opacity-50 resize-none transition-all duration-200"
          placeholder="How can we help you?"
        ></textarea>
        <div className="mt-2 flex justify-end text-xs text-mute">
          <span className={formData.message.length >= MAX_CHARS ? "text-red font-medium" : ""}>
            {formData.message.length} / {MAX_CHARS} characters
          </span>
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting || cooldown > 0 || formData.message.length === 0}
        className="w-full rounded-full bg-red px-6 py-4 text-center text-sm font-semibold text-paper transition-all duration-200 hover:bg-red-dark disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg active:scale-[0.98]"
      >
        {isSubmitting ? "Sending..." : cooldown > 0 ? `Please wait ${cooldown}s` : "Send Message"}
      </button>
    </form>
  );
}

