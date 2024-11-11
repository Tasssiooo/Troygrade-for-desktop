import { css } from "../../../../../../../../styled-system/css";

const about_text = css({
  display: "flex",
  flexDir: "column",
  spaceY: "1.5",
});

const anchor = css({
  color: {
    base: "blue.400",
    _hover: "blue.300",
  },
  textDecoration: {
    _hover: "underline",
  },
});

const authors = css({
  display: "flex",
  flexDir: "row",
  justifyContent: "space-between",
  mt: "4",
});

export { about_text, anchor, authors };
