"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { Heart, Sparkles, ArrowUp, Share2, Check } from "lucide-react";

export default function Footer() {
  const [copiedLink, setCopiedLink] = useState(false);

  const triggerGrandCelebration = () => {
    const duration = 3 * 1000;
    const end = Date.now() + duration;

    const interval: NodeJS.Timeout = setInterval(() => {
      if (Date.now() > end) {
        return clearInterval(interval);
      }
      confetti({
        startVelocity: 30,
        spread: 360,
        ticks: 60,
        origin: { x: Math.random(), y: Math.random() - 0.2 },
        colors: ["#c5a47e", "#b38d64", "#d7be9f", "#e6d5bf", "#f5e8d3", "#fef3c7"],
      });
    }, 250);
  };

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative pt-20 pb-28 px-4 border-t border-beige-300 text-center overflow-hidden bg-beige-100/50">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-beige-300/30 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
        {/* Animated Heart Icon */}
        <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-beige-700 to-warmBrown-700 flex items-center justify-center shadow-md mb-4 animate-bounce">
          <Heart className="w-6 h-6 text-white fill-white" />
        </div>

        <h3 className="text-2xl sm:text-4xl font-display font-bold text-warmBrown-950 mb-2">
          Happy Birthday, Misha ❤️
        </h3>

        <p className="font-romantic text-2xl sm:text-3xl text-warmBrown-700 mb-6">
          You are loved beyond words and cherished beyond measure.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3 mb-8 sm:mb-10 w-full max-w-md sm:max-w-none">
          <button
            onClick={triggerGrandCelebration}
            className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-gradient-to-r from-beige-700 via-warmBrown-700 to-beige-800 hover:from-beige-800 hover:to-warmBrown-800 text-white font-bold text-xs sm:text-sm shadow-md shadow-beige-900/15 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-champagne-300 animate-spin-slow" />
            <span>Launch Grand Fireworks! 🎆</span>
          </button>

          <button
            onClick={handleShare}
            className="w-full sm:w-auto px-5 py-2.5 rounded-full glass-card hover:bg-beige-200/80 text-warmBrown-800 font-semibold text-xs sm:text-sm border border-beige-300 flex items-center justify-center gap-2 transition-all"
            title="Copy link to send to Misha"
          >
            {copiedLink ? (
              <>
                <Check className="w-4 h-4 text-emerald-700" />
                <span className="text-emerald-700">Link Copied to Send!</span>
              </>
            ) : (
              <>
                <Share2 className="w-4 h-4 text-beige-600" />
                <span>Copy Link to Share</span>
              </>
            )}
          </button>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full glass-card hover:bg-beige-200/80 text-warmBrown-800 border border-beige-300 transition-all hover:scale-110 hidden sm:flex items-center justify-center"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4 text-beige-600" />
          </button>
        </div>

        {/* Closing Note */}
        <div className="text-xs text-warmBrown-500 font-mono tracking-wider font-medium">
          HANDCRAFTED WITH ALL MY HEART FOR MISHA &bull; FOREVER &amp; ALWAYS
        </div>
      </div>
    </footer>
  );
}
