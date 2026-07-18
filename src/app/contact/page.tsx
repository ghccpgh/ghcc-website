import ContactForm from "@/components/contact/ContactForm";

export const metadata = {
  title: "Contact Us | Greater Hazelwood Community Collaborative",
  description:
    "Get in touch with the Greater Hazelwood Community Collaborative. Have a question or want to get involved? Send us a message.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-paper pt-32 pb-20">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center px-6 md:px-12">
        <div className="mb-16 flex w-full max-w-2xl flex-col items-center text-center">
          <h1 className="mb-6 font-display text-4xl font-normal text-ink md:text-5xl lg:text-6xl">
            Contact Us
          </h1>
          <p className="text-lg text-mute">
            Have a question or want to get involved? Fill out the form below and
            our team will get back to you as soon as possible.
          </p>
        </div>

        <div className="w-full max-w-2xl">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}