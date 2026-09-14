"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import gsap from "gsap";

const NAV_LINKS = [
  { label: "Collection", href: "/shop" },
  { label: "The House", href: "/#house" },
  { label: "Menswear", href: "/shop" },
  { label: "Womenswear", href: "/shop" },
  { label: "Craft", href: "/#craft" },
  { label: "Journal", href: "/#journal" },
];

export default function Header() {
  const { cartCount, openCart } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const barTopRef = useRef<HTMLSpanElement>(null);
  const barMidRef = useRef<HTMLSpanElement>(null);
  const barBottomRef = useRef<HTMLSpanElement>(null);
  const overlayPanelRef = useRef<HTMLDivElement>(null);
  const linkInnerRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const metaRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const reduceMotionRef = useRef(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Build the open/close timeline once, then just play() / reverse() it on toggle
  useEffect(() => {
    reduceMotionRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ paused: true, defaults: { ease: "power3.out" } });

      // Hamburger morphs into an X, bars fade to a color that reads on the dark overlay
      tl.to(barTopRef.current, { rotate: 45, y: 7, backgroundColor: "#F5F1EA", duration: 0.5 }, 0)
        .to(barMidRef.current, { opacity: 0, scaleX: 0, duration: 0.3 }, 0)
        .to(barBottomRef.current, { rotate: -45, y: -7, backgroundColor: "#F5F1EA", duration: 0.5 }, 0)

        // Full-screen panel reveals from the hamburger's corner, like an aperture opening
        .fromTo(
          overlayPanelRef.current,
          { clipPath: "circle(0% at 94% 6%)" },
          { clipPath: "circle(150% at 94% 6%)", duration: 1.1, ease: "power4.inOut" },
          0
        )

        // Nav links rise out of their masks, staggered — the site's established reveal motif
        .fromTo(
          linkInnerRefs.current,
          { yPercent: 115 },
          { yPercent: 0, duration: 0.9, stagger: 0.08 },
          0.5
        )

        // Footer meta arrives last, understated
        .fromTo(metaRef.current, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.6 }, 0.95);

      tlRef.current = tl;
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const tl = tlRef.current;
    if (!tl) return;

    if (reduceMotionRef.current) {
      menuOpen ? tl.progress(1) : tl.progress(0);
      return;
    }

    menuOpen ? tl.play() : tl.reverse();
  }, [menuOpen]);

  // Lock scroll while the takeover menu is open, and allow Escape to close it
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`
          sticky top-0 z-40 w-full backdrop-blur-md transition-all duration-500 ease-out
          ${scrolled
            ? "bg-surface/95 border-b border-outline-variant/50 shadow-[0_1px_0_0_rgba(0,0,0,0.03)]"
            : "bg-surface/80 border-b border-transparent"}
        `}
      >
        <div
          className={`
            max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16
            flex items-center justify-between
            transition-all duration-500 ease-out
            ${scrolled ? "h-16" : "h-24"}
          `}
        >
          {/* Brand Logo & Monogram */}
          <Link className="flex items-center gap-3 text-primary group shrink-0" href="/">
            <div
              className={`
                text-primary group-hover:rotate-45 transition-all duration-700 ease-out shrink-0
                ${scrolled ? "w-4 h-4" : "w-5 h-5"}
              `}
            >
              <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path
                  clipRule="evenodd"
                  d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z"
                  fill="currentColor"
                  fillRule="evenodd"
                />
                <path
                  clipRule="evenodd"
                  d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z"
                  fill="currentColor"
                  fillRule="evenodd"
                />
              </svg>
            </div>
            <span
              className={`
                font-display-lg tracking-[0.22em] uppercase text-primary font-medium whitespace-nowrap
                transition-all duration-500 ease-out
                ${scrolled ? "text-base" : "text-lg"}
              `}
            >
              ATELIER VAYU
            </span>
          </Link>

          {/* Actions: expandable search sits right beside the hamburger */}
          <div className="flex items-center gap-3 sm:gap-5 shrink-0">
            <div className="hidden sm:flex items-center">
              <div
                className={`
                  flex items-center overflow-hidden rounded-full border bg-surface-container-low
                  transition-all duration-400 ease-out
                  ${searchOpen
                    ? "w-56 lg:w-64 border-primary/50 px-3.5 py-2"
                    : "w-9 h-9 border-outline-variant/50 px-0 py-0 justify-center"}
                `}
              >
                <button
                  type="button"
                  aria-label={searchOpen ? "Submit search" : "Open search"}
                  onClick={() => setSearchOpen(true)}
                  className="text-outline hover:text-primary transition-colors shrink-0"
                >
                  <span className="material-symbols-outlined text-lg leading-none">search</span>
                </button>
                <input
                  autoFocus={searchOpen}
                  onBlur={() => setSearchOpen(false)}
                  placeholder="Search the collection…"
                  className={`
                    bg-transparent text-xs tracking-wide text-on-surface placeholder:text-outline/70
                    focus:outline-none transition-all duration-300 ease-out
                    ${searchOpen ? "w-full ml-2 opacity-100" : "w-0 ml-0 opacity-0"}
                  `}
                />
              </div>
            </div>

            {/* Currency */}
            <div className="hidden md:inline-flex text-[10px] uppercase tracking-[0.2em] text-secondary font-medium px-3 py-2 border border-outline-variant/40 rounded-full bg-surface-container-low/60 whitespace-nowrap">
              INR (₹)
            </div>

            {/* Bag Trigger */}
            <button
              onClick={openCart}
              className="relative flex items-center gap-2 bg-primary-container text-surface-bright px-4 py-2 rounded-full hover:bg-primary transition-all duration-300 shadow-sm cursor-pointer active:scale-95 whitespace-nowrap"
              aria-label="View Shopping Bag"
            >
              <span className="material-symbols-outlined text-base leading-none">shopping_bag</span>
              <span className="text-[10px] font-medium tracking-[0.22em] uppercase">
                BAG ({cartCount})
              </span>
            </button>

            {/* Hamburger — morphs into an X via GSAP, drives the full-screen menu */}
            <button
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              className="relative z-[60] w-9 h-9 flex flex-col items-center justify-center gap-[6px] shrink-0"
            >
              <span ref={barTopRef} className="block w-5 h-[1.5px] bg-primary rounded-full" />
              <span ref={barMidRef} className="block w-5 h-[1.5px] bg-primary rounded-full" />
              <span ref={barBottomRef} className="block w-5 h-[1.5px] bg-primary rounded-full" />
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen takeover menu */}
      <div
        className={`fixed inset-0 z-50 ${menuOpen ? "" : "pointer-events-none"}`}
        aria-hidden={!menuOpen}
      >
        <div
          ref={overlayPanelRef}
          className="absolute inset-0 bg-tertiary flex flex-col justify-center px-6 sm:px-10 lg:px-20"
          style={{ clipPath: "circle(0% at 94% 6%)" }}
        >
          <nav className="flex flex-col gap-2 sm:gap-3">
            {NAV_LINKS.map((link, i) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="group/navlink flex items-baseline gap-4 sm:gap-6 py-2 sm:py-3"
              >
                <span className="text-xs sm:text-sm text-secondary-fixed/70 tracking-widest font-medium">
                  0{i + 1}
                </span>
                <span className="relative inline-block overflow-hidden h-[1.15em] font-display-lg text-4xl sm:text-6xl lg:text-7xl leading-none">
                  <span
                    ref={(el) => {
                      linkInnerRefs.current[i] = el;
                    }}
                    className="block"
                  >
                    <span className="block text-surface-bright transition-transform duration-500 ease-out group-hover/navlink:-translate-y-full">
                      {link.label}
                    </span>
                    <span className="block italic text-secondary-fixed absolute inset-0 translate-y-full transition-transform duration-500 ease-out group-hover/navlink:translate-y-0">
                      {link.label}
                    </span>
                  </span>
                </span>
              </Link>
            ))}
          </nav>

          <div
            ref={metaRef}
            className="mt-12 sm:mt-16 flex flex-wrap items-center gap-x-10 gap-y-3 text-[10px] uppercase tracking-[0.25em] text-surface-dim"
          >
            <span>Autumn / Winter 2025</span>
            <span className="hidden sm:inline">·</span>
            <a href="mailto:atelier@vayu.com" className="hover:text-surface-bright transition-colors">
              atelier@vayu.com
            </a>
            <span className="hidden sm:inline">·</span>
            <span>New Delhi · Mumbai · Dubai</span>
          </div>
        </div>
      </div>
    </>
  );
}