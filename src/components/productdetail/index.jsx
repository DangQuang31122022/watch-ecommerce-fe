import {
  Dialog,
  DialogTitle,
  Slide,
  Box,
  IconButton,
  DialogContent,
  Typography,
  Button,
  Stack,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import styled from "@emotion/styled";
import { ProductAddToCart, Product, ProductImage } from "../../styles/product";
import { BannerShopButton } from "../../styles/banner";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { Colors } from "../../styles/theme";
import { forwardRef } from "react";
import IncDec from "../incdec";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, updateQtyItem } from "../../redux/cartSlice";

const SlideTransition = forwardRef(function SlideTransition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const ProductDetailWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  padding: theme.spacing(4),
}));

const ProductDetailInfoWrapper = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  maxWidth: 500,
  lineHeight: 1.5,
}));

export default function ProductDetail({ open, onClose, product }) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  let value = 1; // default quantity
  const handleValueChange = (newValue) => {
    // console.log(newValue);
    value = newValue;
  };
  const handleButtonClick = () => {
    // 3 case, add new product, increase quantity, decrease quantity
    const productInCart = cart.find((item) => item.id === product.id);
    if (productInCart) {
      // if (productInCart.quantity < value || value >= 1) {
      // increase quantityư
      dispatch(updateQtyItem({ product: productInCart, value }));
      // }
    } else {
      // add new product
      let product1 = { ...product, quantity: value };
      dispatch(addToCart(product1));
    }
  };
  return (
    <Dialog
      TransitionComponent={SlideTransition}
      variant="permanant"
      open={open}
      fullScreen
    >
      <DialogTitle
        sx={{
          background: Colors.secondary,
        }}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent={"space-between"}
        >
          {product.name}
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <ProductDetailWrapper
          display={"flex"}
          flexDirection={matches ? "column" : "row"}
        >
          <Product sx={{ mr: 4 }}>
            <ProductImage
              style={{
                maxWidth: "600px",
              }}
              src={product.imgURL}
            />
          </Product>
          <ProductDetailInfoWrapper>
            <Typography variant="subtitle">SKU: {product.quantity}</Typography>
            <Typography variant="subtitle">
              Availability: {product.quantity} in stock
            </Typography>
            <Typography
              textTransform={"uppercase"}
              sx={{ lineHeight: 2 }}
              variant="h4"
            >
              {product.name}
            </Typography>
            <Typography variant="body">{product.description}</Typography>
            <Box
              sx={{ mt: 4, minWidth: matches ? "200px" : "400px" }}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <IncDec onValueChange={handleValueChange} />
              <Button variant="contained" onClick={handleButtonClick}>
                Add to Cart
              </Button>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              sx={{ mt: 4, color: Colors.light }}
            >
              <FavoriteIcon sx={{ mr: 2 }} />
              Add to wishlist
            </Box>
            <Box
              sx={{
                mt: 4,
                color: Colors.dove_gray,
              }}
            >
              <FacebookIcon />
              <TwitterIcon sx={{ pl: 2 }} />
              <InstagramIcon sx={{ pl: 2 }} />
            </Box>
          </ProductDetailInfoWrapper>
        </ProductDetailWrapper>
      </DialogContent>
    </Dialog>
  );
}
