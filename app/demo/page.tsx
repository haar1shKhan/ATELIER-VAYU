import React from 'react'

const page = () => {

       const products = [
        {
            id: "ivory-silk-asymmetric-bandhgala",
            name: "Ivory Silk Asymmetric Bandhgala",
            shortName: "Ivory Silk Bandhgala",
            category: "MENSWEAR OCCASION",
            description:
                "Hand-woven Varanasi Tussar silk with concealed placket & sand-cast brass buttons",
            price: 84000,
            formattedPrice: "₹84,000",
            usdPrice: "$2,450",
            image:
                "https://lh3.googleusercontent.com/aida/AEtjO1XbYMwPup5s-34rTBxue1Vzqb4At70mGKbu8HdKuBEHtW-AFlH8LTmVmEqSd2ZnmlA2tEGanEFqGEHscsZusMq-or7PN8DKlpsjJXwFRXCRNjaVttANZqLlVGCyJdNXNduGNcXBky_NX2IjMu-ugfr116uJqPAkeZM8VBE9JDdg6afkXI8zo2FojIAEBLD0FG_WCNb8xu8Vx4lBx__F0xQMW8jGSZ8wuJjg2In_IZ0_2VslecyyhX7NRqM",
            edition: "Edition // No. VII - 04",
            size: "40R",
            colorway: "Ivory Sand",
            badge: "SIGNATURE PIECE",
            colors: ["#EFECE6", "#4A1118", "#D4AF37", "#1A1A1A"],
        },

        {
            id: "sculpted-crimson-zardozi-lehenga",
            name: "The Sculpted Crimson Zardozi Lehenga",
            shortName: "Sculpted Crimson Zardozi Lehenga",
            category: "BRIDAL & COUTURE",
            description:
                "Architectural velvet corset bodice paired with cascading handloom gold dabka panels and fluid draped dupatta. Finished with sand-cast antique brass accents.",
            price: 145000,
            formattedPrice: "₹1,45,000",
            usdPrice: "$3,800",
            image:
                "https://lh3.googleusercontent.com/aida/AEtjO1UoZH7j47Q1-FCz6PVbZK-LK0Fd6bec5W52FjnoJGeuAEw5oOoWKggk54RYNhrUd3CRP8rU9jZOhkXBgnX84TzHVr98aYL9Phk1-0qzRjCpH5i5XbBlenCAqmrdwwE9l61TWk7sqqReW_3Rw6C4adUDB74N1mg6XuVQDHN9EjtNDPufeuafZd8MVJnKFDUs_ka5_606RLrNxy-JCX38usm9zBruWkNsl1yXOpdCPB9wn7iKcMLw2dvjDzI",
            edition: "Edition // No. VII - 01",
            size: "38R",
            colorway: "Crimson Vermilion",
            badge: "COUTURE ARCHIVE · VOGUE FEATURE",
            colors: ["#4A1118", "#2A1810", "#8C2330"],
            limitedEdition: true,
        },


        {
            id: "banarasi-tissue-corset-saree",
            name: "Banarasi Tissue Corset Saree",
            shortName: "Banarasi Tissue Silk Corset Saree",
            category: "WOMENSWEAR DRAPERY",
            description:
                "Handwoven metallic tissue silk in warm ecru and soft gold with structured boned corset bodice",
            price: 98000,
            formattedPrice: "₹98,000",
            usdPrice: "$2,650",
            image:
                "https://lh3.googleusercontent.com/aida/AEtjO1URwl2lGnhcewfmE7nfYw3fV3URDYmpzflLnYpuB1XUifU5YYA2a2XzuSwKYYyWOpMBCVt5V9HdERoA_P-rKgVYET6OM2jl1qRiexK4lpjjAAK7SHd67FlLjdJXms66lhCTZTUza7kMSeiS2NO6xQBm1qLbrrAF-Z82lk5y0RDQHOXmzdC96vyvYLXY31K_YC4IDidhaP2Yapm-HD2svTmSg1h6pT3dyOpBTlA8bP9mxvGkZ2IN7hbh-Sc",
            edition: "Edition // No. VII - 08",
            size: "Custom Drape",
            colorway: "Antique Zari",
            badge: "ATELIER COUTURE",
            colors: ["#EFECE6", "#D4AF37"],
        },

         {
            id: "sandstone-raw-silk-bandhgala",
            name: "Sandstone Raw Silk Structured Bandhgala",
            shortName: "Sandstone Raw Silk Bandhgala",
            category: "MENSWEAR BESPOKE",
            description: "Structured raw silk bandhgala in sandstone tones.",
            price: 76000,
            formattedPrice: "₹76,000",
            usdPrice: "$1,850",
            image:
                "https://lh3.googleusercontent.com/aida/AEtjO1XbYMwPup5s-34rTBxue1Vzqb4At70mGKbu8HdKuBEHtW-AFlH8LTmVmEqSd2ZnmlA2tEGanEFqGEHscsZusMq-or7PN8DKlpsjJXwFRXCRNjaVttANZqLlVGCyJdNXNduGNcXBky_NX2IjMu-ugfr116uJqPAkeZM8VBE9JDdg6afkXI8zo2FojIAEBLD0FG_WCNb8xu8Vx4lBx__F0xQMW8jGSZ8wuJjg2In_IZ0_2VslecyyhX7NRqM",   
             edition: "Edition // No. VII - 06",
            size: "42R",
            colorway: "Sandstone Gold",
            badge: "NEW ARRIVAL",
            colors: ["#D4C3A3", "#E5DACE", "#2A1810"],
        },

        {
            id: "layered-raw-silk-angrakha",
            name: "Layered Raw Silk Angrakha Kurta",
            shortName: "Layered Raw Silk Angrakha",
            category: "MENSWEAR CONTEMPORARY",
            description:
                "Muted deep maroon silk with asymmetrical overlap closure",
            price: 68000,
            formattedPrice: "₹68,000",
            usdPrice: "$1,650",
            image:
                "https://lh3.googleusercontent.com/aida/AEtjO1XUKG7bzenGz97NavsoE2brIZBw_8uDczXUJjWyLRraVOyjP6x-bdEx6Sg_tw5ahTnwyR38nE4vrGWLv8I5Mt9swN7_XYdzDxMfuxdrKW5qEcBCXewZYemjjhDfWzO9tSGrO1BEonqOVPpN_VR3cFwA1L5H9DHntmMFtSFJg9mHI0iF6UO_i6zSPoxBWUsyCSGN9c-P-WeSPlt6WcZQEY9Lz4T3eIolY1HgHmCxV6GTjwkpED7ZH5s_c-M",
            edition: "Edition // No. VII - 09",
            size: "40R",
            colorway: "Nocturne Black",
            badge: "RUNWAY CAPSULE",
            colors: ["#4A1118", "#1A1A1A"],
        },
    ];

const layoutPairs = [
    [6, 4],
    [5, 6],
    [5, 7],
    
    [4, 6],
    [7, 5],


];

const productGridLayout = products.map((product, index) => {
    const pairIndex = Math.floor(index / 2);

    const randomIndex =
        (pairIndex * pairIndex + pairIndex * 5 + 2) % layoutPairs.length;

        console.log("Random Index:", randomIndex, "Pair Index:", pairIndex, "Layout Pair:", layoutPairs[randomIndex]);
    const pair = layoutPairs[randomIndex];

    return {
        ...product,
        layout: `lg:col-span-${pair[index % 2]}`,
    };
});

 



    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start p-10 mx-auto">

            {productGridLayout.map((product, index) => {

                const isWide =
                    product.layout === "lg:col-span-7" ||
                    product.layout === "lg:col-span-8" ||
                    product.layout === "lg:col-span-9";

                const isSmall =
                    product.layout === "lg:col-span-3" ||
                    product.layout === "lg:col-span-4";

                return (
                    <div
                        key={product.id}
                        className={`${product.layout} group flex flex-col`}
                    >

                        {/* IMAGE */}
                        <div
                            className={`
                            relative overflow-hidden rounded-xl
                            bg-surface-container-high
                            border border-outline-variant/50
                            shadow-sm
                            ${isSmall
                                    ? "aspect-[3/4]"
                                    : isWide
                                        ? "aspect-[16/10]"
                                        : "aspect-[4/3]"
                                }
                        `}
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                className="
                                w-full
                                h-full
                                object-cover
                                object-center
                                group-hover:scale-105
                                transition-transform
                                duration-700
                                ease-out
                            "
                            />

                            {/* BADGE */}
                            {product.badge && (
                                <div
                                    className="
                                    absolute
                                    top-4
                                    left-4
                                    bg-surface/90
                                    backdrop-blur-sm
                                    px-3
                                    py-1.5
                                    rounded-full
                                    border
                                    border-outline-variant/40
                                    text-[9px]
                                    uppercase
                                    tracking-[0.2em]
                                    text-primary
                                    font-medium
                                "
                                >
                                    {product.badge}
                                </div>
                            )}

                            {/* QUICK ADD */}
                            <div
                                className="
                                absolute
                                inset-x-4
                                bottom-4
                                opacity-0
                                group-hover:opacity-100
                                transition-opacity
                                duration-300
                            "
                            >
                                <button
                                    className="
                                    w-full
                                    bg-surface
                                    text-primary
                                    py-3
                                    rounded-full
                                    text-[11px]
                                    uppercase
                                    tracking-[0.2em]
                                    font-medium
                                    shadow-lg
                                    hover:bg-primary-container
                                    hover:text-surface
                                    transition-all
                                    flex
                                    items-center
                                    justify-center
                                    gap-2
                                    cursor-pointer
                                "
                                  
                                >
                                    <span
                                        className="material-symbols-outlined text-sm"
                                        data-icon="add"
                                    >
                                        add
                                    </span>

                                    QUICK ADD TO BAG
                                </button>
                            </div>
                        </div>

                        {/* PRODUCT INFO */}
                        <div className="mt-5 flex items-start justify-between gap-5">

                            {/* LEFT */}
                            <div className="min-w-0">

                                <div className="flex items-center gap-2 mb-1">
                                    <p
                                        className="
                                        text-[10px]
                                        uppercase
                                        tracking-[0.2em]
                                        text-secondary
                                        font-medium
                                    "
                                    >
                                        {product.category}
                                    </p>

                                    {product.limitedEdition && (
                                        <>
                                            <span className="text-outline">
                                                ·
                                            </span>

                                            <span
                                                className="
                                                text-[9px]
                                                uppercase
                                                tracking-widest
                                                text-outline
                                            "
                                            >
                                                LIMITED EDITION
                                            </span>
                                        </>
                                    )}
                                </div>

                                <h3
                                    className={`
                                    font-display-lg
                                    text-primary
                                    font-normal
                                    leading-snug
                                    ${isSmall
                                            ? "text-lg"
                                            : "text-2xl"
                                        }
                                `}
                                >
                                    {product.name}
                                </h3>

                                <p
                                    className="
                                    text-xs
                                    text-outline
                                    font-light
                                    mt-1.5
                                    leading-relaxed
                                    max-w-lg
                                "
                                >
                                    {product.description}
                                </p>

                                {/* COLORS */}
                                {product.colors?.length > 0 && (
                                    <div className="flex items-center gap-2 mt-3">
                                        {product.colors.map((color, colorIndex) => (
                                            <span
                                                key={`${product.id}-${colorIndex}`}
                                                className={`
                                                rounded-full
                                                border
                                                border-outline/30
                                                ${colorIndex === 0
                                                        ? "ring-1 ring-primary"
                                                        : ""
                                                    }
                                                ${isSmall
                                                        ? "w-3 h-3"
                                                        : "w-3.5 h-3.5"
                                                    }
                                            `}
                                                style={{
                                                    backgroundColor: color,
                                                }}
                                                title={color}
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* RIGHT */}
                            <div className="text-right shrink-0">

                                <span
                                    className={`
                                    font-title-lg
                                    text-primary
                                    font-medium
                                    ${isSmall
                                            ? "text-base"
                                            : "text-xl"
                                        }
                                `}
                                >
                                    {product.usdPrice}
                                </span>

                                <p
                                    className="
                                    text-[10px]
                                    text-outline
                                    tracking-wider
                                "
                                >
                                    {product.formattedPrice}
                                </p>

                                {!isSmall && (
                                    <a
                                        href={`/products/${product.id}`}
                                        className="
                                        inline-block
                                        mt-2
                                        text-[11px]
                                        uppercase
                                        tracking-[0.18em]
                                        text-primary
                                        border-b
                                        border-primary/40
                                        hover:border-primary
                                    "
                                    >
                                        VIEW PIECE →
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default page