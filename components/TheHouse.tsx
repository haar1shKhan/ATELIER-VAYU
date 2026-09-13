"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TheHouse = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const lineRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const paraRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const statRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const borderRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
        defaults: { ease: "power3.out" },
      });

      // 1. Eyebrow label + its underline tick draw in first, like a cue mark
      tl.fromTo(labelRef.current, { opacity: 0, x: -10 }, { opacity: 1, x: 0, duration: 0.7 }, 0)
        .fromTo(
          dividerRef.current,
          { scaleX: 0 },
          { scaleX: 1, duration: 0.8, ease: "power2.out", transformOrigin: "left" },
          0.15
        )

        // 2. Headline lines rise out of their masks — the signature "editorial reveal"
        .fromTo(
          lineRefs.current,
          { yPercent: 115, rotate: 2 },
          { yPercent: 0, rotate: 0, duration: 1.1, stagger: 0.12 },
          0.25
        )

        // 3. Body copy drifts up softly, offset from each other
        .fromTo(
          paraRefs.current,
          { opacity: 0, y: 22 },
          { opacity: 1, y: 0, duration: 0.9, stagger: 0.12 },
          0.75
        )

        // 4. Divider line above the stats draws left-to-right
        .fromTo(
          borderRef.current,
          { scaleX: 0 },
          { scaleX: 1, duration: 1, ease: "power2.inOut", transformOrigin: "left" },
          0.95
        )

        // 5. Stats fade/rise in, numbers counting up beneath the reveal
        .fromTo(
          statRefs.current,
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.1 },
          1.05
        )

        // 6. Manifesto link arrives last, understated
        .fromTo(ctaRef.current, { opacity: 0, x: -8 }, { opacity: 1, x: 0, duration: 0.7 }, 1.35);

      // Count-up numbers, timed to land with the stat fade-in
      const counters: { el: HTMLParagraphElement | null; to: number; suffix: string; decimals?: number }[] = [
        { el: statRefs.current[0], to: 340, suffix: "+" },
        { el: statRefs.current[1], to: 120, suffix: " hrs" },
        { el: statRefs.current[2], to: 100, suffix: "%" },
      ];

      counters.forEach(({ el, to, suffix }, i) => {
        if (!el) return;
        const counter = { val: 0 };
        tl.to(
          counter,
          {
            val: to,
            duration: 1.1,
            ease: "power2.out",
            onUpdate: () => {
              el.textContent = `${Math.round(counter.val)}${suffix}`;
            },
          },
          1.05 + i * 0.1
        );
      });

      // Subtle magnetic underline sweep on the manifesto link's icon
      const link = ctaRef.current;
      const icon = link?.querySelector("[data-icon]");
      if (link && icon) {
        const enter = () => gsap.to(icon, { x: 4, duration: 0.3, ease: "power2.out" });
        const leave = () => gsap.to(icon, { x: 0, duration: 0.3, ease: "power2.out" });
        link.addEventListener("mouseenter", enter);
        link.addEventListener("mouseleave", leave);
        return () => {
          link.removeEventListener("mouseenter", enter);
          link.removeEventListener("mouseleave", leave);
        };
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 sm:py-32 bg-surface overflow-hidden" id="house">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Editorial Whitespace Rhythm */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-3">
            <span
              ref={labelRef}
              className="font-label-lg text-secondary tracking-[0.25em] uppercase text-xs inline-block"
            >
              01 / THE HOUSE
            </span>
            <div ref={dividerRef} className="mt-4 w-12 h-px bg-secondary/40 origin-left"></div>
          </div>
          <div className="lg:col-span-9">
            <h2 className="font-display-lg text-3xl sm:text-5xl lg:text-6xl text-primary leading-[1.15] mb-10 font-normal">
              <span className="block overflow-hidden">
                <span
                  ref={(el) => {
                    lineRefs.current[0] = el;
                  }}
                  className="block will-change-transform"
                >
                  INDIAN CRAFT,
                </span>
              </span>
              <span className="block overflow-hidden">
                <span
                  ref={(el) => {
                    lineRefs.current[1] = el;
                  }}
                  className="block italic text-secondary will-change-transform"
                >
                  SEEN DIFFERENTLY.
                </span>
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-on-surface-variant font-light text-base sm:text-lg leading-relaxed">
              <p
                ref={(el) => {
                  paraRefs.current[0] = el;
                }}
              >
                Rooted in centuries of craftsmanship and shaped for the modern wardrobe, our
                collections bring together traditional silhouettes, refined textiles and
                contemporary architectural cuts.
              </p>
              <p
                ref={(el) => {
                  paraRefs.current[1] = el;
                }}
                className="text-sm sm:text-base"
              >
                Every garment reflects rigorous pattern-making, hand-spun silks from Varanasi, and
                heritage bullion zardozi rendered in tonal, minimalist discipline. We do not mimic
                the past; we converse with it.
              </p>
            </div>
            <div className="mt-12 pt-8 border-t border-outline-variant/50 relative flex flex-wrap items-center justify-between gap-6">
              <div
                ref={borderRef}
                className="absolute -top-px left-0 w-full h-px bg-secondary origin-left"
              ></div>
              <div className="flex items-center gap-8">
                <div>
                  <p
                    ref={(el) => {
                      statRefs.current[0] = el;
                    }}
                    className="font-display-lg text-2xl text-primary"
                  >
                    0+
                  </p>
                  <p className="text-[10px] uppercase tracking-widest text-outline">
                    Master Artisans
                  </p>
                </div>
                <div className="h-8 w-px bg-outline-variant"></div>
                <div>
                  <p
                    ref={(el) => {
                      statRefs.current[1] = el;
                    }}
                    className="font-display-lg text-2xl text-primary"
                  >
                    0 hrs
                  </p>
                  <p className="text-[10px] uppercase tracking-widest text-outline">
                    Average Hand Embroidery
                  </p>
                </div>
                <div className="h-8 w-px bg-outline-variant"></div>
                <div>
                  <p
                    ref={(el) => {
                      statRefs.current[2] = el;
                    }}
                    className="font-display-lg text-2xl text-primary"
                  >
                    0%
                  </p>
                  <p className="text-[10px] uppercase tracking-widest text-outline">
                    Mulberry &amp; Tussar Silk
                  </p>
                </div>
              </div>
              <a
                ref={ctaRef}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary-container font-medium hover:text-primary transition-colors"
                href="#craft"
              >
                READ MANIFESTO{" "}
                <span className="material-symbols-outlined text-sm" data-icon="east">
                  east
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheHouse;