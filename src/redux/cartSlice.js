import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    showCart: false,
  },
  reducers: {
    toggleCart: (state) => {
      state.showCart = !state.showCart;
    },
    addToCart: (state, action) => {
      console.log({ state, action });
      state.products = [...state.products, action.payload];
    },
  },
});

export const { toggleCart, addToCart } = cartSlice.actions;

export const selectShowCart = (state) => state.cart.showCart;

export const selectNoOfCartProducts = (state) => state.cart.products.length;

export const selectAddedToCartProducts = (state) => state.cart.products;

export default cartSlice.reducer;
