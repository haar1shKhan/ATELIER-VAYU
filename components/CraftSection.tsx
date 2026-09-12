"use client";

import Image from "next/image";
import Link from "next/link";

interface CraftSectionProps {
  craft: {
    loomImage: string;
    artisanImage: string;
    hardwareImage: string;
    textileImage: string;
  };
}

export default function CraftSection({ craft }: CraftSectionProps) {
  return (
    <section className="py-28 md:py-36 bg-[#2d0006] text-[#F4EFE6] px-6 md:px-12 lg:px-20 border-y border-[#4A1118]">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pb-20 border-b border-[#743137]/40">
          <div className="lg:col-span-6">
            <span className="text-[0.6875rem] font-medium tracking-provenance uppercase text-[#fedea9] block mb-3">
              Chapter II • Material Integrity
            </span>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-normal leading-tight text-[#F4EFE6]">
              Woven by Hand.
              <br />
              <span className="italic font-light text-[#e1c290]">
                Sculpted by Discipline.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <p className="text-sm md:text-base text-[#ebe1d3]/80 font-light leading-relaxed">
              Every garment at Atelier Vayu is rooted in living craft lineages across Varanasi, Chanderi, and Rajasthan. Rejecting industrial mills, we partner with master weavers who preserve ancient pit-loom techniques, producing fabrics with organic irregularities that tell stories of hand-beaten silver, botanical mordants, and unhurried time.
            </p>
            <div className="flex items-center space-x-6 text-[0.6875rem] tracking-museum uppercase text-[#fedea9]">
              <span>0% Synthetic Polyester</span>
              <span>&bull;</span>
              <span>Hand-Spun Mulberry Silk</span>
              <span>&bull;</span>
              <span>Sand-Cast Brass</span>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <div className="flex flex-col space-y-4">
            <div className="relative aspect-4/5 overflow-hidden bg-[#141008] border border-[#743137]/30">
              <Image
                src={craft.loomImage}
                alt="Master Weavers at Pit Loom"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <span className="text-[0.625rem] tracking-provenance uppercase text-[#A58A5C] font-medium">
              Lineage • Varanasi
            </span>
            <h3 className="font-display text-xl text-[#F4EFE6]">
              Heirloom Pit-Loom Weaving
            </h3>
            <p className="text-xs text-[#cfc5b8] font-light leading-relaxed">
              Real zari threads intertwined with high-twist Mulberry silk, taking up to 240 hours per drape under the watchful eye of third-generation weavers.
            </p>
          </div>

          <div className="flex flex-col space-y-4">
            <div className="relative aspect-4/5 overflow-hidden bg-[#141008] border border-[#743137]/30">
              <Image
                src={craft.artisanImage}
                alt="Draper sculpting raw silk on mannequin"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <span className="text-[0.625rem] tracking-provenance uppercase text-[#A58A5C] font-medium">
              Form • New Delhi Atelier
            </span>
            <h3 className="font-display text-xl text-[#F4EFE6]">
              Architectural Draping
            </h3>
            <p className="text-xs text-[#cfc5b8] font-light leading-relaxed">
              Tailoring without synthetic adhesives. Full floating horsehair canvas and natural mulmul underlinings preserve the fabric’s organic breathability.
            </p>
          </div>

          <div className="flex flex-col space-y-4">
            <div className="relative aspect-4/5 overflow-hidden bg-[#141008] border border-[#743137]/30">
              <Image
                src={craft.hardwareImage}
                alt="Sand-cast antique brass buttons and metalwork"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <span className="text-[0.625rem] tracking-provenance uppercase text-[#A58A5C] font-medium">
              Metalsmithing • Jaipur
            </span>
            <h3 className="font-display text-xl text-[#F4EFE6]">
              Sand-Cast Antique Brass
            </h3>
            <p className="text-xs text-[#cfc5b8] font-light leading-relaxed">
              Bespoke clasps and buttons poured individually in sand molds. Each fitting exhibits subtle textural variations, acquiring a natural patina over decades.
            </p>
          </div>
        </div>

        <div className="mt-20 pt-12 border-t border-[#743137]/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <span className="font-display text-lg text-[#F4EFE6]">
            Every garment carries a hand-signed Certificate of Provenance.
          </span>
          <Link
            href="/craft"
            className="inline-block border border-[#fedea9] text-[#fedea9] text-xs font-medium tracking-museum uppercase px-8 py-3.5 hover:bg-[#fedea9] hover:text-[#2d0006] transition-colors"
          >
            Read The Craft Manifesto &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
