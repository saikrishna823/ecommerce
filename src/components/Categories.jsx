import React,{ useState,useEffect } from 'react';
import Axios from "axios"
import "../styles/Categories.css";
import ProductCard from './ProductCard';
function Categories({category}) {
    const [products,setProducts]=useState([]);
useEffect(() => {
  async function getProducts() {
    try {
      const response = await Axios.get(`https://fakestoreapi.com/products/category/${category}`);
      const fetchedProducts = response.data;
      const newProducts = fetchedProducts.map((product) => {
        return { ...product, quantity: 0 }; 
      });

      setProducts(newProducts);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }

  getProducts();
}, [category]);
    return (
        <div className='category'>
            <div className='category-name'>
                <h2>{category}</h2>
            </div>
             <div className='category-products'>
                   {
                     products.map((product)=><ProductCard key={product.id} product={product}/>)
                   }
             </div>
        </div>
    );
}

export default Categories;