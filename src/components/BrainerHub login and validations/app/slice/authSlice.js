import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthentication: false,
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.isAuthentication = true;
      state.user = action.payload;
    },
    logout: (state, { payload }) => {
      state.isAuthentication = false;
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export const selectAuth = (state) => state?.auth.isAuthentication;
export default authSlice.reducer;
