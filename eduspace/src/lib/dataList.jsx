import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { allSessions } from './firestore-collections';
import {query, where, getDocs} from 'firebase/firestore';



export const cartdb = []

async function getSessions(){
  const qSessionData = query(allSessions, where('sessionDate', ">=", new Date().toISOString()));
  const querySnapshot = await getDocs(qSessionData);
  return querySnapshot.docs
    .map((doc) => ({
      data: doc.data(),
      id: doc.id
    })); 
}


 const database = [];
  // {
  //   name: "DB item 1",
  //   price: 10.99,
  //   id: 1
  // },
  // {
  //   name: "DB item 2",
  //   price: 24.99,
  //   id: 2
  // },
  // {
  //   name: "DB item 3",
  //   price: 18.99,
  //   id: 3
  // },

export const DataList = () => {
  const { items, setItems } = useContext(CartContext)
  const [sessions, setSessions] = useState([]);

  useEffect(
    () => {
      console.log(getSessions());
      getSessions().then(
        (sessionData) =>{
          setSessions(sessionData);
        }
      );
      // sessions.map((session) =>{
      //   database.push(session);
      // })
    },[])

  // <h1 className= "headerMarketplace">Study session booking</h1>

  const addToCart = (props) => {

    if (items.some((item) => item.id === props.id)) {

    } else {
      const session = { name: props.data.module, price: props.data.price, photoURL: props.data.photoURL,
         sessionDate: props.data.sessionDate, location: props.data.location, tutor: props.data.tutor, id: props.id };
      setItems(currentState => [...currentState, session]);
      console.log(items)
    }


  }

  return (
    <div className='itemsForSale'>
      {
        sessions.map(item => (
          <div>
            <h1>{item.data.tutor}</h1>
            <img src= {item.data.photoURL}/>
            <h2>{item.data.module}</h2>
            <h3>{item.data.location}</h3>
            <h2>{new Date(item.data.sessionDate).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) }</h2>
            <h2>{new Date(item.data.sessionDate).toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'})}</h2>
            <h4>R {item.data.price}</h4>
            <button onClick={() => addToCart(item)}>Add to cart</button>
            <hr />
          </div>
        ))
      }
    </div>
  )
};