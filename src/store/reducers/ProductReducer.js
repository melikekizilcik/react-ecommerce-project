import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shoppingCart: [],
  totalPrice: 0,
  quantity: 1,
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addShoppingCart: (state, action) => {
      state.shoppingCart = [...state.shoppingCart, action.payload];
    },
    clearCart: (state) => {
      state.shoppingCart = [];
    },
    calculateTotalPrice: (state) => {
      let total = 0;
      state.shoppingCart.forEach((item) => {
        total += item.price;
      });
      state.totalPrice = total;
    },
  },
});

export const { addShoppingCart, clearCart, calculateTotalPrice } =
  productSlice.actions;
export default productSlice.reducer;
