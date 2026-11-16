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
      const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6 celebratory arpeggio

      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.12);

        gain.gain.setValueAtTime(0.001, ctx.currentTime + idx * 0.12);
        gain.gain.exponentialRampToValueAtTime(0.2, ctx.currentTime + idx * 0.12 + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.12 + 1.2);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(ctx.currentTime + idx * 0.12);
        osc.stop(ctx.currentTime + idx * 0.12 + 1.3);
      });
    } catch {
      // Audio context fall-through safe
    }
  };

  const blowCandles = () => {
    if (candlesBlown) return;
    setCandlesBlown(true);
    setWishRevealed(true);

    playChime();

    // Multi-phase celebratory fireworks confetti
    const end = Date.now() + 2.5 * 1000;
    const colors = ["#fb7185", "#f43f5e", "#fda4af", "#fde047", "#ffffff", "#c084fc"];

    const frame = () => {
      confetti({
        particleCount: 6,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
      });
      confetti({
        particleCount: 6,
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
      <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-rose-500/30 shadow-2xl relative overflow-hidden">
        {/* Glow backdrop */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Section title */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-950/60 border border-rose-500/30 text-rose-300 text-xs font-semibold mb-3">
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>Make A Birthday Wish</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-2">
          Misha&apos;s Birthday Cake 🎂
        </h2>
        <p className="text-rose-200/80 text-sm sm:text-base max-w-md mx-auto mb-10">
          Close your eyes, make the sweetest wish in your heart, and click to blow out the candles!
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
                    <div className="candle-smoke text-rose-300/60 text-xs font-mono select-none">
                      💨
                    </div>
                  )}
                </div>

                {/* Candle wick */}
                <div className="w-1 h-2 bg-neutral-700 rounded-t" />

                {/* Candle Body */}
                <div className="w-4 sm:w-5 h-14 sm:h-16 rounded-t-sm bg-gradient-to-r from-pink-300 via-rose-100 to-pink-300 shadow-md border-x border-pink-400/40 relative overflow-hidden">
                  {/* Candle stripes */}
                  <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,#f43f5e,#f43f5e_4px,transparent_4px,transparent_10px)] opacity-60" />
                </div>
              </div>
            ))}
          </div>

          {/* Tier 1 (Top Tier) */}
          <div className="w-36 sm:w-44 h-14 rounded-t-2xl bg-gradient-to-r from-rose-400 via-pink-300 to-rose-400 shadow-lg relative border-t-2 border-rose-200/70 z-10 flex items-center justify-center">
            {/* Strawberries / Cherries on top */}
            <div className="absolute -top-3 flex justify-around w-full px-2">
              <span className="text-sm transform -rotate-12">🍓</span>
              <span className="text-sm">🍓</span>
              <span className="text-sm transform rotate-12">🍓</span>
            </div>
            {/* Frosting drippings */}
            <div className="w-full h-full flex justify-around items-end pb-1 text-white/90 text-xs font-bold tracking-widest uppercase">
              Misha
            </div>
          </div>

          {/* Tier 2 (Middle Tier) */}
          <div className="w-52 sm:w-64 h-16 rounded-t-2xl bg-gradient-to-r from-rose-500 via-pink-400 to-rose-500 shadow-xl relative border-t-2 border-pink-200/70 -mt-1 flex items-center justify-center">
            <div className="text-rose-100 font-romantic text-2xl tracking-wide drop-shadow">
              Sweetest Queen
            </div>
          </div>

          {/* Tier 3 (Bottom Tier) */}
          <div className="w-68 sm:w-80 h-20 rounded-t-2xl bg-gradient-to-r from-rose-700 via-pink-600 to-rose-700 shadow-2xl relative border-t-2 border-pink-300/60 -mt-1 flex items-center justify-around px-4">
            <span className="text-base">✨</span>
            <span className="text-white/90 font-display font-bold tracking-wider text-sm sm:text-base">
              HAPPY BIRTHDAY
            </span>
            <span className="text-base">✨</span>
          </div>

          {/* Plate / Stand */}
          <div className="w-80 sm:w-96 h-4 rounded-full bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-200 shadow-2xl border-t border-amber-300" />
        </div>

        {/* Action Controls */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {!candlesBlown ? (
            <button
              onClick={blowCandles}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-amber-400 via-rose-500 to-pink-500 hover:from-amber-300 hover:to-pink-400 text-white font-bold text-sm sm:text-base shadow-xl shadow-rose-600/40 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
            >
              <Flame className="w-4 h-4 text-amber-200 animate-bounce" />
              <span>Blow Out the Candles! 💨</span>
            </button>
          ) : (
            <button
              onClick={relightCandles}
              className="px-5 py-2.5 rounded-full bg-rose-950/70 hover:bg-rose-900 border border-rose-500/40 text-rose-200 hover:text-white font-semibold text-xs sm:text-sm flex items-center gap-2 transition-all hover:scale-105"
            >
              <RotateCcw className="w-4 h-4 text-rose-400" />
              <span>Light Candles Again</span>
            </button>
          )}
        </div>

        {/* Secret Wish Reveal Message Card */}
        {wishRevealed && (
          <div className="mt-8 p-6 rounded-2xl bg-gradient-to-b from-rose-950/90 to-black/80 border border-amber-400/40 shadow-2xl max-w-xl mx-auto animate-in fade-in zoom-in-95 duration-500">
            <div className="flex items-center justify-center gap-2 text-amber-300 font-display text-xl sm:text-2xl font-bold mb-2">
              <Sparkles className="w-5 h-5 text-amber-300 animate-spin-slow" />
              <span>Your Wish Is Whispered to Heaven!</span>
              <Sparkles className="w-5 h-5 text-amber-300 animate-spin-slow" />
            </div>
            <p className="text-rose-100 text-sm sm:text-base leading-relaxed mb-3">
              May every silent prayer of your heart, Misha, turn into a blooming blessing.
              You deserve every ounce of joy, triumph, peace, and eternal love this universe
              can possibly offer.
            </p>
            <div className="flex items-center justify-center gap-2 text-rose-300 font-romantic text-2xl pt-2 border-t border-rose-500/20">
              <Heart className="w-4 h-4 fill-rose-400 text-rose-400" />
              <span>Forever yours, on your birthday and always</span>
              <Heart className="w-4 h-4 fill-rose-400 text-rose-400" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
