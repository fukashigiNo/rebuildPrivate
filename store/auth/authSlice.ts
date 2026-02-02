import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  login: "",
  password: "",
  errors: {
    loginError: "",
    passwordError: "",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess(state, action) {
      state.isAuthenticated = true;
    },
    setLogin(state, action) {
      state.login = action.payload;
      state.errors.loginError = "";
    },
    setPassword(state, action) {
      state.password = action.payload;
      state.errors.passwordError = "";
    },
    setErrors(state, action) {
      state.errors = action.payload;
    },
  },
});

export const { loginSuccess, setLogin, setPassword, setErrors } =
  authSlice.actions;
export default authSlice.reducer;
