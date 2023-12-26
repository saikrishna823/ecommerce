
import React from 'react';
import Header from './components/Header';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import Cart from './components/Cart';
import Product from './components/Product';
import Footer from './components/Footer';
function App() {
  return (
     <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/wishlist" element={<div>Wish List Page</div>}/>
          <Route path="/productDescription/product/:category/:id" element={<Product/>}/>
          <Route path="/*" element={<div>Error Page</div>}/>
        </Routes>
        <Footer/>
     </Router>
  );
}

export default App;
