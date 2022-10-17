import React, {useState} from 'react';

import { database } from '../lib/dataList';


export const CartContext = React.createContext(); 
 
export const CartProvider = (props) => { 
 const [cart, setItem] = React.useState(database); 

  return ( 
    <CartContext.Provider value={[cart, setItem]}> 
      {props.children} 
    </CartContext.Provider> 
  ) 
}