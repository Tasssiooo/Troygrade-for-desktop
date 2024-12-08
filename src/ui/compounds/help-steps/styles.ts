import { css } from "~/styled-system/css";

const container = css({
  display: "flex",
  flexDir: "column",
  alignItems: "center",
  w: "full",
  h: "full",
  p: "4",
  overflow: "auto",
});

const header = css({
  mt: "4",
  fontSize: "2xl",
});

const steps_container = css({
  spaceY: "4",
  mt: "4",
});

export { container, header, steps_container };
