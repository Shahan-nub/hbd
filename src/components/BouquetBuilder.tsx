"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { Sparkles, Heart, RotateCcw } from "lucide-react";

interface FlowerOption {
  id: string;
  emoji: string;
  name: string;
  meaning: string;
  color: string;
}

export default function BouquetBuilder() {
  const [bouquet, setBouquet] = useState<string[]>(["🌹", "🌷", "🌻"]);
  const [presented, setPresented] = useState(false);

  const flowers: FlowerOption[] = [
    { id: "rose", emoji: "🌹", name: "Red Rose", meaning: "Timeless & unconditional love", color: "text-rose-400" },
    { id: "tulip", emoji: "🌷", name: "Pink Tulip", meaning: "Gentle affection & adoration", color: "text-pink-400" },
    { id: "sunflower", emoji: "🌻", name: "Sunflower", meaning: "Radiant warmth & pure sunshine", color: "text-amber-400" },
    { id: "lily", emoji: "🪷", name: "Lotus & Lily", meaning: "Elegance, grace & serenity", color: "text-rose-200" },
    { id: "lavender", emoji: "🪻", name: "Lavender", meaning: "Devotion & peaceful dreams", color: "text-purple-400" },
    { id: "daisy", emoji: "🌼", name: "Daisy", meaning: "Spontaneous laughter & happiness", color: "text-yellow-300" },
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
      particleCount: 60,
      spread: 80,
      colors: ["#fb7185", "#f43f5e", "#fda4af", "#fde047", "#34d399"],
    });
  };

  return (
    <section className="relative py-20 px-4 max-w-4xl mx-auto text-center">
      <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-rose-500/30 shadow-2xl relative overflow-hidden">
        {/* Header */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-950/60 border border-rose-500/30 text-rose-300 text-xs font-semibold mb-3">
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>Interactive Flower Garden</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-2">
          Build a Birthday Bouquet for Misha 💐
        </h2>
        <p className="text-rose-200/80 text-sm sm:text-base max-w-md mx-auto mb-8">
          Tap each flower below to add it to your custom bouquet. Every bloom carries a
          special meaning!
        </p>

        {/* Flower Selection Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 mb-8">
          {flowers.map((f) => (
            <button
              key={f.id}
              onClick={() => addFlower(f.emoji)}
              disabled={bouquet.length >= 12}
              className="p-3 rounded-2xl glass-card border border-rose-500/20 hover:border-rose-400/50 hover:bg-rose-950/50 transition-all flex flex-col items-center group active:scale-90"
            >
              <span className="text-3xl group-hover:scale-125 transition-transform mb-1">
                {f.emoji}
              </span>
              <span className="text-xs font-semibold text-rose-100">{f.name}</span>
              <span className="text-[10px] text-rose-300/70 leading-tight mt-0.5">
                {f.meaning}
              </span>
            </button>
          ))}
        </div>

        {/* Assembled Bouquet Display */}
        <div className="p-6 rounded-2xl bg-black/40 border border-rose-500/30 max-w-lg mx-auto mb-6 relative">
          <span className="text-xs font-mono text-rose-400 uppercase tracking-widest block mb-2">
            Misha&apos;s Flower Basket ({bouquet.length}/12 blooms)
          </span>

          <div className="min-h-[70px] flex flex-wrap items-center justify-center gap-2 text-3xl sm:text-4xl py-2">
            {bouquet.length === 0 ? (
              <span className="text-xs text-rose-300/50 italic">
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

          {/* Ribbon Wrap */}
          {bouquet.length > 0 && (
            <div className="mt-3 pt-3 border-t border-rose-500/20 text-xs text-rose-200/90 font-serif italic flex items-center justify-center gap-2">
              <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
              <span>Wrapped in golden ribbon with eternal love</span>
              <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {bouquet.length > 0 && !presented && (
            <button
              onClick={presentBouquet}
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-400 hover:to-pink-500 text-white font-bold text-sm shadow-xl shadow-rose-600/30 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
            >
              <span>Present Bouquet to Misha 💐</span>
            </button>
          )}

          {bouquet.length > 0 && (
            <button
              onClick={clearBouquet}
              className="px-4 py-2.5 rounded-full bg-rose-950/60 hover:bg-rose-900 border border-rose-500/30 text-rose-300 text-xs font-semibold flex items-center gap-1.5 transition-all"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Garden</span>
            </button>
          )}
        </div>

        {/* Presented Message */}
        {presented && (
          <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-rose-950/80 to-pink-950/80 border border-rose-400/40 text-center max-w-md mx-auto animate-in fade-in duration-300">
            <p className="font-romantic text-2xl text-rose-200 mb-1">
              For You, Misha ❤️
            </p>
            <p className="text-xs text-rose-100/90 leading-relaxed">
              May your year bloom with endless laughter, gentle peace, and all the sweet
              scents of happiness!
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
