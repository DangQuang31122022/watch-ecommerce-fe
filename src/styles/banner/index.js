import { Box, Button, styled, Typography } from "@mui/material";
import { colors } from "../theme";

export const BannerContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  height: "40vh",
  padding: 0,
  marginTop: "2rem",
  background: colors.gray200,
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
    // marginTop: "100px",
    height: "auto",
  },
}));

export const BannerContent = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignContent: "center",
  maxWidth: "50%",
  padding: "1rem",
}));

export const BannerTitle = styled(Typography)(({ theme }) => ({
  lineHeight: 1.5,
  fontSize: "2rem",
  marginBottom: "1rem",
  [theme.breakpoints.down("md")]: {
    fontSize: "1.5rem",
  },
}));

export const BannerDescription = styled(Typography)(({ theme }) => ({
  lineHeight: 1.5,
  fontSize: "1rem",
  [theme.breakpoints.down("md")]: {
    fontSize: "0.875rem",
  },
}));

export const BannerImage = styled("img")(({ src, theme }) => ({
  width: "100%",
  height: "100%",
  objectFit: "contain",
  flexBasis: "50%",
  src: `url(${src})`,
  [theme.breakpoints.down("md")]: {
    width: "50%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "50%",
  },
}));
export const BannerShopButton = styled(Button, {
  // Configure which props should be forwarded on DOM
  shouldForwardProp: (prop) => prop !== "color",
  name: "MyShopButton",
  slot: "Root",
  // We are specifying here how the styleOverrides are being applied based on props
  overridesResolver: (props, styles) => [
    styles.root,
    props.color === "primary" && styles.primary,
    props.color === "secondary" && styles.secondary,
  ],
})(({ theme }) => ({
  padding: "20px 0px",
  color: colors.white,
  fontWeight: "bold",
  fontSize: "16px",
  [theme.breakpoints.down("sm")]: {
    padding: "10px 0px",
    fontSize: "14px",
  },
}));
