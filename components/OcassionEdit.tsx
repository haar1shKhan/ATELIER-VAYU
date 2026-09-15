import Link from 'next/link'
import React from 'react'

const OcassionEdit = () => {
    return (
        <div>     
            <section className="py-20 bg-surface-container-low border-b border-outline-variant/30 overflow-hidden">
                <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">

                    {/* Section Header */}
                    <div className="text-center max-w-xl mx-auto mb-12">
                        <span className="text-[10px] uppercase tracking-[0.3em] text-secondary font-medium">
                            CURATED DESTINATIONS
                        </span>

                        <h3 className="font-display-lg text-2xl sm:text-3xl text-primary mt-1">
                            THE OCCASION EDIT
                        </h3>
                    </div>

                    {/* Occasion Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-start">

                        {/* Weddings */}
                        <div className="md:col-span-7 group relative overflow-hidden rounded-xl bg-tertiary aspect-[4/5] min-h-[520px] flex flex-col justify-end p-8 sm:p-12 shadow-xl border border-outline-variant/40">

                            <img
                                alt="Weddings Occasion Edit"
                                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out filter brightness-90"
                                src="wedding-image.png"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-tertiary/90 via-tertiary/40 to-transparent" />

                            <div className="relative z-10 max-w-md">
                                <span className="text-[10px] uppercase tracking-[0.3em] text-secondary-fixed font-medium mb-1 block">
                                    CURATED CAPSULE 01
                                </span>

                                <h4 className="font-display-lg text-3xl sm:text-4xl text-surface-bright tracking-wider uppercase mb-2">
                                    WEDDINGS
                                </h4>

                                <p className="text-xs sm:text-sm text-surface-dim font-light tracking-wide leading-relaxed mb-4">
                                    CELEBRATION OF UNION · COUTURE FORMAL
                                </p>

                                <Link
                                    className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-surface-bright hover:text-secondary-fixed transition-colors border-b border-surface-dim/40 pb-0.5"
                                    href="/shop"
                                >
                                    DISCOVER ATELIER

                                    <span
                                        className="material-symbols-outlined text-sm"
                                        data-icon="arrow_forward"
                                    >
                                        arrow_forward
                                    </span>
                                </Link>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="md:col-span-5 flex flex-col gap-6 lg:gap-8">

                            {/* Soirées */}
                            <div className="group relative overflow-hidden rounded-xl bg-tertiary aspect-[4/3] flex flex-col justify-end p-6 sm:p-8 shadow-md border border-outline-variant/40">

                                <img
                                    alt="Soirées Occasion Edit"
                                    className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out filter brightness-90"
                                    src="screen.png"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-tertiary/90 via-tertiary/30 to-transparent" />

                                <div className="relative z-10">
                                    <span className="text-[9px] uppercase tracking-[0.25em] text-secondary-fixed font-medium block mb-1">
                                        CURATED CAPSULE 02
                                    </span>

                                    <h4 className="font-display-lg text-2xl text-surface-bright tracking-wider uppercase">
                                        SOIRÉES
                                    </h4>

                                    <p className="text-xs text-surface-dim font-light tracking-wide mt-1">
                                        CANDLELIT EVENING WEAR
                                    </p>
                                </div>
                            </div>

                            {/* Festivals */}
                            <div className="group relative overflow-hidden rounded-xl bg-tertiary aspect-[3/4] flex flex-col justify-end p-6 sm:p-8 shadow-md border border-outline-variant/40">

                                <img
                                    alt="Festivals Occasion Edit"
                                    className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out filter brightness-90"
                                    src="ceremony-outfit.png"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-tertiary/90 via-tertiary/30 to-transparent" />

                                <div className="relative z-10">
                                    <span className="text-[9px] uppercase tracking-[0.25em] text-secondary-fixed font-medium block mb-1">
                                        CURATED CAPSULE 03
                                    </span>

                                    <h4 className="font-display-lg text-2xl text-surface-bright tracking-wider uppercase">
                                        FESTIVALS
                                    </h4>

                                    <p className="text-xs text-surface-dim font-light tracking-wide mt-1">
                                        HERITAGE HANDLOOMS &amp; RITUALS
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Formal Bespoke */}
                        <div className="md:col-span-12 group relative overflow-hidden rounded-xl bg-tertiary aspect-[16/9] md:aspect-auto md:min-h-[360px] flex items-end p-8 sm:p-12 shadow-xl border border-outline-variant/40 mt-2">

                            <img
                                alt="Formal Bespoke Occasion Edit"
                                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out filter brightness-90"
                                src="https://lh3.googleusercontent.com/aida/AEtjO1UUjvOQM_QRfrcFjpyJvvvjVwR2W2j46lYbBPG98W02nhz8MzM_JUy3aGPvBrkbei2NlN-A1dHhlZqPK582TZagvLA49FVsX0sO2Hp3sfnXSvdghWkvrCV7NrGQR3C8lzDnMSQ9U59IL7-XAc1C8CO6bVOTZGW0QDzVbJ5YMnkQunYNm-fDA56PJcEmeP_oHBN3YDH0qDyMgaA1OEeOf6ut2hyrR5ZyhtQd6UwHr2zhPPVKP-awgi95_ZQ"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-tertiary/90 via-tertiary/30 to-transparent" />

                            <div className="absolute inset-0 bg-gradient-to-r from-tertiary/60 via-transparent to-transparent hidden md:block" />

                            <div className="relative z-10 max-w-lg">
                                <span className="text-[10px] uppercase tracking-[0.3em] text-secondary-fixed font-medium mb-1 block">
                                    CURATED CAPSULE 04
                                </span>

                                <h4 className="font-display-lg text-2xl sm:text-3xl text-surface-bright tracking-wider uppercase mb-1">
                                    FORMAL BESPOKE
                                </h4>

                                <p className="text-xs sm:text-sm text-surface-dim font-light tracking-wide leading-relaxed mb-4">
                                    BANDHGALA &amp; TAILORED ARCHITECTURE
                                </p>

                                <Link
                                    className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-surface-bright hover:text-secondary-fixed transition-colors border-b border-surface-dim/40 pb-0.5"
                                    href="/shop"
                                >
                                    VIEW CURATION

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
        </div>
    )
}

export default OcassionEdit