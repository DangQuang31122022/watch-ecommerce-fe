import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/cartSlice";
import {
  BasketItemDetails,
  BasketItemImg,
  BasketItemName,
  BasketItemPrice,
  BasketItemRemove,
  BasketItemSpecs,
  BasketItemWrapper,
} from "../../styles/cart";
import { Box, Grid, Typography } from "@mui/material";
import { CloseOutlined } from "@mui/icons-material";
import BasketItemControl from "./BasketItemControl";
// product is element of cart array
export default function BasketItem({ product }) {
  const dispatch = useDispatch();
  const onRemoveFromCart = () => {
    dispatch(removeFromCart(product));
  };
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 2,
        border: "1px solid #ccc",
      }}
    >
      <BasketItemControl product={product} />
      <Box
        sx={{
          padding: "0 1.2rem",
          alignItems: "center",
          display: "grid",
          width: "100%",
          gridTemplateColumns: "100px 1fr 80px 40px",
        }}
      >
        <Grid item>
          <BasketItemImg src={product.imgURL} alt={product.name} />
        </Grid>
        <Grid item>
          <BasketItemName>{product.name}</BasketItemName>
          <Grid container>
            <Grid item xs={4}>
              <Typography variant="caption">Quantity</Typography>
              <Typography fontWeight={700}>{product.quantity}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="caption">Size</Typography>
              <Typography fontWeight={700}>{product.size}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="caption">Color</Typography>
              <Box
                sx={{
                  backgroundColor: product.color,
                  width: 15,
                  height: 15,
                  borderRadius: "50%",
                }}
              ></Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Typography variant="h6" sx={{ margin: "0px 0px" }}>
            ${product.price * product.quantity}
          </Typography>
        </Grid>
        <Grid item>
          <BasketItemRemove onClick={onRemoveFromCart}>
            <CloseOutlined />
          </BasketItemRemove>
        </Grid>
      </Box>
    </Box>
  );
}
