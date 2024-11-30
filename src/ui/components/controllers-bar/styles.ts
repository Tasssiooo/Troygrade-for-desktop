import { css } from "../../../../styled-system/css";

const drag_area = css({
  display: "flex",
  pos: "absolute",
  top: "0",
  left: "0",
  zIndex: "99",
  flexDir: "row",
  justifyContent: "end",
  w: "full",
  h: "8",
});

const controllers_wrapper = css({
  display: "flex",
  pos: "relative",
  top: "1",
  zIndex: "0",
  px: "2.5",
});

const controllers_area = css({
  display: "flex",
  flexDir: "row",
  spaceX: "4",
});

export { drag_area, controllers_wrapper, controllers_area };
