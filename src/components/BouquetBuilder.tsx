"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { Sparkles, Heart, RotateCcw } from "lucide-react";

interface FlowerOption {
  id: string;
  emoji: string;
  name: string;
  meaning: string;
}

export default function BouquetBuilder() {
  const [bouquet, setBouquet] = useState<string[]>(["🌹", "🌷", "🌻"]);
  const [presented, setPresented] = useState(false);

  const flowers: FlowerOption[] = [
    { id: "rose", emoji: "🌹", name: "Red Rose", meaning: "Timeless & unconditional love" },
    { id: "tulip", emoji: "🌷", name: "Pink Tulip", meaning: "Gentle affection & adoration" },
    { id: "sunflower", emoji: "🌻", name: "Sunflower", meaning: "Radiant warmth & pure sunshine" },
    { id: "lily", emoji: "🪷", name: "Lotus & Lily", meaning: "Elegance, grace & serenity" },
    { id: "lavender", emoji: "🪻", name: "Lavender", meaning: "Devotion & peaceful dreams" },
    { id: "daisy", emoji: "🌼", name: "Daisy", meaning: "Spontaneous laughter & joy" },
  ];

  const addFlower = (emoji: string) => {
    if (bouquet.length < 12) {
      setBouquet((prev) => [...prev, emoji]);
    }
  };

  const clearBouquet = () => {
    setBouquet([]);
    setPresented(false);
  };

  const presentBouquet = () => {
    setPresented(true);
    confetti({
      particleCount: 50,
      spread: 80,
      colors: ["#c5a47e", "#b38d64", "#d7be9f", "#e6d5bf", "#f5e8d3"],
    });
  };

  return (
    <section className="relative py-14 sm:py-20 px-3 sm:px-4 max-w-4xl mx-auto text-center">
      <div className="glass-panel rounded-2xl sm:rounded-3xl p-4 sm:p-10 border border-beige-300 shadow-xl relative overflow-hidden">
        {/* Header */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-beige-100 border border-beige-300 text-warmBrown-700 text-xs font-semibold mb-2 sm:mb-3">
          <Sparkles className="w-3.5 h-3.5 text-beige-600" />
          <span>Interactive Flower Garden</span>
        </div>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-bold text-warmBrown-950 mb-2">
          Build a Birthday Bouquet for Misha 💐
        </h2>
        <p className="text-warmBrown-600 text-xs sm:text-base max-w-md mx-auto mb-6 sm:mb-8 px-2">
          Tap each flower below to add it to your custom bouquet. Every bloom carries a
          special meaning!
        </p>

        {/* Flower Selection Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 sm:gap-3 mb-6 sm:mb-8">
          {flowers.map((f) => (
            <button
              key={f.id}
              onClick={() => addFlower(f.emoji)}
              disabled={bouquet.length >= 12}
              className="p-2 sm:p-3 rounded-xl sm:rounded-2xl glass-card border border-beige-300 hover:border-beige-500 hover:bg-white transition-all flex flex-col items-center group active:scale-90"
            >
              <span className="text-2xl sm:text-3xl group-hover:scale-125 transition-transform mb-1">
                {f.emoji}
              </span>
              <span className="text-xs font-semibold text-warmBrown-900">{f.name}</span>
              <span className="text-[10px] text-warmBrown-500 leading-tight mt-0.5">
                {f.meaning}
              </span>
            </button>
          ))}
        </div>

        {/* Assembled Bouquet Display */}
        <div className="p-6 rounded-2xl bg-white border border-beige-300 max-w-lg mx-auto mb-6 relative shadow-sm">
          <span className="text-xs font-mono text-warmBrown-600 uppercase tracking-widest block mb-2 font-bold">
            Misha&apos;s Flower Basket ({bouquet.length}/12 blooms)
          </span>

          <div className="min-h-[70px] flex flex-wrap items-center justify-center gap-2 text-3xl sm:text-4xl py-2">
            {bouquet.length === 0 ? (
              <span className="text-xs text-warmBrown-400 italic">
                Your basket is empty. Tap any flower above to start!
              </span>
            ) : (
              bouquet.map((emoji, index) => (
                <span
                  key={index}
                  className="animate-in zoom-in-75 duration-200 hover:scale-125 transition-transform cursor-pointer"
                  title="Flower for Misha"
                >
                  {emoji}
                </span>
              ))
            )}
          </div>

          {bouquet.length > 0 && (
            <div className="mt-3 pt-3 border-t border-beige-200 text-xs text-warmBrown-700 font-serif italic flex items-center justify-center gap-2">
              <Heart className="w-3.5 h-3.5 text-beige-600 fill-beige-600" />
              <span>Wrapped in golden linen ribbon with eternal love</span>
              <Heart className="w-3.5 h-3.5 text-beige-600 fill-beige-600" />
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {bouquet.length > 0 && !presented && (
            <button
              onClick={presentBouquet}
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-beige-700 via-warmBrown-700 to-beige-800 hover:from-beige-800 hover:to-warmBrown-800 text-white font-bold text-sm shadow-md shadow-beige-900/15 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
            >
              <span>Present Bouquet to Misha 💐</span>
            </button>
          )}

          {bouquet.length > 0 && (
            <button
              onClick={clearBouquet}
              className="px-4 py-2.5 rounded-full bg-beige-100 hover:bg-beige-200 border border-beige-300 text-warmBrown-800 text-xs font-semibold flex items-center gap-1.5 transition-all"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Garden</span>
            </button>
          )}
        </div>

        {/* Presented Message */}
        {presented && (
          <div className="mt-6 p-4 rounded-xl bg-white border border-beige-300 text-center max-w-md mx-auto shadow-sm animate-in fade-in duration-300">
            <p className="font-romantic text-2xl text-warmBrown-900 mb-1">
              For You, Misha ❤️
            </p>
            <p className="text-xs text-warmBrown-700 leading-relaxed">
              May your year bloom with endless laughter, gentle peace, and all the sweet
              scents of happiness!
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
