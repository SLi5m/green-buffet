import React from 'react';
import { menuItems } from './data.js';
import AddToCart from './AddToCart.js';
import './MenuList.css';
import { MenuCard } from './MenuCard.js';
// PushSubscriptionOptions
export function  MenuList (props) {
    // console.log(props.item, 'items')
    // const { id, title, img, desc, price } = props.item;
    // []
    return (
    <div>
        {menuItems.map((menuItem, index) => (
            <MenuCard menuItem={menuItem} index={index}/>
        )
        )}
    </div>)
}

export default MenuList
