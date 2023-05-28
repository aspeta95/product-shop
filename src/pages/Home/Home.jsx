import React, { useContext, useState } from "react";
import Filters from "../../components/Filters/Filters";
import Products from "../../components/Products/Products";
import Cart from "../../components/Cart/Cart";
import { products as productList } from "../../mocks/products.json";
import { FiltersContext } from "../../context/filters";

const Home = () => {
  const { filters } = useContext(FiltersContext);
  const [products] = useState(productList);

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        (product.category === filters.category || filters.category === "all") &&
        product.priceN >= filters.minPrice
      );
    });
  };

  const filteredProducts = filterProducts(products);

  return (
    <>
      <Filters />
      <Products products={filteredProducts} />
      <Cart />
    </>
  );
};

export default Home;
