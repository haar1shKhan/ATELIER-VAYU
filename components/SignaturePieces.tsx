import React from "react";
import Link from "next/link";
import CampaignRevealSection from "./CampaignRevealSection";

const SignaturePieces = () => {
    return (
        <div>
            {/* ================================
                ARCHIVE & LOOKBOOK
            ================================= */}

            <section className="py-24 bg-tertiary text-surface-bright">
                <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">

                    {/* Section Header */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-surface-dim/20">
                        <div>
                            <span className="font-label-lg text-secondary-fixed tracking-[0.25em] uppercase text-xs">
                                04 / ARCHIVE &amp; 05 / LOOKBOOK
                            </span>

                            <h2 className="font-display-lg text-3xl sm:text-4xl lg:text-5xl mt-2 font-normal">
                                PIECES WORTH REMEMBERING
                            </h2>
                        </div>

                        <p className="text-xs uppercase tracking-[0.2em] text-surface-dim mt-4 md:mt-0">
                            EDITION 2025 · CAMPAIGN CAPTURES
                        </p>
                    </div>

                    {/* Horizontal Lookbook Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-stretch">

                        {/* Look 01 — Large */}
                        <div className="group relative overflow-hidden rounded-xl bg-tertiary-container md:col-span-7 lg:col-span-7 aspect-[4/5] md:aspect-auto md:min-h-[640px] flex flex-col justify-end p-8 sm:p-12 border border-surface-dim/20 shadow-2xl">

                            <img
                                alt="Look 01 Atelier Vayu Ivory Bandhgala"
                                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out filter brightness-90"
                                src="/ivory-silk-asymmetric-bandhgala.png"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-tertiary/90 via-tertiary/30 to-transparent" />

                            <div className="absolute top-6 left-6 z-10">
                                <span className="inline-block text-[10px] uppercase tracking-[0.25em] text-secondary-fixed bg-tertiary/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-secondary-fixed/30 font-medium">
                                    ARCHIVE LOOK 01 · BESPOKE
                                </span>
                            </div>

                            <div className="relative z-10 max-w-lg">
                                <span className="text-[11px] uppercase tracking-[0.3em] text-secondary-fixed font-medium">
                                    TAILORED ARCHITECTURE
                                </span>

                                <h3 className="font-display-lg text-2xl sm:text-4xl text-surface-bright mt-1 mb-2 font-normal leading-tight">
                                    Ivory Angrakha Overcoat &amp; Asymmetric Bandhgala
                                </h3>

                                <p className="text-surface-dim font-light text-sm sm:text-base leading-relaxed mb-6">
                                    Crafted from raw hand-spun Varanasi Tussar silk with concealed plackets, muted antique brass buttons, and sculptural drape pleating.
                                </p>

                                <div className="flex items-center gap-4">
                                    <Link
                                        className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-surface-bright hover:text-secondary-fixed transition-colors font-medium border-b border-surface-dim/30 pb-0.5"
                                        href="/shop"
                                    >
                                        EXPLORE SILHOUETTE

                                        <span
                                            className="material-symbols-outlined text-sm"
                                            data-icon="arrow_forward"
                                        >
                                            arrow_forward
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="md:col-span-5 lg:col-span-5 flex flex-col gap-6 lg:gap-8">

                            {/* Look 02 */}
                            <div className="group relative overflow-hidden rounded-xl bg-tertiary-container aspect-[4/5] flex flex-col justify-end p-6 sm:p-8 border border-surface-dim/20 shadow-xl">

                                <img
                                    alt="Look 02 Atelier Vayu Sculptural Drape Sari"
                                    className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out filter brightness-90"
                                    src="/crimson-sculpted-lehenga.png"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-tertiary/90 via-tertiary/30 to-transparent" />

                                <div className="absolute top-5 left-5 z-10">
                                    <span className="text-[9px] uppercase tracking-[0.22em] text-surface-bright bg-primary/60 backdrop-blur-md px-3 py-1 rounded-full border border-surface-bright/20 font-medium">
                                        LOOK 02 · COUTURE
                                    </span>
                                </div>

                                <div className="relative z-10">
                                    <span className="text-[10px] uppercase tracking-[0.25em] text-secondary-fixed font-medium">
                                        DRAPED MAJESTY
                                    </span>

                                    <h4 className="font-display-lg text-xl sm:text-2xl text-surface-bright mt-1 mb-1">
                                        Sculptural Drape Sari &amp; Corset
                                    </h4>

                                    <p className="text-xs text-surface-dim font-light leading-relaxed">
                                        Rich crimson silk velvet with antique gold border lineation and structured corset bodice.
                                    </p>
                                </div>
                            </div>

                            {/* Look 04 */}
                            <div className="group relative overflow-hidden rounded-xl bg-tertiary-container aspect-[16/10] sm:aspect-[4/3] md:aspect-auto md:flex-1 flex flex-col justify-end p-6 sm:p-8 border border-surface-dim/20 shadow-xl">

                                <img
                                    alt="Look 04 Atelier Vayu Zardozi Bullion Embroidery"
                                    className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out filter brightness-90"
                                    src="cloths-2.png"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-tertiary/90 via-tertiary/40 to-transparent" />

                                <div className="absolute top-5 left-5 z-10">
                                    <span className="text-[9px] uppercase tracking-[0.22em] text-secondary-fixed bg-tertiary/60 backdrop-blur-md px-3 py-1 rounded-full border border-secondary-fixed/30 font-medium">
                                        LOOK 04 · EMBROIDERY
                                    </span>
                                </div>

                                <div className="relative z-10">
                                    <span className="text-[10px] uppercase tracking-[0.25em] text-secondary-fixed font-medium">
                                        HAUTE METALLURGY
                                    </span>

                                    <h4 className="font-display-lg text-xl text-surface-bright mt-1 mb-1">
                                        Bullion Zardozi &amp; Antique Dabka
                                    </h4>

                                    <p className="text-xs text-surface-dim font-light">
                                        Hand-stitched bullion gold work on rich deep maroon velvet.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Look 03 — Full Width */}
                        <div className="md:col-span-12 group relative overflow-hidden rounded-xl bg-tertiary-container min-h-[360px] md:min-h-[420px] flex items-end p-8 sm:p-12 border border-surface-dim/20 shadow-2xl">

                            <img
                                alt="Look 03 Atelier Vayu Campaign Pair"
                                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out filter brightness-90"
                                src="midnight-maroon-angrakha.png"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-tertiary/90 via-tertiary/30 to-transparent" />

                            <div className="absolute inset-0 bg-gradient-to-r from-tertiary/60 via-transparent to-transparent hidden md:block" />

                            <div className="absolute top-6 left-6 z-10">
                                <span className="text-[10px] uppercase tracking-[0.25em] text-secondary-fixed bg-tertiary/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-secondary-fixed/30 font-medium">
                                    LOOK 03 · CAMPAIGN HERO
                                </span>
                            </div>

                            <div className="relative z-10 max-w-xl">
                                <span className="text-[10px] uppercase tracking-[0.3em] text-secondary-fixed font-medium">
                                    LIMITED OCCASION EDITION
                                </span>

                                <h3 className="font-display-lg text-2xl sm:text-4xl text-surface-bright mt-1 mb-2 font-normal">
                                    Midnight Maroon Sherwani &amp; Raw Silk Lehenga
                                </h3>

                                <p className="text-surface-dim font-light text-xs sm:text-sm leading-relaxed mb-4">
                                    Architectural raw silk lehenga with deep maroon drape alongside structured bespoke silk sherwani with subtle tonal hand-embroidery.
                                </p>

                                <Link
                                    className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-surface-bright hover:text-secondary-fixed transition-colors font-medium border-b border-surface-dim/30 pb-0.5"
                                    href="/shop"
                                >
                                    VIEW RUNWAY ARCHIVE

                                    <span
                                        className="material-symbols-outlined text-sm"
                                        data-icon="east"
                                    >
                                        east
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================================
                CAMPAIGN EDITION
                CampaignRevealSection already renders its own
                <section>, container, and header internally —
                so it's rendered directly here, not nested inside
                another copy of that markup.
            ================================= */}

            <CampaignRevealSection />
        </div>
    );
};

export default SignaturePieces;