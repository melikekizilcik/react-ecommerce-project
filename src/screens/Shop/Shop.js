import React from "react";

//import components
import Navbar from "../../components/desktop-shop-header/navbar/Navbar";
import ProductsList from "../../components/home-body/ProductCards/ProductsList";

const Shop = () => {
  return (
    <div>
      <Navbar />
      <ProductsList />
    </div>
  );
};

export default Shop;
