import React, { useState, useContext } from "react";
import { CartContext } from "../../context/cart";
import { BsCartPlus, BsCartDash } from "react-icons/bs";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import "./Cart.css";

const Cart = () => {
  const {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    decreaseProductQuantity,
  } = useContext(CartContext);
  const [showCart, setShowCart] = useState(true);

  function CartOpen({ isOpen }) {
    if (!isOpen) {
      return (
        <button onClick={() => setShowCart((prev) => !prev)}>
          <BsCartDash />
        </button>
      );
    }
    return (
      <button onClick={() => setShowCart((prev) => !prev)}>
        <BsCartPlus />
      </button>
    );
  }

  return (
    <>
      <div>
        <div className="showCart">
          <CartOpen isOpen={showCart} />
          <p className="cart-count">{cart.length}</p>
        </div>
      </div>
      {!showCart && (
        <div className="cartContainer">
          <div className="clearCartButton">
            <button onClick={() => clearCart()}>Clear</button>
          </div>
          {cart.map((product) => (
            <div key={product.id} className="cartProduct">
              <div className="productImage">
                <img src={product.thumbnail} />
              </div>
              <div className="productDetails">
                <h3>{product.title}</h3>
                <p>{product.priceN} €</p>
                <div className="productQuantity">
                  <button onClick={() => decreaseProductQuantity(product)}>
                    <AiOutlineMinus />
                  </button>
                  <p>{product.quantity}</p>
                  <button onClick={() => addToCart(product)}>
                    <AiOutlinePlus />
                  </button>
                </div>
              </div>
              <div className="removeButton">
                <button onClick={() => removeFromCart(product)}>❌</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Cart;
