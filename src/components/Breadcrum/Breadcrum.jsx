import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'
import { Link } from 'react-router-dom'

const Breadcrum = (props) => {
    const {product} = props;
  return (
    <div>
      {product && <div className="breadcrum">
        <Link to="/">Home</Link><img src={arrow_icon} alt="" /><Link to={`/${product.category === 'kid' ? 'kids' : `${product.category}s`}`}>{product.category === 'kid' ? 'Kids' : product.category}</Link><img src={arrow_icon} alt="" /><span>{product.name}</span>
      </div>}
    </div>
  )
}

export default Breadcrum
