// import React from 'react';
// import './ProductDisplay.css';
// import star_icon from '../Assets/star_icon.png';
// import star_dull_icon from '../Assets/star_dull_icon.png';

// const ProductDisplay = ({ product }) => {
//   // Example function to render star ratings dynamically
//   const renderStars = (rating) => {
//     let stars = [];
//     for (let i = 0; i < 5; i++) {
//       stars.push(
//         <img src={i < rating ? star_icon : star_dull_icon} alt={`Rating Star ${i < rating ? 'filled' : 'empty'}`} key={i} />
//       );
//     }
//     return stars;
//   };

//   return (
//     <div className='product-display'>
//       <div className="product-display-left">
//         <div className="product-display-img-list">
//           {/* Assuming product.images is an array of image URLs */}
//           {product.images.map((img, index) => (
//             <img src={img} alt={`${product.name} view ${index + 1}`} key={index} />
//           ))}
//         </div>
//         <div className="product-display-img">
//           <img className='product-display-main-img' src={product.image} alt={product.name} />
//         </div>
//       </div>
//       <div className="product-display-right">
//         <h1>{product.name}</h1>
//         <div className="product-display-right-stars">
//           {renderStars(product.rating)}
//           <p>({product.reviews})</p>
//         </div>
//         <div className="product-display-right-prices">
//           <div className="product-display-right-price-old">${product.oldPrice}</div>
//           <div className="product-display-right-price-new">${product.newPrice}</div>
//         </div>
//         <p className="product-display-right-description">{product.description}</p>
//         <div className="product-display-right-sizes">
//           <h2>Select Size</h2>
//           <div className="sizes-container">
//             {product.sizes.map((size, index) => (
//               <div key={index}>{size}</div>
//             ))}
//           </div>
//         </div>
//         <button>ADD TO CART</button>
//         <p className='product-display-right-category'><span>Category:</span> {product.categories.join(', ')}</p>
//         <p className='product-display-right-tags'><span>Tags:</span> {product.tags.join(', ')}</p>
//       </div>
//     </div>
//   );
// }

// export default ProductDisplay;










import React from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'


const ProductDisplay = (props) => {
    const {product} = props;
  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
        </div>

        
        <div className="productdisplay-img">
            <img className='productdisplay-main-img' src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>(130)</p>
        </div>
        <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-old">${product.old_price}</div>
            <div className="productdisplay-right-price-new">${product.new_price}</div>
        </div>
        <div className="productdisplay-right-description">
            A lightweight, usually knitted, pullover shirt, close-fitting and ??? a round necklace and short sleeves, worn as an undershirt or outer garment.
        </div>
        <div className="productdisplay-right-size">
            <h1>Select Size</h1>
            <div className="productdisplay-right-size">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XX1</div>
            </div>
        </div>
        <button>ADD TO CART</button>
        <p className='productdisplay-right-category'><span>Category :</span>Women , T-Shirt, Crop Top</p>
        <p className='productdisplay-right-category'><span>Tags :</span>Modern , Latest</p>
      </div>
    </div>
  )
}

export default ProductDisplay
