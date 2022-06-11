import { PaletteMode } from '@mui/material'

/*
"rgba(232, 12, 12, 1)", "#e80c0c", bright red
"rgba(76, 151, 156, 1)", // "#4c979c", light teal
"rgba(19, 68, 72, 1)", //"#134448", dark teal
*/

const theme = {
    primary: 'rgba(19, 68, 72, 1)', //"#134448", dark teal
    secondary: 'rgba(76, 151, 156, 1)', //"#134448", light teal
}

const { primary, secondary } = theme

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
})

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
