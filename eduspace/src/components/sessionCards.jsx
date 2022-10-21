import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
// import decrTotalPrice from '../Cart';
import { useCart } from "react-use-cart";
import { database } from '../lib/dataList';


export const Session = (props) => {
  const [cart, setCart] = useContext(CartContext);

  const addToCart = () => {
    const session = { name: props.name, price: props.price };
    setCart(currentState => [...currentState, session]);
  }
  return (
    <div>
      <h2>{props.name}</h2>
      <h4>{props.price}</h4>
      <button onClick={addToCart}>Add to cart</button>
      <hr />
    </div>
  )
}
