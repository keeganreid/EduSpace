import SideBar from '../components/SideBar';
import { users } from '../lib/firestore-collections';
import React, { useEffect, useState,useRef } from 'react';
import { getDocs, onSnapshot, query,collection, updateDoc, doc, getDoc, FieldValue} from 'firebase/firestore';
import {useAuth} from '../contexts/auth-context';
import {useNavigate} from 'react-router-dom';

function AddStoint() {


  const [userPoints, setUserPoints] = useState([]);
  const {currentUser} = useAuth();
  const [complete, setComplete] = useState(false);
  const navigate = useNavigate();

  const getUserPoints = async(userID) => {
      const userRef = doc(users, userID);
      const docSnap = await getDoc(userRef);
    
      if (docSnap.exists()){
          setUserPoints(docSnap.data().points);
      }
  }
  useEffect(() => {
    getUserPoints(currentUser.uid)
}, [currentUser.uid])


    // Redeeming Stoint

    async function increaseStointHandler(userID, pointsRef) {
     
          /*Adding code for a user to get points */
          setComplete(true);
          setUserPoints(pointsRef + 5);
          let data = {
            points: userPoints + 5
          }
          
          await updateDoc(doc(users, userID), data);

          navigate('/home');
        
        /*done with it*/
    }

    return(
      <>
      <br></br> <br></br>
        <button onClick={() => increaseStointHandler(currentUser.uid, userPoints)} disabled = {complete} className='button1'>Finish</button>
      </>
    )
}

export default AddStoint

