import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.findIndex((c) => c._id === action.payload._id) >= 0
        ? state.cart.filter((c) => c._id !== action.payload._id) // remove from cart
        : state.cart.push(action.payload); // add to cart
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((c) => c._id !== action.payload._id); // remove from cart
    },
  },
});
export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
