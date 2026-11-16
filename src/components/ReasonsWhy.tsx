"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import {
  Heart,
  Smile,
  Sparkles,
  Shield,
  Coffee,
  Sun,
  Star,
  Compass,
  Flame,
  CheckCircle2,
} from "lucide-react";

interface Reason {
  id: number;
  title: string;
  short: string;
  detail: string;
  icon: React.ElementType;
  tag: string;
}

export default function ReasonsWhy() {
  const [unlocked, setUnlocked] = useState<number[]>([1]); // First unlocked by default
  const [allCompletedTriggered, setAllCompletedTriggered] = useState(false);

  const reasons: Reason[] = [
    {
      id: 1,
      title: "Your Contagious Laugh",
      short: "The sweetest melody that brightens any cloudy day.",
      detail:
        "The way your laugh starts effortlessly and lights up the whole room is pure magic. It is my favorite sound in the world, and I will always strive to be the reason behind it.",
      icon: Smile,
      tag: "Pure Joy",
    },
    {
      id: 2,
      title: "Your Soft, Caring Heart",
      short: "How deeply and genuinely you love those around you.",
      detail:
        "Your empathy is boundless. You remember the little things, you care with zero expectations, and your kindness makes everyone feel valued, especially me.",
      icon: Heart,
      tag: "Pure Soul",
    },
    {
      id: 3,
      title: "The Sparkle In Your Eyes",
      short: "When you talk about things you are passionate about.",
      detail:
        "Watching your eyes dance and light up when you describe something you love is hypnotic. I could listen to you talk about your passions for hours on end.",
      icon: Sparkles,
      tag: "Mesmerizing",
    },
    {
      id: 4,
      title: "My Safest Haven",
      short: "With you, all worries and chaotic thoughts disappear.",
      detail:
        "In a fast and restless world, you are my calm. One hug, one reassuring word, or simply sitting in quiet comfort with you feels like coming home.",
      icon: Shield,
      tag: "Peace",
    },
    {
      id: 5,
      title: "Our Goofy Moments & Inside Jokes",
      short: "Those glances across the room only we understand.",
      detail:
        "The secret nicknames, the random bouts of laughter over nothing, and how we can communicate entire conversations with just one shared look.",
      icon: Coffee,
      tag: "Best Friends",
    },
    {
      id: 6,
      title: "Your Inner Strength & Grace",
      short: "How resilient, determined, and poised you stand.",
      detail:
        "I admire your courage and grace under pressure so much. You handle hurdles with dignity and elegance that inspires me to be a better person every day.",
      icon: Compass,
      tag: "Inspiration",
    },
    {
      id: 7,
      title: "You Make Ordinary Days Extraordinary",
      short: "A simple walk or grocery run feels like an adventure.",
      detail:
        "With you, mundane errands turn into cherished memories. You bring color, spontaneity, and warmth to every little moment we share together.",
      icon: Sun,
      tag: "Sunshine",
    },
    {
      id: 8,
      title: "Your Unconditional Belief in Me",
      short: "Being my biggest cheerleader and anchor.",
      detail:
        "When I doubt myself, your confidence in me never wavers. Having someone like you believe in my dreams gives me wings to reach for anything.",
      icon: Star,
      tag: "My Anchor",
    },
    {
      id: 9,
      title: "Your Unmatched Beauty",
      short: "Inside and out, you take my breath away every single day.",
      detail:
        "From messy morning hair to dressed up for a fancy evening, you are effortlessly breathtaking. My eyes will never stop seeking you in every room.",
      icon: Flame,
      tag: "Gorgeous",
    },
    {
      id: 10,
      title: "You Are My Today, Tomorrow & Always",
      short: "Loving you is the easiest choice I have ever made.",
      detail:
        "Choosing you, loving you, and standing beside you is the greatest privilege of my life, Misha. Happy Birthday to the girl who holds my whole heart.",
      icon: Heart,
      tag: "Forever",
    },
  ];

  const handleToggle = (id: number) => {
    if (unlocked.includes(id)) return;
    const next = [...unlocked, id];
    setUnlocked(next);

    if (next.length === reasons.length && !allCompletedTriggered) {
      setAllCompletedTriggered(true);
      confetti({
        particleCount: 80,
        spread: 90,
        origin: { y: 0.6 },
        colors: ["#fb7185", "#f43f5e", "#fda4af", "#fde047"],
      });
    }
  };

  const unlockAll = () => {
    setUnlocked(reasons.map((r) => r.id));
    if (!allCompletedTriggered) {
      setAllCompletedTriggered(true);
      confetti({
        particleCount: 100,
        spread: 100,
        colors: ["#fb7185", "#f43f5e", "#fde047", "#ffffff"],
      });
    }
  };

  const progressPercent = Math.round((unlocked.length / reasons.length) * 100);

  return (
    <section id="reasons" className="relative py-20 px-4 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-950/60 border border-rose-500/30 text-rose-300 text-xs font-semibold mb-3">
          <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
          <span>From My Heart To Yours</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-bold text-white mb-3">
          10 Reasons Why I Adore You, Misha ❤️
        </h2>
        <p className="text-rose-200/80 text-sm sm:text-base max-w-xl mx-auto mb-6">
          There are countless reasons, but here are ten that remind me every single day
          how incredibly blessed I am to have you. Click each card to reveal!
        </p>

        {/* Discovery Progress Bar */}
        <div className="max-w-md mx-auto mb-6">
          <div className="flex justify-between items-center text-xs font-semibold text-rose-300 mb-2">
            <span>Reasons Revealed: {unlocked.length} of 10</span>
            <span>{progressPercent}% Unlocked</span>
          </div>
          <div className="w-full h-2.5 bg-rose-950 rounded-full overflow-hidden border border-rose-500/30 p-0.5">
            <div
              className="h-full bg-gradient-to-r from-rose-500 to-pink-400 rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {unlocked.length < reasons.length && (
          <button
            onClick={unlockAll}
            className="text-xs text-rose-300/80 hover:text-rose-200 underline underline-offset-4 transition-colors"
          >
            Reveal all reasons at once ✨
          </button>
        )}
      </div>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {reasons.map((r) => {
          const isUnlocked = unlocked.includes(r.id);
          const Icon = r.icon;

          return (
            <div
              key={r.id}
              onClick={() => handleToggle(r.id)}
              className={`glass-card rounded-2xl p-6 border transition-all duration-300 cursor-pointer relative overflow-hidden flex flex-col justify-between ${
                isUnlocked
                  ? "border-rose-400/40 bg-rose-950/40 shadow-lg shadow-rose-950/50"
                  : "border-rose-500/20 hover:border-rose-400/30 opacity-80 hover:opacity-100"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                      isUnlocked
                        ? "bg-gradient-to-tr from-rose-500 to-pink-500 text-white shadow-md shadow-rose-500/30"
                        : "bg-rose-950/80 text-rose-400 border border-rose-500/20"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-rose-900/40 border border-rose-400/20 text-rose-300">
                    #{r.id} • {r.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 font-display">
                  {r.title}
                </h3>

                <p className="text-xs sm:text-sm text-rose-200/90 leading-relaxed mb-3">
                  {r.short}
                </p>

                {isUnlocked ? (
                  <div className="mt-3 pt-3 border-t border-rose-500/20 text-xs text-rose-100/90 leading-relaxed italic bg-rose-950/30 p-2.5 rounded-xl">
                    &ldquo;{r.detail}&rdquo;
                  </div>
                ) : (
                  <div className="mt-4 flex items-center gap-1.5 text-xs text-rose-400/80 font-medium">
                    <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-spin-slow" />
                    <span>Click to read full note</span>
                  </div>
                )}
              </div>

              {isUnlocked && (
                <div className="mt-4 flex items-center justify-end gap-1 text-[11px] text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Unlocked with love</span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Completion Banner */}
      {unlocked.length === reasons.length && (
        <div className="mt-10 p-6 rounded-3xl bg-gradient-to-r from-rose-900/50 via-pink-900/40 to-rose-900/50 border border-rose-400/40 text-center max-w-2xl mx-auto shadow-2xl animate-in fade-in duration-500">
          <Sparkles className="w-6 h-6 text-amber-300 mx-auto mb-2 animate-bounce" />
          <h4 className="font-display font-bold text-2xl text-white mb-2">
            And 10,000 More Reasons Unwritten...
          </h4>
          <p className="text-sm text-rose-100/90 leading-relaxed">
            Ten cards could never hold all the reasons I cherish you, Misha. Every day with
            you adds another reason to the list, and I look forward to spending a lifetime
            discovering them all.
          </p>
        </div>
      )}
    </section>
  );
}
