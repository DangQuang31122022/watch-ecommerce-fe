import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import cartSlice from "./cartSlice";
import authSlice from "./authSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    cart: cartSlice,
    auth: authSlice,
  },
});
