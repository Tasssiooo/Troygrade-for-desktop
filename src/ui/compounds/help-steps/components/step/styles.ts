import { css } from "~/styled-system/css";

const title = css({
  textAlign: "center",
});

const screenshot = css({
  objectFit: "cover",
  border: "2px solid",
  borderColor: { base: "#a07a30" },
  mx: "auto",
  mt: "2.5",
});

export { title, screenshot };
