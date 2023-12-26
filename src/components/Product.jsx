import React,{useContext, useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import Axios from "axios";
import StarRateIcon from '@mui/icons-material/StarRate';
import "../styles/Product.css"
import { CartContext } from '../context/cart-context';


function Product(props) {
    const [currentProduct,setCurrentProduct]=useState("");
   //const[bulletPoints,setBulletPoints]=useState([]);
     const {id}=useParams();
     useEffect(()=>{
       async function getData(){
        try{
         const response=await Axios.get(`https://fakestoreapi.com/products/${id}`)
         const product=response.data;
         //setBulletPoints(product.description);
         const updatedProduct={
          quantity:1,
          ...product
         }
         setCurrentProduct(updatedProduct);
         
        } 
        catch(error){
          console.log(error);
        }
      }
       getData();
     },[id])
     const CartCtx=useContext(CartContext);
     function addProduct(){
      console.log("Product added to Cart");
        CartCtx.addProduct(currentProduct);
     }
    return (
        <div className='product-details'>
            
            <div className='product-details2'>
            <div className='product-image2'>
             <img src={currentProduct.image} alt={currentProduct.title}/>
             </div>
              <div className='product-info2'>
               <div className='product-category2'>
                 <h1>{currentProduct.category}</h1>
               </div>
              <div className='product-name'>
                 <span>{currentProduct.title} </span>
            </div>
              <div className='product-description'>
                     <span>{currentProduct.description}</span> 
                   
                    
              </div>
               <div className='product-price'>
                    <span> $ {currentProduct.price}</span>
               </div>
                <div className='product-rating'>
                   {currentProduct.rating && currentProduct.rating.rate}{<StarRateIcon/>}{currentProduct.rating && currentProduct.rating.count}
                </div>
                 <button style={buttonStyle} onClick={addProduct} >Add to Cart</button>
               </div>
            </div>
        </div>
    );
  }

export default Product;

const buttonStyle={
  marginTop:'1rem',
  height:'2rem',
  backgroundColor:'black',
  color:'white',
  borderRadius:'0.5rem'
}