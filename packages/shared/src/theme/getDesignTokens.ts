import { PaletteMode } from "@mui/material";
const theme = {
  text: "#333",
  primary: "#035f64",
  secondary: "#05e8f4",
};

const { primary, text, secondary } = theme;

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary,
    },
  },
});

/*
    text: {
      ...(mode === "light"
        ? {
            primary: primary,
            secondary: themeSecondary,
          }
        : {
            primary: themeSecondary,
            secondary: primary,
          }),
    },
*/
