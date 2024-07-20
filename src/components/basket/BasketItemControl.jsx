import { useDispatch, useSelector } from "react-redux";
import { BasketItemControls } from "../../styles/cart";
import { Button } from "@mui/material";
import {
  addQtyItem,
  addToCart,
  minusQtyItem,
  removeFromCart,
} from "../../redux/cartSlice";
import { Add, PlusOneOutlined } from "@mui/icons-material";
import Remove from "@mui/icons-material/Remove";
import { data } from "../../data";
import { useEffect } from "react";
// product is a item of cart
export default function BasketItemControl({ product }) {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const productStock = data.find((p) => p.id === product.id);
  const onAddQty = () => {
    console.log(productStock);
    if (product.quantity < productStock.quantity) {
      dispatch(addQtyItem(product));
    }
  };
  const onMinusQty = () => {
    if (productStock.quantity >= product.quantity && product.quantity !== 0) {
      dispatch(minusQtyItem(product));
    }
  };
  console.log(cart);
  return (
    <BasketItemControls>
      <Button
        disabled={product.quantity === productStock.quantity}
        onClick={onAddQty}
        sx={{ width: "35px", height: "100%" }}
      >
        <Add />
      </Button>
      <Button
        disabled={product.quantity === 1}
        onClick={onMinusQty}
        sx={{ width: "35px", height: "100%" }}
      >
        <Remove />
      </Button>
    </BasketItemControls>
  );
}
