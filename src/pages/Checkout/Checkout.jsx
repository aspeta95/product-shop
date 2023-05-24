import { useContext } from 'react'
import { CartContext } from '../../context/cart'
import './Checkout.css'

const Checkout = () => {
    const { cart, addToCart, removeFromCart, decreaseProductQuantity } = useContext(CartContext)

    const totalPrice = cart.reduce((acc, product) => acc + product.price * product.quantity, 0)

  return (
    <>
        <h2>Checkout</h2>
        
            <table class='checkout-table'>
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
                        <td className='product-image' >
                           <img src={product.thumbnail} />
                        </td>
                        <td class="product-name">
                            {product.title}
                        </td>
                        <td class="product-quantity">
                            <button onClick={() => decreaseProductQuantity(product)}>-</button>
                            <span>{product.quantity}</span>
                            <button onClick={() => addToCart(product)}>+</button>
                        </td>
                        <td className='product-remove'>
                            <button onClick={() => removeFromCart(product)}>Remove</button>
                        </td>
                        <td class="product-price">
                            {product.price * product.quantity} €
                        </td>
                    </tr>
                ))}
                </tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>Total</td>
                    <td>{totalPrice} €</td>
                </tr>
            </table>
        
    </>
  )
}

export default Checkout