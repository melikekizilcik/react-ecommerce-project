import React from "react";

import { useDispatch } from "react-redux";

import { increaseQuantity, decreaseQuantity } from "../../store/reducers/ProductReducer";

import "./CartCard.css";

const CartCard = ({ product }) => {
	const dispatch = useDispatch();

	const increase = () => {
		dispatch(increaseQuantity(product.id));
	};

	const decrease = () => {
		dispatch(decreaseQuantity(product.id));
	};

	return (
		<div className="just-container">
			<div className="cart-container">
				<img src={product.image} alt="" />
				<div className="product-info">
					<div className="product-title">{product.title}</div>
					<div className="product-price">{product.price} $</div>
					<div className="product-quantity">
						<div className="increase-button" onClick={increase}>
							+
						</div>
						<div className="quantity">{product.quantity}</div>
						<div className="decrease-button" onClick={decrease}>
							-
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CartCard;
