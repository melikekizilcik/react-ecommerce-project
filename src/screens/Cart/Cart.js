import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../../store/reducers/ProductReducer";
import Navbar from "../../components/navbar/Navbar";
import "./Cart.css";
import CartCard from "./CartCard";

const Cart = () => {
  const products = useSelector((state) => state.products.shoppingCart);
  const total = useSelector((state) => state.products.totalPrice);
  const dispatch = useDispatch();
  return (
    <div>
      <Navbar />
      {products?.map((item, index) => (
        <CartCard key={index} product={item} />
      ))}
      <div className="total-price">
        <p>Total price: {total} $</p>
        <button onClick={() => dispatch(clearCart())}>Clear cart</button>
      </div>
    </div>
  );
};

export default Cart;
