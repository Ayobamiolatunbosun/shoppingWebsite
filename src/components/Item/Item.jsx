import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom'

const Item = (props) => {
  return (
    <div className='item'>
        <Link className="item-image-link" to={`/product/${props.id}`} aria-label={`View ${props.name}`}>
          <img src={props.image} alt={props.name}/>
          <span className="item-quick-view">View details <span aria-hidden="true">↗</span></span>
        </Link>
        <Link className="item-name" to={`/product/${props.id}`}>{props.name}</Link>
        <div className="item-prices">
            <span className="item-price-new">${Number(props.new_price).toFixed(2)}</span>
            <span className="item-price-old">${Number(props.old_price).toFixed(2)}</span>
        </div>
      
    </div>
  )
}

export default Item
