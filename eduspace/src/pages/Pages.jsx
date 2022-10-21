import React from 'react';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import {Routes, Route,useLocation} from 'react-router-dom';
import Forum from './Forum';
import CommentForum from './CommentForum';
import Landing from './Landing';
import SessionChat from './SessionChat';
import Sessions from './Sessions';
import CreateProfile from './CreateProfile';
import ViewProfile from './ViewProfile';
import Logout from './Logout';
import AddQuestions from '../components/AddQuestions';
import {AnimatePresence} from 'framer-motion';
import Redeem from './Redeem';

import Survey from './Survey';
import FunctionalitySurvey from '../components/FunctionalitySurvey';
import OnlineResources from './OnlineResources';
import Quiz from './Quiz';
import AddUser from '../components/addUser';




function Pages() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
    <Routes location={location} key={location.pathname}>
        <Route exact path='/home' element={<Home/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/signup' element={<SignUp/>}/>
        <Route exact path='/forum' element={<Forum/>}/>
        <Route exact path='/comment/:frmID' element={<CommentForum/>}/>
        <Route exact path='/' element={<Landing/>}/>
        <Route exact path='/chat/:chatID' element={<SessionChat/>}/>
        <Route exact path='/sessions' element={<Sessions/>}/>
        <Route exact path='/createprofile' element={<CreateProfile/>}/>
        <Route exact path='/profile' element={<ViewProfile/>}/>
        <Route exact path='/generalquiz' element={<Quiz/>}/>
        <Route exact path='/logout' element={<Logout/>}/>
        <Route exact path='/addquestion' element={<AddQuestions/>}/>

    </Routes>
    </AnimatePresence>
  )
}

export default Pages