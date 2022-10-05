import React from 'react';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import {Routes, Route} from 'react-router-dom';
//import Schedule from './Schedule';
//import StartPage from './StartPage';

function Pages() {
  return (
    <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/signup' element={<SignUp/>}/>
    </Routes>
  )
}

export default Pages