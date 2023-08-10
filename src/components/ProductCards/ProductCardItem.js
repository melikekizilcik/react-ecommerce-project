import React from "react";

//import styles
import "./ProductCardItem.css";

//import components
import { useNavigate } from "react-router-dom";

const ProductCardItem = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      className="product-item"
      onClick={() => navigate(`/product-details/${product.id}`)}
    >
      <img src={product.image} alt="" />
      <div className="container">
        <h5 className="product-title">{product.title}</h5>
        <h5 className="product-category">{product.category}</h5>
        <h5 className="product-price">{product.price}$</h5>
      </div>
    </div>
  );
};

export default ProductCardItem;
