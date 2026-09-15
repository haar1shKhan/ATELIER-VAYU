"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const COLUMNS = [
  {
    title: "COLLECTIONS",
    links: [
      { label: "The Ceremonial Archive", href: "/shop" },
      { label: "The Festive Edit", href: "/shop" },
      { label: "Menswear Occasion", href: "/shop" },
      { label: "Bridal & Couture", href: "/shop" },
      { label: "Asymmetric Bandhgala", href: "/shop/ivory-silk-asymmetric-bandhgala" },
    ],
  },
  {
    title: "THE HOUSE",
    links: [
      { label: "Manifesto", href: "/#house" },
      { label: "Artisan Guilds", href: "/#craft" },
      { label: "Bespoke Fittings", href: "/shop/ivory-silk-asymmetric-bandhgala" },
      { label: "Sustainability & Silks", href: "/#craft" },
      { label: "Press & Editorial", href: "/#journal" },
    ],
  },
  {
    title: "CONCIERGE",
    links: [
      { label: "Virtual Styling Consultation", href: "/shop/ivory-silk-asymmetric-bandhgala" },
      { label: "Complimentary Alterations", href: "/#house" },
      { label: "Global Insured Shipping", href: "/#house" },
      { label: "Care Guide", href: "/#craft" },
      { label: "Contact Concierge", href: "/shop/ivory-silk-asymmetric-bandhgala" },
    ],
  },
];

const LEGAL_LINKS = ["PRIVACY POLICY", "TERMS OF SERVICE", "BESPOKE CHARTER"];

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="group/flink relative inline-block text-surface-dim/80 hover:text-surface-bright transition-colors">
      {children}
      <span className="absolute left-0 -bottom-0.5 h-px w-full bg-surface-bright origin-left scale-x-0 group-hover/flink:scale-x-100 transition-transform duration-400 ease-out" />
    </Link>
  );
}

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const watermarkRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: footerRef.current, start: "top 88%", once: true },
        defaults: { ease: "power3.out" },
      });

      tl.fromTo(".footer-brand", { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.9 }, 0)
        .fromTo(
          ".footer-col",
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.12 },
          0.15
        )
        .fromTo(dividerRef.current, { scaleX: 0 }, { scaleX: 1, duration: 1.1, ease: "power2.inOut", transformOrigin: "left" }, 0.5)
        .fromTo(".footer-legal", { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.7 }, 0.65);

      // Giant faint wordmark drifting almost imperceptibly — quiet luxury backdrop
      if (watermarkRef.current) {
        gsap.set(watermarkRef.current, { xPercent: -1.5 });
        gsap.to(watermarkRef.current, {
          xPercent: 1.5,
          duration: 24,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      }
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative bg-tertiary text-surface-dim pt-20 pb-12 border-t border-surface-dim/10 overflow-hidden"
    >
      {/* Giant background wordmark */}
      <div
        ref={watermarkRef}
        className="pointer-events-none select-none absolute -bottom-[6%] left-1/2 -translate-x-1/2 z-0 whitespace-nowrap"
        aria-hidden="true"
      >
        <span className="font-display-lg text-[12vw] leading-none tracking-tight text-surface-bright/[0.04]">
          ATELIER VAYU
        </span>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="footer-brand lg:col-span-2">
            <div className="flex items-center gap-3 text-surface-bright mb-6 group w-fit">
              <div className="w-5 h-5 text-secondary-fixed group-hover:rotate-45 transition-transform duration-700 ease-out">
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
              <span className="font-serif tracking-[0.2em] uppercase font-medium text-lg text-surface-bright">
                ATELIER VAYU
              </span>
            </div>
            <p className="font-light text-sm max-w-sm leading-relaxed text-surface-dim/80">
              A contemporary luxury fashion house celebrating Indian craft, timeless tailoring, and
              refined bespoke occasions.
            </p>
            <div className="mt-6">
              <span className="text-[10px] uppercase tracking-widest text-secondary-fixed">PRIVATE ATELIERS</span>
              <p className="text-xs text-surface-dim mt-1">New Delhi · Mumbai · London · New York (By Appointment)</p>
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title} className="footer-col">
              <h5 className="text-xs uppercase tracking-[0.2em] text-surface-bright font-medium mb-4">{col.title}</h5>
              <ul className="space-y-2.5 text-xs font-light">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <FooterLink href={link.href}>{link.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="relative pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-light text-surface-dim/60">
          <div ref={dividerRef} className="absolute top-0 left-0 w-full h-px bg-secondary-fixed/50 origin-left" />
          <p className="footer-legal">© 2025 ATELIER VAYU. ALL RIGHTS RESERVED.</p>
          <div className="footer-legal flex items-center gap-6 mt-4 sm:mt-0">
            {LEGAL_LINKS.map((label) => (
              <FooterLink key={label} href="/#house">
                {label}
              </FooterLink>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}