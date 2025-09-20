import React from "react";
import "./menu-item.css";

const MenuItem = ({ item }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat("tr-TR").format(price) + " TL";
  };

  return (
    <div className="menu-item">
      <div className="menu-item-image">
        <img src={item.image} alt={item.title} />
        {item.isPopular && <span className="popular-badge">Popüler</span>}
      </div>
      <div className="menu-item-content">
        <div className="menu-item-header">
          <h3 className="menu-item-title">{item.title}</h3>
          <span className="menu-item-price">{formatPrice(item.price)}</span>
        </div>
        <p className="menu-item-ingredients">{item.ingredients}</p>
        <p className="menu-item-description">{item.description}</p>
      </div>
    </div>
  );
};

export default MenuItem;
