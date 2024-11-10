import { defineRecipe } from "@pandacss/dev";

export const toggleRecipe = defineRecipe({
  className: "toggle",
  description: "Styles for toggle buttons.",
  base: {
    w: "5",
    h: "5",
    mr: "1",
    flexShrink: "0",
    backgroundImage: "url(assets/images/btn_icon.png)",
    backgroundSize: "cover",
  },
  variants: {
    turned: {
      off: {
        backgroundPosition: {
          base: "0px 0px",
          _groupHover: "0px -20px",
          _groupActive: "0px -40px",
        },
      },
      on: {
        backgroundPosition: {
          base: "0px -80px",
          _groupHover: "0px -100px",
          _groupActive: "0px -120px",
        },
      },
    },
  },
});
