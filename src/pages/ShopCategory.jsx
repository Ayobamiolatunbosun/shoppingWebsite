import React, {useContext, useMemo, useState} from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../context/ShopContext'
import Item from '../components/Item/Item'
import { Link } from 'react-router-dom'

const ShopCategory = (props) => {
    const {all_product} = useContext(ShopContext);
    const [sortBy, setSortBy] = useState('featured');
    const categoryNames = { men: 'Men', women: 'Women', kid: 'Kids' };
    const products = useMemo(() => {
      const filtered = all_product.filter((product) => product.category === props.category);
      if (sortBy === 'price-low') filtered.sort((a, b) => a.new_price - b.new_price);
      if (sortBy === 'price-high') filtered.sort((a, b) => b.new_price - a.new_price);
      if (sortBy === 'name') filtered.sort((a, b) => a.name.localeCompare(b.name));
      return filtered;
    }, [all_product, props.category, sortBy]);
  return (
    <div className='shop-category'>
      <div className="category-heading">
        <div><p className="eyebrow">THE SHOPPER EDIT</p><h1>{categoryNames[props.category]} collection</h1><p>Pieces to keep, wear, and love — all season long.</p></div>
        <span className="category-heading-count">{products.length}<br/><small>pieces</small></span>
      </div>
      <img className='shopcategory-banner' src={props.banner} alt={`${categoryNames[props.category]} fashion collection`} />
      <div className="shopcategory-indexSort">
        <p>
            <span>{products.length} thoughtfully picked pieces</span>
        </p>
        <label className="shopcategory-sort">Sort by
          <select value={sortBy} onChange={(event) => setSortBy(event.target.value)} aria-label="Sort products">
            <option value="featured">Featured</option><option value="price-low">Price: low to high</option><option value="price-high">Price: high to low</option><option value="name">Name</option>
          </select>
        </label>
      </div>
      <div className="shopcategory-products">
        {products.map((item) => <Item key={item.id} {...item} />)}
      </div>
      {products.length === 0 && <div className="empty-products"><p>We’re refreshing this collection.</p><Link to="/">Browse everything</Link></div>}
    </div>
  )
}

export default ShopCategory
