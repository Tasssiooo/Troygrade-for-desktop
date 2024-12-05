import { css } from "~/styled-system/css";

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

export { choose_container, choose_wrapper };
