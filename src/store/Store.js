import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/ProductReducer";

const Store = configureStore({
  reducer: {
    products: productReducer,
  },
});

export default Store;
