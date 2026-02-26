module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
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
        neutral: {
          DEFAULT: "hsl(258, 22%, 11%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        success: "hsl(145, 55%, 45%)",
        warning: "hsl(38, 95%, 55%)",
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
        popover: {
          DEFAULT: "hsl(258, 28%, 8%)",
          foreground: "hsl(0, 0%, 95%)",
        },
        card: {
          DEFAULT: "hsl(258, 22%, 11%)",
          foreground: "hsl(0, 0%, 95%)",
        },
        gray: {
          50: "hsl(0, 0%, 98%)",
          100: "hsl(0, 0%, 94%)",
          200: "hsl(0, 0%, 88%)",
          300: "hsl(0, 0%, 74%)",
          400: "hsl(0, 0%, 60%)",
          500: "hsl(0, 0%, 46%)",
          600: "hsl(0, 0%, 34%)",
          700: "hsl(0, 0%, 24%)",
          800: "hsl(0, 0%, 14%)",
          900: "hsl(0, 0%, 9%)",
        },
      },
      fontFamily: {
        sans: ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
        serif: ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
        display: ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        lg: "4px",
        md: "2px",
        sm: "1px",
        full: "9999px",
      },
      spacing: {
        '4': '1rem',
        '8': '2rem',
        '12': '3rem',
        '16': '4rem',
        '24': '6rem',
        '32': '8rem',
        '48': '12rem',
        '64': '16rem',
      },
      backgroundImage: {
        'gradient-1': 'linear-gradient(135deg, hsl(335, 85%, 58%) 0%, hsl(38, 95%, 55%) 100%)',
        'gradient-2': 'linear-gradient(120deg, hsl(38, 95%, 55%) 0%, hsl(335, 85%, 58%) 60%, hsl(258, 22%, 11%) 100%)',
        'button-border-gradient': 'linear-gradient(90deg, hsl(38, 95%, 65%), hsl(335, 85%, 58%), hsl(38, 95%, 65%))',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
