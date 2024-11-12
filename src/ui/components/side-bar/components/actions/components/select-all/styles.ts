import { css } from "../../../../../../../../styled-system/css";

const group = css({
  h: "full",
});

const item = css({
  display: "inline-flex",
  flexDir: "row",
  alignItems: "center",
  rowGap: "1",
  h: "full",
  color: {
    base: "#cebf92",
    _hover: "#f0e6d1",
  },
  fontSize: "sm",
});

export { group, item };
