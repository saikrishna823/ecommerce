import React, { useContext } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import "../styles/Header.css"
import { CartContext } from '../context/cart-context';
function Header(props) {
    //const [isCartFilled,setIsCartFilled]=useState(false)
    const CartCtx=useContext(CartContext)
    return (
        <div className='header'>
          <div className='header-left'>
             <h3><Link to='/'><span>ShopIn</span></Link></h3>
          </div>
            <div className='header-right' >
              <Link to='/wishlist'><FavoriteIcon/></Link> 
              <Link to='/cart'><ShoppingCartIcon id={CartCtx.cart.length>0?"cart-item":""}/></Link> 
              <Link to='signIn'><AccountCircleIcon/></Link>  
            </div>
        </div>
    );
}

export default Header;