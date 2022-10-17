import React, { Component } from 'react';
import { render } from 'react-dom';
import '../index.css';
import { DataList } from '../lib/dataList';
import { Cart } from '../components/Cart';
import { CartProvider } from '../contexts/CartContext';


  const CartComponent = () => {
    return (
      <CartProvider>
        <div>
          <Cart />
          <DataList />
        </div>
      </CartProvider>
    )
  }
   render(<CartComponent />, document.getElementById('root'));
  
   export default CartComponent;
