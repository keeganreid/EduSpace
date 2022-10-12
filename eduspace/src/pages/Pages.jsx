import React from 'react';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import {Routes, Route} from 'react-router-dom';
import Profile from './Profile';
import Forum from './Forum';
import { Chat, ChatRoom } from './ChatRoom';
//import Schedule from './Schedule';
//import StartPage from './StartPage';

function Pages() {
  return (
    <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/signup' element={<SignUp/>}/>
        <Route exact path='/profile' element={<Profile/>}/>
        <Route exact path='/forum' element={<Forum/>}/>
        <Route exact path='/chat' element={<ChatRoom/>}/>
    </Routes>
  )
}

export default Pages