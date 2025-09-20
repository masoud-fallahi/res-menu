import React from "react";
import RestaurantHeader from "./components/restaurant-header";
import MenuCategory from "./components/menu-category";
import { menuData } from "./data/menu-data";
import "./App.css";

function App() {
  return (
    <div className="App">
      <main className="menu-container">
        <RestaurantHeader />
        {menuData.categories.map((category) => (
          <MenuCategory key={category.id} category={category} />
        ))}
      </main>
      <footer className="restaurant-footer">
        <p>OSMANLI DÖNER VE KOKOREÇ - Tüm hakları saklıdır</p>
      </footer>
    </div>
  );
}

export default App;
