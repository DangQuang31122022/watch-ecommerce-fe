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
import { useEffect, useLayoutEffect, useState } from "react";
import { ProductAPI } from "../../api/ProductAPI";
// product is a item of cart
export default function BasketItemControl({ product }) {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [productStock, setProductStock] = useState(null);
  useEffect(() => {
    const getProductStock = async (id) => {
      const response = await ProductAPI.getProductById(id);
      setProductStock(response.data);
    };
    getProductStock(product.id);
  }, [product]);

  const onAddQty = () => {
    // console.log(productStock);
    if (product.quantity < productStock.quantity) {
      dispatch(addQtyItem(product));
    }
  };
  const onMinusQty = () => {
    if (productStock.quantity >= product.quantity && product.quantity !== 0) {
      dispatch(minusQtyItem(product));
    }
  };
  return (
    <BasketItemControls>
      <Button
        // disabled={product.quantity === productStock.quantity}
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
