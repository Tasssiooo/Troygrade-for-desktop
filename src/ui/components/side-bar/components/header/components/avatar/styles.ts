import { css } from "../../../../../../../../styled-system/css";

const root = css({
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  verticalAlign: "middle",
  overflow: "hidden",
});

const ring = css({
  pos: "absolute",
  backgroundImage: "url(assets/images/social_panel_level_ring.png)",
  backgroundPosition: "center",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  w: "70px",
  h: "70px",
});

const image = css({
  w: "11",
  h: "11",
  objectFit: "cover",
  rounded: "full",
});

export {
  root,
  ring,
  image,
};
