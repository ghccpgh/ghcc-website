export const metadata = {
  title: "Privacy Policy | Greater Hazelwood Community Collaborative",
  description:
    "How the Greater Hazelwood Community Collaborative collects, uses, and protects your information.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-paper">
      <div className="mx-auto max-w-3xl px-6 py-24 md:px-8 md:py-32">
        <div className="space-y-4">
          <h1 className="font-display text-4xl font-light leading-[1.1] tracking-tight text-ink md:text-5xl">
            Privacy Policy
          </h1>
          <p className="text-sm text-mute">Last updated: [August 01, 2026]</p>
        </div>

        <div className="mt-16 space-y-12 text-ink-soft [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-normal [&_h2]:leading-[1.2] [&_h2]:text-ink [&_h2]:mb-10 [&_h2+p]:mt-6 [&_h2+ul]:mt-6 [&_p]:leading-7 [&_p]:mb-4 [&_a]:text-red [&_a]:underline [&_a]:underline-offset-2 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_li]:leading-7">
          <section>
            <p>
              The Greater Hazelwood Community Collaborative (&ldquo;GHCC,&rdquo;
              &ldquo;we,&rdquo; or &ldquo;us&rdquo;) respects your privacy. This
              policy explains what information we collect through our website,
              why we collect it, and how we handle it. We&rsquo;ve kept it short
              and in plain language, because you shouldn&rsquo;t need a lawyer to
              understand how your information is used.
            </p>
          </section>

          <section>
            <h2>What we collect</h2>
            <p>
              The only place we collect personal information on this website is
              our contact form. When you fill it out, we collect:
            </p>
            <ul>
              <li>Your first and last name</li>
              <li>Your email address</li>
              <li>The message you write to us</li>
            </ul>
            <p>
              We ask only for what we need to respond to you. We do not require
              accounts, and we do not ask for any information beyond the above.
            </p>
          </section>

          <section>
            <h2>Why we collect it</h2>
            <p>
              We use the information from the contact form for one purpose: to
              read and respond to your message. We do not use it for marketing,
              we do not build profiles from it, and we do not use it to track you
              across other websites.
            </p>
          </section>

          <section>
            <h2>Where your message goes</h2>
            <p>
              When you submit the contact form, your message is delivered to our
              team by email and is also recorded in a private spreadsheet that
              only authorized GHCC staff and volunteers can access. This lets us
              make sure every message is seen and answered.
            </p>
          </section>

          <section>
            <h2>What we don&rsquo;t do</h2>
            <ul>
              <li>We do not sell, rent, or trade your personal information.</li>
              <li>We do not share it with advertisers.</li>
              <li>
                We do not use advertising trackers or third-party analytics
                cookies on this site.
              </li>
            </ul>
          </section>

          <section>
            <h2>Service providers</h2>
            <p>
              A few trusted service providers help us run this website. In the
              normal course of delivering the site to you, these providers may
              process technical information such as your device&rsquo;s IP
              address:
            </p>
            <ul>
              <li>
                <strong className="text-ink">Vercel</strong> hosts our website
                and delivers its pages to your browser.
              </li>
              <li>
                <strong className="text-ink">Sanity</strong> stores and delivers
                the images and content that appear on the site.
              </li>
              <li>
                <strong className="text-ink">Google</strong> processes contact
                form submissions and stores them in the spreadsheet and email
                described above.
              </li>
            </ul>
            <p>
              We link to social media (such as Facebook) using plain links. We do
              not embed tracking pixels or widgets, so visiting our pages does not
              share your activity with those platforms.
            </p>
          </section>

          <section>
            <h2>How long we keep your information</h2>
            <p>
              We keep contact form messages for as long as we need them to
              respond to your inquiry and follow up appropriately. If you&rsquo;d
              like us to delete a message you sent, just ask and we will.
            </p>
          </section>

          <section>
            <h2>Cookies</h2>
            <p>
              This website does not use advertising or tracking cookies. Any
              cookies present are limited to what is strictly necessary for the
              site to function.
            </p>
          </section>

          <section>
            <h2>Security</h2>
            <p>
              Our entire site is served over a secure (HTTPS) connection, which
              protects the information you send through the contact form while it
              is in transit.
            </p>
          </section>

          <section>
            <h2>Children&rsquo;s privacy</h2>
            <p>
              This site is intended for a general audience and is not directed at
              children. We do not knowingly collect personal information from
              children.
            </p>
          </section>

          <section>
            <h2>Your choices</h2>
            <p>
              You can contact us at any time to ask what information we hold about
              you, to correct it, or to request that we delete it. Reach us at{" "}
              <a href="mailto:[contact.greaterhazelwood@gmail.com]">
                [contact.greaterhazelwood@gmail.com]
              </a>
              .
            </p>
          </section>

          <section>
            <h2>Changes to this policy</h2>
            <p>
              We may update this policy from time to time. When we do, we&rsquo;ll
              revise the &ldquo;last updated&rdquo; date at the top of this page.
            </p>
          </section>

          <section>
            <h2>Contact us</h2>
            <p>
              If you have any questions about this policy or how we handle your
              information, please email us at{" "}
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
