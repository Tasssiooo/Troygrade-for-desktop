import { css } from "../../../../../../../../styled-system/css";

const container = css({
  display: "flex",
  flexDir: "row",
  alignItems: "center",
  w: "full",
  h: "12",
  bg: {
    _checked: "#74747465",
    _hover: "neutral.500/50",
  },
});

const checkbox_container = css({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  w: "12",
  h: "12",
});

const checkbox = css({
  display: "flex",
  pos: "relative",
  flexShrink: "0",
  w: "9",
  h: "9",
});

const checkbox_border = css({
  pos: "absolute",
  w: "full",
  h: "full",
  backgroundImage: "url(assets/images/object_s_sprite.png)",
  backgroundSize: "cover",
});

const info_container = css({
  display: "flex",
  flexDir: "column",
  w: "40",
  py: "1.5",
});

const icon = css({
  fontSize: "4xl",
  color: "#c99c3f"
});

const heimer_img = css({
  pos: "absolute",
  border: "2px solid transparent",
  rounded: "50%",
  w: "full",
  h: "full",
  bg: "#010a13",
  overflow: "hidden",
});

const filename = css({
  color: {
    base: "#737373",
    _checked: "#cebf92",
  },
  letterSpacing: "0.025em",
  textOverflow: "ellipsis",
  lineHeight: "1.4",
  overflow: "hidden",
  whiteSpace: "nowrap",
});

const filetype = css({
  color: {
    base: "#737373",
    _checked: "#f5f5f5",
  },
  fontSize: "xs",
});

export {
  container,
  checkbox_container,
  checkbox,
  checkbox_border,
  info_container,
  icon,
  heimer_img,
  filename,
  filetype,
};
