import React, { useState } from 'react';
import { Routes, Route, Link, Outlet } from "react-router-dom"
import Navbar from './components/Navbar/Navbar';
import { MenuList } from './components/products/MenuList';
import Cart from './components/Cart/Cart.js';
import './App.css';
import { menuItems } from "./components/products/data"

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [items,setItems] = useState(menuItems)

  const addToCart = (menuItem) => {
    const exists = cartItems.find((x) => x.id === menuItem.id);
    if (exists) {
      setCartItems(
        cartItems.map((x)=>
          x.id === menuItem.id ? { ...exists, qty: exists.qty + 1} : x
        )
      )
    } else {
      setCartItems([ ...cartItems, { ...menuItem, qty: 1}]);
    }
  };

  const removeFromCart = (menuItem) => {
    const exists = cartItems.find((x) => x.id === menuItem.id);
    if (exists.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== menuItem.id));
    } else {
      setCartItems(
        cartItems.map((x) => 
          x.id === menuItem.id ? { ...exists, qty: exists.qty - 1 } : x
        )
      )
    }
  }

  return (
    <div>
      <Navbar />
      
      <Routes>
          <Route path="/" element={<MenuList items={items} addToCart={addToCart} />} />

          <Route path="/Cart" element={<Cart items={items} addToCart={addToCart} />} />
      </Routes>
    </div>
  ); 
}

export default App;