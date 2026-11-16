"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { Gift, Sparkles, Check, Ticket, Heart, Smile } from "lucide-react";

interface Voucher {
  id: number;
  boxTeaser: string;
  ribbonColor: string;
  title: string;
  code: string;
  cuteLine: string;
  benefit: string;
  finePrint: string;
}

export default function SurpriseBoxes() {
  const [openedBoxes, setOpenedBoxes] = useState<number[]>([]);
  const [redeemed, setRedeemed] = useState<number[]>([]);

  const vouchers: Voucher[] = [
    {
      id: 1,
      boxTeaser: "Emergency Cuddles 🤍",
      ribbonColor: "bg-beige-400",
      title: "Unlimited Forehead Kisses & Infinite Hugs",
      code: "MISHA-HUG-INFINITY",
      cuteLine: "Warning: Hugs guaranteed to last until all your stress melts away. Will not let go even if you squirm!",
      benefit: "Redeemable at any hour of the day or night. Because being wrapped in my arms is your permanent home.",
      finePrint: "Includes free cheek kisses, soft head pats, and whispering cute things in your ear.",
    },
    {
      id: 2,
      boxTeaser: "Feed My Queen 🍰",
      ribbonColor: "bg-champagne-400",
      title: "The 'You Pick The Food' Feast Pass",
      code: "MISHA-FEAST-VIP",
      cuteLine: "Even if you say 'I don't know, whatever you want' 7 times in a row, I'll keep guessing until we get your craving!",
      benefit: "Any restaurant you crave, any dessert you want, 100% on me. Your only job is to look pretty and enjoy your food.",
      finePrint: "Zero cooking, zero dishes, and stealing fries off my plate is 100% legally permitted.",
    },
    {
      id: 3,
      boxTeaser: "Midnight Escape 🚗",
      ribbonColor: "bg-beige-500",
      title: "Late Night Drive & Sweet Cravings Pass",
      code: "MISHA-MIDNIGHT-SWEETS",
      cuteLine: "Messy bun, oversized hoodie, and you get 100% uncontested control over the aux cord playlist!",
      benefit: "Windows cracked open, cool breeze, city lights glowing, and listening to you ramble happily about anything under the night sky.",
      finePrint: "Valid at 1:00 AM, 3:00 AM, or whenever your sweet tooth demands ice cream or snacks.",
    },
    {
      id: 4,
      boxTeaser: "Royal Pampering 👑",
      ribbonColor: "bg-warmBrown-400",
      title: "Queen For The Whole Day Royal Decree",
      code: "MISHA-ROYAL-RULE",
      cuteLine: "I will literally say 'Yes, my Queen' to everything you ask with a huge goofy smile on my face!",
      benefit: "You already rule my heart 365 days a year, but today you get the official royal pampering treatment from sunrise to sunset.",
      finePrint: "Includes neck & head massages, fetching snacks on demand, and zero sassy replies from me allowed.",
    },
    {
      id: 5,
      boxTeaser: "Instant Argument Win 🏆",
      ribbonColor: "bg-beige-300",
      title: "The 'Misha Is Always Right' Golden Card",
      code: "MISHA-INSTANT-WIN",
      cuteLine: "Show me this card and I will immediately surrender, apologize dramatically, and bring you your favorite boba or treat!",
      benefit: "Instant victory during playful bickering or choosing what movie to watch. Even when you're slightly wrong, you're still totally right.",
      finePrint: "Lifetime validity. Can be pulled out from your pocket anytime you need an instant win.",
    },
    {
      id: 6,
      boxTeaser: "Forever Safe Haven 🌟",
      ribbonColor: "bg-champagne-300",
      title: "The 'Lifetime Anchor & Safe Place' Voucher",
      code: "MISHA-SAFE-HAVEN",
      cuteLine: "Whenever the world gets too loud, remember you have a lifetime permanent reservation in my safe corner.",
      benefit: "You will never have to face a hard day, an anxious moment, or a scary hurdle alone as long as I have breath in my lungs.",
      finePrint: "Non-negotiable, non-transferable, backed by infinite love and loyalty forever.",
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
    <section id="gifts" className="relative py-14 sm:py-20 px-3 sm:px-4 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-10 sm:mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-beige-100 border border-beige-300 text-warmBrown-700 text-xs font-semibold mb-2 sm:mb-3">
          <Gift className="w-3.5 h-3.5 text-beige-600" />
          <span>Birthday Surprise Boxes</span>
        </div>
        <h2 className="text-2xl sm:text-5xl font-display font-bold text-warmBrown-950 mb-2 sm:mb-3 px-2">
          Special Love Vouchers for Misha 🎁
        </h2>
        <p className="text-warmBrown-600 text-xs sm:text-base max-w-md mx-auto px-2">
          Tap each mystery gift box to unwrap your cute birthday coupons and sweet promises!
        </p>
      </div>

      {/* Boxes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {vouchers.map((v) => {
          const isOpen = openedBoxes.includes(v.id);
          const isRedeemed = redeemed.includes(v.id);

          return (
            <div
              key={v.id}
              onClick={() => handleOpen(v.id)}
              className={`rounded-2xl sm:rounded-3xl p-4 sm:p-6 transition-all duration-300 relative cursor-pointer overflow-hidden border ${
                isOpen
                  ? "glass-card border-beige-400 shadow-md"
                  : "bg-gradient-to-br from-beige-100 via-beige-50 to-beige-200 border-beige-300 hover:border-beige-400 hover:scale-[1.01] active:scale-95 shadow-lg"
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

                  <span className="z-10 font-display font-bold text-lg text-warmBrown-950 mt-4 bg-white/95 px-4 py-1 rounded-full backdrop-blur-sm border border-beige-300 shadow-sm">
                    {v.boxTeaser}
                  </span>
                  <span className="z-10 text-[11px] text-warmBrown-600 mt-1 font-medium">
                    Tap to unwrap Box #{v.id}
                  </span>
                </div>
              ) : (
                // Unwrapped Voucher Ticket View
                <div className="flex flex-col justify-between h-full animate-in fade-in zoom-in-95 duration-300">
                  <div>
                    {/* Top ticket strip */}
                    <div className="flex items-center justify-between pb-3 border-b border-beige-200 mb-3">
                      <span className="flex items-center gap-1.5 text-xs font-mono text-warmBrown-700 uppercase tracking-wider font-semibold">
                        <Ticket className="w-4 h-4 text-beige-600" />
                        {v.code}
                      </span>
                      <span className="text-[10px] uppercase font-bold text-warmBrown-700 bg-beige-100 px-2 py-0.5 rounded-full border border-beige-300">
                        Box #{v.id} VIP Pass
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-xl text-warmBrown-950 mb-2 leading-tight">
                      {v.title}
                    </h3>

                    {/* Cute Line Feature Box */}
                    <div className="p-3 rounded-2xl bg-beige-100/80 border border-beige-300/80 my-3">
                      <div className="flex items-center gap-1 text-[11px] font-bold text-beige-800 uppercase tracking-wider mb-1">
                        <Smile className="w-3.5 h-3.5 text-beige-700" />
                        <span>Cute Line for Misha:</span>
                      </div>
                      <p className="text-xs sm:text-sm text-warmBrown-900 font-medium italic leading-relaxed">
                        &ldquo;{v.cuteLine}&rdquo;
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-warmBrown-700 leading-relaxed mb-3">
                      {v.benefit}
                    </p>

                    <p className="text-[11px] text-warmBrown-600 italic border-l-2 border-beige-500 pl-2 mb-4">
                      {v.finePrint}
                    </p>
                  </div>

                  {/* Claim Button */}
                  <div className="pt-3 border-t border-beige-200 flex items-center justify-between">
                    <span className="text-[11px] text-warmBrown-500 font-medium flex items-center gap-1">
                      <Heart className="w-3 h-3 text-beige-600 fill-beige-600" />
                      <span>For Misha Only</span>
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
                          <span>Claimed! 📸</span>
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
