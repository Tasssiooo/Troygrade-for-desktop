import { css } from "../../../../../../styled-system/css";

const filter_area = css({
  display: "flex",
  flexDir: "row",
  py: "1",
  pr: "1.5",
  mb: "1",
  border: "1px solid transparent",
  w: "full",
  h: "30px",
  backgroundImage: "linear-gradient(180deg,rgba(7,16,25,.7),rgba(32,39,44,.7))",
  borderImage: "linear-gradient(180deg,#785a28,#c8aa6e) 1 stretch",
});

const filter = css({
  bg: "transparent",
  w: "full",
  outline: "none",
  color: "#f0e6d2",
  fontSize: "sm",
});

const label = css({
  bg: "#c8aa6e",
  flexShrink: "0",
  w: "30px",
  h: "full",
  mask: "url(assets/images/search_mask.png) no-repeat center",
  maskSize: "20px",
});

export { filter_area, filter, label };
