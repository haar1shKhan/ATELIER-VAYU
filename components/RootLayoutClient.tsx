"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";
import { CartProvider } from "@/context/CartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import SalonModal from "@/components/SalonModal";

export default function RootLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.9,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-surface text-on-surface selection:bg-primary selection:text-surface">
        <Header />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
        <CartDrawer />
        <SalonModal />
      </div>
    </CartProvider>
  );
}
