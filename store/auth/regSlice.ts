import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: true,
  inn: "",
  nsf: "",
  password: "",
  confirmPassword: "",
  errors: {
    innError: "",
    nsfError: "",
    passwordError: "",
    confirmPasswordError: "",
  },
};

const regSLice = createSlice({
  name: "reg",
  initialState,
  reducers: {
    registerSuccess(state, action) {
      state.isAuthenticated = true;
    },
    setInn(state, action) {
      state.inn = action.payload;
      state.errors.innError = "";
    },
    setNsf(state, action) {
      state.nsf = action.payload;
      state.errors.nsfError = "";
    },
    setPassword(state, action) {
      state.password = action.payload;
      state.errors.passwordError = "";
    },
    setConfirmPassword(state, action) {
      state.confirmPassword = action.payload;
      state.errors.confirmPasswordError = "";
    },
    setErrors(state, action) {
      state.errors = action.payload;
    },
  },
});

export const {
  registerSuccess,
  setInn,
  setNsf,
  setPassword,
  setConfirmPassword,
  setErrors,
} = regSLice.actions;
export default regSLice.reducer;
