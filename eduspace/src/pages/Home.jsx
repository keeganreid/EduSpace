import React from 'react'
import { useAuth } from '../contexts/auth-context';


function Home() {
  const { currentUser} = useAuth();

  return (
    <div>{currentUser.uid}
    {currentUser.photoURL} {currentUser.displayName}
    <img src= {currentUser.photoURL} alt="pfp"/>
    </div>
  )
}

export default Home