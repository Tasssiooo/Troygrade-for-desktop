import { css } from "../../../../styled-system/css";

const container = css({
  pos: "relative",
  w: "600px",
  h: "500px",
  m: "auto",
});

const wrapper = css({
  display: "flex",
  pos: "relative",
  flexDir: "column",
  justifyContent: "center",
  alignItems: "center",
  w: "full",
  h: "full",
});

const border_right = css({
  pos: "absolute",
  top: "0",
  right: "0",
  w: "21px",
  h: "514px",
  backgroundImage: "url(assets/images/border-right.png)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "21px 514px",
});

const border_left = css({
  pos: "absolute",
  top: "0",
  left: "0",
  w: "22px",
  h: "514px",
  backgroundImage: "url(assets/images/border-left.png)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "22px 514px",
});

const border_top = css({
  pos: "absolute",
  top: "-2px",
  w: "557px",
  h: "13px",
  backgroundImage: "url(assets/images/border-top.png)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "557px 13px",
});

const border_bottom = css({
  pos: "absolute",
  bottom: "-15px",
  w: "557px",
  h: "14px",
  backgroundImage: "url(assets/images/border-bottom.png)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "640px 14px",
});

export {
  container,
  wrapper,
  border_right,
  border_left,
  border_top,
  border_bottom,
};
