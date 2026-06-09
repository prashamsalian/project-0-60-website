import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#C9A84C",
        "primary-light": "#E2C06D",
        "primary-dark": "#A8853A",
        dark: "#0A0A0A",
        surface: "#111111",
        surface2: "#1A1A1A",
        "border-gold": "#2A2A2A",
        muted: "#A0A0A0",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #C9A84C 0%, #E2C06D 50%, #A8853A 100%)",
        "dark-gradient": "linear-gradient(180deg, #0A0A0A 0%, #111111 100%)",
      },
      animation: {
        "bounce-slow": "bounce 2s infinite",
        "pulse-gold": "pulseGold 2s ease-in-out infinite",
        "spin-slow": "spin 8s linear infinite",
      },
      keyframes: {
        pulseGold: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(201, 168, 76, 0)" },
          "50%": { boxShadow: "0 0 20px 8px rgba(201, 168, 76, 0.3)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
