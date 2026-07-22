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

                            <Link href="https://www.facebook.com/p/Greater-Hazelwood-Community-Collaborative-GHCC-100080329506283/" target="_blank" rel="noopener noreferrer "className="no-underline">
                                Facebook
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