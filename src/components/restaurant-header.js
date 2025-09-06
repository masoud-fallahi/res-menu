import React from "react";
import "./restaurant-header.css";

const RestaurantHeader = () => {
  return (
    <header className="restaurant-header">
      <div className="header-content">
        <h1 className="restaurant-name">رستوران سنتی ایرانی</h1>
        <p className="restaurant-subtitle">طعم اصیل و خاطره‌انگیز</p>
        <div className="header-decoration">
          <div className="decoration-line"></div>
          <span className="decoration-text">✦</span>
          <div className="decoration-line"></div>
        </div>
      </div>
    </header>
  );
};

export default RestaurantHeader;

