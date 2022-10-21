//Where each new page is declared to switch to.
import React from 'react';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import CreateSession from './CreateSession';
import CartComponent from './CartIndex';
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
import EditProfile from './EditProfile';
import Survey from './Survey';
import FunctionalitySurvey from '../components/FunctionalitySurvey';
import OnlineResources from './OnlineResources';
import Quiz from './Quiz';
import Redeem from './Redeem';
import {AnimatePresence} from 'framer-motion';


function Pages() { //this page is used for routing
  const location = useLocation();
  return (
    // the routes are set in this page and this allows us to navigate between "pages"
    //the animate presence package provides motion to the pages, allowing for a smooth transition when changing pages

    //the pages making use of /: are indicating that they need to be called with a parameter, which has a value we will use to 
    //query data from firebase
    <AnimatePresence exitBeforeEnter> 
    <Routes location={location} key={location.pathname}> 
        <Route exact path='/home' element={<Home/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/signup' element={<SignUp/>}/>
        <Route exact path='/marketplace' element={<CartComponent/>}/>
        <Route exact path='/createsession' element={<CreateSession/>}/>
        <Route exact path='/profile' element={<ViewProfile/>}/>
        <Route exact path='/forum' element={<Forum/>}/>
        <Route exact path='/comment/:frmID' element={<CommentForum/>}/>
        <Route exact path='/' element={<Landing/>}/>
        <Route exact path='/chat/:chatID' element={<SessionChat/>}/>
        <Route exact path='/sessions' element={<Sessions/>}/>
        <Route exact path='/createprofile' element={<CreateProfile/>}/>
        <Route exact path='/profile' element={<ViewProfile/>}/>
        <Route exact path='/logout' element={<Logout/>}/>
        <Route exact path='/redeem' element={<Redeem/>}/>
        <Route exact path='/survey' element={<Survey/>}/>
        <Route exact path='/functionalitysurvey' element={<FunctionalitySurvey/>}/>
        <Route exact path='/onlineresources' element={<OnlineResources/>}/>
        <Route exact path='/editprofile' element={<EditProfile/>}/>
        <Route exact path='/generalquiz' element={<Quiz/>}/>
        <Route exact path='/logout' element={<Logout/>}/>
        <Route exact path='/addquestion' element={<AddQuestions/>}/>

    </Routes>
    </AnimatePresence>
  )
}

export default Pages