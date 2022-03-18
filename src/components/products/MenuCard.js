import React from 'react';
import './MenuList.css';
// PushSubscriptionOptions
export function  MenuCard ({item, click, buttonText}) {

    const handleClick =()=>{
        click(item)
    }
    
    return (
        <div className='col'>
            <article className="menu-item">
                <img src={ item.img } alt={ item.title } className='photo' />
                <div className='item-info'/*{cName}*/>
                    <header>
                        <h3>{ item.index }</h3>
                        <h3 className='price'>{ item.price }</h3>
                    </header>

                    <p className='item-text'>{  item.desc }</p>

                    {click && (
                    <div>
                        <button onClick={handleClick}>{buttonText}</button>
                    </div>
                    )}
                </div> 
            </article>
        </div>
    )
}

export default MenuCard
