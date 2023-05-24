import { useState, useContext } from "react";
import { CartContext } from "../../context/cart";
import { PaginationContext } from "../../context/pagination";
import "./Products.css";

const Products = ({ products }) => {
  const { start, setStart, end, setEnd, page, setPage } =
    useContext(PaginationContext);
  const { addToCart } = useContext(CartContext);

  function handleChangePreviousPage() {
    if (start > 0) {
      setStart((prevState) => prevState - 10);
      setEnd((prevState) => prevState - 10);
      setPage((prevState) => prevState - 1);
    }
  }
  function handleChangeNextPage() {
    if (end >= 9) {
      setStart((prevState) => prevState + 10);
      setEnd((prevState) => prevState + 10);
      setPage((prevState) => prevState + 1);
    }
  }

  return (
    <div className="products">
      {products.length > 9 && (
        <div className="pagination">
          <button onClick={handleChangePreviousPage}>◀</button>
          <span>{page}</span>
          <button onClick={handleChangeNextPage}>▶</button>
        </div>
      )}
      <ul>
        {products.slice(start, end).map((product) => {
          return (
            <li key={product.id} className="singleProduct">
              <img src={product.thumbnail} />
              <h3>{product.title}</h3>
              <p>{product.price} €</p>
              <button onClick={() => addToCart(product)}>Add to cart</button>
            </li>
          );
        })}
      </ul>

      <p>Thisgs to add:</p>
      <p>Navbar</p>
      <p>Checkout Stripe</p>
      <p>Cart Icon Count</p>
      <p>Cart Icon Animation on Count change</p>
    </div>
  );
};

export default Products;
