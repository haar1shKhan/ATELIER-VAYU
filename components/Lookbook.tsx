"use client";

import Image from "next/image";
import Link from "next/link";

interface LookbookItem {
  title: string;
  caption: string;
  image: string;
}

interface LookbookProps {
  items: LookbookItem[];
}

export default function Lookbook({ items }: LookbookProps) {
  return (
    <section className="py-24 md:py-32 overflow-hidden bg-[#ded9d1]/40 border-b border-[rgba(23,19,19,0.1)]">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12">
          <div>
            <span className="text-[0.6875rem] font-medium tracking-provenance uppercase text-[#A58A5C] block mb-2">
              Visual Chronicle
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-[#171313] font-normal">
              The Editorial Lookbook
            </h2>
          </div>
          <p className="mt-3 md:mt-0 text-xs text-[#171313]/60 tracking-museum uppercase">
            Autumn / Winter Campaign 2026 • Brutalist Atelier Series
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, idx) => (
            <div key={idx} className="flex flex-col group">
              <div className="relative aspect-3/4 w-full overflow-hidden bg-[#e7e2d9]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171313]/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                <div className="absolute bottom-6 left-6 right-6 text-[#F4EFE6]">
                  <span className="text-[0.625rem] tracking-provenance uppercase text-[#fedea9] block mb-1">
                    Plate 0{idx + 1}
                  </span>
                  <h4 className="font-display text-lg leading-snug">{item.title}</h4>
                </div>
              </div>
              <p className="mt-4 text-xs text-[#171313]/70 font-light leading-relaxed">
                {item.caption}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/bespoke"
            className="inline-block border-b border-[#4A1118] text-[#4A1118] pb-1 text-xs tracking-museum uppercase font-medium hover:text-[#171313] hover:border-[#171313] transition-colors"
          >
            Commission Private Archive Piece &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
