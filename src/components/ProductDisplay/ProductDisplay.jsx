import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import './ProductDisplay.css'
import { ShopContext } from '../../context/ShopContext'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'

const ProductDisplay = ({ product }) => {
  const { addToCart } = useContext(ShopContext)
  const [selectedSize, setSelectedSize] = useState('')
  const [message, setMessage] = useState('')
  const sizes = ['XS', 'S', 'M', 'L', 'XL']

  const handleAddToCart = () => {
    if (!selectedSize) {
      setMessage('Choose a size to add this piece to your bag.')
      return
    }
    addToCart(product.id, selectedSize)
    setMessage(`${product.name} · size ${selectedSize} added to your bag.`)
  }

  return (
    <section className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list" aria-hidden="true">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt={product.name} />
        </div>
      </div>
      <div className="productdisplay-right">
        <p className="eyebrow">{product.category === 'kid' ? 'LITTLE ONES' : `THE ${product.category.toUpperCase()} EDIT`}</p>
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star" aria-label="Rated 4 out of 5">
          {[0, 1, 2, 3, 4].map((star) => <img src={star < 4 ? star_icon : star_dull_icon} alt="" key={star} />)}
          <span>4.0 <span className="review-count">(130 reviews)</span></span>
        </div>
        <div className="productdisplay-right-prices">
          <span className="productdisplay-right-price-new">${Number(product.new_price).toFixed(2)}</span>
          <span className="productdisplay-right-price-old">${Number(product.old_price).toFixed(2)}</span>
          <span className="product-discount">A little less, just as lovely</span>
        </div>
        <p className="productdisplay-right-description">Meet your new favorite. Thoughtfully chosen for everyday comfort, easy styling, and the moments that make a good outfit feel like you.</p>
        <div className="productdisplay-right-size">
          <h2>Choose your size <span>Size guide</span></h2>
          <div className="product-size-options">
            {sizes.map((size) => (
              <button type="button" className={selectedSize === size ? 'size-option selected' : 'size-option'} onClick={() => { setSelectedSize(size); setMessage('') }} aria-pressed={selectedSize === size} key={size}>{size}</button>
            ))}
          </div>
        </div>
        <button className="button button-primary product-add-button" type="button" onClick={handleAddToCart}>Add to bag <span aria-hidden="true">→</span></button>
        <p className="product-feedback" role="status">{message}</p>
        <div className="product-details">
          <p><span>Category</span>{product.category === 'kid' ? 'Kidswear' : `${product.category.charAt(0).toUpperCase()}${product.category.slice(1)}wear`}</p>
          <p><span>Shipping</span>Complimentary on orders over $100</p>
          <p><span>Returns</span>Easy returns within 30 days</p>
        </div>
        <Link className="product-back-link" to={`/${product.category === 'kid' ? 'kids' : `${product.category}s`}`}>← Back to {product.category === 'kid' ? 'kids' : product.category}</Link>
      </div>
    </section>
  )
}

export default ProductDisplay
