"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { EDITORIAL_CAMPAIGNS } from "@/lib/data/products";

gsap.registerPlugin(ScrollTrigger);

interface CraftSectionProps {
  craft?: {
    loomImage: string;
    artisanImage: string;
    hardwareImage: string;
    textileImage: string;
  };
}

function SplitHeading({ text, className }: { text: string; className?: string }) {
  return (
    <>
      {text.split(" ").map((word, i) => (
        <span key={i} className={`word inline-block opacity-0 translate-y-5 mr-[0.28em] ${className ?? ""}`}>
          {word}
        </span>
      ))}
    </>
  );
}

// A dashed "stitch" line that draws itself in — the section's signature motif
function StitchLine({ className }: { className?: string }) {
  return (
    <svg
      className={`stitch-line absolute w-full h-[2px] left-0 overflow-visible ${className ?? ""}`}
      preserveAspectRatio="none"
    >
      <line
        x1="0"
        y1="1"
        x2="100%"
        y2="1"
        stroke="#fedea9"
        strokeWidth="1.5"
        strokeDasharray="7 7"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function CraftSection({ craft = EDITORIAL_CAMPAIGNS.craft }: CraftSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imgWrapRefs = useRef<(HTMLDivElement | null)[]>([]);
  const badgeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const ctaBtnRef = useRef<HTMLAnchorElement>(null);  const watermarkRef = useRef<HTMLDivElement>(null);

  const cards = [
    {
      image: craft.loomImage,
      alt: "Master Weavers at Pit Loom",
      eyebrow: "Lineage • Varanasi",
      title: "Heirloom Pit-Loom Weaving",
      copy: "Real zari threads intertwined with high-twist Mulberry silk, taking up to 240 hours per drape under the watchful eye of third-generation weavers.",
    },
    {
      image: craft.artisanImage,
      alt: "Draper sculpting raw silk on mannequin",
      eyebrow: "Form • New Delhi Atelier",
      title: "Architectural Draping",
      copy: "Tailoring without synthetic adhesives. Full floating horsehair canvas and natural mulmul underlinings preserve the fabric\u2019s organic breathability.",
    },
    {
      image: craft.hardwareImage,
      alt: "Sand-cast antique brass buttons and metalwork",
      eyebrow: "Metalsmithing • Jaipur",
      title: "Sand-Cast Antique Brass",
      copy: "Bespoke clasps and buttons poured individually in sand molds. Each fitting exhibits subtle textural variations, acquiring a natural patina over decades.",
    },
  ];

  const isCoarsePointer = () =>
    typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches;

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      // ── Giant background watermark — slow continuous drift, pure ambience ──
      if (watermarkRef.current) {
        gsap.set(watermarkRef.current, { xPercent: -2 });
        gsap.to(watermarkRef.current, {
          xPercent: 2,
          duration: 22,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      }

      // ── Header block ───────────────────────────────────────────
      const headerTl = gsap.timeline({
        scrollTrigger: { trigger: ".chapter-header", start: "top 82%", once: true },
        defaults: { ease: "power3.out" },
      });
      headerTl
        .fromTo(".chapter-eyebrow", { opacity: 0, x: -10 }, { opacity: 1, x: 0, duration: 0.6 }, 0)
        .fromTo(".chapter-header .word", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.75, stagger: 0.05 }, 0.15)
        .fromTo(".chapter-copy", { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.7 }, 0.45)
        .fromTo(".chapter-tags span", { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.08 }, 0.65)
        .fromTo(
          ".chapter-header .stitch-line line",
          { strokeDashoffset: 1000 },
          { strokeDashoffset: 0, duration: 1.4, ease: "power2.inOut" },
          0.15
        );

      // ── Three-card cascade with numbered badges ─────────────────
      const cardEls = cardRefs.current.filter(Boolean) as HTMLDivElement[];
      gsap.fromTo(
        cardEls,
        { opacity: 0, y: 40, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: { trigger: sectionRef.current?.querySelector(".card-grid"), start: "top 78%", once: true },
        }
      );
      gsap.fromTo(
        badgeRefs.current.filter(Boolean),
        { opacity: 0, scale: 0.5 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: "back.out(2)",
          stagger: 0.15,
          delay: 0.3,
          scrollTrigger: { trigger: sectionRef.current?.querySelector(".card-grid"), start: "top 78%", once: true },
        }
      );

      // Continuous slow Ken Burns drift on each card image
      imgWrapRefs.current.forEach((wrap, i) => {
        if (!wrap) return;
        gsap.to(wrap, {
          scale: 1.08,
          duration: 16 + i * 2,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: 1.6,
        });
      });

      // ── Footer CTA row ─────────────────────────────────────────
      gsap.fromTo(
        ".footer-row > *",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: { trigger: ".footer-row", start: "top 85%", once: true },
        }
      );
      gsap.fromTo(
        ".footer-row .stitch-line line",
        { strokeDashoffset: 1000 },
        {
          strokeDashoffset: 0,
          duration: 1.2,
          ease: "power2.inOut",
          scrollTrigger: { trigger: ".footer-row", start: "top 85%", once: true },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [craft]);

  // Cursor-tracking "View" badge on card hover — no tilt, just the badge following the pointer
  const handleCardMove = (i: number) => (e: React.MouseEvent<HTMLDivElement>) => {
    if (isCoarsePointer()) return;
    const card = cardRefs.current[i];
    const badge = badgeRefs.current[i];
    if (!card || !badge) return;
    const rect = card.getBoundingClientRect();
    gsap.to(badge, { x: e.clientX - rect.left, y: e.clientY - rect.top, duration: 0.25, ease: "power2.out" });
  };

  const handleCardEnter = (i: number) => () => {
    if (isCoarsePointer()) return;
    gsap.to(badgeRefs.current[i], { opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" });
  };

  const handleCardLeave = (i: number) => () => {
    if (isCoarsePointer()) return;
    gsap.to(badgeRefs.current[i], { opacity: 0, scale: 0.6, duration: 0.25, ease: "power2.out" });
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-28 md:py-36 bg-[#2d0006] text-[#F4EFE6] px-6 md:px-12 lg:px-20 border-y border-[#4A1118] overflow-hidden"
    >
      {/* Giant ghost watermark — pure ambience, sits behind everything */}
      <div
        ref={watermarkRef}
        className="pointer-events-none select-none absolute inset-0 flex items-center justify-center z-0"
        aria-hidden="true"
      >
        <span className="font-display text-[18vw] leading-none whitespace-nowrap text-[#F4EFE6]/[0.03] tracking-tight">
          INTEGRITY
        </span>
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto">
        <div className="chapter-header relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pb-20">
          <StitchLine className="bottom-0" />
          <div className="lg:col-span-6">
            <span className="chapter-eyebrow text-[0.6875rem] font-medium tracking-provenance uppercase text-[#fedea9] block mb-3">
              03 / CRAFT
            </span>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-normal leading-tight text-[#F4EFE6]">
              <SplitHeading text="Woven by Hand." />
              <br />
              <SplitHeading text="Sculpted by Discipline." className="italic font-light text-[#e1c290]" />
            </h2>
          </div>
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <p className="chapter-copy text-sm md:text-base text-[#ebe1d3]/80 font-light leading-relaxed">
              Every garment at Atelier Vayu is rooted in living craft lineages across Varanasi,
              Chanderi, and Rajasthan. Rejecting industrial mills, we partner with master weavers
              who preserve ancient pit-loom techniques, producing fabrics with organic
              irregularities that tell stories of hand-beaten silver, botanical mordants, and
              unhurried time.
            </p>
            <div className="chapter-tags flex items-center space-x-6 text-[0.6875rem] tracking-museum uppercase text-[#fedea9]">
              <span>0% Synthetic Polyester</span>
              <span>&bull;</span>
              <span>Hand-Spun Mulberry Silk</span>
              <span>&bull;</span>
              <span>Sand-Cast Brass</span>
            </div>
          </div>
        </div>

        <div className="card-grid mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {cards.map((card, i) => (
            <div
              key={card.title}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              onMouseMove={handleCardMove(i)}
              onMouseEnter={handleCardEnter(i)}
              onMouseLeave={handleCardLeave(i)}
              className="flex flex-col space-y-4"
            >
              <div className="relative aspect-4/5 overflow-hidden bg-[#141008] border border-[#743137]/30">
                {/* Number badge, follows the cursor while hovering this card */}
                <div
                  ref={(el) => {
                    badgeRefs.current[i] = el;
                  }}
                  className="pointer-events-none absolute z-20 -ml-8 -mt-8 w-16 h-16 rounded-full bg-[#fedea9] text-[#2d0006] flex items-center justify-center text-[10px] uppercase tracking-widest font-semibold opacity-0 scale-60"
                >
                  View
                </div>

                <div
                  ref={(el) => {
                    imgWrapRefs.current[i] = el;
                  }}
                  className="absolute -inset-[7%] will-change-transform"
                >
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <span className="text-[0.625rem] tracking-provenance uppercase text-[#A58A5C] font-medium">
                {card.eyebrow}
              </span>
              <h3 className="font-display text-xl text-[#F4EFE6]">{card.title}</h3>
              <p className="text-xs text-[#cfc5b8] font-light leading-relaxed">{card.copy}</p>
            </div>
          ))}
        </div>

        <div className="footer-row relative mt-20 pt-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <StitchLine className="top-0" />
          <span className="font-display text-lg text-[#F4EFE6]">
            Every garment carries a hand-signed Certificate of Provenance.
          </span>
          <Link
            ref={ctaBtnRef}
            href="/craft"
            className="group/cta relative inline-block overflow-hidden border border-[#fedea9] text-[#fedea9] text-xs font-medium tracking-museum uppercase px-8 py-3.5"
          >
            <span className="relative z-10 inline-block h-[1em] overflow-hidden align-middle">
              <span className="block transition-all duration-500 ease-out group-hover/cta:-translate-y-full group-hover/cta:text-[#2d0006]">
                Read The Craft Manifesto &rarr;
              </span>
              <span className="absolute inset-0 block translate-y-full text-[#2d0006] transition-transform duration-500 ease-out group-hover/cta:translate-y-0">
                Read The Craft Manifesto &rarr;
              </span>
            </span>
            <span className="absolute inset-0 bg-[#fedea9] scale-x-0 origin-left group-hover/cta:scale-x-100 transition-transform duration-500 ease-out" />
          </Link>
        </div>
      </div>
    </section>
  );
}