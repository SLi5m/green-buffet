import React from 'react';
import './MenuList.css';
import { MenuCard } from './MenuCard.js';
//syles 
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export function  MenuList ( {items, addToCart}) {

    return (
    <div>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
            {items.map((item, itemIndex) => (       
                <Grid item xs={4}>  <Item key={itemIndex}>
                        <MenuCard item={item} click={addToCart} buttonText={"Add To Cart"}/>
                    </Item>
                </Grid>))}
            </Grid>
        </Box>
    </div>)
}

export default MenuList