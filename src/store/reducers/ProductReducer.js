import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shoppingCart: [],
  totalPrice: 0,
  quantity: 0,
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addShoppingCart: (state, action) => {
      state.shoppingCart = [...state.shoppingCart, action.payload];
    },
    calculateTotalPrice: (state, action) => {},
  },
});

export const { addShoppingCart } = productSlice.actions;
export default productSlice.reducer;
