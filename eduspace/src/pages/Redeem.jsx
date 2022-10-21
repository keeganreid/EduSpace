//Where you can spend points and redeem a voucher
import SideBar from '../components/SideBar';
import { users } from '../lib/firestore-collections';
import React, { useEffect, useState} from 'react';
import { getDocs, collection, updateDoc, doc, getDoc, addDoc } from 'firebase/firestore';
import { useAuth } from '../contexts/auth-context';
import { async } from '@firebase/util';




function Redeem() {

  const [userPoints, setUserPoints] = useState([]);
  const [vouchersState, setVouchers] = useState([]);
  const { currentUser } = useAuth();
  const [error, setError] = useState("");
  

  const getUserPoints = async (userID) => {
    const userRef = doc(users, userID);
    const docSnap = await getDoc(userRef);

    if (docSnap.exists()) {
      setUserPoints(docSnap.data().points); //getting user's points, so they can be checked if the user has enougn to redeem vouchers
    }
  }

  //getting the voucer ids that belong to the user
  async function getVoucherIDs(userId) {
    const qUserVouchers = collection(users, userId, "vouchers");
    const querySnapshot = await getDocs(qUserVouchers);
    return querySnapshot.docs
      .map(({ id }) => ({ id })); 
  }

 

  useEffect(() => {
    getUserPoints(currentUser.uid);
    async function loadVouchers(){
      const voucherIDArray = await getVoucherIDs(currentUser.uid);
      voucherIDArray.forEach(element => {
        setVouchers(element.id);
       })
    }
    loadVouchers();
    
  }, [currentUser.uid, vouchersState])

  async function updatePoints(userID, pointsRef) { //if a user clicks a voucher, they will first deduct 120 points if possible
    if (pointsRef >= 120) {
      setError("")
      setUserPoints(pointsRef - 120);
      let data = {
        points: userPoints - 120,
            }

      updateDoc(doc(users, userID), data);
      alert("You just redeemed a voucher worth 120 points  ");
      addVoucher(); //then we can add the voucher to the user's document
    }
    else {
      setError("You have insufficient points.")
    }
  }

  async function addVoucher(){
    const qUserVouchers = collection(users, currentUser.uid, "vouchers");
    let data = {};
    addDoc(qUserVouchers, data);
  }

  const firstImage = '../images/logo.png';

  let htmlCode = (<></>);

  // if (vouchersState.length !== 0 ){
  //    htmlCode = ( 
  //     vouchersState.map((element) => {
  //       <ul key= {element.id}>
  //         <li>{element.id}</li>
  //       </ul>
  //     })
  //    )
  // }

  return (

    <div>
      <SideBar />
      <h1 className='pageHeading'>Redeem Vouchers</h1>
      <br></br>
      <label>Available Points: {userPoints}</label>
      <h1>Vouchers</h1>
      <>{htmlCode}</>
      <br></br>
      <br></br>
      <div className="item">
        <button onClick={() => updatePoints(currentUser.uid, userPoints)}>
          <img src="
    https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp1CVEJgHQno_NSon0EGrKEQU9tq5A-IQTmg&usqp=CAU" />
          <span className="caption">Click to redeem the voucher with 120 points</span>
        </button>
        <label>{error}</label>
      </div>


    </div>

  )
}

export default Redeem