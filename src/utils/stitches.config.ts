import {
  gray,
  slate,
  blue,
  red,
  green,
  yellow,
  grayDark,
  slateDark,
  blueDark,
  redDark,
  greenDark,
  yellowDark,
} from "@radix-ui/colors"
import { createStitches } from "@stitches/react"

const { styled, createTheme } = createStitches({
  theme: {
    colors: {
      ...gray,
      ...slate,
      ...blue,
      ...red,
      ...green,
      ...yellow,
    },
    space: {
      1: "10px",
      2: "20px",
    },
    media: {
      sm: "(min-width: 640px)",
      md: "(min-width: 768px)",
      lg: "(min-width: 1024px)",
    },
    fontSizes: {},
  },
  utils: {
    paddingX: (value: string | number) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    paddingY: (value: string | number) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    marginX: (value: string | number) => ({
      marginLeft: value,
      marginRight: value,
    }),
    marginY: (value: string | number) => ({
      marginTop: value,
      marginBottom: value,
    }),
  },
})

export const darkTheme = createTheme({
  colors: {
    ...grayDark,
    ...slateDark,
    ...blueDark,
    ...redDark,
    ...greenDark,
    ...yellowDark,
  },
})

export default styled
