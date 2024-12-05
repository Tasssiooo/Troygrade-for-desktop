import { css } from "~/styled-system/css";

const toast = css({
  display: "flex",
  flexDir: "row",
  alignItems: "center",
  border: "1px solid transparent",
  borderColor: "#1f292e",
  rounded: "none",
  w: "360px",
  spaceX: "4",
  p: "4",
  bg: "#010a13",
  shadow: "lg",
  borderImage:
    "linear-gradient(to top,#785a28 0,#463714 50%,#463714 100%) 1 stretch",
});

const description = css({
  display: "inline-block",
  w: "290px",
  color: "#737373",
  textOverflow: "ellipsis",
  fontSize: "sm",
  overflow: "hidden",
  whiteSpace: "nowrap",
});

const close_button = css({
  top: "0.5!",
  left: "auto!",
  right: "1!",
  translate: "7px 7px!",
  w: "1.25rem!",
  h: "1.25rem!",
  bg: "#785a28!",
  maskRepeat: "no-repeat!",
  maskPosition: "center!",
  maskImage: "url(assets/images/x-icon.png)!",
  maskSize: "12px!",
});

const error_icon = css({
  color: "#cebf92",
  fontSize: "2xl",
});

export { toast, description, close_button, error_icon };
