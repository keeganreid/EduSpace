import React from 'react'
import wave from '../images/wave.svg';
import logo from '../images/logo.png';
import sun from '../images/SUN.png';
import {NavLink} from 'react-router-dom';
import SideBar from '../components/SideBar';
import {useAuth} from '../contexts/auth-context';

function Home() {
  const {currentUser} = useAuth();
  return (
    
    <div>
      <SideBar/>
 I am not a Landing page!!!
    </div>
  )
}

export default Home