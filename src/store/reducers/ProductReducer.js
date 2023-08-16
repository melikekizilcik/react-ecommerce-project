import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	shoppingCart: [],
};

export const productSlice = createSlice({
	name: "products",
	initialState,
	reducers: {
		addShoppingCart: (state, action) => {
			state.shoppingCart = [...state.shoppingCart, action.payload];
		},
		clearCart: state => {
			state.shoppingCart = [];
		},
		increaseQuantity: (state, action) => {
			state.shoppingCart = state.shoppingCart.map(item => {
				if (item.id === action.payload) {
					item.quantity += 1;
				}
				return item;
			});
		},
		decreaseQuantity: (state, action) => {
			state.shoppingCart = state.shoppingCart.map(item => {
				if (item.id === action.payload) {
					item.quantity -= 1;
				}
				return item;
			});
		},
	},
});

export const { addShoppingCart, clearCart, increaseQuantity, decreaseQuantity } =
	productSlice.actions;
export default productSlice.reducer;
