import { useState } from "react";
import "./Filters.css";

export const Filters = ({ changeFilters }) => {
  const [minPrice, setMinPrice] = useState(0);

  const handleChangeMinPrice = (e) => {
    const value = e.target.value;

    setMinPrice(value);

    changeFilters((prev) => ({ ...prev, price: value }));
  };

  const handleChangeCategory = (e) => {
    const value = e.target.value;

    changeFilters((prev) => ({ ...prev, category: value }));
  };

  return (
    <section className="filters">
      <div>
        <label htmlFor="price">Price starting from</label>
        <input
          onChange={handleChangeMinPrice}
          type="range"
          min="0"
          max="1000"
          id="price"
        />
        <span>${minPrice}</span>
      </div>

      <div>
        <label htmlFor="category">Category</label>
        <select onChange={handleChangeCategory} id="category">
          <option value="all">All</option>
          <option value="groceries">Groceries</option>
          <option value="beauty">Beauty</option>
          <option value="fragrances">Fragances</option>
          <option value="furniture">Forniture</option>
        </select>
      </div>
    </section>
  );
};
