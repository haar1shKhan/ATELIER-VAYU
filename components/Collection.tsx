"use client";

import Link from "next/link";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Collection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const wipeRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const badgeRef = useRef<HTMLSpanElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const paraRef = useRef<HTMLParagraphElement>(null);
  const ctaWrapRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      // Curtain-wipe reveal: a solid panel slides off the image like a stage curtain
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 78%",
          once: true,
        },
      });

      tl.fromTo(
        imgRef.current,
        { scale: 1.15 },
        { scale: 1, duration: 1.8, ease: "power3.out" },
        0
      )
        .fromTo(
          wipeRef.current,
          { scaleX: 1 },
          { scaleX: 0, duration: 1.1, ease: "power4.inOut", transformOrigin: "right" },
          0.05
        )
        .fromTo(
          badgeRef.current,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
          0.9
        )
        .fromTo(
          headlineRef.current,
          { opacity: 0, y: 24, letterSpacing: "0.05em" },
          { opacity: 1, y: 0, letterSpacing: "0em", duration: 1, ease: "power3.out" },
          1.0
        )
        .fromTo(
          paraRef.current,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
          1.15
        )
        .fromTo(
          ctaWrapRef.current,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
          1.3
        );

      // Slow parallax drift on the image as the section scrolls through view
      gsap.to(imgRef.current, {
        yPercent: 10,
        ease: "none",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Magnetic pull on the CTA — button eases toward the cursor within its bounds
      const btn = ctaRef.current;
      if (btn) {
        const strength = 0.35;
        const onMove = (e: MouseEvent) => {
          const rect = btn.getBoundingClientRect();
          const x = e.clientX - (rect.left + rect.width / 2);
          const y = e.clientY - (rect.top + rect.height / 2);
          gsap.to(btn, {
            x: x * strength,
            y: y * strength,
            duration: 0.4,
            ease: "power2.out",
          });
        };
        const onLeave = () => {
          gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.4)" });
        };
        btn.addEventListener("mousemove", onMove);
        btn.addEventListener("mouseleave", onLeave);
        return () => {
          btn.removeEventListener("mousemove", onMove);
          btn.removeEventListener("mouseleave", onLeave);
        };
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-12 bg-surface-container-low">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        <div
          ref={cardRef}
          className="relative overflow-hidden rounded-xl border border-outline-variant/30 min-h-[520px] lg:min-h-[640px] flex items-end"
        >
          <img
            ref={imgRef}
            alt="The Festive Edit Campaign"
            className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.88] will-change-transform"
            data-alt="A striking digital installation art piece featuring glowing, generative geometric shapes suspended in a vast, minimalist gallery space. The room is illuminated by high-key, soft white lighting that creates a bright, modern light-mode aesthetic. The artwork relies on a sophisticated palette of deep blacks and pristine whites, punctuated by intense accents of vibrant red. The mood is serene yet technologically advanced."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAN8BOj9-KWvl7L1-W-vTuC8oted6cGMAB2i6cA4jqQNPM-9D8k31lZ0c0qp83hOoK7InXBoNDMk42QRwd7-1xZiyRjqpPkOAuQGr1ol4HQ1lDFnzc2DwqkfJTKpfkalx5-QLg6GkOz6tvhEkQahOpZATVCdtI5hML0nMt3bHo8fDtzNenZDQsRiV5Dha-mrWfSMYPfPc5BJZM6qgUb9eEuKddzjsrU0iCh2ctnZH-tizskpMj7ODP2"
          />
          {/* Curtain-wipe panel — sits above the image, slides away right-to-left origin */}
          <div ref={wipeRef} className="absolute inset-0 z-10 bg-tertiary origin-right"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-tertiary/90 via-tertiary/30 to-transparent"></div>
          <div className="relative z-10 p-8 sm:p-12 lg:p-16 max-w-2xl">
            <span
              ref={badgeRef}
              className="inline-block text-[10px] uppercase tracking-[0.3em] text-secondary-fixed mb-3 font-medium"
            >
              CURATED CAPSULE
            </span>
            <h2
              ref={headlineRef}
              className="font-display-lg text-3xl sm:text-4xl lg:text-5xl text-surface-bright leading-tight mb-4"
            >
              THE FESTIVE EDIT
            </h2>
            <p
              ref={paraRef}
              className="text-surface-dim font-light text-sm sm:text-base leading-relaxed mb-8"
            >
              Tradition, cut with a contemporary eye. Unveiling sculpted lehengas and understated
              sherwanis engineered for celebratory grandeur without excessive weight.
            </p>
            <div ref={ctaWrapRef} className="inline-block">
              <Link
                ref={ctaRef}
                className="inline-flex items-center gap-3 bg-primary-container hover:bg-primary text-surface-bright px-6 py-3.5 rounded-full text-xs uppercase tracking-[0.22em] font-medium transition-colors shadow-md"
                href="/shop"
              >
                <span>EXPLORE EDIT</span>
                <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collection;