"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";

interface HeroProps {
  campaign: {
    title: string;
    subtitle: string;
    tagline: string;
    image: string;
  };
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLSpanElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const paraRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const imgWrapRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const ctx = gsap.context(() => {
      // Entrance timeline — slow, editorial pacing, small distances so it reads as "premium" not "bouncy"
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.6, ease: "power2.out" },
        0
      )
        .fromTo(
          imgWrapRef.current,
          { scale: 1.12, opacity: 0 },
          { scale: 1, opacity: 1, duration: 2.4, ease: "power2.out" },
          0
        )
        .fromTo(
          badgeRef.current,
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.9 },
          0.5
        )
        .fromTo(
          headlineRef.current,
          { opacity: 0, y: 28 },
          { opacity: 1, y: 0, duration: 1.1 },
          0.65
        )
        .fromTo(
          paraRef.current,
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 1 },
          0.85
        )
        .fromTo(
          ctaRef.current?.children ?? [],
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 },
          1.0
        )
        .fromTo(
          scrollRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 1 },
          1.3
        );

      // Continuous slow drift on the image for a subtle "living" feel — no scroll listener needed
      gsap.to(imgWrapRef.current, {
        scale: 1.04,
        duration: 14,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 2.4,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Gentle magnetic-lift on hover for the primary CTA — kept small so it stays tasteful
  const handleCtaEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    gsap.to(e.currentTarget, { y: -2, duration: 0.35, ease: "power2.out" });
  };
  const handleCtaLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    gsap.to(e.currentTarget, { y: 0, duration: 0.35, ease: "power2.out" });
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-[942px] flex items-end justify-start overflow-hidden bg-tertiary"
    >
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <div ref={imgWrapRef} className="absolute inset-0 will-change-transform">
          <img
            alt="Atelier Vayu Autumn Winter Campaign"
            className="w-full h-full object-cover object-center filter contrast-105"
            data-alt="A striking digital installation art piece featuring glowing, generative geometric shapes suspended in a vast, minimalist gallery space. The room is illuminated by high-key, soft white lighting that creates a bright, modern light-mode aesthetic. The artwork relies on a sophisticated palette of deep blacks and pristine whites, punctuated by intense accents of vibrant red. The mood is serene yet technologically advanced."
            src="cinematic_high_fashion_editorial_campaign_photograph_of_a_handsome_indian_male.png"
          />
        </div>
        {/* Dramatic editorial overlays */}
        <div
          ref={overlayRef}
          className="absolute inset-0 bg-gradient-to-t from-tertiary/90 via-tertiary/40 to-transparent"
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-tertiary/60 via-transparent to-transparent"></div>
      </div>

      {/* Floating Minimalist Typography */}
      <div className="relative z-10 max-w-[1440px] w-full mx-auto px-6 sm:px-10 lg:px-16 pb-16 lg:pb-24 pt-32">
        <div className="max-w-3xl">
          <span
            ref={badgeRef}
            className="inline-block text-[11px] sm:text-xs uppercase tracking-[0.35em] text-secondary-fixed font-medium mb-4 bg-tertiary/40 backdrop-blur-sm px-3 py-1 border border-secondary-fixed/30 rounded-full"
          >
            AUTUMN / WINTER 2025
          </span>
          <h1
            ref={headlineRef}
            className="font-display-lg text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-surface-bright leading-[1.05] tracking-tight mb-6 font-normal"
          >
            HERITAGE,
            <br />
            <span className="italic font-light">REIMAGINED.</span>
          </h1>
          <p
            ref={paraRef}
            className="font-body-lg text-sm sm:text-base md:text-lg text-surface-container-highest/90 max-w-xl font-light tracking-wide leading-relaxed mb-10"
          >
            Contemporary Indian occasion wear, crafted with centuries of tradition at its core.
            Structured bandhgalas, sculptural drapes, and intricate bullion threadwork.
          </p>
          <div ref={ctaRef} className="flex flex-wrap items-center gap-6">
            <Link
              className="group inline-flex items-center gap-3 bg-secondary-fixed text-on-secondary-fixed px-7 py-3.5 rounded-full text-xs uppercase tracking-[0.22em] font-medium hover:bg-secondary hover:text-surface transition-colors duration-300 shadow-lg"
              href="/shop"
              onMouseEnter={handleCtaEnter}
              onMouseLeave={handleCtaLeave}
            >
              <span>EXPLORE THE COLLECTION</span>
              <span
                className="material-symbols-outlined text-sm transition-transform duration-300 group-hover:translate-x-1"
                data-icon="arrow_forward"
              >
                arrow_forward
              </span>
            </Link>
            <a
              className="inline-flex items-center text-xs uppercase tracking-[0.22em] text-surface-bright/90 hover:text-surface border-b border-surface-bright/40 hover:border-surface pb-1 transition-all"
              href="#house"
            >
              DISCOVER OUR STORY
            </a>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div
        ref={scrollRef}
        className="absolute bottom-8 right-8 lg:right-16 z-10 flex flex-col items-center gap-3"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] text-surface-dim -rotate-90 origin-bottom mb-2">
          SCROLL
        </span>
        <div className="w-[1px] h-12 bg-surface-dim/30 overflow-hidden">
          <div className="w-full h-full bg-secondary-fixed animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}