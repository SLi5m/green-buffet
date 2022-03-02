import React from 'react';
import Navbar from './components/Navbar/Navbar';
// import { MenuList } from './components/products/MenuList';
import MenuList from './components/products/MenuList'
import './App.css';
import { menuItems } from "./components/products/data"

function App() {
  return (
    <div>
      <div className="App">
        <Navbar />
      </div>
      <div className="App">
        <MenuList item={menuItems} />
      </div>
    </div>
  ); 
}

export default App;
