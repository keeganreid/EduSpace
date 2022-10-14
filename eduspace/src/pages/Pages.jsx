import React from 'react';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import Landing from './Landing';
import Checkout from './Checkout';
import Test from './test';
import Chat from './Chat';
import Sessions from './Sessions';
import {Routes, Route} from 'react-router-dom';

function Pages() {
  return (
    <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/signup' element={<SignUp/>}/>
        <Route exact path='/landing' element={<Landing/>}/>
        <Route exact path='/checkout' element={<Checkout/>}/>
        <Route exact path='/test' element={<Test/>}/>
        <Route exact path='/chat' element={<Chat/>}/>
        <Route exact path='/sessions' element={<Sessions/>}/>

    </Routes>
  )
}

export default Pages