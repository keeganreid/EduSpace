//Where each new page is declared to switch to.
import React from 'react';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import CreateSession from './CreateSession';
import CartComponent from '../pages/CartIndex';
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
import PaymentSuccesful from './PaymentSuccesful';
import Logout from './Logout';
//import {Routes, Route, useLocation} from 'react-router-dom';
import EditProfile from './EditProfile';
import {AnimatePresence} from 'framer-motion';
import Redeem from './Redeem';

import Survey from './Survey';
import FunctionalitySurvey from '../components/FunctionalitySurvey';
import OnlineResources from './OnlineResources';
import CreateQuiz from './CreateQuiz';
// AddQuestions from './AddQuestions';






function Pages() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
    <Routes location={location} key={location.pathname}>
        <Route exact path='/home' element={<Home/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/signup' element={<SignUp/>}/>
        <Route exact path='/marketplace' element={<CartComponent/>}/>
        <Route exact path='/createsession' element={<CreateSession/>}/>
        <Route exact path='/profile' element={<ViewProfile/>}/>
        <Route exact path='/forum' element={<Forum/>}/>
        <Route exact path='/chat' element={<ChatRoom/>}/>
        <Route exact path='/comment/:frmID' element={<CommentForum/>}/>
        <Route exact path='/' element={<Landing/>}/>
        <Route exact path='/checkout' element={<Checkout/>}/>
        <Route exact path='/test' element={<Test/>}/>
        <Route exact path='/chat/:chatID' element={<SessionChat/>}/>
        <Route exact path='/sessions' element={<Sessions/>}/>
        <Route exact path='/createprofile' element={<CreateProfile/>}/>
        <Route exact path='/profile' element={<ViewProfile/>}/>
        <Route exact path='/payment/:success' element={<PaymentSuccesful/>}/>
        <Route exact path='/logout' element={<Logout/>}/>
        <Route exact path='/redeem' element={<Redeem/>}/>
    
        {/*Isa's code*/}
        <Route exact path='/survey' element={<Survey/>}/>
        <Route exact path='/functionalitysurvey' element={<FunctionalitySurvey/>}/>
        <Route exact path='/onlineresources' element={<OnlineResources/>}/>
        <Route exact path='/createquiz' element={<CreateQuiz/>}/>
        {/*<Route exact path='/addquestions' element={<AddQuestions/>}/>*/}
        {/* end of Isa's code */}
    
    
        <Route exact path='/editprofile' element={<EditProfile/>}/>
    </Routes>
    </AnimatePresence>
  )
}

export default Pages