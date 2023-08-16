import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";

import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchProduct } from "../../api/getProducts";

import { addShoppingCart } from "../../store/reducers/ProductReducer";

import "./ProductDetail.css";

const ProductDetail = () => {
	// useState
	const [product, setProduct] = useState({});

	// Variables
	const dispatch = useDispatch();
	const { id } = useParams();

	// useEffect
	useEffect(() => {
		const getProductDetail = async () => {
			const product = await fetchProduct(id);
			setProduct(product);
		};

		getProductDetail();
	}, [id]);

	const addToCart = () => {
		dispatch(
			addShoppingCart({
				id: product.id,
				title: product.title,
				price: product.price,
				image: product.image,
				quantity: 1,
			})
		);
	};

	return (
		<>
			<Navbar />
			<div className="product-container">
				<img src={product.image} alt="" />
				<div className="product-detail">
					<h3>{product.title}</h3>
					<p>{product.price} $</p>
					<button onClick={addToCart}>Add to cart</button>
				</div>
			</div>
		</>
	);
};

export default ProductDetail;
