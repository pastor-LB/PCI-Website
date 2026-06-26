import type { Config } from "tailwindcss";

// Tailwind v4 reads theme tokens from the `@theme` block in app/globals.css.
// This file is kept for tooling/editor support and documents the brand system.
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: "#382353",
          "purple-light": "#4A2E6B",
          "purple-dark": "#261640",
          gold: "#E09612",
          "gold-light": "#F0B030",
          "gold-dark": "#B87A0E",
          cream: "#FAF8F5",
          charcoal: "#1A1A2E",
          gray: "#64748B",
          "gray-light": "#F1F5F9",
          white: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        heading: ["var(--font-playfair)", "Playfair Display", "serif"],
      },
    },
  },
};

export default config;
