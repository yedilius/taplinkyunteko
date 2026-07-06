import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0d0d0f",
        graphite: "#1d1d21",
        soft: "#f6f6f4",
        line: "#e8e8e3",
        accent: "#d71920"
      },
      boxShadow: {
        premium: "0 24px 80px rgba(13, 13, 15, 0.10)"
      }
    }
  },
  plugins: []
};

export default config;
