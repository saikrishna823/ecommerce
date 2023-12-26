import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/ProductCard.css";
function ProductCard({product}) {
    //console.log(product)
    return (
        <div className='product'>
             
            <div className='product-image'>
                <Link to={`/productDescription/product/${product.category}/${product.id}`}><img src={product.image} alt={product.title}/></Link>
            </div>
            <div style={{textAlign:"center"}} className='product-title'>
                <span >{product.title}</span>
             </div>
             <div className='product-info'>
            <div className='product-price'>
               <span>${product.price}</span>
            </div>
          
              {/* <button className='add-cart'>Add to Cart</button>  */}
        </div>
        </div>
    );
}

export default ProductCard;