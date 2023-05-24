import { useContext, useEffect, useState } from "react";
import Cart from "./components/Cart/Cart";
import Filters from "./components/Filters/Filters";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import { FiltersContext } from "./context/filters";
import { PaginationProvider } from "./context/pagination";
import { products as productList } from "./mocks/products.json";

function App() {
  const { filters } = useContext(FiltersContext);
  const [products] = useState(productList);

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        (product.category === filters.category || filters.category === "all") &&
        product.price >= filters.minPrice
      );
    });
  };

  const filteredProducts = filterProducts(products);

  return (
    <PaginationProvider>
      <Header />
      <Filters />
      <Cart />
      <Products products={filteredProducts} />
    </PaginationProvider>
  );
}

export default App;
