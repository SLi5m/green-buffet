import React, { useState } from "react";
import { menuItems } from './data.js'

export default function AddToCart(props) {
  const { id, title, img, desc, price } = props.item;
  const {itemIndex} = props
  const [cart, setCart] = useState([]);

  function removeItem(){
    // cartItems = cart.filter()
    // this.props.removeFromCart(id)
    cart.splice(itemIndex, 1);
  }
  
  return (
    <div className="App">
      {cart.length === 0 && <p>Cart: (empty)</p>}
      {cart.length > 0 && <p>Cart: {cart.toString()}</p>}
      <button
        onClick={() => {
            setCart([...cart, ` item ${id}`]);
        }}
      >
        Add to Cart ( {cart.length} )
      </button>
      <button
        onClick={removeItem}
      >
        Remove From Cart
      </button>
    </div>
  );
}