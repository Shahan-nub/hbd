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
        "To me, Misha, this verse was written just for you. The entire world quiets down in awe whenever you smile. There is no place I would rather be than in your peaceful world.",
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
        "Long before I could find the right words to describe what you mean to me, you were already every prayer my heart ever whispered. Happy Birthday to my soul's sweetest home.",
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
      particleCount: 22,
      spread: 60,
      colors: ["#c5a47e", "#b38d64", "#d7be9f", "#e6d5bf"],
    });
  };

  return (
    <section id="urdu-quotes" className="relative py-14 sm:py-20 px-3 sm:px-4 max-w-5xl mx-auto">
      {/* Decorative Header */}
      <div className="text-center mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-beige-100 border border-beige-300 text-warmBrown-700 text-xs font-semibold mb-2 sm:mb-3">
          <Feather className="w-4 h-4 text-beige-600" />
          <span>Shayari &amp; Words From The Soul</span>
          <Sparkles className="w-4 h-4 text-beige-500" />
        </div>
        <h2 className="text-2xl sm:text-5xl font-display font-bold text-warmBrown-950 mb-3 sm:mb-4 px-2">
          Timeless Urdu Quotes For Misha ✨
        </h2>
        <p className="text-warmBrown-600 text-xs sm:text-base max-w-xl mx-auto leading-relaxed px-2">
          Some feelings are so profound that only the soulful elegance of Urdu poetry
          and its English meaning can even begin to capture what you mean to me.
        </p>
      </div>

      {/* Quotes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {quotesState.map((quote) => (
          <div
            key={quote.id}
            className="glass-card rounded-2xl sm:rounded-3xl p-4 sm:p-8 border border-beige-300 relative flex flex-col justify-between overflow-hidden group hover:border-beige-500"
          >
            {/* Corner Ornamental flourish */}
            <div className="absolute top-0 right-0 w-24 sm:w-28 h-24 sm:h-28 bg-gradient-to-br from-beige-200/50 to-champagne-200/30 rounded-bl-full pointer-events-none" />

            <div>
              {/* Quote Badge */}
              <div className="flex items-center justify-between mb-4 sm:mb-5">
                <span className="px-2.5 sm:px-3 py-1 rounded-full bg-beige-100 border border-beige-300 text-warmBrown-800 text-[11px] sm:text-xs font-semibold tracking-wider uppercase flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-beige-600" />
                  Verse {quote.id}
                </span>

                <button
                  onClick={() => handleCopy(quote)}
                  className="p-1.5 sm:p-2 rounded-full bg-beige-100 hover:bg-beige-200 border border-beige-300 text-warmBrown-700 hover:text-warmBrown-950 transition-all flex items-center gap-1.5 text-xs"
                  title="Copy quote and translation"
                >
                  {copiedId === quote.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-medium text-[11px] sm:text-xs">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="text-[11px] sm:text-xs">Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Urdu Script Calligraphy */}
              <div
                className="font-urdu text-xl sm:text-3xl text-right leading-[2.1] text-warmBrown-950 mb-4 sm:mb-5 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-beige-50/80 border border-beige-200 select-text"
                dir="rtl"
              >
                {quote.urduScript}
              </div>

              {/* Roman Urdu Transliteration */}
              <div className="mb-3 sm:mb-4">
                <span className="text-[10px] sm:text-[11px] font-bold tracking-widest text-beige-700 uppercase block mb-1">
                  Roman Urdu
                </span>
                <p className="font-serif italic text-sm sm:text-lg text-warmBrown-900 leading-relaxed whitespace-pre-line">
                  &ldquo;{quote.romanUrdu}&rdquo;
                </p>
              </div>

              {/* English Translation */}
              <div className="mb-4 sm:mb-6 p-3 sm:p-4 rounded-xl bg-beige-100/60 border-l-2 border-beige-600">
                <span className="text-[10px] sm:text-[11px] font-bold tracking-widest text-warmBrown-700 uppercase block mb-1">
                  English Translation
                </span>
                <p className="text-xs sm:text-base text-warmBrown-900 font-medium leading-relaxed whitespace-pre-line">
                  &ldquo;{quote.englishTranslation}&rdquo;
                </p>
              </div>

              {/* Attribution */}
              <div className="text-[11px] sm:text-xs text-warmBrown-500 font-serif italic mb-3 sm:mb-4">
                — {quote.poet}
              </div>

              {/* Personal Dedication to Misha */}
              <div className="p-3 sm:p-4 rounded-xl bg-beige-50 border border-beige-200 text-xs sm:text-sm text-warmBrown-700 leading-relaxed mb-4">
                <span className="font-semibold text-warmBrown-900 block mb-1">
                  💌 Why This Belongs to You, Misha:
                </span>
                {quote.noteForMisha}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-beige-200 flex items-center justify-between">
              <button
                onClick={() => handleLike(quote.id)}
                className="px-3.5 py-1.5 rounded-full bg-beige-100 hover:bg-beige-200 border border-beige-300 text-warmBrown-800 text-xs font-semibold flex items-center gap-1.5 transition-all active:scale-90"
              >
                <Heart className="w-3.5 h-3.5 text-beige-700 fill-beige-700" />
                <span>Love This</span>
                <span className="ml-1 text-warmBrown-600 font-mono">{quote.likes}</span>
              </button>

              <span className="font-romantic text-xl text-warmBrown-600">
                Forever Misha
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
