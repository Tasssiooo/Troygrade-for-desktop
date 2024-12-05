import { css } from "~/styled-system/css";

const root = css({
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  verticalAlign: "middle",
  overflow: "hidden",
});

const ring = css({
  pos: "absolute",
  w: "70px",
  h: "70px",
  backgroundPosition: "center",
  backgroundImage: "url(assets/images/social_panel_level_ring.png)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
});

const image = css({
  objectFit: "cover",
  rounded: "full",
  w: "11",
  h: "11",
});

export { root, ring, image };
