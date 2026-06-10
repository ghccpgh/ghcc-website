"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";

type NavItem = {
  href: string;
  label: string;
  isCTA?: boolean;
  children?: { href: string; label: string }[];
};

const links: NavItem[] = [
  { href: "/", label: "Home" },
  {
    href: "/about",
    label: "About",
    children: [
      { href: "/mission", label: "Mission" },
      { href: "/team", label: "Team" },
      { href: "/history", label: "History" },
      { href: "/board", label: "Board" },
    ],
  },
  { href: "/announcements", label: "Announcements" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact", isCTA: true },
];

export default function Nav() {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  // Close everything when route changes
  useEffect(() => {
    setIsMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  // Close dropdown on Escape, and on clicks outside the nav
  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenDropdown(null);
      }
    };
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("keydown", handleKeydown);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleKeydown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav aria-label="Primary" ref={navRef}>
      {/* Mobile hamburger button */}
      <button
        type="button"
        onClick={() => setIsMobileOpen((prev) => !prev)}
        aria-expanded={isMobileOpen}
        aria-controls="primary-nav-list"
        aria-label={isMobileOpen ? "Close navigation menu" : "Open navigation menu"}
        className="flex flex-col gap-[5px] p-2 md:hidden"
      >
        <span
          className={`block h-[2px] w-6 bg-ink transition-transform duration-300 ${
            isMobileOpen ? "translate-y-[7px] rotate-45" : ""
          }`}
        />
        <span
          className={`block h-[2px] w-6 bg-ink transition-opacity duration-300 ${
            isMobileOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`block h-[2px] w-6 bg-ink transition-transform duration-300 ${
            isMobileOpen ? "-translate-y-[7px] -rotate-45" : ""
          }`}
        />
      </button>

      {/* Nav list */}
      <ul
        id="primary-nav-list"
        className={`
          ${isMobileOpen ? "flex" : "hidden"}
          absolute right-6 top-full mt-2 min-w-[220px] flex-col gap-0
          rounded-xl border border-paper-edge bg-paper p-2 shadow-lg
          md:static md:mt-0 md:flex md:flex-row md:items-center md:gap-1
          md:rounded-none md:border-0 md:bg-transparent md:p-0 md:shadow-none
        `}
      >
        {links.map((item) => {
          const active = isActive(item.href);
          const hasChildren = !!item.children?.length;
          const isDropdownOpen = openDropdown === item.href;

          // Item with a dropdown (About)
          if (hasChildren) {
            return (
              <li
                key={item.href}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.href)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <div className="flex items-center">
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`
                      inline-flex items-center gap-1 rounded-full px-4 py-2
                      text-[0.95rem] font-medium no-underline transition-colors duration-200
                      ${active ? "bg-ink text-paper" : "text-ink hover:bg-paper-warm"}
                    `}
                  >
                    {item.label}
                    {/* Caret icon */}
                    <svg
                      aria-hidden="true"
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      className={`transition-transform duration-200 ${
                        isDropdownOpen ? "rotate-180" : ""
                      }`}
                    >
                      <path
                        d="M3 4.5L6 7.5L9 4.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                      />
                    </svg>
                  </Link>
                  {/* Mobile-only expand button (toggles inline submenu) */}
                  <button
                    type="button"
                    onClick={() =>
                      setOpenDropdown(isDropdownOpen ? null : item.href)
                    }
                    aria-expanded={isDropdownOpen}
                    aria-label={`${isDropdownOpen ? "Collapse" : "Expand"} ${item.label} submenu`}
                    className="ml-auto p-2 md:hidden"
                  >
                    <svg
                      aria-hidden="true"
                      width="14"
                      height="14"
                      viewBox="0 0 12 12"
                      className={`transition-transform duration-200 ${
                        isDropdownOpen ? "rotate-180" : ""
                      }`}
                    >
                      <path
                        d="M3 4.5L6 7.5L9 4.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                      />
                    </svg>
                  </button>
                </div>

                {/* Dropdown panel */}
                <ul
                  className={`
                    ${isDropdownOpen ? "block" : "hidden"}
                    md:absolute md:left-0 md:top-full md:mt-1 md:min-w-[200px]
                    md:rounded-xl md:border md:border-paper-edge md:bg-paper md:p-2 md:shadow-lg
                    pl-4 md:pl-2
                  `}
                  onFocus={() => setOpenDropdown(item.href)}
                  onBlur={(e) => {
                    // Only close if focus left the entire submenu
                    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                      setOpenDropdown(null);
                    }
                  }}
                >
                  {item.children!.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        aria-current={isActive(child.href) ? "page" : undefined}
                        className={`
                          block rounded-md px-3 py-2 text-sm no-underline
                          transition-colors duration-200
                          ${
                            isActive(child.href)
                              ? "bg-ink text-paper"
                              : "text-ink-soft hover:bg-paper-warm hover:text-ink"
                          }
                        `}
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            );
          }

          // Regular link (no dropdown)
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`
                  inline-block rounded-full px-4 py-2 text-[0.95rem] font-medium
                  no-underline transition-colors duration-200
                  ${
                    item.isCTA
                      ? "bg-red text-paper hover:bg-red-dark"
                      : active
                      ? "bg-ink text-paper"
                      : "text-ink hover:bg-paper-warm"
                  }
                `}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}