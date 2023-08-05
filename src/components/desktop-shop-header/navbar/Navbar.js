import React from "react";

//import style
import "./Navbar.css";

//import components
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="header">
      <h3 className="header-title">Bandage</h3>
      <nav className="header-navbar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/pages">Pages</NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
