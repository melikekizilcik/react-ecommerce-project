import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  clearCart,
  calculateTotalPrice,
} from "../../store/reducers/ProductReducer";
import Navbar from "../../components/navbar/Navbar";

const Chart = () => {
  const products = useSelector((state) => state.products.shoppingCart);
  const total = useSelector((state) => state.products.totalPrice);
  const dispatch = useDispatch();
  return (
    <div>
      <Navbar />
      {products?.map((item, index) => (
        <div key={index}>
          <div>{item.id}</div>
          <div>{item.title}</div>
          <div>{item.price}</div>
          <div>{item.image}</div>
        </div>
      ))}
      <p>{total}</p>
      <button onClick={() => dispatch(clearCart())}>Clear cart</button>
    </div>
  );
};

export default Chart;
