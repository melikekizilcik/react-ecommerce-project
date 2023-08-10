import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../components/navbar/Navbar";

import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import {
  addShoppingCart,
  calculateTotalPrice,
} from "../../store/reducers/ProductReducer";

import "./ProductDetail.css";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [title, setTitle] = useState();
  const [price, setPrice] = useState();
  const [image, setImage] = useState();

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      setProduct(response.data);
      setTitle(response.data.title);
      setPrice(response.data.price);
      setImage(response.data.image);
      console.log(response.data);
    };
    fetchProduct();
  }, []);

  const addToCart = () => {
    dispatch(
      addShoppingCart({
        id: id,
        title: title,
        price: price,
        image: image,
        quantity: 1,
      })
    );
    dispatch(calculateTotalPrice());
  };

  return (
    <>
      <Navbar />
      <div className="product-container">
        <img src={image} alt="" />
        <div className="product-detail">
          <h3>{title}</h3>
          <p>{price} $</p>
          <button onClick={addToCart}>Add to cart</button>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
