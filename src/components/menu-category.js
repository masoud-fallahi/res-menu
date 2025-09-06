import React from "react";
import MenuItem from "./menu-item";
import "./menu-category.css";

const MenuCategory = ({ category }) => {
  return (
    <div className="menu-category">
      <div className="category-header">
        <h2 className="category-title">{category.name}</h2>
        <span className="category-subtitle">{category.nameEn}</span>
      </div>
      <div className="menu-items-grid">
        {category.items.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;

