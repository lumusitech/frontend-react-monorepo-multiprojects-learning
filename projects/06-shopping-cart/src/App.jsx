import { useState } from "react";
import { Products } from "./components/Products";
import { products as initialProducts } from "./mocks/products.json";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const useFilters = () => {
  const [filters, setFilters] = useState({
    category: "all",
    price: 10,
  });

  const filterProducts = (products = []) => {
    return products.filter((product) => {
      return (
        product.price >= filters.price &&
        (filters.category === "all" || product.category === filters.category)
      );
    });
  };

  return {
    filters,
    setFilters,
    filterProducts,
  };
};

function App() {
  const { filterProducts, filters, setFilters } = useFilters();
  const [products] = useState([...initialProducts]);

  const filteredProducts = filterProducts(products);

  return (
    <>
      <Header changeFilters={setFilters} />
      <Products products={filteredProducts} />
      <Footer filters={filters} />
    </>
  );
}
export default App;
