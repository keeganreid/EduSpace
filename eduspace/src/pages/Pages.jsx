import React from 'react';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import Landing from './Landing';
import Checkout from './Checkout';
import {Routes, Route} from 'react-router-dom';

function Pages() {
  return (
    <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/signup' element={<SignUp/>}/>
        <Route exact path='/landing' element={<Landing/>}/>
        <Route exact path='/checkout' element={<Checkout/>}/>
    </Routes>
  )
}

export default Pages