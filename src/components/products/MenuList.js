import React from 'react';
import './MenuList.css';
import { MenuCard } from './MenuCard.js';


export function  MenuList ( {items, addToCart}) {

    return (
    <div>
        {items.map((item, itemIndex) => (
            <div key={itemIndex}>
                <MenuCard item={item} click={addToCart} buttonText={"Add To Cart"}/>
            </div>
        )
        )}
    </div>)
}

export default MenuList