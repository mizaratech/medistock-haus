import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#2C7BE5",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#4CC3C1",
          foreground: "#FFFFFF",
        },
        warning: {
          DEFAULT: "#FF9F43",
          foreground: "#FFFFFF",
        },
        destructive: {
          DEFAULT: "#FF5A5A",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#F7F9FC",
          foreground: "#6E7A8A",
        },
        accent: {
          DEFAULT: "#E3F2FD",
          foreground: "#2C7BE5",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;