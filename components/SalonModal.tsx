"use client";

import React, { useState } from "react";
import { useCart } from "@/context/CartContext";

export default function SalonModal() {
  const { salonModalOpen, closeSalonModal, selectedSalonProduct } = useCart();
  const [salonLocation, setSalonLocation] = useState("delhi");
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!salonModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      closeSalonModal();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div
        className="fixed inset-0"
        onClick={closeSalonModal}
      />

      <div className="relative bg-surface text-on-surface border border-outline-variant/40 shadow-2xl max-w-lg w-full p-8 z-10 animate-fadeIn">
        {/* Close button */}
        <button
          onClick={closeSalonModal}
          className="absolute top-5 right-5 text-on-surface-variant hover:text-primary transition-colors focus:outline-none"
          aria-label="Close Modal"
        >
          <span className="material-symbols-outlined text-2xl">close</span>
        </button>

        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <span className="material-symbols-outlined text-5xl text-secondary">
              check_circle
            </span>
            <h3 className="font-serif text-2xl text-primary font-normal">
              Salon Appointment Requested
            </h3>
            <p className="text-xs text-on-surface-variant max-w-sm mx-auto leading-relaxed">
              Your private fitting session for <span className="text-primary font-medium">{selectedSalonProduct}</span> has been noted. An Atelier Vayu master tailor will reach out to confirm your private suite.
            </p>
            <p className="text-[10px] uppercase tracking-[0.25em] text-secondary">
              Atelier Vayu Concierge
            </p>
          </div>
        ) : (
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-secondary font-medium block mb-1">
              Private Appointment
            </span>
            <h3 className="font-serif text-2xl text-primary font-normal mb-2">
              Reserve Salon Try-On
            </h3>
            <p className="text-xs text-on-surface-variant mb-6 leading-relaxed">
              Experience the drape, tactile weight, and bespoke fitting of{" "}
              <span className="text-primary font-medium">{selectedSalonProduct}</span> in a private salon suite with our master couturiers.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-[11px] uppercase tracking-[0.18em] text-on-surface-variant mb-2">
                  Select Atelier Sanctuary
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: "delhi", city: "New Delhi", venue: "The Chanakya" },
                    { id: "mumbai", city: "Mumbai", venue: "Kala Ghoda" },
                    { id: "bengaluru", city: "Bengaluru", venue: "Lavelle Road" },
                    { id: "jaipur", city: "Jaipur", venue: "Narain Niwas" },
                  ].map((loc) => (
                    <button
                      type="button"
                      key={loc.id}
                      onClick={() => setSalonLocation(loc.id)}
                      className={`p-3 text-left border transition-all ${
                        salonLocation === loc.id
                          ? "border-primary bg-surface-container text-primary shadow-xs"
                          : "border-outline-variant/40 bg-surface-container-low text-on-surface hover:border-outline"
                      }`}
                    >
                      <div className="font-medium text-xs">{loc.city}</div>
                      <div className="text-[10px] text-on-surface-variant">{loc.venue}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-[0.18em] text-on-surface-variant mb-1.5">
                  Preferred Date & Time Window
                </label>
                <input
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-surface-container-low border border-outline-variant/40 px-3 py-2.5 text-xs text-on-surface focus:outline-none focus:border-primary"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.18em] text-on-surface-variant mb-1.5">
                    Patron Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Maharani Gayatri Devi"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-surface-container-low border border-outline-variant/40 px-3 py-2.5 text-xs text-on-surface focus:outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.18em] text-on-surface-variant mb-1.5">
                    Concierge Contact Phone
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-surface-container-low border border-outline-variant/40 px-3 py-2.5 text-xs text-on-surface focus:outline-none focus:border-primary"
                  />
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-primary text-on-primary text-xs uppercase tracking-[0.25em] font-medium hover:bg-primary-container transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Confirm Private Salon Appointment</span>
                  <span className="material-symbols-outlined text-sm">calendar_month</span>
                </button>
              </div>

              <p className="text-[10px] text-center text-on-surface-variant/80 tracking-wide mt-2">
                Complimentary consultation • Hand-poured saffron tea & measurement dossier included
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
