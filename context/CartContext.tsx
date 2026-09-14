"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export interface CartItem {
  id: string;
  name: string;
  edition?: string;
  price: number;
  formattedPrice: string;
  image: string;
  size?: string;
  colorway?: string;
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  cartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, delta: number) => void;
  cartCount: number;
  cartTotal: number;
  salonModalOpen: boolean;
  openSalonModal: (productName?: string) => void;
  closeSalonModal: () => void;
  selectedSalonProduct: string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "ivory-silk-asymmetric-bandhgala",
      name: "The Ivory Silk Asymmetric Bandhgala",
      edition: "Edition // No. VII - 04",
      price: 84000,
      formattedPrice: "₹ 84,000",
      image: "/ivory-silk-asymmetric-bandhgala",
      size: "40R",
      colorway: "Ivory Sand",
      quantity: 1,
    },
  ]);
  const [cartOpen, setCartOpen] = useState(false);
  const [salonModalOpen, setSalonModalOpen] = useState(false);
  const [selectedSalonProduct, setSelectedSalonProduct] = useState("The Ivory Silk Asymmetric Bandhgala");

  const openCart = () => setCartOpen(true);
  const closeCart = () => setCartOpen(false);

  const openSalonModal = (productName?: string) => {
    if (productName) setSelectedSalonProduct(productName);
    setSalonModalOpen(true);
  };
  const closeSalonModal = () => setSalonModalOpen(false);

  const addToCart = (item: Omit<CartItem, "quantity">) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === item.id && i.size === item.size && i.colorway === item.colorway);
      if (existing) {
        return prev.map((i) =>
          i === existing ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    setCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const cartTotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartOpen,
        openCart,
        closeCart,
        addToCart,
        removeFromCart,
        updateQuantity,
        cartCount,
        cartTotal,
        salonModalOpen,
        openSalonModal,
        closeSalonModal,
        selectedSalonProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
