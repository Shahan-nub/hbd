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

    confetti({
      particleCount: 22,
      spread: 60,
      origin: {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      },
      colors: ["#c5a47e", "#b38d64", "#d7be9f", "#e6d5bf", "#f5f0e8"],
    });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col items-center justify-center pt-24 sm:pt-28 pb-12 sm:pb-16 px-3 sm:px-4 text-center overflow-hidden"
    >
      {/* Warm beige ambient glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[650px] h-[300px] sm:h-[650px] bg-beige-300/40 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/5 w-[180px] sm:w-[380px] h-[180px] sm:h-[380px] bg-champagne-300/30 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[200px] sm:w-[420px] h-[200px] sm:h-[420px] bg-beige-200/50 rounded-full blur-[100px] pointer-events-none" />

      {/* Decorative Badge */}
      <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full glass-card border border-beige-300/90 text-warmBrown-700 text-xs sm:text-sm font-medium mb-4 sm:mb-6 shadow-sm animate-float-slow">
        <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-beige-600 animate-spin-slow" />
        <span className="tracking-wide">Celebrating The One &amp; Only Misha</span>
        <Stars className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-beige-500" />
      </div>

      {/* Main Greeting */}
      <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight text-warmBrown-950 mb-3 sm:mb-4 leading-tight max-w-5xl px-2">
        Happy Birthday, <br className="hidden sm:block" />
        <span className="text-shimmer drop-shadow-sm">
          My Sweet Misha
        </span>{" "}
        <span className="inline-block animate-bounce text-beige-700">❤️</span>
      </h1>

      {/* Romantic Tagline */}
      <p className="font-romantic text-xl sm:text-3xl md:text-4xl text-warmBrown-700 max-w-2xl mx-auto mb-4 sm:mb-6 px-2">
        To the most beautiful girl in my universe ✨
      </p>

      {/* Descriptive Message */}
      <p className="text-warmBrown-600 text-xs sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-8 px-3">
        Today is your day, Misha. Thank you for filling my life with peace, effortless laughter,
        and unmatched warmth. May this new year bring you all the love, gentle joys, and
        dreams your heart has ever wished for.
      </p>

      {/* Interactive Love Counter Button */}
      <div className="relative inline-block mb-8 sm:mb-10">
        <button
          onClick={handleLoveClick}
          className="relative px-5 py-3 sm:px-7 sm:py-3.5 rounded-full bg-gradient-to-r from-beige-700 via-warmBrown-700 to-beige-800 hover:from-beige-800 hover:to-warmBrown-800 text-white font-medium text-xs sm:text-base shadow-lg shadow-beige-900/15 hover:shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2 mx-auto"
        >
          <Heart
            className={`w-4 h-4 sm:w-5 sm:h-5 text-champagne-300 fill-champagne-300 ${
              hasClicked ? "animate-ping" : "animate-pulse"
            }`}
          />
          <span>Send Love to Misha</span>
          <span className="bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded-full text-[11px] sm:text-xs font-semibold text-champagne-100">
            {loveCount.toLocaleString()}
          </span>
        </button>

        {/* Floating Heart Popups */}
        {floatingHearts.map((h) => (
          <span
            key={h.id}
            style={{ left: `${h.x}px`, top: `${h.y}px` }}
            className="absolute pointer-events-none text-beige-800 font-bold text-sm sm:text-base select-none animate-float-medium transition-all"
          >
            🤍 +1
          </span>
        ))}
      </div>

      {/* Quick Navigation Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 max-w-xl mx-auto px-2">
        <a
          href="#cake"
          className="px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-full glass-card hover:bg-beige-200/60 text-warmBrown-800 text-xs sm:text-sm font-semibold border border-beige-300 hover:border-beige-400 flex items-center gap-1.5 sm:gap-2 transition-all hover:scale-105"
        >
          <Cake className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-beige-600" />
          <span>Blow Out Candles 🎂</span>
        </a>
        <a
          href="#urdu-quotes"
          className="px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-full glass-card hover:bg-beige-200/60 text-warmBrown-800 text-xs sm:text-sm font-semibold border border-beige-300 hover:border-beige-400 flex items-center gap-1.5 sm:gap-2 transition-all hover:scale-105"
        >
          <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-beige-600" />
          <span>Urdu Quotes ✨</span>
        </a>
        <a
          href="#letter"
          className="px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-full glass-card hover:bg-beige-200/60 text-warmBrown-800 text-xs sm:text-sm font-semibold border border-beige-300 hover:border-beige-400 flex items-center gap-1.5 sm:gap-2 transition-all hover:scale-105"
        >
          <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-beige-600" />
          <span>Read My Letter 💌</span>
        </a>
      </div>

      {/* Scroll indicator */}
      <a
        href="#cake"
        className="mt-12 text-warmBrown-400 hover:text-warmBrown-600 flex flex-col items-center gap-1 transition-colors animate-bounce cursor-pointer"
        aria-label="Scroll to next section"
      >
        <span className="text-[11px] tracking-widest uppercase font-medium">Scroll for Surprises</span>
        <ChevronDown className="w-4 h-4" />
      </a>
    </section>
  );
}
