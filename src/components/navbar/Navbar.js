import React from "react";

//import style
import "./Navbar.css";

//import components
import { NavLink, useNavigate } from "react-router-dom";
import { SlBasket } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";

//import redux
import { useSelector } from "react-redux";

const Navbar = () => {
  const shoppingCart = useSelector((state) => state.products.shoppingCart);

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
        <NavLink to="/users">Users</NavLink>
      </nav>
      <div className="icons">
        <div onClick={() => navigate("/profile")}>
          <CgProfile className="profile-icon" />
        </div>
        <div className="basket" onClick={() => navigate("/cart")}>
          <SlBasket className="item-basket" />
          <span className="items-quantity">{shoppingCart?.length}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
