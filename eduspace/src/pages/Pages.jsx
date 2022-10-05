import React from 'react';
import Home from './Home';
import Login from './Login';
import {Routes, Route} from 'react-router-dom';
import Schedule from './Schedule';
import StartPage from './StartPage';

function Pages() {
  return (
    <Routes>
       <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/schedule' element={<Schedule/>}/>
        <Route path='/startPage' element={<StartPage/>}/>

    </Routes>
  )
}

export default Pages