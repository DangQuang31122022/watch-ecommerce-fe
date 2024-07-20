import { Box, styled, Typography } from "@mui/material";
import { Colors } from "../theme";
import { Padding } from "@mui/icons-material";

export const PromotionContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
  background: Colors.secondary,
  color: Colors.white,
  [theme.breakpoints.down("md")]: {
    Padding: "40px 0 40px 0",
  },
}));

export const MessageText = styled(Typography)(({ theme }) => ({
  fontSize: "1.5rem",
  fontWeight: 500,
  [theme.breakpoints.down("md")]: {
    fontSize: "1rem",
  },
  color: Colors.white,
}));
