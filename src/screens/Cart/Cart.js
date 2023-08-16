import React, { useMemo } from "react";

import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../../store/reducers/ProductReducer";
import Navbar from "../../components/navbar/Navbar";
import "./Cart.css";
import CartCard from "./CartCard";

const Cart = () => {
	const products = useSelector(state => state.products.shoppingCart);
	const dispatch = useDispatch();

	const calculateTotalPrice = useMemo(() => {
		let total = 0;

		products.forEach(item => {
			const itemPrice = item.price * item.quantity;
			total += itemPrice;
		});

		return total.toFixed(2);
	}, [products]);

	return (
		<div>
			<Navbar />
			{products?.map((item, index) => (
				<CartCard key={index} product={item} />
			))}
			<div className="total-price">
				<p>Total price: {calculateTotalPrice} $</p>
				<button onClick={() => dispatch(clearCart())}>Clear cart</button>
			</div>
		</div>
	);
};

export default Cart;
