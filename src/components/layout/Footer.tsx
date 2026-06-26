import Link from "next/link";
import Image from "next/image";
import logo from "@/../public/ghcc-logo.png";

export default function Footer() {
    return (
        <footer
            className="mt-[var(--space-24)] bg-ink text-paper"
            role="contentinfo"
        >
            <div
                className="
                    mx-auto
                    max-w-[1280px]
                    px-6
                    py-12
                    md:px-12
                "
            >

                <div className="grid gap-16 lg:grid-cols-4">



                    <div className="flex items-start gap-2">

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

                            <h2 className="font-display text-lg text-[1rem] leading-tight">
                                Community Collaborative
                            </h2>

                        </div>

                    </div>

                    <div>

                        <h3 className="mb-6 text-sm uppercase tracking-[0.18em] text-red">
                            Visit
                        </h3>

                        <p className="text-paper-warm">
                            5125 Second Avenue
                        </p>

                        <p className="text-paper-warm">
                            Pittsburgh, PA 15207
                        </p>

                    </div>



                    <div>

                        <h3 className="mb-6 text-sm uppercase tracking-[0.18em] text-red">
                            Contact
                        </h3>

                        <p className="text-paper-warm">
                            hello@hazelwoodcollab.org
                        </p>

                        <p className="text-paper-warm">
                            (412) 555-0100
                        </p>

                    </div>

                    <div>

                        <h3 className="mb-6 text-sm uppercase tracking-[0.18em] text-red">
                            Follow
                        </h3>

                        <div className="flex flex-wrap gap-2 text-paper-warm">

                            <Link href="https://www.facebook.com/p/Greater-Hazelwood-Community-Collaborative-GHCC-100080329506283/" target="_blank" rel="noopener noreferrer "className="no-underline">
                                Facebook
                            </Link>


                        </div>

                    </div>

                </div>


                <div className="my-16 border-t border-paper-edge/20" />


                <div className="flex justify-center text-mute text-center">

                    <p>
                        © 2026 Greater Hazelwood Community Collaborative.
                    </p>

                </div>

            </div>
        </footer>
    );
}