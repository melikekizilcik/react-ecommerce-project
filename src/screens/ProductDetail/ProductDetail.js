import React from "react";

import ProductCover from "../../assets/product-cover.png";
import Navbar from "../../components/desktop-shop-header/navbar/Navbar";
import "./ProductDetail.css";

const ProductDetail = () => {
  return (
    <>
      <Navbar />
      <div className="product-container">
        <img src={ProductCover} alt="" />
        <div className="product-detail">
          <h3>Product Title</h3>
          <p>Product Price</p>
          <button>Add to cart</button>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
