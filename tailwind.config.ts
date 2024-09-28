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
        pri: "#0F3CB1",
        sec: "#FF0C0D",
      },
      fontFamily: {
        "h-bold": ["h-bold", "sans-serif"],
        "h-black": ["h-black", "sans-serif"],
        "h-heavy": ["h-heavy", "sans-serif"],
        "h-medium": ["h-medium", "sans-serif"],
        "h-normal": ["h-normal", "sans-serif"],
        "h-light": ["h-light", "sans-serif"],
        "h-thin": ["h-thin", "sans-serif"],
      },
      fontWeight: {
        heavy: "900",
        black: "800",
        bold: "700",
        medium: "500",
        light: "300",
        thin: "100",
      },
    },
  },
  plugins: [],
};
export default config;
