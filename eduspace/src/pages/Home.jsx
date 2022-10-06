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
}

export default Home

