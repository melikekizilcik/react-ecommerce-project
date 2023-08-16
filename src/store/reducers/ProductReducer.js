import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shoppingCart: [],
  totalPrice: 0,
  productQuantity: 1,
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
      state.totalPrice = 0;
    },
    calculateTotalPrice: (state) => {
      let total = 0;
      state.shoppingCart.forEach((item) => {
        total += item.price;
      });
      state.totalPrice = total;
    },
    increaseQuantity: (state) => {
      state.shoppingCart.forEach((item) => {
        item.quantity += 1;
      });
    },
    decreaseQuantity: (state) => {
      state.shoppingCart.forEach((item) => {
        item.quantity -= 1;
      });
    },
  },
});

export const {
  addShoppingCart,
  clearCart,
  calculateTotalPrice,
  increaseQuantity,
  decreaseQuantity,
} = productSlice.actions;
export default productSlice.reducer;
