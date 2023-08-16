import React from "react";

//import style
import "./Navbar.css";

//import components
import { NavLink, useNavigate } from "react-router-dom";
import { SlBasket } from "react-icons/sl";

//import redux
import { useSelector } from "react-redux";

const Navbar = () => {
	const shoppingCart = useSelector(state => state.products.shoppingCart);

	const navigate = useNavigate();
	return (
		<div className="header">
			<h3 className="header-title">Bandage</h3>
			<nav className="header-navbar">
				<NavLink to="/">Home</NavLink>
				<NavLink to="/products">Shop</NavLink>
				<NavLink to="/about">About</NavLink>
				<NavLink to="/blog">Blog</NavLink>
				<NavLink to="/contact">Contact</NavLink>
				<NavLink to="/pages">Pages</NavLink>
			</nav>
			<div className="basket">
				<SlBasket className="item-basket" onClick={() => navigate("/chart")} />
				<span className="items-quantity">{shoppingCart?.length}</span>
			</div>
		</div>
	);
};

export default Navbar;
