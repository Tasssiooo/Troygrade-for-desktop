import { css } from "~/styled-system/css";

const container = css({
  display: "flex",
  flexDir: "column",
  w: "max-content",
  spaceY: "4",
});

const input_area = css({
  display: "flex",
  flexDir: "column",
  spaceY: "2",
});

const checkbox_area = css({
  display: "flex",
  flexDir: "column",
  spaceY: "2",
  fontSize: "sm",
});

const button_area = css({
  display: "flex",
  flexDir: "row",
  justifyContent: "space-between",
});

export { container, input_area, checkbox_area, button_area };
