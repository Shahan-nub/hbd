"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { Gift, Sparkles, Check, Ticket } from "lucide-react";

interface Voucher {
  id: number;
  ribbonColor: string;
  title: string;
  code: string;
  benefit: string;
  finePrint: string;
}

export default function SurpriseBoxes() {
  const [openedBoxes, setOpenedBoxes] = useState<number[]>([]);
  const [redeemed, setRedeemed] = useState<number[]>([]);

  const vouchers: Voucher[] = [
    {
      id: 1,
      ribbonColor: "bg-beige-400",
      title: "Unlimited Forehead Kisses & Tight Hugs",
      code: "MISHA-HUG-INFINITY",
      benefit: "Redeemable at any hour of the day or night. Never expires.",
      finePrint: "Side effects include instant stress relief and butterflies.",
    },
    {
      id: 2,
      ribbonColor: "bg-champagne-400",
      title: "Dream Dinner Date Of Your Choice",
      code: "MISHA-FEAST-VIP",
      benefit: "Any restaurant you crave, any dessert you want, 100% on me.",
      finePrint: "You pick the spot, you pick the appetizers, zero objections allowed.",
    },
    {
      id: 3,
      ribbonColor: "bg-beige-500",
      title: "Late Night Drive & Sweet Cravings",
      code: "MISHA-DRIVE-SWEETS",
      benefit: "Spontaneous drive under the stars with your favorite playlist & ice cream.",
      finePrint: "Valid whenever your heart feels like escaping for a sweet treat.",
    },
    {
      id: 4,
      ribbonColor: "bg-warmBrown-400",
      title: "Queen For The Whole Day Pass",
      code: "MISHA-ROYAL-RULE",
      benefit: "Whatever you say goes! Pampering, massages, and royal treatment.",
      finePrint: "Your wish is literally my command for 24 glorious hours.",
    },
  ];

  const handleOpen = (id: number) => {
    if (!openedBoxes.includes(id)) {
      setOpenedBoxes((prev) => [...prev, id]);
      confetti({
        particleCount: 35,
        spread: 60,
        colors: ["#c5a47e", "#b38d64", "#d7be9f", "#e6d5bf", "#f5e8d3"],
      });
    }
  };

  const handleRedeem = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    if (!redeemed.includes(id)) {
      setRedeemed((prev) => [...prev, id]);
      confetti({
        particleCount: 50,
        spread: 80,
        colors: ["#34d399", "#c5a47e", "#b38d64", "#fef3c7"],
      });
    }
  };

  return (
    <section id="gifts" className="relative py-20 px-4 max-w-5xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-beige-100 border border-beige-300 text-warmBrown-700 text-xs font-semibold mb-3">
          <Gift className="w-3.5 h-3.5 text-beige-600" />
          <span>Birthday Surprise Boxes</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-bold text-warmBrown-950 mb-3">
          Special Love Vouchers for Misha 🎁
        </h2>
        <p className="text-warmBrown-600 text-sm sm:text-base max-w-md mx-auto">
          Tap each mystery gift box to unwrap your personalized birthday coupons!
        </p>
      </div>

      {/* Boxes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {vouchers.map((v) => {
          const isOpen = openedBoxes.includes(v.id);
          const isRedeemed = redeemed.includes(v.id);

          return (
            <div
              key={v.id}
              onClick={() => handleOpen(v.id)}
              className={`rounded-3xl p-6 transition-all duration-300 relative cursor-pointer overflow-hidden border ${
                isOpen
                  ? "glass-card border-beige-400 shadow-md"
                  : "bg-gradient-to-br from-beige-100 via-beige-50 to-beige-200 border-beige-300 hover:border-beige-400 hover:scale-105 active:scale-95 shadow-lg"
              }`}
            >
              {!isOpen ? (
                // Wrapped Gift Box View
                <div className="flex flex-col items-center justify-center py-10 relative">
                  {/* Decorative Ribbons */}
                  <div
                    className={`absolute inset-y-0 w-8 ${v.ribbonColor} opacity-70 left-1/2 -translate-x-1/2 shadow-sm`}
                  />
                  <div
                    className={`absolute inset-x-0 h-8 ${v.ribbonColor} opacity-70 top-1/2 -translate-y-1/2 shadow-sm`}
                  />

                  {/* Bow on Top */}
                  <div className="z-10 w-16 h-16 rounded-full bg-gradient-to-tr from-beige-200 to-white shadow-md flex items-center justify-center border-2 border-beige-400 mb-2 group-hover:scale-110 transition-transform">
                    <Gift className="w-8 h-8 text-warmBrown-700" />
                  </div>

                  <span className="z-10 font-display font-bold text-lg text-warmBrown-950 mt-4 bg-white/90 px-4 py-1 rounded-full backdrop-blur-sm border border-beige-300 shadow-sm">
                    Tap to Unwrap Box #{v.id}
                  </span>
                  <span className="z-10 text-[11px] text-warmBrown-600 mt-1 font-medium">
                    Mystery Gift for Misha
                  </span>
                </div>
              ) : (
                // Unwrapped Voucher Ticket View
                <div className="flex flex-col justify-between h-full animate-in fade-in zoom-in-95 duration-300">
                  <div>
                    {/* Top ticket strip */}
                    <div className="flex items-center justify-between pb-3 border-b border-beige-200 mb-4">
                      <span className="flex items-center gap-1.5 text-xs font-mono text-warmBrown-700 uppercase tracking-wider font-semibold">
                        <Ticket className="w-4 h-4 text-beige-600" />
                        {v.code}
                      </span>
                      <span className="text-[10px] uppercase font-bold text-warmBrown-700 bg-beige-100 px-2 py-0.5 rounded-full border border-beige-300">
                        VIP Pass
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-xl sm:text-2xl text-warmBrown-950 mb-2 leading-tight">
                      {v.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-warmBrown-700 leading-relaxed mb-3">
                      {v.benefit}
                    </p>

                    <p className="text-[11px] text-warmBrown-600 italic border-l-2 border-beige-500 pl-2 mb-4">
                      {v.finePrint}
                    </p>
                  </div>

                  {/* Claim Button */}
                  <div className="pt-3 border-t border-beige-200 flex items-center justify-between">
                    <span className="text-[11px] text-warmBrown-500 font-medium">
                      Exclusively for Misha
                    </span>

                    <button
                      onClick={(e) => handleRedeem(v.id, e)}
                      disabled={isRedeemed}
                      className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                        isRedeemed
                          ? "bg-emerald-100 border border-emerald-400 text-emerald-800 cursor-default"
                          : "bg-gradient-to-r from-beige-700 via-warmBrown-700 to-beige-800 hover:from-beige-800 hover:to-warmBrown-800 text-white shadow-md shadow-beige-900/15 hover:scale-105"
                      }`}
                    >
                      {isRedeemed ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-700" />
                          <span>Claimed!</span>
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>Redeem Voucher</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
