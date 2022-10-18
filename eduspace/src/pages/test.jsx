import React from 'react'
import {collectionGroup, where, query} from 'firebase/firestore';
import { useEffect } from 'react';



function Test() {

  useEffect(() => {
    const ref = query(
      collectionGroup('sessions'),
      where("user", "==", 'xn6lJNGionVM7NucljpjCtXTWvI3')
    );
    }, [])


  return (
    <div>test</div>
  )
}

export default Test