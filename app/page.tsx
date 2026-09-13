"use client";

import React from "react";
import Link from "next/link";
import Hero from "@/components/Hero";
import TheHouse from "@/components/TheHouse";
import Collection from "@/components/Collection";
import ProductShowcase from "@/components/ProductShowcase";

export default function HomePage() {

  return (
    <div className="w-full">

      {/*  1. HERO SECTION (Nearly 100vh)  */}
      <Hero />


      {/*  2. EDITORIAL INTRO ("01 / THE HOUSE")  */}
      <TheHouse/>


      {/*  3. COLLECTION CAMPAIGN ("THE FESTIVE EDIT")  */}
      <Collection/>



      {/*  4. FEATURED COLLECTION & ASYMMETRICAL PRODUCT SHOWCASE  */}
      <ProductShowcase />

  
      {/*  6. THE CRAFT ("03 / CRAFT - MADE BY HAND. MADE TO LAST.")  */}
      <section className="py-24 sm:py-32 bg-surface text-on-surface" id="craft">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="max-w-3xl mb-16">
            <span className="font-label-lg text-secondary tracking-[0.25em] uppercase text-xs">
              03 / CRAFT
            </span>
            <h2 className="font-display-lg text-3xl sm:text-5xl text-primary mt-2 leading-tight">
              MADE BY HAND.<br />
              <span className="italic text-secondary">MADE TO LAST.</span>
            </h2>
            <p className="mt-6 text-on-surface-variant font-light text-base sm:text-lg leading-relaxed">
              In our workshops across Lucknow, Jaipur, and Varanasi, generation-spanning knowledge meets contemporary minimal silhouettes. We reject disposable velocity in favor of timeless heirloom construction.
            </p>
          </div>
          {/*  Editorial Multi-Scale Layout with Storytelling  */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/*  Craft 1  */}
            <div className="flex flex-col">
              <div className="relative overflow-hidden rounded-xl aspect-square bg-surface-container mb-6 border border-outline-variant/40">
                <img alt="Zardozi and Bullion Hand Embroidery" className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700" data-alt="A striking digital installation art piece featuring glowing, generative geometric shapes suspended in a vast, minimalist gallery space. The room is illuminated by high-key, soft white lighting that creates a bright, modern light-mode aesthetic. The artwork relies on a sophisticated palette of deep blacks and pristine whites, punctuated by intense accents of vibrant red. The mood is serene yet technologically advanced." src="https://lh3.googleusercontent.com/aida-public/AB6AXuACRW4hhkhYaPrpMn0Cr__5IVa0kji-6EvsOYHDKsFtHsMIoDPbp0y86uNA6FXpRpRIeBDQwCSAgWDYiF9f2yMaF_x_vMMv8PaA7Qzy5UtT7AQtLyJTvMR8-kr-OrGD3cUz_Zso8lk8vqXKumRLFY3UJX5SO2UEWpOCOHhAljyXDhyFbi7xp86Fflism2DxyrVZM1urBW3UKFjIfy21WquH7m5BpRWaBLxUSKNIx8SWdmNDfXjG7Edh" />
              </div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-secondary font-medium">PRECISION WORK</span>
              <h4 className="font-display-lg text-xl text-primary mt-1 mb-2">Zardozi &amp; Bullion Threadwork</h4>
              <p className="text-sm text-outline font-light leading-relaxed">
                Pure metallic wire drawn, coiled, and hand-stitched into dense floral arabesques and sharp geometric lineation over sheer organza and silks.
              </p>
            </div>
            {/*  Craft 2  */}
            <div className="flex flex-col">
              <div className="relative overflow-hidden rounded-xl aspect-square bg-surface-container mb-6 border border-outline-variant/40">
                <img alt="Hand Loom Raw Mulberry Silk" className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700" data-alt="A striking digital installation art piece featuring glowing, generative geometric shapes suspended in a vast, minimalist gallery space. The room is illuminated by high-key, soft white lighting that creates a bright, modern light-mode aesthetic. The artwork relies on a sophisticated palette of deep blacks and pristine whites, punctuated by intense accents of vibrant red. The mood is serene yet technologically advanced." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlS-hP9cU0-qbawOqR46wT74RXsKNR3i-0bh1jEQqfsl3PAMu5811Wt1iyhRKxuZXZM7rGl3jvjIlvYXTSNzUHMRxXnYrORmcH7jcWLs4we9t-1rZqG6xnqoBcdtxpPbd5s0pOsSbvd0Dt-lc6BJAD3t30_uPgthkALZGNbJBYqZgJSPNhWZsRYh_qojqlxLna26bmQYEiwIKmB6uNluanhJQDCZBrQQbpt3J08OKDmgOD8JCXMoPU" />
              </div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-secondary font-medium">TEXTILE PROVENANCE</span>
              <h4 className="font-display-lg text-xl text-primary mt-1 mb-2">Raw Mulberry &amp; Chanderi Weaves</h4>
              <p className="text-sm text-outline font-light leading-relaxed">
                Spun on traditional handlooms by master weavers. The slub and organic hand of raw silk lends tactile depth impossible with automated mills.
              </p>
            </div>
            {/*  Craft 3  */}
            <div className="flex flex-col">
              <div className="relative overflow-hidden rounded-xl aspect-square bg-surface-container mb-6 border border-outline-variant/40">
                <img alt="Custom Antique Brass Hardware" className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700" data-alt="A striking digital installation art piece featuring glowing, generative geometric shapes suspended in a vast, minimalist gallery space. The room is illuminated by high-key, soft white lighting that creates a bright, modern light-mode aesthetic. The artwork relies on a sophisticated palette of deep blacks and pristine whites, punctuated by intense accents of vibrant red. The mood is serene yet technologically advanced." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDd37hkmskYaaby-Wc1wkHkTAq_4bVdbC7EX3Dcx_LCRjYsr5ItZzNqFzGx2ZkEbYvuR7PiZkf6cNF4G9Gz2OQCbx8cszH_1BfAG9gYlmMK8u5qJrZ42xDfBuMZ3Lfx3PFmPUvLzP-DKUEgaozvUWI492lfEL32Lr3zLN147c72GoNzkmlZWQpIcaNWNHtjEuD8a_B_hQS0en8erYERr3i7_n3WevKFIPJDoiYtl5mlawo2ey_RIS7x" />
              </div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-secondary font-medium">BESPOKE ACCENTS</span>
              <h4 className="font-display-lg text-xl text-primary mt-1 mb-2">Antique Cast Brass Accents</h4>
              <p className="text-sm text-outline font-light leading-relaxed">
                Each button and clasp is sand-cast by metalsmiths in Moradabad, finished with an aged matte patina to harmonize with subdued jewel tones.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/*  7. SIGNATURE PIECES & CINEMATIC LOOKBOOK ("04 & 05")  */}
      <section className="py-24 bg-tertiary text-surface-bright">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
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
          {/*  Horizontal Lookbook Grid  */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-stretch"><div className="group relative overflow-hidden rounded-xl bg-tertiary-container md:col-span-7 lg:col-span-7 aspect-[4/5] md:aspect-auto md:min-h-[640px] flex flex-col justify-end p-8 sm:p-12 border border-surface-dim/20 shadow-2xl"><img alt="Look 01 Atelier Vayu Ivory Bandhgala" className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out filter brightness-90" src="https://lh3.googleusercontent.com/aida/AEtjO1XbYMwPup5s-34rTBxue1Vzqb4At70mGKbu8HdKuBEHtW-AFlH8LTmVmEqSd2ZnmlA2tEGanEFqGEHscsZusMq-or7PN8DKlpsjJXwFRXCRNjaVttANZqLlVGCyJdNXNduGNcXBky_NX2IjMu-ugfr116uJqPAkeZM8VBE9JDdg6afkXI8zo2FojIAEBLD0FG_WCNb8xu8Vx4lBx__F0xQMW8jGSZ8wuJjg2In_IZ0_2VslecyyhX7NRqM" /><div className="absolute inset-0 bg-gradient-to-t from-tertiary/90 via-tertiary/30 to-transparent"></div><div className="absolute top-6 left-6 z-10"><span className="inline-block text-[10px] uppercase tracking-[0.25em] text-secondary-fixed bg-tertiary/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-secondary-fixed/30 font-medium">ARCHIVE LOOK 01 · BESPOKE</span></div><div className="relative z-10 max-w-lg"><span className="text-[11px] uppercase tracking-[0.3em] text-secondary-fixed font-medium">TAILORED ARCHITECTURE</span><h3 className="font-display-lg text-2xl sm:text-4xl text-surface-bright mt-1 mb-2 font-normal leading-tight">Ivory Angrakha Overcoat &amp; Asymmetric Bandhgala</h3><p className="text-surface-dim font-light text-sm sm:text-base leading-relaxed mb-6">Crafted from raw hand-spun Varanasi Tussar silk with concealed plackets, muted antique brass buttons, and sculptural drape pleating.</p><div className="flex items-center gap-4"><Link className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-surface-bright hover:text-secondary-fixed transition-colors font-medium border-b border-surface-dim/30 pb-0.5" href="/shop">EXPLORE SILHOUETTE <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span></Link></div></div></div><div className="md:col-span-5 lg:col-span-5 flex flex-col gap-6 lg:gap-8"><div className="group relative overflow-hidden rounded-xl bg-tertiary-container aspect-[4/5] flex flex-col justify-end p-6 sm:p-8 border border-surface-dim/20 shadow-xl"><img alt="Look 02 Atelier Vayu Sculptural Drape Sari" className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out filter brightness-90" src="https://lh3.googleusercontent.com/aida/AEtjO1UoZH7j47Q1-FCz6PVbZK-LK0Fd6bec5W52FjnoJGeuAEw5oOoWKggk54RYNhrUd3CRP8rU9jZOhkXBgnX84TzHVr98aYL9Phk1-0qzRjCpH5i5XbBlenCAqmrdwwE9l61TWk7sqqReW_3Rw6C4adUDB74N1mg6XuVQDHN9EjtNDPufeuafZd8MVJnKFDUs_ka5_606RLrNxy-JCX38usm9zBruWkNsl1yXOpdCPB9wn7iKcMLw2dvjDzI" /><div className="absolute inset-0 bg-gradient-to-t from-tertiary/90 via-tertiary/30 to-transparent"></div><div className="absolute top-5 left-5 z-10"><span className="text-[9px] uppercase tracking-[0.22em] text-surface-bright bg-primary/60 backdrop-blur-md px-3 py-1 rounded-full border border-surface-bright/20 font-medium">LOOK 02 · COUTURE</span></div><div className="relative z-10"><span className="text-[10px] uppercase tracking-[0.25em] text-secondary-fixed font-medium">DRAPED MAJESTY</span><h4 className="font-display-lg text-xl sm:text-2xl text-surface-bright mt-1 mb-1">Sculptural Drape Sari &amp; Corset</h4><p className="text-xs text-surface-dim font-light leading-relaxed">Rich crimson silk velvet with antique gold border lineation and structured corset bodice.</p></div></div><div className="group relative overflow-hidden rounded-xl bg-tertiary-container aspect-[16/10] sm:aspect-[4/3] md:aspect-auto md:flex-1 flex flex-col justify-end p-6 sm:p-8 border border-surface-dim/20 shadow-xl"><img alt="Look 04 Atelier Vayu Zardozi Bullion Embroidery" className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out filter brightness-90" src="https://lh3.googleusercontent.com/aida/AEtjO1XYeELWAm9kw2mKb_opbX3GxLV-uDD-KonEFGRNviSnQ8TCIoa-if0znVxXLpdiOs7_U9OBpOWH-7zxCLI-TcNEu-R78CIRXo2NO3mi61hILJYffWrLo8jSnA8JhJLp4QDWrZ5uejyYI4WSiigbnE6NP7EoBnUuhsrEBGU-7qo8tSofsAaULGkgaOifKPaaL9PhP0zCkc8-vflNgMO3JyaZ_S3QeUuWTFRPKesDTHdbbgtvff3tmNNBqeQ" /><div className="absolute inset-0 bg-gradient-to-t from-tertiary/90 via-tertiary/40 to-transparent"></div><div className="absolute top-5 left-5 z-10"><span className="text-[9px] uppercase tracking-[0.22em] text-secondary-fixed bg-tertiary/60 backdrop-blur-md px-3 py-1 rounded-full border border-secondary-fixed/30 font-medium">LOOK 04 · EMBROIDERY</span></div><div className="relative z-10"><span className="text-[10px] uppercase tracking-[0.25em] text-secondary-fixed font-medium">HAUTE METALLURGY</span><h4 className="font-display-lg text-xl text-surface-bright mt-1 mb-1">Bullion Zardozi &amp; Antique Dabka</h4><p className="text-xs text-surface-dim font-light">Hand-stitched bullion gold work on rich deep maroon velvet.</p></div></div></div><div className="md:col-span-12 group relative overflow-hidden rounded-xl bg-tertiary-container min-h-[360px] md:min-h-[420px] flex items-end p-8 sm:p-12 border border-surface-dim/20 shadow-2xl"><img alt="Look 03 Atelier Vayu Campaign Pair" className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out filter brightness-90" src="https://lh3.googleusercontent.com/aida/AEtjO1UUjvOQM_QRfrcFjpyJvvvjVwR2W2j46lYbBPG98W02nhz8MzM_JUy3aGPvBrkbei2NlN-A1dHhlZqPK582TZagvLA49FVsX0sO2Hp3sfnXSvdghWkvrCV7NrGQR3C8lzDnMSQ9U59IL7-XAc1C8CO6bVOTZGW0QDzVbJ5YMnkQunYNm-fDA56PJcEmeP_oHBN3YDH0qDyMgaA1OEeOf6ut2hyrR5ZyhtQd6UwHr2zhPPVKP-awgi95_ZQ" /><div className="absolute inset-0 bg-gradient-to-t from-tertiary/90 via-tertiary/30 to-transparent"></div><div className="absolute inset-0 bg-gradient-to-r from-tertiary/60 via-transparent to-transparent hidden md:block"></div><div className="absolute top-6 left-6 z-10"><span className="text-[10px] uppercase tracking-[0.25em] text-secondary-fixed bg-tertiary/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-secondary-fixed/30 font-medium">LOOK 03 · CAMPAIGN HERO</span></div><div className="relative z-10 max-w-xl"><span className="text-[10px] uppercase tracking-[0.3em] text-secondary-fixed font-medium">LIMITED OCCASION EDITION</span><h3 className="font-display-lg text-2xl sm:text-4xl text-surface-bright mt-1 mb-2 font-normal">Midnight Maroon Sherwani &amp; Raw Silk Lehenga</h3><p className="text-surface-dim font-light text-xs sm:text-sm leading-relaxed mb-4">Architectural raw silk lehenga with deep maroon drape alongside structured bespoke silk sherwani with subtle tonal hand-embroidery.</p><Link className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-surface-bright hover:text-secondary-fixed transition-colors font-medium border-b border-surface-dim/30 pb-0.5" href="/shop">VIEW RUNWAY ARCHIVE <span className="material-symbols-outlined text-sm" data-icon="east">east</span></Link></div></div></div>
        </div>
      </section><section className="relative py-24 sm:py-32 bg-surface-container overflow-hidden border-b border-outline-variant/30"><div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16"><div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-outline-variant/40"><div><span className="font-label-lg text-secondary tracking-[0.25em] uppercase text-xs">CAMPAIGN EDITION 04 / RAJASTHAN PAVILION</span><h2 className="font-display-lg text-2xl sm:text-4xl text-primary mt-2 font-normal">Architectural Drapes at Sunset</h2></div><p className="text-xs uppercase tracking-[0.2em] text-outline mt-3 md:mt-0 font-light">GOLDEN HOUR COUTURE ARCHIVE · THAR DESERT</p></div><div className="relative overflow-hidden rounded-2xl border border-outline-variant/40 min-h-[420px] sm:min-h-[560px] lg:min-h-[700px] flex items-end group shadow-2xl"><img alt="Cinematic wide-angle campaign in Rajasthan pavilion" className="absolute inset-0 w-full h-full object-cover object-center transform group-hover:scale-105 filter contrast-105 transition-transform duration-1000 ease-out" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHK7gtj537nrJRRQ237EwUcItRGxLUhcl7sxytwWq5xRZ1D2FIbI3i_X6Z_APWbjPrdojsQ14UBdYP1uxGBoLs3zMzM9BPVfpUVcxI7VFceqJeviITQTkKliGp7CXNPnyvnTt68Ass8vR4YWWoVprUuZc_quGQszMiBXPSICBhCWGbfXzQHlHskJpQJm_JanHQaZZ9YhCJXnJ8J00VhhEvdB2P5rw4wEW6RMkdDTrEdvZXfcnEdc3l" /><div className="absolute inset-0 bg-gradient-to-t from-tertiary/90 via-tertiary/30 to-transparent"></div><div className="relative z-10 p-8 sm:p-12 lg:p-16 max-w-2xl"><span className="inline-block text-[10px] uppercase tracking-[0.3em] text-secondary-fixed mb-3 font-medium bg-tertiary/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-secondary-fixed/30">EDITORIAL PANORAMA</span><h3 className="font-display-lg text-3xl sm:text-5xl text-surface-bright leading-tight mb-4 font-normal">The Sandstone Sanctuary</h3><p className="text-surface-dim font-light text-sm sm:text-base leading-relaxed mb-8">Where brutalist desert geometry converges with hand-spun gold zardozi tissue and bespoke structured tailoring. Captured against the ancient terracotta dunes.</p><div className="flex flex-wrap items-center gap-6"><Link className="inline-flex items-center gap-3 bg-secondary-fixed text-on-secondary-fixed hover:bg-surface-bright px-7 py-3.5 rounded-full text-xs uppercase tracking-[0.22em] font-medium transition-all shadow-lg" href="/shop"><span className="">EXPLORE THE COUTURE SERIES</span><span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span></Link><a className="inline-flex items-center text-xs uppercase tracking-[0.22em] text-surface-bright hover:text-secondary-fixed border-b border-surface-bright/40 pb-1 transition-all" href="#journal">READ CAMPAIGN DISPATCH</a></div></div></div></div></section>
      {/*  8. OCCASION EDIT  */}
      <section className="py-20 bg-surface-container-low border-b border-outline-variant/30 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-[10px] uppercase tracking-[0.3em] text-secondary font-medium">CURATED DESTINATIONS</span>
            <h3 className="font-display-lg text-2xl sm:text-3xl text-primary mt-1">THE OCCASION EDIT</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-start"><div className="md:col-span-7 group relative overflow-hidden rounded-xl bg-tertiary aspect-[4/5] min-h-[520px] flex flex-col justify-end p-8 sm:p-12 shadow-xl border border-outline-variant/40"><img alt="Weddings Occasion Edit" className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out filter brightness-90" src="https://lh3.googleusercontent.com/aida/AEtjO1W2pStWWFpqSKEXQc2l1Lu89G3cVBi9OD8hKTLtoOsiKhO0wFWpRJfI91e9qlxVDiTHU9achnsstT0Jllph6nIcsOOPavSkDFl-cadWInvF3u0yZstleem4zA_8HAhW-HIoZYROAQcmIAR5Kfg0-d8FtyGyLO7wHCRGxKVf2ybN7mJJP7uFMfFARWFA3MJf3jwJTK7pfCpHB7e_iwecroUsn01TWncnTSSN3ETICmDctVsEaEzONH49h-U" /><div className="absolute inset-0 bg-gradient-to-t from-tertiary/90 via-tertiary/40 to-transparent"></div><div className="relative z-10 max-w-md"><span className="text-[10px] uppercase tracking-[0.3em] text-secondary-fixed font-medium mb-1 block">CURATED CAPSULE 01</span><h4 className="font-display-lg text-3xl sm:text-4xl text-surface-bright tracking-wider uppercase mb-2">WEDDINGS</h4><p className="text-xs sm:text-sm text-surface-dim font-light tracking-wide leading-relaxed mb-4">CELEBRATION OF UNION · COUTURE FORMAL</p><Link className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-surface-bright hover:text-secondary-fixed transition-colors border-b border-surface-dim/40 pb-0.5" href="/shop">DISCOVER ATELIER <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span></Link></div></div><div className="md:col-span-5 flex flex-col gap-6 lg:gap-8"><div className="group relative overflow-hidden rounded-xl bg-tertiary aspect-[4/3] flex flex-col justify-end p-6 sm:p-8 shadow-md border border-outline-variant/40"><img alt="Soirées Occasion Edit" className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out filter brightness-90" src="https://lh3.googleusercontent.com/aida/AEtjO1UU0B2eh6LORc6GNdgly4PWiqL4UTeiPCyy61vnby1uBsTXjkx9F4mTvrHSgRDlvgENS7JNjMR4AXM1sYWScdIe6lKWqscWsEpelNqsBwmFtyZ94GIxjPDd_fmQQOZnqnVW_jPCvfl0YiwGEawNhtPRD1ypQTE3Wp_2-wze7qDYEXMo_4Dm4LTDhMBSBUP1IdOFMBSC1Ia9K8o89GBhLIi-yyTwBsU1Skz-y09AhVW9f6ECZ3C-C_sHj9w" /><div className="absolute inset-0 bg-gradient-to-t from-tertiary/90 via-tertiary/30 to-transparent"></div><div className="relative z-10"><span className="text-[9px] uppercase tracking-[0.25em] text-secondary-fixed font-medium block mb-1">CURATED CAPSULE 02</span><h4 className="font-display-lg text-2xl text-surface-bright tracking-wider uppercase">SOIRÉES</h4><p className="text-xs text-surface-dim font-light tracking-wide mt-1">CANDLELIT EVENING WEAR</p></div></div><div className="group relative overflow-hidden rounded-xl bg-tertiary aspect-[3/4] flex flex-col justify-end p-6 sm:p-8 shadow-md border border-outline-variant/40"><img alt="Festivals Occasion Edit" className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out filter brightness-90" src="https://lh3.googleusercontent.com/aida/AEtjO1UQtvfeae5j3_rOwX780cqJFMCGgt1yNlnlQ903bkNIz4U4G3LPgdLz0PGVUu9lhMPB_oEvtjvN5V_F9uksHgwXEAAMQJuR5yYbmmnagDEH59e9an_9R4Ln21eZPCISrU5zVfzVYqkyvEp3kJRxk6dMkxVP-XiDTChEmUoJmV7trlI1Is3bagTMdNUhEOw4bzlXjFytPg-RQ-5yo3CO-oNpdpIlENj0X4dBVkkPawXKrPsBt_He0v7MSdc" /><div className="absolute inset-0 bg-gradient-to-t from-tertiary/90 via-tertiary/30 to-transparent"></div><div className="relative z-10"><span className="text-[9px] uppercase tracking-[0.25em] text-secondary-fixed font-medium block mb-1">CURATED CAPSULE 03</span><h4 className="font-display-lg text-2xl text-surface-bright tracking-wider uppercase">FESTIVALS</h4><p className="text-xs text-surface-dim font-light tracking-wide mt-1">HERITAGE HANDLOOMS &amp; RITUALS</p></div></div></div><div className="md:col-span-12 group relative overflow-hidden rounded-xl bg-tertiary aspect-[16/9] md:aspect-auto md:min-h-[360px] flex items-end p-8 sm:p-12 shadow-xl border border-outline-variant/40 mt-2"><img alt="Formal Bespoke Occasion Edit" className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out filter brightness-90" src="https://lh3.googleusercontent.com/aida/AEtjO1UUjvOQM_QRfrcFjpyJvvvjVwR2W2j46lYbBPG98W02nhz8MzM_JUy3aGPvBrkbei2NlN-A1dHhlZqPK582TZagvLA49FVsX0sO2Hp3sfnXSvdghWkvrCV7NrGQR3C8lzDnMSQ9U59IL7-XAc1C8CO6bVOTZGW0QDzVbJ5YMnkQunYNm-fDA56PJcEmeP_oHBN3YDH0qDyMgaA1OEeOf6ut2hyrR5ZyhtQd6UwHr2zhPPVKP-awgi95_ZQ" /><div className="absolute inset-0 bg-gradient-to-t from-tertiary/90 via-tertiary/30 to-transparent"></div><div className="absolute inset-0 bg-gradient-to-r from-tertiary/60 via-transparent to-transparent hidden md:block"></div><div className="relative z-10 max-w-lg"><span className="text-[10px] uppercase tracking-[0.3em] text-secondary-fixed font-medium mb-1 block">CURATED CAPSULE 04</span><h4 className="font-display-lg text-2xl sm:text-3xl text-surface-bright tracking-wider uppercase mb-1">FORMAL BESPOKE</h4><p className="text-xs sm:text-sm text-surface-dim font-light tracking-wide leading-relaxed mb-4">BANDHGALA &amp; TAILORED ARCHITECTURE</p><Link className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-surface-bright hover:text-secondary-fixed transition-colors border-b border-surface-dim/40 pb-0.5" href="/shop">VIEW CURATION <span className="material-symbols-outlined text-sm" data-icon="east">east</span></Link></div></div></div>
        </div>
      </section>
      {/*  9. JOURNAL ("06 / JOURNAL")  */}
      <section className="py-24 sm:py-32 bg-surface" id="journal">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-outline-variant/60">
            <div>
              <span className="font-label-lg text-secondary tracking-[0.25em] uppercase text-xs">
                06 / JOURNAL
              </span>
              <h2 className="font-display-lg text-3xl sm:text-4xl text-primary mt-2">
                ESSAYS &amp; DISPATCHES
              </h2>
            </div>
            <a className="text-xs uppercase tracking-[0.2em] text-primary hover:text-secondary mt-4 md:mt-0 font-medium inline-flex items-center gap-1" href="#">
              VIEW ALL DISPATCHES <span className="material-symbols-outlined text-sm" data-icon="east">east</span>
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {/*  Article 1  */}
            <article className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl aspect-[16/10] bg-surface-container mb-6 border border-outline-variant/50">
                <img alt="The New Language of Indian Formalwear" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="A striking digital installation art piece featuring glowing, generative geometric shapes suspended in a vast, minimalist gallery space. The room is illuminated by high-key, soft white lighting that creates a bright, modern light-mode aesthetic. The artwork relies on a sophisticated palette of deep blacks and pristine whites, punctuated by intense accents of vibrant red. The mood is serene yet technologically advanced." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB02-22CILRVGBMyUbAingVBuwJlcJE1JNkUxt_CHHjq3R66Jb55HshHqrNCUUm5MeT4yQfmI41UlTjvFhYMzIxfrChqqH9m5SnFfBTq5JpO3lUXo0UwwlpS5hnRMUwHPN2sKp0qozvK_ze5K88vr8H8sCI6iVQEsSxypLCEpny2lmiVv72KbFWKgRkcY142dQA7hGvq6NeLRDfTYXW6qlkp3-_zSbalKtJcv8iT6EXC4DNQFOT6dpt" />
              </div>
              <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-outline mb-2">
                <span className="">SARTORIAL THOUGHT</span>
                <span className="">·</span>
                <span className="">OCTOBER 2025</span>
              </div>
              <h3 className="font-display-lg text-2xl text-primary group-hover:text-secondary transition-colors leading-snug">
                The New Language of Indian Formalwear: Rejecting The Costume
              </h3>
              <p className="text-sm text-on-surface-variant font-light mt-3 leading-relaxed">
                How contemporary tailoring is untethering traditional silhouettes from ornamental excess, returning to architectural line and pure material integrity.
              </p>
              <span className="inline-block mt-4 text-xs uppercase tracking-[0.2em] text-primary border-b border-primary/40 pb-0.5">READ ESSAY →</span>
            </article>
            {/*  Article 2  */}
            <article className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl aspect-[16/10] bg-surface-container mb-6 border border-outline-variant/50">
                <img alt="Craft, Culture &amp; The Modern Wardrobe" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="A striking digital installation art piece featuring glowing, generative geometric shapes suspended in a vast, minimalist gallery space. The room is illuminated by high-key, soft white lighting that creates a bright, modern light-mode aesthetic. The artwork relies on a sophisticated palette of deep blacks and pristine whites, punctuated by intense accents of vibrant red. The mood is serene yet technologically advanced." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlS-hP9cU0-qbawOqR46wT74RXsKNR3i-0bh1jEQqfsl3PAMu5811Wt1iyhRKxuZXZM7rGl3jvjIlvYXTSNzUHMRxXnYrORmcH7jcWLs4we9t-1rZqG6xnqoBcdtxpPbd5s0pOsSbvd0Dt-lc6BJAD3t30_uPgthkALZGNbJBYqZgJSPNhWZsRYh_qojqlxLna26bmQYEiwIKmB6uNluanhJQDCZBrQQbpt3J08OKDmgOD8JCXMoPU" />
              </div>
              <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-outline mb-2">
                <span className="">ATELIER NOTES</span>
                <span className="">·</span>
                <span className="">SEPTEMBER 2025</span>
              </div>
              <h3 className="font-display-lg text-2xl text-primary group-hover:text-secondary transition-colors leading-snug">
                Craft, Culture &amp; The Modern Wardrobe: Inside The Weaving Sheds
              </h3>
              <p className="text-sm text-on-surface-variant font-light mt-3 leading-relaxed">
                A journey through the narrow lanes of Varanasi and Jaipur, where artisan guilds maintain the rare craft of hand-guided metallic bullion work.
              </p>
              <span className="inline-block mt-4 text-xs uppercase tracking-[0.2em] text-primary border-b border-primary/40 pb-0.5">READ ESSAY →</span>
            </article>
          </div>
        </div>
      </section>
      {/*  10. FINAL CAMPAIGN BANNER  */}
      <section className="relative py-28 overflow-hidden bg-primary-container text-surface-bright">
        <div className="absolute inset-0 z-0 opacity-20">
          <img alt="Atelier Vayu Textural Motif" className="w-full h-full object-cover" data-alt="A striking digital installation art piece featuring glowing, generative geometric shapes suspended in a vast, minimalist gallery space. The room is illuminated by high-key, soft white lighting that creates a bright, modern light-mode aesthetic. The artwork relies on a sophisticated palette of deep blacks and pristine whites, punctuated by intense accents of vibrant red. The mood is serene yet technologically advanced." src="https://lh3.googleusercontent.com/aida/AEtjO1VPSzy58-_sW3qzPyI9Z5vkLgHFWV5Gb7yHzO05XvZFNs2BDzMs8C7G-WfLwM5BzSnGCGuZFWrYwyk32SlXn0umAEkG_j6LMwKnmxXvo81kFnhz6Ev-JbhVbM_U1nXPMGGtgmDQIbbmTju3VSDZ3YXzRJSHzk8tzR_q-aHZ2GdxTu1QnokiW6tzL3jIZJD8JjKNFfl9MbKnVW0rhzQAQQWtaVI1MS6TVu0eA346FDYz92qavBtJcH-FkA" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span className="text-xs uppercase tracking-[0.35em] text-secondary-fixed mb-4 inline-block">
            ATELIER VAYU · NEW SEASON
          </span>
          <h2 className="font-display-lg text-4xl sm:text-6xl text-surface-bright leading-tight mb-6 font-normal">
            WEAR YOUR HERITAGE.
          </h2>
          <p className="text-surface-dim font-light text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Discover the complete Autumn / Winter 2025 capsule. Hand-crafted in limited seasonal editions.
          </p>
          <Link className="inline-flex items-center gap-3 bg-secondary-fixed text-on-secondary-fixed px-8 py-4 rounded-full text-xs uppercase tracking-[0.22em] font-medium hover:bg-surface-bright transition-all duration-300 shadow-xl" href="/shop">
            <span className="">SHOP THE COLLECTION</span>
            <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
          </Link>
        </div>
      </section>
      {/*  FOOTER  */}

    </div>
  );
}
