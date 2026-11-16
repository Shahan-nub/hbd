"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { Mail, Heart, Sparkles, Copy, Check, RotateCcw, Feather } from "lucide-react";

export default function LoveLetter() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const toggleLetter = () => {
    if (!isOpen) {
      setIsOpen(true);
      confetti({
        particleCount: 50,
        spread: 75,
        origin: { y: 0.6 },
        colors: ["#c5a47e", "#b38d64", "#d7be9f", "#e6d5bf", "#f5e8d3"],
      });
    } else {
      setIsOpen(false);
    }
  };

  const letterText = `My Darling Misha,

Happy, happy birthday to the girl who holds my whole heart!

If someone asked me to define what peace feels like, I wouldn't search for fancy words—I would simply say your name. From the very first moment you walked into my world, you brought a gentle warmth that made everything make sense.

I love the way your eyes sparkle when you're excited about something you love. I love your spontaneous laugh that is genuinely the sweetest sound in this entire universe. I love your kind, compassionate soul that cares so deeply for the people around you, and I love the effortless grace you carry wherever you go.

With you, loving someone doesn't feel complicated or heavy. It feels as natural as breathing and as comforting as coming home after a long journey. You are my favorite thought in the morning, my calm in the middle of a chaotic day, and my sweetest prayer at night.

On your birthday today, my only wish is for your happiness. I pray that this upcoming year gives back to you even half of the light you give to everyone around you. May your days be filled with quiet contentment, great victories, belly-aching laughter, and dreams unfolding in ways sweeter than you could have ever imagined.

No matter where life takes us, remember this: I will always be right here in your corner. Cheering the loudest for your accomplishments, holding your hand on the quiet days, bringing you your favorite food when you're tired, and loving you unconditionally through it all.

Tum meri zindagi ki sab se khoobsurat dua ho.

Happy Birthday, my sweet queen. I love you more than words will ever be able to tell.

Forever & Always Yours,
With all my heart ❤️`;

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
            ? "Here is everything my heart wanted to whisper to you on your special day."
            : "Click on the vintage wax seal below to break the seal and unfold your letter."}
        </p>
      </div>

      {/* Envelope Container */}
      <div className="relative flex flex-col items-center justify-center">
        {!isOpen ? (
          // Sealed Vintage Envelope View
          <div
            onClick={toggleLetter}
            className="w-full max-w-lg bg-gradient-to-br from-[#f8f3ea] via-[#f4ecdf] to-[#ece1cf] p-5 sm:p-12 rounded-2xl sm:rounded-3xl border-2 border-beige-300 shadow-xl cursor-pointer hover:border-beige-500 hover:scale-[1.01] active:scale-95 transition-all duration-300 relative group text-center"
          >
            {/* Postal Stamp */}
            <div className="absolute top-3 right-3 sm:top-5 sm:right-5 w-12 h-16 sm:w-16 sm:h-20 border-2 border-dashed border-beige-400 rounded-md flex flex-col items-center justify-center bg-white/80 p-1 shadow-sm">
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-beige-700 fill-beige-700" />
              <span className="text-[8px] sm:text-[9px] font-mono text-warmBrown-700 mt-0.5 sm:mt-1 uppercase font-bold tracking-wider">
                AIR MAIL
              </span>
              <span className="text-[7px] sm:text-[8px] font-mono text-warmBrown-500">MISHA</span>
            </div>

            {/* Address */}
            <div className="text-left mb-8 sm:mb-10 pl-1 sm:pl-2 pr-14 sm:pr-20">
              <span className="text-[9px] sm:text-[10px] font-mono text-beige-700 uppercase tracking-widest block font-bold">
                CONFIDENTIAL &bull; SPECIAL DELIVERY TO:
              </span>
              <p className="font-display font-bold text-xl sm:text-3xl text-warmBrown-950 mt-1">
                Miss Misha ❤️
              </p>
              <p className="font-serif italic text-xs sm:text-sm text-warmBrown-600 mt-0.5">
                The Most Beautiful &amp; Cherished Soul in My Universe
              </p>
            </div>

            {/* Teaser note on envelope */}
            <div className="mb-6 sm:mb-8 p-3 rounded-xl sm:rounded-2xl bg-white/70 border border-beige-300/80 text-left text-xs text-warmBrown-700 flex items-center gap-2">
              <Feather className="w-4 h-4 text-beige-600 shrink-0" />
              <span className="text-[11px] sm:text-xs">
                <strong>Note:</strong> Contains 100% unconditional love, warm memories, and words straight from my soul.
              </span>
            </div>

            {/* Wax Seal Center Button */}
            <div className="relative inline-flex items-center justify-center my-2">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-beige-600 via-warmBrown-700 to-beige-500 p-1 shadow-lg shadow-beige-900/20 group-hover:scale-110 transition-transform flex items-center justify-center border-2 border-beige-200">
                <div className="w-full h-full rounded-full bg-gradient-to-b from-warmBrown-800 to-warmBrown-950 flex flex-col items-center justify-center text-center p-1">
                  <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-champagne-300 fill-champagne-300 animate-pulse" />
                  <span className="text-[8px] sm:text-[9px] font-bold tracking-wider text-champagne-200 uppercase mt-0.5">
                    Open
                  </span>
                </div>
              </div>
            </div>

            <p className="text-xs text-warmBrown-700 font-medium mt-4 sm:mt-6 group-hover:text-warmBrown-950 transition-colors flex items-center justify-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-beige-600" />
              <span>Tap the wax seal to break open your letter</span>
            </p>
          </div>
        ) : (
          // Unfolded Letter Paper View
          <div className="w-full max-w-2xl bg-white text-warmBrown-950 rounded-2xl sm:rounded-3xl p-5 sm:p-12 shadow-xl border border-beige-300 relative animate-in fade-in zoom-in-95 duration-500">
            {/* Header Actions */}
            <div className="absolute top-3 right-3 sm:top-5 sm:right-5 flex items-center gap-1.5 sm:gap-2">
              <button
                onClick={copyLetter}
                className="p-1.5 sm:p-2 rounded-full bg-beige-100 hover:bg-beige-200 text-warmBrown-800 transition-colors text-xs flex items-center gap-1 shadow-sm"
                title="Copy entire letter"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-700" />
                    <span className="text-emerald-700 font-medium text-[11px] sm:text-xs">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span className="text-warmBrown-700 text-[11px] sm:text-xs">Copy</span>
                  </>
                )}
              </button>
              <button
                onClick={toggleLetter}
                className="p-1.5 sm:p-2 rounded-full bg-beige-100 hover:bg-beige-200 text-warmBrown-800 transition-colors text-xs flex items-center gap-1 shadow-sm"
                title="Fold letter back into envelope"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span className="text-warmBrown-700 text-[11px] sm:text-xs">Fold</span>
              </button>
            </div>

            {/* Letter Header */}
            <div className="border-b border-beige-200 pb-3 sm:pb-4 mb-4 sm:mb-6 pr-24 sm:pr-0">
              <span className="text-[10px] sm:text-xs font-mono text-warmBrown-500 uppercase tracking-widest block font-medium">
                To My Beloved Misha &bull; On Your Birthday
              </span>
              <h3 className="font-display font-bold text-xl sm:text-3xl text-warmBrown-950 mt-1">
                My Darling Misha,
              </h3>
            </div>

            {/* Letter Body */}
            <div className="space-y-4 font-serif text-sm sm:text-base leading-relaxed text-warmBrown-800">
              <p>
                <strong className="text-warmBrown-950 font-bold">Happy, happy birthday</strong> to the
                girl who holds my whole heart!
              </p>
              <p>
                If someone asked me to define what peace feels like, I wouldn&apos;t search for fancy words—I
                would simply say your name. From the very first moment you walked into my world, you
                brought a gentle warmth that made everything make sense.
              </p>
              <p>
                I love the way your eyes sparkle when you&apos;re excited about something you love. I love your
                spontaneous laugh that is genuinely the sweetest sound in this entire universe. I love your
                kind, compassionate soul that cares so deeply for the people around you, and I love the
                effortless grace you carry wherever you go.
              </p>
              <p>
                With you, loving someone doesn&apos;t feel complicated or heavy. It feels as natural as breathing
                and as comforting as coming home after a long journey. You are my favorite thought in the morning,
                my calm in the middle of a chaotic day, and my sweetest prayer at night.
              </p>
              <p>
                On your birthday today, my only wish is for your happiness. I pray that this upcoming year gives
                back to you even half of the light you give to everyone around you. May your days be filled with
                quiet contentment, great victories, belly-aching laughter, and dreams unfolding in ways sweeter
                than you could have ever imagined.
              </p>
              <p>
                No matter where life takes us, remember this: I will always be right here in your corner. Cheering
                the loudest for your accomplishments, holding your hand on the quiet days, bringing you your
                favorite food when you&apos;re tired, and loving you unconditionally through it all.
              </p>
              <p className="font-serif italic font-semibold text-warmBrown-900 bg-beige-50 p-3 rounded-xl border border-beige-200">
                &ldquo;Tum meri zindagi ki sab se khoobsurat dua ho.&rdquo;
              </p>
              <p>
                Happy Birthday, my sweet queen. I love you more than words will ever be able to tell.
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
