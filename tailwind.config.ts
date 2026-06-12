import typography from "@tailwindcss/typography";
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
        primary: {
          50: "#f0f3ff",
          100: "#e0e7ff",
          200: "#c7d2fe",
          300: "#a5b4fc",
          400: "#818cf8",
          500: "#6366f1",
          600: "#4f46e5",
          700: "#4338ca",
          800: "#3730a3",
          900: "#011a48",
          950: "#010e2a",
        },
        gold: {
          50: "#fffdf0",
          100: "#fffbe0",
          200: "#fff3a3",
          300: "#ffe88a",
          400: "#ffd95e",
          500: "#ffc629",
          600: "#e9a800",
          700: "#c28c00",
          800: "#9b7000",
          900: "#735c00",
        },
        neutral: {
          50: "#fbf8fd",
          100: "#f5f3f7",
          200: "#efedf2",
          300: "#e9e7ec",
          400: "#e3e2e6",
          500: "#c5c6d0",
          600: "#757780",
          700: "#44464f",
          800: "#1b1b1f",
          900: "#0e0e12",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.4s ease forwards",
        "slide-in-left": "slideInLeft 0.5s ease forwards",
        "slide-in-right": "slideInRight 0.5s ease forwards",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      boxShadow: {
        "glow-primary": "0 0 40px rgba(79, 70, 229, 0.25)",
        "glow-gold": "0 0 40px rgba(255, 198, 41, 0.3)",
        card: "0 4px 24px rgba(1, 26, 72, 0.08)",
        "card-hover": "0 12px 48px rgba(1, 26, 72, 0.16)",
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #011a48 0%, #1b305e 50%, #324574 100%)",
        "gold-gradient": "linear-gradient(135deg, #ffc629 0%, #ffd95e 100%)",
        "card-gradient":
          "linear-gradient(180deg, rgba(1,26,72,0) 0%, rgba(1,26,72,0.8) 100%)",
        "shimmer-gradient":
          "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)",
      },
    },
  },
  plugins: [typography],
};

export default config;