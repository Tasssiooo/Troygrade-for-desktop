import { css } from "../../../../../../../../styled-system/css";

const title = css({
  display: "inline-block",
});

const anchor = css({
  display: "flex",
  alignItems: "center",
  spaceX: "1",
});

const status_circle = css({
  display: "inline-block",
  border: "2px solid #36d987",
  rounded: "50%",
  w: "2.5",
  h: "2.5",
  shadowColor: "#010a13",
  bg: "#1e825a",
  shadow: "sm",
});

const author_name = css({
  color: "#36d987",
  fontSize: "xs",
});

export { title, anchor, status_circle, author_name };
