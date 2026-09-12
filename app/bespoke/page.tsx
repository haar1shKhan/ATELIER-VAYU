import Image from "next/image";
import { EDITORIAL_CAMPAIGNS } from "@/lib/data/products";

export const metadata = {
  title: "Private Salon & Bespoke Appointment — Atelier Vayu",
  description: "Schedule a private consultation at our New Delhi atelier or request video fittings."
};

export default function BespokePage() {
  return (
    <div className="pt-32 pb-32 px-6 md:px-12 lg:px-20 max-w-[1600px] mx-auto">
      <div className="pb-16 border-b border-[rgba(23,19,19,0.12)]">
        <span className="text-[0.6875rem] font-medium tracking-provenance uppercase text-[#A58A5C] block mb-2">
          Made-to-Measure & Private Commissions
        </span>
        <h1 className="font-display text-4xl md:text-6xl text-[#171313] font-normal">
          The Private Salon
        </h1>
        <p className="mt-4 text-xs md:text-sm text-[#171313]/70 font-light max-w-2xl leading-relaxed">
          Atelier Vayu offers private appointments for individuals seeking one-off ceremonial commissions, bespoke bandhgalas, and sculpted lehenga ensembles with direct master artisan consultations.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-6 space-y-6">
          <div className="relative aspect-4/5 w-full bg-[#ded9d1]">
            <Image
              src={EDITORIAL_CAMPAIGNS.craft.artisanImage}
              alt="Atelier Master Draper"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-8 bg-[#E8DED0]/40 border border-[#E8DED0] space-y-4">
            <span className="font-display text-xl text-[#171313] block">
              Salon Location & Concierge
            </span>
            <p className="text-xs text-[#171313]/80 leading-relaxed font-light">
              The Dhan Mill, 100 Feet Road, Chhatarpur, New Delhi 110074.
              <br />
              Tuesday through Sunday, 11:00 AM – 7:00 PM (By prior reservation only).
            </p>
            <div className="pt-2 text-xs text-[#4A1118] font-medium tracking-museum uppercase">
              International Video Fittings Available
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 bg-[#ded9d1]/20 p-8 md:p-12 border border-[#E8DED0]">
          <span className="text-[0.625rem] tracking-provenance uppercase text-[#A58A5C] font-semibold block mb-2">
            Formal Inscription
          </span>
          <h2 className="font-display text-2xl md:text-3xl text-[#171313] mb-8">
            Request an Audience
          </h2>

          <form className="space-y-6">
            <div>
              <label className="block text-[0.625rem] tracking-museum uppercase text-[#A58A5C] mb-2 font-medium">
                Full Name
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Maharaja Vikramaditya / Dr. Gayatri Sen"
                className="w-full bg-[#F4EFE6] border border-[#171313]/20 px-4 py-3 text-xs text-[#171313] focus:outline-hidden focus:border-[#4A1118]"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[0.625rem] tracking-museum uppercase text-[#A58A5C] mb-2 font-medium">
                  Electronic Mail
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@domain.com"
                  className="w-full bg-[#F4EFE6] border border-[#171313]/20 px-4 py-3 text-xs text-[#171313] focus:outline-hidden focus:border-[#4A1118]"
                />
              </div>
              <div>
                <label className="block text-[0.625rem] tracking-museum uppercase text-[#A58A5C] mb-2 font-medium">
                  Direct Telephone / WhatsApp
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98110 00000"
                  className="w-full bg-[#F4EFE6] border border-[#171313]/20 px-4 py-3 text-xs text-[#171313] focus:outline-hidden focus:border-[#4A1118]"
                />
              </div>
            </div>

            <div>
              <label className="block text-[0.625rem] tracking-museum uppercase text-[#A58A5C] mb-2 font-medium">
                Commission Category
              </label>
              <select className="w-full bg-[#F4EFE6] border border-[#171313]/20 px-4 py-3 text-xs text-[#171313] focus:outline-hidden focus:border-[#4A1118]">
                <option>Bespoke Bandhgala / Sherwani (Menswear)</option>
                <option>Architectural Haute Couture Saree (Womenswear)</option>
                <option>Sculpted Bridal & Groom Ceremonial Ensemble</option>
                <option>Heirloom Textile Restoration & Weave Commission</option>
              </select>
            </div>

            <div>
              <label className="block text-[0.625rem] tracking-museum uppercase text-[#A58A5C] mb-2 font-medium">
                Ceremonial Occasion & Approximate Timeline
              </label>
              <textarea
                rows={3}
                placeholder="Details on ceremony dates, location, or specific archival silhouette references..."
                className="w-full bg-[#F4EFE6] border border-[#171313]/20 px-4 py-3 text-xs text-[#171313] focus:outline-hidden focus:border-[#4A1118]"
              />
            </div>

            <button
              type="button"
              className="w-full bg-[#4A1118] text-[#F4EFE6] text-xs font-medium tracking-museum uppercase py-4 hover:bg-[#171313] transition-colors cursor-pointer"
            >
              Submit Salon Reservation Request &rarr;
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
