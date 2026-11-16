"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { Compass, Heart, Sparkles, Star, Moon, Sun, Coffee } from "lucide-react";

interface Milestone {
  id: number;
  chapter: string;
  title: string;
  subtitle: string;
  reflection: string;
  icon: React.ElementType;
  tag: string;
  hearts: number;
}

export default function StoryMilestones() {
  const [milestones, setMilestones] = useState<Milestone[]>([
    {
      id: 1,
      chapter: "Chapter I",
      title: "The First Spark",
      subtitle: "When the universe gently shifted",
      reflection:
        "An ordinary day suddenly became the beginning of the best story of my life. From our very first exchange, there was a calm and captivating comfort that I had never felt with anyone else.",
      icon: Sparkles,
      tag: "The Beginning",
      hearts: 142,
    },
    {
      id: 2,
      chapter: "Chapter II",
      title: "2:00 AM Conversations",
      subtitle: "Where hours felt like seconds",
      reflection:
        "Talking about childhood stories, our dreams, random theories about life, and quiet moments where neither of us wanted to say goodnight. That was when I knew my heart was completely yours.",
      icon: Moon,
      tag: "Midnight Magic",
      hearts: 198,
    },
    {
      id: 3,
      chapter: "Chapter III",
      title: "Coffee & Shared Laughter",
      subtitle: "The joy of simple moments",
      reflection:
        "Stealing sips of drinks, making fun of little things, and sharing looks across the table that needed no explanation. You turn the most mundane afternoons into cherished memories.",
      icon: Coffee,
      tag: "Our Safe Place",
      hearts: 165,
    },
    {
      id: 4,
      chapter: "Chapter IV",
      title: "Golden Hour Glow",
      subtitle: "Sunsets pale in comparison to you",
      reflection:
        "Watching the sunset with you by my side and realizing that no painting, sky, or golden light could ever hold a candle to the warmth of your smile, Misha.",
      icon: Sun,
      tag: "Pure Radiance",
      hearts: 210,
    },
    {
      id: 5,
      chapter: "Chapter V",
      title: "My Anchor & My Home",
      subtitle: "Peace in the midst of every storm",
      reflection:
        "Whenever the world gets noisy or overwhelming, one message from you, one hug, or the sound of your voice instantly grounds me. You are my calm and my safe haven.",
      icon: Star,
      tag: "Constant Calm",
      hearts: 245,
    },
    {
      id: 6,
      chapter: "Chapter VI",
      title: "Celebrating Misha Day",
      subtitle: "Today & Every Tomorrow",
      reflection:
        "Today we celebrate the day you blessed this world with your grace. May this year shower you with all the laughter, success, and pure love you so richly deserve. Happy Birthday!",
      icon: Heart,
      tag: "Happy Birthday",
      hearts: 320,
    },
  ]);

  const handleHeart = (id: number) => {
    setMilestones((prev) =>
      prev.map((m) => (m.id === id ? { ...m, hearts: m.hearts + 1 } : m))
    );

    confetti({
      particleCount: 20,
      spread: 55,
      colors: ["#c5a47e", "#b38d64", "#d7be9f", "#e6d5bf"],
    });
  };

  return (
    <section id="chapters" className="relative py-14 sm:py-20 px-3 sm:px-4 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-beige-100 border border-beige-300 text-warmBrown-700 text-xs font-semibold mb-2 sm:mb-3">
          <Compass className="w-3.5 h-3.5 text-beige-600" />
          <span>Chapters Written in Time</span>
        </div>
        <h2 className="text-2xl sm:text-5xl font-display font-bold text-warmBrown-950 mb-2 sm:mb-3 px-2">
          Chapters of Us ✨
        </h2>
        <p className="text-warmBrown-600 text-xs sm:text-base max-w-xl mx-auto px-2">
          Every memory with you is a favorite chapter in the story of my life.
          Here are a few moments that mean the world to me.
        </p>
      </div>

      {/* Timeline Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {milestones.map((m) => {
          const Icon = m.icon;

          return (
            <div
              key={m.id}
              className="glass-card rounded-2xl sm:rounded-3xl p-4 sm:p-7 border border-beige-300 flex flex-col justify-between hover:border-beige-500 hover:shadow-lg transition-all duration-300"
            >
              <div>
                {/* Chapter tag and icon */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold tracking-widest text-beige-700 uppercase bg-beige-100 px-3 py-1 rounded-full border border-beige-200">
                    {m.chapter}
                  </span>
                  <div className="w-9 h-9 rounded-full bg-beige-100 flex items-center justify-center text-beige-700 border border-beige-300">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="font-display font-bold text-xl text-warmBrown-950 mb-1">
                  {m.title}
                </h3>
                <span className="text-xs text-beige-700 font-medium block mb-4">
                  {m.subtitle}
                </span>

                <p className="font-serif text-sm sm:text-base text-warmBrown-700 leading-relaxed mb-6 italic">
                  &ldquo;{m.reflection}&rdquo;
                </p>
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-4 border-t border-beige-200 flex items-center justify-between">
                <span className="text-[11px] text-warmBrown-500 font-medium">
                  {m.tag}
                </span>

                <button
                  onClick={() => handleHeart(m.id)}
                  className="px-3 py-1 rounded-full bg-beige-100 hover:bg-beige-200 border border-beige-300 text-warmBrown-800 text-xs font-semibold flex items-center gap-1.5 transition-all active:scale-95"
                  title="Send love to this chapter"
                >
                  <Heart className="w-3.5 h-3.5 text-beige-700 fill-beige-700" />
                  <span>{m.hearts}</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
