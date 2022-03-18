import React, { useState } from 'react';
import { Routes, Route, Link, Outlet } from "react-router-dom"
import Navbar from './components/Navbar/Navbar';
import { MenuList } from './components/products/MenuList';
import Cart from './components/Cart/Cart.js';
import './App.css';
import { menuItems } from "./components/products/data"

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [items] = useState(menuItems)

  const addToCart = (menuItem) => {
    const exists = cartItems.find((x) => x.id === menuItem.id);
    console.log("í am called")
    if (exists) { 
      // if exists, update item count
      setCartItems([...cartItems, menuItem])
      console.log(cartItems)
    
    } else {
      // if not, add item, with it, add a property to keep count of the item
      setCartItems([ ...cartItems, menuItem]);
      // console.log("This is  the else statement")
    }
  };

  const removeFromCart = (menuItem) => {
    console.log('i am item')
    console.log(cartItems.find(x => x.id === menuItem.id), 'item')
    const item = cartItems.find(x => x.id === menuItem.id);
    if (item.qty === 1) {
      setCartItems(cartItems.filter(x => x.id !== menuItem.id));
    } else {
      setCartItems(
        cartItems.map((x) => 
          x.id === menuItem.id ? { ...item, qty: item.qty - 1 } : x
        )
      )
    }
  }
  return (
    <div>
      <Navbar />
      
      <Routes>
          <Route path="/" element={<MenuList items={items} addToCart={addToCart} />} />

          <Route path="/cart" element={<Cart items={items} removeFromCart={removeFromCart}
          buttonText={"Remove From Cart"} />} />
      </Routes>
    </div>
  ); 
}

export default App;