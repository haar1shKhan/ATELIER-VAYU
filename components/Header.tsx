"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const { cartCount, openCart } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-surface/90 border-b border-outline-variant/40 transition-all duration-300">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between h-20">
          {/* Brand Logo & Monogram */}
          <div className="flex items-center gap-10">
            <Link className="flex items-center gap-3 text-primary group" href="/">
              <div className="w-5 h-5 text-primary group-hover:rotate-45 transition-transform duration-700">
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
              <span className="font-serif tracking-[0.2em] uppercase text-primary font-medium text-lg">
                ATELIER VAYU
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-8">
              <Link
                className="text-xs uppercase tracking-[0.2em] text-on-surface-variant hover:text-primary transition-colors py-2"
                href="/shop"
              >
                Collection
              </Link>
              <Link
                className="text-xs uppercase tracking-[0.2em] text-on-surface-variant hover:text-primary transition-colors py-2"
                href="/#house"
              >
                The House
              </Link>
              <Link
                className="text-xs uppercase tracking-[0.2em] text-on-surface-variant hover:text-primary transition-colors py-2"
                href="/shop"
              >
                Menswear
              </Link>
              <Link
                className="text-xs uppercase tracking-[0.2em] text-on-surface-variant hover:text-primary transition-colors py-2"
                href="/shop"
              >
                Womenswear
              </Link>
              <Link
                className="text-xs uppercase tracking-[0.2em] text-on-surface-variant hover:text-primary transition-colors py-2"
                href="/#craft"
              >
                Craft
              </Link>
              <Link
                className="text-xs uppercase tracking-[0.2em] text-on-surface-variant hover:text-primary transition-colors py-2"
                href="/#journal"
              >
                Journal
              </Link>
            </nav>
          </div>

          {/* Actions & Search */}
          <div className="flex items-center gap-4 sm:gap-6">
            <Link
              href="/shop"
              className="hidden sm:flex items-center border border-outline-variant/60 rounded-full px-3 py-1.5 bg-surface-container-low focus-within:border-primary transition-all group"
            >
              <span className="material-symbols-outlined text-outline text-lg mr-2 group-hover:text-primary transition-colors">
                search
              </span>
              <span className="text-xs tracking-wider text-outline/80 w-36 lg:w-48 select-none">
                Search collection...
              </span>
            </Link>

            {/* Currency */}
            <div className="hidden md:inline-flex text-[11px] uppercase tracking-[0.2em] text-secondary font-medium px-3 py-2 border border-outline-variant/40 rounded-full bg-surface-container-low/50">
              INR (₹)
            </div>

            {/* Bag Trigger */}
            <button
              onClick={openCart}
              className="relative flex items-center gap-2 bg-primary-container text-surface-bright px-4 py-2 rounded-full hover:bg-primary transition-all duration-300 shadow-sm cursor-pointer active:scale-95"
              aria-label="View Shopping Bag"
            >
              <span className="material-symbols-outlined text-base">shopping_bag</span>
              <span className="text-[11px] font-medium tracking-[0.2em] uppercase">
                BAG (<span>{cartCount}</span>)
              </span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              aria-label="Toggle Navigation"
              className="xl:hidden p-2 text-primary focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="material-symbols-outlined text-2xl">
                {mobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 xl:hidden">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-xs"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-20 inset-x-0 bg-surface border-b border-outline-variant/30 p-8 shadow-xl space-y-6">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/shop"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm uppercase tracking-[0.2em] text-primary font-medium pb-2 border-b border-outline-variant/20"
              >
                The Ceremonial Archive (PLP)
              </Link>
              <Link
                href="/shop/ivory-silk-asymmetric-bandhgala"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm uppercase tracking-[0.2em] text-on-surface pb-2 border-b border-outline-variant/20"
              >
                Featured Piece: Ivory Bandhgala (PDP)
              </Link>
              <Link
                href="/#house"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm uppercase tracking-[0.2em] text-on-surface pb-2 border-b border-outline-variant/20"
              >
                The House
              </Link>
              <Link
                href="/#craft"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm uppercase tracking-[0.2em] text-on-surface pb-2 border-b border-outline-variant/20"
              >
                Artisan Craft
              </Link>
              <Link
                href="/#journal"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm uppercase tracking-[0.2em] text-on-surface pb-2"
              >
                Essays & Dispatches
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
