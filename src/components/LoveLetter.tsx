"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { Mail, Heart, Sparkles, Copy, Check, RotateCcw } from "lucide-react";

export default function LoveLetter() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const toggleLetter = () => {
    if (!isOpen) {
      setIsOpen(true);
      confetti({
        particleCount: 45,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#c5a47e", "#b38d64", "#d7be9f", "#e6d5bf", "#f5e8d3"],
      });
    } else {
      setIsOpen(false);
    }
  };

  const letterText = `My Dearest Misha,

Happy, happy birthday to the most incredible girl in my world!

Today is not just another day on the calendar; it is the day the universe gifted you to this world, and eventually, the day my life found its truest meaning.

Looking back on all our moments, smiles, and quiet conversations, I am constantly reminded of how profoundly lucky I am to have you. You bring an effortless peace to my chaotic days, an unshakeable warmth to my heart, and a genuine smile to my face whenever your name pops up on my phone.

You are brilliant, beautiful, kind-hearted, and wonderfully unique. I hope you know just how deeply admired, cherished, and loved you are.

On your birthday, I pray that this year brings you abundant peace of mind, breathtaking adventures, unwavering success in everything you set your heart to, and laughter that echoes in every room you enter.

Whatever dreams you hold in your heart today, know that I will always be right beside you—celebrating your wins, lifting you up on hard days, and loving you through it all.

Happy Birthday, Misha. You are my greatest blessing.

With all my heart and endless love,
Forever & Always ❤️`;

  const copyLetter = () => {
    navigator.clipboard.writeText(letterText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="letter" className="relative py-20 px-4 max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-beige-100 border border-beige-300 text-warmBrown-700 text-xs font-semibold mb-3">
          <Mail className="w-3.5 h-3.5 text-beige-600" />
          <span>Strictly For Misha&apos;s Eyes Only</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-bold text-warmBrown-950 mb-3">
          A Letter Written From The Heart 💌
        </h2>
        <p className="text-warmBrown-600 text-sm sm:text-base max-w-md mx-auto">
          {isOpen
            ? "Here is everything my heart wanted to whisper to you today."
            : "Click on the wax seal below to break the seal and read your birthday letter."}
        </p>
      </div>

      {/* Envelope Container */}
      <div className="relative flex flex-col items-center justify-center">
        {!isOpen ? (
          // Sealed Vintage Envelope
          <div
            onClick={toggleLetter}
            className="w-full max-w-md bg-gradient-to-br from-beige-100 via-beige-50 to-beige-200 p-8 sm:p-10 rounded-3xl border-2 border-beige-300 shadow-xl cursor-pointer hover:border-beige-500 hover:scale-105 active:scale-95 transition-all duration-300 relative group text-center"
          >
            {/* Stamp */}
            <div className="absolute top-5 right-5 w-14 h-16 border-2 border-dashed border-beige-400 rounded-md flex flex-col items-center justify-center bg-white/70 p-1">
              <Heart className="w-4 h-4 text-beige-700 fill-beige-700" />
              <span className="text-[9px] font-mono text-warmBrown-600 mt-0.5 uppercase font-bold">
                AIR MAIL
              </span>
            </div>

            {/* Address */}
            <div className="text-left mb-12 pl-2">
              <span className="text-[10px] font-mono text-beige-700 uppercase tracking-widest block font-bold">
                SPECIAL DELIVERY TO:
              </span>
              <p className="font-display font-bold text-2xl text-warmBrown-950 mt-1">
                Miss Misha ❤️
              </p>
              <p className="font-serif italic text-xs text-warmBrown-600">
                The Most Special Person In My Universe
              </p>
            </div>

            {/* Wax Seal Center Button */}
            <div className="relative inline-flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-beige-600 via-warmBrown-700 to-beige-500 p-1 shadow-lg shadow-beige-900/20 group-hover:scale-110 transition-transform flex items-center justify-center border-2 border-beige-200">
                <div className="w-full h-full rounded-full bg-gradient-to-b from-warmBrown-800 to-warmBrown-950 flex flex-col items-center justify-center text-center p-1">
                  <Heart className="w-6 h-6 text-champagne-300 fill-champagne-300 animate-pulse" />
                  <span className="text-[9px] font-bold tracking-wider text-champagne-200 uppercase mt-0.5">
                    Open
                  </span>
                </div>
              </div>
            </div>

            <p className="text-xs text-warmBrown-700 font-medium mt-6 group-hover:text-warmBrown-900 transition-colors flex items-center justify-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-beige-600" />
              <span>Tap the wax seal to unfold letter</span>
            </p>
          </div>
        ) : (
          // Unfolded Letter Paper
          <div className="w-full max-w-2xl bg-white text-warmBrown-950 rounded-3xl p-6 sm:p-12 shadow-xl border border-beige-300 relative animate-in fade-in zoom-in-95 duration-500">
            {/* Actions */}
            <div className="absolute top-4 right-4 flex items-center gap-2">
              <button
                onClick={copyLetter}
                className="p-2 rounded-full bg-beige-100 hover:bg-beige-200 text-warmBrown-800 transition-colors text-xs flex items-center gap-1 shadow-sm"
                title="Copy letter"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-700" />
                    <span className="text-emerald-700 font-medium">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span className="text-warmBrown-700">Copy</span>
                  </>
                )}
              </button>
              <button
                onClick={toggleLetter}
                className="p-2 rounded-full bg-beige-100 hover:bg-beige-200 text-warmBrown-800 transition-colors text-xs flex items-center gap-1 shadow-sm"
                title="Fold letter back into envelope"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span className="text-warmBrown-700">Fold</span>
              </button>
            </div>

            {/* Letter Header */}
            <div className="border-b border-beige-200 pb-4 mb-6">
              <span className="text-xs font-mono text-warmBrown-500 uppercase tracking-widest block">
                To My Beloved Misha • On Your Birthday
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-warmBrown-950 mt-1">
                Dearest Misha,
              </h3>
            </div>

            {/* Letter Body */}
            <div className="space-y-4 font-serif text-sm sm:text-base leading-relaxed text-warmBrown-800">
              <p>
                <strong className="text-warmBrown-950 font-bold">Happy, happy birthday</strong> to the
                most incredible girl in my world!
              </p>
              <p>
                Today is not just another day on the calendar; it is the day the universe gifted
                you to this world, and eventually, the day my life found its truest meaning.
              </p>
              <p>
                Looking back on all our moments, smiles, and quiet conversations, I am constantly
                reminded of how profoundly lucky I am to have you. You bring an effortless peace
                to my chaotic days, an unshakeable warmth to my heart, and a genuine smile to my
                face whenever your name pops up on my screen.
              </p>
              <p>
                You are brilliant, beautiful, kind-hearted, and wonderfully unique. I hope you
                know just how deeply admired, cherished, and loved you are today and every single day.
              </p>
              <p>
                On your birthday, I pray that this upcoming year brings you abundant peace of mind,
                breathtaking adventures, unwavering success in everything you set your heart to,
                and laughter that echoes in every room you enter.
              </p>
              <p>
                Whatever dreams you hold in your heart today, know that I will always be right beside
                you—celebrating your wins, lifting you up on hard days, and loving you through it all.
              </p>
            </div>

            {/* Letter Signature */}
            <div className="mt-8 pt-6 border-t border-beige-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="font-romantic text-3xl sm:text-4xl text-warmBrown-900">
                  Forever &amp; Always Yours ❤️
                </p>
                <p className="text-xs font-mono text-warmBrown-500 mt-1">
                  Crafted for Misha with infinite love
                </p>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-warmBrown-800 font-semibold bg-beige-100 px-3.5 py-1.5 rounded-full border border-beige-300">
                <Heart className="w-3.5 h-3.5 fill-beige-700 text-beige-700" />
                <span>Happy Birthday Misha</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
