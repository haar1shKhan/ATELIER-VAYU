import { PRODUCTS } from "@/lib/data/products";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CornerVine } from "@/components/CornerVine";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const resolvedParams = await params;
  const product = PRODUCTS.find((p) => p.slug === resolvedParams.slug);

  if (!product) {
    notFound();
  }

  

  return (
    <div className="relative pt-32 pb-32 px-6 md:px-12 lg:px-20 max-w-[1600px] mx-auto overflow-hidden">
      {/* <CornerVine className="-scale-x-100 -rotate-90 mt-10" position="top-right" /> */}
      <CornerVine className="scale-y-100 -rotate-110 mt-8 -ml-10" position="top-left" />
      <CornerVine className="-scale-y-100 -rotate-110 mb-10 -mr-8" position="bottom-right" />

      <div className="text-[0.625rem] tracking-museum uppercase text-[#A58A5C] mb-8 flex items-center space-x-2">
        <Link href="/" className="hover:text-[#171313]">Atelier</Link>
        <span>/</span>
        <Link href="/shop" className="hover:text-[#171313]">Archive</Link>
        <span>/</span>
        <span className="text-[#171313] font-medium">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-7 space-y-8">
          {product.images.map((img, idx) => (
            <div
              key={idx}
              className="relative aspect-4/5 w-full overflow-hidden bg-[#ded9d1]"
            >
              <Image
                src={img}
                alt={`${product.name} Plate ${idx + 1}`}
                fill
                priority={idx === 0}
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center"
              />
              <span className="absolute bottom-4 left-4 bg-[#F4EFE6]/90 px-3 py-1 text-[0.5625rem] font-medium tracking-provenance uppercase text-[#171313]">
                Plate 0${idx + 1} • Archive Documentation
              </span>
            </div>
          ))}
        </div>

        <div className="lg:col-span-5 lg:sticky lg:top-32 h-fit space-y-8">
          <div className="border-b border-[#E8DED0] pb-8">
            <span className="text-[0.625rem] tracking-provenance uppercase text-[#A58A5C] font-semibold block mb-2">
              {product.collection} • {product.provenance}
            </span>
            <h1 className="font-display text-3xl md:text-4xl text-[#171313] font-normal leading-tight">
              {product.name}
            </h1>
            <div className="mt-4 flex items-baseline space-x-4">
              <span className="font-display text-2xl text-[#171313]">
                {product.priceDisplay}
              </span>
              <span className="text-[0.6875rem] text-[#171313]/60 tracking-museum uppercase">
                Taxes Included • Bespoke Fitting Included
              </span>
            </div>
          </div>

          <div className="space-y-4 text-xs md:text-sm text-[#171313]/80 font-light leading-relaxed">
            <p>{product.description}</p>
          </div>

          <div className="bg-[#E8DED0]/30 p-6 border border-[#E8DED0] space-y-4">
            <span className="text-[0.625rem] font-semibold tracking-provenance uppercase text-[#4A1118] block">
              Textile & Architectural Specifications
            </span>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div>
                <span className="text-[#A58A5C] block text-[0.625rem] uppercase tracking-museum">
                  Textile Base
                </span>
                <span className="font-medium text-[#171313]">{product.fabric}</span>
              </div>
              <div>
                <span className="text-[#A58A5C] block text-[0.625rem] uppercase tracking-museum">
                  Colorway
                </span>
                <span className="font-medium text-[#171313]">{product.colors.join(", ")}</span>
              </div>
            </div>

            <div className="pt-2 border-t border-[#E8DED0]/60">
              <span className="text-[#A58A5C] block text-[0.625rem] uppercase tracking-museum mb-2">
                Garment Construction Details
              </span>
              <ul className="list-disc list-inside space-y-1 text-xs text-[#171313]/80 font-light">
                {product.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-4 pt-2">
            <div>
              <div className="flex justify-between items-center text-xs tracking-museum uppercase mb-2">
                <span className="text-[#171313] font-medium">Measurement Standard</span>
                <Link href="/bespoke" className="text-[#4A1118] hover:underline">
                  Measurement Guide &rarr;
                </Link>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size, idx) => (
                  <button
                    key={idx}
                    className="border border-[#171313]/30 px-4 py-2 text-xs tracking-museum hover:border-[#4A1118] hover:bg-[#4A1118] hover:text-[#F4EFE6] transition-colors cursor-pointer"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3 pt-4">
              <Link
                href="/bespoke"
                className="block w-full text-center bg-[#4A1118] text-[#F4EFE6] text-xs font-medium tracking-museum uppercase py-4 hover:bg-[#171313] transition-colors"
              >
                Schedule Salon Appointment & Fitting &rarr;
              </Link>
              <button
                // onClick={handleAddToCart}
                className="block w-full text-center border border-[#171313] text-[#171313] text-xs font-medium tracking-museum uppercase py-4 hover:bg-[#171313] hover:text-[#F4EFE6] transition-colors cursor-pointer"
              >
                Direct Archival Acquisition ({product.priceDisplay})
              </button>
            </div>
          </div>

          <div className="pt-4 border-t border-[#E8DED0] text-[0.6875rem] text-[#171313]/60 space-y-2">
            <p>&bull; Hand-tailored in New Delhi. Typical atelier lead time: 3 to 5 weeks.</p>
            <p>&bull; Includes museum-grade archive garment bag and bespoke wooden hanger.</p>
            <p>&bull; Personal concierge video consultations available worldwide.</p>
          </div>
        </div>
      </div>
    </div>
  );
}