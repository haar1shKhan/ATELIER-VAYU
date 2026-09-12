import ProductCard from "@/components/ProductCard";
import { PRODUCTS } from "@/lib/data/products";
import Link from "next/link";

export const metadata = {
  title: "The Ceremonial Archive (PLP) — Atelier Vayu",
  description: "Browse the complete archival collection of luxury Indian occasions wear."
};

interface ShopPageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function ShopPage({ searchParams }: ShopPageProps) {
  const resolvedParams = await searchParams;
  const currentCategory = resolvedParams.category || "all";

  const filteredProducts =
    currentCategory === "all"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === currentCategory);

  return (
    <div className="pt-32 pb-32 px-6 md:px-12 lg:px-20 max-w-[1600px] mx-auto">
      {/* Archive Header */}
      <div className="pb-16 border-b border-[rgba(23,19,19,0.12)]">
        <span className="text-[0.6875rem] font-medium tracking-provenance uppercase text-[#A58A5C] block mb-2">
          Permanent & Seasonal Archive
        </span>
        <h1 className="font-display text-4xl md:text-6xl text-[#171313] font-normal">
          The Ceremonial Collection
        </h1>
        <p className="mt-4 text-xs md:text-sm text-[#171313]/70 font-light max-w-xl leading-relaxed">
          Each garment is produced in strictly limited editions from hand-spun silks and natural dyes. Select a piece to view individual loom provenance or schedule a bespoke salon fitting.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="py-8 flex flex-wrap items-center justify-between gap-4 border-b border-[#E8DED0] mb-12 text-xs tracking-museum uppercase">
        <div className="flex items-center space-x-8">
          <Link
            href="/shop"
            className={`pb-1 transition-colors ${
              currentCategory === "all"
                ? "border-b-2 border-[#4A1118] text-[#4A1118] font-bold"
                : "text-[#171313]/70 hover:text-[#171313]"
            }`}
          >
            All Pieces ({PRODUCTS.length})
          </Link>
          <Link
            href="/shop?category=menswear"
            className={`pb-1 transition-colors ${
              currentCategory === "menswear"
                ? "border-b-2 border-[#4A1118] text-[#4A1118] font-bold"
                : "text-[#171313]/70 hover:text-[#171313]"
            }`}
          >
            Menswear
          </Link>
          <Link
            href="/shop?category=womenswear"
            className={`pb-1 transition-colors ${
              currentCategory === "womenswear"
                ? "border-b-2 border-[#4A1118] text-[#4A1118] font-bold"
                : "text-[#171313]/70 hover:text-[#171313]"
            }`}
          >
            Womenswear & Drapes
          </Link>
        </div>

        <div className="text-[0.625rem] text-[#A58A5C] tracking-provenance">
          Handloom Guild Certified
        </div>
      </div>

      {/* Product Grid: 3 columns on desktop, 2 on tablet, 1 on mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

