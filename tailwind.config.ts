import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#05080f",
        panel: "#0a1118",
        card: "#0d1720",
        cyanline: "#20e7f0"
      },
      boxShadow: {
        glow: "0 0 32px rgba(32, 231, 240, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
