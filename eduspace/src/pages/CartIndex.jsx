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
      <SideBar />
      <CartContext.Provider value={{items, setItems}} >
        <Cart />
        <DataList />
      </CartContext.Provider>
    </div>

  )
}

export default CartComponent;
