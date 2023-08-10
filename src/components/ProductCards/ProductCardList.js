import React, { useState, useEffect } from "react";

//import styles
import "./ProductCardList.css";

//import axios
import axios from "axios";
import ProductCardItem from "./ProductCardItem";

const ProductCardList = () => {
  const url = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  const [sliceProducts, setSliceProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get(url);
      setProducts(response.data);
      setSliceProducts(response.data.slice(10));
    };
    fetchProducts();
  }, []);

  return (
    <div className="product-list">
      {sliceProducts?.map((item, index) => {
        return <ProductCardItem key={index} product={item} />;
      })}
    </div>
  );
};

export default ProductCardList;
