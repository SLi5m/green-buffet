import React, { Component } from 'react'
import MenuCard from '../products/MenuCard';


// export function Cart( {items, removeFromCart} ) {
//     const item = () => {
//     items.map((cartItems, index) =>
//             <MenuCard item={cartItems} click={removeFromCart} buttonText = {"Remove"} />
//     )}
// }

const Cart = ({items, removeFromCart}) =>{

    return(
        <>
        {
            items.map((item,idx) =>{
                return(
                    <MenuCard index={idx} item={item} click={removeFromCart} buttonText = {"Remove"} />
                )
            })
        }
        </>
    )
}

export default Cart