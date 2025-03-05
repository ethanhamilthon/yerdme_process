import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { globalCss } from "./style.ts";

const globalStyle = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    lineHeight: 1.2,
  },
  "html, body": {
    fontFamily: "$body",
    backgroundColor: "$back",
    color: "$fore",
    lineHeight: 1.6,
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
  },
  a: {
    color: "inherit",
    textDecoration: "none",
  },
  "ul, ol": {
    listStyle: "none",
  },
  button: {
    fontFamily: "inherit",
    cursor: "pointer",
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

globalStyle();
