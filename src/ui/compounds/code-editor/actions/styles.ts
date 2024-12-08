import { css } from "~/styled-system/css";

const container = css({
  display: "flex",
  flexDir: "row",
  justifyContent: "space-between",
  alignItems: "center",
  borderBottom: "2px solid #775928",
  w: "95%",
  minH: "70px",
  mt: "3",
  px: "2",
  bg: "#010a13",
});

const filename = css({
  w: "330px",
  textOverflow: "ellipsis",
  overflow: "hidden",
  whiteSpace: "nowrap",
});

const buttons_container = css({
  display: "flex",
  flexDir: "row",
  justifyContent: "end",
  alignItems: "center",
  w: "40%",
  spaceX: "5",
});

export { container, filename, buttons_container };
