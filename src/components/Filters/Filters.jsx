import { useContext, useEffect, useState, useId } from "react";
import { FiltersContext } from "../../context/filters";
import { PaginationContext } from "../../context/pagination";
import { products } from "../../mocks/products.json";
import "./Filters.css";
const Filters = () => {
  const filtersContext = useContext(FiltersContext);
  const { setStart, setEnd, setPage } = useContext(PaginationContext);
  const [uniqueCategories, setUniqueCategories] = useState([]);
  const selectId = useId();

  useEffect(() => {
    const categories = [];

    products.forEach((product) => {
      const stringToCompare =
        product.category.at(0).toUpperCase() + product.category.slice(1);
      if (!categories.includes(stringToCompare)) {
        categories.push(stringToCompare);
      }
    });

    setUniqueCategories(categories);
  }, []);

  function handleChangeMinPrice(e) {
    filtersContext.setFilters({
      ...filtersContext.filters,
      minPrice: e.target.value,
    });
  }

  function handleChangeCategory(e) {
    filtersContext.setFilters({
      ...filtersContext.filters,
      category: e.target.value,
    });

    setPage(1);
    setStart(0);
    setEnd(9);
  }

  return (
    <div className="filters">
      <div className="minPrice">
        <input
          type="range"
          min="0"
          max="500"
          value={filtersContext.filters.minPrice}
          onChange={handleChangeMinPrice}
        />
        <p>Price: {filtersContext.filters.minPrice} €</p>
      </div>
      <div className="category">
        <label htmlFor={selectId}>Category: </label>
        <select onChange={handleChangeCategory}>
          <option value="all">All</option>
          {uniqueCategories.map((category, idx) => {
            return (
              <option key={idx} value={category.toLowerCase()}>
                {category}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default Filters;
