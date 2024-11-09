import { css } from "../../../../../../styled-system/css";

const header = css({
  w: "full",
  minH: "14",
  borderBottom: "1px solid",
});

const header_wrapper = css({
  display: "flex",
  flexDir: "row",
  alignItems: "center",
  spaceX: "4",
  pb: "5",
  pt: "4",
  px: "4",
})

export {
  header,
  header_wrapper,
};
