import { configureStore } from "@reduxjs/toolkit";
import users from "../reducers/users";

export const store = configureStore({
  reducer: {
    users: users,
  },
});
