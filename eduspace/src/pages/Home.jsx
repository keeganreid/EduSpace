<<<<<<< HEAD
import React, { useState } from 'react'
import Calendar from '../components/Calendar';
import PointsPopup from '../components/PointsPopup';
import "../styles/Styles.css";

function Home() {

  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  return <div>

    {/* Calendar */}
    <Calendar />

    {/* Pop up for Stoints*/}
    <div class="boxed">
    <p>Earn rewards with Stoints</p>
    {isOpen && <PointsPopup
      content={<>
        <b>Earn Rewards with Stoints</b>
        <p>The EduSpace app will award points to students for participating 
          in the application services. Students will gain stoints for their 
          participation in study sessions, quizzes, surveys, forums, 
          tutoring sessions and for uploading resources, which can later 
          be redeemed as vouchers to sponsorship companies.</p>
        <button>Test button</button>
      </>}
      handleClose={togglePopup}
    />}
    <input
      type="button"
      value="Click here to learn more"
      onClick={togglePopup}
    />
    </div>
    {/* Pop up for Toints*/}
    <div class="boxed2">
    <p>Earn rewards with Toints</p>
    {isOpen && <PointsPopup
      content={<>
        <b>Earn Rewards with Toints</b>
        <p>The same system will be implemented for students when they participate in the 
          quizzes and host a tutorig session, they in turn earn toints. 
          Toints are not redeemable, but are a status ranking in the application that allow 
          a student to be verified and become a tutor.</p>
        <button>Test button</button>
      </>}
      handleClose={togglePopup}
    />}
    <input
      type="button"
      value="Click here to learn more"
      onClick={togglePopup}
    />
    </div>
  </div>
=======
import React from 'react';
import {NavLink} from 'react-router-dom';
import '../styles/Styles.css';

function Home() {
  return (
    <div /*id="centerwrap"*/> 
      {/*<img src={process.env.PUBLIC_URL + '/Banner3.jpg'} className='banner3'/>*/}
      <img src={process.env.PUBLIC_URL + '/SUN_logo.png'}width="200" />
      <h2>Welcome to EduSpace</h2>
      {/*<h1>EduSpace</h1>
      <h2>Please use a button to Login or Sign Up</h2>*/} 
      {/* <input id="textfield" name="textfield" type="text" placeholder="Company/Sponsor" />
    <p></p>
    <input id="textfield" name="textfield" type="text" placeholder="Email" />
    <p></p>
    <input id="textfield" name="textfield" type="text" placeholder="Password" />
    <p></p> 
    USED TO MAKE A TEXT OX WITH WORDS WRITTEN IN IT*/} 
    <NavLink to='/Login' ><button id ='centerwrap' className='button1'>Login</button></NavLink>
    <p></p>

    <NavLink to='/SignUp' > <button id ='centerwrap' className='button2'>Sign Up</button></NavLink>
    </div>
  )
>>>>>>> 18dabe0aedb8e5b394c73c15b32bfb56205a8cb8
}

export default Home

