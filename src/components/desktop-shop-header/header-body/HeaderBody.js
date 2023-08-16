import React from "react";

//import style
import "./HeaderBody.css";

//import components
import { useNavigate } from "react-router-dom";

function HeaderBody() {
  const navigate = useNavigate();

  return (
    <div className="header-body">
      <div className="header-caption">
        <div className="header-body-title">
          <p className="title-season">SUMMER 2020</p>
          <h1 className="title-collection">NEW COLLECTION</h1>
          <p className="title-description">
            We know how large objects will act,
          </p>
          <p className="title-description">but things on a small scale.</p>
        </div>
        <button onClick={() => navigate("/products")}>
          <h3>SHOP NOW</h3>
        </button>
      </div>
    </div>
  );
}

export default HeaderBody;
