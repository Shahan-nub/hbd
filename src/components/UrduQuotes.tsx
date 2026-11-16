"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { BookOpen, Copy, Check, Heart, Sparkles, Feather } from "lucide-react";

interface QuoteItem {
  id: number;
  urduScript: string;
  romanUrdu: string;
  englishTranslation: string;
  poet: string;
  noteForMisha: string;
  likes: number;
}

export default function UrduQuotes() {
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [quotesState, setQuotesState] = useState<QuoteItem[]>([
    {
      id: 1,
      urduScript: "سُنا ہے لوگ اُسے آنکھ بھر کے دیکھتے ہیں\nسو اُس کے شہر میں کچھ دن ٹھہر کے دیکھتے ہیں",
      romanUrdu: "Suna hai log use aankh bhar ke dekhte hain,\nSo us ke shahr mein kuch din thehar ke dekhte hain...",
      englishTranslation:
        "They say people gaze at her until their eyes are full of wonder;\nso in her world, I long to pause and stay forever.",
      poet: "Ahmad Faraz — Classical Urdu Masterpiece",
      noteForMisha:
        "To me, Misha, this verse was written just for you. The entire universe quiets down in awe whenever you smile. There is no place I would rather be than by your side.",
      likes: 520,
    },
    {
      id: 2,
      urduScript: "تیرے چہرے سے ہے روشن مری دنیا ساری\nتُو مری روح میں خوشبو کی طرح بستی ہے",
      romanUrdu: "Tere chehre se hai roshan meri duniya saari,\nTu meri rooh mein khushboo ki tarah basti hai...",
      englishTranslation:
        "Your face illuminates my entire universe;\nyou live within my soul like an everlasting fragrance.",
      poet: "Soulful Urdu Romance",
      noteForMisha:
        "Long before I could find the right words to describe what you mean to me, you were already every prayer my heart ever whispered. Happy Birthday to my soul's sweetest haven.",
      likes: 618,
    },
  ]);

  const handleCopy = (quote: QuoteItem) => {
    const textToCopy = `"${quote.romanUrdu}"\n\nEnglish Translation:\n"${quote.englishTranslation}"\n\n— Dedicated to Misha ❤️`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedId(quote.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const handleLike = (id: number) => {
    setQuotesState((prev) =>
      prev.map((q) => (q.id === id ? { ...q, likes: q.likes + 1 } : q))
    );

    confetti({
      particleCount: 25,
      spread: 60,
      colors: ["#f43f5e", "#fda4af", "#fde047"],
    });
  };

  return (
    <section id="urdu-quotes" className="relative py-20 px-4 max-w-5xl mx-auto">
      {/* Decorative Header */}
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/10 via-rose-500/20 to-amber-500/10 border border-amber-400/30 text-amber-300 text-xs font-semibold mb-3">
          <Feather className="w-4 h-4 text-amber-300" />
          <span>Shayari &amp; Words From The Soul</span>
          <Sparkles className="w-4 h-4 text-rose-300" />
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-bold text-white mb-4">
          Timeless Urdu Quotes For Misha ✨
        </h2>
        <p className="text-rose-200/80 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Some feelings are so profound that only the soulful elegance of Urdu poetry
          and its translation can even begin to capture what you mean to me.
        </p>
      </div>

      {/* Quotes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {quotesState.map((quote) => (
          <div
            key={quote.id}
            className="glass-card rounded-3xl p-6 sm:p-8 border border-rose-500/25 relative flex flex-col justify-between overflow-hidden group hover:border-amber-400/40"
          >
            {/* Corner Ornamental flourish */}
            <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-br from-rose-500/10 to-amber-400/10 rounded-bl-full pointer-events-none" />

            <div>
              {/* Quote Badge */}
              <div className="flex items-center justify-between mb-5">
                <span className="px-3 py-1 rounded-full bg-rose-950/70 border border-rose-400/30 text-amber-300 text-xs font-semibold tracking-wider uppercase flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-amber-300" />
                  Verse {quote.id}
                </span>

                <button
                  onClick={() => handleCopy(quote)}
                  className="p-2 rounded-full bg-rose-950/50 hover:bg-rose-900/60 border border-rose-500/20 text-rose-300 hover:text-white transition-all flex items-center gap-1.5 text-xs"
                  title="Copy quote and translation"
                >
                  {copiedId === quote.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-medium">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Urdu Script Calligraphy */}
              <div
                className="font-urdu text-2xl sm:text-3xl text-right leading-[2.2] text-amber-100/90 mb-5 p-4 rounded-2xl bg-black/40 border border-amber-400/15 select-text drop-shadow-[0_2px_12px_rgba(250,204,21,0.15)]"
                dir="rtl"
              >
                {quote.urduScript}
              </div>

              {/* Roman Urdu Transliteration */}
              <div className="mb-4">
                <span className="text-[11px] font-bold tracking-widest text-amber-400 uppercase block mb-1">
                  Roman Urdu
                </span>
                <p className="font-serif italic text-base sm:text-lg text-rose-100 leading-relaxed whitespace-pre-line">
                  &ldquo;{quote.romanUrdu}&rdquo;
                </p>
              </div>

              {/* English Translation */}
              <div className="mb-6 p-4 rounded-xl bg-gradient-to-r from-rose-950/40 to-transparent border-l-2 border-rose-400">
                <span className="text-[11px] font-bold tracking-widest text-rose-300 uppercase block mb-1">
                  English Translation
                </span>
                <p className="text-sm sm:text-base text-rose-50 font-medium leading-relaxed whitespace-pre-line">
                  &ldquo;{quote.englishTranslation}&rdquo;
                </p>
              </div>

              {/* Attribution */}
              <div className="text-xs text-rose-300/60 font-serif italic mb-4">
                — {quote.poet}
              </div>

              {/* Personal Dedication to Misha */}
              <div className="p-4 rounded-xl bg-rose-950/50 border border-rose-500/20 text-xs sm:text-sm text-rose-200/90 leading-relaxed mb-4">
                <span className="font-semibold text-rose-300 block mb-1">
                  💌 Why This Belongs to You, Misha:
                </span>
                {quote.noteForMisha}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-rose-500/20 flex items-center justify-between">
              <button
                onClick={() => handleLike(quote.id)}
                className="px-3.5 py-1.5 rounded-full bg-rose-900/40 hover:bg-rose-800/60 border border-rose-500/30 text-rose-200 hover:text-white text-xs font-semibold flex items-center gap-1.5 transition-all active:scale-90"
              >
                <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400 animate-pulse" />
                <span>Love This</span>
                <span className="ml-1 text-rose-300/80">{quote.likes}</span>
              </button>

              <span className="font-romantic text-xl text-rose-300">
                Forever Misha
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
