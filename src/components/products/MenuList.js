import React from 'react';
import './MenuList.css';
import { MenuCard } from './MenuCard.js';


export function  MenuList ( {items, addToCart}) {
   
    return (
    <div>
        {items.map((item) => (
            <MenuCard item={item} addToCart={addToCart}/>
        )
        )}
    </div>)
}

export default MenuList
