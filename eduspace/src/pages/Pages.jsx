import React from 'react';
import Home from './Home';
import Login from './Login';
import Survey from './Survey';
import FunctionalitySurvey from '../components/FunctionalitySurvey';
import {Routes, Route} from 'react-router-dom';

function Pages() {
  return (
    <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/survey' element={<Survey/>}/>
        <Route exact path='/FunctionalitySurvey' element={<FunctionalitySurvey/>}/>
    </Routes>
  )
}

export default Pages