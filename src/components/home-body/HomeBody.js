import React from "react";

//import styles
import "./HomeBody.css";

//import components
import ProductCardItem from "./ProductCards/ProductCardItem";
import { useNavigate } from "react-router-dom";

const HomeBody = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="title">
        <h4>Featured Products</h4>
        <h2>BESTSELLER PRODUCTS</h2>
        <h5>Problems trying to resolve the conflict between</h5>
      </div>
      <ProductCardItem />
      <div className="button-div">
        <button onClick={() => navigate("/shop")}>LOAD MORE PRODUCTS</button>
      </div>
    </>
  );
};

export default HomeBody;
