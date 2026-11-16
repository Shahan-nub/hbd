import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        beige: {
          50: "#fdfbf7",
          100: "#f8f4ec",
          200: "#f0e7d8",
          300: "#e6d5bf",
          400: "#d7be9f",
          500: "#c5a47e",
          600: "#b38d64",
          700: "#96704d",
          800: "#7a5a3f",
          900: "#634934",
          950: "#36261a",
        },
        warmBrown: {
          50: "#f7f5f2",
          100: "#ece7e1",
          200: "#d8cec3",
          300: "#c1b0a1",
          400: "#a9927d",
          500: "#8f7663",
          600: "#705b4c",
          700: "#57463b",
          800: "#493b32",
          900: "#3d322b",
          950: "#221b17",
        },
        champagne: {
          100: "#fbf6ee",
          200: "#f5e8d3",
          300: "#eed8b6",
          400: "#e4c492",
          500: "#d8ad6c",
        },
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", "Georgia", "Cambria", "'Times New Roman'", "serif"],
        display: ["'Playfair Display'", "'Cormorant Garamond'", "Georgia", "serif"],
        romantic: ["'Alex Brush'", "'Great Vibes'", "cursive"],
        urdu: ["'Noto Nastaliq Urdu'", "'Amiri'", "serif"],
      },
      animation: {
        "float-slow": "float 6s ease-in-out infinite",
        "float-medium": "float 4s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2.5s ease-in-out infinite",
        "shimmer": "shimmer 3s infinite linear",
        "spin-slow": "spin 20s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.04)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
