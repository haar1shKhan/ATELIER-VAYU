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

export default function Hero({ campaign }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headlineRef.current,
        { opacity: 0, y: 35 },
        { opacity: 1, y: 0, duration: 1.4, ease: "power3.out", delay: 0.2 }
      );
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { scale: 1.08, opacity: 0.9 },
          { scale: 1, opacity: 1, duration: 2, ease: "power2.out" }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[92vh] md:min-h-screen flex items-end justify-between pt-32 pb-16 md:pb-24 px-6 md:px-12 lg:px-20 overflow-hidden bg-[#ded9d1]"
    >
      <div ref={imageRef} className="absolute inset-0 z-0 will-change-transform">
        <Image
          src={campaign.image}
          alt="Atelier Vayu Couture Campaign"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-95 contrast-[1.02]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#171313]/75 via-[#171313]/25 to-transparent" />
        <div className="absolute inset-0 bg-radial from-transparent via-transparent to-[#171313]/40" />
      </div>

      <div className="relative z-10 w-full max-w-[1600px] mx-auto flex flex-col md:flex-row md:items-end justify-between gap-10 text-[#F4EFE6]">
        <div ref={headlineRef} className="max-w-2xl">
          <span className="inline-block text-[0.6875rem] md:text-xs font-semibold tracking-provenance uppercase text-[#fedea9] mb-4">
            {campaign.subtitle}
          </span>
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.05] font-normal text-[#F4EFE6] drop-shadow-xs">
            Heritage,
            <br />
            <span className="italic font-light text-[#E8DED0]">Reimagined.</span>
          </h1>
          <p className="mt-6 text-sm md:text-base text-[#E8DED0]/90 font-light max-w-lg leading-relaxed">
            {campaign.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/shop"
              className="inline-block bg-[#4A1118] text-[#F4EFE6] text-xs font-medium tracking-museum uppercase px-8 py-4 hover:bg-[#171313] transition-colors border border-[#4A1118]"
            >
              Explore The Archive
            </Link>
            <Link
              href="/bespoke"
              className="inline-block bg-transparent text-[#F4EFE6] text-xs font-medium tracking-museum uppercase px-8 py-4 hover:bg-[#F4EFE6] hover:text-[#171313] transition-all border border-[#F4EFE6]/60 backdrop-blur-xs"
            >
              Private Salon Appointment
            </Link>
          </div>
        </div>

        <div className="hidden lg:flex flex-col items-end text-right border-l border-[#A58A5C]/40 pl-6 pb-2 text-[0.6875rem] tracking-museum uppercase text-[#E8DED0]/80">
          <span className="text-[#fedea9] font-medium">Atelier Provenance</span>
          <span>Pit-Loom Chanderi & Varanasi Silks</span>
          <span>Limited Ceremonial Production</span>
          <span className="mt-3 text-white/50 text-[0.625rem]">Scroll to Enter Exhibition</span>
        </div>
      </div>
    </section>
  );
}
