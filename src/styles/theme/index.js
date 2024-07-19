import { createTheme } from "@mui/material";
import { blue, purple } from "@mui/material/colors";

export const colors = {
  primary: "#4CAF50",
  secondary: "#FFC107",
  danger: "#F44336",
  warning: "#FFEB3B",
  info: "#2196F3",
  light: "#F5F5F5",
  dark: "#212121",
  white: "#FFFFFF",
  black: "#000000",
  text: "#212121",
  background: "#F5F5F5",
  border: "#E0E0E0",
  success: "#4CAF50",
  error: "#F44336",

  // Grays
  gray50: "#FAFAFA",
  gray100: "#F5F5F5",
  gray200: "#EEEEEE",

  // Blues
  blue50: "#E3F2FD",
  blue100: "#BBDEFB",
  blue200: "#90CAF9",
  blue300: "#64B5F6",

  // colors hunt
  navyCustom: "#1C1678",
  purpleCustom: "8576FF",
  blueCustom: "7BC9FF",
  mintCustom: "A3FFD6",
};

export const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
    error: {
      main: colors.danger,
    },
    warning: {
      main: colors.warning,
    },
    info: {
      main: colors.info,
    },
    success: {
      main: colors.success,
    },
    text: {
      primary: colors.text,
    },
    background: {
      default: colors.background,
    },
    components: {
      MuiButton: {
        defaultProps: {
          disableElevation: true, // Remove the shadow
          disableRipple: true, // Remove the ripple effect
        },
      },
    },
  },
});
