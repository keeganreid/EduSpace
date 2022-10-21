import React from 'react';
import '../index.css';
import { cartdb, DataList } from '../lib/dataList';
import { Cart } from '../components/Cart';
import { CartContext } from '../contexts/CartContext';

import SideBar from '../components/SideBar';
import { useState } from 'react';

const CartComponent = () => {
  const [items, setItems] = useState(cartdb)
  
  return (


    <div>
      <SideBar />   //The sidebar is declared
      <CartContext.Provider value={{items, setItems}} > //Contex is called and the default function and will be able to use the function from this page
        <Cart />    //the cart will be displayed from the components folder
        <DataList />  //The data willl be displayed on the same page from the componets 
      </CartContext.Provider> 
    </div>

  )
}

export default CartComponent;
