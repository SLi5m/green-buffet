import React, { Component } from 'react'
import MenuCard from '../products/MenuCard';

export function Cart( {items, removeFromCart} ) {
    const item = () => {
    items.map((cartItems, index) =>
        <div key={index} >
            {cartItems}
        </div>
    )}
    return(
        <MenuCard item={item} click={removeFromCart} buttonText = {"Remove"} />
    )
}

export default Cart