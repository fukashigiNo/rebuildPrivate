import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import regReducer from "./auth/regSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    reg: regReducer,
  },
});
