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
        maskPosition: "center",
        maskRepeat: "no-repeat",
        maskSize: "contain",
      },
      square: {
        display: "flex",
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
        minW: "38px",
        minH: "8",
        color: { base: "#cdbe91", _hover: "#f0e6d2", _active: "#785a28" },
        bg: { base: "#1e2328", _active: "#1e2328" },
        "> svg": {
          outlineOffset: "-1",
          outlineWidth: "2",
          w: "7",
          h: "5",
          py: "0.5",
          outlineColor: "#141a21",
          fontSize: "20px",
          outlineStyle: "solid",
        },
      },
      dialog: {
        display: "flex",
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
        minW: "70px",
        minH: "8",
        px: "2",
        color: { base: "#cdbe91", _hover: "#f0e6d2", _active: "#785a28" },
        bg: { base: "#1e2328", _active: "#1e2328" },
      },
    },
    mask: {
      close: {
        maskImage: "url(assets/images/control-close.png)",
      },
      help: {
        maskImage: "url(assets/images/control-help.png)",
      },
      hide: {
        maskImage: "url(assets/images/control-hide.png)",
      },
      add: {
        w: "30px",
        h: "30px",
        maskImage: "url(assets/images/icon_plus.png)",
        maskSize: "12px",
      },
      filter: {
        w: "30px",
        h: "30px",
        maskImage: "url(assets/images/search_mask.png)",
        maskSize: "18px",
      },
      batch: {
        w: "30px",
        h: "30px",
        maskImage: "url(assets/images/sort_mask.png)",
        maskSize: "18px",
      },
    },
  },
});
