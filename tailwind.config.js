const themeConfig = require("./data/themeConfig.json");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./data/**/*.{js,ts,jsx,tsx}",
    "./hooks/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // ensure any `-violet` utility maps to your theme accent
        violet: themeConfig.accent.violet,
        abyss: themeConfig.base.bg0,
        ink: themeConfig.base.bg1,
        silver: themeConfig.base.textMain,
        neon: {
          violet: themeConfig.accent.violet,
          cyan: themeConfig.accent.cyan,
          magenta: themeConfig.accent.magenta,
          amber: themeConfig.accent.amber
        }
      },
      boxShadow: {
        glow: `0 0 35px ${themeConfig.accent.violet}73`,
        card: "0 20px 60px rgba(6, 7, 20, 0.55)"
      },
      backgroundImage: {
        "mesh-gradient": `radial-gradient(circle at 15% 20%, ${themeConfig.accent.violet}40, transparent 38%), radial-gradient(circle at 85% 10%, ${themeConfig.accent.cyan}2e, transparent 42%), radial-gradient(circle at 55% 75%, ${themeConfig.accent.magenta}2e, transparent 40%)`
      },
      animation: {
        pulseCue: "pulseCue 2.4s ease-in-out infinite",
        shimmer: "shimmer 6s ease-in-out infinite"
      },
      keyframes: {
        pulseCue: {
          "0%, 100%": { opacity: "0.25", transform: "translateY(0px)" },
          "50%": { opacity: "1", transform: "translateY(8px)" }
        },
        shimmer: {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.08)" }
        }
      }
    }
  },
  plugins: []
};