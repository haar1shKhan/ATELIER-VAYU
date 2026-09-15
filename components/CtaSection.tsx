import Link from 'next/link'
import React from 'react'
import { SvgCornerArt } from './SvgCornerArt'

const CtaSection = () => {
  return (
    <div>
      <section className="relative py-28 overflow-hidden bg-primary-container text-surface-bright">

        {/* Background Image */}
        {/* <div className="absolute inset-0 z-0 opacity-20">
          <img
            alt="Atelier Vayu Textural Motif"
            className="w-full h-full object-cover"
            data-alt="A striking digital installation art piece featuring glowing, generative geometric shapes suspended in a vast, minimalist gallery space. The room is illuminated by high-key, soft white lighting that creates a bright, modern light-mode aesthetic. The artwork relies on a sophisticated palette of deep blacks and pristine whites, punctuated by intense accents of vibrant red. The mood is serene yet technologically advanced."
            src="https://lh3.googleusercontent.com/aida/AEtjO1VPSzy58-_sW3qzPyI9Z5vkLgHFWV5Gb7yHzO05XvZFNs2BDzMs8C7G-WfLwM5BzSnGCGuZFWrYwyk32SlXn0umAEkG_j6LMwKnmxXvo81kFnhz6Ev-JbhVbM_U1nXPMGGtgmDQIbbmTju3VSDZ3YXzRJSHzk8tzR_q-aHZ2GdxTu1QnokiW6tzL3jIZJD8JjKNFfl9MbKnVW0rhzQAQQWtaVI1MS6TVu0eA346FDYz92qavBtJcH-FkA"
          />
        </div> */}
        <SvgCornerArt  src="/hibiscus-vine-stroke.svg" color='text-[#FEF9F0]'className="opacity-40 rotate-180"  position="top-right" animation="draw" size="w-24 sm:w-36 lg:w-150" />
        <SvgCornerArt  src="/corner-vine-stroke.svg" color='text-[#FEF9F0]' className="opacity-40 " position="bottom-left" animation="draw" size="w-24 sm:w-36 lg:w-150" />
        <SvgCornerArt  src="/floral-line-art-stroke.svg" color='text-[#FEF9F0]' className="opacity-30 mt-5" position="center-center" animation="draw" size="w-24 sm:w-36 lg:w-150  " />


        {/* Call to Action */}
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

          <Link
            className="inline-flex items-center gap-3 bg-secondary-fixed text-on-secondary-fixed px-8 py-4 rounded-full text-xs uppercase tracking-[0.22em] font-medium hover:bg-surface-bright transition-all duration-300 shadow-xl"
            href="/shop"
          >
            <span>
              SHOP THE COLLECTION
            </span>

            <span
              className="material-symbols-outlined text-sm"
              data-icon="arrow_forward"
            >
              arrow_forward
            </span>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default CtaSection