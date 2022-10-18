import React from 'react';
import { Tshirt } from './Tshirt';

export const dataList = () => {

  const database = [
    { name: "DB item 1", price: 10.99, id: 1 },
    { name: "DB item 2", price: 24.99, id: 2 },
    { name: "DB item 3", price: 18.99, id: 3 },
  ]

  return (
    <div className='itemsForSale'>
      {
        database.map(item => (
          <Tshirt name={item.name} price={item.price} key={item.id} />
        ))
      }
    </div>
  )
}