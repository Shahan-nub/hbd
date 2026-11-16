"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { Sparkles, RotateCcw, Heart, Flame } from "lucide-react";

export default function BirthdayCake() {
  const [candlesBlown, setCandlesBlown] = useState(false);
  const [wishRevealed, setWishRevealed] = useState(false);

  const playChime = () => {
    try {
      const AudioContextClass =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioContextClass();
      const notes = [523.25, 659.25, 783.99, 1046.5];

      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.12);

        gain.gain.setValueAtTime(0.001, ctx.currentTime + idx * 0.12);
        gain.gain.exponentialRampToValueAtTime(0.18, ctx.currentTime + idx * 0.12 + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.12 + 1.2);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(ctx.currentTime + idx * 0.12);
        osc.stop(ctx.currentTime + idx * 0.12 + 1.3);
      });
    } catch {
      // Audio safety
    }
  };

  const blowCandles = () => {
    if (candlesBlown) return;
    setCandlesBlown(true);
    setWishRevealed(true);

    playChime();

    const end = Date.now() + 2.5 * 1000;
    const colors = ["#d7be9f", "#c5a47e", "#b38d64", "#e6d5bf", "#f5e8d3", "#fef3c7"];

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  };

  const relightCandles = () => {
    setCandlesBlown(false);
    setWishRevealed(false);
  };

  return (
    <section id="cake" className="relative py-20 px-4 text-center max-w-4xl mx-auto">
      <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-beige-300 shadow-xl relative overflow-hidden">
        {/* Soft background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-beige-200/50 rounded-full blur-3xl pointer-events-none" />

        {/* Section title */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-beige-100 border border-beige-300 text-warmBrown-700 text-xs font-semibold mb-3">
          <Sparkles className="w-3.5 h-3.5 text-beige-600" />
          <span>Make A Birthday Wish</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-warmBrown-950 mb-2">
          Misha&apos;s Birthday Cake 🎂
        </h2>
        <p className="text-warmBrown-600 text-sm sm:text-base max-w-md mx-auto mb-10">
          Close your eyes, make a gentle wish in your heart, and tap to blow out the candles!
        </p>

        {/* Cake Container */}
        <div className="relative flex flex-col items-center justify-center my-6 select-none">
          {/* Candles Row */}
          <div className="flex justify-center items-end gap-6 sm:gap-10 mb-[-6px] z-20">
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex flex-col items-center cursor-pointer" onClick={blowCandles}>
                {/* Flame or Smoke */}
                <div className="h-8 flex items-center justify-center">
                  {!candlesBlown ? (
                    <div
                      className="flame"
                      style={{
                        animationDelay: `${i * 0.25}s`,
                      }}
                    />
                  ) : (
                    <div className="candle-smoke text-warmBrown-400 text-xs font-mono select-none">
                      💨
                    </div>
                  )}
                </div>

                {/* Candle wick */}
                <div className="w-1 h-2 bg-warmBrown-700 rounded-t" />

                {/* Candle Body */}
                <div className="w-4 sm:w-5 h-14 sm:h-16 rounded-t-sm bg-gradient-to-r from-beige-100 via-champagne-100 to-beige-200 shadow-sm border-x border-beige-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,#c5a47e,#c5a47e_3px,transparent_3px,transparent_8px)] opacity-50" />
                </div>
              </div>
            ))}
          </div>

          {/* Tier 1 (Top Tier - Almond Cream) */}
          <div className="w-36 sm:w-44 h-14 rounded-t-2xl bg-gradient-to-r from-beige-200 via-champagne-100 to-beige-200 shadow-md relative border-t-2 border-beige-100 z-10 flex items-center justify-center">
            <div className="absolute -top-3 flex justify-around w-full px-2">
              <span className="text-sm transform -rotate-12">✨</span>
              <span className="text-sm">🤍</span>
              <span className="text-sm transform rotate-12">✨</span>
            </div>
            <div className="w-full h-full flex justify-around items-end pb-1 text-warmBrown-800 text-xs font-bold tracking-widest uppercase">
              Misha
            </div>
          </div>

          {/* Tier 2 (Middle Tier - Soft Latte Cream) */}
          <div className="w-52 sm:w-64 h-16 rounded-t-2xl bg-gradient-to-r from-beige-300 via-beige-200 to-beige-300 shadow-lg relative border-t-2 border-beige-100 -mt-1 flex items-center justify-center">
            <div className="text-warmBrown-800 font-romantic text-2xl tracking-wide drop-shadow-sm">
              Sweetest Soul
            </div>
          </div>

          {/* Tier 3 (Bottom Tier - Warm Caramel / Taupe) */}
          <div className="w-68 sm:w-80 h-20 rounded-t-2xl bg-gradient-to-r from-beige-400 via-beige-300 to-beige-400 shadow-xl relative border-t-2 border-beige-200 -mt-1 flex items-center justify-around px-4">
            <span className="text-base text-warmBrown-700">✦</span>
            <span className="text-warmBrown-950 font-display font-bold tracking-wider text-sm sm:text-base">
              HAPPY BIRTHDAY
            </span>
            <span className="text-base text-warmBrown-700">✦</span>
          </div>

          {/* Plate / Stand */}
          <div className="w-80 sm:w-96 h-4 rounded-full bg-gradient-to-r from-beige-300 via-champagne-200 to-beige-300 shadow-md border-t border-beige-400" />
        </div>

        {/* Action Controls */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {!candlesBlown ? (
            <button
              onClick={blowCandles}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-beige-700 via-warmBrown-700 to-beige-800 hover:from-beige-800 hover:to-warmBrown-800 text-white font-bold text-sm sm:text-base shadow-lg shadow-beige-900/15 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
            >
              <Flame className="w-4 h-4 text-champagne-300 animate-bounce" />
              <span>Blow Out the Candles! 💨</span>
            </button>
          ) : (
            <button
              onClick={relightCandles}
              className="px-5 py-2.5 rounded-full bg-beige-100 hover:bg-beige-200 border border-beige-300 text-warmBrown-800 font-semibold text-xs sm:text-sm flex items-center gap-2 transition-all hover:scale-105"
            >
              <RotateCcw className="w-4 h-4 text-beige-600" />
              <span>Light Candles Again</span>
            </button>
          )}
        </div>

        {/* Secret Wish Reveal Message Card */}
        {wishRevealed && (
          <div className="mt-8 p-6 rounded-2xl bg-white border border-beige-300 shadow-xl max-w-xl mx-auto animate-in fade-in zoom-in-95 duration-500">
            <div className="flex items-center justify-center gap-2 text-warmBrown-900 font-display text-xl sm:text-2xl font-bold mb-2">
              <Sparkles className="w-5 h-5 text-beige-600 animate-spin-slow" />
              <span>Your Wish Is Whispered to the Stars!</span>
              <Sparkles className="w-5 h-5 text-beige-600 animate-spin-slow" />
            </div>
            <p className="text-warmBrown-700 text-sm sm:text-base leading-relaxed mb-3">
              May every quiet prayer of your heart, Misha, turn into a blooming reality.
              You deserve endless peace, pure happiness, and boundless joy today and always.
            </p>
            <div className="flex items-center justify-center gap-2 text-warmBrown-600 font-romantic text-2xl pt-2 border-t border-beige-200">
              <Heart className="w-4 h-4 fill-beige-600 text-beige-600" />
              <span>Forever yours, on your birthday and always</span>
              <Heart className="w-4 h-4 fill-beige-600 text-beige-600" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
