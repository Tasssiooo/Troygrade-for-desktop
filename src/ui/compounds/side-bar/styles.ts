import { css } from "~/styled-system/css";

const section = css({
  zIndex: "50",
  pos: "relative",
  minW: "212px",
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
