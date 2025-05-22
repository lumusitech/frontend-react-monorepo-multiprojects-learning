import { useState } from "react";
import { FiltersContext } from "./FiltersContext";

export const FiltersProvider = ({ children }) => {
  const [filters, setFilters] = useState({ minPrice: 0, category: "all" });
  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>
      {children}
    </FiltersContext.Provider>
  );
};
