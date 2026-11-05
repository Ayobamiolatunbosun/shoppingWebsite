import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import './CSS/Cart.css'
import close_icon from '../components/Assets/cart_cross_icon.png'

const Cart = () => {
  const { all_product, cartItems, cartCount, cartTotal, updateCartItem, removeFromCart } = useContext(ShopContext)
  const [checkoutMessage, setCheckoutMessage] = useState('')
  const cartProducts = Object.entries(cartItems).map(([lineKey, quantity]) => {
    const [productId, ...sizeParts] = lineKey.split('_')
    const product = all_product.find((item) => item.id === Number(productId))
    return product ? { ...product, lineKey, size: sizeParts.join('_') || 'M', quantity } : null
  }).filter((product) => product && product.quantity > 0)
  const shipping = cartTotal === 0 || cartTotal >= 100 ? 0 : 8

  if (cartProducts.length === 0) {
    return (
      <section className="cart-page cart-empty">
        <p className="eyebrow">YOUR SHOPPING BAG</p>
        <div className="empty-bag-icon" aria-hidden="true">♡</div>
        <h1>A little room for something lovely.</h1>
        <p>Your bag is waiting for its first favorite.</p>
        <Link className="button button-primary" to="/">Explore the collection <span>→</span></Link>
      </section>
    )
  }

  return (
    <section className="cart-page">
      <div className="cart-heading">
        <div><p className="eyebrow">JUST A FEW GOOD THINGS</p><h1>Your bag <span>({cartCount})</span></h1></div>
        <Link to="/">Keep exploring <span aria-hidden="true">↗</span></Link>
      </div>
      <div className="cart-layout">
        <div className="cart-items">
          <div className="cart-column-head"><span>Item</span><span>Price</span><span>Quantity</span><span>Total</span></div>
          {cartProducts.map((product) => (
            <article className="cart-row" key={product.id}>
              <div className="cart-item-info">
                <Link to={`/product/${product.id}`}><img src={product.image} alt={product.name} /></Link>
                <div><Link className="cart-product-name" to={`/product/${product.id}`}>{product.name}</Link><span className="cart-product-category">{product.category === 'kid' ? 'Kids' : product.category} · Size {product.size}</span><button className="cart-remove-mobile" type="button" onClick={() => removeFromCart(product.lineKey)}>Remove</button></div>
              </div>
              <span className="cart-unit-price">${product.new_price.toFixed(2)}</span>
              <div className="quantity-control" aria-label={`Quantity for ${product.name}`}>
                <button type="button" aria-label="Decrease quantity" onClick={() => updateCartItem(product.lineKey, product.quantity - 1)}>−</button>
                <span>{product.quantity}</span>
                <button type="button" aria-label="Increase quantity" onClick={() => updateCartItem(product.lineKey, product.quantity + 1)}>+</button>
              </div>
              <div className="cart-line-total"><span>${(product.new_price * product.quantity).toFixed(2)}</span><button type="button" onClick={() => removeFromCart(product.lineKey)} aria-label={`Remove ${product.name}`}><img src={close_icon} alt="" /></button></div>
            </article>
          ))}
          <div className="cart-shipping-note">{shipping === 0 ? 'You’ve unlocked complimentary shipping.' : `You’re $${(100 - cartTotal).toFixed(2)} away from complimentary shipping.`}</div>
        </div>
        <aside className="cart-summary">
          <p className="eyebrow">THE SUMMARY</p>
          <div><span>Subtotal</span><span>${cartTotal.toFixed(2)}</span></div>
          <div><span>Shipping</span><span>{shipping === 0 ? 'Complimentary' : `$${shipping.toFixed(2)}`}</span></div>
          <div className="cart-grand-total"><span>Total</span><span>${(cartTotal + shipping).toFixed(2)}</span></div>
          <button type="button" className="button button-primary cart-checkout" onClick={() => setCheckoutMessage('This is a shopping demo — no payment was taken and your bag is still saved.')}>Continue to checkout <span>→</span></button>
          {checkoutMessage && <p className="checkout-message" role="status">{checkoutMessage}</p>}
          <p className="cart-safe-note">Secure checkout · Easy 30-day returns</p>
        </aside>
      </div>
    </section>
  )
}

export default Cart
