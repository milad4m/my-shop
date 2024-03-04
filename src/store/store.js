import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "./slices/productSlice";
export const store = configureStore({
  reducer: { counter: shopReducer },
});
