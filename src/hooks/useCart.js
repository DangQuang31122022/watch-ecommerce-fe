import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";

function useCart(product) {
  // const { cart, setCart } = useUIContext();
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    // Dispatch an action to toggle product in cart
    dispatch(addToCart(product));
  };

  const addToCartText =
    cart.findIndex((c) => c._id === product._id) >= 0
      ? "Remove from cart"
      : "Add to cart";

  return { handleAddToCart, addToCartText };
}

export default useCart;
