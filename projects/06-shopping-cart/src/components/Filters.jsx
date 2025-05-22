import { useId } from "react";
import "./Filters.css";

import { useFilters } from "../hooks/useFilters";

export const Filters = () => {
  const { filters, setFilters } = useFilters();

  const minPriceFilterId = useId();
  const categoryFilterId = useId();

  const handleChangeMinPrice = (e) => {
    const value = e.target.value;

    setFilters((prev) => ({ ...prev, minPrice: value }));
  };

  const handleChangeCategory = (e) => {
    const value = e.target.value;

    setFilters((prev) => ({ ...prev, category: value }));
  };

  return (
    <section className="filters">
      <div>
        <label htmlFor={minPriceFilterId}>Price starting from</label>
        <input
          onChange={handleChangeMinPrice}
          type="range"
          min="0"
          max="1000"
          id={minPriceFilterId}
        />
        <span>${filters.minPrice}</span>
      </div>

      <div>
        <label htmlFor={categoryFilterId}>Category</label>
        <select onChange={handleChangeCategory} id={categoryFilterId}>
          <option value="all">All</option>
          <option value="groceries">Groceries</option>
          <option value="beauty">Beauty</option>
          <option value="fragrances">Fragrances</option>
          <option value="furniture">Furniture</option>
        </select>
      </div>
    </section>
  );
};
