import { useState, useContext } from "react";
import { CartContext } from "../../context/cart";
import { PaginationContext } from "../../context/pagination";
import "./Products.css";

const Products = ({ products }) => {
  const { start, setStart, end, setEnd, page, setPage } =
    useContext(PaginationContext);
  const { cart, addToCart } = useContext(CartContext);

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
          const productInCart = cart.findIndex(
            (item) => item.id === product.id
          );
          let productQuantity = 0;

          if (productInCart >= 0) {
            productQuantity = cart[productInCart].quantity;
          }

          return (
            <li key={product.id} className="singleProduct">
              <img src={product.thumbnail} />
              <h3>
                {product.title}
                {product.price ? " - (Available)" : " - (No Stock)"}
              </h3>
              <p>{product.priceN} €</p>

              <button onClick={() => addToCart(product)}>
                Add to cart ({productQuantity})
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Products;
