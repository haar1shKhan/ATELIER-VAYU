"use client";

import Link from "next/link";
import LdProductShowcase from "./LdProductShowcase";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProductShowcase = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerWrapRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);

  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imgWrapRefs = useRef<(HTMLDivElement | null)[]>([]);
  const textWrapRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      // ── Section header reveal ──────────────────────────────
      const headerTl = gsap.timeline({
        scrollTrigger: { trigger: headerWrapRef.current, start: "top 85%", once: true },
        defaults: { ease: "power3.out" },
      });

      headerTl
        .fromTo(labelRef.current, { opacity: 0, x: -10 }, { opacity: 1, x: 0, duration: 0.6 }, 0)
        .fromTo(
          headingRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.9 },
          0.12
        )
        .fromTo(
          subRef.current,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.7 },
          0.35
        )
        .fromTo(
          dividerRef.current,
          { scaleX: 0 },
          { scaleX: 1, duration: 1, ease: "power2.inOut", transformOrigin: "left" },
          0.2
        );

      // Continuous, very slow luxury "sheen" sweeping across the heading — signature loop for this section
      if (headingRef.current) {
        gsap.set(headingRef.current, { backgroundPosition: "200% 0" });
        gsap.to(headingRef.current, {
          backgroundPosition: "-200% 0",
          duration: 9,
          ease: "none",
          repeat: -1,
          delay: 1.2,
        });
      }

      // ── Asymmetric split-card reveal (menswear enters from left, womenswear from right) ──
      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        const fromX = i === 0 ? -50 : 50;
        const imgWrap = imgWrapRefs.current[i];
        const textWrap = textWrapRefs.current[i];

        const tl = gsap.timeline({
          scrollTrigger: { trigger: card, start: "top 82%", once: true },
          defaults: { ease: "power3.out" },
        });

        tl.fromTo(card, { opacity: 0, x: fromX }, { opacity: 1, x: 0, duration: 1.1 }, 0)
          .fromTo(imgWrap, { scale: 1.22 }, { scale: 1, duration: 1.6, ease: "power2.out" }, 0)
          .fromTo(
            textWrap ? Array.from(textWrap.children) : [],
            { opacity: 0, y: 18 },
            { opacity: 1, y: 0, duration: 0.7, stagger: 0.08 },
            0.4
          );

        // Slow, continuous Ken Burns drift on the portrait — starts once the reveal settles
        if (imgWrap) {
          gsap.to(imgWrap, {
            scale: 1.08,
            duration: 16 + i * 2,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
            delay: 1.6,
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 sm:py-32 bg-surface" id="collection">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div
          ref={headerWrapRef}
          className="relative flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-outline-variant/60"
        >
          <div ref={dividerRef} className="absolute -bottom-px left-0 w-full h-px bg-secondary origin-left"></div>
          <div>
            <span
              ref={labelRef}
              className="font-label-lg text-secondary tracking-[0.25em] uppercase text-xs inline-block"
            >
              02 / COLLECTION
            </span>

            <h2
              ref={headingRef}
              className="font-display-lg text-3xl sm:text-4xl lg:text-5xl text-primary mt-2 bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(100deg, currentColor 40%, color-mix(in srgb, currentColor 55%, white) 50%, currentColor 60%)",
                backgroundSize: "200% 100%",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              THE NEW SEASON
            </h2>
          </div>

          <p ref={subRef} className="text-xs uppercase tracking-[0.2em] text-outline mt-4 md:mt-0 font-medium">
            STRICTLY ASYMMETRICAL CURATION · AUTUMN / WINTER 2025
          </p>
        </div>

        {/* Product Grid */}
        <LdProductShowcase />
      </div>

      {/* 5. MEN / WOMEN SPLIT EDITORIAL */}
      <section className="py-12 bg-surface-container-low border-y border-outline-variant/30">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Men Split Card */}
            <div
              ref={(el) => {
                cardRefs.current[0] = el;
              }}
              className="group relative overflow-hidden rounded-xl bg-tertiary aspect-[3/4] flex flex-col justify-end p-8 sm:p-12"
              id="menswear"
            >
              <div
                ref={(el) => {
                  imgWrapRefs.current[0] = el;
                }}
                className="absolute inset-0 will-change-transform"
              >
                <img
                  alt="Men - Structured Tailoring & Heritage Bandhgalas"
                  className="w-full h-full object-cover object-center filter brightness-90 group-hover:scale-105 transition-transform duration-1000 ease-out"
                  data-alt="A striking digital installation art piece featuring glowing, generative geometric shapes suspended in a vast, minimalist gallery space. The room is illuminated by high-key, soft white lighting that creates a bright, modern light-mode aesthetic. The artwork relies on a sophisticated palette of deep blacks and pristine whites, punctuated by intense accents of vibrant red. The mood is serene yet technologically advanced."
                  src="https://lh3.googleusercontent.com/aida/AEtjO1XbYMwPup5s-34rTBxue1Vzqb4At70mGKbu8HdKuBEHtW-AFlH8LTmVmEqSd2ZnmlA2tEGanEFqGEHscsZusMq-or7PN8DKlpsjJXwFRXCRNjaVttANZqLlVGCyJdNXNduGNcXBky_NX2IjMu-ugfr116uJqPAkeZM8VBE9JDdg6afkXI8zo2FojIAEBLD0FG_WCNb8xu8Vx4lBx__F0xQMW8jGSZ8wuJjg2In_IZ0_2VslecyyhX7NRqM"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-tertiary/90 via-tertiary/30 to-transparent"></div>
              <div ref={(el) => { textWrapRefs.current[0] = el; }} className="relative z-10">
                <span className="text-[10px] uppercase tracking-[0.3em] text-secondary-fixed font-medium">
                  DISCIPLINE &amp; SHAPE
                </span>
                <h3 className="font-display-lg text-3xl sm:text-4xl text-surface-bright mt-1 mb-2 font-normal">
                  MEN
                </h3>
                <p className="text-surface-dim font-light text-sm max-w-sm mb-6">
                  Structured Tailoring &amp; Heritage Bandhgalas cut from hand-twisted mulberry silks and fine merino blends.
                </p>
                <Link
                  className="group/link inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-surface-bright font-medium group-hover:translate-x-1 transition-transform"
                  href="/shop"
                >
                  <span className="relative">
                    SHOP MEN
                    <span className="absolute left-0 -bottom-1 h-px w-full bg-surface-bright origin-left scale-x-0 group-hover/link:scale-x-100 transition-transform duration-500 ease-out"></span>
                  </span>
                  <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>

            {/* Women Split Card */}
            <div
              ref={(el) => {
                cardRefs.current[1] = el;
              }}
              className="group relative overflow-hidden rounded-xl bg-tertiary aspect-[3/4] flex flex-col justify-end p-8 sm:p-12"
              id="womenswear"
            >
              <div
                ref={(el) => {
                  imgWrapRefs.current[1] = el;
                }}
                className="absolute inset-0 will-change-transform"
              >
                <img
                  alt="Women - Sculptural Silhouettes & Hand-Draped Couture"
                  className="w-full h-full object-cover object-center filter brightness-90 group-hover:scale-105 transition-transform duration-1000 ease-out"
                  data-alt="A striking digital installation art piece featuring glowing, generative geometric shapes suspended in a vast, minimalist gallery space. The room is illuminated by high-key, soft white lighting that creates a bright, modern light-mode aesthetic. The artwork relies on a sophisticated palette of deep blacks and pristine whites, punctuated by intense accents of vibrant red. The mood is serene yet technologically advanced."
                  src="https://lh3.googleusercontent.com/aida/AEtjO1UoZH7j47Q1-FCz6PVbZK-LK0Fd6bec5W52FjnoJGeuAEw5oOoWKggk54RYNhrUd3CRP8rU9jZOhkXBgnX84TzHVr98aYL9Phk1-0qzRjCpH5i5XbBlenCAqmrdwwE9l61TWk7sqqReW_3Rw6C4adUDB74N1mg6XuVQDHN9EjtNDPufeuafZd8MVJnKFDUs_ka5_606RLrNxy-JCX38usm9zBruWkNsl1yXOpdCPB9wn7iKcMLw2dvjDzI"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-tertiary/90 via-tertiary/30 to-transparent"></div>
              <div ref={(el) => { textWrapRefs.current[1] = el; }} className="relative z-10">
                <span className="text-[10px] uppercase tracking-[0.3em] text-secondary-fixed font-medium">
                  FLUIDITY &amp; GRACE
                </span>
                <h3 className="font-display-lg text-3xl sm:text-4xl text-surface-bright mt-1 mb-2 font-normal">
                  WOMEN
                </h3>
                <p className="text-surface-dim font-light text-sm max-w-sm mb-6">
                  Sculptural Silhouettes &amp; Hand-Draped Couture rooted in traditional sari draping re-imagined with modern corset structures.
                </p>
                <Link
                  className="group/link inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-surface-bright font-medium group-hover:translate-x-1 transition-transform"
                  href="/shop"
                >
                  <span className="relative">
                    SHOP WOMEN
                    <span className="absolute left-0 -bottom-1 h-px w-full bg-surface-bright origin-left scale-x-0 group-hover/link:scale-x-100 transition-transform duration-500 ease-out"></span>
                  </span>
                  <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ProductShowcase;