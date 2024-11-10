import { css } from "../../../../../../../../styled-system/css";

const group = css({
  h: "full",
});

const item = css({
  display: "inline-flex",
  flexDir: "row",
  h: "full",
  rowGap: "1",
  alignItems: "center",
  fontSize: "sm",
  color: {
    base: "#cebf92",
    _hover: "#f0e6d1",
  },
});

export { group, item };
