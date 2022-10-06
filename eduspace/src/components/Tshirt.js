// import React, { useContext } from 'react';
// import { CartContext } from './CartContext';

// export const Tshirt = (props) => {
//   const [cart, setCart] = useContext(CartContext);

//   const addToCart = () => {
//     const tshirt = { name: props.name, price: props.price };
//     setCart(currentState => [...currentState, tshirt]);
//   }
  
//   return (
//     <div>
//       <h2>{props.name}</h2>
//       <h4 className='itemPrice'>{props.price}</h4>
//       <button className='addButton' onClick={addToCart}>Add to cart</button>
//       <hr />
//     </div>
//   )
// }