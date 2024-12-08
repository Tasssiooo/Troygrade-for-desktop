import { css } from "~/styled-system/css";

const roster_area = css({
  w: "full",
  h: "full",
});

const roster_root = css({
  w: "full",
  h: "full",
  maxH: "428px",
  overflowX: "hidden",
  overflowY: "auto",
});

const roster_item = css({
  w: "full",
  h: "max-content",
});

export { roster_area, roster_root, roster_item };
