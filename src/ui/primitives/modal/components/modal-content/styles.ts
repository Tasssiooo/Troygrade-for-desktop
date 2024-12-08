import { css } from "~/styled-system/css";

const overlay = css({
  zIndex: "99",
  pos: "fixed",
  inset: "0",
  bg: "black/40",
});

const content = css({
  display: "flex",
  zIndex: "100",
  pos: "fixed",
  top: "0",
  justifyContent: "center",
  alignItems: "center",
  w: "full",
  h: "full",
});

const body = css({
  pos: "relative",
  border: "1px solid transparent",
  maxW: "812px",
  p: "1.5rem",
  bg: "#010a13",
  borderImage:
    "linear-gradient(to top, #785a28 0, #463714 50%, #463714 100%) 1 stretch",
  _focus: {
    outline: "none",
  },
});

const close = css({
  display: "flex",
  pos: "absolute",
  top: "-18px",
  right: "-22px",
  justifyContent: "center",
  w: "2.25rem",
  h: "4rem",
  backgroundImage: "url(assets/images/frame-button-close-top-down.png)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
});

const close_border = css({
  display: "flex",
  zIndex: "20",
  pos: "relative",
  top: "0.25rem",
  justifyContent: "center",
  alignItems: "center",
  rounded: "50%",
  w: "1.75rem",
  h: "1.75rem",
  backgroundImage: {
    base: "linear-gradient(to top, #463714 4%, #785a28 23%, #c89b3c 90%, #c8aa6e 100%)",
    _hover: "linear-gradient(to top, #c89b3c 0%, #f0e6d2 100%)",
  },
});

const inner_bg = css({
  zIndex: "30",
  pos: "relative",
  rounded: "50%",
  w: "1.5rem",
  h: "1.5rem",
  bg: "#1e282d",
});

const x_icon = css({
  translate: "7px 7px",
  w: "0.625rem",
  h: "0.625rem",
  bg: "#cdbe91",
  maskImage: "url(assets/images/x-icon.png)",
  maskSize: "10px",
  _groupHover: {
    bg: "#f0e6d2",
  },
});

export { overlay, content, body, close, close_border, inner_bg, x_icon };
