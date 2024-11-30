import { css } from "../../../../styled-system/css";

const content = css({
  border: "1px solid transparent",
  fontSize: "sm",
  bg: "#1a1c21",
  p: "1.5",
  borderImage:
    "linear-gradient(to top,#785b28 0%,#c89c3c 55%,#c8a355 71%,#c8aa6e 100%) 1 stretch",
});

const arrow = css({
  pos: "relative",
  top: "-1px",
});

export { content, arrow };
