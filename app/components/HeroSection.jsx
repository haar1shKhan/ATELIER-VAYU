import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-[942px] flex items-end justify-start overflow-hidden bg-tertiary">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          alt="Atelier Vayu Autumn Winter Campaign"
          className="w-full h-full object-cover object-center transform scale-105 filter contrast-105 transition-transform duration-1000 ease-out"
          src="cinematic_high_fashion_editorial_campaign_photograph_of_a_handsome_indian_male.png"
        />
        {/* Dramatic editorial overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-tertiary/90 via-tertiary/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-tertiary/60 via-transparent to-transparent"></div>
      </div>

      {/* Floating Minimalist Typography */}
      <div className="relative z-10 max-w-[1440px] w-full mx-auto px-6 sm:px-10 lg:px-16 pb-16 lg:pb-24 pt-32">
        <div className="max-w-3xl">
          <span className="inline-block text-[11px] sm:text-xs uppercase tracking-[0.35em] text-secondary-fixed font-medium mb-4 bg-tertiary/40 backdrop-blur-sm px-3 py-1 border border-secondary-fixed/30 rounded-full">
            AUTUMN / WINTER 2025
          </span>
          <h1 className="font-display-lg text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-surface-bright leading-[1.05] tracking-tight mb-6 font-normal">
            HERITAGE,
            <br />
            <span className="italic font-light">REIMAGINED.</span>
          </h1>
          <p className="font-body-lg text-sm sm:text-base md:text-lg text-surface-container-highest/90 max-w-xl font-light tracking-wide leading-relaxed mb-10">
            Contemporary Indian occasion wear, crafted with centuries of
            tradition at its core. Structured bandhgalas, sculptural drapes,
            and intricate bullion threadwork.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <Link
              className="group inline-flex items-center gap-3 bg-secondary-fixed text-on-secondary-fixed px-7 py-3.5 rounded-full text-xs uppercase tracking-[0.22em] font-medium hover:bg-secondary hover:text-surface transition-all duration-300 shadow-lg"
              href="/shop"
            >
              <span>EXPLORE THE COLLECTION</span>
              <span
                className="material-symbols-outlined text-sm transition-transform duration-300 group-hover:translate-x-1"
                data-icon="arrow_forward"
              >
                arrow_forward
              </span>
            </Link>
            <a
              className="inline-flex items-center text-xs uppercase tracking-[0.22em] text-surface-bright/90 hover:text-surface border-b border-surface-bright/40 hover:border-surface pb-1 transition-all"
              href="#house"
            >
              DISCOVER OUR STORY
            </a>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="absolute bottom-8 right-8 lg:right-16 z-10 flex flex-col items-center gap-3">
        <span className="text-[9px] uppercase tracking-[0.3em] text-surface-dim -rotate-90 origin-bottom mb-2">
          SCROLL
        </span>
        <div className="w-[1px] h-12 bg-surface-dim/30 overflow-hidden">
          <div className="w-full h-full bg-secondary-fixed animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}