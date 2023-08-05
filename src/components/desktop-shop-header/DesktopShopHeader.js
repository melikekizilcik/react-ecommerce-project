import React from "react";

//import components
import Navbar from "./navbar/Navbar";
import HeaderBody from "./header-body/HeaderBody";

//import style
import "./DesktopShopHeader.css";

const DesktopShopHeader = () => {
  return (
    <div className="desktop-shop-header">
      <Navbar />
      <HeaderBody />
    </div>
  );
};

export default DesktopShopHeader;
