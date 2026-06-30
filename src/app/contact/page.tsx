import ContactForm from "@/components/contact/ContactForm";

export const metadata = {
  title: "Contact Us | GHCC",
  description: "Get in touch with the Global Health Crisis Coordination team.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-paper pt-32 pb-20">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <div className="mb-16 text-center">
          <h1 className="mb-6 text-4xl font-normal text-ink md:text-5xl lg:text-6xl font-display">
            Contact Us
          </h1>
          <p className="mx-auto max-w-2xl text-center text-lg text-mute">
            Have a question or want to get involved? Fill out the form below and our team will get back to you as soon as possible.
          </p>
        </div>
        
        <ContactForm />
      </div>
    </main>
  );
}
