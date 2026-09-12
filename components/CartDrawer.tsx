"use client";

import React from "react";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function CartDrawer() {
  const { cartOpen, closeCart, cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (!cartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 animate-fadeIn"
        onClick={closeCart}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-surface text-on-surface shadow-2xl border-l border-outline-variant/30 flex flex-col transition-transform duration-500 animate-slideLeft">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-outline-variant/30 bg-surface-container-low">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-secondary font-medium block">
                Atelier Vayu
              </span>
              <h2 className="font-serif text-xl font-normal text-primary">
                Ceremonial Wardrobe ({cartItems.reduce((s, i) => s + i.quantity, 0)})
              </h2>
            </div>
            <button
              onClick={closeCart}
              className="p-2 text-on-surface-variant hover:text-primary transition-colors focus:outline-none"
              aria-label="Close Wardrobe"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>
          </div>

          {/* Cart Body */}
          <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <span className="material-symbols-outlined text-4xl text-outline-variant mb-4">
                  shopping_bag
                </span>
                <p className="font-serif text-lg text-primary mb-2">Your Wardrobe is Empty</p>
                <p className="text-xs text-on-surface-variant max-w-xs mb-6">
                  Select handcrafted specimens from The Ceremonial Archive to reserve for your bespoke dispatch.
                </p>
                <Link
                  href="/shop"
                  onClick={closeCart}
                  className="px-6 py-3 bg-primary text-on-primary text-xs uppercase tracking-[0.2em] font-medium hover:bg-primary-container transition-colors"
                >
                  Explore Archive
                </Link>
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={`${item.id}-${item.size}-${item.colorway}`}
                  className="flex gap-4 pb-6 border-b border-outline-variant/20 group"
                >
                  <div className="w-20 h-28 bg-surface-container overflow-hidden shrink-0 border border-outline-variant/30">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      {item.edition && (
                        <span className="text-[9px] uppercase tracking-[0.2em] text-secondary block mb-1">
                          {item.edition}
                        </span>
                      )}
                      <h4 className="font-serif text-sm font-medium text-on-surface line-clamp-1">
                        {item.name}
                      </h4>
                      <div className="flex items-center gap-3 text-[11px] text-on-surface-variant mt-1">
                        {item.colorway && <span>Hue: {item.colorway}</span>}
                        {item.size && <span>Size: {item.size}</span>}
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-outline-variant/40 bg-surface-container-low text-xs">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="px-2 py-1 text-on-surface-variant hover:text-primary transition-colors"
                        >
                          -
                        </button>
                        <span className="px-2 py-1 text-[11px] font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="px-2 py-1 text-on-surface-variant hover:text-primary transition-colors"
                        >
                          +
                        </button>
                      </div>
                      <div className="text-right">
                        <p className="font-serif text-sm text-primary font-medium">
                          ₹ {(item.price * item.quantity).toLocaleString("en-IN")}
                        </p>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-[10px] uppercase tracking-wider text-outline hover:text-error transition-colors mt-1"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout */}
          {cartItems.length > 0 && (
            <div className="p-6 border-t border-outline-variant/30 bg-surface-container-low space-y-4">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-on-surface-variant">
                  <span>Atelier Subtotal</span>
                  <span>₹ {cartTotal.toLocaleString("en-IN")}</span>
                </div>
                <div className="flex justify-between text-on-surface-variant">
                  <span>White-Glove Insured Courier</span>
                  <span className="text-secondary font-medium">Complimentary</span>
                </div>
                <div className="flex justify-between font-serif text-base text-primary pt-2 border-t border-outline-variant/20 font-medium">
                  <span>Ceremonial Total</span>
                  <span>₹ {cartTotal.toLocaleString("en-IN")}</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => {
                    alert("Ceremonial Dispatch Reserved! An Atelier Concierge will contact you shortly to confirm bespoke fitting.");
                    closeCart();
                  }}
                  className="w-full py-3.5 bg-primary text-on-primary text-xs uppercase tracking-[0.25em] font-medium hover:bg-primary-container transition-all flex items-center justify-center gap-2 shadow-sm active:scale-[0.99]"
                >
                  <span>Proceed to Bespoke Dispatch</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>

              <p className="text-[10px] text-center text-on-surface-variant/80 tracking-wide">
                Includes private fitting guarantee & hand-numbered archival cartouche
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
