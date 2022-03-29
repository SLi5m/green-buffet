import React from 'react';
import './MenuList.css';

import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';



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
