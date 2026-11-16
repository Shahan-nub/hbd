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

  // Romantic pentatonic chord progression (Fmaj9, Cmaj7, Dm9, Am7, Bbmaj7)
  const notes = [
    // Fmaj9
    [174.61, 261.63, 329.63, 349.23, 440.0],
    // Cmaj7
    [130.81, 196.0, 246.94, 261.63, 329.63],
    // Dm9
    [146.83, 220.0, 261.63, 293.66, 349.23],
    // Bbmaj7
    [116.54, 174.61, 220.0, 233.08, 293.66],
  ];

  const melodyNotes = [
    349.23, 392.0, 440.0, 523.25, 440.0, 392.0, 349.23, 329.63,
    261.63, 293.66, 329.63, 349.23, 392.0, 440.0, 523.25, 587.33,
  ];

  const playTone = (
    ctx: AudioContext,
    destination: AudioNode,
    freq: number,
    time: number,
    duration: number,
    type: OscillatorType = "sine",
    vol: number = 0.15
  ) => {
    try {
      const osc = ctx.createOscillator();
      const noteGain = ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, time);

      // Soft envelope for dreamy music-box feel
      noteGain.gain.setValueAtTime(0.0001, time);
      noteGain.gain.exponentialRampToValueAtTime(vol, time + 0.05);
      noteGain.gain.exponentialRampToValueAtTime(0.0001, time + duration);

      osc.connect(noteGain);
      noteGain.connect(destination);

      osc.start(time);
      osc.stop(time + duration);
    } catch {
      // Audio node scheduling safe guard
    }
  };

  const startRomanticLoop = (ctx: AudioContext, gain: GainNode) => {
    let chordIndex = 0;
    let melodyIndex = 0;

    const scheduleNext = () => {
      if (!isPlayingRef.current) return;

      const now = ctx.currentTime;
      const currentChord = notes[chordIndex % notes.length];

      // Play soft warm chord tones
      currentChord.forEach((freq, idx) => {
        playTone(ctx, gain, freq, now + idx * 0.08, 3.2, "triangle", 0.04);
      });

      // Play gentle music-box melody notes
      for (let i = 0; i < 4; i++) {
        const mFreq = melodyNotes[(melodyIndex + i) % melodyNotes.length];
        playTone(ctx, gain, mFreq, now + i * 0.7, 1.2, "sine", 0.07);
        // Harmonic bell overtone
        playTone(ctx, gain, mFreq * 2, now + i * 0.7 + 0.02, 0.8, "sine", 0.02);
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
    <div className="fixed bottom-5 right-5 z-50 flex items-center gap-3">
      {/* Floating Pill Player */}
      <div className="glass-panel px-4 py-2.5 rounded-full flex items-center gap-3 shadow-2xl border border-rose-500/30 hover:border-rose-400/60 transition-all duration-300">
        <button
          onClick={toggleMusic}
          aria-label={isPlaying ? "Pause Romantic Music" : "Play Romantic Music"}
          className={`relative p-2 rounded-full transition-all duration-300 ${
            isPlaying
              ? "bg-rose-500 text-white shadow-lg shadow-rose-500/50 scale-105"
              : "bg-rose-950/60 text-rose-300 hover:text-white hover:bg-rose-900/60"
          }`}
        >
          {isPlaying ? (
            <Volume2 className="w-4 h-4 animate-pulse" />
          ) : (
            <VolumeX className="w-4 h-4" />
          )}
        </button>

        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <Music className="w-3.5 h-3.5 text-rose-400 animate-spin-slow" />
            <span className="text-xs font-semibold text-rose-100 tracking-wide">
              {isPlaying ? "Misha's Lullaby" : "Play Soft Melody"}
            </span>
            {isPlaying && (
              <span className="flex gap-0.5 items-end h-3 ml-1">
                <span className="w-0.5 h-2 bg-rose-400 animate-bounce" />
                <span className="w-0.5 h-3 bg-pink-300 animate-bounce [animation-delay:0.15s]" />
                <span className="w-0.5 h-1.5 bg-rose-400 animate-bounce [animation-delay:0.3s]" />
              </span>
            )}
          </div>
          <span className="text-[10px] text-rose-300/70">
            {isPlaying ? "Romantic Piano & Chimes" : "Tap to enjoy music"}
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
            className="w-16 h-1 bg-rose-900/60 rounded-lg appearance-none cursor-pointer accent-rose-400"
            title="Music Volume"
          />
        )}
      </div>
    </div>
  );
}
