"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { Heart, Sparkles, Cake, BookOpen, Image as ImageIcon, Mail, Gift, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const triggerConfetti = () => {
    // Elegant heart & sparkle confetti burst
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.2 },
      colors: ["#fb7185", "#f43f5e", "#fda4af", "#fde047", "#ffffff"],
    });
  };

  const navLinks = [
    { name: "Blow Cake", href: "#cake", icon: Cake },
    { name: "Urdu Shayari", href: "#urdu-quotes", icon: BookOpen },
    { name: "10 Reasons", href: "#reasons", icon: Heart },
    { name: "Moments", href: "#memories", icon: ImageIcon },
    { name: "Love Letter", href: "#letter", icon: Mail },
    { name: "Surprises", href: "#gifts", icon: Gift },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 py-3 sm:px-6">
      <div className="max-w-6xl mx-auto glass-panel rounded-full px-5 py-2.5 flex items-center justify-between shadow-xl border border-rose-500/25">
        {/* Brand */}
        <a href="#hero" className="flex items-center gap-2 group cursor-pointer">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-rose-600 to-pink-400 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
            <Heart className="w-4 h-4 text-white fill-white animate-pulse" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-base sm:text-lg tracking-wide text-rose-100 group-hover:text-rose-300 transition-colors">
              Misha&apos;s Birthday
            </span>
            <span className="text-[10px] text-rose-400 font-medium tracking-wider uppercase hidden sm:inline">
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
                className="px-3 py-1.5 rounded-full text-xs font-medium text-rose-200/80 hover:text-white hover:bg-rose-500/20 transition-all flex items-center gap-1.5"
              >
                <Icon className="w-3.5 h-3.5 text-rose-400" />
                <span>{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={triggerConfetti}
            className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-400 hover:to-pink-500 text-white text-xs font-semibold shadow-lg shadow-rose-500/30 flex items-center gap-1.5 transition-all hover:scale-105 active:scale-95"
            title="Shower Love Confetti"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Shower Love</span>
            <span className="sm:hidden">Wish!</span>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-full text-rose-200 hover:text-white hover:bg-rose-900/40"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 max-w-sm mx-auto glass-panel rounded-2xl p-4 shadow-2xl border border-rose-500/30 animate-in fade-in slide-in-from-top-3 duration-200">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2.5 rounded-xl bg-rose-950/40 hover:bg-rose-800/40 text-rose-200 text-xs font-medium flex items-center gap-2 transition-all"
                >
                  <Icon className="w-4 h-4 text-rose-400" />
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
