import { css } from "~/styled-system/css";

const drag_area = css({
  display: "flex",
  zIndex: "99",
  pos: "absolute",
  top: "0",
  left: "0",
  flexDir: "row",
  justifyContent: "end",
  w: "full",
  h: "8",
});

const controllers_wrapper = css({
  display: "flex",
  zIndex: "0",
  pos: "relative",
  top: "1",
  px: "2.5",
});

const controllers_area = css({
  display: "flex",
  flexDir: "row",
  spaceX: "4",
});

export { drag_area, controllers_wrapper, controllers_area };
