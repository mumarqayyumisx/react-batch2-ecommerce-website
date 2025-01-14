import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import categorySlice from "./categorySlice";
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: {
    product: productSlice,
    category: categorySlice,
    cart: cartSlice,
  },
});

export default store;
