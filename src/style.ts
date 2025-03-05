import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      back: "#181C14",
      gray: "#3C3D37",
      basic: "#697565",
      fore: "#ECDFCC",
    },
    fonts: {
      body: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
    },
    space: {
      sm: "8px",
      md: "16px",
      lg: "24px",
    },
    sizes: {
      sm: "8px",
      md: "16px",
      lg: "24px",
      xl: "32px",
      xxl: "48px",
    },
    fontSizes: {
      sm: "8px",
      base: "12px",
      md: "16px",
      lg: "24px",
      xl: "32px",
    },
  },
  media: {
    mobile: "(max-width: 768px)",
  },
});
