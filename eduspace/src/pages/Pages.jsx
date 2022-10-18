import React from 'react';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import {Routes, Route,useLocation} from 'react-router-dom';
import Profile from './Profile';
import Forum from './Forum';
import CommentForum from './CommentForum';
import { Chat, ChatRoom } from './ChatRoom';
//import Schedule from './Schedule';
//import StartPage from './StartPage';
import Landing from './Landing';
import Checkout from './Checkout';
import Test from './test';
import SessionChat from './SessionChat';
import Sessions from './Sessions';
import CreateProfile from './CreateProfile';
import ViewProfile from './ViewProfile';
//import {Routes, Route, useLocation} from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';

function Pages() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
    <Routes location={location} key={location.pathname}>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/signup' element={<SignUp/>}/>
        <Route exact path='/profile' element={<Profile/>}/>
        <Route exact path='/forum' element={<Forum/>}/>
        <Route exact path='/chat' element={<ChatRoom/>}/>
        <Route exact path='/comment/:frmID' element={<CommentForum/>}/>
        <Route exact path='/landing' element={<Landing/>}/>
        <Route exact path='/checkout' element={<Checkout/>}/>
        <Route exact path='/test' element={<Test/>}/>
        <Route exact path='/chat/:chatID' element={<SessionChat/>}/>
        <Route exact path='/sessions' element={<Sessions/>}/>
        <Route exact path='/createprofile' element={<CreateProfile/>}/>
        <Route exact path='/profile' element={<ViewProfile/>}/>
    </Routes>
    </AnimatePresence>
  )
}

export default Pages