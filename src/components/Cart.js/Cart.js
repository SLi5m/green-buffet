import { values } from 'json-server-auth'
import React, { Component } from 'react'

function Cart(props) {
    const items = props.items;
    const cartItems = items.map((item) =>
        <div key={item.tostring()} value={item}> </div>
    );
    return(
        <ul>
            {cartItems}
        </ul>
    )
}

