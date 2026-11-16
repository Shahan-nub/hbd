"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { Heart, Sparkles, Stars, Cake, Mail, ChevronDown } from "lucide-react";

export default function Hero() {
  const [loveCount, setLoveCount] = useState(1314);
  const [hasClicked, setHasClicked] = useState(false);
  const [floatingHearts, setFloatingHearts] = useState<{ id: number; x: number; y: number }[]>([]);

  const handleLoveClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setLoveCount((prev) => prev + 1);
    setHasClicked(true);

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newHeart = { id: Date.now() + Math.random(), x, y };
    setFloatingHearts((prev) => [...prev, newHeart]);

    setTimeout(() => {
      setFloatingHearts((prev) => prev.filter((h) => h.id !== newHeart.id));
    }, 1200);

    // Mini confetti burst
    confetti({
      particleCount: 20,
      spread: 60,
      origin: {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      },
      colors: ["#fb7185", "#f43f5e", "#fda4af"],
    });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col items-center justify-center pt-24 pb-16 px-4 text-center overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[600px] h-[340px] sm:h-[600px] bg-rose-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[200px] sm:w-[350px] h-[200px] sm:h-[350px] bg-pink-500/10 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Floating Crown / Sparkle badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-rose-400/30 text-rose-300 text-xs sm:text-sm font-medium mb-6 shadow-lg shadow-rose-950/40 animate-float-slow">
        <Sparkles className="w-4 h-4 text-amber-300 animate-spin-slow" />
        <span className="tracking-wide">Celebrating The One &amp; Only Misha</span>
        <Stars className="w-4 h-4 text-rose-400" />
      </div>

      {/* Main Birthday Greeting */}
      <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight text-white mb-4 leading-tight max-w-5xl">
        Happy Birthday, <br className="hidden sm:block" />
        <span className="text-shimmer drop-shadow-[0_4px_30px_rgba(244,63,94,0.45)]">
          My Sweet Misha
        </span>{" "}
        <span className="inline-block animate-bounce">❤️</span>
      </h1>

      {/* Romantic Tagline */}
      <p className="font-romantic text-2xl sm:text-3xl md:text-4xl text-rose-200/90 max-w-2xl mx-auto mb-6">
        To the most beautiful girl in my universe ✨
      </p>

      {/* Descriptive message */}
      <p className="text-rose-100/75 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
        Today is your special day, Misha. Thank you for filling my world with laughter,
        kindness, and an unmatched warmth. May this year bring you all the love, magic,
        and happiness you so endlessly deserve.
      </p>

      {/* Interactive Love Counter Button */}
      <div className="relative inline-block mb-10">
        <button
          onClick={handleLoveClick}
          className="relative px-6 py-3 rounded-full bg-gradient-to-r from-rose-600 via-pink-600 to-rose-500 hover:from-rose-500 hover:to-pink-500 text-white font-medium text-sm sm:text-base shadow-xl shadow-rose-600/30 hover:shadow-rose-600/50 hover:scale-105 active:scale-95 transition-all flex items-center gap-2.5 mx-auto"
        >
          <Heart
            className={`w-5 h-5 text-rose-100 fill-rose-100 ${
              hasClicked ? "animate-ping" : "animate-pulse"
            }`}
          />
          <span>Send Love to Misha</span>
          <span className="bg-black/30 backdrop-blur-sm px-2.5 py-0.5 rounded-full text-xs font-semibold text-rose-200">
            {loveCount.toLocaleString()}
          </span>
        </button>

        {/* Floating Heart Popups */}
        {floatingHearts.map((h) => (
          <span
            key={h.id}
            style={{ left: `${h.x}px`, top: `${h.y}px` }}
            className="absolute pointer-events-none text-rose-400 font-bold text-lg select-none animate-float-medium transition-all"
          >
            💖 +1
          </span>
        ))}
      </div>

      {/* Quick Action Navigation Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-xl mx-auto">
        <a
          href="#cake"
          className="px-5 py-2.5 rounded-full glass-card hover:bg-rose-500/20 text-rose-100 text-xs sm:text-sm font-semibold border border-rose-500/30 hover:border-rose-400 flex items-center gap-2 transition-all hover:scale-105"
        >
          <Cake className="w-4 h-4 text-pink-400" />
          <span>Blow Out Candles 🎂</span>
        </a>
        <a
          href="#urdu-quotes"
          className="px-5 py-2.5 rounded-full glass-card hover:bg-rose-500/20 text-rose-100 text-xs sm:text-sm font-semibold border border-amber-500/30 hover:border-amber-400 flex items-center gap-2 transition-all hover:scale-105"
        >
          <Sparkles className="w-4 h-4 text-amber-300" />
          <span>Urdu Quotes for You ✨</span>
        </a>
        <a
          href="#letter"
          className="px-5 py-2.5 rounded-full glass-card hover:bg-rose-500/20 text-rose-100 text-xs sm:text-sm font-semibold border border-rose-500/30 hover:border-rose-400 flex items-center gap-2 transition-all hover:scale-105"
        >
          <Mail className="w-4 h-4 text-rose-400" />
          <span>Read My Letter 💌</span>
        </a>
      </div>

      {/* Scroll indicator */}
      <a
        href="#cake"
        className="mt-12 text-rose-400/60 hover:text-rose-300 flex flex-col items-center gap-1 transition-colors animate-bounce cursor-pointer"
        aria-label="Scroll to next section"
      >
        <span className="text-[11px] tracking-widest uppercase">Scroll for Surprises</span>
        <ChevronDown className="w-4 h-4" />
      </a>
    </section>
  );
}
