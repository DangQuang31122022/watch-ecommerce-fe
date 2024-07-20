import { Box, Button, Drawer, Grid, styled, Typography } from "@mui/material";
import { Colors } from "../theme";

export const BasketCointainer = styled(Drawer)(({ theme }) => ({
  width: "50rem",
  height: "100vh",
  zIndex: 60,
  top: 0,
  right: 0,
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

export const BasketList = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: theme.spacing(4),
  paddingBottom: 100,
  overflowY: "scroll",
  height: "100%",
}));

// export const BasketItem = styled(Box)(({ theme }) => ({
//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "center",
//   marginBottom: theme.spacing(2),
//   border: "1px solid #ccc",
// }));

export const BasketItemWrapper = styled(Grid)(({ theme }) => ({
  width: "100%",
  alignItems: "center",
  padding: `0 ${theme.spacing(2)}`,
  gridTemplateColumns: "100px 1fr 80px 40px",
}));

export const BasketItemSpecs = styled(Grid)(({ theme }) => ({
  gridTemplateColumns: "repeat(3, 1fr)",

  "& > Typography": {
    fontSize: 12,
    color: "#666",
    display: "block",
    marginBottom: 5,
  },
}));

export const BasketEmpty = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexGrow: 1,
}));

export const BasketEmptyMsg = styled(Typography)(({ theme }) => ({
  color: "#666",
}));

export const BasketHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  position: "sticky",
  top: -20,
  background: "#fff",
  zIndex: 60,
}));

export const BasketHeaderTitle = styled(Typography)(({ theme }) => ({
  flexGrow: 1,
}));

export const BasketItemImgWrapper = styled("div")(({ theme }) => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  padding: "0 1.2rem",
  marginRight: theme.spacing(2),
  gridTemplateColumns: "100px 1fr 80px 40px",
}));

export const BasketItemImg = styled("img")(({ theme }) => ({
  width: "100%",
  height: "100%",
  objectFit: "contain",
}));

export const BasketItemDetails = styled(Box)(({ theme }) => ({
  flexGrow: 1,
}));

export const BasketItemPrice = styled(Box)(({ theme }) => ({
  marginRight: "2rem",
}));

export const BasketItemName = styled(Typography)(({ theme }) => ({
  margin: "0.7rem 0",
  width: 142,
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  position: "relative",
  fontWeight: 700,
}));

export const BasketItemRemove = styled(Button)(({ theme }) => ({
  alignSelf: "center",
  color: Colors.primary,
}));

export const BasketClear = styled(Box)(({ theme }) => ({
  alignSelf: "center",
}));

export const BasketCheckout = styled(Box)(({ theme }) => ({
  // position: "absolute",
  // bottom: 0,
  // right: 0,
  background: "#fff",
  padding: theme.spacing(2),
  borderTop: "1px solid #ccc",
  // width: "100%",
  display: "flex",
  justifyContent: "space-between",

  // "&:before": {
  //   content: '""',
  //   position: "absolute",
  //   top: 0,
  //   background: "#ccc",
  //   width: "93%",
  //   height: ".5px",
  // },
}));

export const BasketCheckoutButton = styled(Button)(({ theme }) => ({
  // background: Colors.primary,
  // color: "#fff",
  padding: "1.6rem 3.2rem",
  fontSize: 16,
  textTransform: "uppercase",
  cursor: "pointer",
}));

export const BasketTotalTitle = styled(Typography)(({ theme }) => ({
  fontSize: "1.2rem",
  margin: 0,
}));

export const BasketTotalAmount = styled(Typography)(({ theme }) => ({
  margin: "1.2rem 0",
}));

export const BasketItemControls = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  width: "30px",
  height: "90px",
  fontSize: "1.5rem",
}));

export const BasketControl = styled(Box)(({ theme }) => ({
  width: 35,
  height: "100%",
  padding: "5px",
  fontWeight: 700,
}));

export const BasketControlCount = styled(Box)(({ theme }) => ({
  margin: 5,
}));
