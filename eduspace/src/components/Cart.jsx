import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';


export const Cart = () => {


  const [item] = useContext(CartContext);
  const totalPrice = Math.round(item.reduce((acc, curr) => acc + curr.price, 0));
  console.log(item);

  const deleteItem = (index) => () =>
    sessionStorage.setItem((item) => item.filter((_, i) => i !== index));


  return (

    //   <CartContext.Provider value={[item, setItem]}> 
    //   {props.children} 
    // </CartContext.Provider> 

    <div>
      <span className='itemsInCart'>items in cart : {item.length}</span>
      <br />
      <span className='totalPayable'>total price : {totalPrice}</span>

      <br />
      {item.map((item, index) => {

        return (
          <div key={index} className='itemList'>

            {item.name} - {item.price}

            <button onClick={deleteItem(index)}>delete</button>
          </div>
        );
      })}
    </div>
  );
};