import Link from 'next/link'

export const metadata = {
  title: '404 — Page Not Found | Greater Hazelwood Community Collaborative',
  description: "We couldn't find that page. Let's get you back on track.",
}

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-red">
        404 — Not found
      </p>

      <h1 className="font-display text-[clamp(2rem,5vw,3.25rem)] font-semibold leading-tight tracking-tight text-ink">
        Page not found.
      </h1>

      <p className="mt-4 max-w-[40ch] text-base leading-relaxed text-mute">
        The page you're looking for doesn't exist or has moved.
      </p>

      <Link
        href="/"
        className="mt-10 inline-block rounded-full bg-ink px-8 py-3 text-sm font-medium text-paper no-underline transition-colors duration-200 hover:bg-red"
      >
        Go home
      </Link>
    </main>
  )
}
