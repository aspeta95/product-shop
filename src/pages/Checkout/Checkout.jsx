import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/cart";
import { loadStripe } from "@stripe/stripe-js";
import "./Checkout.css";

const Checkout = () => {
  const { cart, addToCart, removeFromCart, decreaseProductQuantity } =
    useContext(CartContext);
  const [checkoutCart, setCheckoutCart] = useState([]);

  const stripePromise = loadStripe(
    "pk_test_51LNh1gCY7tt1cs3IkLdbXDvldvIIDnqZDM4cearnVqOBCirMjNeqAOUCHxWhTqv6KvxRqscjD9hzvG4muj5jVQ8u00whkicpUW"
  );

  useEffect(() => {
    const newCheckoutCart = cart.map((item) => {
      return {
        price: item.price,
        quantity: item.quantity,
      };
    });

    setCheckoutCart(newCheckoutCart);
  }, [cart]);

  const checkoutOptions = {
    lineItems: checkoutCart,
    mode: "payment",
    successUrl: `${window.location.origin}/success`,
    cancelUrl: `${window.location.origin}/cancel`,
  };

  const redirectToCheckout = async () => {
    console.log("redirectToCheckout");
    const stripe = await stripePromise;

    try {
      const result = await stripe.redirectToCheckout(checkoutOptions);
      console.log(result.error);
    } catch (error) {
      console.log(error);
    }
  };

  const totalPrice = cart.reduce(
    (acc, product) => acc + product.priceN * product.quantity,
    0
  );

  return (
    <>
      <h2>Checkout</h2>

      <table className="checkout-table">
        <thead>
          <tr>
            <th></th>
            <th>Product</th>
            <th>Quantity</th>
            <th></th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => (
            <tr key={product.id}>
              <td className="product-image">
                <img src={product.thumbnail} />
              </td>
              <td className="product-name">{product.title}</td>
              <td className="product-quantity">
                <button onClick={() => decreaseProductQuantity(product)}>
                  -
                </button>
                <span>{product.quantity}</span>
                <button onClick={() => addToCart(product)}>+</button>
              </td>
              <td className="product-remove">
                <button onClick={() => removeFromCart(product)}>Remove</button>
              </td>
              <td className="product-price">
                {product.priceN * product.quantity} €
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>Total</td>
            <td>{totalPrice} €</td>
          </tr>
        </tfoot>
      </table>
      <div className="buyButton">
        <button onClick={redirectToCheckout}>Buy Now</button>
      </div>
    </>
  );
};

export default Checkout;
