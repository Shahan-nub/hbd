"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { Heart, Sparkles, Cake, BookOpen, Compass, Mail, Gift, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const triggerConfetti = () => {
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.2 },
      colors: ["#d7be9f", "#c5a47e", "#b38d64", "#e6d5bf", "#f5f0e8", "#bc6c25"],
    });
  };

  const navLinks = [
    { name: "Blow Cake", href: "#cake", icon: Cake },
    { name: "Urdu Quotes", href: "#urdu-quotes", icon: BookOpen },
    { name: "10 Reasons", href: "#reasons", icon: Heart },
    { name: "Our Chapters", href: "#chapters", icon: Compass },
    { name: "Love Letter", href: "#letter", icon: Mail },
    { name: "Surprises", href: "#gifts", icon: Gift },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 py-3 sm:px-6">
      <div className="max-w-6xl mx-auto glass-panel rounded-full px-5 py-2.5 flex items-center justify-between shadow-lg border border-beige-300/80">
        {/* Brand */}
        <a href="#hero" className="flex items-center gap-2 group cursor-pointer">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-beige-700 to-champagne-400 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
            <Heart className="w-4 h-4 text-white fill-white animate-pulse" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-base sm:text-lg tracking-wide text-warmBrown-950 group-hover:text-beige-800 transition-colors">
              Misha&apos;s Birthday
            </span>
            <span className="text-[10px] text-beige-700 font-medium tracking-wider uppercase hidden sm:inline">
              Forever &amp; Always ✨
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-1.5 lg:gap-2">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 rounded-full text-xs font-medium text-warmBrown-700 hover:text-warmBrown-950 hover:bg-beige-200/70 transition-all flex items-center gap-1.5"
              >
                <Icon className="w-3.5 h-3.5 text-beige-600" />
                <span>{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={triggerConfetti}
            className="px-4 py-1.5 rounded-full bg-gradient-to-r from-beige-700 via-warmBrown-700 to-beige-800 hover:from-beige-800 hover:to-warmBrown-800 text-white text-xs font-semibold shadow-md shadow-beige-900/15 flex items-center gap-1.5 transition-all hover:scale-105 active:scale-95"
            title="Shower Golden Confetti"
          >
            <Sparkles className="w-3.5 h-3.5 text-champagne-300" />
            <span className="hidden sm:inline">Shower Love</span>
            <span className="sm:hidden">Wish!</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-full text-warmBrown-700 hover:text-warmBrown-950 hover:bg-beige-200"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 max-w-sm mx-auto glass-panel rounded-2xl p-4 shadow-xl border border-beige-300 animate-in fade-in slide-in-from-top-3 duration-200">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2.5 rounded-xl bg-beige-100/80 hover:bg-beige-200 text-warmBrown-800 text-xs font-medium flex items-center gap-2 transition-all"
                >
                  <Icon className="w-4 h-4 text-beige-600" />
                  <span>{link.name}</span>
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
