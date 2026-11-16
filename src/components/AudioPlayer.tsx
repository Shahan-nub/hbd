"use client";

import React, { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX, Music } from "lucide-react";

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const isPlayingRef = useRef(false);
  const loopTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Romantic acoustic chord progression (Cmaj7, Am9, Fmaj7, G6)
  const notes = [
    [130.81, 196.0, 246.94, 261.63, 329.63],
    [110.0, 164.81, 220.0, 261.63, 329.63],
    [174.61, 220.0, 261.63, 329.63, 392.0],
    [196.0, 246.94, 293.66, 329.63, 392.0],
  ];

  const melodyNotes = [
    329.63, 392.0, 440.0, 523.25, 440.0, 392.0, 329.63, 293.66,
    261.63, 293.66, 329.63, 392.0, 440.0, 523.25, 587.33, 659.25,
  ];

  const playTone = (
    ctx: AudioContext,
    destination: AudioNode,
    freq: number,
    time: number,
    duration: number,
    type: OscillatorType = "sine",
    vol: number = 0.12
  ) => {
    try {
      const osc = ctx.createOscillator();
      const noteGain = ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, time);

      noteGain.gain.setValueAtTime(0.0001, time);
      noteGain.gain.exponentialRampToValueAtTime(vol, time + 0.05);
      noteGain.gain.exponentialRampToValueAtTime(0.0001, time + duration);

      osc.connect(noteGain);
      noteGain.connect(destination);

      osc.start(time);
      osc.stop(time + duration);
    } catch {
      // Safe guard
    }
  };

  const startRomanticLoop = (ctx: AudioContext, gain: GainNode) => {
    let chordIndex = 0;
    let melodyIndex = 0;

    const scheduleNext = () => {
      if (!isPlayingRef.current) return;

      const now = ctx.currentTime;
      const currentChord = notes[chordIndex % notes.length];

      currentChord.forEach((freq, idx) => {
        playTone(ctx, gain, freq, now + idx * 0.08, 3.2, "triangle", 0.035);
      });

      for (let i = 0; i < 4; i++) {
        const mFreq = melodyNotes[(melodyIndex + i) % melodyNotes.length];
        playTone(ctx, gain, mFreq, now + i * 0.7, 1.2, "sine", 0.06);
        playTone(ctx, gain, mFreq * 2, now + i * 0.7 + 0.02, 0.8, "sine", 0.015);
      }

      chordIndex++;
      melodyIndex = (melodyIndex + 4) % melodyNotes.length;

      loopTimerRef.current = setTimeout(scheduleNext, 2800);
    };

    scheduleNext();
  };

  const initAudio = () => {
    if (!audioCtxRef.current) {
      const AudioContextClass =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioContextClass();
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(volume, ctx.currentTime);
      masterGain.connect(ctx.destination);

      audioCtxRef.current = ctx;
      gainNodeRef.current = masterGain;
    }

    if (audioCtxRef.current.state === "suspended") {
      audioCtxRef.current.resume();
    }
  };

  const toggleMusic = () => {
    initAudio();
    if (!audioCtxRef.current || !gainNodeRef.current) return;

    if (isPlaying) {
      isPlayingRef.current = false;
      setIsPlaying(false);
      if (loopTimerRef.current) clearTimeout(loopTimerRef.current);
    } else {
      isPlayingRef.current = true;
      setIsPlaying(true);
      startRomanticLoop(audioCtxRef.current, gainNodeRef.current);
    }
  };

  useEffect(() => {
    if (gainNodeRef.current && audioCtxRef.current) {
      gainNodeRef.current.gain.setValueAtTime(
        isPlaying ? volume : 0.0001,
        audioCtxRef.current.currentTime
      );
    }
  }, [volume, isPlaying]);

  useEffect(() => {
    return () => {
      isPlayingRef.current = false;
      if (loopTimerRef.current) clearTimeout(loopTimerRef.current);
      if (audioCtxRef.current && audioCtxRef.current.state !== "closed") {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  return (
    <div className="fixed bottom-3 right-3 sm:bottom-5 sm:right-5 z-50 flex items-center gap-2 sm:gap-3 max-w-[calc(100vw-24px)]">
      <div className="glass-panel px-3 py-2 sm:px-4 sm:py-2.5 rounded-full flex items-center gap-2 sm:gap-3 shadow-xl border border-beige-300/80 hover:border-beige-500/70 transition-all duration-300">
        <button
          onClick={toggleMusic}
          aria-label={isPlaying ? "Pause Romantic Music" : "Play Romantic Music"}
          className={`relative p-1.5 sm:p-2 rounded-full transition-all duration-300 shrink-0 ${
            isPlaying
              ? "bg-beige-700 text-white shadow-md shadow-beige-700/30 scale-105"
              : "bg-beige-200/80 text-warmBrown-700 hover:bg-beige-300"
          }`}
        >
          {isPlaying ? (
            <Volume2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-pulse" />
          ) : (
            <VolumeX className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          )}
        </button>

        <div className="flex flex-col min-w-0">
          <div className="flex items-center gap-1.5 truncate">
            <Music className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-beige-700 animate-spin-slow shrink-0" />
            <span className="text-[11px] sm:text-xs font-semibold text-warmBrown-950 tracking-wide truncate">
              {isPlaying ? "Misha's Melody" : "Play Soft Music"}
            </span>
            {isPlaying && (
              <span className="flex gap-0.5 items-end h-2.5 sm:h-3 ml-1 shrink-0">
                <span className="w-0.5 h-2 bg-beige-600 animate-bounce" />
                <span className="w-0.5 h-3 bg-beige-400 animate-bounce [animation-delay:0.15s]" />
                <span className="w-0.5 h-1.5 bg-beige-600 animate-bounce [animation-delay:0.3s]" />
              </span>
            )}
          </div>
          <span className="text-[9px] sm:text-[10px] text-warmBrown-500 truncate hidden xs:inline">
            {isPlaying ? "Romantic Piano & Chimes" : "Tap to enjoy sound"}
          </span>
        </div>

        {isPlaying && (
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            className="w-12 sm:w-16 h-1 bg-beige-300 rounded-lg appearance-none cursor-pointer accent-beige-700 hidden sm:block"
            title="Music Volume"
          />
        )}
      </div>
    </div>
  );
}
