
{/*  TOP APP BAR / BRAND HEADER  */}

{/*  1. HERO SECTION (Nearly 100vh)  */}
<section className="relative min-h-[942px] flex items-end justify-start overflow-hidden bg-tertiary">
{/*  Hero Background Image  */}
<div className="absolute inset-0 z-0">
<img alt="Atelier Vayu Autumn Winter Campaign" className="w-full h-full object-cover object-center transform scale-105 filter contrast-105 transition-transform duration-1000 ease-out" data-alt="A striking digital installation art piece featuring glowing, generative geometric shapes suspended in a vast, minimalist gallery space. The room is illuminated by high-key, soft white lighting that creates a bright, modern light-mode aesthetic. The artwork relies on a sophisticated palette of deep blacks and pristine whites, punctuated by intense accents of vibrant red. The mood is serene yet technologically advanced." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCz_wuGBpl-9a0igeyTkwR0hHLyuMeutI2zV5dSfxlJgR_Jk9-jqp99xfo5BZ8-j_k2iadXL1Xl2lAokpqUiPKRsbinhW_LhbO360j-HLyXxglaj3LAuEEfG3JvkjuAbLXxNEpLq7EoCQWLZLbcNI6QxrreG41OA-g1-7FZLlYVOv_DO1aRC2cJDUhWLkAt77JG4qL9_Ax8p3-MuiHQRGdrccqG6GIj7ZCgKVk5JqwqG5ewZa1dtsO7" />
{/*  Dramatic editorial overlays  */}
<div className="absolute inset-0 bg-gradient-to-t from-tertiary/90 via-tertiary/40 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-r from-tertiary/60 via-transparent to-transparent"></div>
</div>
{/*  Floating Minimalist Typography  */}
<div className="relative z-10 max-w-[1440px] w-full mx-auto px-6 sm:px-10 lg:px-16 pb-16 lg:pb-24 pt-32">
<div className="max-w-3xl">
<span className="inline-block text-[11px] sm:text-xs uppercase tracking-[0.35em] text-secondary-fixed font-medium mb-4 bg-tertiary/40 backdrop-blur-sm px-3 py-1 border border-secondary-fixed/30 rounded-full">
          AUTUMN / WINTER 2025
        </span>
<h1 className="font-display-lg text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-surface-bright leading-[1.05] tracking-tight mb-6 font-normal">
          HERITAGE,<br />
<span className="italic font-light">REIMAGINED.</span>
</h1>
<p className="font-body-lg text-sm sm:text-base md:text-lg text-surface-container-highest/90 max-w-xl font-light tracking-wide leading-relaxed mb-10">
          Contemporary Indian occasion wear, crafted with centuries of tradition at its core. Structured bandhgalas, sculptural drapes, and intricate bullion threadwork.
        </p>
<div className="flex flex-wrap items-center gap-6">
<a className="group inline-flex items-center gap-3 bg-secondary-fixed text-on-secondary-fixed px-7 py-3.5 rounded-full text-xs uppercase tracking-[0.22em] font-medium hover:bg-secondary hover:text-surface transition-all duration-300 shadow-lg" href="#collection">
<span className="">EXPLORE THE COLLECTION</span>
<span className="material-symbols-outlined text-sm transition-transform duration-300 group-hover:translate-x-1" data-icon="arrow_forward">arrow_forward</span>
</a>
<a className="inline-flex items-center text-xs uppercase tracking-[0.22em] text-surface-bright/90 hover:text-surface border-b border-surface-bright/40 hover:border-surface pb-1 transition-all" href="#house">
            DISCOVER OUR STORY
          </a>
</div>
</div>
</div>
{/*  Subtle Scroll Indicator  */}
<div className="absolute bottom-8 right-8 lg:right-16 z-10 flex flex-col items-center gap-3">
<span className="text-[9px] uppercase tracking-[0.3em] text-surface-dim -rotate-90 origin-bottom mb-2">SCROLL</span>
<div className="w-[1px] h-12 bg-surface-dim/30 overflow-hidden">
<div className="w-full h-full bg-secondary-fixed animate-pulse"></div>
</div>
</div>
</section>
{/*  2. EDITORIAL INTRO ("01 / THE HOUSE")  */}
<section className="py-24 sm:py-32 bg-surface" id="house">
<div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
{/*  Editorial Whitespace Rhythm  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
<div className="lg:col-span-3">
<span className="font-label-lg text-secondary tracking-[0.25em] uppercase text-xs">
            01 / THE HOUSE
          </span>
<div className="mt-4 w-12 h-px bg-secondary/40"></div>
</div>
<div className="lg:col-span-9">
<h2 className="font-display-lg text-3xl sm:text-5xl lg:text-6xl text-primary leading-[1.15] mb-10 font-normal">
            INDIAN CRAFT,<br />
<span className="italic text-secondary">SEEN DIFFERENTLY.</span>
</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-on-surface-variant font-light text-base sm:text-lg leading-relaxed">
<p className="">
              Rooted in centuries of craftsmanship and shaped for the modern wardrobe, our collections bring together traditional silhouettes, refined textiles and contemporary architectural cuts.
            </p>
<p className="text-sm sm:text-base">
              Every garment reflects rigorous pattern-making, hand-spun silks from Varanasi, and heritage bullion zardozi rendered in tonal, minimalist discipline. We do not mimic the past; we converse with it.
            </p>
</div>
<div className="mt-12 pt-8 border-t border-outline-variant/50 flex flex-wrap items-center justify-between gap-6">
<div className="flex items-center gap-8">
<div>
<p className="font-display-lg text-2xl text-primary">340+</p>
<p className="text-[10px] uppercase tracking-widest text-outline">Master Artisans</p>
</div>
<div className="h-8 w-px bg-outline-variant"></div>
<div>
<p className="font-display-lg text-2xl text-primary">120 hrs</p>
<p className="text-[10px] uppercase tracking-widest text-outline">Average Hand Embroidery</p>
</div>
<div className="h-8 w-px bg-outline-variant"></div>
<div>
<p className="font-display-lg text-2xl text-primary">100%</p>
<p className="text-[10px] uppercase tracking-widest text-outline">Mulberry &amp; Tussar Silk</p>
</div>
</div>
<a className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary-container font-medium hover:text-primary transition-colors" href="#craft">
              READ MANIFESTO <span className="material-symbols-outlined text-sm" data-icon="east">east</span>
</a>
</div>
</div>
</div>
</div>
</section>
{/*  3. COLLECTION CAMPAIGN ("THE FESTIVE EDIT")  */}
<section className="py-12 bg-surface-container-low">
<div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
<div className="relative overflow-hidden rounded-xl border border-outline-variant/30 min-h-[520px] lg:min-h-[640px] flex items-end">
<img alt="The Festive Edit Campaign" className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.88]" data-alt="A striking digital installation art piece featuring glowing, generative geometric shapes suspended in a vast, minimalist gallery space. The room is illuminated by high-key, soft white lighting that creates a bright, modern light-mode aesthetic. The artwork relies on a sophisticated palette of deep blacks and pristine whites, punctuated by intense accents of vibrant red. The mood is serene yet technologically advanced." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAN8BOj9-KWvl7L1-W-vTuC8oted6cGMAB2i6cA4jqQNPM-9D8k31lZ0c0qp83hOoK7InXBoNDMk42QRwd7-1xZiyRjqpPkOAuQGr1ol4HQ1lDFnzc2DwqkfJTKpfkalx5-QLg6GkOz6tvhEkQahOpZATVCdtI5hML0nMt3bHo8fDtzNenZDQsRiV5Dha-mrWfSMYPfPc5BJZM6qgUb9eEuKddzjsrU0iCh2ctnZH-tizskpMj7ODP2" />
<div className="absolute inset-0 bg-gradient-to-t from-tertiary/90 via-tertiary/30 to-transparent"></div>
<div className="relative z-10 p-8 sm:p-12 lg:p-16 max-w-2xl">
<span className="inline-block text-[10px] uppercase tracking-[0.3em] text-secondary-fixed mb-3 font-medium">
            CURATED CAPSULE
          </span>
<h2 className="font-display-lg text-3xl sm:text-4xl lg:text-5xl text-surface-bright leading-tight mb-4">
            THE FESTIVE EDIT
          </h2>
<p className="text-surface-dim font-light text-sm sm:text-base leading-relaxed mb-8">
            Tradition, cut with a contemporary eye. Unveiling sculpted lehengas and understated sherwanis engineered for celebratory grandeur without excessive weight.
          </p>
<a className="inline-flex items-center gap-3 bg-primary-container hover:bg-primary text-surface-bright px-6 py-3.5 rounded-full text-xs uppercase tracking-[0.22em] font-medium transition-all shadow-md" href="#collection">
<span className="">EXPLORE EDIT</span>
<span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
</a>
</div>
</div>
</div>
</section>
{/*  4. FEATURED COLLECTION & ASYMMETRICAL PRODUCT SHOWCASE  */}
<section className="py-24 sm:py-32 bg-surface" id="collection">
<div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
{/*  Section Header  */}
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-outline-variant/60">
<div>
<span className="font-label-lg text-secondary tracking-[0.25em] uppercase text-xs">
            02 / COLLECTION
          </span>
<h2 className="font-display-lg text-3xl sm:text-4xl lg:text-5xl text-primary mt-2">
            THE NEW SEASON
          </h2>
</div>
<p className="text-xs uppercase tracking-[0.2em] text-outline mt-4 md:mt-0 font-medium">
          STRICTLY ASYMMETRICAL CURATION · AUTUMN / WINTER 2025
        </p>
</div>
{/*  Strictly Asymmetrical Layout  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">{/*  TIER 1: Asymmetric Pair (5 cols vs 7 cols)  */}
<div className="lg:col-span-5 group flex flex-col">
  <div className="relative overflow-hidden rounded-xl bg-surface-container-high aspect-[3/4] border border-outline-variant/50 shadow-sm">
    <img alt="Ivory Silk Asymmetric Bandhgala Sherwani" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" src="https://lh3.googleusercontent.com/aida/AEtjO1XbYMwPup5s-34rTBxue1Vzqb4At70mGKbu8HdKuBEHtW-AFlH8LTmVmEqSd2ZnmlA2tEGanEFqGEHscsZusMq-or7PN8DKlpsjJXwFRXCRNjaVttANZqLlVGCyJdNXNduGNcXBky_NX2IjMu-ugfr116uJqPAkeZM8VBE9JDdg6afkXI8zo2FojIAEBLD0FG_WCNb8xu8Vx4lBx__F0xQMW8jGSZ8wuJjg2In_IZ0_2VslecyyhX7NRqM" />
    <div className="absolute top-5 left-5 bg-surface/90 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-outline-variant/40">
      <span className="text-[10px] uppercase tracking-[0.2em] text-primary font-medium">SIGNATURE PIECE</span>
    </div>
    <div className="absolute inset-x-5 bottom-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <button className="w-full bg-surface text-primary py-3 rounded-full text-xs uppercase tracking-[0.2em] font-medium shadow-lg hover:bg-primary-container hover:text-surface transition-all flex items-center justify-center gap-2 cursor-pointer" onclick="addToBag('Ivory Silk Asymmetric Bandhgala', '$2,450', 'Menswear Occasion')">
        <span className="material-symbols-outlined text-sm" data-icon="add">add</span> QUICK ADD TO BAG
      </button>
    </div>
  </div>
  <div className="mt-5 flex items-start justify-between">
    <div>
      <p className="text-[11px] uppercase tracking-[0.2em] text-secondary font-medium mb-1">MENSWEAR OCCASION</p>
      <h3 className="font-display-lg text-2xl text-primary font-normal leading-snug">Ivory Silk Asymmetric Bandhgala</h3>
      <p className="text-xs text-outline font-light mt-1 max-w-sm">Hand-woven Varanasi Tussar silk with concealed placket &amp; sand-cast brass buttons</p>
      <div className="flex items-center gap-2 mt-3">
        <span className="w-3.5 h-3.5 rounded-full bg-[#EFECE6] border border-outline/30 ring-1 ring-primary" title="Ivory"></span>
        <span className="w-3.5 h-3.5 rounded-full bg-[#4A1118] border border-outline/30" title="Crimson"></span>
        <span className="w-3.5 h-3.5 rounded-full bg-[#D4AF37] border border-outline/30" title="Muted Gold"></span>
        <span className="w-3.5 h-3.5 rounded-full bg-[#1A1A1A] border border-outline/30" title="Obsidian"></span>
      </div>
    </div>
    <div className="text-right">
      <span className="font-title-lg text-xl text-primary font-medium">$2,450</span>
      <p className="text-[11px] text-outline tracking-wider">₹2,05,000</p>
      <a className="inline-block mt-2 text-[11px] uppercase tracking-[0.18em] text-primary border-b border-primary/40 hover:border-primary" href="#">VIEW PIECE →</a>
    </div>
  </div>
</div>

<div className="lg:col-span-7 flex flex-col gap-6">
  <div className="group relative overflow-hidden rounded-xl bg-surface-container-high aspect-[4/3] border border-outline-variant/50 shadow-sm">
    <img alt="The Sculpted Crimson Zardozi Lehenga" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" src="https://lh3.googleusercontent.com/aida/AEtjO1UoZH7j47Q1-FCz6PVbZK-LK0Fd6bec5W52FjnoJGeuAEw5oOoWKggk54RYNhrUd3CRP8rU9jZOhkXBgnX84TzHVr98aYL9Phk1-0qzRjCpH5i5XbBlenCAqmrdwwE9l61TWk7sqqReW_3Rw6C4adUDB74N1mg6XuVQDHN9EjtNDPufeuafZd8MVJnKFDUs_ka5_606RLrNxy-JCX38usm9zBruWkNsl1yXOpdCPB9wn7iKcMLw2dvjDzI" />
    <div className="absolute top-5 left-5 bg-primary-container text-surface-bright px-3.5 py-1.5 rounded-full text-[10px] uppercase tracking-[0.2em] font-medium">
      COUTURE ARCHIVE · VOGUE FEATURE
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-tertiary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 sm:p-8">
      <button className="bg-surface text-primary px-8 py-3 rounded-full text-xs uppercase tracking-[0.2em] font-medium shadow-xl hover:bg-primary-container hover:text-surface transition-all flex items-center gap-2 cursor-pointer" onclick="addToBag('Sculpted Crimson Zardozi Lehenga', '$3,800', 'Bridal &amp; Couture')">
        <span className="material-symbols-outlined text-sm" data-icon="add">add</span> QUICK ADD TO BAG
      </button>
    </div>
  </div>
  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 p-2">
    <div>
      <div className="flex items-center gap-2 mb-1">
        <span className="text-[11px] uppercase tracking-[0.2em] text-secondary font-medium">BRIDAL &amp; COUTURE</span>
        <span className="text-outline">·</span>
        <span className="text-[10px] uppercase tracking-widest text-outline">LIMITED EDITION</span>
      </div>
      <h3 className="font-display-lg text-2xl text-primary font-normal leading-snug">The Sculpted Crimson Zardozi Lehenga</h3>
      <p className="text-xs text-on-surface-variant font-light mt-1.5 leading-relaxed max-w-lg">
        Architectural velvet corset bodice paired with cascading handloom gold dabka panels and fluid draped dupatta. Finished with sand-cast antique brass accents.
      </p>
      <div className="flex items-center gap-2 mt-3">
        <span className="w-3.5 h-3.5 rounded-full bg-[#4A1118] ring-1 ring-primary" title="Deep Crimson"></span>
        <span className="w-3.5 h-3.5 rounded-full bg-[#2A1810]" title="Dark Amber"></span>
        <span className="w-3.5 h-3.5 rounded-full bg-[#8C2330]" title="Garnet"></span>
      </div>
    </div>
    <div className="sm:text-right">
      <span className="font-title-lg text-xl text-primary font-medium">$3,800</span>
      <p className="text-[11px] text-outline tracking-wider">₹3,15,000</p>
      <a className="inline-block mt-2 text-[11px] uppercase tracking-[0.18em] text-primary border-b border-primary/40 hover:border-primary" href="#">VIEW PIECE →</a>
    </div>
  </div>
</div>

{/*  TIER 2: Full-bleed Editorial Runway Spread (8 cols) & Off-set Sandstone Portrait Card (4 cols)  */}


<div className="lg:col-span-4 group flex flex-col justify-between">
  <div className="relative overflow-hidden rounded-xl bg-surface-container-high aspect-[3/4] border border-outline-variant/50 shadow-sm">
    <img alt="Sandstone Raw Silk Structured Bandhgala" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" src="https://lh3.googleusercontent.com/aida/AEtjO1UZOdau96yaAnLcFdgpNuuqT9G8XZsmHS0djP9OXPTXgk7hkC5XmNlGWrzlJ80fZ_jZsZXHVvjYT6V3x3l3SBM_-BdFrL4mzTucSSwNtc9b-YBGtIDZqvJBKbJ_bENb9-VWabmORIoQ2r9aF6URGrJ5P2gqGZv05SE6F9lW-uwdx0EJKDCWjF-nOPi-W706E5Gi_5FT6r4XcEDGH7KGHWn_9aDfxkLSw7swPfaUXkyKvqqjAWJj2Ti-ydE" />
    <div className="absolute top-4 left-4 bg-surface/90 backdrop-blur-sm px-3 py-1 rounded-full border border-outline-variant/40 text-[9px] uppercase tracking-[0.2em] text-primary font-medium">
      NEW ARRIVAL
    </div>
    <div className="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <button className="w-full bg-surface text-primary py-2.5 rounded-full text-[11px] uppercase tracking-[0.2em] font-medium shadow-md hover:bg-primary-container hover:text-surface transition-all flex items-center justify-center gap-1.5 cursor-pointer" onclick="addToBag('Sandstone Raw Silk Structured Bandhgala', '$1,850', 'Menswear Bespoke')">
        <span className="material-symbols-outlined text-sm" data-icon="add">add</span> QUICK ADD
      </button>
    </div>
  </div>
  <div className="mt-4 flex items-start justify-between">
    <div>
      <p className="text-[10px] uppercase tracking-[0.2em] text-secondary font-medium">MENSWEAR BESPOKE</p>
      <h4 className="font-display-lg text-lg text-primary font-normal">Sandstone Raw Silk Bandhgala</h4>
      <div className="flex items-center gap-1.5 mt-2">
        <span className="w-3 h-3 rounded-full bg-[#D4C3A3] ring-1 ring-primary" title="Sandstone"></span>
        <span className="w-3 h-3 rounded-full bg-[#E5DACE]" title="Ecru"></span>
        <span className="w-3 h-3 rounded-full bg-[#2A1810]" title="Muted Umber"></span>
      </div>
    </div>
    <div className="text-right">
      <span className="font-title-lg text-base text-primary font-medium">$1,850</span>
      <p className="text-[10px] text-outline">₹1,55,000</p>
    </div>
  </div>
</div>

{/*  TIER 3: Asymmetric Lower Tier — Banarasi Tissue Corset Saree (7 cols) & Layered Angrakha (5 cols)  */}
<div className="lg:col-span-7 group flex flex-col">
  <div className="relative overflow-hidden rounded-xl bg-surface-container-high aspect-[16/10] border border-outline-variant/50 shadow-sm">
    <img alt="Banarasi Tissue Silk Drape Saree &amp; Corset Blouse" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" src="https://lh3.googleusercontent.com/aida/AEtjO1URwl2lGnhcewfmE7nfYw3fV3URDYmpzflLnYpuB1XUifU5YYA2a2XzuSwKYYyWOpMBCVt5V9HdERoA_P-rKgVYET6OM2jl1qRiexK4lpjjAAK7SHd67FlLjdJXms66lhCTZTUza7kMSeiS2NO6xQBm1qLbrrAF-Z82lk5y0RDQHOXmzdC96vyvYLXY31K_YC4IDidhaP2Yapm-HD2svTmSg1h6pT3dyOpBTlA8bP9mxvGkZ2IN7hbh-Sc" />
    <div className="absolute top-4 left-4 bg-surface/90 backdrop-blur-sm px-3.5 py-1 rounded-full border border-outline-variant/40 text-[10px] uppercase tracking-[0.2em] text-primary font-medium">
      ATELIER COUTURE
    </div>
    <div className="absolute inset-x-6 bottom-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <button className="w-full bg-surface text-primary py-3 rounded-full text-xs uppercase tracking-[0.2em] font-medium shadow-lg hover:bg-primary-container hover:text-surface transition-all flex items-center justify-center gap-2 cursor-pointer" onclick="addToBag('Banarasi Tissue Corset Saree', '$2,650', 'Womenswear Occasion')">
        <span className="material-symbols-outlined text-sm" data-icon="add">add</span> QUICK ADD TO BAG
      </button>
    </div>
  </div>
  <div className="mt-4 flex items-start justify-between">
    <div>
      <p className="text-[11px] uppercase tracking-[0.2em] text-secondary font-medium mb-1">WOMENSWEAR DRAPERY</p>
      <h3 className="font-display-lg text-2xl text-primary font-normal leading-snug">Banarasi Tissue Silk Corset Saree</h3>
      <p className="text-xs text-outline font-light mt-1 max-w-md">Handwoven metallic tissue silk in warm ecru and soft gold with structured boned corset bodice</p>
      <div className="flex items-center gap-2 mt-3">
        <span className="w-3.5 h-3.5 rounded-full bg-[#EFECE6] border border-outline/30 ring-1 ring-primary" title="Ivory"></span>
        <span className="w-3.5 h-3.5 rounded-full bg-[#D4AF37] border border-outline/30" title="Muted Gold"></span>
      </div>
    </div>
    <div className="text-right">
      <span className="font-title-lg text-xl text-primary font-medium">$2,650</span>
      <p className="text-[11px] text-outline tracking-wider">₹2,20,000</p>
      <a className="inline-block mt-2 text-[11px] uppercase tracking-[0.18em] text-primary border-b border-primary/40 hover:border-primary" href="#">VIEW PIECE →</a>
    </div>
  </div>
</div>

<div className="lg:col-span-5 group flex flex-col">
  <div className="relative overflow-hidden rounded-xl bg-surface-container-high aspect-[3/4] border border-outline-variant/50 shadow-sm">
    <img alt="Layered Asymmetric Raw Silk Angrakha Kurta" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" src="https://lh3.googleusercontent.com/aida/AEtjO1XUKG7bzenGz97NavsoE2brIZBw_8uDczXUJjWyLRraVOyjP6x-bdEx6Sg_tw5ahTnwyR38nE4vrGWLv8I5Mt9swN7_XYdzDxMfuxdrKW5qEcBCXewZYemjjhDfWzO9tSGrO1BEonqOVPpN_VR3cFwA1L5H9DHntmMFtSFJg9mHI0iF6UO_i6zSPoxBWUsyCSGN9c-P-WeSPlt6WcZQEY9Lz4T3eIolY1HgHmCxV6GTjwkpED7ZH5s_c-M" />
    <div className="absolute top-4 left-4 bg-tertiary/70 backdrop-blur-sm text-surface-bright px-3 py-1 rounded-full text-[9px] uppercase tracking-[0.2em]">
      RUNWAY CAPSULE
    </div>
    <div className="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <button className="w-full bg-surface text-primary py-2.5 rounded-full text-[11px] uppercase tracking-[0.2em] font-medium shadow-md hover:bg-primary-container hover:text-surface transition-all flex items-center justify-center gap-1.5 cursor-pointer" onclick="addToBag('Layered Raw Silk Angrakha', '$1,650', 'Menswear Occasion')">
        <span className="material-symbols-outlined text-sm" data-icon="add">add</span> QUICK ADD
      </button>
    </div>
  </div>
  <div className="mt-4 flex items-start justify-between">
    <div>
      <p className="text-[10px] uppercase tracking-[0.2em] text-secondary font-medium">MENSWEAR CONTEMPORARY</p>
      <h4 className="font-display-lg text-lg text-primary font-normal">Layered Raw Silk Angrakha Kurta</h4>
      <p className="text-xs text-outline font-light mt-1">Muted deep maroon silk with asymmetrical overlap closure</p>
      <div className="flex items-center gap-1.5 mt-2">
        <span className="w-3 h-3 rounded-full bg-[#4A1118] ring-1 ring-primary" title="Maroon"></span>
        <span className="w-3 h-3 rounded-full bg-[#1A1A1A]" title="Obsidian"></span>
      </div>
    </div>
    <div className="text-right">
      <span className="font-title-lg text-base text-primary font-medium">$1,650</span>
      <p className="text-[10px] text-outline">₹1,38,000</p>
    </div>
  </div>
</div></div>
</div>
</section>
{/*  5. MEN / WOMEN SPLIT EDITORIAL  */}
<section className="py-12 bg-surface-container-low border-y border-outline-variant/30">
<div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
{/*  Men Split Card  */}
<div className="group relative overflow-hidden rounded-xl bg-tertiary aspect-[3/4] flex flex-col justify-end p-8 sm:p-12" id="menswear">
<img alt="Men - Structured Tailoring &amp; Heritage Bandhgalas" className="absolute inset-0 w-full h-full object-cover object-center filter brightness-90 group-hover:scale-105 transition-transform duration-1000 ease-out" data-alt="A striking digital installation art piece featuring glowing, generative geometric shapes suspended in a vast, minimalist gallery space. The room is illuminated by high-key, soft white lighting that creates a bright, modern light-mode aesthetic. The artwork relies on a sophisticated palette of deep blacks and pristine whites, punctuated by intense accents of vibrant red. The mood is serene yet technologically advanced." src="https://lh3.googleusercontent.com/aida/AEtjO1XbYMwPup5s-34rTBxue1Vzqb4At70mGKbu8HdKuBEHtW-AFlH8LTmVmEqSd2ZnmlA2tEGanEFqGEHscsZusMq-or7PN8DKlpsjJXwFRXCRNjaVttANZqLlVGCyJdNXNduGNcXBky_NX2IjMu-ugfr116uJqPAkeZM8VBE9JDdg6afkXI8zo2FojIAEBLD0FG_WCNb8xu8Vx4lBx__F0xQMW8jGSZ8wuJjg2In_IZ0_2VslecyyhX7NRqM" />
<div className="absolute inset-0 bg-gradient-to-t from-tertiary/90 via-tertiary/30 to-transparent"></div>
<div className="relative z-10">
<span className="text-[10px] uppercase tracking-[0.3em] text-secondary-fixed font-medium">DISCIPLINE &amp; SHAPE</span>
<h3 className="font-display-lg text-3xl sm:text-4xl text-surface-bright mt-1 mb-2 font-normal">
              MEN
            </h3>
<p className="text-surface-dim font-light text-sm max-w-sm mb-6">
              Structured Tailoring &amp; Heritage Bandhgalas cut from hand-twisted mulberry silks and fine merino blends.
            </p>
<a className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-surface-bright font-medium group-hover:translate-x-1 transition-transform" href="#collection">
<span className="">SHOP MEN</span>
<span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
</a>
</div>
</div>
{/*  Women Split Card  */}
<div className="group relative overflow-hidden rounded-xl bg-tertiary aspect-[3/4] flex flex-col justify-end p-8 sm:p-12" id="womenswear">
<img alt="Women - Sculptural Silhouettes &amp; Hand-Draped Couture" className="absolute inset-0 w-full h-full object-cover object-center filter brightness-90 group-hover:scale-105 transition-transform duration-1000 ease-out" data-alt="A striking digital installation art piece featuring glowing, generative geometric shapes suspended in a vast, minimalist gallery space. The room is illuminated by high-key, soft white lighting that creates a bright, modern light-mode aesthetic. The artwork relies on a sophisticated palette of deep blacks and pristine whites, punctuated by intense accents of vibrant red. The mood is serene yet technologically advanced." src="https://lh3.googleusercontent.com/aida/AEtjO1UoZH7j47Q1-FCz6PVbZK-LK0Fd6bec5W52FjnoJGeuAEw5oOoWKggk54RYNhrUd3CRP8rU9jZOhkXBgnX84TzHVr98aYL9Phk1-0qzRjCpH5i5XbBlenCAqmrdwwE9l61TWk7sqqReW_3Rw6C4adUDB74N1mg6XuVQDHN9EjtNDPufeuafZd8MVJnKFDUs_ka5_606RLrNxy-JCX38usm9zBruWkNsl1yXOpdCPB9wn7iKcMLw2dvjDzI" />
<div className="absolute inset-0 bg-gradient-to-t from-tertiary/90 via-tertiary/30 to-transparent"></div>
<div className="relative z-10">
<span className="text-[10px] uppercase tracking-[0.3em] text-secondary-fixed font-medium">FLUIDITY &amp; GRACE</span>
<h3 className="font-display-lg text-3xl sm:text-4xl text-surface-bright mt-1 mb-2 font-normal">
              WOMEN
            </h3>
<p className="text-surface-dim font-light text-sm max-w-sm mb-6">
              Sculptural Silhouettes &amp; Hand-Draped Couture rooted in traditional sari draping re-imagined with modern corset structures.
            </p>
<a className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-surface-bright font-medium group-hover:translate-x-1 transition-transform" href="#collection">
<span className="">SHOP WOMEN</span>
<span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
</a>
</div>
</div>
</div>
</div>
</section>
{/*  6. THE CRAFT ("03 / CRAFT - MADE BY HAND. MADE TO LAST.")  */}
<section className="py-24 sm:py-32 bg-surface text-on-surface" id="craft">
<div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
<div className="max-w-3xl mb-16">
<span className="font-label-lg text-secondary tracking-[0.25em] uppercase text-xs">
          03 / CRAFT
        </span>
<h2 className="font-display-lg text-3xl sm:text-5xl text-primary mt-2 leading-tight">
          MADE BY HAND.<br />
<span className="italic text-secondary">MADE TO LAST.</span>
</h2>
<p className="mt-6 text-on-surface-variant font-light text-base sm:text-lg leading-relaxed">
          In our workshops across Lucknow, Jaipur, and Varanasi, generation-spanning knowledge meets contemporary minimal silhouettes. We reject disposable velocity in favor of timeless heirloom construction.
        </p>
</div>
{/*  Editorial Multi-Scale Layout with Storytelling  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
{/*  Craft 1  */}
<div className="flex flex-col">
<div className="relative overflow-hidden rounded-xl aspect-square bg-surface-container mb-6 border border-outline-variant/40">
<img alt="Zardozi and Bullion Hand Embroidery" className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700" data-alt="A striking digital installation art piece featuring glowing, generative geometric shapes suspended in a vast, minimalist gallery space. The room is illuminated by high-key, soft white lighting that creates a bright, modern light-mode aesthetic. The artwork relies on a sophisticated palette of deep blacks and pristine whites, punctuated by intense accents of vibrant red. The mood is serene yet technologically advanced." src="https://lh3.googleusercontent.com/aida-public/AB6AXuACRW4hhkhYaPrpMn0Cr__5IVa0kji-6EvsOYHDKsFtHsMIoDPbp0y86uNA6FXpRpRIeBDQwCSAgWDYiF9f2yMaF_x_vMMv8PaA7Qzy5UtT7AQtLyJTvMR8-kr-OrGD3cUz_Zso8lk8vqXKumRLFY3UJX5SO2UEWpOCOHhAljyXDhyFbi7xp86Fflism2DxyrVZM1urBW3UKFjIfy21WquH7m5BpRWaBLxUSKNIx8SWdmNDfXjG7Edh" />
</div>
<span className="text-[10px] uppercase tracking-[0.25em] text-secondary font-medium">PRECISION WORK</span>
<h4 className="font-display-lg text-xl text-primary mt-1 mb-2">Zardozi &amp; Bullion Threadwork</h4>
<p className="text-sm text-outline font-light leading-relaxed">
            Pure metallic wire drawn, coiled, and hand-stitched into dense floral arabesques and sharp geometric lineation over sheer organza and silks.
          </p>
</div>
{/*  Craft 2  */}
<div className="flex flex-col">
<div className="relative overflow-hidden rounded-xl aspect-square bg-surface-container mb-6 border border-outline-variant/40">
<img alt="Hand Loom Raw Mulberry Silk" className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700" data-alt="A striking digital installation art piece featuring glowing, generative geometric shapes suspended in a vast, minimalist gallery space. The room is illuminated by high-key, soft white lighting that creates a bright, modern light-mode aesthetic. The artwork relies on a sophisticated palette of deep blacks and pristine whites, punctuated by intense accents of vibrant red. The mood is serene yet technologically advanced." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlS-hP9cU0-qbawOqR46wT74RXsKNR3i-0bh1jEQqfsl3PAMu5811Wt1iyhRKxuZXZM7rGl3jvjIlvYXTSNzUHMRxXnYrORmcH7jcWLs4we9t-1rZqG6xnqoBcdtxpPbd5s0pOsSbvd0Dt-lc6BJAD3t30_uPgthkALZGNbJBYqZgJSPNhWZsRYh_qojqlxLna26bmQYEiwIKmB6uNluanhJQDCZBrQQbpt3J08OKDmgOD8JCXMoPU" />
</div>
<span className="text-[10px] uppercase tracking-[0.25em] text-secondary font-medium">TEXTILE PROVENANCE</span>
<h4 className="font-display-lg text-xl text-primary mt-1 mb-2">Raw Mulberry &amp; Chanderi Weaves</h4>
<p className="text-sm text-outline font-light leading-relaxed">
            Spun on traditional handlooms by master weavers. The slub and organic hand of raw silk lends tactile depth impossible with automated mills.
          </p>
</div>
{/*  Craft 3  */}
<div className="flex flex-col">
<div className="relative overflow-hidden rounded-xl aspect-square bg-surface-container mb-6 border border-outline-variant/40">
<img alt="Custom Antique Brass Hardware" className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700" data-alt="A striking digital installation art piece featuring glowing, generative geometric shapes suspended in a vast, minimalist gallery space. The room is illuminated by high-key, soft white lighting that creates a bright, modern light-mode aesthetic. The artwork relies on a sophisticated palette of deep blacks and pristine whites, punctuated by intense accents of vibrant red. The mood is serene yet technologically advanced." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDd37hkmskYaaby-Wc1wkHkTAq_4bVdbC7EX3Dcx_LCRjYsr5ItZzNqFzGx2ZkEbYvuR7PiZkf6cNF4G9Gz2OQCbx8cszH_1BfAG9gYlmMK8u5qJrZ42xDfBuMZ3Lfx3PFmPUvLzP-DKUEgaozvUWI492lfEL32Lr3zLN147c72GoNzkmlZWQpIcaNWNHtjEuD8a_B_hQS0en8erYERr3i7_n3WevKFIPJDoiYtl5mlawo2ey_RIS7x" />
</div>
<span className="text-[10px] uppercase tracking-[0.25em] text-secondary font-medium">BESPOKE ACCENTS</span>
<h4 className="font-display-lg text-xl text-primary mt-1 mb-2">Antique Cast Brass Accents</h4>
<p className="text-sm text-outline font-light leading-relaxed">
            Each button and clasp is sand-cast by metalsmiths in Moradabad, finished with an aged matte patina to harmonize with subdued jewel tones.
          </p>
</div>
</div>
</div>
</section>
{/*  7. SIGNATURE PIECES & CINEMATIC LOOKBOOK ("04 & 05")  */}
<section className="py-24 bg-tertiary text-surface-bright">
<div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-surface-dim/20">
<div>
<span className="font-label-lg text-secondary-fixed tracking-[0.25em] uppercase text-xs">
            04 / ARCHIVE &amp; 05 / LOOKBOOK
          </span>
<h2 className="font-display-lg text-3xl sm:text-4xl lg:text-5xl mt-2 font-normal">
            PIECES WORTH REMEMBERING
          </h2>
</div>
<p className="text-xs uppercase tracking-[0.2em] text-surface-dim mt-4 md:mt-0">
          EDITION 2025 · CAMPAIGN CAPTURES
        </p>
</div>
{/*  Horizontal Lookbook Grid  */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-stretch"><div className="group relative overflow-hidden rounded-xl bg-tertiary-container md:col-span-7 lg:col-span-7 aspect-[4/5] md:aspect-auto md:min-h-[640px] flex flex-col justify-end p-8 sm:p-12 border border-surface-dim/20 shadow-2xl"><img alt="Look 01 Atelier Vayu Ivory Bandhgala" className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out filter brightness-90" src="https://lh3.googleusercontent.com/aida/AEtjO1XbYMwPup5s-34rTBxue1Vzqb4At70mGKbu8HdKuBEHtW-AFlH8LTmVmEqSd2ZnmlA2tEGanEFqGEHscsZusMq-or7PN8DKlpsjJXwFRXCRNjaVttANZqLlVGCyJdNXNduGNcXBky_NX2IjMu-ugfr116uJqPAkeZM8VBE9JDdg6afkXI8zo2FojIAEBLD0FG_WCNb8xu8Vx4lBx__F0xQMW8jGSZ8wuJjg2In_IZ0_2VslecyyhX7NRqM" /><div className="absolute inset-0 bg-gradient-to-t from-tertiary/90 via-tertiary/30 to-transparent"></div><div className="absolute top-6 left-6 z-10"><span className="inline-block text-[10px] uppercase tracking-[0.25em] text-secondary-fixed bg-tertiary/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-secondary-fixed/30 font-medium">ARCHIVE LOOK 01 · BESPOKE</span></div><div className="relative z-10 max-w-lg"><span className="text-[11px] uppercase tracking-[0.3em] text-secondary-fixed font-medium">TAILORED ARCHITECTURE</span><h3 className="font-display-lg text-2xl sm:text-4xl text-surface-bright mt-1 mb-2 font-normal leading-tight">Ivory Angrakha Overcoat &amp; Asymmetric Bandhgala</h3><p className="text-surface-dim font-light text-sm sm:text-base leading-relaxed mb-6">Crafted from raw hand-spun Varanasi Tussar silk with concealed plackets, muted antique brass buttons, and sculptural drape pleating.</p><div className="flex items-center gap-4"><a className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-surface-bright hover:text-secondary-fixed transition-colors font-medium border-b border-surface-dim/30 pb-0.5" href="#collection">EXPLORE SILHOUETTE <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span></a></div></div></div><div className="md:col-span-5 lg:col-span-5 flex flex-col gap-6 lg:gap-8"><div className="group relative overflow-hidden rounded-xl bg-tertiary-container aspect-[4/5] flex flex-col justify-end p-6 sm:p-8 border border-surface-dim/20 shadow-xl"><img alt="Look 02 Atelier Vayu Sculptural Drape Sari" className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out filter brightness-90" src="https://lh3.googleusercontent.com/aida/AEtjO1UoZH7j47Q1-FCz6PVbZK-LK0Fd6bec5W52FjnoJGeuAEw5oOoWKggk54RYNhrUd3CRP8rU9jZOhkXBgnX84TzHVr98aYL9Phk1-0qzRjCpH5i5XbBlenCAqmrdwwE9l61TWk7sqqReW_3Rw6C4adUDB74N1mg6XuVQDHN9EjtNDPufeuafZd8MVJnKFDUs_ka5_606RLrNxy-JCX38usm9zBruWkNsl1yXOpdCPB9wn7iKcMLw2dvjDzI" /><div className="absolute inset-0 bg-gradient-to-t from-tertiary/90 via-tertiary/30 to-transparent"></div><div className="absolute top-5 left-5 z-10"><span className="text-[9px] uppercase tracking-[0.22em] text-surface-bright bg-primary/60 backdrop-blur-md px-3 py-1 rounded-full border border-surface-bright/20 font-medium">LOOK 02 · COUTURE</span></div><div className="relative z-10"><span className="text-[10px] uppercase tracking-[0.25em] text-secondary-fixed font-medium">DRAPED MAJESTY</span><h4 className="font-display-lg text-xl sm:text-2xl text-surface-bright mt-1 mb-1">Sculptural Drape Sari &amp; Corset</h4><p className="text-xs text-surface-dim font-light leading-relaxed">Rich crimson silk velvet with antique gold border lineation and structured corset bodice.</p></div></div><div className="group relative overflow-hidden rounded-xl bg-tertiary-container aspect-[16/10] sm:aspect-[4/3] md:aspect-auto md:flex-1 flex flex-col justify-end p-6 sm:p-8 border border-surface-dim/20 shadow-xl"><img alt="Look 04 Atelier Vayu Zardozi Bullion Embroidery" className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out filter brightness-90" src="https://lh3.googleusercontent.com/aida/AEtjO1XYeELWAm9kw2mKb_opbX3GxLV-uDD-KonEFGRNviSnQ8TCIoa-if0znVxXLpdiOs7_U9OBpOWH-7zxCLI-TcNEu-R78CIRXo2NO3mi61hILJYffWrLo8jSnA8JhJLp4QDWrZ5uejyYI4WSiigbnE6NP7EoBnUuhsrEBGU-7qo8tSofsAaULGkgaOifKPaaL9PhP0zCkc8-vflNgMO3JyaZ_S3QeUuWTFRPKesDTHdbbgtvff3tmNNBqeQ" /><div className="absolute inset-0 bg-gradient-to-t from-tertiary/90 via-tertiary/40 to-transparent"></div><div className="absolute top-5 left-5 z-10"><span className="text-[9px] uppercase tracking-[0.22em] text-secondary-fixed bg-tertiary/60 backdrop-blur-md px-3 py-1 rounded-full border border-secondary-fixed/30 font-medium">LOOK 04 · EMBROIDERY</span></div><div className="relative z-10"><span className="text-[10px] uppercase tracking-[0.25em] text-secondary-fixed font-medium">HAUTE METALLURGY</span><h4 className="font-display-lg text-xl text-surface-bright mt-1 mb-1">Bullion Zardozi &amp; Antique Dabka</h4><p className="text-xs text-surface-dim font-light">Hand-stitched bullion gold work on rich deep maroon velvet.</p></div></div></div><div className="md:col-span-12 group relative overflow-hidden rounded-xl bg-tertiary-container min-h-[360px] md:min-h-[420px] flex items-end p-8 sm:p-12 border border-surface-dim/20 shadow-2xl"><img alt="Look 03 Atelier Vayu Campaign Pair" className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out filter brightness-90" src="https://lh3.googleusercontent.com/aida/AEtjO1UUjvOQM_QRfrcFjpyJvvvjVwR2W2j46lYbBPG98W02nhz8MzM_JUy3aGPvBrkbei2NlN-A1dHhlZqPK582TZagvLA49FVsX0sO2Hp3sfnXSvdghWkvrCV7NrGQR3C8lzDnMSQ9U59IL7-XAc1C8CO6bVOTZGW0QDzVbJ5YMnkQunYNm-fDA56PJcEmeP_oHBN3YDH0qDyMgaA1OEeOf6ut2hyrR5ZyhtQd6UwHr2zhPPVKP-awgi95_ZQ" /><div className="absolute inset-0 bg-gradient-to-t from-tertiary/90 via-tertiary/30 to-transparent"></div><div className="absolute inset-0 bg-gradient-to-r from-tertiary/60 via-transparent to-transparent hidden md:block"></div><div className="absolute top-6 left-6 z-10"><span className="text-[10px] uppercase tracking-[0.25em] text-secondary-fixed bg-tertiary/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-secondary-fixed/30 font-medium">LOOK 03 · CAMPAIGN HERO</span></div><div className="relative z-10 max-w-xl"><span className="text-[10px] uppercase tracking-[0.3em] text-secondary-fixed font-medium">LIMITED OCCASION EDITION</span><h3 className="font-display-lg text-2xl sm:text-4xl text-surface-bright mt-1 mb-2 font-normal">Midnight Maroon Sherwani &amp; Raw Silk Lehenga</h3><p className="text-surface-dim font-light text-xs sm:text-sm leading-relaxed mb-4">Architectural raw silk lehenga with deep maroon drape alongside structured bespoke silk sherwani with subtle tonal hand-embroidery.</p><a className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-surface-bright hover:text-secondary-fixed transition-colors font-medium border-b border-surface-dim/30 pb-0.5" href="#collection">VIEW RUNWAY ARCHIVE <span className="material-symbols-outlined text-sm" data-icon="east">east</span></a></div></div></div>
</div>
</section><section className="relative py-24 sm:py-32 bg-surface-container overflow-hidden border-b border-outline-variant/30"><div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16"><div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-outline-variant/40"><div><span className="font-label-lg text-secondary tracking-[0.25em] uppercase text-xs">CAMPAIGN EDITION 04 / RAJASTHAN PAVILION</span><h2 className="font-display-lg text-2xl sm:text-4xl text-primary mt-2 font-normal">Architectural Drapes at Sunset</h2></div><p className="text-xs uppercase tracking-[0.2em] text-outline mt-3 md:mt-0 font-light">GOLDEN HOUR COUTURE ARCHIVE · THAR DESERT</p></div><div className="relative overflow-hidden rounded-2xl border border-outline-variant/40 min-h-[420px] sm:min-h-[560px] lg:min-h-[700px] flex items-end group shadow-2xl"><img alt="Cinematic wide-angle campaign in Rajasthan pavilion" className="absolute inset-0 w-full h-full object-cover object-center transform group-hover:scale-105 filter contrast-105 transition-transform duration-1000 ease-out" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHK7gtj537nrJRRQ237EwUcItRGxLUhcl7sxytwWq5xRZ1D2FIbI3i_X6Z_APWbjPrdojsQ14UBdYP1uxGBoLs3zMzM9BPVfpUVcxI7VFceqJeviITQTkKliGp7CXNPnyvnTt68Ass8vR4YWWoVprUuZc_quGQszMiBXPSICBhCWGbfXzQHlHskJpQJm_JanHQaZZ9YhCJXnJ8J00VhhEvdB2P5rw4wEW6RMkdDTrEdvZXfcnEdc3l" /><div className="absolute inset-0 bg-gradient-to-t from-tertiary/90 via-tertiary/30 to-transparent"></div><div className="relative z-10 p-8 sm:p-12 lg:p-16 max-w-2xl"><span className="inline-block text-[10px] uppercase tracking-[0.3em] text-secondary-fixed mb-3 font-medium bg-tertiary/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-secondary-fixed/30">EDITORIAL PANORAMA</span><h3 className="font-display-lg text-3xl sm:text-5xl text-surface-bright leading-tight mb-4 font-normal">The Sandstone Sanctuary</h3><p className="text-surface-dim font-light text-sm sm:text-base leading-relaxed mb-8">Where brutalist desert geometry converges with hand-spun gold zardozi tissue and bespoke structured tailoring. Captured against the ancient terracotta dunes.</p><div className="flex flex-wrap items-center gap-6"><a className="inline-flex items-center gap-3 bg-secondary-fixed text-on-secondary-fixed hover:bg-surface-bright px-7 py-3.5 rounded-full text-xs uppercase tracking-[0.22em] font-medium transition-all shadow-lg" href="#collection"><span className="">EXPLORE THE COUTURE SERIES</span><span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span></a><a className="inline-flex items-center text-xs uppercase tracking-[0.22em] text-surface-bright hover:text-secondary-fixed border-b border-surface-bright/40 pb-1 transition-all" href="#journal">READ CAMPAIGN DISPATCH</a></div></div></div></div></section>
{/*  8. OCCASION EDIT  */}
<section className="py-20 bg-surface-container-low border-b border-outline-variant/30 overflow-hidden">
<div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
<div className="text-center max-w-xl mx-auto mb-12">
<span className="text-[10px] uppercase tracking-[0.3em] text-secondary font-medium">CURATED DESTINATIONS</span>
<h3 className="font-display-lg text-2xl sm:text-3xl text-primary mt-1">THE OCCASION EDIT</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-start"><div className="md:col-span-7 group relative overflow-hidden rounded-xl bg-tertiary aspect-[4/5] min-h-[520px] flex flex-col justify-end p-8 sm:p-12 shadow-xl border border-outline-variant/40"><img alt="Weddings Occasion Edit" className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out filter brightness-90" src="https://lh3.googleusercontent.com/aida/AEtjO1W2pStWWFpqSKEXQc2l1Lu89G3cVBi9OD8hKTLtoOsiKhO0wFWpRJfI91e9qlxVDiTHU9achnsstT0Jllph6nIcsOOPavSkDFl-cadWInvF3u0yZstleem4zA_8HAhW-HIoZYROAQcmIAR5Kfg0-d8FtyGyLO7wHCRGxKVf2ybN7mJJP7uFMfFARWFA3MJf3jwJTK7pfCpHB7e_iwecroUsn01TWncnTSSN3ETICmDctVsEaEzONH49h-U" /><div className="absolute inset-0 bg-gradient-to-t from-tertiary/90 via-tertiary/40 to-transparent"></div><div className="relative z-10 max-w-md"><span className="text-[10px] uppercase tracking-[0.3em] text-secondary-fixed font-medium mb-1 block">CURATED CAPSULE 01</span><h4 className="font-display-lg text-3xl sm:text-4xl text-surface-bright tracking-wider uppercase mb-2">WEDDINGS</h4><p className="text-xs sm:text-sm text-surface-dim font-light tracking-wide leading-relaxed mb-4">CELEBRATION OF UNION · COUTURE FORMAL</p><a className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-surface-bright hover:text-secondary-fixed transition-colors border-b border-surface-dim/40 pb-0.5" href="#collection">DISCOVER ATELIER <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span></a></div></div><div className="md:col-span-5 flex flex-col gap-6 lg:gap-8"><div className="group relative overflow-hidden rounded-xl bg-tertiary aspect-[4/3] flex flex-col justify-end p-6 sm:p-8 shadow-md border border-outline-variant/40"><img alt="Soirées Occasion Edit" className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out filter brightness-90" src="https://lh3.googleusercontent.com/aida/AEtjO1UU0B2eh6LORc6GNdgly4PWiqL4UTeiPCyy61vnby1uBsTXjkx9F4mTvrHSgRDlvgENS7JNjMR4AXM1sYWScdIe6lKWqscWsEpelNqsBwmFtyZ94GIxjPDd_fmQQOZnqnVW_jPCvfl0YiwGEawNhtPRD1ypQTE3Wp_2-wze7qDYEXMo_4Dm4LTDhMBSBUP1IdOFMBSC1Ia9K8o89GBhLIi-yyTwBsU1Skz-y09AhVW9f6ECZ3C-C_sHj9w" /><div className="absolute inset-0 bg-gradient-to-t from-tertiary/90 via-tertiary/30 to-transparent"></div><div className="relative z-10"><span className="text-[9px] uppercase tracking-[0.25em] text-secondary-fixed font-medium block mb-1">CURATED CAPSULE 02</span><h4 className="font-display-lg text-2xl text-surface-bright tracking-wider uppercase">SOIRÉES</h4><p className="text-xs text-surface-dim font-light tracking-wide mt-1">CANDLELIT EVENING WEAR</p></div></div><div className="group relative overflow-hidden rounded-xl bg-tertiary aspect-[3/4] flex flex-col justify-end p-6 sm:p-8 shadow-md border border-outline-variant/40"><img alt="Festivals Occasion Edit" className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out filter brightness-90" src="https://lh3.googleusercontent.com/aida/AEtjO1UQtvfeae5j3_rOwX780cqJFMCGgt1yNlnlQ903bkNIz4U4G3LPgdLz0PGVUu9lhMPB_oEvtjvN5V_F9uksHgwXEAAMQJuR5yYbmmnagDEH59e9an_9R4Ln21eZPCISrU5zVfzVYqkyvEp3kJRxk6dMkxVP-XiDTChEmUoJmV7trlI1Is3bagTMdNUhEOw4bzlXjFytPg-RQ-5yo3CO-oNpdpIlENj0X4dBVkkPawXKrPsBt_He0v7MSdc" /><div className="absolute inset-0 bg-gradient-to-t from-tertiary/90 via-tertiary/30 to-transparent"></div><div className="relative z-10"><span className="text-[9px] uppercase tracking-[0.25em] text-secondary-fixed font-medium block mb-1">CURATED CAPSULE 03</span><h4 className="font-display-lg text-2xl text-surface-bright tracking-wider uppercase">FESTIVALS</h4><p className="text-xs text-surface-dim font-light tracking-wide mt-1">HERITAGE HANDLOOMS &amp; RITUALS</p></div></div></div><div className="md:col-span-12 group relative overflow-hidden rounded-xl bg-tertiary aspect-[16/9] md:aspect-auto md:min-h-[360px] flex items-end p-8 sm:p-12 shadow-xl border border-outline-variant/40 mt-2"><img alt="Formal Bespoke Occasion Edit" className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out filter brightness-90" src="https://lh3.googleusercontent.com/aida/AEtjO1UUjvOQM_QRfrcFjpyJvvvjVwR2W2j46lYbBPG98W02nhz8MzM_JUy3aGPvBrkbei2NlN-A1dHhlZqPK582TZagvLA49FVsX0sO2Hp3sfnXSvdghWkvrCV7NrGQR3C8lzDnMSQ9U59IL7-XAc1C8CO6bVOTZGW0QDzVbJ5YMnkQunYNm-fDA56PJcEmeP_oHBN3YDH0qDyMgaA1OEeOf6ut2hyrR5ZyhtQd6UwHr2zhPPVKP-awgi95_ZQ" /><div className="absolute inset-0 bg-gradient-to-t from-tertiary/90 via-tertiary/30 to-transparent"></div><div className="absolute inset-0 bg-gradient-to-r from-tertiary/60 via-transparent to-transparent hidden md:block"></div><div className="relative z-10 max-w-lg"><span className="text-[10px] uppercase tracking-[0.3em] text-secondary-fixed font-medium mb-1 block">CURATED CAPSULE 04</span><h4 className="font-display-lg text-2xl sm:text-3xl text-surface-bright tracking-wider uppercase mb-1">FORMAL BESPOKE</h4><p className="text-xs sm:text-sm text-surface-dim font-light tracking-wide leading-relaxed mb-4">BANDHGALA &amp; TAILORED ARCHITECTURE</p><a className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-surface-bright hover:text-secondary-fixed transition-colors border-b border-surface-dim/40 pb-0.5" href="#collection">VIEW CURATION <span className="material-symbols-outlined text-sm" data-icon="east">east</span></a></div></div></div>
</div>
</section>
{/*  9. JOURNAL ("06 / JOURNAL")  */}
<section className="py-24 sm:py-32 bg-surface" id="journal">
<div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-outline-variant/60">
<div>
<span className="font-label-lg text-secondary tracking-[0.25em] uppercase text-xs">
            06 / JOURNAL
          </span>
<h2 className="font-display-lg text-3xl sm:text-4xl text-primary mt-2">
            ESSAYS &amp; DISPATCHES
          </h2>
</div>
<a className="text-xs uppercase tracking-[0.2em] text-primary hover:text-secondary mt-4 md:mt-0 font-medium inline-flex items-center gap-1" href="#">
          VIEW ALL DISPATCHES <span className="material-symbols-outlined text-sm" data-icon="east">east</span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
{/*  Article 1  */}
<article className="group cursor-pointer">
<div className="relative overflow-hidden rounded-xl aspect-[16/10] bg-surface-container mb-6 border border-outline-variant/50">
<img alt="The New Language of Indian Formalwear" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="A striking digital installation art piece featuring glowing, generative geometric shapes suspended in a vast, minimalist gallery space. The room is illuminated by high-key, soft white lighting that creates a bright, modern light-mode aesthetic. The artwork relies on a sophisticated palette of deep blacks and pristine whites, punctuated by intense accents of vibrant red. The mood is serene yet technologically advanced." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB02-22CILRVGBMyUbAingVBuwJlcJE1JNkUxt_CHHjq3R66Jb55HshHqrNCUUm5MeT4yQfmI41UlTjvFhYMzIxfrChqqH9m5SnFfBTq5JpO3lUXo0UwwlpS5hnRMUwHPN2sKp0qozvK_ze5K88vr8H8sCI6iVQEsSxypLCEpny2lmiVv72KbFWKgRkcY142dQA7hGvq6NeLRDfTYXW6qlkp3-_zSbalKtJcv8iT6EXC4DNQFOT6dpt" />
</div>
<div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-outline mb-2">
<span className="">SARTORIAL THOUGHT</span>
<span className="">·</span>
<span className="">OCTOBER 2025</span>
</div>
<h3 className="font-display-lg text-2xl text-primary group-hover:text-secondary transition-colors leading-snug">
            The New Language of Indian Formalwear: Rejecting The Costume
          </h3>
<p className="text-sm text-on-surface-variant font-light mt-3 leading-relaxed">
            How contemporary tailoring is untethering traditional silhouettes from ornamental excess, returning to architectural line and pure material integrity.
          </p>
<span className="inline-block mt-4 text-xs uppercase tracking-[0.2em] text-primary border-b border-primary/40 pb-0.5">READ ESSAY →</span>
</article>
{/*  Article 2  */}
<article className="group cursor-pointer">
<div className="relative overflow-hidden rounded-xl aspect-[16/10] bg-surface-container mb-6 border border-outline-variant/50">
<img alt="Craft, Culture &amp; The Modern Wardrobe" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="A striking digital installation art piece featuring glowing, generative geometric shapes suspended in a vast, minimalist gallery space. The room is illuminated by high-key, soft white lighting that creates a bright, modern light-mode aesthetic. The artwork relies on a sophisticated palette of deep blacks and pristine whites, punctuated by intense accents of vibrant red. The mood is serene yet technologically advanced." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlS-hP9cU0-qbawOqR46wT74RXsKNR3i-0bh1jEQqfsl3PAMu5811Wt1iyhRKxuZXZM7rGl3jvjIlvYXTSNzUHMRxXnYrORmcH7jcWLs4we9t-1rZqG6xnqoBcdtxpPbd5s0pOsSbvd0Dt-lc6BJAD3t30_uPgthkALZGNbJBYqZgJSPNhWZsRYh_qojqlxLna26bmQYEiwIKmB6uNluanhJQDCZBrQQbpt3J08OKDmgOD8JCXMoPU" />
</div>
<div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-outline mb-2">
<span className="">ATELIER NOTES</span>
<span className="">·</span>
<span className="">SEPTEMBER 2025</span>
</div>
<h3 className="font-display-lg text-2xl text-primary group-hover:text-secondary transition-colors leading-snug">
            Craft, Culture &amp; The Modern Wardrobe: Inside The Weaving Sheds
          </h3>
<p className="text-sm text-on-surface-variant font-light mt-3 leading-relaxed">
            A journey through the narrow lanes of Varanasi and Jaipur, where artisan guilds maintain the rare craft of hand-guided metallic bullion work.
          </p>
<span className="inline-block mt-4 text-xs uppercase tracking-[0.2em] text-primary border-b border-primary/40 pb-0.5">READ ESSAY →</span>
</article>
</div>
</div>
</section>
{/*  10. FINAL CAMPAIGN BANNER  */}
<section className="relative py-28 overflow-hidden bg-primary-container text-surface-bright">
<div className="absolute inset-0 z-0 opacity-20">
<img alt="Atelier Vayu Textural Motif" className="w-full h-full object-cover" data-alt="A striking digital installation art piece featuring glowing, generative geometric shapes suspended in a vast, minimalist gallery space. The room is illuminated by high-key, soft white lighting that creates a bright, modern light-mode aesthetic. The artwork relies on a sophisticated palette of deep blacks and pristine whites, punctuated by intense accents of vibrant red. The mood is serene yet technologically advanced." src="https://lh3.googleusercontent.com/aida/AEtjO1VPSzy58-_sW3qzPyI9Z5vkLgHFWV5Gb7yHzO05XvZFNs2BDzMs8C7G-WfLwM5BzSnGCGuZFWrYwyk32SlXn0umAEkG_j6LMwKnmxXvo81kFnhz6Ev-JbhVbM_U1nXPMGGtgmDQIbbmTju3VSDZ3YXzRJSHzk8tzR_q-aHZ2GdxTu1QnokiW6tzL3jIZJD8JjKNFfl9MbKnVW0rhzQAQQWtaVI1MS6TVu0eA346FDYz92qavBtJcH-FkA" />
</div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
<span className="text-xs uppercase tracking-[0.35em] text-secondary-fixed mb-4 inline-block">
        ATELIER VAYU · NEW SEASON
      </span>
<h2 className="font-display-lg text-4xl sm:text-6xl text-surface-bright leading-tight mb-6 font-normal">
        WEAR YOUR HERITAGE.
      </h2>
<p className="text-surface-dim font-light text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
        Discover the complete Autumn / Winter 2025 capsule. Hand-crafted in limited seasonal editions.
      </p>
<a className="inline-flex items-center gap-3 bg-secondary-fixed text-on-secondary-fixed px-8 py-4 rounded-full text-xs uppercase tracking-[0.22em] font-medium hover:bg-surface-bright transition-all duration-300 shadow-xl" href="#collection">
<span className="">SHOP THE COLLECTION</span>
<span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
</a>
</div>
</section>
{/*  FOOTER  */}

{/*  INTERACTIVE LUXURY CART / BAG DRAWER (Slide-out)  */}
<div className="fixed inset-0 z-50 pointer-events-none transition-opacity duration-300 opacity-0" id="cart-drawer">
{/*  Backdrop  */}
<div className="absolute inset-0 bg-tertiary/60 backdrop-blur-sm transition-opacity duration-300" id="cart-backdrop" onclick="toggleCart()"></div>
{/*  Drawer Panel  */}
<aside className="absolute top-0 right-0 h-full w-full max-w-md bg-surface shadow-2xl flex flex-col justify-between transform translate-x-full transition-transform duration-500 ease-in-out pointer-events-auto border-l border-outline-variant/60">
{/*  Drawer Header  */}
<div className="p-6 border-b border-outline-variant/40 flex items-center justify-between bg-surface-container-lowest">
<div>
<span className="text-[10px] uppercase tracking-[0.25em] text-secondary font-medium">YOUR SELECTION</span>
<h3 className="font-display-lg text-xl text-primary">SHOPPING BAG (<span id="cart-drawer-count" className="">2</span>)</h3>
</div>
<button aria-label="Close Bag" className="p-2 text-outline hover:text-primary transition-colors" onclick="toggleCart()">
<span className="material-symbols-outlined text-xl" data-icon="close">close</span>
</button>
</div>
{/*  Drawer Items List  */}
<div className="p-6 flex-1 overflow-y-auto space-y-6" id="cart-items">
{/*  Cart Item 1  */}
<div className="flex gap-4 pb-6 border-b border-outline-variant/40">
<div className="w-20 h-24 bg-surface-container-high rounded-lg overflow-hidden flex-shrink-0 border border-outline-variant/40">
<img alt="Sculpted Crimson Zardozi Lehenga" className="w-full h-full object-cover" data-alt="A striking digital installation art piece featuring glowing, generative geometric shapes suspended in a vast, minimalist gallery space. The room is illuminated by high-key, soft white lighting that creates a bright, modern light-mode aesthetic. The artwork relies on a sophisticated palette of deep blacks and pristine whites, punctuated by intense accents of vibrant red. The mood is serene yet technologically advanced." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFW7urycwE4GjpbmwA16qXEVQ1ktn2fvixWki9-n20UJkiFTT5jRasMzXBQNHgezWrKXHx4fZH3puatIE8nxV8sn0BuWQfdM8E8l8aMeVIR68ogdWZoDIQPOAW5rjm9uClF-geoiagBZ4g0Er93GOmPr3Ljk3mtIt0Id6pqpxftu5DuauYpaZAiFfeOQrow-jecrc-bStVAnHCx2pkyP3ShRk1OD7OyL0z33vB_oyYdfCh6eZpPOMl" />
</div>
<div className="flex-1 flex flex-col justify-between">
<div>
<div className="flex justify-between items-start">
<h4 className="text-sm font-medium text-primary">Sculpted Crimson Zardozi Lehenga</h4>
<button className="text-outline hover:text-error text-xs" onclick="alert('Item removed.')"><span className="material-symbols-outlined text-sm" data-icon="delete">delete</span></button>
</div>
<p className="text-xs text-outline font-light mt-0.5">Size: Bespoke Made-to-Measure</p>
<p className="text-xs text-outline font-light">Color: Crimson Silk / Antique Gold</p>
</div>
<div className="flex justify-between items-end">
<span className="text-xs text-secondary">Qty: 1</span>
<span className="text-sm font-medium text-primary">$3,800</span>
</div>
</div>
</div>
{/*  Cart Item 2  */}
<div className="flex gap-4 pb-6 border-b border-outline-variant/40">
<div className="w-20 h-24 bg-surface-container-high rounded-lg overflow-hidden flex-shrink-0 border border-outline-variant/40">
<img alt="Ivory Silk Asymmetric Bandhgala" className="w-full h-full object-cover" data-alt="A striking digital installation art piece featuring glowing, generative geometric shapes suspended in a vast, minimalist gallery space. The room is illuminated by high-key, soft white lighting that creates a bright, modern light-mode aesthetic. The artwork relies on a sophisticated palette of deep blacks and pristine whites, punctuated by intense accents of vibrant red. The mood is serene yet technologically advanced." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeiFeNtsXgDk8J6jXGySZ187ahEfoXmcW3ADk2vz9m0bO59HlauxmoWqlYeq4dnE0ywt2ToEpnzbI3_SFP8_i9sBWylAgBCQtlp4IkAhgTsEMRiRVHkH4A2K2I3mCQcHp1Fq6RcffJu8bu3WnAoBAm4_MYlFlBeZpqfLZa8e4SCVLt4COIKrFVvjKamOAwR-Y5_-m4NxtULxj74X2FLH3sECwXdMZbx81nxw4MdL22wYgY0P_4YFEg" />
</div>
<div className="flex-1 flex flex-col justify-between">
<div>
<div className="flex justify-between items-start">
<h4 className="text-sm font-medium text-primary">Ivory Silk Asymmetric Bandhgala</h4>
<button className="text-outline hover:text-error text-xs" onclick="alert('Item removed.')"><span className="material-symbols-outlined text-sm" data-icon="delete">delete</span></button>
</div>
<p className="text-xs text-outline font-light mt-0.5">Size: 40R (Chest 40")</p>
<p className="text-xs text-outline font-light">Color: Natural Ivory</p>
</div>
<div className="flex justify-between items-end">
<span className="text-xs text-secondary">Qty: 1</span>
<span className="text-sm font-medium text-primary">$2,450</span>
</div>
</div>
</div>
{/*  Bespoke Consultation Banner in Bag  */}
<div className="bg-secondary-fixed/30 border border-secondary/20 p-4 rounded-lg">
<div className="flex gap-3">
<span className="material-symbols-outlined text-secondary text-lg" data-icon="verified">verified</span>
<div>
<p className="text-xs font-medium text-primary">Complimentary Atelier Fitting</p>
<p className="text-[11px] text-on-surface-variant font-light mt-0.5">
                Every couture piece includes a 1-on-1 virtual or in-person consultation with our senior master tailor.
              </p>
</div>
</div>
</div>
</div>
{/*  Drawer Footer & Checkout  */}
<div className="p-6 border-t border-outline-variant/40 bg-surface-container-lowest">
<div className="space-y-2 mb-4 text-xs font-light">
<div className="flex justify-between text-on-surface-variant">
<span className="">Subtotal</span>
<span className="text-on-surface font-medium">$6,250</span>
</div>
<div className="flex justify-between text-on-surface-variant">
<span className="">Complimentary Insured Courier</span>
<span className="text-secondary font-medium">Free</span>
</div>
<div className="flex justify-between text-base font-normal text-primary pt-2 border-t border-outline-variant/30">
<span className="">Total</span>
<span className="font-display-lg text-lg">$6,250 <span className="text-xs text-outline font-sans">(₹5,20,000)</span></span>
</div>
</div>
<button className="w-full bg-primary-container hover:bg-primary text-surface-bright py-4 rounded-full text-xs uppercase tracking-[0.22em] font-medium transition-all shadow-md flex items-center justify-center gap-2" onclick="alert('Redirecting to Atelier Vayu Bespoke Checkout...')">
<span className="">PROCEED TO CHECKOUT</span>
<span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
</button>
<p className="text-center text-[10px] uppercase tracking-widest text-outline mt-3">
          100% SATISFACTION GUARANTEED · SECURE ATELIER ESCROW
        </p>
</div>
</aside>
</div>
{/*  Interactive JavaScript  */}









