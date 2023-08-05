import React from "react";

//import styles
import "./ProductCardItem.css";

//import components
import ProductCover from "../../../assets/product-cover.png";

const ProductCardItem = () => {
  return (
    <div className="product-item">
      <img src={ProductCover} alt="" />
      <div className="container">
        <h5 className="product-title">Title</h5>
        <h5 className="product-category">Category</h5>
        <h5 className="product-price">Price</h5>
      </div>
    </div>
  );
};

export default ProductCardItem;
