import { css } from "../../../../../../styled-system/css";

const header = css({
  borderBottom: "1px solid",
  w: "full",
  minH: "14",
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
