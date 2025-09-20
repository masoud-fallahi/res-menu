import React from "react";
import "./restaurant-header.css";

const RestaurantHeader = () => {
  return (
    <header className="restaurant-header">
      <div className="header-content">
        <div className="logo-container">
          <div className="logo-circle">
            <div className="doner-icon">
              <img src="/logo.png" alt="OSMANLI Logo" className="logo-image" />
            </div>
          </div>
        </div>
        <h1 className="restaurant-name">Osmanli döner ve kokoreç</h1>
        <div className="decorative-patterns">
          <div className="pattern-left"></div>
          <div className="pattern-right"></div>
        </div>
      </div>
    </header>
  );
};

export default RestaurantHeader;
