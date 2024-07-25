import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    setMe: (state, action) => {
      state.user = action.payload;
    },
    updateMe: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { login, logout, setMe, updateMe } = userSlice.actions;
export default userSlice.reducer;
