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
  bg: "#1e825a",
  w: "2.5",
  h: "2.5",
  rounded: "50%",
  shadow: "sm",
  shadowColor: "#010a13",
  border: "2px solid #36d987",
});

const author_name = css({
  color: "#36d987",
  fontSize: "xs",
});

export {
  title,
  anchor,
  status_circle,
  author_name
};
