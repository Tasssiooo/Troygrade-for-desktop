import { css } from "../../../../../../../../../../styled-system/css";

const choose_container = css({
  pos: "relative",
  h: "10",
});

const choose_wrapper = css({
  display: "flex",
  pos: "absolute",
  top: "50%",
  flexDir: "row",
  justifyContent: "space-between",
  w: "full",
});

const choices = css({
  display: "flex",
  flexDir: "row",
  spaceX: "2",
});

export { choose_container, choose_wrapper, choices };
