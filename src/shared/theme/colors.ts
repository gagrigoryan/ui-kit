import { DefaultTheme } from "./types";

export const PRIMITIVE_COLORS = {
  primary50: "#FFFFFF",
  primary100: "#E6E6E6",
  primary200: "#C9C9C9",
  primary300: "#ADADAD",
  primary400: "#919191",
  primary500: "#757575",
  primary600: "#595959",
  primary700: "#3D3D3D",
  primary800: "#212121",
  primary900: "#141414",
  white: "#FFFFFF",
  black: "#000000",

  error50: "#FFEFED",
  error100: "#FED7D2",
  error200: "#F1998E",
  error300: "#E85C4A",
  error400: "#E11900",
  error500: "#AB1300",
  error600: "#870F00",
  error700: "#5A0A00",

  positive50: "#E6F2ED",
  positive100: "#ADDEC9",
  positive200: "#66D19E",
  positive300: "#06C167",
  positive400: "#048848",
  positive500: "#03703C",
  positive600: "#03582F",
  positive700: "#10462D",

  warning50: "#FFFAF0",
  warning100: "#FFF2D9",
  warning200: "#FFE3AC",
  warning300: "#FFCF70",
  warning400: "#FFC043",
  warning500: "#BC8B2C",
  warning600: "#996F00",
  warning700: "#674D1B",

  mono600: "#292929",
};

export const createColors = (): DefaultTheme => {
  return {
    primitives: {
      ...PRIMITIVE_COLORS,
      primaryA: PRIMITIVE_COLORS.primary200,
      primaryB: PRIMITIVE_COLORS.primary900,
    },
    overrides: {
      colors: {
        gray50: PRIMITIVE_COLORS.primary50,
        gray100: PRIMITIVE_COLORS.primary100,
        gray200: PRIMITIVE_COLORS.primary200,
        gray300: PRIMITIVE_COLORS.primary300,
        gray400: PRIMITIVE_COLORS.primary400,
        gray500: PRIMITIVE_COLORS.primary500,
        gray600: PRIMITIVE_COLORS.primary600,
        gray700: PRIMITIVE_COLORS.primary700,
        gray800: PRIMITIVE_COLORS.primary800,
        gray900: PRIMITIVE_COLORS.primary900,
      },
    },
  };
};
