"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LdProductShowcase = () => {
  const { addToCart, openCart, openSalonModal } = useCart();

  const gridRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const quickAddRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const glowRefs = useRef<(HTMLDivElement | null)[]>([]);

  const products = [
    {
      id: "ivory-silk-asymmetric-bandhgala",
      name: "Ivory Silk Asymmetric Bandhgala",
      category: "MENSWEAR OCCASION",
      description:
        "Hand-woven Varanasi Tussar silk with concealed placket & sand-cast brass buttons",
      price: 84000,
      formattedPrice: "₹84,000",
      usdPrice: "$2,450",
      image: "high_fashion_editorial_portrait_of_an_indian_male_model_wearing_an_avant_garde.png",
      edition: "Edition // No. VII - 04",
      size: "40R",
      colorway: "Ivory Sand",
      badge: "SIGNATURE PIECE",
      colors: ["#EFECE6", "#4A1118", "#D4AF37", "#1A1A1A"],
      hightlight: false,
    },
    {
      id: "sculpted-crimson-zardozi-lehenga",
      name: "The Sculpted Crimson Zardozi Lehenga",
      category: "BRIDAL & COUTURE",
      description:
        "Architectural velvet corset bodice paired with cascading handloom gold dabka panels and fluid draped dupatta. Finished with sand-cast antique brass accents.",
      price: 145000,
      formattedPrice: "₹1,45,000",
      usdPrice: "$3,800",
      image: "high_fashion_editorial_portrait_of_an_indian_female_model_wearing_a.png",
      edition: "Edition // No. VII - 01",
      size: "38R",
      colorway: "Crimson Vermilion",
      badge: "COUTURE ARCHIVE · VOGUE FEATURE",
      colors: ["#4A1118", "#2A1810", "#8C2330"],
      limitedEdition: true,
      hightlight: true,
    },
    {
      id: "sandstone-raw-silk-bandhgala",
      name: "Sandstone Raw Silk Structured Bandhgala",
      category: "MENSWEAR BESPOKE",
      description: "Structured raw silk bandhgala in sandstone tones.",
      price: 76000,
      formattedPrice: "₹76,000",
      usdPrice: "$1,850",
      image: "screen-2.png",
      edition: "Edition // No. VII - 06",
      size: "42R",
      colorway: "Sandstone Gold",
      badge: "NEW ARRIVAL",
      colors: ["#D4C3A3", "#E5DACE", "#2A1810"],
      hightlight: false,
    },
    {
      id: "banarasi-tissue-corset-saree",
      name: "Banarasi Tissue Corset Saree",
      category: "WOMENSWEAR DRAPERY",
      description:
        "Handwoven metallic tissue silk in warm ecru and soft gold with structured boned corset bodice",
      price: 98000,
      formattedPrice: "₹98,000",
      usdPrice: "$2,650",
      image: "screen-1.png",
      edition: "Edition // No. VII - 08",
      size: "Custom Drape",
      colorway: "Antique Zari",
      badge: "ATELIER COUTURE",
      colors: ["#EFECE6", "#D4AF37"],
      hightlight: false,
    },
    {
      id: "layered-raw-silk-angrakha",
      name: "Layered Raw Silk Angrakha Kurta",
      category: "MENSWEAR CONTEMPORARY",
      description: "Muted deep maroon silk with asymmetrical overlap closure",
      price: 68000,
      formattedPrice: "₹68,000",
      usdPrice: "$1,650",
      image: "screen-2.png",
      edition: "Edition // No. VII - 09",
      size: "40R",
      colorway: "Nocturne Black",
      badge: "RUNWAY CAPSULE",
      colors: ["#4A1118", "#1A1A1A"],
      hightlight: false,
    },
  ];

  const layoutPairs = [
    [7, 5],
    [4, 8],
    [5, 7],
    [8, 4],
    [5, 7],
  ];

  const productGridLayout = products.map((product, index) => {
    const pairIndex = Math.floor(index / 2);
    const randomIndex = (pairIndex * pairIndex + pairIndex * 5 + 2) % layoutPairs.length;
    const pair = layoutPairs[randomIndex];

    return {
      ...product,
      layout: `lg:col-span-${pair[index % 2]}`,
    };
  });

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];

      // Editorial cascade — every card animates as one coordinated, staggered wave once the
      // grid has actually scrolled well into view (batch grouped by arrival time before, which
      // meant slow scrolling produced single-card "batches" with no visible stagger at all).
      gsap.fromTo(
        cards,
        { opacity: 0, y: 44, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 65%", // fires later, once the grid is meaningfully on screen — not the moment it peeks in
            once: true,
          },
        }
      );

      // Slow pulsing glow loop on the couture highlight piece — a quiet "featured" cue
      glowRefs.current.forEach((glow) => {
        if (!glow) return;
        gsap.to(glow, {
          opacity: 0.55,
          duration: 2.2,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      });
    }, gridRef);

    return () => ctx.revert();
  }, []);

  // Smoother, GSAP-driven quick-add slide (replaces relying purely on CSS opacity)
  const handleCardEnter = (i: number) => {
    const btn = quickAddRefs.current[i];
    if (btn) gsap.to(btn, { y: 0, opacity: 1, duration: 0.35, ease: "power2.out" });
  };
  const handleCardLeave = (i: number) => {
    const btn = quickAddRefs.current[i];
    if (btn) gsap.to(btn, { y: 10, opacity: 0, duration: 0.3, ease: "power2.in" });
  };

  return (
    <div ref={gridRef} className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mx-auto">
      {productGridLayout.map((product, index) => {
        const isWide =
          product.layout === "lg:col-span-7" ||
          product.layout === "lg:col-span-8" ||
          product.layout === "lg:col-span-9";

        const isSmall = product.layout === "lg:col-span-3" || product.layout === "lg:col-span-4";

        return (
          
          <div
            key={product.id}
            ref={(el) => {
              cardRefs.current[index] = el;
            }}
            className={`${product.layout} group flex flex-col`}
            onMouseEnter={() => handleCardEnter(index)}
            onMouseLeave={() => handleCardLeave(index)}
          >
            {/* IMAGE */}
            <Link
              href={`/shop/${product.id}`}
              >
              <div
                className={`
                  relative overflow-hidden rounded-xl
                  bg-surface-container-high
                  border border-outline-variant/50
                  shadow-sm
                  ${isSmall ? "aspect-[3/4]" : isWide ? "aspect-[16/10]" : "aspect-[4/3]"}
                `}
              >
                {/* Pulsing glow ring — only rendered for the couture highlight piece */}
                {product.hightlight && (
                  <div
                    ref={(el) => {
                      glowRefs.current[index] = el;
                    }}
                    className="pointer-events-none absolute -inset-px rounded-xl z-20 opacity-0"
                    style={{ boxShadow: "0 0 0 1px rgba(212,175,55,0.6), 0 0 24px 4px rgba(212,175,55,0.25)" }}
                  ></div>
                )}

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* BADGE */}
                {product.badge && (
                  <div
                    className={`
                      absolute top-4 left-4
                      ${
                        product.hightlight
                          ? "bg-primary-container/90 border-primary/40 text-white"
                          : "bg-surface/90 border-outline-variant/40 text-primary"
                      }
                      backdrop-blur-sm px-3 py-1.5 rounded-full border
                      text-[9px] uppercase tracking-[0.2em] font-medium
                      transition-transform duration-500 ease-out
                      group-hover:-translate-y-0.5
                    `}
                  >
                    {product.badge}
                  </div>
                )}

                {/* QUICK ADD — now driven by GSAP on hover for a smoother slide-up */}
                <div className="absolute inset-x-4 bottom-4">
                  <button
                    ref={(el) => {
                      quickAddRefs.current[index] = el;
                    }}
                    className="
                      w-full bg-surface text-primary py-3 rounded-full
                      text-[11px] uppercase tracking-[0.2em] font-medium shadow-lg
                      hover:bg-primary-container hover:text-surface transition-colors
                      flex items-center justify-center gap-2 cursor-pointer
                      opacity-0
                    "
                    style={{ transform: "translateY(10px)" }}
                  >
                    <span className="material-symbols-outlined text-sm" data-icon="add">
                      add
                    </span>
                    QUICK ADD TO BAG
                  </button>
                </div>
              </div>
            </Link>

            {/* PRODUCT INFO */}
            <div className="mt-5 flex items-start justify-between gap-5">
              {/* LEFT */}
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-secondary font-medium">
                    {product.category}
                  </p>

                  {product.limitedEdition && (
                    <>
                      <span className="text-outline">·</span>
                      <span className="text-[9px] uppercase tracking-widest text-outline">
                        LIMITED EDITION
                      </span>
                    </>
                  )}
                </div>

                <h3
                  className={`font-display-lg text-primary font-normal leading-snug ${
                    isSmall ? "text-lg" : "text-2xl"
                  }`}
                >
                  {product.name}
                </h3>

                <p className="text-xs text-outline font-light mt-1.5 leading-relaxed max-w-lg">
                  {product.description}
                </p>

                {/* COLORS */}
                {product.colors?.length > 0 && (
                  <div className="flex items-center gap-2 mt-3">
                    {product.colors.map((color, colorIndex) => (
                      <span
                        key={`${product.id}-${colorIndex}`}
                        className={`
                          rounded-full border border-outline/30
                          transition-transform duration-200 ease-out
                          hover:scale-125
                          ${colorIndex === 0 ? "ring-1 ring-primary" : ""}
                          ${isSmall ? "w-3 h-3" : "w-3.5 h-3.5"}
                        `}
                        style={{ backgroundColor: color }}
                        title={color}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* RIGHT */}
              <div className="text-right shrink-0">
                <span
                  className={`font-title-lg text-primary font-medium ${isSmall ? "text-base" : "text-xl"}`}
                >
                  {product.usdPrice}
                </span>

                <p className="text-[10px] text-outline tracking-wider">{product.formattedPrice}</p>

                {!isSmall && (
                  <a
                    href={`/shop/${product.id}`}
                    className="group/link relative inline-block mt-2 text-[11px] uppercase tracking-[0.18em] text-primary"
                  >
                    VIEW PIECE →
                    <span className="absolute left-0 -bottom-0.5 h-px w-full bg-primary/40 origin-left scale-x-100 group-hover/link:bg-primary transition-colors"></span>
                  </a>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LdProductShowcase;