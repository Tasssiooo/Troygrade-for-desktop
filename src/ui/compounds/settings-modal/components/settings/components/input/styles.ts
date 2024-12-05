import { css } from "~/styled-system/css";

const input = css({
  //display: "flex",
  outline: "none",
  border: "1px solid hsla(45, 10%, 59%, .4)",
  w: "full",
  py: "0.5",
  px: "1",
  fontSize: "sm",
  bg: "transparent",
  _disabled: {
    opacity: "0.5",
    cursor: "not-allowed",
  },
  _focusVisible: {
    outline: "none",
  },
});

const input_wrapper = css({
  display: "flex",
  flexDir: "row",
  alignItems: "center",
  spaceX: "1",
  mt: "1",
});

const input_label_wrapper = css({
  display: "flex",
  flexDir: "row",
  columnGap: "2",
  fontSize: "sm",
});

const edit = css({
  display: "block",
  w: "20px",
  h: "20px",
  backgroundImage: "url(assets/images/icon-edit.png)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
});

export { input, input_wrapper, input_label_wrapper, edit };
