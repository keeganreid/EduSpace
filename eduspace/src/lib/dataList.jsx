import React from 'react';

import { useEffect } from 'react';

import { useState } from 'react';

import { useContext } from 'react';

import { CartContext } from '../contexts/CartContext';

import { allSessions } from './firestore-collections';

import { query, where, getDocs } from 'firebase/firestore';
import { useAuth } from '../contexts/auth-context';


export const cartdb = []


async function getSessions() {

  const qSessionData = query(allSessions, where('sessionDate', ">=", new Date().toISOString()));  

  const querySnapshot = await getDocs(qSessionData);

  return querySnapshot.docs

    .map((doc) => ({

      data: doc.data(),

      id: doc.id

    }));

}

const database = [];

//Using CartContext, items and setItems' contexts are used to create const's to update the session later on

export const DataList = () => {

  const { items, setItems } = useContext(CartContext)

  const [sessions, setSessions] = useState([]);

  const {currentUser} = useAuth();




  useEffect(

    () => {

      getSessions().then(

        (sessionData) => {

            setSessions(sessionData);

        }

      );

    }, [])

//Here the addToCart const receives props in the form of item from the user, and uses 'some'to test whether the comparison between the item's id and the prop's id exists in items
//if it does the item cannot be added to the cart, if it is not then the components of it is added to 'session', which is passed through setItems; the session is added to the currentState   

  const addToCart = (props) => {

    if (items.some((item) => item.id === props.id)) {

    } else {

      const session = {
        name: props.data.module, price: props.data.price, photoURL: props.data.photoURL,

        sessionDate: props.data.sessionDate, location: props.data.location, tutor: props.data.tutor, id: props.id
      };

      setItems(currentState => [...currentState, session]);

      console.log(items)

    }


  }

  return (

    <div className='itemsForSale' style={{ 'height': '12em', 'width': '20em' }}>

      {

        sessions.map(item => (
          item.data.tutor !== currentUser.displayName ? 

          <div className='cartTiles'>

            <h1 style={{ 'fontSize': '1.5em' }}>{item.data.module}</h1>

            <img className='marketplaceImages' src={item.data.photoURL} style={{ 'height': '8em', 'width': '8em' }} />

            <h2 style={{ 'fontSize': '1.25em', 'marginTop': '1em' }}>Tutor: {item.data.tutor}</h2>

            <h3 style={{ 'display': 'flex', 'align-items': 'left', 'justify-content': 'left', 'marginLeft': '1em' }}>Location: {item.data.location}</h3>

            <h3 style={{ 'display': 'flex', 'align-items': 'left', 'justify-content': 'left', 'marginLeft': '1em' }}>Date: {new Date(item.data.sessionDate).toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric" })}</h3>

            <h3 style={{ 'display': 'flex', 'align-items': 'left', 'justify-content': 'left', 'marginLeft': '1em' }}>Time: {new Date(item.data.sessionDate).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</h3>



            <div style={{ 'display': 'flex', 'align-items': 'left', 'justify-content': 'left', 'marginLeft': '1em' }}>

              <h3>Price: R {item.data.price} </h3>  <button className='addToCart' onClick={() => addToCart(item)}>Add to cart</button>

            </div>

            <hr />

          </div>

        : <></>))

      }

    </div>

  )

}; 
