"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Product } from "@/lib/data/products";

interface ProductCardProps {
  product: Product;
  onQuickAdd?: (product: Product) => void;
}

export default function ProductCard({ product, onQuickAdd }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group flex flex-col bg-transparent"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        href={`/shop/${product.slug}`}
        className="relative aspect-4/5 w-full overflow-hidden bg-[#ded9d1] block"
      >
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={`object-cover object-center transition-opacity duration-700 ease-in-out ${
            isHovered && product.images[1] ? "opacity-0" : "opacity-100"
          }`}
        />

        {product.images[1] && (
          <Image
            src={product.images[1]}
            alt={`${product.name} detail`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={`object-cover object-center transition-opacity duration-700 ease-in-out absolute inset-0 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          />
        )}

        <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
          {product.featured && (
            <span className="bg-[#F4EFE6] text-[#4A1118] text-[0.5625rem] font-medium tracking-provenance uppercase px-2.5 py-1 border border-[#A58A5C]/40">
              Ceremonial
            </span>
          )}
        </div>

        <div
          className={`absolute bottom-0 inset-x-0 bg-[#F4EFE6]/95 border-t border-[#E8DED0] p-3 transition-transform duration-300 ease-out z-10 ${
            isHovered ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <button
            onClick={(e) => {
              e.preventDefault();
              onQuickAdd?.(product);
            }}
            className="w-full text-center text-[0.625rem] font-medium tracking-museum uppercase text-[#171313] hover:text-[#4A1118] py-1 cursor-pointer"
          >
            Acquire Piece / Bespoke Fitting &rarr;
          </button>
        </div>
      </Link>

      <div className="pt-5 pb-2 flex flex-col space-y-1.5">
        <div className="flex justify-between items-baseline text-[0.625rem] tracking-provenance uppercase text-[#A58A5C] font-medium">
          <span>{product.collection}</span>
          <span className="text-[#171313]/60">{product.fabric.split(" ")[0]}</span>
        </div>

        <Link
          href={`/shop/${product.slug}`}
          className="font-display text-lg text-[#171313] hover:text-[#4A1118] transition-colors leading-snug line-clamp-1"
        >
          {product.name}
        </Link>

        <div className="flex justify-between items-baseline pt-1">
          <span className="text-xs tracking-wide text-[#171313] font-light">
            {product.priceDisplay}
          </span>
          <span className="text-[0.625rem] text-[#171313]/50 tracking-museum uppercase">
            {product.sizes[0]}
          </span>
        </div>
      </div>
    </div>
  );
}
