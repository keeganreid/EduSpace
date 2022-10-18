import React from 'react'
import wave from '../images/wave.svg';
import logo from '../images/logo.png';
import sun from '../images/SUN.png';
import {NavLink} from 'react-router-dom';

function Landing() {
  return (
    <div>
      <section className='landingHeading'>
        <label>The ultimate space for students!</label>
      </section>
      <section>
        <img src={logo} alt='logo' className='logoImg' />
        <div className='landingBottom'>
        <label style={{"font-size": "0.8em", "margin-left": "10px"}}>All rights reserved &copy; 2022</label>
        <img src={sun} alt='Stellenbosch University logo' className='logoImg' />
        </div>
        <img src={wave} alt='wave-background' className='spacer' style={{'overflow': 'hidden', 'width':'100vw'}} />       
      </section>

      <section>
        <NavLink to='/signup'><button className='landingButton'>Sign up for free</button></NavLink>
        <br></br>
        <br></br>
        <NavLink to='/login'><button className='landingButton2'>Login</button></NavLink>
      </section>
    </div>
  )
}

export default Landing