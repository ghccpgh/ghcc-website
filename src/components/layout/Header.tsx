import Link from "next/link";
import Image from "next/image";
import logo from "@/../public/ghcc-logo.png";
import Nav from "./Nav";

export default function Header() {
  return (
    <header
      className="sticky top-0 z-50 border-b border-paper-edge bg-paper/90 backdrop-blur-md "
      role="banner"
    >
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-4 py-4 sm:gap-8 sm:px-6 md:px-12 md:py-8">
        <Link
          href="/"
          aria-label="Greater Hazelwood Community Collaborative, home"
          className="flex flex-row items-center gap-3 no-underline"
        >
          <Image
            src={logo}
            alt=""
            width={44}
            height={44}
            className="h-11 w-11 flex-shrink-0"
            priority
          />
          <span className="flex flex-col leading-tight">
            <span className="font-display text-lg font-semibold tracking-tight text">
              Greater Hazelwood
            </span>
            <span className="text-[0.7rem] font-medium uppercase tracking-[0.16em] text-mute">
              Community Collaborative
            </span>
          </span>
        </Link>

        <Nav />
      </div>
    </header>
  );
}