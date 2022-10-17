import React from 'react';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import CartComponent from '../pages/CartIndex'; 

import {Routes, Route} from 'react-router-dom';

function Pages() {
  return (
    <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/signup' element={<SignUp/>}/>
        <Route exact path='/cartindex' element={<CartComponent/>}/>
    </Routes>
  )
}

export default Pages