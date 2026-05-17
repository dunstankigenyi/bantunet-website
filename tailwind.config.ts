import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        bantunet: {
          navy: "#071a3a",
          blue: "#0f3d73",
          green: "#22c55e",
          mint: "#a7f3d0",
          cyan: "#38bdf8",
          ink: "#0f172a",
          mist: "#f8fbff"
        }
      },
      boxShadow: {
        glow: "0 24px 80px rgba(34, 197, 94, 0.22)",
        soft: "0 24px 70px rgba(15, 23, 42, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
