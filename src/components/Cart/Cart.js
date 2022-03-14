import React, { Component } from 'react'

function Cart(props) {
    const items = props.items;
    const cartItems = items.map((item) =>
        <div value={item}> </div>
    );
    return(
        items.map((item, itemindex) => 
        <ul>
            <li>{item, itemindex}</li>     
        </ul>
    ))
}

export default Cart
