import { css } from "../../../../../../styled-system/css";

const footer = css({
  display: "flex",
  flexDir: "row",
  w: "full",
  h: "8",
});

const anchor_wrapper = css({
  display: "flex",
  flexDir: "row",
  spaceX: "1",
});

const app_version = css({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderTop: "1px solid #1f292e",
  w: "full",
  h: "8",
  color: "#737373",
  textAlign: "center",
  fontSize: "xs",
});

export { footer, anchor_wrapper, app_version };
