import { css } from "~/styled-system/css";

const wrapper = css({
  display: "flex",
  flexDir: "row",
  justifyContent: "center",
  alignItems: "center",
});

const root = css({
  display: "inline-block",
  flexShrink: "0",
  w: "3.5",
  h: "3.5",
  mr: "1",
  backgroundImage: "url(assets/images/checkbox-spritesheet.png)",
  _disabled: {
    opacity: "0.5",
    cursor: "not-allowed",
  },
  _focusVisible: {
    outline: "none",
  },
  _groupHover: {
    backgroundPosition: "0px -14px",
  },
});

const indicator = css({
  display: "inline-block",
  flexShrink: "0",
  w: "3.5",
  h: "3.5",
  backgroundPosition: "0px -29px",
  backgroundImage: "url(assets/images/checkbox-spritesheet.png)",
  _groupHover: {
    backgroundPosition: "0px -43px",
  },
});

export { wrapper, root, indicator };
