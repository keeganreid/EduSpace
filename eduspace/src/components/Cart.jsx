import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';


export const Cart = () => {


  const [items,setitems] = useContext(CartContext);
  const totalPrice = Math.round(items.reduce((acc, curr) => acc + curr.price, 0));
  console.log(items);
  const listcart = items.map((item) =>
    <li key={item.id}>
      {item.name}
      {item.price}
      <button onClick={() => deleteitem(item.id)}>Delete from cart</button>
    </li>
  );
  function deleteitem(id) {
    setitems(items.filter((aha) => aha.id !== id))
    console.log("hello world")
    console.log(items)
  }



  return (

    //   <CartContext.Provider value={[item, setItem]}> 
    //   {props.children} 
    // </CartContext.Provider> 

    <div>
      <span className='itemsInCart'>items in cart : {items.length}</span>
      <br />
      <span className='totalPayable'>total price : {totalPrice}</span>

      <br />
      {listcart}

    </div>
  );
};