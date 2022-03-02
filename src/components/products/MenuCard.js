import React from 'react';
import AddToCart from './AddToCart.js';
import './MenuList.css';
// PushSubscriptionOptions
export function  MenuCard (props) {
    const menuItem = props.menuItem;
    const index = props.index;
    return (
        <div className='col'>
            <article key={ index } className="menu-item">
                <img src={ menuItem.img } alt={ menuItem.title } className='photo' />
                <div className='item-info'/*{cName}*/>
                    <header>
                        <h3>{ menuItem.index }</h3>
                        <h3 className='price'>{ menuItem.price }</h3>
                    </header>
                    <p className='item-text'>{  menuItem.desc }</p>
                    <div><AddToCart item={menuItem} itemIndex={index}  /></div>
                </div> 
            </article>
        </div>
    )
}

export default MenuCard
