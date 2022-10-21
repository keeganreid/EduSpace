import React, { Component } from 'react';
// import { render } from 'react-dom';
import '../index.css';
import { cartdb, database, DataList } from '../lib/dataList';
import { Cart } from '../components/Cart';
import { CartContext } from '../contexts/CartContext';
//import Checkout from './Checkout';

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
//  render(<CartComponent />, document.getElementById('root'));
export default CartComponent;
