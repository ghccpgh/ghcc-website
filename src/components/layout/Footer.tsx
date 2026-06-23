import Link from "next/link";
import Image from "next/image";
import logo from "@/../public/ghcc-logo.png";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/about/mission", label: "Mission" },
    { href: "/about/team", label: "Team" },
    { href: "/about/history", label: "History" },
    { href: "/about/board", label: "Board" },
    { href: "/announcements", label: "Announcements" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
];

export default function Footer() {
    return (
        <footer
            className="bg-ink text-paper"
            role="contentinfo"
        >
            <div
                className="
                    mx-auto
                    max-w-[1280px]
                    px-6
                    py-16
                    md:px-12
                    md:py-20
                "
            >

                <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">

                    {/* Brand and tagline */}
                    <div className="lg:col-span-4">
                        <div className="flex items-start gap-3">

                            <Image
                                src={logo}
                                alt="GHCC logo"
                                width={44}
                                height={44}
                                className="h-11 w-11 flex-shrink-0"
                            />

                            <div>
                                <h2 className="font-display text-lg leading-tight">
                                    Greater Hazelwood
                                </h2>
                                <h2 className="font-display text-[1rem] leading-tight">
                                    Community Collaborative
                                </h2>
                            </div>

                        </div>

                        <p className="mt-5 max-w-xs text-sm leading-relaxed text-paper-warm/80">
                            A coalition of residents, faith leaders, and organizations
                            working to ensure Hazelwood&rsquo;s future is shaped by the people
                            who live here.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div className="lg:col-span-2">
                        <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-red">
                            Navigate
                        </h3>
                        <ul className="flex flex-col gap-2.5">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-paper-warm/80 no-underline transition-colors duration-200 hover:text-paper"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Visit */}
                    <div className="lg:col-span-3">

                        <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-red">
                            Visit
                        </h3>

                        <p className="text-sm text-paper-warm/80">
                            5125 Second Avenue
                        </p>
                        <p className="text-sm text-paper-warm/80">
                            Pittsburgh, PA 15207
                        </p>

                        <h3 className="mb-5 mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-red">
                            Contact
                        </h3>

                        <p className="text-sm text-paper-warm/80">
                            hello@hazelwoodcollab.org
                        </p>
                        <p className="text-sm text-paper-warm/80">
                            (412) 555-0100
                        </p>

                    </div>

                    {/* Follow */}
                    <div className="lg:col-span-3">

                        <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-red">
                            Follow Us
                        </h3>

                        <div className="flex gap-4">

                            {/* Facebook */}
                            <Link
                                href="https://www.facebook.com/p/Greater-Hazelwood-Community-Collaborative-GHCC-100080329506283/"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-paper/10 text-paper-warm/80
                                    no-underline transition-all duration-200 hover:bg-red hover:text-paper"
                                aria-label="Facebook"
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </Link>

                            {/* Instagram */}
                            <Link
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-paper/10 text-paper-warm/80
                                    no-underline transition-all duration-200 hover:bg-red hover:text-paper"
                                aria-label="Instagram"
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                </svg>
                            </Link>

                            {/* Email/Newsletter */}
                            <Link
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-paper/10 text-paper-warm/80
                                    no-underline transition-all duration-200 hover:bg-red hover:text-paper"
                                aria-label="Newsletter"
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="2" y="4" width="20" height="16" rx="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <polyline points="22,6 12,13 2,6" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>

                        </div>

                    </div>

                </div>


                <div className="my-12 border-t border-paper/10" />


                <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">

                    <p className="text-sm text-mute">
                        © 2026 Greater Hazelwood Community Collaborative. All rights reserved.
                    </p>

                    <div className="flex gap-6 text-sm text-mute">
                        <Link href="#" className="no-underline transition-colors hover:text-paper">
                            Privacy Policy
                        </Link>
                        <Link href="#" className="no-underline transition-colors hover:text-paper">
                            Accessibility
                        </Link>
                    </div>

                </div>

            </div>
        </footer>
    );
}