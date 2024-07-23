import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Redux/CartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
