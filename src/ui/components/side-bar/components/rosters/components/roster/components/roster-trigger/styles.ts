import { css } from "../../../../../../../../../../styled-system/css";

const header = css({
  display: "flex",
});

const trigger = css({
  display: "flex",
  flex: "1",
  alignItems: "center",
  columnGap: "3",
  h: "6",
  px: "2.5",
  letterSpacing: "0.075em",
  textTransform: "uppercase",
  fontSize: "xs",
  lineHeight: "4",
  _hover: {
    color: "#f5f5f5",
    bg: "#696969",
  },
});

const arrow = css({
  rotate: "-90deg",
  border: "4px solid transparent",
  borderTopColor: "#ffffdd",
  _groupExpanded: {
    rotate: "0deg",
  },
});

export { header, trigger, arrow };
