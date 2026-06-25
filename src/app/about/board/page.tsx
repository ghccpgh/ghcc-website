import { client } from "@/sanity/lib/client";
import { getBoardMembers } from "@/sanity/queries/boardmembers";
import BoardCard from "@/components/BoardCards";

export default async function BoardMembers() {
  const members = await client.fetch(getBoardMembers);

  return (
    <main>
      
      <section className="border-b border-paper-edge bg-paper-warm">
        <div className="mx-auto max-w-[1280px] px-6 py-20 md:px-12 md:py-28">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-red">
            Leadership
          </p>

          <h1 className="font-display text-3xl font-light tracking-tight text-ink sm:text-5xl md:text-6xl">
            Meet Our <em className="font-normal italic text-red">Board</em>
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-mute">
            Meet the dedicated community leaders who help guide GHCC's mission,
            support neighborhood initiatives, and work to strengthen the
            Hazelwood community.
          </p>
        </div>
      </section>


      <section>
        <div className="mx-auto max-w-[900px] px-6 py-16 md:px-12">
          <h2 className="font-display text-3xl text-ink">
            About the Board
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-ink-soft">
            The Board of Directors provides leadership, oversight, and
            strategic direction for GHCC. Board members bring diverse
            experiences and perspectives while working together to support
            programs, partnerships, and initiatives that benefit the
            Hazelwood community.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1280px] px-6 py-12 md:px-12 md:py-16">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {members.map((member: any) => (
              <BoardCard
                key={member._id}
                member={member}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-paper-edge bg-paper-warm">
        <div className="mx-auto max-w-[900px] px-6 py-20 text-center md:px-12">
          <h2 className="font-display text-3xl text-ink md:text-4xl">
            Interested in Getting Involved?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-mute">
            Learn more about our work, attend a community meeting, or connect
            with us to explore ways you can support our mission.
          </p>

          <a
            href="/contact"
            className="
              mt-10 inline-flex items-center
              rounded-full
              bg-red
              px-6 py-3
              font-medium
              text-white
              no-underline
              transition-all
              duration-300
              hover:bg-red-dark
            "
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}