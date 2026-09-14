"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Decorative corner vine — fetches the stroke-based line-art SVG once,
 * injects it inline into each corner slot, then draws every path in
 * (stroke-dashoffset) the moment that corner scrolls into view.
 *
 * The source artwork is naturally anchored to the bottom-right corner
 * (dense cluster bottom-right, vines trailing up/left), so:
 *  - top-right    => mirror vertically   (-scale-y-100)
 *  - bottom-left  => mirror horizontally (-scale-x-100)
 *  - bottom-right => no transform needed
 *  - top-left     => mirror both axes    (-scale-x-100 -scale-y-100)
 */
export type CornerPosition = "top-right" | "bottom-left" | "bottom-right" | "top-left";

const POSITION_CLASSES: Record<CornerPosition, string> = {
  "top-right": "-top-6 right-0 sm:right-4 -scale-y-100",
  "bottom-left": "-bottom-6 left-0 sm:left-4 -scale-x-100",
  "bottom-right": "-bottom-6 right-0 sm:right-4",
  "top-left": "-top-6 left-0 sm:left-4 -scale-x-100 -scale-y-100",
};

interface CornerVineProps {
  position: CornerPosition;
  className?: string;
}

export function CornerVine({ position, className = "" }: CornerVineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState<string | null>(null);

  useEffect(() => {
    fetch("/hibiscus-vine-stroke.svg")
      .then((res) => res.text())
      .then((data) => setSvg(data));
  }, []);

  useEffect(() => {
    if (!svg || !containerRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const paths = containerRef.current!.querySelectorAll<SVGPathElement>("path");
      if (!paths.length) return;

      paths.forEach((p) => {
        const length = p.getTotalLength();
        p.style.strokeDasharray = `${length}`;
        p.style.strokeDashoffset = `${length}`;
      });

      gsap.to(paths, {
        strokeDashoffset: 0,
        duration: 1.8,
        ease: "power2.out",
        stagger: 0.015,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          once: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [svg]);

  if (!svg) return null;

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={`pointer-events-none select-none  right-30 absolute w-28 sm:w-40 lg:w-60 text-[#4A1118]/70 [&_svg]:w-full [&_svg]:h-auto [&_svg]:block ${POSITION_CLASSES[position]} ${className}`}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}