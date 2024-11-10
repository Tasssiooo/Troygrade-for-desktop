import { defineConfig } from "@pandacss/dev";
import { buttonRecipe } from "./src/ui/recipes";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,ts,vue}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      recipes: {
        button: buttonRecipe,
      },
    },
  },

  globalCss: {
    "*": {
      boxSizing: "border-box",
      userSelect: "none",
      cursor: "default",
    },
    html: {
      color: "hsla(0, 0%, 100%, 0.87)",
      fontFamily: "beaufortforlolja",
      fontWeight: "700",
      fontSynthesis: "none",
      textRendering: "optimizeLegibility",
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
      textSizeAdjust: "100%",
    },
    body: {
      w: "100vw",
      h: "100vh",
      overflow: "hidden",
      backgroundImage: "url(assets/images/background.png)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      border: "1px solid #1f292e",
      borderTopColor: "#a17b30",
    },
  },
  globalFontface: {
    beaufortforlolja: [
      {
        src: 'url(assets/fonts/beaufortforlolja-regular.ttf) format("TrueType")',
        fontWeight: 400,
        fontStyle: "normal",
        fontDisplay: "swap",
      },
      {
        src: 'url(assets/fonts/beaufortforlolja-bold.ttf) format("TrueType")',
        fontWeight: 700,
        fontStyle: "normal",
        fontDisplay: "swap",
      },
    ],
  },

  // The output directory for your css system
  outdir: "styled-system",
});
