import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "category",
  initialState: { categories: [], error: null, isLoading: false },
  reducers: {},
});

export default categorySlice.reducer;
