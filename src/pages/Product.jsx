import React, {useContext} from 'react'
import {ShopContext} from '../context/ShopContext'
import {Link, useParams} from 'react-router-dom';
import Breadcrum from '../components/Breadcrum/Breadcrum'
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';

const Product = () => {
    const {all_product} = useContext(ShopContext);
    const {productId} = useParams();
    const product = all_product.find((e) => e.id === Number(productId));

  if (!product) {
    return <div className="not-found"><p className="eyebrow">PRODUCT NOT FOUND</p><h1>That piece is no longer here.</h1><Link className="button button-primary" to="/">Shop new arrivals</Link></div>;
  }

  return (
    <div>
      <Breadcrum product ={product} />
      <ProductDisplay product = {product} />
    </div>
  )
}

export default Product
