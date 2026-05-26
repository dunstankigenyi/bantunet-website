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
        "glow-sm": "0 10px 30px rgba(34, 197, 94, 0.20)",
        soft: "0 24px 70px rgba(15, 23, 42, 0.12)",
        card: "0 18px 45px rgba(15, 23, 42, 0.08)"
      },
      backgroundImage: {
        "hero-mesh":
          "linear-gradient(135deg, rgba(34, 197, 94, 0.14), transparent 34%), linear-gradient(315deg, rgba(56, 189, 248, 0.10), transparent 38%)"
      }
    }
  },
  plugins: []
};

export default config;
