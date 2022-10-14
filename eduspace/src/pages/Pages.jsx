import React from 'react';
import Home from './Home';
import Login from './Login';
<<<<<<< HEAD
import Survey from './Survey';
import FunctionalitySurvey from '../components/FunctionalitySurvey';
=======
import SignUp from './SignUp';
>>>>>>> 18dabe0aedb8e5b394c73c15b32bfb56205a8cb8
import {Routes, Route} from 'react-router-dom';
import Profile from './Profile';
import Forum from './Forum';
import CommentForum from './CommentForum';
import { Chat, ChatRoom } from './ChatRoom';
//import Schedule from './Schedule';
//import StartPage from './StartPage';

function Pages() {
  return (
    <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/login' element={<Login/>}/>
<<<<<<< HEAD
        <Route exact path='/survey' element={<Survey/>}/>
        <Route exact path='/FunctionalitySurvey' element={<FunctionalitySurvey/>}/>
=======
        <Route exact path='/signup' element={<SignUp/>}/>
        <Route exact path='/profile' element={<Profile/>}/>
        <Route exact path='/forum' element={<Forum/>}/>
        <Route exact path='/chat' element={<ChatRoom/>}/>
        <Route exact path='/comment/:frmID' element={<CommentForum/>}/>
>>>>>>> 18dabe0aedb8e5b394c73c15b32bfb56205a8cb8
    </Routes>
  )
}

export default Pages