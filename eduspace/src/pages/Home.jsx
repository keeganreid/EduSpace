
import React,{useState} from 'react'
import wave from '../images/wave.svg';
import logo from '../images/logo.png';
import sun from '../images/SUN.png';
import {NavLink} from 'react-router-dom';
import SideBar from '../components/SideBar';
import {useAuth} from '../contexts/auth-context';
import Calendar from '../components/Calendar';
import PointsPopup from '../components/PointsPopup';
import "../styles/Styles.css";

function Home() {

  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  return <div>
    <SideBar/>

    <div className='wrapper2'>
    {/* Calendar */}
    <div className='home1'>
      <main>
    <Calendar />
    </main>
    </div>

    {/* Pop up for Stoints*/}
    <div className='home2'>
    <p style={{fontSize:'20px', fontFamily:'sans-serif'}}>Earn rewards with Points</p>
    {isOpen && <PointsPopup
      content={<>
        <b  style={{'color':'#f2ecec'}}>Earn Rewards with Stoints</b>
        <p style={{'color':'#f2ecec'}}>The EduSpace app will award points to students for participating 
          in the application services. Students will gain stoints for their 
          participation in study sessions, quizzes, surveys, forums, 
          tutoring sessions and for uploading resources, which can later 
          be redeemed as vouchers to sponsorship companies.</p>
      </>}
      handleClose={togglePopup}
    />}
    <input
      type="button"
      value="Click here to learn more"
      onClick={togglePopup}
      className = 'quizbut'
    />
    </div>
    
  </div>
  </div>
}

export default Home