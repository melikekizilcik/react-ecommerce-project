import React from "react";

//import styles
import "./ProductCardItem.css";

//import components
import { useNavigate, useParams } from "react-router-dom";

const ProductCardItem = ({ product }) => {
  const navigate = useNavigate();
  const { productId } = useParams();

  return (
    <button className="button" onClick={() => navigate("/productDetail")}>
      <div className="product-item">
        <img src={product.image} alt="" />
        <div className="container">
          <h5 className="product-title">{product.title}</h5>
          <h5 className="product-category">{product.category}</h5>
          <h5 className="product-price">{product.price}$</h5>
        </div>
      </div>
    </button>
  );
};

export default ProductCardItem;
