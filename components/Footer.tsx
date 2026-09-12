import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-tertiary text-surface-dim pt-20 pb-12 border-t border-surface-dim/10">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 text-surface-bright mb-6">
              <div className="w-5 h-5 text-secondary-fixed">
                <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path
                    clipRule="evenodd"
                    d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z"
                    fill="currentColor"
                    fillRule="evenodd"
                  />
                  <path
                    clipRule="evenodd"
                    d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z"
                    fill="currentColor"
                    fillRule="evenodd"
                  />
                </svg>
              </div>
              <span className="font-serif tracking-[0.2em] uppercase font-medium text-lg text-surface-bright">
                ATELIER VAYU
              </span>
            </div>
            <p className="font-light text-sm max-w-sm leading-relaxed text-surface-dim/80">
              A contemporary luxury fashion house celebrating Indian craft, timeless tailoring, and refined bespoke occasions.
            </p>
            <div className="mt-6">
              <span className="text-[10px] uppercase tracking-widest text-secondary-fixed">PRIVATE ATELIERS</span>
              <p className="text-xs text-surface-dim mt-1">New Delhi · Mumbai · London · New York (By Appointment)</p>
            </div>
          </div>

          <div>
            <h5 className="text-xs uppercase tracking-[0.2em] text-surface-bright font-medium mb-4">COLLECTIONS</h5>
            <ul className="space-y-2.5 text-xs font-light text-surface-dim/80">
              <li>
                <Link className="hover:text-surface-bright transition-colors" href="/shop">
                  The Ceremonial Archive
                </Link>
              </li>
              <li>
                <Link className="hover:text-surface-bright transition-colors" href="/shop">
                  The Festive Edit
                </Link>
              </li>
              <li>
                <Link className="hover:text-surface-bright transition-colors" href="/shop">
                  Menswear Occasion
                </Link>
              </li>
              <li>
                <Link className="hover:text-surface-bright transition-colors" href="/shop">
                  Bridal &amp; Couture
                </Link>
              </li>
              <li>
                <Link className="hover:text-surface-bright transition-colors" href="/shop/ivory-silk-asymmetric-bandhgala">
                  Asymmetric Bandhgala
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-xs uppercase tracking-[0.2em] text-surface-bright font-medium mb-4">THE HOUSE</h5>
            <ul className="space-y-2.5 text-xs font-light text-surface-dim/80">
              <li>
                <Link className="hover:text-surface-bright transition-colors" href="/#house">
                  Manifesto
                </Link>
              </li>
              <li>
                <Link className="hover:text-surface-bright transition-colors" href="/#craft">
                  Artisan Guilds
                </Link>
              </li>
              <li>
                <Link className="hover:text-surface-bright transition-colors" href="/shop/ivory-silk-asymmetric-bandhgala">
                  Bespoke Fittings
                </Link>
              </li>
              <li>
                <Link className="hover:text-surface-bright transition-colors" href="/#craft">
                  Sustainability &amp; Silks
                </Link>
              </li>
              <li>
                <Link className="hover:text-surface-bright transition-colors" href="/#journal">
                  Press &amp; Editorial
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-xs uppercase tracking-[0.2em] text-surface-bright font-medium mb-4">CONCIERGE</h5>
            <ul className="space-y-2.5 text-xs font-light text-surface-dim/80">
              <li>
                <Link className="hover:text-surface-bright transition-colors" href="/shop/ivory-silk-asymmetric-bandhgala">
                  Virtual Styling Consultation
                </Link>
              </li>
              <li>
                <Link className="hover:text-surface-bright transition-colors" href="/#house">
                  Complimentary Alterations
                </Link>
              </li>
              <li>
                <Link className="hover:text-surface-bright transition-colors" href="/#house">
                  Global Insured Shipping
                </Link>
              </li>
              <li>
                <Link className="hover:text-surface-bright transition-colors" href="/#craft">
                  Care Guide
                </Link>
              </li>
              <li>
                <Link className="hover:text-surface-bright transition-colors" href="/shop/ivory-silk-asymmetric-bandhgala">
                  Contact Concierge
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-surface-dim/10 flex flex-col sm:flex-row items-center justify-between text-[11px] font-light text-surface-dim/60">
          <p>© 2025 ATELIER VAYU. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-6 mt-4 sm:mt-0">
            <Link className="hover:text-surface-bright transition-colors" href="/#house">
              PRIVACY POLICY
            </Link>
            <Link className="hover:text-surface-bright transition-colors" href="/#house">
              TERMS OF SERVICE
            </Link>
            <Link className="hover:text-surface-bright transition-colors" href="/#house">
              BESPOKE CHARTER
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
