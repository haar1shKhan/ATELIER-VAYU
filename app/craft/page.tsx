import Image from "next/image";
import Link from "next/link";
import { EDITORIAL_CAMPAIGNS } from "@/lib/data/products";

// export const metadata = {
//   title: "Heritage & Craft Provenance — Atelier Vayu",
//   description: "Explore our commitment to living Indian craft lineages, pit-loom weaving, and architectural tailoring."
// };


export default function CraftPage() {
  const { craft } = EDITORIAL_CAMPAIGNS;

  return (
    <div className="pt-32 pb-32 px-6 md:px-12 lg:px-20 max-w-[1600px] mx-auto">
      <div className="pb-16 border-b border-[rgba(23,19,19,0.12)]">
        <span className="text-[0.6875rem] font-medium tracking-provenance uppercase text-[#A58A5C] block mb-2">
          The Craft Manifesto
        </span>
        <h1 className="font-display text-4xl md:text-6xl text-[#171313] font-normal">
          Living Lineages, Timeless Form
        </h1>
        <p className="mt-4 text-xs md:text-sm text-[#171313]/70 font-light max-w-2xl leading-relaxed">
          Atelier Vayu was founded to protect the sacred geometry and sensory tactility of India’s hereditary textile guilds from synthetic homogenization.
        </p>
      </div>

      <div className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-6 relative aspect-4/3 w-full bg-[#ded9d1]">
          <Image
            src={craft.loomImage}
            alt="Handloom Weaving in Varanasi"
            fill
            className="object-cover"
          />
        </div>
        <div className="lg:col-span-6 space-y-6">
          <span className="text-[0.625rem] tracking-provenance uppercase text-[#A58A5C] font-semibold">
            Guild 01 • Varanasi
          </span>
          <h2 className="font-display text-2xl md:text-4xl text-[#171313]">
            Pit-Loom Kadwa Weaving
          </h2>
          <p className="text-xs md:text-sm text-[#171313]/80 leading-relaxed font-light">
            In Kadwa weaving, each motif is individually engraved and woven onto the fabric by hand using fine spools of pure gold and silver-plated thread. There are zero loose floating threads on the reverse of the textile—a hallmark of genuine museum-grade craftsmanship.
          </p>
          <div className="text-xs tracking-museum uppercase text-[#4A1118]">
            Loom Duration: 140 to 220 Hours per Sarees
          </div>
        </div>
      </div>

      <div className="mt-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-6 order-2 lg:order-1 space-y-6">
          <span className="text-[0.625rem] tracking-provenance uppercase text-[#A58A5C] font-semibold">
            Guild 02 • Jaipur Metalsmiths
          </span>
          <h2 className="font-display text-2xl md:text-4xl text-[#171313]">
            Sand-Cast Bespoke Hardware
          </h2>
          <p className="text-xs md:text-sm text-[#171313]/80 leading-relaxed font-light">
            Rejecting stamped industrial buttons, our garment closures, hooks, and cufflinks are molded in sand casts by traditional armor and utensil metalsmiths. Unlacquered brass matures over decades with an evocative natural patina.
          </p>
          <div className="text-xs tracking-museum uppercase text-[#4A1118]">
            Composition: 100% Solid Recycled Bell Metal & Brass
          </div>
        </div>
        <div className="lg:col-span-6 order-1 lg:order-2 relative aspect-4/3 w-full bg-[#ded9d1]">
          <Image
            src={craft.hardwareImage}
            alt="Sand-cast Antique Brass Buttons"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="mt-32 p-12 bg-[#2d0006] text-[#F4EFE6] border border-[#4A1118] text-center max-w-3xl mx-auto space-y-6">
        <span className="text-[0.625rem] tracking-provenance uppercase text-[#fedea9] font-medium block">
          Purity & Provenance Standard
        </span>
        <h3 className="font-display text-2xl md:text-3xl">
          Zero Synthetic Fillers Guarantee
        </h3>
        <p className="text-xs md:text-sm text-[#ebe1d3]/80 leading-relaxed font-light">
          We guarantee that every layer inside our garments—from chest canvasing and collar interlinings to threadwork and pocket bags—is constructed purely of biodegradable natural fibers: Mulberry silk, Organic Mulmul, and English horsehair.
        </p>
        <div>
          <Link
            href="/shop"
            className="inline-block bg-[#F4EFE6] text-[#2d0006] text-xs font-medium tracking-museum uppercase px-8 py-3.5 hover:bg-[#A58A5C] hover:text-[#F4EFE6] transition-colors"
          >
            Explore the Archival Garments &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
