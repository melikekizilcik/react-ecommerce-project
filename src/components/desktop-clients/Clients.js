import React from "react";

//import styles
import "./Clients.css";

//import assets
import brand1 from "../../assets/BrandIcons/brand1.png";
import brand2 from "../../assets/BrandIcons/brand2.png";
import brand3 from "../../assets/BrandIcons/brand3.png";
import brand4 from "../../assets/BrandIcons/brand4.png";
import brand5 from "../../assets/BrandIcons/brand5.png";
import brand6 from "../../assets/BrandIcons/brand6.png";

const Clients = () => {
  return (
    <div className="clients">
      <img src={brand1} alt="" />
      <img src={brand2} alt="" />
      <img src={brand3} alt="" />
      <img src={brand4} alt="" />
      <img src={brand5} alt="" />
      <img src={brand6} alt="" />
    </div>
  );
};

export default Clients;
