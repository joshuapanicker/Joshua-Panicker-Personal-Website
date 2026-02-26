import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(258, 16%, 18%)",
        input: "hsl(258, 16%, 14%)",
        ring: "hsl(335, 85%, 58%)",
        background: "hsl(258, 28%, 8%)",
        foreground: "hsl(0, 0%, 95%)",
        primary: {
          DEFAULT: "hsl(335, 85%, 58%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        secondary: {
          DEFAULT: "hsl(38, 95%, 55%)",
          foreground: "hsl(0, 0%, 8%)",
        },
        tertiary: {
          DEFAULT: "hsl(350, 80%, 55%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        card: {
          DEFAULT: "hsl(258, 22%, 11%)",
          foreground: "hsl(0, 0%, 95%)",
        },
        success: "hsl(145, 55%, 45%)",
        destructive: {
          DEFAULT: "hsl(0, 84%, 60%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        muted: {
          DEFAULT: "hsl(258, 18%, 14%)",
          foreground: "hsl(0, 0%, 60%)",
        },
        accent: {
          DEFAULT: "hsl(38, 95%, 55%)",
          foreground: "hsl(0, 0%, 8%)",
        },
      },
      fontFamily: {
        sans: ['"Helvetica Neue"', "Helvetica", "Arial", "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      backgroundImage: {
        "gradient-1":
          "linear-gradient(135deg, hsl(335, 85%, 58%) 0%, hsl(38, 95%, 55%) 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
