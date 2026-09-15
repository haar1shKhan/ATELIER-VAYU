"use client";

import { useRef, useLayoutEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CampaignRevealSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const sectionHeaderRef = useRef<HTMLDivElement>(null); // the top title/date row
    const frameRef = useRef<HTMLDivElement>(null);         // the rounded image card (final resting spot)
    const realImgRef = useRef<HTMLImageElement>(null);     // the in-flow image, hidden until reveal completes
    const overlayRef = useRef<HTMLDivElement>(null);       // fixed, fullscreen clone that shrinks down
    const overlayImgRef = useRef<HTMLImageElement>(null);
    const gradientRef = useRef<HTMLDivElement>(null);
    const badgeRef = useRef<HTMLSpanElement>(null);
    const headingRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const section = sectionRef.current;
            const frame = frameRef.current;
            const overlay = overlayRef.current;
            if (!section || !frame || !overlay) return;

            // Where the image needs to LAND, expressed relative to the section
            // (not the viewport) so it stays correct once the section is pinned
            // at top:0 during the scroll animation.
            let target = { top: 0, left: 0, width: 0, height: 0 };

            const computeTarget = () => {
                const sectionRect = section.getBoundingClientRect();
                const frameRect = frame.getBoundingClientRect();
                target = {
                    top: frameRect.top - sectionRect.top,
                    left: frameRect.left - sectionRect.left,
                    width: frameRect.width,
                    height: frameRect.height,
                };
            };

            computeTarget();

            // --- Initial state ---
            gsap.set(overlay, {
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100dvh",
                borderRadius: 0,
                zIndex: 60,
                opacity: 1,
            });

            gsap.set(realImgRef.current, { opacity: 0 });

            gsap.set(
                [sectionHeaderRef.current, badgeRef.current, headingRef.current, contentRef.current],
                { opacity: 0, y: 32 }
            );

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: "+=130%",
                    scrub: 1,
                    pin: true,
                    anticipatePin: 1,
                    onRefresh: computeTarget,
                    // markers: true, // uncomment while tuning
                },
            });

            tl.to(overlay, {
                top: () => target.top,
                left: () => target.left,
                width: () => target.width,
                height: () => target.height,
                borderRadius: 16,
                ease: "power2.inOut",
                duration: 1,
            })
                // swap the fixed clone for the real in-flow image once sizes match
                .to(realImgRef.current, { opacity: 1, duration: 0.01 }, ">-0.01")
                .to(overlay, { opacity: 0, duration: 0.01 }, "<")
                .to(gradientRef.current, { opacity: 1, duration: 0.3 }, "<")
                .to(
                    sectionHeaderRef.current,
                    { opacity: 1, y: 0, ease: "power2.out", duration: 0.35 },
                    "-=0.3"
                )
                .to(
                    badgeRef.current,
                    { opacity: 1, y: 0, ease: "power2.out", duration: 0.35 },
                    "-=0.2"
                )
                .to(
                    headingRef.current,
                    { opacity: 1, y: 0, ease: "power2.out", duration: 0.35 },
                    "-=0.25"
                )
                .to(
                    contentRef.current,
                    { opacity: 1, y: 0, ease: "power2.out", duration: 0.35 },
                    "-=0.2"
                );

            const onResize = () => ScrollTrigger.refresh();
            window.addEventListener("resize", onResize);
            return () => window.removeEventListener("resize", onResize);
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative py-24 sm:py-32 bg-surface-container overflow-hidden border-b border-outline-variant/30"
        >
            <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
                {/* Section Header */}
                <div
                    ref={sectionHeaderRef}
                    className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-outline-variant/40"
                >
                    <div>
                        <span className="font-label-lg text-secondary tracking-[0.25em] uppercase text-xs">
                            CAMPAIGN EDITION 04 / RAJASTHAN PAVILION
                        </span>

                        <h2 className="font-display-lg text-2xl sm:text-4xl text-primary mt-2 font-normal">
                            Architectural Drapes at Sunset
                        </h2>
                    </div>

                    <p className="text-xs uppercase tracking-[0.2em] text-outline mt-3 md:mt-0 font-light">
                        GOLDEN HOUR COUTURE ARCHIVE · THAR DESERT
                    </p>
                </div>

                {/* Campaign Hero — this is the image's FINAL resting position/size */}
                <div
                    ref={frameRef}
                    className="relative overflow-hidden rounded-2xl border border-outline-variant/40 min-h-[420px] sm:min-h-[560px] lg:min-h-[700px] flex items-end group shadow-2xl"
                >
                    <img
                        ref={realImgRef}
                        alt="Cinematic wide-angle campaign in Rajasthan pavilion"
                        className="absolute inset-0 w-full h-full object-cover object-center filter contrast-105"
                        src="rajasthan-pavilion-campaign.png"
                    />

                    <div
                        ref={gradientRef}
                        className="absolute inset-0 bg-gradient-to-t from-tertiary/90 via-tertiary/30 to-transparent opacity-0"
                    />

                    {/* Campaign Content */}
                    <div ref={contentRef} className="relative z-10 p-8 sm:p-12 lg:p-16 max-w-2xl">
                        <span
                            ref={badgeRef}
                            className="inline-block text-[10px] uppercase tracking-[0.3em] text-secondary-fixed mb-3 font-medium bg-tertiary/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-secondary-fixed/30"
                        >
                            EDITORIAL PANORAMA
                        </span>

                        <div ref={headingRef}>
                            <h3 className="font-display-lg text-3xl sm:text-5xl text-surface-bright leading-tight mb-4 font-normal">
                                The Sandstone Sanctuary
                            </h3>

                            <p className="text-surface-dim font-light text-sm sm:text-base leading-relaxed mb-8">
                                Where brutalist desert geometry converges with hand-spun gold zardozi
                                tissue and bespoke structured tailoring. Captured against the ancient
                                terracotta dunes.
                            </p>
                        </div>

                        <div className="flex flex-wrap items-center gap-6">
                            <Link
                                className="inline-flex items-center gap-3 bg-secondary-fixed text-on-secondary-fixed hover:bg-surface-bright px-7 py-3.5 rounded-full text-xs uppercase tracking-[0.22em] font-medium transition-all shadow-lg"
                                href="/shop"
                            >
                                <span>EXPLORE THE COUTURE SERIES</span>
                                <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">
                                    arrow_forward
                                </span>
                            </Link>

                            <a
                                className="inline-flex items-center text-xs uppercase tracking-[0.22em] text-surface-bright hover:text-secondary-fixed border-b border-surface-bright/40 pb-1 transition-all"
                                href="#journal"
                            >
                                READ CAMPAIGN DISPATCH
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Fixed fullscreen clone — this is what actually shrinks on scroll */}
            <div ref={overlayRef} className="overflow-hidden pointer-events-none">
                <img
                    ref={overlayImgRef}
                    alt=""
                    aria-hidden="true"
                    className="w-full h-full object-cover object-center filter contrast-105"
                    src="rajasthan-pavilion-campaign.png"
                />
            </div>
        </section>
    );
}