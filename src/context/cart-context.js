import { createContext, useState } from "react";

export const CartContext=createContext({
    cart:[],
    addProduct:()=>{},
    deleteProduct:()=>{},
    increaseQuantity:()=>{},
    decreaseQuantity:()=>{}
})

function CartContextProvider({children}){
    const [cartItems,setCartItems]=useState([]);
    function addProduct(product){
        const isExisting =!!(cartItems.find((item)=>item.id===product.id));
        if(!isExisting){
          setCartItems((prevItems)=>[product,...prevItems]);
         }
        else{
            increaseQuantity(product.id);
        }
    }
    function deleteProduct(id){
        const isExisting =!!(cartItems.find((item)=>item.id===id));
        if(isExisting)
         setCartItems((prevItems)=>prevItems.filter((product)=>product.id!==id));
    }
    function increaseQuantity(id) {
        const index = cartItems.findIndex((product) => product.id === id);
      
        if (index !== -1) {
          const updatedCartItems = [...cartItems];
          updatedCartItems[index] = {
            ...updatedCartItems[index],
            quantity: updatedCartItems[index].quantity + 1,
          };
          setCartItems(updatedCartItems);
        }
      }
      
    function decreaseQuantity(id){
        const product=cartItems.find((product)=>product.id===id);
        const quantity=product.quantity;
        if(quantity===1){
            deleteProduct(id)
        }
        else{
            const index = cartItems.findIndex((product) => product.id === id);
      
            if (index !== -1) {
              const updatedCartItems = [...cartItems];
              updatedCartItems[index] = {
                ...updatedCartItems[index],
                quantity: updatedCartItems[index].quantity - 1,
              };
              setCartItems(updatedCartItems);
            }
        }
      
       
    }
    const value={
        cart:cartItems,
        addProduct:addProduct,
        deleteProduct:deleteProduct,
        increaseQuantity:increaseQuantity,
        decreaseQuantity:decreaseQuantity
    }
    
       return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export default CartContextProvider;