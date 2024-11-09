import { defineRecipe } from "@pandacss/dev";

export const buttonRecipe = defineRecipe({
  className: "button",
  description:
    "Styles for mask buttons (icons without background) and square buttons (icons in a black square with golden borders).",
  base: {
    cursor: "default",
  },
  variants: {
    visual: {
      mask: {
        w: "18px",
        h: "18px",
        bg: { base: "#cebf92", _hover: "#f0e6d1" },
        maskSize: "contain",
      },
      square: {
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid",
        borderBottom: {
          base: "1px solid #6b5028",
          _hover: "3px solid #c99c3f",
          _active: "1px solid",
        },
        borderColor: { base: "#a07a30", _active: "#614920" },
        borderTopColor: { base: "#c7a86b", _hover: "#f0e5d1" },
        h: "8",
        p: "2px 3px",
        color: { base: "#cebf92", _hover: "#f0e6d1", _active: "#775a28" },
        bg: { base: "#131920", _active: "#1f2429" },
      },
    },
    mask: {
      close: {
        maskImage: "url(src/assets/images/control-close.png)",
      },
      help: {
        maskImage: "url(src/assets/images/control-help.png)",
      },
      hide: {
        maskImage: "url(src/assets/images/control-hide.png)",
      },
    },
  },
});
