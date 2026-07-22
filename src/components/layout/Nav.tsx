"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";

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
      { href: "/about/mission", label: "Mission" },
      { href: "/about/partners", label: "Partners" },
      { href: "/about/history", label: "History" },
      { href: "/about/board", label: "Board" },
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
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [headerBottom, setHeaderBottom] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Compute header bottom position whenever dropdown opens
  const updateHeaderBottom = useCallback(() => {
    if (navRef.current) {
      const header = navRef.current.closest("header");
      if (header) {
        const rect = header.getBoundingClientRect();
        setHeaderBottom(rect.bottom);
      }
    }
  }, []);

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
      // Check if click is inside the nav or the mega panel
      const megaPanel = document.getElementById("mega-menu-panel");
      if (
        navRef.current &&
        !navRef.current.contains(e.target as Node) &&
        (!megaPanel || !megaPanel.contains(e.target as Node))
      ) {
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

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const handleMouseEnter = (href: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    updateHeaderBottom();
    setOpenDropdown(href);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 400);
  };

  // Find the currently open item (for rendering the mega panel)
  const openItem = links.find((l) => l.href === openDropdown && l.children?.length);

  // Check if the current page is within a section that has sub-routes (e.g. /about/*)
  const isInSubSection = links.some((l) => l.children?.length && pathname.startsWith(l.href) && pathname !== "/");

// Short descriptions shown in the mega-menu left column for each section
const sectionDescriptions: Record<string, string> = {
  "/about":
    "Who we are, why we exist, and the people shaping Greater Hazelwood's future.",
};
  // Mega menu panel rendered via portal so it can span full viewport width
  const megaPanel = mounted
    ? createPortal(
        <div
          id="mega-menu-panel"
          className={`
            hidden md:block fixed left-0 right-0 z-[49]
            transition-all duration-300 ease-in-out overflow-hidden
            ${openItem ? "opacity-100" : "opacity-0 pointer-events-none"}
          `}
          style={{
            top: `${headerBottom}px`,
            maxHeight: openItem ? "600px" : "0px",
          }}
          onMouseEnter={() => {
            if (openItem) handleMouseEnter(openItem.href);
          }}
          onMouseLeave={handleMouseLeave}
        >
          <div className="border-t border-paper-edge bg-paper text-ink shadow-[0_8px_24px_-4px_rgba(0,0,0,0.15)]">
            <div className="mx-auto max-w-[1280px] px-6 py-12 md:px-12 md:py-16">
              <div className="grid grid-cols-1 gap-12 md:grid-cols-[minmax(220px,0.8fr)_1px_1.2fr]">
                {/* Left column: section intro */}
                <div className="flex flex-col">
                  <h2 className="font-display text-2xl font-normal leading-tight text-ink md:text-3xl">
                    {openItem?.label}
                  </h2>
                  <p className="mt-4 max-w-[28ch] text-base leading-relaxed text-ink/70">
                    {sectionDescriptions[openItem?.href ?? ""] ?? ""}
                  </p>
                  <Link
                    href={openItem?.href ?? "#"}
                    aria-label={`${openItem?.label} overview`}
                    className="group mt-auto inline-flex h-12 w-12 items-center justify-center rounded-full border border-ink/40 text-ink transition-all duration-200 hover:border-ink hover:bg-ink hover:text-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                  >
                    <span aria-hidden="true" className="text-lg">→</span>
                  </Link>
                </div>

                {/* Vertical divider */}
                <div className="hidden bg-ink/15 md:block" aria-hidden="true" />

                {/* Right column: sub-links as a vertical list */}
                <ul className="flex flex-col">
                  {openItem?.children?.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        aria-current={isActive(child.href) ? "page" : undefined}
                        className={`
                          group flex items-center justify-between border-b border-ink/10 py-4
                          font-display text-lg no-underline transition-colors duration-200
                          ${
                            isActive(child.href)
                              ? "text-red"
                              : "text-ink hover:text-red"
                          }
                        `}
                      >
                        {child.label}
                        <span
                          aria-hidden="true"
                          className="translate-x-0 text-ink/40 transition-all duration-200 group-hover:translate-x-1 group-hover:text-red"
                        >
                          →
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )
    : null;   

  return (
    <>
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

            // Item with a dropdown -- About or History
            if (hasChildren) {
              return (
                <li
                  key={item.href}
                  onMouseEnter={() => handleMouseEnter(item.href)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="flex items-center">
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`
                        inline-flex items-center gap-1 rounded-full px-4 py-2
                        text-[0.95rem] font-medium no-underline transition-colors duration-200
                        ${active || isDropdownOpen ? "bg-ink text-paper" : "text-ink hover:bg-paper-warm"}
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

                  {/* Mobile-only inline submenu */}
                  <ul
                    className={`
                      ${isDropdownOpen ? "block" : "hidden"}
                      pl-4 md:hidden
                    `}
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

      {/* Full-width mega-menu panel (portaled to body for full-width positioning) */}
      {megaPanel}
    </>
  );
}