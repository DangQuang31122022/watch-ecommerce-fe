import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    signInSuceess: (state, action) => {
      state.user = {
        id: action.payload.id,
        role: action.payload.role,
      };
    },
    signOutSuccess: (state) => {
      state.user = null;
    },
    isAuthenticating: (state, action) => {
      state.isAuthenticating = action.payload;
    },
  },
});
export const {
  setUser,
  logout,
  signInSuceess,
  signOutSuccess,
  isAuthenticating,
} = authSlice.actions;
export default authSlice.reducer;
