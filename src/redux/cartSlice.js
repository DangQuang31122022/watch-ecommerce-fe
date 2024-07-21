import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.findIndex((c) => c.id === action.payload.id) >= 0
        ? state.cart.filter((c) => c.id !== action.payload.id) // remove from cart
        : state.cart.push(action.payload); // add to cart
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((c) => c.id !== action.payload.id); // remove from cart
    },
    setBasketItems: (state, action) => {
      state.cart = action.payload;
    },
    clearBasket: (state) => {
      state.cart = [];
    },
    addQtyItem: (state, action) => {
      state.cart = state.cart.map((c) =>
        c.id === action.payload.id ? { ...c, quantity: c.quantity + 1 } : c
      );
    },
    minusQtyItem: (state, action) => {
      state.cart = state.cart.map((c) =>
        c.id === action.payload.id ? { ...c, quantity: c.quantity - 1 } : c
      );
    },
    updateQtyItem: (state, action) => {
      console.log(action);
      state.cart = state.cart.map((c) =>
        c.id === action.payload.product.id
          ? { ...c, quantity: action.payload.value }
          : c
      );
      console.log(state.cart.find((c) => c.id === action.payload.product.id));
    },
  },
});
export const {
  addToCart,
  removeFromCart,
  setBasketItems,
  clearBasket,
  addQtyItem,
  minusQtyItem,
  updateQtyItem,
} = cartSlice.actions;
export default cartSlice.reducer;
