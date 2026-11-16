"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { Heart, Sparkles, ArrowUp, Share2, Check } from "lucide-react";

export default function Footer() {
  const [copiedLink, setCopiedLink] = useState(false);

  const triggerGrandCelebration = () => {
    // Grand fireworks confetti barrage
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
        colors: ["#fb7185", "#f43f5e", "#fda4af", "#fde047", "#c084fc", "#34d399"],
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
    <footer className="relative pt-20 pb-28 px-4 border-t border-rose-500/20 text-center overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-rose-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
        {/* Animated Heart Icon */}
        <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-rose-600 to-pink-500 flex items-center justify-center shadow-xl shadow-rose-600/30 mb-4 animate-bounce">
          <Heart className="w-6 h-6 text-white fill-white" />
        </div>

        <h3 className="text-2xl sm:text-4xl font-display font-bold text-white mb-2">
          Happy Birthday, Misha ❤️
        </h3>

        <p className="font-romantic text-2xl sm:text-3xl text-rose-300 mb-6">
          You are loved beyond words and cherished beyond measure.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <button
            onClick={triggerGrandCelebration}
            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-400 hover:to-pink-500 text-white font-bold text-xs sm:text-sm shadow-xl shadow-rose-500/30 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-amber-300 animate-spin-slow" />
            <span>Launch Grand Fireworks! 🎆</span>
          </button>

          <button
            onClick={handleShare}
            className="px-5 py-2.5 rounded-full glass-card hover:bg-rose-900/40 text-rose-200 hover:text-white font-semibold text-xs sm:text-sm border border-rose-500/30 flex items-center gap-2 transition-all"
            title="Copy link to send to Misha"
          >
            {copiedLink ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400">Link Copied to Send!</span>
              </>
            ) : (
              <>
                <Share2 className="w-4 h-4 text-rose-400" />
                <span>Copy Link to Share</span>
              </>
            )}
          </button>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full glass-card hover:bg-rose-900/40 text-rose-200 hover:text-white border border-rose-500/30 transition-all hover:scale-110"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4 text-rose-300" />
          </button>
        </div>

        {/* Closing Note */}
        <div className="text-xs text-rose-300/60 font-mono tracking-wider">
          HANDCRAFTED WITH ALL MY HEART FOR MISHA &bull; FOREVER &amp; ALWAYS
        </div>
      </div>
    </footer>
  );
}
