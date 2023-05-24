import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const productInCart = cart.findIndex((item) => item.id === product.id);

    if (productInCart >= 0) {
      const newCart = structuredClone(cart);
      newCart[productInCart].quantity += 1;
      return setCart(newCart);
    }

    setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
  };

  const removeFromCart = (product) => {
    const productInCart = cart.findIndex((item) => item.id === product.id);

    if (productInCart >= 0) {
      const newCart = structuredClone(cart);
      newCart.splice(productInCart, 1);
      return setCart(newCart);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const decreaseProductQuantity = (product) => {
    const productInCart = cart.findIndex((item) => item.id === product.id);

    if (productInCart >= 0) {
      const newCart = structuredClone(cart);
      if (newCart[productInCart].quantity > 1) {
        newCart[productInCart].quantity -= 1;
      }
      return setCart(newCart);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        decreaseProductQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
