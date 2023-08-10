import React, { useState, useEffect } from "react";

//import styles
import "./ProductCardList.css";

//import axios
import axios from "axios";
import ProductCardItem from "./ProductCardItem";

const ProductsList = () => {
  const url = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get(url);
      setProducts(response.data);
    };
    fetchProducts();
  }, []);
  return (
    <div className="product-list">
      {products?.map((item, index) => {
        return <ProductCardItem key={index} product={item} />;
      })}
    </div>
  );
};

export default ProductsList;
