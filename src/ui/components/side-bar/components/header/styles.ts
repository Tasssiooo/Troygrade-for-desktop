import { css } from "../../../../../../styled-system/css";

const header = css({
  borderBottom: "1px solid #1f292e",
  w: "full",
  h: "max-content",
});

const header_wrapper = css({
  display: "flex",
  flexDir: "row",
  alignItems: "center",
  spaceX: "4",
  px: "4",
  pt: "4",
  pb: "5",
});

export { header, header_wrapper };
