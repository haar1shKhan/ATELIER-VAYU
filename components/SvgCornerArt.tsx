"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Generic decorative SVG piece — fetches any stroke-based line-art SVG
 * once, injects it inline, and plays one of a few scroll-triggered
 * animation styles on it. Reusable for any corner/section decoration,
 * not tied to one specific artwork.
 *
 * Positioning + mirroring live on a static OUTER wrapper (plain CSS,
 * painted immediately, never touched by GSAP). All animated properties
 * (opacity, scale, y, path dash-offsets) are applied to an INNER element.
 * Keeping them on separate elements means GSAP can freely own the
 * inner element's `transform` without ever fighting the outer wrapper's
 * Tailwind mirror classes for control of the same `transform` string —
 * that conflict is what silently broke a `rotate-180` class earlier.
 */
export type CornerPosition = "top-right" | "bottom-left" | "bottom-right" | "top-left" | "center-center" | "center-left" | "center-right";

export type SvgAnimationType =
    | "draw" // stroke-dashoffset reveal, once, when it enters the viewport
    | "draw-scrub" // same, but scrubbed continuously to scroll position
    | "bloom" // scale + fade pop-in, once, with an overshoot ease
    | "fade"; // simple opacity + rise, once

// Mirroring is expressed as scaleX/scaleY multipliers rather than Tailwind
// scale classes, so "bloom" can animate through them (0 -> final) without
// a second, conflicting transform source.
const POSITION_CONFIG: Record<
    CornerPosition,
    { wrapperClasses: string; mirrorX: number; mirrorY: number }
> = {
    "top-right": { wrapperClasses: "-top-6 right-0 sm:right-4", mirrorX: 1, mirrorY: -1 },
    "bottom-left": { wrapperClasses: "-bottom-6 left-0 sm:left-4", mirrorX: -1, mirrorY: 1 },
    "bottom-right": { wrapperClasses: "-bottom-6 right-0 sm:right-4", mirrorX: 1, mirrorY: 1 },
    "top-left": { wrapperClasses: "-top-6 left-0 sm:left-4", mirrorX: -1, mirrorY: -1 },
    "center-center": { wrapperClasses: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2", mirrorX: -1, mirrorY: -1 },
    "center-left": { wrapperClasses: "top-1/2 left-0 sm:left-4", mirrorX: -1, mirrorY: -1 },
    "center-right": { wrapperClasses: "top-1/2 right-0 sm:right-4", mirrorX: 1, mirrorY: -1 },
};

interface SvgCornerArtProps {
    /** Path to the SVG file (public folder), e.g. "/hibiscus-vine-stroke.svg" */
    src: string;
    position: CornerPosition;
    animation?: SvgAnimationType;
    /** Tailwind width classes controlling the artwork's size. */
    size?: string;
    /** Tailwind text-color classes — SVG strokes use currentColor. */
    color?: string;
    duration?: number;
    /** Per-path stagger for "draw" / "draw-scrub". */
    stagger?: number;
    /** ScrollTrigger start position. */
    start?: string;
    /** Extra classes applied to the outer (positioned) wrapper. */
    className?: string;
}

export function SvgCornerArt({
    src,
    position,
    animation = "draw",
    size = "w-28 sm:w-40 lg:w-60",
    color = "text-current",
    duration = 1.8,
    stagger = 0.015,
    start = "top 85%",
    className = "",
}: SvgCornerArtProps) {
    const innerRef = useRef<HTMLDivElement>(null);
    const [svg, setSvg] = useState<string | null>(null);
    const { wrapperClasses, mirrorX, mirrorY } = POSITION_CONFIG[position];

    // Reset and refetch whenever the source changes, so this component can
    // be reused for a different SVG just by swapping the `src` prop.
    useEffect(() => {
        let cancelled = false;
        setSvg(null);
        fetch(src)
            .then((res) => res.text())
            .then((data) => {
                if (!cancelled) setSvg(data);
            });
        return () => {
            cancelled = true;
        };
    }, [src]);

    useEffect(() => {
        const inner = innerRef.current;
        if (!svg || !inner) return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        const ctx = gsap.context(() => {
            switch (animation) {
                case "draw":
                case "draw-scrub": {
                    const paths = inner.querySelectorAll<SVGPathElement>("path");
                    if (!paths.length) return;

                    paths.forEach((p) => {
                        const length = p.getTotalLength();
                        p.style.strokeDasharray = `${length}`;
                        p.style.strokeDashoffset = `${length}`;
                    });

                    gsap.to(paths, {
                        strokeDashoffset: 0,
                        ease: animation === "draw" ? "power2.out" : "none",
                        duration: animation === "draw" ? duration : undefined,
                        stagger,
                        scrollTrigger:
                            animation === "draw"
                                ? { trigger: inner, start, once: true }
                                : { trigger: inner, start, end: "bottom 45%", scrub: 0.8 },
                    });
                    break;
                }

                case "bloom": {
                    gsap.fromTo(
                        inner,
                        { scaleX: 0, scaleY: 0, opacity: 0, transformOrigin: "center center" },
                        {
                            scaleX: mirrorX,
                            scaleY: mirrorY,
                            opacity: 1,
                            duration,
                            ease: "back.out(1.6)",
                            scrollTrigger: { trigger: inner, start, once: true },
                        }
                    );
                    break;
                }

                case "fade": {
                    gsap.set(inner, { scaleX: mirrorX, scaleY: mirrorY });
                    gsap.fromTo(
                        inner,
                        { opacity: 0, y: 24 },
                        {
                            opacity: 1,
                            y: 0,
                            duration,
                            ease: "power3.out",
                            scrollTrigger: { trigger: inner, start, once: true },
                        }
                    );
                    break;
                }
            }
        }, inner);

        return () => ctx.revert();
    }, [svg, animation, duration, stagger, start, mirrorX, mirrorY]);

    if (!svg) return null;

    // For "bloom"/"fade", the inner element's base orientation is set by
    // GSAP itself (see above). For "draw"/"draw-scrub", which never touch
    // the inner element's transform, the mirror has to be applied some
    // other way — an inline style keeps it independent of GSAP entirely.
    const staticMirrorStyle =
        animation === "draw" || animation === "draw-scrub"
            ? { transform: `scaleX(${mirrorX}) scaleY(${mirrorY})` }
            : undefined;

    return (
        <div
            aria-hidden="true"
            className={`pointer-events-none select-none absolute ${size} ${wrapperClasses} ${className}`}
        >
            <div
                ref={innerRef}
                style={staticMirrorStyle}
                className={`${color} [&_svg]:w-full [&_svg]:h-auto [&_svg]:block`}
                dangerouslySetInnerHTML={{ __html: svg }}
            />
        </div>
    );
}