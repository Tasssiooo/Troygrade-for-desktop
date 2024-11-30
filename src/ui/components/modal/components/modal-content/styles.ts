import { css } from "../../../../../../styled-system/css";

const overlay = css({
  pos: "fixed",
  inset: "0",
  zIndex: "100",
  bg: "black.400",
});

const content = css({
  pos: "fixed",
  top: "50%",
  left: "50%",
  translate: "-50% -50%",
  zIndex: "100",
  border: "1px solid transparent",
  maxW: "512px",
  p: "1.5rem",
  bg: "#010a13",
  borderImage:
    "linear-gradient(to top, #785a28 0, #463714 50%, #463714 100%) 1 stretch",
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
  pos: "relative",
  top: "0.25rem",
  zIndex: "20",
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
  pos: "relative",
  zIndex: "30",
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

export { overlay, content, close, close_border, inner_bg, x_icon };
