import React, { useContext } from 'react';
import { CartContext } from '../context/cart-context';
import CartComponent from './CartComponent';
import "../styles/cart.css"
function Cart({id}) {
    const CartCtx=useContext(CartContext)
    const totalSum=CartCtx.cart.reduce((prevSum,curSum)=>prevSum+((+curSum.price)*(+curSum.quantity)),0);
    console.log(totalSum)
    return (
        <div className='cart-main-container'>
        <div className='cart-container'>
        <div className='cart-header'>
          <h3 >Product Details</h3>
          <h3 style={{marginLeft:"60px"}}>Quantity</h3>
          <h3 style={{marginLeft:"20px"}}>Price</h3>
          <h3 style={{marginLeft:"10px"}}>Total</h3>
        </div>
  
        <div className='cart-items'>
          {CartCtx.cart.map((product) => (
             <CartComponent key={product.id} product={product}/>
          ))}
        </div>
      </div>
       <div className='cart-summary'>
            <h3 className='summary'>Order Summary</h3>
            <div className='cart-summary-container'>
            <div className='order-details'>
                <p>Items-{CartCtx.cart.length}</p>
                <p>${totalSum.toFixed(2)}</p>
            </div>
            <div className='shipping-details'>
                <h5>Shipping</h5>
                <p>Standard Shipping-$10.00</p>
            </div>
            <div className='promo-code'>
                <p> Promo Code</p>
                <input type='text' placeholder='Enter your code'/>
                <button style={{backgroundColor:"red",padding:"5px",color:"white",fontWeight:"bold"}}>Apply</button>
            </div>
            </div>
            <div className='final-cost'>
                <p>Total Cost</p>
                <p style={{fontSize:"larger"}}>${(totalSum+10.00).toFixed(2)}</p>
            </div>
            <button className='check-out' >checkout</button>
       </div>
      </div>
       
    );
}

export default Cart;