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
      <SideBar />
      <CartContext.Provider value={{items, setItems}} >
        <Cart />
        <DataList />
      </CartContext.Provider>
    </div>

  )
}
//  render(<CartComponent />, document.getElementById('root'));
export default CartComponent;
