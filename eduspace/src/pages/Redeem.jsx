//Where you can spend points and redeem a voucher
import SideBar from '../components/SideBar';
import { users } from '../lib/firestore-collections';
import React, { useEffect, useState,useRef } from 'react';
import { forums } from '../lib/firestore-collections';
import { getDocs, onSnapshot, query,collection, updateDoc, doc, getDoc, FieldValue} from 'firebase/firestore';
import {useAuth} from '../contexts/auth-context';
function Redeem() {

    const [userPoints, setUserPoints] = useState([]);
    const {currentUser} = useAuth();
    const [error, setError] = useState("");

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

        async function updatePoints (userID, pointsRef){
            //const increment =firebase.firestore.FieldValue.increment(1);
           if (pointsRef >= 120){
            setError("")
            setUserPoints(pointsRef - 120);
            let data = {
              points: userPoints - 120
            }
            
            updateDoc(doc(users, userID), data);
            alert("Just redeemed a voucher worth 120 points  " );
          
          }
          else{
            setError("You have insufficient points.")
          }
        }

  const firstImage='../images/logo.png';

  return (

    
    <div>
    <SideBar/>
    <label>Amounts of points available {userPoints}</label>
    <br></br>
    <div className="item">
    <button onClick={ () => updatePoints(currentUser.uid, userPoints)}>
    <img src="
    https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp1CVEJgHQno_NSon0EGrKEQU9tq5A-IQTmg&usqp=CAU" />
    <span className="caption">Click to spend 120 points</span>
    </button>
    <label>{error}</label>
    </div>


    </div>
    
  )
}

export default Redeem