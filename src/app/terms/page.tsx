export const metadata = {
  title: "Terms of Use | Greater Hazelwood Community Collaborative",
  description:
    "The terms that govern your use of the Greater Hazelwood Community Collaborative website.",
};

export default function TermsPage() {
  return (
    <div className="bg-paper">
      <div className="mx-auto max-w-3xl px-6 py-24 md:px-8 md:py-32">
        <div className="space-y-4">
          <h1 className="font-display text-4xl font-light leading-[1.1] tracking-tight text-ink md:text-5xl">
            Terms of Use
          </h1>
          <p className="text-sm text-mute">Last updated: [August 01, 2026]</p>
        </div>

        <div className="mt-16 space-y-12 text-ink-soft [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-normal [&_h2]:leading-[1.2] [&_h2]:text-ink [&_h2]:mb-10 [&_h2+p]:mt-6 [&_h2+ul]:mt-6 [&_p]:leading-7 [&_p]:mb-4 [&_a]:text-red [&_a]:underline [&_a]:underline-offset-2 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_li]:leading-7">
          <section>
            <p>
              Welcome to the Greater Hazelwood Community Collaborative
              (&ldquo;GHCC&rdquo;) website. By using this site, you agree to these
              Terms of Use. Please read them. If you do not agree with them,
              please do not use the site.
            </p>
          </section>

          <section>
            <h2>About this website</h2>
            <p>
              This website is provided by GHCC as a public resource to share
              information about our organization, our work in the Greater
              Hazelwood neighborhood of Pittsburgh, our partners, and community
              news. It is offered free of charge for informational purposes.
            </p>
          </section>

          <section>
            <h2>Use of the site</h2>
            <p>You agree to use this website only for lawful purposes. You agree not to:</p>
            <ul>
              <li>
                Use the site in any way that could damage, disable, or impair it,
                or interfere with anyone else&rsquo;s use of it.
              </li>
              <li>
                Attempt to gain unauthorized access to any part of the site, its
                servers, or connected systems.
              </li>
              <li>
                Use the contact form to send spam, harassing, unlawful, or
                deceptive messages.
              </li>
              <li>
                Copy, scrape, or harvest content from the site for commercial use
                without our permission.
              </li>
            </ul>
          </section>

          <section>
            <h2>Content and intellectual property</h2>
            <p>
              The content on this site — including text, images, the GHCC name and
              logo, and design — belongs to GHCC or is used with permission,
              unless otherwise noted. You may view and share our content for
              personal, non-commercial, and community purposes. You may not
              reproduce it for commercial use, or present it as your own, without
              our written permission.
            </p>
            <p>
              Photographs of community members and partners appear with their
              involvement. Please respect the people represented in this content.
            </p>
          </section>

          <section>
            <h2>Information accuracy</h2>
            <p>
              We work to keep the information on this site accurate and current,
              including announcements, event details, and program information.
              However, we make no guarantee that everything is complete,
              error-free, or up to date at all times. Dates, events, and details
              can change. When something matters to you, please contact us to
              confirm.
            </p>
          </section>

          <section>
            <h2>Links to other websites</h2>
            <p>
              Our site may link to websites run by our partners or other
              organizations. We provide these links for convenience. We do not
              control those sites and are not responsible for their content,
              accuracy, or privacy practices. Following an external link is at
              your own discretion.
            </p>
          </section>

          <section>
            <h2>Messages you send us</h2>
            <p>
              When you send us a message through the contact form, you confirm
              that the information you provide is accurate and that you have the
              right to share it. How we handle the personal information in your
              message is described in our{" "}
              <a href="/privacy">Privacy Policy</a>.
            </p>
          </section>

          <section>
            <h2>No warranties</h2>
            <p>
              This website is provided &ldquo;as is&rdquo; and &ldquo;as
              available.&rdquo; While we work to keep it running well, we do not
              promise that it will always be available, uninterrupted, or free of
              errors. To the fullest extent allowed by law, we disclaim warranties
              of any kind regarding the site and its content.
            </p>
          </section>

          <section>
            <h2>Limitation of liability</h2>
            <p>
              To the fullest extent allowed by law, GHCC and its staff, board, and
              volunteers are not liable for any damages arising from your use of,
              or inability to use, this website. This includes reliance on any
              information found here.
            </p>
          </section>

          <section>
            <h2>Changes to these terms</h2>
            <p>
              We may update these Terms of Use from time to time. When we do,
              we&rsquo;ll revise the &ldquo;last updated&rdquo; date at the top of
              this page. Your continued use of the site after changes are posted
              means you accept the updated terms.
            </p>
          </section>

          <section>
            <h2>Governing law</h2>
            <p>
              These terms are governed by the laws of the Commonwealth of
              Pennsylvania, without regard to its conflict-of-law rules.
            </p>
          </section>

          <section>
            <h2>Contact us</h2>
            <p>
              If you have questions about these Terms of Use, please email us at{" "}
              <a href="mailto:[contact.greaterhazelwood@gmail.com]">
                [contact.greaterhazelwood@gmail.com]
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
