import { createSlice } from "@reduxjs/toolkit";

const authUser = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : { user: "", islogged: false };

export const userSlice = createSlice({
  name: "users",
  initialState: {
    users: {},
    authUser,
  },
  reducers: {
    login: (state, action) => {
      state.authUser = action.payload;
    },
    logout: (state) => {
      state.authUser = { user: "", islogged: false };
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
