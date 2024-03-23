import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      display: ["beaufortforlolja", ...defaultTheme.fontFamily.serif],
    },
    extend: {
      colors: {
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        border: "hsl(var(--border))",
        background: {
          DEFAULT: "hsl(var(--background))",
          accent: "hsl(var(--background-accent))",
          active: "hsl(var(--background-active))",
        },
        foreground: {
          DEFAULT: "hsla(var(--foreground))",
          accent: "hsl(var(--foreground-accent))",
          muted: "hsl(var(--foreground-muted))",
          highlight: "hsl(var(--foreground-highlight))"
        },
        button: {
          DEFAULT: "hsl(var(--button))",
          active: "hsl(var(--button-active))",
          inner: "hsl(var(--button-inner))",
          foreground: {
            DEFAULT: "hsla(var(--button-foreground))",
            accent: "hsl(var(--button-foreground-accent))",
            active: "hsl(var(--button-foreground-active))",
            muted: "hsl(var(--button-foreground-muted))",
          },
          border: "hsl(var(--button-border-active))",
        },
      },
      backgroundSize: {
        "window-sm": "1024px 576px",
        "window-lg": "1280px 720px",
      },
    },
  },
  plugins: [],
};
