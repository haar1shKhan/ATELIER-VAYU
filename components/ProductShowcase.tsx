"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/data/products";
import ProductCard from "./ProductCard";

interface ProductShowcaseProps {
  products: Product[];
  onQuickAdd?: (product: Product) => void;
}

export default function ProductShowcase({
  products,
  onQuickAdd
}: ProductShowcaseProps) {
  const featuredLead = products[0];
  const gridProducts = products.slice(1, 5);

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 max-w-[1600px] mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between pb-16 border-b border-[rgba(23,19,19,0.12)]">
        <div>
          <span className="text-[0.6875rem] font-medium tracking-provenance uppercase text-[#A58A5C] block mb-2">
            Curated Acquisition
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-[#171313] font-normal">
            The Ceremonial Archive
          </h2>
        </div>
        <p className="mt-4 md:mt-0 text-xs md:text-sm text-[#171313]/70 font-light max-w-md">
          Restrained Indian silhouette architectures crafted from hereditary handloom silks, vegetable dyes, and sand-cast brass elements.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {featuredLead && (
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative aspect-3/4 w-full overflow-hidden bg-[#ded9d1]">
              <Image
                src={featuredLead.images[0]}
                alt={featuredLead.name}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-top hover:scale-102 transition-transform duration-1000 ease-out"
              />
              <div className="absolute top-6 left-6 bg-[#F4EFE6] px-3.5 py-1.5 border border-[#A58A5C]/40 text-[0.625rem] font-medium tracking-provenance uppercase text-[#4A1118]">
                Masterpiece Feature
              </div>
            </div>

            <div className="mt-8 flex flex-col md:flex-row md:items-start justify-between gap-6 border-b border-[#E8DED0] pb-8">
              <div className="max-w-md">
                <span className="text-[0.625rem] tracking-provenance uppercase text-[#A58A5C] font-medium block mb-1">
                  {featuredLead.provenance}
                </span>
                <h3 className="font-display text-2xl md:text-3xl text-[#171313]">
                  {featuredLead.name}
                </h3>
                <p className="mt-3 text-xs md:text-sm text-[#171313]/70 font-light leading-relaxed">
                  {featuredLead.description}
                </p>
              </div>

              <div className="flex flex-col items-start md:items-end shrink-0 space-y-4">
                <span className="font-display text-xl text-[#171313]">
                  {featuredLead.priceDisplay}
                </span>
                <Link
                  href={`/shop/${featuredLead.slug}`}
                  className="bg-[#4A1118] text-[#F4EFE6] text-xs font-medium tracking-museum uppercase px-6 py-3 hover:bg-[#171313] transition-colors"
                >
                  View Provenance &rarr;
                </Link>
              </div>
            </div>
          </div>
        )}

        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
          {gridProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickAdd={onQuickAdd}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
