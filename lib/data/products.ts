export interface Product {
  id: string;
  name: string;
  slug: string;
  category: "menswear" | "womenswear" | "couture" | "accessories";
  collection: string;
  price: number;
  priceDisplay: string;
  images: string[];
  colors: string[];
  sizes: string[];
  description: string;
  fabric: string;
  details: string[];
  featured: boolean;
  provenance: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "vayu-01",
    name: "Architectural Banarasi Tissue Silk Saree",
    slug: "banarasi-tissue-silk-saree",
    category: "womenswear",
    collection: "Ceremonial Archive",
    price: 185000,
    priceDisplay: "₹1,85,000",
    images: [
      "https://lh3.googleusercontent.com/aida/AEtjO1URwl2lGnhcewfmE7nfYw3fV3URDYmpzflLnYpuB1XUifU5YYA2a2XzuSwKYYyWOpMBCVt5V9HdERoA_P-rKgVYET6OM2jl1qRiexK4lpjjAAK7SHd67FlLjdJXms66lhCTZTUza7kMSeiS2NO6xQBm1qLbrrAF-Z82lk5y0RDQHOXmzdC96vyvYLXY31K_YC4IDidhaP2Yapm-HD2svTmSg1h6pT3dyOpBTlA8bP9mxvGkZ2IN7hbh-Sc",
      "https://lh3.googleusercontent.com/aida/AEtjO1U1Tku_IGPZ6VczP9uJp2XLaRYBVF5ifwStRRub4eiIFwz91c3bK9YT2Sc1zQuXjgPM3mN4xVHkL_6X7-xNTzbJTJvRHCqhjeMumrwovjvZcp73Id4lFN5vAfbow3ZJYhIkmyAU-87jCPB7zrBaoxdZ1UQrUfzxJrHR62x2hTUCrSOeP8Ig7JPQX0awtK6bjQjGrsae0X_bnEFgKS5S7O6VnK6dsOX0WefBpbaXhhCCUkwynx13AwGlsQ"
    ],
    colors: ["Ivory & Gold", "Champagne"],
    sizes: ["Bespoke Made-to-Measure", "Free Size Drape"],
    description: "Handwoven Banarasi tissue silk drape with an architectural structured modern corset blouse. Woven by hereditary master craftsmen over 180 hours on heirloom pit-looms in Varanasi.",
    fabric: "Pure Mulberry Tissue Silk with Real Gold Zari",
    details: [
      "Hand-beaten metallic zari border",
      "Unlined structured architectural corset bodice",
      "Zero synthetic blend guarantee",
      "Accompanied by silk storage preservation sleeve"
    ],
    featured: true,
    provenance: "Varanasi Atelier, Handloom Guild No. 14"
  },
  {
    id: "vayu-02",
    name: "Midnight Maroon Angrakha Kurta Jacket",
    slug: "midnight-maroon-angrakha",
    category: "menswear",
    collection: "Ceremonial Archive",
    price: 145000,
    priceDisplay: "₹1,45,000",
    images: [
      "https://lh3.googleusercontent.com/aida/AEtjO1XUKG7bzenGz97NavsoE2brIZBw_8uDczXUJjWyLRraVOyjP6x-bdEx6Sg_tw5ahTnwyR38nE4vrGWLv8I5Mt9swN7_XYdzDxMfuxdrKW5qEcBCXewZYemjjhDfWzO9tSGrO1BEonqOVPpN_VR3cFwA1L5H9DHntmMFtSFJg9mHI0iF6UO_i6zSPoxBWUsyCSGN9c-P-WeSPlt6WcZQEY9Lz4T3eIolY1HgHmCxV6GTjwkpED7ZH5s_c-M",
      "https://lh3.googleusercontent.com/aida/AEtjO1XM6500UV3wVszWkob5DUJrNblRYFNcQsAXh8TlgNSCau5EGMaegKQPRsOtX9kVW8Rfi4KWk0LStCnEF8_LfGMB_4v_PJvJUTrtn87mc94rXuDVtsHz7D_m1gX6qFJKZx2E5WCUDUwtAdokJG3mRGJVlesvV1dZnIT46auTFPWLBeEa1t_shKiWol0IFuP6YXnqFYb_3etDjGAfIEIPh84ICJ-3m9C33xSax56ANbhRO_LuuLB8oD9WH9A"
    ],
    colors: ["Midnight Maroon", "Deep Vermilion"],
    sizes: ["38R", "40R", "42R", "44R", "Bespoke"],
    description: "Contemporary layered Angrakha tailored in hand-loomed raw mulberry silk. Features asymmetric wrap fastening, tone-on-tone micro pintucks, and hand-cast solid antique brass hardware.",
    fabric: "100% Hand-Spun Raw Mulberry Silk",
    details: [
      "Sand-cast raw antique brass closure buttons",
      "Asymmetric tailored overlap structure",
      "Pure organic cotton muslin lining",
      "Concealed interior breast pocket with archival monogram"
    ],
    featured: true,
    provenance: "Chanderi Handloom Guild & Jaipur Atelier"
  },
  {
    id: "vayu-03",
    name: "Ivory Silk Asymmetric Bandhgala",
    slug: "ivory-silk-asymmetric-bandhgala",
    category: "menswear",
    collection: "The Minimalist Plinth",
    price: 165000,
    priceDisplay: "₹1,65,000",
    images: [
      "https://lh3.googleusercontent.com/aida/AEtjO1XbYMwPup5s-34rTBxue1Vzqb4At70mGKbu8HdKuBEHtW-AFlH8LTmVmEqSd2ZnmlA2tEGanEFqGEHscsZusMq-or7PN8DKlpsjJXwFRXCRNjaVttANZqLlVGCyJdNXNduGNcXBky_NX2IjMu-ugfr116uJqPAkeZM8VBE9JDdg6afkXI8zo2FojIAEBLD0FG_WCNb8xu8Vx4lBx__F0xQMW8jGSZ8wuJjg2In_IZ0_2VslecyyhX7NRqM",
      "https://lh3.googleusercontent.com/aida/AEtjO1XM6500UV3wVszWkob5DUJrNblRYFNcQsAXh8TlgNSCau5EGMaegKQPRsOtX9kVW8Rfi4KWk0LStCnEF8_LfGMB_4v_PJvJUTrtn87mc94rXuDVtsHz7D_m1gX6qFJKZx2E5WCUDUwtAdokJG3mRGJVlesvV1dZnIT46auTFPWLBeEa1t_shKiWol0IFuP6YXnqFYb_3etDjGAfIEIPh84ICJ-3m9C33xSax56ANbhRO_LuuLB8oD9WH9A"
    ],
    colors: ["Warm Unbleached Ivory", "Sandstone"],
    sizes: ["38R", "40R", "42R", "44R", "Bespoke Fitting"],
    description: "Sculptural bandhgala jacket crafted from heavy GSM raw silk with off-center closure line. A masterclass in reductive Indian menswear, stripping away ornamental excess to celebrate silhouette and textile weight.",
    fabric: "Heavyweight 450 GSM Organic Handloom Raw Silk",
    details: [
      "Architectural stand collar with micro canvas padding",
      "Full floating horsehair canvas chest piece",
      "Hand-finished buttonholes in silk thread",
      "Natural horn and sand-cast brass dual buttons"
    ],
    featured: true,
    provenance: "Bespoke Salon, New Delhi Atelier"
  },
  {
    id: "vayu-04",
    name: "Crimson Sculpted Raw Silk Lehenga",
    slug: "crimson-sculpted-lehenga",
    category: "womenswear",
    collection: "Ceremonial Archive",
    price: 240000,
    priceDisplay: "₹2,40,000",
    images: [
      "https://lh3.googleusercontent.com/aida/AEtjO1UoZH7j47Q1-FCz6PVbZK-LK0Fd6bec5W52FjnoJGeuAEw5oOoWKggk54RYNhrUd3CRP8rU9jZOhkXBgnX84TzHVr98aYL9Phk1-0qzRjCpH5i5XbBlenCAqmrdwwE9l61TWk7sqqReW_3Rw6C4adUDB74N1mg6XuVQDHN9EjtNDPufeuafZd8MVJnKFDUs_ka5_606RLrNxy-JCX38usm9zBruWkNsl1yXOpdCPB9wn7iKcMLw2dvjDzI",
      "https://lh3.googleusercontent.com/aida/AEtjO1U_Js3x8dS6xOFhspXDABfQJn_XbP4FNn4OE2vb2h5kOA3Lmbxoti0AFd32Eawyp5CVnhCnSbi92CYXni7E7CAfK_oTNlcK10b6HnmvUd5ns5Aa7ZCk42mjsKtvvVw0KLWw4DSmSKzFfS4C5Bmaq92E07MRKpvQoqI-XTfViptE2rhdvwujr76HZXVEiPupF3OkkKYzvtzKHI8u4NqSNWAmGdX5wqH4JorhrF20ynCoVS55E5ANL3k4qIA"
    ],
    colors: ["Deep Madder Crimson", "Burnt Saffron"],
    sizes: ["Bespoke Tailored to Measurement"],
    description: "Couture lehenga skirt engineered with structured pleating volumes in vegetable-dyed madder silk. Features restrained bullion zardozi metallic gold work along the hem plinth and an asymmetric architectural dupatta drape.",
    fabric: "Pure Chanderi Silk & Deep Maroon Velvet Accent",
    details: [
      "Traditional dabka and zardozi needlework",
      "Custom woven silk waistband with reinforced canvas",
      "Zero plastic can-can: natural stiffened jute inner tier",
      "Hand-numbered couture provenance certificate"
    ],
    featured: true,
    provenance: "Varanasi Loomworks & Delhi Master Tailors"
  },
  {
    id: "vayu-05",
    name: "Sandstone Raw Silk Structured Sherwani",
    slug: "sandstone-raw-silk-sherwani",
    category: "menswear",
    collection: "The Minimalist Plinth",
    price: 195000,
    priceDisplay: "₹1,95,000",
    images: [
      "https://lh3.googleusercontent.com/aida/AEtjO1WFlj19YVt3RJ9XlfJ8nDap2Dase-HJj-QqIrFscxlCg_kLLt68kf0TL1TInxmzMdLYZaqz3lYT_bNLZQfzeOB6i8XtLFQ1dvYxV4lDTSgqiB9r3vgjB6ROujEhoqtpZvfMnmvRJrGLhrZA6Rxtgfz5obH8bVlurMZDUD-REhSqVJOrwnlW8tQKDoZIT8V-hcElQGeFLRfpZr8dpnJ6saSWx-GAZfuUwtQOSC2mJAq2D3l41rZhhYXHQs8",
      "https://lh3.googleusercontent.com/aida/AEtjO1XM6500UV3wVszWkob5DUJrNblRYFNcQsAXh8TlgNSCau5EGMaegKQPRsOtX9kVW8Rfi4KWk0LStCnEF8_LfGMB_4v_PJvJUTrtn87mc94rXuDVtsHz7D_m1gX6qFJKZx2E5WCUDUwtAdokJG3mRGJVlesvV1dZnIT46auTFPWLBeEa1t_shKiWol0IFuP6YXnqFYb_3etDjGAfIEIPh84ICJ-3m9C33xSax56ANbhRO_LuuLB8oD9WH9A"
    ],
    colors: ["Muted Sandstone", "Antique Ochre"],
    sizes: ["38R", "40R", "42R", "44R", "Bespoke"],
    description: "Monolithic sherwani silhouette in natural sandstone raw silk, devoid of surface clutter. Accented with hairline brass thread borders and geometric pocket slits inspired by Stepwell architecture.",
    fabric: "High-Twist Handspun Raw Matka Silk",
    details: [
      "Concealed button stand with bespoke antique brass hook closures",
      "Double vents drafted for ceremonial ease",
      "Fine mulmul cupro lining",
      "Each piece cut individually by one master cutter"
    ],
    featured: true,
    provenance: "Rajasthan Guild & Atelier Vayu Studio"
  },
  {
    id: "vayu-06",
    name: "Midnight Bespoke Evening Bandhgala",
    slug: "midnight-bespoke-evening-bandhgala",
    category: "menswear",
    collection: "Ceremonial Archive",
    price: 175000,
    priceDisplay: "₹1,75,000",
    images: [
      "https://lh3.googleusercontent.com/aida/AEtjO1UU0B2eh6LORc6GNdgly4PWiqL4UTeiPCyy61vnby1uBsTXjkx9F4mTvrHSgRDlvgENS7JNjMR4AXM1sYWScdIe6lKWqscWsEpelNqsBwmFtyZ94GIxjPDd_fmQQOZnqnVW_jPCvfl0YiwGEawNhtPRD1ypQTE3Wp_2-wze7qDYEXMo_4Dm4LTDhMBSBUP1IdOFMBSC1Ia9K8o89GBhLIi-yyTwBsU1Skz-y09AhVW9f6ECZ3C-C_sHj9w",
      "https://lh3.googleusercontent.com/aida/AEtjO1U1Tku_IGPZ6VczP9uJp2XLaRYBVF5ifwStRRub4eiIFwz91c3bK9YT2Sc1zQuXjgPM3mN4xVHkL_6X7-xNTzbJTJvRHCqhjeMumrwovjvZcp73Id4lFN5vAfbow3ZJYhIkmyAU-87jCPB7zrBaoxdZ1UQrUfzxJrHR62x2hTUCrSOeP8Ig7JPQX0awtK6bjQjGrsae0X_bnEFgKS5S7O6VnK6dsOX0WefBpbaXhhCCUkwynx13AwGlsQ"
    ],
    colors: ["Midnight Dark Maroon", "Obsidian"],
    sizes: ["38R", "40R", "42R", "44R"],
    description: "Designed for nocturnal salon gatherings and candlelit ceremonial occasions. Cut in deep maroon virgin silk-wool blend with hand-stitched pick seams and antiqued hardware.",
    fabric: "70% Raw Silk, 30% Fine Merino Wool",
    details: [
      "Unstructured natural shoulder line",
      "Sand-cast raw antique brass buttons",
      "Internal silk passport & note pocket",
      "Full heirloom construction intended to last generations"
    ],
    featured: false,
    provenance: "New Delhi Tailoring Room"
  }
];

export const EDITORIAL_CAMPAIGNS = {
  hero: {
    title: "HERITAGE, REIMAGINED.",
    subtitle: "AUTUMN / WINTER CEREMONIAL ARCHIVE 2026",
    tagline: "Ancestral handloom craft distilled through uncompromising modern architectural restraint.",
    image: "https://lh3.googleusercontent.com/aida/AEtjO1UUjvOQM_QRfrcFjpyJvvvjVwR2W2j46lYbBPG98W02nhz8MzM_JUy3aGPvBrkbei2NlN-A1dHhlZqPK582TZagvLA49FVsX0sO2Hp3sfnXSvdghWkvrCV7NrGQR3C8lzDnMSQ9U59IL7-XAc1C8CO6bVOTZGW0QDzVbJ5YMnkQunYNm-fDA56PJcEmeP_oHBN3YDH0qDyMgaA1OEeOf6ut2hyrR5ZyhtQd6UwHr2zhPPVKP-awgi95_ZQ",
    wideBanner: "https://lh3.googleusercontent.com/aida/AEtjO1Wytj9OufzEy7gsPE3bxitf9xQfPERN9mISykudDMJigegZ-rp9rGw461DtBNeuYr3tTorMtYIdjykc5Xp5iRs0xsHQCImgYbbNrvaHmCUAoNT1mcKK_Ntkw7vdM_-bT14wjH-NtLd1BZWxFOJm4MSR_slzwyZfvYM_m-Ru8ohLcUnmy1o6tP_qLP-O1grv7hEqV_2GQrHu23dc46AUvnwtLQV-6F43P8-QaVIvH1fJcIJpb4M9BCtlAw"
  },
  craft: {
    loomImage: "https://lh3.googleusercontent.com/aida/AEtjO1WTiYqVjvcjWHIg80aAa4Zz9EH_Qt83ZbVADnEALzKZRdCt6GXEGnWs5m1kqGVOyKRI_29MSb82bv2qVZ2z9IH4fMgwRKYGZpaS_RlyAaVjQwOeKm7M9J89PmVnOuV6izP6N00W5o3AzDeSdjTGlYuuI3OaOhnamsojkIb3WcurQNhstCNO1aBkpmXwZxsW9b4M3iL6SAUQOkdexOCo5FRw3hDDTWz1Pdz-6xCIlH7mga2Zvh48oC1Wkfo",
    artisanImage: "https://lh3.googleusercontent.com/aida/AEtjO1WsijzCUSZjgse-JkF-_rJidxo0KmO5QapIdLED3y1YbD9D9jtmUe8HgvPCuxCM26iyJtiCl19mivy4DVKMtUkaQxRLb2paIipGt3ruAe3XTJT8xashyg9xZk_0AU29W2Cv-dNKdFhFqYJf2i_UUnUZqPqxf-_8Z5l3rpJg8qafH4215AyFbKLvNG1wzQ-7GMM60_QTRpchoS6898TgOH3lckbhJr5jt3nm3yAdntbv6wFe8f1WNWSB_yM",
    hardwareImage: "https://lh3.googleusercontent.com/aida/AEtjO1XM6500UV3wVszWkob5DUJrNblRYFNcQsAXh8TlgNSCau5EGMaegKQPRsOtX9kVW8Rfi4KWk0LStCnEF8_LfGMB_4v_PJvJUTrtn87mc94rXuDVtsHz7D_m1gX6qFJKZx2E5WCUDUwtAdokJG3mRGJVlesvV1dZnIT46auTFPWLBeEa1t_shKiWol0IFuP6YXnqFYb_3etDjGAfIEIPh84ICJ-3m9C33xSax56ANbhRO_LuuLB8oD9WH9A",
    textileImage: "https://lh3.googleusercontent.com/aida/AEtjO1U1Tku_IGPZ6VczP9uJp2XLaRYBVF5ifwStRRub4eiIFwz91c3bK9YT2Sc1zQuXjgPM3mN4xVHkL_6X7-xNTzbJTJvRHCqhjeMumrwovjvZcp73Id4lFN5vAfbow3ZJYhIkmyAU-87jCPB7zrBaoxdZ1UQrUfzxJrHR62x2hTUCrSOeP8Ig7JPQX0awtK6bjQjGrsae0X_bnEFgKS5S7O6VnK6dsOX0WefBpbaXhhCCUkwynx13AwGlsQ"
  },
  lookbook: [
    {
      title: "I. The Sandstone Solitude",
      caption: "Muted Ochre & Ivory Drapes against Monolithic Architecture",
      image: "https://lh3.googleusercontent.com/aida/AEtjO1USORH77EVL2etvNKXjLVWTm-tY23yyopmSCP8pWUv0aGowC_ww0V0H9JzSxtTNE1mrAtIlufy5PMRqpqmminZd9D0x-DB5yDOiwDvjJyeoXQ5Qo5PlHzgGWuuuLMSI0lMWRkiPLFZhkSrJzRQ-IFf-xIIx4rybH5F-Bh9-kPPv_77bBGemHzFWKL8OBIZ6dC70__hFTqivijhTAcv9cXI5axEzTodc9dtcqgX8s8PkSZilXSGpIpQZuw"
    },
    {
      title: "II. Nocturnal Soirée",
      caption: "Bespoke Ceremonial Wear in Heritage Candlelit Salons",
      image: "https://lh3.googleusercontent.com/aida/AEtjO1W2pStWWFpqSKEXQc2l1Lu89G3cVBi9OD8hKTLtoOsiKhO0wFWpRJfI91e9qlxVDiTHU9achnsstT0Jllph6nIcsOOPavSkDFl-cadWInvF3u0yZstleem4zA_8HAhW-HIoZYROAQcmIAR5Kfg0-d8FtyGyLO7wHCRGxKVf2ybN7mJJP7uFMfFARWFA3MJf3jwJTK7pfCpHB7e_iwecroUsn01TWncnTSSN3ETICmDctVsEaEzONH49h-U"
    },
    {
      title: "III. The Sacred Court",
      caption: "Ritual Drapes in Muted Maroon and Antique Gold Weft",
      image: "https://lh3.googleusercontent.com/aida/AEtjO1VXB7-eBtkcqQlVcNlAd0lsnpOTA1iOpO95YieYUJ_XMO7ulmcJkWMylnzv_U1W5kkEBTf2WktuzvNfM2S574dYuUtfhD0gugU3eMSy9H253th7Ub_53WJ9wnLtt5jW8YGUj5MS_SSM7Q7L-0RgqQSF95SsJat5C33f2VcjRH4GQQVGjgfeaYmMupJZBp-HAqdrS9PB8VT0WBLBqVGMeUU13TwF3JMnx1Md5acC2sbrg0OIhhgndOQkd74"
    },
    {
      title: "IV. The Golden Hour Atelier",
      caption: "Brutalist Pavilion Pacing & Raw Silk Textures",
      image: "https://lh3.googleusercontent.com/aida/AEtjO1WrR8ifBbLTf6-rXjEt3DUdcI9MkQwv0mYvFTXWqHnmstmlrmgHtcEGJLeDxZZO-mTyDO3ZlS1RO4oBW0TnOl5INXhQsZvChON4ojjGGBNLkm3s6ely28Ua1dgMYtzcs82pOe3dFOb1mmCg00VdKGz21bPR7z3K2TbLoyg2g6yG5mUU9Wu0KX0VMCvtHJfjT3an6xmjJYuMdtv7LiOTD8Bz49UankF_FZHBw88hN8ZPfIBZld8rTSIpHUM"
    }
  ]
};
