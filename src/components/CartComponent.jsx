import React, { useContext } from 'react';
import { CartContext } from '../context/cart-context';
import { calculateTotalPrice } from '../utils/helper';
function CartComponent({product}) {
    const CartCtx=useContext(CartContext)
    return (
        // <div className='cart-products'>
        //     <div className='cartproduct-image'>
        //         <div>
        //             <span>Product</span>
        //         </div>
        //          <div>
        //             <div>
        //          <img src={product.image} alt={product.title} height={200} width={200}/> 
            
        //       <div className='cartproduct-details'>
        //           <div className='cartproduct-title'>
        //                   {product.title}
        //           </div>
        //           <div className='cartproduct-buttons'>
        //            <button onClick={()=>CartCtx.increaseQuantity(product.id)}>+</button>
        //            <span>{product.quantity}</span>
        //            <button onClick={()=>CartCtx.decreaseQuantity(product.id)}>-</button>
        //           </div>
        //           <div className='cart-subtotal'>
        //              <span>{calculateTotalPrice(+product.price,+product.quantity)}</span>
        //           </div>
        //              <button className='delete-button' onClick={()=>CartCtx.deleteProduct(product.id)}> Delete</button>
        //      </div> 
             
    
//         <table>
//             <tr>
//             <th>Product Details</th>
//             <th>Quantity</th>
//             <th>Price</th>
//             <th>Total</th>
//             </tr>
//            {
//            CartCtx.cart.map((product)=><tbody key={product.id}
//            ><tr>
//                 <td>
//                     <img src={product.image} alt={product.title} height={200} width={200}/> 
//                     <div>
//                         <p>{product.title}</p>
//                         <p>{product.category}</p>
//                         <button className='delete-button' onClick={()=>CartCtx.deleteProduct(product.id)}>Remove</button>
//                     </div>
//                 </td>
//                 <td>
//                    <button onClick={()=>CartCtx.increaseQuantity(product.id)}>+</button>
//                    <span>{product.quantity}</span>
//                   <button onClick={()=>CartCtx.decreaseQuantity(product.id)}>-</button>  
//                 </td>
//                 <td>
//                 <span>${product.price}</span>
//                 </td>
//                 <td>
//                 <span>{calculateTotalPrice(+product.price,+product.quantity)}</span>
//                 </td>
//             </tr>
//             </tbody>
           
//            ) 
// }
//         </table>
<>
<p style={{textAlign:"center",fontSize:"1.5rem"}}>{product.title}</p>
<div className='cart-item'>
    
<div className='product-desc'>
<img src={product.image} alt={product.title} width={100} height={100}/>
  
  <div className='product-info'>
    <p>{product.category}</p>
    <button className='delete-button' onClick={() => CartCtx.deleteProduct(product.id)}>
      Remove
    </button>
  </div>
</div>

<div className='quantity'>
  <button onClick={() =>CartCtx.increaseQuantity(product.id)}>+</button>
  <p style={{fontSize:"larger"}}>{product.quantity}</p>
  <button onClick={() => CartCtx.decreaseQuantity(product.id)}>-</button>
</div>

<div className='price'>
  <span style={{fontWeight:"bold"}}>${product.price}</span>
</div>

<div className='total'>
  <span style={{fontWeight:"bold"}}>${calculateTotalPrice(+product.price ,+product.quantity)}</span>
</div>
</div>
</>
);
};

export default CartComponent;