import React from 'react'
import wave from '../images/wave.svg';
import logo from '../images/logo.png';
import sun from '../images/SUN.png';
import {Navigate, NavLink, useNavigate} from 'react-router-dom';
import '../styles/Styles.css';
import {useAuth} from '../contexts/auth-context';

const Logout = () => {
    const {logout} = useAuth();
    const navigate = useNavigate();

    async function handleLogout(){
        try{
        await logout();
        navigate('/');
        }
        catch{
            
        }
    }


  return (
    
    <div>
    
      <section className='landingHeading'>
        <label>Are you sure you want to logout??</label>
      </section>
      <section>
        <img src={logo} alt='logo' className='logoImg' />
        <div className='landingBottom'>
        <label style={{"fontSize": "0.8em", "marginLeft": "10px"}}>All rights reserved &copy; 2022</label>
        <img src={sun} alt='Stellenbosch University logo' className='logoImg' />
        </div>
        <img src={wave} alt='wave-background' className='spacer' style={{'overflow': 'hidden', 'width':'100vw'}} />       
      </section>

      <section>
        <button className='landingButton' onClick={handleLogout}>Yes, Logout :(</button>
        <br></br>
        <br></br>
        <NavLink to='/home'><button className='landingButton2'>No, stay!</button></NavLink>
      </section>
    </div>
  )
}

export default Logout