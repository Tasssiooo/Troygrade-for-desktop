import { css } from "~/styled-system/css";

const filter_area = css({
  display: "flex",
  flexDir: "row",
  border: "1px solid transparent",
  w: "full",
  h: "30px",
  mb: "1",
  py: "1",
  pr: "1.5",
  backgroundImage: "linear-gradient(180deg,rgba(7,16,25,.7),rgba(32,39,44,.7))",
  borderImage: "linear-gradient(180deg,#785a28,#c8aa6e) 1 stretch",
});

const filter = css({
  outline: "none",
  w: "full",
  color: "#f0e6d2",
  fontSize: "sm",
  bg: "transparent",
});

const label = css({
  flexShrink: "0",
  w: "30px",
  h: "full",
  bg: "#c8aa6e",
  mask: "url(assets/images/search_mask.png) no-repeat center",
  maskSize: "20px",
});

export { filter_area, filter, label };
