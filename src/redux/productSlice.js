import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { faker } from "@faker-js/faker";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const products = Array.from({ length: 20 }, () => ({
      id: faker.string.uuid(),
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      imageUrl: faker.image.url(),
    }));

    return products;
  },
);
const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.isLoading = false;
        state.error = null;
      });
  },
});

export const selectProducts = (state) => state.product.products;

export default productSlice.reducer;
