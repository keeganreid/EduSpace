import React, {useContext} from 'react';
import {CartContext} from './CartContexts';

export const Cart = () => {
  const [cart] = useContext(CartContext);
  const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);
  console.log(cart);

  return (
    <div>
      <span className='itemsInCart'>items in cart : {cart.length}</span>
      <br />
      <span className='totalPayable'>total price : {totalPrice}</span>
      <br/>
      {cart.map((item )=> 
      (<h6 className= 'itemList'>
        {item.name} - {item.price}
      </h6>
      ))}
    </div>
  );
};