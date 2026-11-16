"use client";

import React, { useState, useEffect, useRef } from "react";
import { Camera, Plus, Trash2, Heart, Sparkles, Image as ImageIcon } from "lucide-react";

interface Memory {
  id: string;
  title: string;
  date: string;
  note: string;
  imageUrl?: string;
  gradient: string;
  rotation: string;
}

export default function MemoryWall() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [customMemories, setCustomMemories] = useState<Memory[]>([]);
  const [newTitle, setNewTitle] = useState("");
  const [newNote, setNewNote] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Default romantic memory placeholders
  const defaultMemories: Memory[] = [
    {
      id: "def-1",
      title: "The Warmest Smile",
      date: "A Day I'll Never Forget",
      note: "The moment you turned back and smiled at me. Time literally stood still.",
      gradient: "from-rose-500/40 via-pink-600/30 to-amber-500/30",
      rotation: "-rotate-2",
    },
    {
      id: "def-2",
      title: "Late Night Conversations",
      date: "2:00 AM Whispers",
      note: "Talking about everything and nothing until sleep finally won over.",
      gradient: "from-purple-900/40 via-indigo-900/30 to-rose-900/30",
      rotation: "rotate-2",
    },
    {
      id: "def-3",
      title: "Coffee & Sweet Laughter",
      date: "Our Favorite Corner",
      note: "Stealing sips of your drink and laughing at silly inside jokes.",
      gradient: "from-amber-600/30 via-rose-700/30 to-pink-600/30",
      rotation: "-rotate-1",
    },
    {
      id: "def-4",
      title: "Sunset By Your Side",
      date: "Golden Hour Glow",
      note: "The sky was filled with gold, but honestly I was only looking at you, Misha.",
      gradient: "from-orange-500/40 via-pink-600/30 to-rose-800/40",
      rotation: "rotate-3",
    },
    {
      id: "def-5",
      title: "Stargazing & Wishing",
      date: "Under The Midnight Sky",
      note: "I looked at the stars and realized I had already found my brightest one.",
      gradient: "from-blue-900/40 via-indigo-800/30 to-pink-900/30",
      rotation: "-rotate-3",
    },
    {
      id: "def-6",
      title: "Happy Birthday Queen",
      date: "Today & Every Day",
      note: "Celebrating another glorious year of your existence. You make life beautiful.",
      gradient: "from-rose-600/50 via-pink-500/40 to-yellow-500/30",
      rotation: "rotate-1",
    },
  ];

  // Load custom memories from localStorage on client
  useEffect(() => {
    try {
      const saved = localStorage.getItem("misha_birthday_memories");
      if (saved) {
        setCustomMemories(JSON.parse(saved));
      }
    } catch {
      // localStorage safety
    }
  }, []);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setSelectedImage(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleAddMemory = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedImage && !newTitle) return;

    const newMemory: Memory = {
      id: `custom-${Date.now()}`,
      title: newTitle || "A Beautiful Memory with Misha",
      date: "Captured with Love",
      note: newNote || "A precious moment etched in my heart forever.",
      imageUrl: selectedImage || undefined,
      gradient: "from-rose-600/40 via-pink-500/30 to-rose-900/30",
      rotation: Math.random() > 0.5 ? "rotate-2" : "-rotate-2",
    };

    const updated = [newMemory, ...customMemories];
    setCustomMemories(updated);
    try {
      localStorage.setItem("misha_birthday_memories", JSON.stringify(updated));
    } catch {
      // storage quota safe
    }

    // Reset modal
    setNewTitle("");
    setNewNote("");
    setSelectedImage(null);
    setModalOpen(false);
  };

  const handleDeleteCustom = (id: string) => {
    const filtered = customMemories.filter((m) => m.id !== id);
    setCustomMemories(filtered);
    try {
      localStorage.setItem("misha_birthday_memories", JSON.stringify(filtered));
    } catch {
      // localStorage safe
    }
  };

  const allMemories = [...customMemories, ...defaultMemories];

  return (
    <section id="memories" className="relative py-20 px-4 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-950/60 border border-rose-500/30 text-rose-300 text-xs font-semibold mb-3">
          <Camera className="w-3.5 h-3.5 text-rose-400" />
          <span>Polaroid Memory Wall</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-bold text-white mb-3">
          Our Cherished Moments 📸
        </h2>
        <p className="text-rose-200/80 text-sm sm:text-base max-w-xl mx-auto mb-6">
          Every second spent with you is a memory worth keeping forever. You can even add
          your actual photos of Misha right here!
        </p>

        {/* Add Memory Button */}
        <button
          onClick={() => setModalOpen(true)}
          className="px-5 py-2.5 rounded-full bg-rose-600 hover:bg-rose-500 text-white font-medium text-xs sm:text-sm shadow-lg shadow-rose-600/30 inline-flex items-center gap-2 transition-all hover:scale-105"
        >
          <Plus className="w-4 h-4" />
          <span>Add Your Real Photos / Moments</span>
        </button>
      </div>

      {/* Polaroid Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
        {allMemories.map((m) => {
          const isCustom = m.id.startsWith("custom-");

          return (
            <div
              key={m.id}
              className={`group bg-neutral-100 dark:bg-[#1a0f18] p-4 rounded-xl shadow-2xl border border-rose-400/20 transform ${m.rotation} hover:rotate-0 hover:scale-105 transition-all duration-300 relative flex flex-col justify-between`}
            >
              {/* Tape effect on top */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-white/20 backdrop-blur-sm border border-white/30 rounded-sm shadow-sm rotate-1 pointer-events-none" />

              <div>
                {/* Photo frame */}
                <div className="aspect-[4/3] rounded-lg overflow-hidden relative shadow-inner mb-4 flex items-center justify-center bg-black/40 border border-rose-500/20">
                  {m.imageUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={m.imageUrl}
                      alt={m.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div
                      className={`w-full h-full bg-gradient-to-tr ${m.gradient} flex flex-col items-center justify-center p-6 text-center`}
                    >
                      <Heart className="w-10 h-10 text-rose-300 fill-rose-300/40 mb-2 animate-pulse" />
                      <span className="font-romantic text-2xl text-rose-100 tracking-wide">
                        {m.title}
                      </span>
                      <span className="text-[11px] text-rose-200/70 tracking-wider uppercase mt-1">
                        Misha &amp; Love
                      </span>
                    </div>
                  )}

                  {/* Aesthetic film grain/badge */}
                  <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm text-[10px] text-rose-200 font-mono flex items-center gap-1">
                    <Sparkles className="w-2.5 h-2.5 text-amber-300" />
                    <span>Memory</span>
                  </div>
                </div>

                {/* Caption / Handwritten style */}
                <div className="px-1 text-center sm:text-left">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-display font-bold text-lg text-rose-100 group-hover:text-rose-300 transition-colors">
                      {m.title}
                    </h3>
                    <span className="text-[11px] font-mono text-rose-400">
                      {m.date}
                    </span>
                  </div>
                  <p className="font-serif italic text-xs sm:text-sm text-rose-200/80 leading-relaxed">
                    &ldquo;{m.note}&rdquo;
                  </p>
                </div>
              </div>

              {/* Bottom footer for custom photo */}
              {isCustom && (
                <div className="mt-4 pt-2 border-t border-rose-500/20 flex justify-end">
                  <button
                    onClick={() => handleDeleteCustom(m.id)}
                    className="text-xs text-rose-400/60 hover:text-rose-400 p-1 flex items-center gap-1"
                    title="Remove this photo"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Remove</span>
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Add Memory Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="glass-panel rounded-3xl p-6 sm:p-8 max-w-md w-full border border-rose-500/40 shadow-2xl relative">
            <h3 className="font-display font-bold text-2xl text-white mb-2 flex items-center gap-2">
              <Camera className="w-5 h-5 text-rose-400" />
              <span>Add a Memory with Misha</span>
            </h3>
            <p className="text-xs text-rose-200/80 mb-6">
              Upload a picture of Misha or a special moment of both of you to add to this
              Polaroid wall.
            </p>

            <form onSubmit={handleAddMemory} className="space-y-4">
              {/* File upload input */}
              <div
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-rose-500/30 hover:border-rose-400/60 rounded-2xl p-4 text-center cursor-pointer bg-rose-950/20 hover:bg-rose-950/40 transition-all flex flex-col items-center justify-center min-h-[140px]"
              >
                {selectedImage ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={selectedImage}
                    alt="Preview"
                    className="max-h-36 object-contain rounded-lg shadow-md"
                  />
                ) : (
                  <>
                    <ImageIcon className="w-8 h-8 text-rose-400 mb-2" />
                    <span className="text-xs font-semibold text-rose-200">
                      Click to choose an image from device
                    </span>
                    <span className="text-[10px] text-rose-300/60 mt-1">
                      Supports JPG, PNG, WEBP
                    </span>
                  </>
                )}
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageUpload}
                  accept="image/*"
                  className="hidden"
                />
              </div>

              {/* Title Input */}
              <div>
                <label className="text-xs font-semibold text-rose-200 block mb-1">
                  Memory Title / Caption
                </label>
                <input
                  type="text"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="e.g. Our First Coffee Date"
                  className="w-full px-3.5 py-2 rounded-xl bg-black/50 border border-rose-500/30 text-rose-100 text-xs sm:text-sm focus:outline-none focus:border-rose-400"
                />
              </div>

              {/* Note Input */}
              <div>
                <label className="text-xs font-semibold text-rose-200 block mb-1">
                  Sweet Note
                </label>
                <textarea
                  value={newNote}
                  onChange={(e) => setNewNote(e.target.value)}
                  rows={3}
                  placeholder="e.g. You looked so stunning that day..."
                  className="w-full px-3.5 py-2 rounded-xl bg-black/50 border border-rose-500/30 text-rose-100 text-xs sm:text-sm focus:outline-none focus:border-rose-400 resize-none"
                />
              </div>

              {/* Buttons */}
              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="flex-1 py-2.5 rounded-xl bg-rose-950/60 hover:bg-rose-900 border border-rose-500/30 text-rose-300 text-xs font-semibold transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-semibold shadow-lg shadow-rose-600/30 transition-all"
                >
                  Save to Wall
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
