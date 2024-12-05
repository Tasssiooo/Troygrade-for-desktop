import { css } from "~/styled-system/css";

const section = css({
  pos: "relative",
  zIndex: "50",
  minW: "52",
  h: "full",
  bg: "#010a13",
});

const section_wrapper = css({
  display: "flex",
  flexDir: "column",
  w: "full",
  h: "full",
});

export { section, section_wrapper };
