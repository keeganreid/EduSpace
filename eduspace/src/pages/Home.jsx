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
}

export default Home